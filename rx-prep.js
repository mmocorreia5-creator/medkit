/* ============================================================
   MedKit — PREPARO DE INJETÁVEIS (apresentação, nº de ampolas, diluição)
   Usado na aba "No PS": para cada linha com medicamento IM/EV/SC,
   acrescenta a apresentação padrão no Brasil, quantas ampolas/frascos a
   dose pede e como diluir/administrar.
   Campos: re (regex do fármaco) · a (apresentação) · c (concentração por mL)
           v (volume da ampola/frasco em mL) · u (unidade da dose)
           im / ev / sc (como administrar) · obs
   Fontes: bulas ANVISA, ISMP Brasil (diluição de injetáveis), AHA 2020,
   Guia de medicamentos injetáveis HC-FMUSP/Einstein (2022–2024).
   ============================================================ */
window.RX_PREP=[
/* --- analgésicos / antieméticos / antiespasmódicos --- */
{re:/buscopan\s*composto|butilescopolamina\s*\+\s*dipirona|hioscina\s*\+\s*dipirona/i,skip:['dipirona','butilescopolamina','hioscina'],a:'Butilescopolamina 4 mg/mL + dipirona 500 mg/mL — ampola 5 mL',c:1,v:5,u:'mL',im:'IM: puro, profundo',ev:'EV: 1 amp + 10 mL SF/AD, lento 3–5 min (ou em 100 mL SF, 15 min)'},
{re:/dipirona|metamizol|novalgina/i,a:'500 mg/mL — ampola 2 mL (1 g)',c:500,v:2,u:'mg',im:'IM: puro, profundo (glúteo/vasto lateral)',ev:'EV: 1 amp + 8 mL SF/AD (10 mL = 100 mg/mL), lento 3–5 min; ou em 100 mL SF, 15 min. Nunca em bolus rápido (hipotensão)'},
{re:/ondansetron/i,n:'Ondansetrona',a:'2 mg/mL — ampola 4 mL (8 mg) [há amp 2 mL = 4 mg]',c:2,v:4,u:'mg',im:'IM: puro',ev:'EV: puro lento 2–5 min, ou 1 amp + 50–100 mL SF em 15 min'},
{re:/metoclopramida|plasil/i,a:'5 mg/mL — ampola 2 mL (10 mg)',c:5,v:2,u:'mg',im:'IM: puro',ev:'EV: 1 amp + 8 mL SF, lento ≥ 3 min (rápido → acatisia); ou em 100 mL SF, 15 min'},
{re:/bromoprida/i,a:'5 mg/mL — ampola 2 mL (10 mg)',c:5,v:2,u:'mg',im:'IM: puro',ev:'EV: 1 amp + 8 mL SF, lento 3 min; ou em 100 mL SF, 15 min'},
{re:/butilescopolamina|hioscina|buscopan(?!\s*composto)/i,a:'20 mg/mL — ampola 1 mL (20 mg)',c:20,v:1,u:'mg',im:'IM: puro',ev:'EV: 1 amp + 9 mL SF, lento 2–3 min'},
{re:/dimenidrinato\s*\+\s*b6|dramin\s*b6/i,skip:['dimenidrinato'],a:'IM: Dramin B6® DL amp 1 mL (dimenidrinato 50 mg + piridoxina 50 mg) · EV: Dramin B6® amp 10 mL (dimenidrinato 30 mg + B6 50 mg + glicose)',c:50,v:1,u:'mg',im:'IM: 1 amp de 1 mL, profunda',ev:'EV: 1 amp de 10 mL puro, lento ≥ 2 min (ou + 10 mL SF)'},
{re:/dimenidrinato/i,a:'50 mg/mL — ampola 1 mL (IM)',c:50,v:1,u:'mg',im:'IM: puro, profundo',ev:'EV: usar a apresentação EV (10 mL), lenta'},
{re:/prometazina|fenergan/i,a:'25 mg/mL — ampola 2 mL (50 mg)',c:25,v:2,u:'mg',im:'IM: puro, profundo (glúteo). Dose usual 25 mg = ½ amp (1 mL)',ev:'EV: evitar (necrose/flebite); se imprescindível, 1 amp + 18 mL SF (2,5 mg/mL), lento'},
{re:/difenidramina/i,a:'50 mg/mL — ampola 1 mL',c:50,v:1,u:'mg',im:'IM: puro',ev:'EV: 1 amp + 9 mL SF, lento 2–3 min'},
{re:/cetoprofeno|profenid/i,a:'EV: frasco-ampola 100 mg (pó) · IM: ampola 2 mL (50 mg/mL = 100 mg)',c:50,v:2,u:'mg',im:'IM: amp 100 mg puro, profundo',ev:'EV: 1 fr 100 mg + 100 mL SF, em 20–30 min (proteger da luz)'},
{re:/diclofenaco|voltaren/i,a:'25 mg/mL — ampola 3 mL (75 mg)',c:25,v:3,u:'mg',im:'IM: puro, profundo no glúteo (nunca deltoide)',ev:'EV: NÃO fazer em bolus (só infusão especial) — preferir IM'},
{re:/tenoxicam|tilatil/i,a:'frasco-ampola 20 mg ou 40 mg + diluente 2 mL',c:20,v:2,u:'mg',im:'IM: reconstituir com o diluente, profundo',ev:'EV: reconstituído, lento 1–2 min (ou em 100 mL SF)'},
{re:/cetorolaco|toragesic/i,a:'30 mg/mL — ampola 1 mL',c:30,v:1,u:'mg',im:'IM: puro',ev:'EV: 1 amp + 9 mL SF, lento ≥ 15 s'},
{re:/tramadol/i,a:'50 mg/mL — ampola 2 mL (100 mg)',c:50,v:2,u:'mg',im:'IM: puro',ev:'EV: 1 amp + 100 mL SF em 20–30 min (bolus rápido → náusea); 50 mg = 1 mL'},
{re:/morfina/i,a:'10 mg/mL — ampola 1 mL (há 1 mg/mL amp 2 mL e 0,2 mg/mL)',c:10,v:1,u:'mg',im:'IM/SC: 5–10 mg = ½–1 amp puro',ev:'EV: 1 amp (10 mg) + 9 mL AD = 1 mg/mL → 2–4 mL (2–4 mg) a cada 5–10 min, titular'},
{re:/fentanil/i,a:'50 mcg/mL — ampola 2 mL (100 mcg), 5 mL ou 10 mL',c:50,v:2,u:'mcg',im:'IM: puro',ev:'EV: puro, lento 1–2 min; 1 mcg/kg ≈ 1,4 mL para 70 kg'},
{re:/nalbufina|nubain/i,a:'10 mg/mL — ampola 1 mL',c:10,v:1,u:'mg',im:'IM/SC: puro',ev:'EV: 1 amp + 9 mL SF, lento 2–3 min'},
{re:/cetamina|quetamina/i,a:'50 mg/mL — frasco 10 mL (500 mg)',c:50,v:10,u:'mg',im:'IM: puro (4–5 mg/kg)',ev:'EV: 1 mL (50 mg) + 9 mL SF = 5 mg/mL; 1–2 mg/kg lento 1 min. Analgesia: 0,1–0,3 mg/kg'},
/* --- corticoides --- */
{re:/dexametasona|decadron/i,a:'4 mg/mL — ampola 2,5 mL (10 mg) [há 2 mg/mL amp 1 mL]',c:4,v:2.5,u:'mg',im:'IM: puro',ev:'EV: puro lento 1–2 min, ou + 10 mL SF'},
{re:/hidrocortisona|solu-?cortef/i,a:'frasco-ampola 100 mg ou 500 mg (pó) + diluente 2 mL',c:100,v:1,u:'mg',im:'IM: reconstituir com o diluente, profundo',ev:'EV: reconstituir + 10 mL SF, lento 1–2 min; ou em 100 mL SF, 20 min'},
{re:/metilprednisolona|solu-?medrol/i,a:'frasco-ampola 125 mg (2 mL) ou 500 mg (8 mL) + diluente',c:62.5,v:2,u:'mg',im:'IM: reconstituído, profundo',ev:'EV: reconstituir e diluir em 100 mL SF, 30 min (pulso 1 g: 250 mL em 1 h)'},
{re:/betametasona|celestone/i,a:'4 mg/mL amp 1 mL · Celestone Soluspan® 6 mg/mL amp 1 mL',c:4,v:1,u:'mg',im:'IM: puro, profundo',ev:'EV: só a apresentação fosfato (4 mg/mL), lenta'},
/* --- sedativos / anticonvulsivantes / psiquiatria --- */
{re:/midazolam|dormonid/i,a:'5 mg/mL — ampola 3 mL (15 mg) [há 1 mg/mL amp 5 mL e 50 mg/10 mL]',c:5,v:3,u:'mg',im:'IM: puro (0,1–0,2 mg/kg; crise: 10 mg = 2 mL)',ev:'EV: 1 mL (5 mg) + 4 mL SF = 1 mg/mL; 1–2 mg a cada 2–3 min, titular'},
{re:/diazepam|valium/i,a:'5 mg/mL — ampola 2 mL (10 mg)',c:5,v:2,u:'mg',im:'IM: evitar (absorção errática)',ev:'EV: puro, SEM diluir, lento 2 mg/min (5 mg = 1 mL em ~2,5 min); não misturar com soro'},
{re:/haloperidol|haldol/i,a:'5 mg/mL — ampola 1 mL',c:5,v:1,u:'mg',im:'IM: puro, profundo',ev:'EV: off-label; se usado, 1 amp + 9 mL SF lento, com monitor (QT)'},
{re:/clorpromazina|amplictil/i,a:'5 mg/mL — ampola 5 mL (25 mg)',c:5,v:5,u:'mg',im:'IM: puro, profundo',ev:'EV: 1 amp + 100 mL SF em 30 min (hipotensão)'},
{re:/fenito[íi]na|hidantal/i,a:'50 mg/mL — ampola 5 mL (250 mg)',c:50,v:5,u:'mg',im:'IM: NÃO (necrose)',ev:'EV: diluir só em SF 0,9% (nunca SG), 100–250 mL, ≤ 50 mg/min (1 g em ≥ 20 min), filtro de linha, monitor'},
{re:/fenobarbital|gardenal/i,a:'100 mg/mL — ampola 2 mL (200 mg) [há 200 mg/mL]',c:100,v:2,u:'mg',im:'IM: puro, profundo',ev:'EV: 1 amp + 8 mL SF, ≤ 60 mg/min (20 mg/kg em 10–20 min)'},
{re:/levetiracetam|keppra/i,a:'100 mg/mL — frasco 5 mL (500 mg)',c:100,v:5,u:'mg',im:'IM: não',ev:'EV: diluir em 100 mL SF, 15 min'},
{re:/valproato|ácido valpr[óo]ico|depakene/i,a:'100 mg/mL — frasco 5 mL (500 mg)',c:100,v:5,u:'mg',im:'IM: não',ev:'EV: diluir em 100 mL SF, 30–60 min (ataque 20–40 mg/kg)'},
{re:/tiamina|vitamina b1/i,a:'100 mg/mL — ampola 1 mL',c:100,v:1,u:'mg',im:'IM: puro',ev:'EV: 1–3 amp + 100 mL SF, 30 min'},
/* --- antibióticos --- */
{re:/ceftriaxon/i,n:'Ceftriaxona',a:'frasco-ampola 1 g (pó) [há 500 mg e 250 mg]',c:1000,v:1,u:'mg',im:'IM: 1 g + 3,5 mL de lidocaína 1% sem vaso (≈ 250 mg/mL), profundo, glúteo (2 g = 1 g em cada glúteo)',ev:'EV: 1 g + 10 mL AD → bolus 2–4 min; ou + 100 mL SF em 30 min. Não misturar com cálcio na mesma via'},
{re:/cefazolina|kefazol/i,a:'frasco-ampola 1 g (pó)',c:1000,v:1,u:'mg',im:'IM: 1 g + 3 mL AD/lidocaína 1%, profundo',ev:'EV: 1 g + 10 mL AD, lento 3–5 min; ou em 100 mL SF, 30 min'},
{re:/cefalotina|keflin/i,a:'frasco-ampola 1 g (pó)',c:1000,v:1,u:'mg',im:'IM: 1 g + 4 mL AD, profundo',ev:'EV: 1 g + 10 mL AD lento, ou em 100 mL SF 30 min'},
{re:/cefepim/i,a:'frasco-ampola 1 g ou 2 g (pó)',c:1000,v:1,u:'mg',im:'IM: 1 g + 3 mL AD/lidocaína 1%',ev:'EV: diluir em 100 mL SF, 30 min'},
{re:/ampicilina\s*[+\/-]\s*sulbactam|unasyn/i,skip:['ampicilina'],a:'frasco-ampola 1,5 g (1 g + 0,5 g) ou 3 g',c:1500,v:1,u:'mg',im:'IM: 1,5 g + 3,2 mL lidocaína 0,5–2%',ev:'EV: 3 g + 100 mL SF, 15–30 min'},
{re:/ampicilina/i,a:'frasco-ampola 500 mg ou 1 g (pó)',c:1000,v:1,u:'mg',im:'IM: 1 g + 3,5 mL AD, profundo',ev:'EV: 1 g + 10 mL AD lento 3–5 min, ou em 100 mL SF 30 min (usar em até 1 h)'},
{re:/amoxicilina\s*[+\/-]\s*clavulanato.*(EV|IV)|clavulin\s*(EV|IV)/i,n:'Amoxicilina + clavulanato',a:'frasco-ampola 1,2 g (1 g + 200 mg)',c:1200,v:1,u:'mg',im:'IM: não',ev:'EV: 1,2 g + 20 mL AD → bolus 3–4 min, ou + 100 mL SF em 30–40 min (usar em 20 min)'},
{re:/oxacilina/i,a:'frasco-ampola 500 mg (pó)',c:500,v:1,u:'mg',im:'IM: 500 mg + 2,7 mL AD',ev:'EV: 2 g = 4 frascos + 100 mL SF, 30 min'},
{re:/penicilina\s*g?\s*benzatina|benzetacil/i,skip:['penicilina g cristalina','penicilina cristalina'],a:'frasco-ampola 1.200.000 UI (pó) [há 600.000 UI] + diluente 4 mL',c:300000,v:4,u:'UI',im:'IM: reconstituir com 4 mL AD (ou diluente próprio), agitar bem, agulha 30×8, profundo no glúteo; 2.400.000 UI = 1 frasco em cada glúteo. NUNCA EV',ev:'EV: CONTRAINDICADO'},
{re:/penicilina\s*g?\s*cristalina|penicilina\s*g\s*pot[áa]ssica|benzilpenicilina pot/i,a:'frasco-ampola 5.000.000 UI (pó)',c:500000,v:10,u:'UI',im:'IM: 5 MUI + 8 mL AD, profundo (dói)',ev:'EV: 5 MUI + 10 mL AD, depois diluir a dose em 100 mL SF, 30 min'},
{re:/penicilina\s*g?\s*proca[íi]na|despacilina/i,a:'frasco-ampola 400.000 UI + diluente',c:400000,v:2,u:'UI',im:'IM: reconstituir, profundo no glúteo. Só IM',ev:'EV: CONTRAINDICADO'},
{re:/clindamicina|dalacin/i,a:'150 mg/mL — ampola 4 mL (600 mg)',c:150,v:4,u:'mg',im:'IM: puro, ≤ 600 mg por sítio',ev:'EV: 600 mg + 100 mL SF em 30 min (nunca bolus — parada cardíaca)'},
{re:/gentamicina|garamicina/i,a:'40 mg/mL — ampola 2 mL (80 mg) [há 20 mg/mL ped]',c:40,v:2,u:'mg',im:'IM: puro, profundo',ev:'EV: dose + 100 mL SF, 30 min'},
{re:/amicacina/i,a:'250 mg/mL — ampola 2 mL (500 mg)',c:250,v:2,u:'mg',im:'IM: puro, profundo',ev:'EV: dose + 100 mL SF, 30–60 min'},
{re:/metronidazol.*(EV|IV)/i,n:'Metronidazol',a:'bolsa 500 mg/100 mL (5 mg/mL)',c:5,v:100,u:'mg',im:'IM: não',ev:'EV: 100 mL em 30–60 min, sem diluir mais'},
{re:/ciprofloxacino.*(EV|IV)/i,n:'Ciprofloxacino',a:'bolsa 400 mg/200 mL (2 mg/mL)',c:2,v:200,u:'mg',im:'IM: não',ev:'EV: 200 mL em 60 min'},
{re:/levofloxacino.*(EV|IV)/i,n:'Levofloxacino',a:'bolsa 500 mg/100 mL (5 mg/mL) [há 750 mg/150 mL]',c:5,v:100,u:'mg',im:'IM: não',ev:'EV: 100 mL em 60 min (750 mg em 90 min)'},
{re:/azitromicina.*(EV|IV)/i,n:'Azitromicina',a:'frasco-ampola 500 mg (pó)',c:500,v:1,u:'mg',im:'IM: não',ev:'EV: 500 mg + 4,8 mL AD, depois em 250 mL SF, 60 min'},
{re:/vancomicina/i,a:'frasco-ampola 500 mg ou 1 g (pó)',c:500,v:1,u:'mg',im:'IM: não',ev:'EV: 500 mg + 10 mL AD → em 100 mL SF (1 g em 200 mL), ≥ 60 min (rápido → síndrome do homem vermelho)'},
{re:/piperacilina|tazocin/i,a:'frasco-ampola 4,5 g (4 g + 0,5 g)',c:4500,v:1,u:'mg',im:'IM: não',ev:'EV: 4,5 g + 20 mL AD → em 100 mL SF, 30 min (ou infusão estendida 4 h)'},
{re:/meropenem/i,a:'frasco-ampola 500 mg ou 1 g (pó)',c:1000,v:1,u:'mg',im:'IM: não',ev:'EV: 1 g + 20 mL AD → bolus 5 min, ou em 100 mL SF 15–30 min (estendida 3 h)'},
{re:/aciclovir.*(EV|IV)/i,n:'Aciclovir',a:'frasco-ampola 250 mg (pó)',c:250,v:1,u:'mg',im:'IM: não',ev:'EV: 250 mg + 10 mL AD → diluir a ≤ 7 mg/mL (500 mg em 100 mL SF), em 60 min; hidratar'},
/* --- emergência / cardio --- */
{re:/adrenalina|epinefrina/i,a:'1 mg/mL (1:1.000) — ampola 1 mL',c:1,v:1,u:'mg',im:'IM (anafilaxia): 0,3–0,5 mg = 0,3–0,5 mL PURO no vasto lateral da coxa; repetir em 5–15 min',ev:'EV (PCR): 1 amp (1 mg) puro + flush 20 mL SF a cada 3–5 min. Infusão: 1 mg + 100 mL SF (10 mcg/mL), 1–10 mcg/min = 6–60 mL/h'},
{re:/atropina/i,a:'0,25 mg/mL — ampola 1 mL [há 0,5 mg/mL]',c:0.25,v:1,u:'mg',im:'IM: puro (intoxicação)',ev:'EV: puro em bolus; bradicardia 1 mg = 4 amp de 0,25 mg (repetir até 3 mg)'},
{re:/amiodarona|ancoron/i,a:'50 mg/mL — ampola 3 mL (150 mg)',c:50,v:3,u:'mg',im:'IM: não',ev:'EV: PCR 300 mg = 2 amp + 20 mL SG5% em bolus (2ª dose 150 mg). Com pulso: 150 mg + 100 mL SG5% em 10 min, depois 900 mg + 500 mL SG5% em 24 h (1 mg/min 6 h → 0,5 mg/min). Só em SG5%'},
{re:/adenosina/i,a:'3 mg/mL — ampola 2 mL (6 mg)',c:3,v:2,u:'mg',im:'IM: não',ev:'EV: bolus RÁPIDO (1–2 s) em veia proximal, seguido de flush 20 mL SF imediato; 6 mg → 12 mg → 12 mg'},
{re:/furosemida|lasix/i,a:'10 mg/mL — ampola 2 mL (20 mg)',c:10,v:2,u:'mg',im:'IM: puro',ev:'EV: puro, lento 1–2 min (≤ 4 mg/min em doses altas)'},
{re:/hidralazina/i,a:'20 mg/mL — ampola 1 mL',c:20,v:1,u:'mg',im:'IM: 5–10 mg puro',ev:'EV: 1 amp + 19 mL AD = 1 mg/mL → 5 mg = 5 mL lento; repetir 5–10 mg a cada 20 min (máx. 30 mg)'},
{re:/nitroglicerina|tridil/i,a:'5 mg/mL — ampola 10 mL (50 mg)',c:5,v:10,u:'mg',im:'IM: não',ev:'EV: 1 amp (50 mg) + 240 mL SG5% = 200 mcg/mL; iniciar 5–10 mcg/min = 1,5–3 mL/h em bomba, frasco de vidro/equipo próprio'},
{re:/nitroprussiato|nipride/i,a:'frasco-ampola 50 mg + diluente 2 mL',c:25,v:2,u:'mg',im:'IM: não',ev:'EV: 50 mg + 248 mL SG5% = 200 mcg/mL; 0,3–0,5 mcg/kg/min (70 kg ≈ 6–10 mL/h), proteger da luz, bomba'},
{re:/noradrenalina|norepinefrina/i,a:'2 mg/mL — ampola 4 mL (8 mg)',c:2,v:4,u:'mg',im:'IM: não',ev:'EV (central ou periférico diluído por curto prazo): 4 amp (16 mg) + 234 mL SG5% = 64 mcg/mL; 0,1 mcg/kg/min para 70 kg ≈ 6,6 mL/h. Diluição simples: 1 amp + 246 mL = 32 mcg/mL'},
{re:/dobutamina/i,a:'12,5 mg/mL — ampola 20 mL (250 mg)',c:12.5,v:20,u:'mg',im:'IM: não',ev:'EV: 1 amp + 230 mL SG5% = 1 mg/mL (1.000 mcg/mL); 5 mcg/kg/min para 70 kg = 21 mL/h'},
{re:/dopamina/i,a:'5 mg/mL — ampola 10 mL (50 mg)',c:5,v:10,u:'mg',im:'IM: não',ev:'EV: 5 amp (250 mg) + 200 mL SG5% = 1 mg/mL; 5 mcg/kg/min para 70 kg = 21 mL/h'},
{re:/metoprolol.*(EV|IV)|seloken/i,n:'Metoprolol',a:'1 mg/mL — ampola 5 mL (5 mg)',c:1,v:5,u:'mg',im:'IM: não',ev:'EV: 5 mg puro em 2–5 min, repetir a cada 5 min até 15 mg, monitor'},
{re:/esmolol|brevibloc/i,a:'10 mg/mL — frasco 10 mL (100 mg) [há 250 mg/mL amp 10 mL para diluir]',c:10,v:10,u:'mg',im:'IM: não',ev:'EV: 500 mcg/kg em 1 min (70 kg = 35 mg = 3,5 mL), depois 50–200 mcg/kg/min em bomba'},
{re:/verapamil/i,a:'2,5 mg/mL — ampola 2 mL (5 mg)',c:2.5,v:2,u:'mg',im:'IM: não',ev:'EV: 5 mg puro em 2 min (idoso 3 min), repetir 5–10 mg em 15–30 min'},
{re:/deslanos[íi]deo|cedilanide/i,a:'0,2 mg/mL — ampola 2 mL (0,4 mg)',c:0.2,v:2,u:'mg',im:'IM: evitar',ev:'EV: 1 amp + 18 mL SF, lento 5 min'},
{re:/enoxaparina|clexane/i,a:'seringas 20, 40, 60, 80 e 100 mg (100 mg/mL)',c:100,v:1,u:'mg',im:'IM: NÃO',ev:'SC: abdome, não expelir a bolha, não massagear. Profilaxia 40 mg; tratamento 1 mg/kg 12/12 h'},
{re:/heparina\s*(não\s*fracionada|sódica|nf)|hnf/i,n:'Heparina não fracionada',a:'5.000 UI/mL — frasco 5 mL (25.000 UI) [há 5.000 UI/0,25 mL SC]',c:5000,v:5,u:'UI',im:'IM: NÃO',ev:'EV: bolus 80 UI/kg (70 kg = 5.600 UI ≈ 1,1 mL), depois 25.000 UI + 250 mL SF (100 UI/mL) a 18 UI/kg/h ≈ 12,6 mL/h. SC profilaxia: 5.000 UI 8/8–12/12 h'},
{re:/alteplase|actilyse/i,a:'frasco-ampola 50 mg + 50 mL diluente (1 mg/mL)',c:1,v:50,u:'mg',im:'IM: não',ev:'EV (AVC): 0,9 mg/kg (máx. 90 mg): 10% em bolus 1 min, 90% em 60 min em bomba. (IAM: 15 mg bolus → 0,75 mg/kg 30 min → 0,5 mg/kg 60 min)'},
{re:/tenecteplase|metalyse/i,a:'frasco-ampola 50 mg + 10 mL AD (5 mg/mL)',c:5,v:10,u:'mg',im:'IM: não',ev:'EV: bolus único 5–10 s por peso: < 60 kg 30 mg (6 mL); 60–69 kg 35 mg (7 mL); 70–79 kg 40 mg (8 mL); 80–89 kg 45 mg (9 mL); ≥ 90 kg 50 mg (10 mL)'},
{re:/ácido tranex[âa]mico|transamin/i,a:'50 mg/mL — ampola 5 mL (250 mg)',c:50,v:5,u:'mg',im:'IM: puro (pouco usado)',ev:'EV: 1 g = 4 amp + 100 mL SF em 10 min (rápido → hipotensão); depois 1 g em 8 h'},
{re:/vitamina k|fitomenadiona|kanakion/i,a:'10 mg/mL — ampola 1 mL',c:10,v:1,u:'mg',im:'IM: evitar se anticoagulado (hematoma); SC/VO preferíveis',ev:'EV: 1 amp + 50 mL SF em 20 min (lento — anafilactoide)'},
{re:/naloxona|narcan/i,a:'0,4 mg/mL — ampola 1 mL',c:0.4,v:1,u:'mg',im:'IM/SC: puro',ev:'EV: 1 amp + 9 mL SF (0,04 mg/mL) → 1–2 mL (0,04–0,08 mg) a cada 2 min até respirar; depressão grave 0,4 mg puro'},
{re:/flumazenil|lanexat/i,a:'0,1 mg/mL — ampola 5 mL (0,5 mg)',c:0.1,v:5,u:'mg',im:'IM: não',ev:'EV: 0,2 mg (2 mL) em 15 s, repetir 0,1–0,2 mg a cada 1 min até 1 mg'},
{re:/glicose\s*(a\s*)?50\s*%|g50|glicose hipert/i,n:'Glicose 50%',a:'Glicose 50% — ampola 10 mL (5 g)',c:0.5,v:10,u:'g',im:'IM: não',ev:'EV: 3–5 amp (15–25 g) puro em veia calibrosa, lento; repetir se HGT < 70 em 15 min. Criança: usar G10% 2–5 mL/kg'},
{re:/glicose\s*(a\s*)?25\s*%|g25/i,n:'Glicose 25%',a:'Glicose 25% — ampola 10 mL (2,5 g)',c:0.25,v:10,u:'g',im:'IM: não',ev:'EV: 2–4 mL/kg (criança) em veia periférica'},
{re:/gluconato de c[áa]lcio/i,a:'10% — ampola 10 mL (1 g = 4,65 mEq = 93 mg Ca elementar)',c:100,v:10,u:'mg',im:'IM: não',ev:'EV: 1–2 amp + 100 mL SF/SG5% em 10–20 min (hipercalemia: 1 amp em 2–5 min com monitor). Não misturar com bicarbonato/ceftriaxona'},
{re:/cloreto de c[áa]lcio/i,a:'10% — ampola 10 mL (1 g = 13,6 mEq)',c:100,v:10,u:'mg',im:'IM: não',ev:'EV: via central preferível; 5–10 mL lento 2–5 min (3× mais cálcio que o gluconato)'},
{re:/sulfato de magn[ée]sio|mgso4/i,a:'50% — ampola 10 mL (5 g; 1 mL = 500 mg = 4 mEq) [há 10% amp 10 mL = 1 g]',c:500,v:10,u:'mg',im:'IM (eclâmpsia, esquema Pritchard): 10 g = 1 amp de 50% (10 mL) em cada glúteo, profundo',ev:'EV: 2 g = 4 mL de 50% + 100 mL SF em 10–20 min (asma/torsades 20 min; hipoMg 1–2 h). Eclâmpsia: 4 g = 8 mL 50% + 12 mL AD lento 15–20 min, depois 1–2 g/h (10 mL 50% + 490 mL SF = 10 mg/mL → 100–200 mL/h)'},
{re:/cloreto de pot[áa]ssio|kcl/i,n:'Cloreto de potássio',a:'KCl 19,1% — ampola 10 mL (25 mEq; 1 mL = 2,5 mEq) [10% = 13,4 mEq/10 mL]',c:2.5,v:10,u:'mEq',im:'IM: NUNCA',ev:'EV: SEMPRE diluído — periférico ≤ 40 mEq/L (1 amp 19,1% em ≥ 625 mL; prático: 10 mL em 500 mL SF), ≤ 10–20 mEq/h; central até 20–40 mEq/h com monitor. NUNCA em bolus. Bomba de infusão'},
{re:/fosfato de pot[áa]ssio/i,a:'2 mEq K/mL (+ 1,1 mmol P/mL) — ampola 10 mL',c:2,v:10,u:'mEq',im:'IM: não',ev:'EV: diluir, ≤ 10 mEq/h'},
{re:/bicarbonato de s[óo]dio/i,a:'8,4% — ampola 10 mL (10 mEq; 1 mL = 1 mEq) e frasco 250 mL',c:1,v:10,u:'mEq',im:'IM: não',ev:'EV: PCR/hipercalemia 50 mEq = 5 amp (50 mL) em bolus lento; acidose grave: 1 mEq/kg diluído 1:1 em AD, 30–60 min. Não misturar com cálcio/catecolaminas'},
{re:/cloreto de s[óo]dio\s*20\s*%|nacl\s*20\s*%/i,n:'NaCl 20%',a:'NaCl 20% — ampola 10 mL (34 mEq Na; 1 mL = 3,4 mEq)',c:3.4,v:10,u:'mEq',im:'IM: não',ev:'EV: salina 3% = 4 amp (40 mL) de NaCl 20% + 460 mL SF (ou 2 amp em 250 mL); bolus 100–150 mL em 10–20 min na hiponatremia sintomática'},
{re:/insulina\s*(regular|r\b|humulin\s*r|novolin\s*r)/i,n:'Insulina regular',a:'100 UI/mL — frasco 10 mL (1.000 UI)',c:100,v:10,u:'UI',im:'IM: evitar; SC: seringa de insulina (unidades)',ev:'EV (CAD): 50 UI (0,5 mL) + 50 mL SF = 1 UI/mL; desprezar 20 mL pelo equipo antes; 0,1 UI/kg/h = peso em mL/h, em bomba. Hipercalemia: 10 UI + 50 mL G50% em 15–30 min'},
{re:/octreotida|sandostatin/i,a:'0,1 mg/mL (100 mcg) — ampola 1 mL [há 0,5 mg/mL]',c:0.1,v:1,u:'mg',im:'SC: puro',ev:'EV: 50 mcg (½ amp) bolus; infusão 500 mcg (5 amp) + 500 mL SF = 1 mcg/mL a 50 mL/h'},
{re:/terlipressina/i,a:'frasco-ampola 1 mg + 5 mL diluente [há 0,1 mg/mL 8,5 mL]',c:0.2,v:5,u:'mg',im:'IM: não',ev:'EV: 2 mg bolus lento, depois 1–2 mg 4/4–6/6 h'},
{re:/ocitocina|oxitocina/i,a:'5 UI/mL — ampola 1 mL',c:5,v:1,u:'UI',im:'IM: 10 UI = 2 amp puro (3º período/HPP)',ev:'EV: 20 UI (4 amp) + 500 mL SF, 125–250 mL/h (HPP); nunca bolus EV puro'},
{re:/metilergometrina|methergin/i,a:'0,2 mg/mL — ampola 1 mL',c:0.2,v:1,u:'mg',im:'IM: puro, repetir em 2–4 h se preciso (máx. 5 doses). Contraindicada se HAS/pré-eclâmpsia',ev:'EV: evitar (crise hipertensiva); se imprescindível, lento ≥ 60 s'},
{re:/terbutalina|bricanyl/i,a:'0,5 mg/mL — ampola 1 mL',c:0.5,v:1,u:'mg',im:'SC: 0,25 mg = ½ amp (0,5 mL), repetir em 20 min (máx. 3)',ev:'EV: só em UTI, diluído em bomba'},
{re:/aminofilina/i,a:'24 mg/mL — ampola 10 mL (240 mg)',c:24,v:10,u:'mg',im:'IM: não',ev:'EV: ataque 5–6 mg/kg (1 amp + 100 mL SF) em 20–30 min; manutenção 0,5 mg/kg/h'},
{re:/lidoca[íi]na\s*(a\s*)?2\s*%/i,n:'Lidocaína 2%',a:'Lidocaína 2% sem vasoconstritor — frasco 20 mL (20 mg/mL = 400 mg)',c:20,v:20,u:'mg',im:'Infiltração: até 4,5 mg/kg (70 kg ≈ 15 mL de 2%); com vaso até 7 mg/kg',ev:'EV (arritmia): 1–1,5 mg/kg (70 kg = 100 mg = 5 mL) lento'},
{re:/lidoca[íi]na\s*(a\s*)?1\s*%/i,n:'Lidocaína 1%',a:'Lidocaína 1% sem vasoconstritor — frasco 20 mL (10 mg/mL)',c:10,v:20,u:'mg',im:'Infiltração: até 4,5 mg/kg (70 kg ≈ 30 mL de 1%)',ev:'—'},
{re:/manitol/i,a:'20% — frasco 250 mL (50 g; 1 mL = 200 mg)',c:200,v:250,u:'mg',im:'IM: não',ev:'EV: 0,5–1 g/kg (70 kg = 175–350 mL) em 15–20 min, com filtro; checar osmolaridade'},
{re:/etomidato|hypnomidate/i,a:'2 mg/mL — ampola 10 mL (20 mg)',c:2,v:10,u:'mg',im:'IM: não',ev:'EV: 0,3 mg/kg (70 kg = 21 mg ≈ 10 mL = 1 amp) em 30–60 s'},
{re:/propofol/i,a:'10 mg/mL (1%) — ampola 20 mL (200 mg)',c:10,v:20,u:'mg',im:'IM: não',ev:'EV: indução 1–2 mg/kg (70 kg = 7–14 mL); hipotensão — reduzir no choque'},
{re:/succinilcolina|suxamet[ôo]nio|quelicin/i,a:'frasco-ampola 100 mg (pó) [há 500 mg]',c:10,v:10,u:'mg',im:'IM: 3–4 mg/kg se sem acesso',ev:'EV: 100 mg + 10 mL AD = 10 mg/mL; 1–1,5 mg/kg (70 kg = 100 mg = 10 mL) em bolus'},
{re:/rocur[ôo]nio|esmeron/i,a:'10 mg/mL — frasco 5 mL (50 mg)',c:10,v:5,u:'mg',im:'IM: não',ev:'EV: 1,2 mg/kg na SRI (70 kg = 84 mg ≈ 8,5 mL) em bolus'},
{re:/neostigmina|prostigmine/i,a:'0,5 mg/mL — ampola 1 mL',c:0.5,v:1,u:'mg',im:'IM/SC: puro',ev:'EV: lento, com atropina'},
{re:/sugamadex|bridion/i,a:'100 mg/mL — frasco 2 mL (200 mg)',c:100,v:2,u:'mg',im:'IM: não',ev:'EV: 2–4 mg/kg bolus (16 mg/kg para reversão imediata)'},
{re:/salbutamol.*(EV|IV)/i,n:'Salbutamol',a:'0,5 mg/mL — ampola 1 mL (EV) [spray 100 mcg/jato; NBZ 5 mg/mL]',c:0.5,v:1,u:'mg',im:'SC: 0,25–0,5 mg',ev:'EV: 250 mcg (½ amp) + 9,5 mL SF lento 5 min (UTI)'},
{re:/ipratr[óo]pio/i,a:'NBZ: 0,25 mg/mL (20 gt = 1 mL = 250 mcg)',c:0.25,v:1,u:'mg',im:'—',ev:'NBZ: adulto 40 gt (500 mcg); criança 10–20 gt; + fenoterol + SF até 3–4 mL, O₂ 6–8 L/min'},
{re:/fenoterol|berotec/i,a:'NBZ: 5 mg/mL (1 gt = 0,25 mg)',c:5,v:1,u:'mg',im:'—',ev:'NBZ: adulto 10 gt (2,5 mg); criança 1 gt/3 kg (mín. 3, máx. 10 gt); + SF até 3–4 mL, O₂ 6–8 L/min, repetir 20/20 min × 3'},
{re:/omeprazol.*(EV|IV)/i,n:'Omeprazol',a:'frasco-ampola 40 mg + diluente próprio 10 mL',c:4,v:10,u:'mg',im:'IM: não',ev:'EV: reconstituir com o diluente próprio e aplicar lento 5 min; ou em 100 mL SF, 20–30 min (HDA: 80 mg + 8 mg/h = 2 fr em 100 mL a 10 mL/h, trocar 12/12 h)'},
{re:/pantoprazol.*(EV|IV)/i,n:'Pantoprazol',a:'frasco-ampola 40 mg (pó)',c:4,v:10,u:'mg',im:'IM: não',ev:'EV: 40 mg + 10 mL SF → lento 2–5 min, ou em 100 mL SF 15 min'},
{re:/ranitidina.*(EV|IV|IM)/i,n:'Ranitidina',a:'25 mg/mL — ampola 2 mL (50 mg)',c:25,v:2,u:'mg',im:'IM: puro',ev:'EV: 1 amp + 18 mL SF lento 5 min, ou em 100 mL SF 20 min'},
];

