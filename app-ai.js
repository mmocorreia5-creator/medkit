/* ============================================================
   MedKit — Laudo de exames com IA
   Provedores, em ordem de preferência:
     1. "claude"  — dentro do Claude (artefato), via claude.use('sample')
     2. "proxy"   — Edge Function do Supabase (APP_CFG.aiEndpoint), que
                    guarda a chave do Gemini no servidor e exige login
     3. "key"     — chave gratuita do Google AI Studio colada pelo médico
   ============================================================ */
(function(){
const APP=window.APP_CFG||{};
const KEY_LS='mek-gemini-key';
let exFiles=[],exCtl=null,exSample=null,exLast='';
const $=id=>document.getElementById(id);

function ownKey(){try{return localStorage.getItem(KEY_LS)||''}catch(e){return ''}}
function provider(){
  if(exSample)return 'claude';
  if(APP.aiEndpoint)return 'proxy';
  if(APP.allowOwnKey!==false&&ownKey())return 'key';
  return null}
function showProv(){const p=provider(),el=$('ex-prov');if(!el)return;
  const txt={claude:'IA: Claude (pela sua conta no Claude)',proxy:'IA: Gemini via servidor do MedKit',key:'IA: Gemini com a sua chave (Google AI Studio)'}[p];
  el.textContent=txt||'IA não configurada — adicione sua chave gratuita em Minha conta › Laudo com IA';el.classList.toggle('ok',!!p);$('ex-run').disabled=!p}
window.aiProviderLabel=()=>{const p=provider();return {claude:'Claude (dentro do Claude)',proxy:'Gemini via servidor — pronto',key:'Gemini com chave própria — pronto'}[p]||'Não configurada'};
window.aiRefresh=showProv;

(async()=>{try{if(window.claude&&claude.use)exSample=await claude.use('sample')}catch(e){exSample=null}
  if(exSample){try{const l=await exSample.limits();if(!l.images){$('ex-img').hidden=true}}catch(e){}}
  showProv()})();

/* ---- arquivos: imagens (reduzidas) e PDF ---- */
$('ex-img').onchange=()=>{exFiles=Array.from($('ex-img').files||[]).slice(0,4);$('ex-thumbs').innerHTML='';
  exFiles.forEach(fl=>{if(fl.type==='application/pdf'){const d=document.createElement('span');d.className='pdf';d.textContent='PDF';$('ex-thumbs').appendChild(d)}else{const im=document.createElement('img');im.src=URL.createObjectURL(fl);im.alt='';$('ex-thumbs').appendChild(im)}})};
function fileToB64(fl){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(',')[1]);r.onerror=rej;r.readAsDataURL(fl)})}
async function shrink(fl,max=1600){if(fl.type==='application/pdf')return {mime:'application/pdf',data:await fileToB64(fl)};
  const url=URL.createObjectURL(fl);const img=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=url});
  const k=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*k);c.height=Math.round(img.height*k);
  c.getContext('2d').drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(url);
  return {mime:'image/jpeg',data:c.toDataURL('image/jpeg',.88).split(',')[1]}}

/* ---- prompt ---- */
function buildPrompt(type,ctx,texto,mode,nfiles){
  const sys=`Você é um médico especialista que auxilia outro médico. Exame: ${type}. ${nfiles?`Analise o(s) ${nfiles} arquivo(s) anexado(s) de forma sistemática (ECG: ritmo, FC, eixo, PR/QRS/QTc, onda P, ST e T por derivação; radiografia de tórax: técnica, partes moles/ossos, mediastino, área cardíaca, hilos, parênquima por zonas, seios costofrênicos — consolidação, broncograma, derrame, pneumotórax, atelectasia, infiltrado intersticial; TC/RM: janela, achados por órgão/compartimento; USG: órgão, ecogenicidade, medidas, Doppler, líquido livre; laboratório: cada analito com valor, referência e desvio).`:''} ${texto?`Texto fornecido: """${texto.slice(0,8000)}"""`:''} ${ctx?`Contexto clínico: ${ctx}.`:'Contexto clínico não informado.'}
Regras: responda em português do Brasil, objetivo, sem inventar achados; se a imagem estiver ilegível, incompleta ou não for um exame, diga isso claramente. Nunca transcreva nome, CPF ou outros identificadores do paciente que apareçam na imagem. Use markdown simples (negrito e listas).`;
  const laudo=`Formato — LAUDO:
**Exame:** tipo, técnica/incidências e qualidade.
**Descrição:** achados objetivos, um por linha, com medidas quando houver.
**Impressão diagnóstica:** conclusão direta em 1–3 linhas, com hipóteses em ordem de probabilidade.
**Correlação clínica:** o que confirmar ou pedir a seguir; sinais de gravidade.
Termine com a linha: "Rascunho gerado com auxílio de IA — revisado e assinado por: ______ CRM ______".`;
  const interp=`Formato — INTERPRETAÇÃO: **Achados**, **Diagnóstico mais provável**, **Diagnósticos diferenciais** (2–4, com o que fala a favor de cada), **Conduta sugerida** (exames e tratamento inicial com doses, por diretrizes brasileiras), **Alertas** (gravidade e limitações da análise).`;
  return sys+'\n'+(mode==='interp'?interp:laudo)}

