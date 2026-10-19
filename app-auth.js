/* ============================================================
   MedKit — Login (Supabase), assinatura (RevenueCat nas lojas /
   Mercado Pago-Stripe na web) e tela Minha conta.
   Sem supabaseUrl/anonKey em app-config.js → modo demonstração
   (sem bloqueio).
   ============================================================ */
(function(){
const APP=window.APP_CFG||{};
const authOn=!!(APP.supabaseUrl&&APP.supabaseAnonKey);
const FREE=new Set(['s-auth','s-pay','s-legal']);
const $=id=>document.getElementById(id);
let sb=null,user=null,profile=null,access=false,legalFrom='s-home',rcReady=false;
const isNative=()=>!!(window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform());
const platform=()=>window.Capacitor?.getPlatform?window.Capacitor.getPlatform():'web';
const RC=()=>window.Capacitor?.Plugins?.Purchases||null;
const fmtDate=d=>d?new Date(d).toLocaleDateString('pt-BR'):'—';


/* ---- modo 'senha': login fixo, sem cadastro ---- */
if(APP.accessMode==='senha'){
  const SESS='mek-sess';
  const sha=async t=>{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')};
  const cur=()=>{try{return localStorage.getItem(SESS)||''}catch(e){return ''}};
  const FREE2=new Set(['s-auth','s-legal']);
  const _go2=window.go;
  window.go=function(id){if(document.body.classList.contains('locked')&&!FREE2.has(id))id='s-auth';_go2(id)};
  const lockP=()=>{document.body.classList.add('locked');_go2('s-auth')};
  const unlockP=()=>{document.body.classList.remove('locked')};
  // UI: sem "Criar conta", sem "esqueci", campos Login/Senha
  $('au-seg').style.display='none';$('au-forgot').style.display='none';$('au-demo').style.display='none';
  document.querySelector('label[for=au-email]').textContent='Login';$('au-email').type='text';$('au-email').placeholder='';$('au-email').autocomplete='username';$('au-email').inputMode='text';
  $('au-pass').placeholder='';$('au-pass').autocomplete='current-password';
  document.querySelector('#s-auth .auth-sub').textContent='Acesso restrito. Informe o login e a senha fornecidos.';
  const msgP=(t,bad)=>{$('au-msg').textContent=t;$('au-msg').style.color=bad?'var(--bad)':''};
  $('au-go').onclick=async()=>{const u=$('au-email').value.trim(),p=$('au-pass').value;if(!u||!p)return msgP('Informe login e senha.',1);
    $('au-go').disabled=true;try{const h=await sha(u+':'+p);const ok=(APP.logins||[]).some(l=>l.u===u&&l.h===h);
      if(!ok){msgP('Login ou senha incorretos.',1);return}
      try{localStorage.setItem(SESS,u)}catch(e){}$('au-pass').value='';msgP('');unlockP();_go2('s-home');renderAcc()}
    finally{$('au-go').disabled=false}};
  $('au-pass').addEventListener('keydown',e=>{if(e.key==='Enter')$('au-go').click()});
  $('legal-back').onclick=()=>go(document.body.classList.contains('locked')?'s-auth':'s-home');
  const sair=()=>{try{localStorage.removeItem(SESS)}catch(e){}lockP()};
  function renderAcc(){$('ac-email').textContent=cur()?'Login: '+cur():'—';$('ac-plan').textContent='Acesso por login';$('ac-status').textContent='Ativo';$('ac-until').textContent='—';
    ['ac-manage','ac-refresh','ac-delete'].forEach(i=>$(i).hidden=true);$('ac-logout').hidden=false;$('ac-logout').onclick=sair;$('acct-lbl').textContent=cur()||'Conta';
    $('ac-ver').textContent=APP.version||'—';$('legal-contact').textContent='Suporte: '+(APP.supportEmail||'—');$('ac-ai-status').textContent='Provedor: '+(window.aiProviderLabel?aiProviderLabel():'—');$('ac-key-wrap').hidden=APP.allowOwnKey===false;$('ac-key').value=window.aiHasKey&&aiHasKey()?'••••••••••••':''}
  $('ac-key-save').onclick=()=>{const k=$('ac-key').value.trim();if(!k||k.startsWith('•'))return;window.aiSaveKey&&aiSaveKey(k);renderAcc();alert('Chave salva neste aparelho.')};
  $('ac-key-del').onclick=()=>{window.aiSaveKey&&aiSaveKey('');renderAcc()};
  $('ac-support').onclick=()=>{const s=APP.supportEmail;if(!s)return alert('E-mail de suporte não configurado.');location.href=`mailto:${s}?subject=${encodeURIComponent('Suporte MedKit')}`};
  renderAcc();
  if(cur()&&(APP.logins||[]).some(l=>l.u===cur()))unlockP();else lockP();
  if('serviceWorker' in navigator&&location.protocol==='https:'&&!window.claude&&window.top===window){navigator.serviceWorker.register('sw.js').catch(()=>{})}
  return;
}

/* ---- navegação bloqueada ---- */
const _go=window.go;
window.go=function(id){const cur=document.querySelector('.screen.active')?.id;
  if(id==='s-legal'&&cur&&cur!=='s-legal')legalFrom=cur;
  if(document.body.classList.contains('locked')&&!FREE.has(id))id=user?'s-pay':'s-auth';
  _go(id)};
function lock(t){document.body.classList.add('locked');_go(t)}
function unlock(){document.body.classList.remove('locked')}
$('legal-back').onclick=()=>go(FREE.has(legalFrom)&&document.body.classList.contains('locked')?legalFrom:(document.body.classList.contains('locked')?(user?'s-pay':'s-auth'):legalFrom));

/* ---- supabase ---- */
function loadScript(src){return new Promise((res,rej)=>{const s=document.createElement('script');s.src=src;s.onload=res;s.onerror=()=>rej(new Error('Falha ao carregar '+src));document.head.appendChild(s)})}
async function sbInit(){if(sb)return sb;if(!window.supabase)await loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js');
  sb=window.supabase.createClient(APP.supabaseUrl,APP.supabaseAnonKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});return sb}
window.authToken=async()=>{if(!sb)return null;const {data:{session}}=await sb.auth.getSession();return session?.access_token||null};

/* ---- acesso ---- */
async function loadProfile(){try{const {data}=await sb.from('profiles').select('*').eq('id',user.id).maybeSingle();return data}catch(e){return null}}
async function rcConfigure(){const rc=RC();if(!rc||rcReady)return;const key=platform()==='ios'?APP.revenuecat?.apple:APP.revenuecat?.google;if(!key)return;
  await rc.configure({apiKey:key,appUserID:user.id});rcReady=true}
async function rcActive(){const rc=RC();if(!rc||!isNative())return false;try{await rcConfigure();if(!rcReady)return false;const {customerInfo}=await rc.getCustomerInfo();return !!customerInfo?.entitlements?.active?.[APP.revenuecat?.entitlement||'pro']}catch(e){return false}}
async function checkAccess(){
  if(APP.accessMode==='convite'){return profile?.autorizado===true?{ok:true,src:'convite'}:{ok:false,src:'convite'}}
  if(await rcActive())return {ok:true,src:'loja'};
  const now=Date.now();
  if(profile?.pago_ate&&new Date(profile.pago_ate)>now)return {ok:true,src:'pago',until:profile.pago_ate};
  if(profile?.trial_ate&&new Date(profile.trial_ate)>now)return {ok:true,src:'teste',until:profile.trial_ate};
  return {ok:false}}
let acc={ok:false};
async function afterLogin(){profile=await loadProfile();acc=await checkAccess();access=acc.ok;renderAccount();
  if(access){unlock();const cur=document.querySelector('.screen.active')?.id;if(FREE.has(cur))_go('s-home')}else if(APP.accessMode==='convite'){lock('s-pay')}else{$('pay-why').textContent=acc.src?'':(profile?.trial_ate?'Seu período de teste terminou. Continue com acesso a todos os módulos.':'Ative sua assinatura para usar o MedKit.');lock('s-pay')}}

/* ---- UI login ---- */
let mode='in';
$('au-seg').onclick=e=>{const b=e.target.closest('[data-au]');if(!b)return;mode=b.dataset.au;$('au-seg').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('.au-up').forEach(x=>x.hidden=mode!=='up');$('au-go').textContent=mode==='up'?'Criar conta':'Entrar';$('au-msg').textContent='';$('au-pass').autocomplete=mode==='up'?'new-password':'current-password'};
const msg=(id,t,bad)=>{const el=$(id);el.textContent=t;el.style.color=bad?'var(--bad)':''};
$('au-go').onclick=async()=>{if(!authOn)return;const email=$('au-email').value.trim(),pass=$('au-pass').value;
  if(!/^\S+@\S+\.\S+$/.test(email))return msg('au-msg','Digite um e-mail válido.',1);if(pass.length<8)return msg('au-msg','A senha precisa ter pelo menos 8 caracteres.',1);
  $('au-go').disabled=true;msg('au-msg','Aguarde…');
  try{await sbInit();
    if(mode==='up'){const nome=$('au-nome').value.trim(),crm=$('au-crm').value.trim();if(!nome)throw new Error('Informe seu nome.');
      const {data,error}=await sb.auth.signUp({email,password:pass,options:{data:{nome,crm}}});if(error)throw error;
      if(!data.session){msg('au-msg','Conta criada! Confirme o e-mail que enviamos e depois entre.');$('au-seg').querySelector('[data-au=in]').click();return}
      user=data.user;await afterLogin()}
    else{const {data,error}=await sb.auth.signInWithPassword({email,password:pass});if(error)throw error;user=data.user;await afterLogin()}}
  catch(e){const t=String(e.message||e);msg('au-msg',/Invalid login/i.test(t)?'E-mail ou senha incorretos.':/already registered/i.test(t)?'Este e-mail já tem conta. Use "Entrar".':/Email not confirmed/i.test(t)?'Confirme seu e-mail antes de entrar.':/rate limit/i.test(t)?'Muitas tentativas. Aguarde um minuto.':t,1)}
  finally{$('au-go').disabled=false}};
$('au-forgot').onclick=async()=>{const email=$('au-email').value.trim();if(!/^\S+@\S+\.\S+$/.test(email))return msg('au-msg','Digite seu e-mail acima e toque de novo em "Esqueci minha senha".',1);
  try{await sbInit();const {error}=await sb.auth.resetPasswordForEmail(email);if(error)throw error;msg('au-msg','Enviamos um link para redefinir a senha.')}catch(e){msg('au-msg',e.message||'Falha ao enviar.',1)}};
$('au-skip').onclick=()=>{unlock();_go('s-home')};

/* ---- assinatura ---- */
async function buy(){msg('pay-msg','');const rc=RC();
  if(isNative()&&rc){try{await rcConfigure();if(!rcReady)throw new Error('Chave do RevenueCat não configurada para '+platform()+'.');
      const {offerings}=await rc.getOfferings();const pkg=offerings?.current?.availablePackages?.[0];if(!pkg)throw new Error('Nenhum produto disponível na loja ainda.');
      msg('pay-msg','Abrindo a loja…');await rc.purchasePackage({aPackage:pkg});await afterLogin();if(access)msg('pay-msg','Assinatura ativa. Obrigado!')}
    catch(e){if(e.userCancelled||/cancel/i.test(e.message||''))return msg('pay-msg','Compra cancelada.');msg('pay-msg',e.message||'Falha na compra.',1)}return}
  if(!APP.checkoutUrl)return msg('pay-msg','Pagamento ainda não configurado (checkoutUrl em app-config.js).',1);
  const u=APP.checkoutUrl+(APP.checkoutUrl.includes('?')?'&':'?')+'external_reference='+encodeURIComponent(user?.id||'')+'&email='+encodeURIComponent(user?.email||'');
  window.open(u,'_blank');msg('pay-msg','Depois de concluir o pagamento, volte e toque em "Já paguei — atualizar".')}
$('pay-buy').onclick=buy;
$('pay-refresh').onclick=async()=>{msg('pay-msg','Verificando…');await afterLogin();if(!access)msg('pay-msg','Ainda não encontramos o pagamento. Pode levar alguns minutos.',1)};
$('pay-restore').onclick=async()=>{const rc=RC();if(!(isNative()&&rc))return msg('pay-msg','Restaurar compras só se aplica às versões da App Store / Google Play.');try{await rcConfigure();await rc.restorePurchases();await afterLogin();msg('pay-msg',access?'Compra restaurada.':'Nenhuma compra encontrada para esta conta.',!access)}catch(e){msg('pay-msg',e.message||'Falha ao restaurar.',1)}};
async function logout(){try{await sb?.auth.signOut()}catch(e){}user=null;profile=null;access=false;renderAccount();lock('s-auth')}
$('pay-logout').onclick=logout;$('ac-logout').onclick=logout;

/* ---- minha conta ---- */
function renderAccount(){
  $('ac-ver').textContent=APP.version||'—';
  const sup=APP.supportEmail||'';$('legal-contact').textContent='Suporte: '+(sup||'—');
  $('ac-ai-status').textContent='Provedor: '+(window.aiProviderLabel?aiProviderLabel():'—');
  $('ac-key-wrap').hidden=APP.allowOwnKey===false;$('ac-key').value=window.aiHasKey&&aiHasKey()?'••••••••••••':'';
  if(!authOn){$('ac-email').textContent='Modo demonstração — login não configurado';$('ac-plan').textContent='Demonstração';$('ac-status').textContent='Acesso livre';$('ac-until').textContent='—';
    ['ac-manage','ac-refresh','ac-logout','ac-delete'].forEach(i=>$(i).hidden=true);$('acct-lbl').textContent='Demo';return}
  $('ac-email').textContent=user?.email||'—';
  $('ac-plan').textContent=APP.accessMode==='convite'?(access?'Autorizado':'Aguardando autorização'):acc.src==='loja'?(APP.plan?.name||'Pro')+' (loja)':acc.src==='pago'?(APP.plan?.name||'Pro'):acc.src==='teste'?'Teste gratuito':'Sem assinatura';
  $('ac-status').textContent=access?'Ativa':'Inativa';$('ac-status').className='v '+(access?'ok':'bad');
  $('ac-until').textContent=APP.accessMode==='convite'?'—':acc.src==='loja'?'Gerenciado pela loja':fmtDate(acc.until);
  $('acct-lbl').textContent=access?(acc.src==='teste'?'Teste':'Pro'):'Conta'}
$('ac-refresh').onclick=async()=>{if(user)await afterLogin()};
$('ac-manage').onclick=()=>{const p=platform();const u=p==='ios'?'https://apps.apple.com/account/subscriptions':p==='android'?'https://play.google.com/store/account/subscriptions':(APP.checkoutUrl||'');if(u)window.open(u,'_blank');else go('s-pay')};
$('ac-key-save').onclick=()=>{const k=$('ac-key').value.trim();if(!k||k.startsWith('•'))return;window.aiSaveKey&&aiSaveKey(k);renderAccount();alert('Chave salva neste aparelho.')};
$('ac-key-del').onclick=()=>{window.aiSaveKey&&aiSaveKey('');renderAccount()};
$('ac-support').onclick=()=>{const s=APP.supportEmail;if(!s)return alert('E-mail de suporte não configurado.');location.href=`mailto:${s}?subject=${encodeURIComponent('Suporte MedKit')}`};
$('ac-delete').onclick=()=>{if(!confirm('Pedir a exclusão da conta e de todos os dados? Você perderá o acesso à assinatura.'))return;const s=APP.supportEmail||'';location.href=`mailto:${s}?subject=${encodeURIComponent('Excluir minha conta MedKit')}&body=${encodeURIComponent('Solicito a exclusão da conta '+(user?.email||'')+' e dos dados associados.')}`};

/* ---- textos de plano ---- */
function fillPlan(){if(APP.accessMode==='convite'){$('pay-plan').textContent='MedKit';document.querySelector('#s-pay .auth-title').textContent='Acesso restrito';$('pay-why').textContent='Sua conta foi criada, mas ainda não está autorizada. Peça a liberação ao responsável pelo app e depois toque em "Já fui autorizado".';document.querySelector('#s-pay .pay-card').innerHTML='<div class="actions"><button class="btn primary" id="pay-refresh" style="flex:1">Já fui autorizado — atualizar</button></div><p class="hint" id="pay-msg"></p>';$('pay-refresh').onclick=async()=>{msg('pay-msg','Verificando…');await afterLogin();if(!access)msg('pay-msg','Ainda não autorizado.',1)};document.querySelectorAll('.au-up .hint, #au-trial').forEach(()=>{});const t=document.querySelector('#s-auth .au-up.hint');if(t)t.innerHTML='Ao criar a conta você aceita os <button class="link inline" data-go="s-legal">Termos de uso e a Política de privacidade</button>. O acesso é liberado pelo responsável após o cadastro.';return}const p=APP.plan||{};$('pay-plan').textContent=p.name||'MedKit Pro';$('pay-price').textContent=p.price||'';$('pay-period').textContent=p.period||'mês';$('au-trial').textContent=p.trialDays??7}

/* ---- início ---- */
(async()=>{fillPlan();renderAccount();
  if(!authOn){$('au-demo').hidden=false;return}
  lock('s-auth');
  try{await sbInit();const {data:{session}}=await sb.auth.getSession();
    if(session){user=session.user;await afterLogin()}
    sb.auth.onAuthStateChange(async(ev,s)=>{if(ev==='SIGNED_OUT'){user=null;access=false;lock('s-auth')}else if(ev==='PASSWORD_RECOVERY'&&s){user=s.user;const np=prompt('Digite a nova senha (mínimo 8 caracteres):');if(np&&np.length>=8){await sb.auth.updateUser({password:np});alert('Senha alterada.')}await afterLogin()}else if((ev==='SIGNED_IN'||ev==='TOKEN_REFRESHED')&&s&&!user){user=s.user;await afterLogin()}})}
  catch(e){msg('au-msg','Não foi possível conectar ao servidor de login: '+(e.message||e),1)}})();
})();
if('serviceWorker' in navigator&&location.protocol==='https:'&&!window.claude&&window.top===window){navigator.serviceWorker.register('sw.js').catch(()=>{})}