/* ---- motor ---- */
(function(){
const D=window.RX_PREP;
function parseNum(s){s=s.trim();if(/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(s))return parseFloat(s.replace(/\./g,'').replace(',','.'));return parseFloat(s.replace(/\./g,'').replace(',','.'))||parseFloat(s.replace(',','.'))}
function findDose(txt,from,unitWanted){
  const seg=txt.slice(from,from+90);
  const re=/(\d[\d.,]*)\s*(mg|g|mcg|µg|UI|mEq|mL)(?![\w\/%])/gi;let m;
  while((m=re.exec(seg))){const after=seg.slice(m.index+m[0].length,m.index+m[0].length+4);if(/^\s*\/\s*(mL|kg|min|h)/i.test(after))continue;
    let n=parseNum(m[1]),u=m[2].toLowerCase();if(u==='µg')u='mcg';
    if(unitWanted==='mg'){if(u==='g')n*=1000;else if(u==='mcg')n/=1000;else if(u!=='mg')continue;return n}
    if(unitWanted==='mcg'){if(u==='mg')n*=1000;else if(u!=='mcg')continue;return n}
    if(unitWanted==='g'){if(u==='mg')n/=1000;else if(u!=='g')continue;return n}
    if(u===unitWanted.toLowerCase())return n}
  return null}
const fmt=x=>{const r=Math.round(x*100)/100;return String(r).replace('.',',')};
const isFrasco=d=>/^(frasco|bolsa)|\(pó\)|frasco-ampola/i.test(d.a)&&!/^\d/.test(d.a);
function doseTxt(d,dose){return d.u==='mL'?`${fmt(dose)} mL`:d.u==='UI'&&dose>=100000?`${dose.toLocaleString('pt-BR')} UI`:d.u==='mg'&&dose>=1000?`${fmt(dose/1000)} g`:`${fmt(dose)} ${d.u}`}
const perTxt=d=>doseTxt(d,d.c*d.v);
const concTxt=d=>d.u==='mL'?'':d.u==='UI'&&d.c>=100000?'':` (${fmt(d.c)} ${d.u}/mL)`;
function amps(d,dose){const per=d.c*d.v;if(!dose||!per)return '';const n=dose/per,ml=dose/d.c,fr=isFrasco(d);
  if(fr){const fw=/^bolsa/i.test(d.a)?'bolsa':'frasco';if(Math.abs(n-Math.round(n))<0.02){const k=Math.round(n);return `${k} ${fw}${k>1?'s':''} de ${perTxt(d)}`}
    if(n<1)return `${fmt(ml)} mL do frasco de ${perTxt(d)} reconstituído em ${fmt(d.v)} mL`;return `${fmt(n)} frascos de ${perTxt(d)}`}
  if(Math.abs(n-Math.round(n))<0.02){const k=Math.round(n);return `${k} ampola${k>1?'s':''} de ${fmt(d.v)} mL${concTxt(d)}`}
  if(n<1)return `${fmt(ml)} mL da ampola de ${fmt(d.v)} mL${concTxt(d)}`;
  return `${fmt(n)} ampolas (${fmt(ml)} mL)${concTxt(d)}`}
/* primeira oração fora de parênteses — mantém a instrução essencial */
function clause(t){let depth=0,out='';for(let i=0;i<t.length;i++){const ch=t[i];if(ch==='(')depth++;if(ch===')')depth--;if(depth===0&&(ch===';'||(ch==='.'&&t[i+1]===' ')))break;out+=ch}return out.trim()}
const shortPres=d=>d.a.replace(/\s*\[[^\]]*\]/g,'').trim();
window.rxPrep=function(plain){
  const txt=String(plain);if(!/\b(IM|EV|IV|SC|NBZ|infus|bolus|intramusc|endoven|subcut)\b/i.test(txt))return [];
  const out=[],skip=new Set();
  const wantsIM=/\bIM\b|intramusc/i.test(txt),wantsEV=/\b(EV|IV)\b|endoven|infus|bolus/i.test(txt),wantsSC=/\bSC\b|subcut/i.test(txt);
  for(const d of D){const m=d.re.exec(txt);if(!m)continue;if([...skip].some(s=>d.re.test(s)))continue;(d.skip||[]).forEach(s=>skip.add(s));
    const dose=findDose(txt,m.index,d.u);const a=amps(d,dose);
    const name=(d.n||m[0]).replace(/\s+/g,' ').trim();const label=name.charAt(0).toUpperCase()+name.slice(1);
    const head=a?`${label} ${doseTxt(d,dose)} = ${a}`:`${label} — ${shortPres(d)}`;
    const vias=[];
    if((wantsEV||(!wantsIM&&!wantsSC))&&d.ev&&d.ev!=='—'){const c=clause(d.ev);if(c)vias.push(/^EV/i.test(c)?c:'EV: '+c)}
    if((wantsIM||(!wantsEV&&!wantsSC))&&d.im){const c=clause(d.im);if(c)vias.push(/^(IM|SC|Infiltra|NBZ)/i.test(c)?c:'IM: '+c)}
    if(wantsSC&&d.sc)vias.push(clause(d.sc));
    out.push({head,vias});if(out.length>=3)break}
  return out};
window.rxPrepText=function(plain){return window.rxPrep(plain).map(o=>o.head+(o.vias.length?' — '+o.vias.join(' | '):''))};
})();