/* ---- chamadas ---- */
async function callGemini(prompt,parts,signal){
  const body={contents:[{role:'user',parts:[{text:prompt},...parts.map(p=>({inline_data:{mime_type:p.mime,data:p.data}}))]}],generationConfig:{temperature:.2,maxOutputTokens:2048}};
  let url,headers={'Content-Type':'application/json'};
  if(provider()==='proxy'){url=APP.aiEndpoint;const tok=await (window.authToken?window.authToken():null);if(tok)headers.Authorization='Bearer '+tok;if(APP.supabaseAnonKey)headers.apikey=APP.supabaseAnonKey;body.model=APP.aiModel||'gemini-2.5-flash'}
  else{url=`https://generativelanguage.googleapis.com/v1beta/models/${APP.aiModel||'gemini-2.5-flash'}:generateContent`;headers['x-goog-api-key']=ownKey()}
  const r=await fetch(url,{method:'POST',headers,body:JSON.stringify(body),signal});
  const j=await r.json().catch(()=>({}));
  if(!r.ok){const m=j.error?.message||j.error||r.statusText;const e=new Error(m);e.status=r.status;throw e}
  if(j.text)return j.text;
  const c=j.candidates?.[0];if(!c)throw new Error(j.promptFeedback?.blockReason?'Conteúdo bloqueado pelo filtro do modelo.':'Resposta vazia.');
  return (c.content?.parts||[]).map(p=>p.text||'').join('')}

$('ex-stop').onclick=()=>exCtl?.abort();
$('ex-run').onclick=async()=>{const p=provider();if(!p)return;
  const type=$('ex-type').value,ctx=$('ex-ctx').value.trim(),texto=$('ex-laudo').value.trim(),mode=$('ex-mode').value;
  if(!exFiles.length&&!texto){$('ex-hint').textContent='Anexe a foto/PDF do exame ou cole o texto.';return}
  const prompt=buildPrompt(type,ctx,texto,mode,exFiles.length);
  exCtl=new AbortController();$('ex-out').hidden=false;$('ex-text').textContent='Analisando…';$('ex-run').disabled=true;$('ex-stop').hidden=false;$('ex-hint').textContent='';
  try{let text='';
    if(p==='claude'){const opts={signal:exCtl.signal,modelTier:'complex',cache:false,onText:({text})=>{$('ex-text').innerHTML=mdLite(text)}};const imgs=exFiles.filter(f=>f.type!=='application/pdf');if(imgs.length)opts.images=imgs;const r=await exSample(prompt,opts);text=r.text+(r.truncated?'\n\n(Resposta cortada — tente com menos texto.)':'')}
    else{const parts=[];for(const fl of exFiles)parts.push(await shrink(fl));text=await callGemini(prompt,parts,exCtl.signal)}
    exLast=text;$('ex-text').innerHTML=mdLite(text)}
  catch(e){if(e.name==='AbortError'){$('ex-text').textContent='Cancelado.';return}
    const m={not_granted:'Permissão não concedida para usar o Claude neste app.',rate_limited:'Limite de uso atingido. Tente novamente mais tarde.',image_rejected:'Imagem recusada: use JPG/PNG legível de até 20 MB.',refused:'A IA não pôde analisar este conteúdo.'}[e.code];
    let msg=m||e.message||'Falha na análise.';
    if(e.status===429)msg='Limite da camada gratuita do Gemini atingido (requisições por minuto/dia). Aguarde um minuto e tente de novo.';
    if(e.status===400&&/API key/i.test(msg))msg='Chave do Gemini inválida. Confira em Minha conta › Laudo com IA.';
    if(e.status===401||e.status===403)msg=p==='proxy'?'Sessão expirada ou assinatura inativa. Entre novamente.':'Chave sem permissão. Gere uma nova em aistudio.google.com.';
    if(/Failed to fetch|NetworkError/i.test(msg))msg='Sem conexão com o serviço de IA. Verifique a internet.';
    $('ex-text').innerHTML=mdLite(e.text||'');$('ex-hint').textContent=msg}
  finally{$('ex-stop').hidden=true;showProv()}};

function plain(t){return t.replace(/\*\*(.+?)\*\*/g,'$1').replace(/^#+\s*/gm,'')}
$('ex-copy').onclick=async()=>{if(!exLast)return;const ok=await copyText(plain(exLast));const o=$('ex-copy').textContent;$('ex-copy').textContent=ok?'Copiado ✓':'Não foi possível copiar';setTimeout(()=>$('ex-copy').textContent=o,1800)};
$('ex-note').onclick=()=>{if(!exLast)return;go('s-note');setTimeout(()=>window.ntInsert&&ntInsert('EXAMES ('+$('ex-type').value+'):\n'+plain(exLast),/EXAMES?[^\n]*:/i),50)};

/* chave própria */
window.aiSaveKey=k=>{try{if(k)localStorage.setItem(KEY_LS,k.trim());else localStorage.removeItem(KEY_LS)}catch(e){}showProv()};
window.aiHasKey=()=>!!ownKey();
})();
