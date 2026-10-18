/* Doses pediátricas — referências: Tratado de Pediatria (SBP), Harriet Lane, bulas ANVISA.
   Campos: n nome · c categoria · i indicações · a idade mínima · p apresentações · o observações
   Apresentação: t título · u unidade (gotas/mL/mg/UI/jatos) · per quantidade de fármaco por unidade (mg ou UI) ·
   d dose por kg (número ou [mín,máx]) · v via/intervalo · m máximo por dose (na unidade) · fx texto fixo por idade (sem cálculo) · n notas */
window.PEDS=[
/* ===== ANALGÉSICOS / ANTITÉRMICOS ===== */
{n:'Dipirona',c:'Analgésicos / Antitérmicos',i:'Dor e febre',a:'3 meses',p:[
 {t:'Solução oral (gotas) 500 mg/mL (25 mg/gota)',u:'gotas',per:25,d:12,v:'via oral a cada 6 h se dor ou febre',m:40,n:['bisnagas gotejadoras de 10 ou 20 mL']},
 {t:'Solução oral (xarope) 50 mg/mL',u:'mL',per:50,d:12,v:'via oral a cada 6 h se dor ou febre',m:15,n:['frasco com 100 mL']},
 {t:'Solução injetável 500 mg/mL',u:'mL',per:500,d:12,v:'IM ou EV a cada 6 h se dor ou febre',m:2,n:['ampola com 2 mL','EV: diluir em 10 mL de SF 0,9% e infundir lento']}],
 o:['Dose calculada equivalente a 12 mg/kg/dose (SBP recomenda 10–16 mg/kg/dose)','Contraindicado para menores de 3 meses','IM contraindicado em menores de 3 meses ou com menos de 5 kg','EV contraindicado em menores de 11 meses ou com menos de 9 kg','Dose máxima diária de 4 g','Risco de hipotensão em infusão EV rápida']},
{n:'Ibuprofeno',c:'Analgésicos / Antitérmicos',i:'Dor, febre e inflamação',a:'6 meses',p:[
 {t:'Gotas 50 mg/mL (2,5 mg/gota)',u:'gotas',per:2.5,d:[5,10],v:'via oral a cada 6–8 h',m:160},
 {t:'Gotas 100 mg/mL (5 mg/gota)',u:'gotas',per:5,d:[5,10],v:'via oral a cada 6–8 h',m:80},
 {t:'Suspensão oral 20 mg/mL (100 mg/5 mL)',u:'mL',per:20,d:[5,10],v:'via oral a cada 6–8 h',m:20},
 {t:'Suspensão oral 40 mg/mL',u:'mL',per:40,d:[5,10],v:'via oral a cada 6–8 h',m:10}],
 o:['Dose: 5–10 mg/kg/dose; máximo 40 mg/kg/dia ou 400 mg/dose (adolescentes até 800 mg/dose)','Contraindicado abaixo de 6 meses','Evitar em desidratação, vômitos persistentes, varicela, dengue e doença renal','Administrar com alimento; conferir gotas/mL do produto (20 gotas/mL)']},
{n:'Paracetamol',c:'Analgésicos / Antitérmicos',i:'Dor e febre',a:'Recém-nascido (com cautela)',p:[
 {t:'Gotas 200 mg/mL (≈13 mg/gota, 15 gotas/mL)',u:'gotas',per:13.3,d:[10,15],v:'via oral a cada 4–6 h',m:75,n:['regra prática: 1 gota/kg/dose']},
 {t:'Suspensão oral 32 mg/mL (160 mg/5 mL)',u:'mL',per:32,d:[10,15],v:'via oral a cada 4–6 h',m:31},
 {t:'Comprimido 500 mg',u:'mg',per:1,d:[10,15],v:'via oral a cada 4–6 h',m:1000}],
 o:['Dose: 10–15 mg/kg/dose; máximo 5 doses/dia e 75 mg/kg/dia (até 4 g/dia)','Neonatos: 10 mg/kg/dose a cada 6–8 h','Hepatotoxicidade em superdosagem; conferir gotas/mL do produto (há marcas com 20 gotas/mL = 10 mg/gota)']},
{n:'Tramadol',c:'Analgésicos / Antitérmicos',i:'Dor moderada a intensa',a:'1 ano',p:[
 {t:'Gotas 100 mg/mL (2,5 mg/gota)',u:'gotas',per:2.5,d:[1,2],v:'via oral a cada 6–8 h',m:40},
 {t:'Solução injetável 50 mg/mL',u:'mL',per:50,d:[1,2],v:'EV lento ou IM a cada 6–8 h',m:2}],
 o:['Dose: 1–2 mg/kg/dose; máximo 100 mg/dose e 400 mg/dia (8 mg/kg/dia)','Náusea, vômito, sedação; reduz limiar convulsivo','Opioide fraco: evitar em menores de 12 anos para dor pós-amigdalectomia (FDA)']},
/* ===== ANTI-INFLAMATÓRIOS ===== */
{n:'Ácido Acetilsalicílico',c:'Anti-inflamatórios',i:'Doença de Kawasaki, febre reumática, antiagregação',a:'Evitar como antitérmico (síndrome de Reye)',p:[
 {t:'Comprimido 100 mg — antiagregante',u:'mg',per:1,d:[3,5],v:'via oral 1×/dia',m:100},
 {t:'Comprimido 500 mg — anti-inflamatório (Kawasaki fase aguda)',u:'mg',per:1,d:[20,25],v:'via oral a cada 6 h (80–100 mg/kg/dia)',m:1000}],
 o:['Kawasaki: 80–100 mg/kg/dia 6/6 h até 48–72 h afebril, depois 3–5 mg/kg/dia por 6–8 semanas','Febre reumática: 75–100 mg/kg/dia 6/6 h','Não usar como antitérmico em viroses (risco de síndrome de Reye)','Dose máxima 4 g/dia']},
{n:'Cetoprofeno',c:'Anti-inflamatórios',i:'Dor e inflamação',a:'1 ano (gotas); 6 meses (xarope, bula)',p:[
 {t:'Gotas 20 mg/mL (1 mg/gota)',u:'gotas',per:1,d:[0.5,1],v:'via oral a cada 8 h',m:50},
 {t:'Xarope 1 mg/mL',u:'mL',per:1,d:[0.5,1],v:'via oral a cada 8 h',m:50},
 {t:'Solução injetável 50 mg/mL (IM) / 100 mg frasco (EV)',u:'mg',per:1,d:1,v:'IM ou EV a cada 8–12 h',m:100}],
 o:['Dose: 0,5–1 mg/kg/dose a cada 8 h (máximo 3 mg/kg/dia)','Uso EV/IM apenas acima de 15 anos pela bula','Evitar em desidratação, dengue e nefropatia']},
{n:'Diclofenaco Potássico',c:'Anti-inflamatórios',i:'Dor e inflamação',a:'1 ano (gotas)',p:[
 {t:'Gotas 15 mg/mL (0,5 mg/gota)',u:'gotas',per:0.5,d:[0.5,1],v:'via oral a cada 8 h',m:100},
 {t:'Comprimido 50 mg',u:'mg',per:1,d:[0.5,1],v:'via oral a cada 8 h',m:50}],
 o:['Dose: 0,5–1 mg/kg/dose; máximo 2–3 mg/kg/dia ou 150 mg/dia','Comprimidos apenas acima de 14 anos (bula)','Injetável IM não recomendado em crianças','Evitar em dengue, desidratação e nefropatia']},
{n:'Nimesulida',c:'Anti-inflamatórios',i:'Dor e inflamação',a:'12 anos (ANVISA)',p:[
 {t:'Gotas 50 mg/mL (2,5 mg/gota)',u:'gotas',per:2.5,d:[1,2.5],v:'via oral a cada 12 h',m:40},
 {t:'Comprimido 100 mg',u:'mg',per:1,d:[1,2.5],v:'via oral a cada 12 h',m:100}],
 o:['Contraindicada abaixo de 12 anos no Brasil (hepatotoxicidade)','Dose: 1–2,5 mg/kg/dose (adulto 100 mg 12/12 h); máximo 200 mg/dia','Uso pelo menor tempo possível (até 15 dias)']},
/* ===== ANTIÁCIDOS ===== */
{n:'Cimetidina',c:'Antiácidos',i:'DRGE, úlcera, profilaxia de estresse',a:'Recém-nascido',p:[
 {t:'Comprimido 200 / 400 mg',u:'mg',per:1,d:[5,10],v:'via oral a cada 6 h (20–40 mg/kg/dia)',m:400},
 {t:'Solução injetável 150 mg/mL',u:'mL',per:150,d:[5,10],v:'EV lento a cada 6 h',m:2.7}],
 o:['Dose: 20–40 mg/kg/dia divididos a cada 6 h; neonatos 5–20 mg/kg/dia','Máximo 2,4 g/dia','Interações por inibição do CYP450 (fenitoína, teofilina, varfarina)']},
{n:'Omeprazol',c:'Antiácidos',i:'DRGE, esofagite, úlcera, H. pylori',a:'1 ano (ou > 10 kg)',p:[
 {t:'Cápsula 10 / 20 / 40 mg',u:'mg',per:1,d:[0.7,1.5],v:'via oral 1×/dia em jejum (30 min antes do café)',m:40},
 {t:'Suspensão manipulada 2 mg/mL',u:'mL',per:2,d:1,v:'via oral 1×/dia em jejum',m:20},
 {t:'Frasco-ampola 40 mg (EV)',u:'mg',per:1,d:[0.5,1],v:'EV a cada 12–24 h',m:40}],
 o:['Dose: 1 mg/kg/dia (0,7–3,3 mg/kg/dia); 5–10 kg: 5 mg; 10–20 kg: 10 mg; > 20 kg: 20 mg','Pode abrir a cápsula e dispersar os grânulos em alimento ácido (não triturar)','H. pylori: 1 mg/kg/dose 12/12 h por 14 dias com amoxicilina + claritromicina']},
{n:'Ranitidina',c:'Antiácidos',i:'DRGE, úlcera (retirada do mercado em 2020 — nitrosaminas)',a:'1 mês',p:[
 {t:'Xarope 15 mg/mL',u:'mL',per:15,d:[2,4],v:'via oral a cada 12 h',m:10},
 {t:'Solução injetável 25 mg/mL',u:'mL',per:25,d:[1,2],v:'EV lento a cada 6–8 h',m:2}],
 o:['VO: 4–8 mg/kg/dia divididos a cada 12 h (máximo 300 mg/dia); EV: 2–4 mg/kg/dia a cada 6–8 h','Suspensa pela ANVISA em 2020; preferir omeprazol ou famotidina','Reduzir dose em insuficiência renal']},
/* ===== ANTIALÉRGICOS ===== */
{n:'Cetirizina',c:'Antialérgicos',i:'Rinite alérgica, urticária, prurido',a:'6 meses',p:[
 {t:'Solução oral 1 mg/mL',u:'mL',fx:'6 meses a 2 anos: 2,5 mL 1×/dia (até 12/12 h) · 2–5 anos: 2,5 mL 12/12 h ou 5 mL 1×/dia · 6–11 anos: 5–10 mL 1×/dia · ≥ 12 anos: 10 mL 1×/dia'},
 {t:'Gotas 10 mg/mL (0,5 mg/gota)',u:'gotas',fx:'6 meses a 2 anos: 5 gotas 1×/dia · 2–5 anos: 5 gotas 12/12 h · 6–11 anos: 10–20 gotas 1×/dia · ≥ 12 anos: 20 gotas 1×/dia'},
 {t:'Comprimido 10 mg',u:'mg',fx:'≥ 12 anos (ou ≥ 30 kg): 10 mg 1×/dia'}],
 o:['Dose por idade; equivale a ~0,25 mg/kg/dia','Sedação leve; reduzir dose na insuficiência renal','Anti-H1 de 2ª geração: preferido aos de 1ª geração na SBP']},
{n:'Desloratadina',c:'Antialérgicos',i:'Rinite alérgica, urticária',a:'6 meses',p:[
 {t:'Xarope 0,5 mg/mL',u:'mL',fx:'6–11 meses: 2 mL (1 mg) 1×/dia · 1–5 anos: 2,5 mL (1,25 mg) 1×/dia · 6–11 anos: 5 mL (2,5 mg) 1×/dia · ≥ 12 anos: 10 mL (5 mg) 1×/dia'},
 {t:'Comprimido 5 mg',u:'mg',fx:'≥ 12 anos: 5 mg 1×/dia'}],
 o:['Não sedativo; pode ser dado com ou sem alimento','Ajustar na insuficiência renal ou hepática (dose em dias alternados)']},
{n:'Dexclorfeniramina',c:'Antialérgicos',i:'Rinite, urticária, prurido, reações alérgicas',a:'2 anos',p:[
 {t:'Xarope / solução 0,4 mg/mL (2 mg/5 mL)',u:'mL',per:0.4,d:0.05,v:'via oral a cada 8 h (0,15 mg/kg/dia)',m:5,n:['2–6 anos: 1,25 mL 8/8 h · 6–12 anos: 2,5 mL 8/8 h · > 12 anos: 5 mL 8/8 h']},
 {t:'Comprimido 2 mg',u:'mg',fx:'≥ 12 anos: 2 mg a cada 6–8 h'}],
 o:['Dose: 0,15 mg/kg/dia divididos a cada 8 h; máximo 12 mg/dia','Sedação, excitação paradoxal; evitar em menores de 2 anos','Anticolinérgico: cautela em asma e glaucoma']},
{n:'Fexofenadina',c:'Antialérgicos',i:'Rinite alérgica, urticária crônica',a:'6 meses',p:[
 {t:'Suspensão oral 6 mg/mL (30 mg/5 mL)',u:'mL',fx:'6 meses a 2 anos: 2,5 mL (15 mg) 12/12 h · 2–11 anos: 5 mL (30 mg) 12/12 h'},
 {t:'Comprimido 60 / 120 / 180 mg',u:'mg',fx:'≥ 12 anos: 60 mg 12/12 h ou 120–180 mg 1×/dia'}],
 o:['Não sedativo; não administrar com sucos de frutas (reduz absorção)','Reduzir dose na insuficiência renal']},
{n:'Hidroxizina',c:'Antialérgicos',i:'Prurido, urticária, ansiedade, sedação pré-procedimento',a:'6 meses',p:[
 {t:'Xarope 2 mg/mL (10 mg/5 mL)',u:'mL',per:2,d:[0.5,1],v:'via oral a cada 6–8 h',m:12.5},
 {t:'Comprimido 25 mg',u:'mg',per:1,d:[0.5,1],v:'via oral a cada 6–8 h',m:25}],
 o:['Dose: 2 mg/kg/dia divididos a cada 6–8 h (0,5–1 mg/kg/dose)','Máximo: < 6 anos 50 mg/dia; 6–12 anos 50–100 mg/dia; adolescente 100 mg/dia','Prolongamento de QT: evitar com outros fármacos que alargam QT']},
{n:'Maleato de Bronfeniramina + Cloridrato de Fenilefrina',c:'Antialérgicos',i:'Sintomas de rinite e resfriado (descongestionante)',a:'2 anos (bula); SBP desaconselha antes de 6 anos',p:[
 {t:'Xarope / solução oral (bronfeniramina 2 mg + fenilefrina 5 mg por 5 mL)',u:'mL',fx:'2–6 anos: 2,5 mL a cada 6–8 h · 6–12 anos: 5 mL a cada 6–8 h · ≥ 12 anos: 10 mL a cada 6–8 h'}],
 o:['Descongestionantes sistêmicos não são recomendados em menores de 6 anos (SBP, FDA)','Pode causar irritabilidade, taquicardia, insônia; sedação pelo anti-histamínico','Sem benefício comprovado no resfriado comum']},
{n:'Prometazina',c:'Antialérgicos',i:'Reações alérgicas, náusea, sedação',a:'2 anos',p:[
 {t:'Comprimido 25 mg',u:'mg',per:1,d:[0.1,0.5],v:'via oral a cada 6–8 h',m:25},
 {t:'Solução injetável 25 mg/mL (50 mg/2 mL)',u:'mL',per:25,d:[0.1,0.25],v:'IM profundo a cada 6–8 h',m:1}],
 o:['Contraindicada em menores de 2 anos (depressão respiratória fatal)','Dose: 0,1–0,5 mg/kg/dose; máximo 25 mg/dose','Via EV só diluída e lenta (necrose tecidual; preferir IM)']},
/* ===== ANTIASMÁTICOS ===== */
{n:'Adrenalina (Inalação)',c:'Antiasmáticos',i:'Laringite viral (crupe) moderada a grave, bronquiolite (uso seletivo)',a:'Sem limite',p:[
 {t:'Solução 1:1000 (1 mg/mL) para nebulização',u:'mL',per:1,d:0.5,v:'nebulização com 3 mL de SF 0,9% e O₂ 5–6 L/min; pode repetir em 20 min',m:5}],
 o:['Dose: 0,5 mL/kg da solução 1:1000, máximo 5 mL (alguns serviços: 3 mL em < 4 anos)','Efeito em 30 min com duração de 2 h: observar por pelo menos 2–4 h (efeito rebote)','Associar dexametasona 0,6 mg/kg no crupe','Taquicardia e tremor; cautela em cardiopatas']},
{n:'Fenoterol',c:'Antiasmáticos',i:'Crise de asma / broncoespasmo',a:'Sem limite (preferir salbutamol)',p:[
 {t:'Gotas 5 mg/mL (0,25 mg/gota) para nebulização',u:'gotas',per:0.25,d:0.08,v:'em 3–4 mL de SF 0,9%, a cada 20 min na 1ª hora (3 doses), depois a cada 4–6 h',m:10,n:['regra prática: 1 gota a cada 3 kg (máximo 8–10 gotas)']},
 {t:'Aerossol 100 mcg/jato (com espaçador)',u:'jatos',per:0.1,d:0.03,v:'a cada 20 min na 1ª hora, depois a cada 4–6 h',m:10}],
 o:['Dose: 0,05–0,1 mg/kg/dose (1 gota/3 kg)','Mais taquicardia e tremor que salbutamol; SBP e GINA preferem salbutamol','Monitorar FC e K⁺ em doses repetidas']},
{n:'Ipratrópio',c:'Antiasmáticos',i:'Crise de asma moderada/grave (associado ao β2-agonista)',a:'Sem limite',p:[
 {t:'Solução 0,25 mg/mL (0,0125 mg/gota) para nebulização',u:'gotas',fx:'< 10 kg: 10 gotas (0,125 mg) · 10–20 kg: 20 gotas (0,25 mg) · > 20 kg: 40 gotas (0,5 mg) — junto ao β2 a cada 20 min nas 3 primeiras doses, depois a cada 6–8 h'},
 {t:'Aerossol 20 mcg/jato',u:'jatos',fx:'< 6 anos: 2 jatos · ≥ 6 anos: 4 jatos a cada 20 min (3 doses) na crise'}],
 o:['Reduz internação quando somado ao β2 na crise moderada/grave; sem benefício isolado','Não usar como monoterapia nem de manutenção na asma pediátrica','Boca seca, midríase se atingir os olhos (proteger máscara)']},
{n:'Montelucaste',c:'Antiasmáticos',i:'Asma persistente (alternativa ao CI), broncoespasmo induzido por exercício, rinite alérgica',a:'6 meses',p:[
 {t:'Sachê 4 mg (grânulos)',u:'mg',fx:'6 meses a 5 anos: 4 mg 1×/dia à noite'},
 {t:'Comprimido mastigável 4 / 5 mg',u:'mg',fx:'2–5 anos: 4 mg · 6–14 anos: 5 mg 1×/dia à noite'},
 {t:'Comprimido 10 mg',u:'mg',fx:'≥ 15 anos: 10 mg 1×/dia à noite'}],
 o:['Alerta (FDA/ANVISA): distúrbios neuropsiquiátricos (agitação, pesadelos, depressão) — orientar família','Não serve para crise aguda','Grânulos: misturar com alimento frio e usar em 15 min']},
{n:'Salbutamol',c:'Antiasmáticos',i:'Crise de asma, broncoespasmo, hipercalemia (adjuvante)',a:'Sem limite',p:[
 {t:'Aerossol 100 mcg/jato com espaçador',u:'jatos',per:0.1,d:0.04,v:'a cada 20 min na 1ª hora (3 doses), depois a cada 1–4 h conforme resposta',m:10,n:['regra prática: 1 jato a cada 2–3 kg, mínimo 2 e máximo 10 jatos (crise grave: 4–10)']},
 {t:'Solução para nebulização 5 mg/mL (0,25 mg/gota)',u:'gotas',per:0.25,d:0.15,mn:10,v:'em 3–4 mL de SF 0,9%, a cada 20 min na 1ª hora, depois a cada 4–6 h',m:20,n:['mínimo 2,5 mg (10 gotas) e máximo 5 mg (20 gotas)']},
 {t:'Xarope 0,4 mg/mL (2 mg/5 mL)',u:'mL',per:0.4,d:0.1,v:'via oral a cada 6–8 h (via não recomendada)',m:10}],
 o:['Inalatório com espaçador é tão eficaz quanto nebulização e preferido pela SBP/GINA','Nebulização 0,1–0,15 mg/kg/dose (mín. 2,5 mg, máx. 5 mg)','Monitorar FC, tremor, hipocalemia e hiperglicemia em doses repetidas','Via oral tem mais efeitos adversos e menor eficácia']},
{n:'Sulfato de Magnésio',c:'Antiasmáticos',i:'Crise de asma grave refratária, torsades de pointes, hipomagnesemia',a:'2 anos (asma)',p:[
 {t:'Solução 50% (500 mg/mL) — diluir',u:'mL',per:500,d:[25,75],v:'EV em 20–30 min, diluído em SF/SG para ≤ 60 mg/mL (asma: dose única)',m:4},
 {t:'Solução 10% (100 mg/mL)',u:'mL',per:100,d:[25,75],v:'EV em 20–30 min',m:20}],
 o:['Asma grave: 25–75 mg/kg (máximo 2 g) em 20–30 min, após β2 + ipratrópio + corticoide','Monitorar PA, FC e reflexos; hipotensão com infusão rápida','Torsades/PCR: 25–50 mg/kg EV (máximo 2 g) em bolus']},
{n:'Terbutalina',c:'Antiasmáticos',i:'Crise de asma grave (SC/EV), broncoespasmo',a:'Sem limite (SC); xarope > 2 anos',p:[
 {t:'Solução injetável 0,5 mg/mL',u:'mL',per:0.5,d:0.01,v:'SC a cada 20 min (até 3 doses)',m:0.5,n:['EV (UTI): ataque 2–10 mcg/kg, infusão 0,1–0,4 mcg/kg/min']},
 {t:'Xarope 0,3 mg/mL (1,5 mg/5 mL)',u:'mL',per:0.3,d:[0.05,0.075],v:'via oral a cada 8 h',m:5}],
 o:['SC: 0,01 mg/kg/dose, máximo 0,25–0,4 mg/dose','Taquicardia, tremor, hipocalemia, hiperglicemia; monitorar ECG em infusão contínua']},
/* ===== ANTIBIÓTICOS ===== */
{n:'Ácido Nalidíxico',c:'Antibióticos',i:'ITU baixa não complicada (gram-negativos)',a:'3 meses',p:[
 {t:'Suspensão oral 50 mg/mL (250 mg/5 mL)',u:'mL',per:50,d:13.75,v:'via oral a cada 6 h (55 mg/kg/dia) por 7–10 dias',m:20},
 {t:'Comprimido 500 mg',u:'mg',per:1,d:13.75,v:'via oral a cada 6 h',m:1000}],
 o:['Dose: 55 mg/kg/dia divididos a cada 6 h; máximo 4 g/dia','Não usar em pielonefrite (níveis séricos baixos)','Hipertensão intracraniana benigna, fotossensibilidade; evitar em deficiência de G6PD']},
{n:'Amicacina',c:'Antibióticos',i:'Infecções graves por gram-negativos (associação)',a:'Recém-nascido (dose ajustada)',p:[
 {t:'Solução injetável 250 mg/mL (500 mg/2 mL)',u:'mL',per:250,d:15,v:'EV em 30 min ou IM, 1×/dia',m:6},
 {t:'Solução injetável 50 mg/mL (100 mg/2 mL) — pediátrica',u:'mL',per:50,d:15,v:'EV em 30 min ou IM, 1×/dia',m:30}],
 o:['Dose: 15 mg/kg/dia em dose única (ou 7,5 mg/kg a cada 12 h); máximo 1,5 g/dia','Neonatos: 15 mg/kg a cada 24–48 h conforme idade gestacional','Nefro e ototoxicidade: dosar nível sérico e creatinina; evitar com outros nefrotóxicos']},
{n:'Amoxicilina',c:'Antibióticos',i:'Otite média, sinusite, pneumonia, faringoamigdalite estreptocócica',a:'Recém-nascido',p:[
 {t:'Suspensão 50 mg/mL (250 mg/5 mL) — 50 mg/kg/dia',u:'mL',per:50,d:25,v:'via oral a cada 12 h (ou 16,7 mg/kg 8/8 h)',m:20},
 {t:'Suspensão 80 mg/mL (400 mg/5 mL) — 50 mg/kg/dia',u:'mL',per:80,d:25,v:'via oral a cada 12 h',m:12.5},
 {t:'Suspensão 80 mg/mL — dose alta 90 mg/kg/dia (OMA/pneumonia)',u:'mL',per:80,d:45,v:'via oral a cada 12 h',m:25},
 {t:'Comprimido 500 / 875 mg',u:'mg',per:1,d:[25,45],v:'via oral a cada 12 h',m:1000}],
 o:['Padrão: 50 mg/kg/dia (8/8 h ou 12/12 h); dose alta 80–90 mg/kg/dia 12/12 h para OMA e pneumonia (SBP)','Máximo 2 g/dia (dose padrão) ou 4 g/dia (dose alta)','Faringoamigdalite: 50 mg/kg/dia 1×/dia por 10 dias (máx. 1 g)','Duração: OMA 10 dias (< 2 anos) ou 5–7 dias; pneumonia 7–10 dias']},
{n:'Amoxicilina + Clavulanato',c:'Antibióticos',i:'OMA/sinusite com falha à amoxicilina, mordeduras, infecções por produtores de β-lactamase',a:'Recém-nascido',p:[
 {t:'Suspensão 400 mg + 57 mg / 5 mL (80 mg/mL) — 50 mg/kg/dia',u:'mL',per:80,d:25,v:'via oral a cada 12 h',m:12.5},
 {t:'Suspensão 250 mg + 62,5 mg / 5 mL (50 mg/mL) — 50 mg/kg/dia',u:'mL',per:50,d:25,v:'via oral a cada 12 h (formulação 4:1: preferir 8/8 h)',m:20},
 {t:'Suspensão ES 600 mg + 42,9 mg / 5 mL (120 mg/mL) — 90 mg/kg/dia',u:'mL',per:120,d:45,v:'via oral a cada 12 h',m:16.7},
 {t:'Comprimido 875 + 125 mg',u:'mg',per:1,d:[25,45],v:'via oral a cada 12 h',m:875}],
 o:['Dose em amoxicilina: 45–50 mg/kg/dia (12/12 h) ou 90 mg/kg/dia na dose alta; máximo 4 g/dia','Limitar clavulanato a 10 mg/kg/dia (diarreia): usar formulações 7:1 ou 14:1','Dar com alimento; diarreia é o efeito mais comum']},
{n:'Ampicilina',c:'Antibióticos',i:'Sepse neonatal, meningite (com cefalosporina), pneumonia, infecções por enterococo/Listeria',a:'Recém-nascido',p:[
 {t:'Frasco-ampola 500 mg / 1 g',u:'mg',per:1,d:[25,50],v:'EV ou IM a cada 6 h (100–200 mg/kg/dia)',m:2000},
 {t:'Frasco-ampola — meningite (300–400 mg/kg/dia)',u:'mg',per:1,d:[75,100],v:'EV a cada 6 h',m:3000}],
 o:['Dose: 100–200 mg/kg/dia; meningite 300–400 mg/kg/dia; máximo 12 g/dia','Neonatos: 50 mg/kg/dose a cada 8–12 h (meningite 100 mg/kg/dose)','Rash em mononucleose; diarreia']},
{n:'Ampicilina + Sulbactam',c:'Antibióticos',i:'Pneumonia aspirativa, infecções de pele, intra-abdominais, mordeduras',a:'1 ano (bula); usado em neonatos',p:[
 {t:'Frasco-ampola 1,5 g (1 g + 0,5 g) / 3 g (2 g + 1 g) — dose em ampicilina',u:'mg',per:1,d:[25,50],v:'EV a cada 6 h (100–200 mg/kg/dia)',m:2000}],
 o:['Dose: 100–200 mg/kg/dia de ampicilina divididos a cada 6 h; máximo 8 g/dia de ampicilina','Ajustar na insuficiência renal']},
{n:'Axetilcefuroxima',c:'Antibióticos',i:'OMA, sinusite, pneumonia, infecções de pele, Lyme',a:'3 meses',p:[
 {t:'Suspensão 25 mg/mL (125 mg/5 mL)',u:'mL',per:25,d:15,v:'via oral a cada 12 h, com alimento',m:20},
 {t:'Suspensão 50 mg/mL (250 mg/5 mL)',u:'mL',per:50,d:15,v:'via oral a cada 12 h, com alimento',m:10},
 {t:'Comprimido 250 / 500 mg',u:'mg',per:1,d:15,v:'via oral a cada 12 h',m:500}],
 o:['Dose: 20–30 mg/kg/dia divididos a cada 12 h; máximo 500 mg/dose (1 g/dia)','Absorção melhora com alimento','Sabor amargo: suspensão pode exigir mascarar com alimento']},
{n:'Azitromicina',c:'Antibióticos',i:'Pneumonia atípica, coqueluche, faringite em alérgicos à penicilina, OMA (2ª linha)',a:'6 meses',p:[
 {t:'Suspensão 40 mg/mL (200 mg/5 mL) — 10 mg/kg/dia por 3 dias',u:'mL',per:40,d:10,v:'via oral 1×/dia por 3 dias (ou 5 dias: D1 10 mg/kg, D2–5 5 mg/kg)',m:12.5},
 {t:'Comprimido 500 mg',u:'mg',per:1,d:10,v:'via oral 1×/dia por 3 dias',m:500}],
 o:['Dose: 10 mg/kg/dia por 3 dias (máximo 500 mg/dia) ou 10 mg/kg D1 + 5 mg/kg D2–5','Coqueluche: 10 mg/kg/dia por 5 dias (< 6 meses) ','Prolongamento de QT; estenose hipertrófica do piloro em lactentes']},
{n:'Cefaclor',c:'Antibióticos',i:'OMA, sinusite, infecções de pele e ITU (cefalosporina de 2ª geração)',a:'1 mês',p:[
 {t:'Suspensão 50 mg/mL (250 mg/5 mL)',u:'mL',per:50,d:10,v:'via oral a cada 8 h (ou 20 mg/kg 12/12 h)',m:10},
 {t:'Suspensão 75 mg/mL (375 mg/5 mL)',u:'mL',per:75,d:10,v:'via oral a cada 8 h',m:6.7}],
 o:['Dose: 20–40 mg/kg/dia divididos a cada 8–12 h; máximo 1 g/dia','Reação tipo doença do soro (artralgia + urticária) em crianças']},
{n:'Cefadroxila',c:'Antibióticos',i:'Infecções de pele e partes moles, faringite estreptocócica, ITU',a:'Recém-nascido',p:[
 {t:'Suspensão 50 mg/mL (250 mg/5 mL)',u:'mL',per:50,d:15,v:'via oral a cada 12 h',m:20},
 {t:'Suspensão 100 mg/mL (500 mg/5 mL)',u:'mL',per:100,d:15,v:'via oral a cada 12 h',m:10},
 {t:'Cápsula 500 mg / comprimido 1 g',u:'mg',per:1,d:15,v:'via oral a cada 12 h',m:1000}],
 o:['Dose: 30 mg/kg/dia divididos a cada 12 h (até 50 mg/kg/dia); máximo 2 g/dia','Faringite: pode ser dada 1×/dia (30 mg/kg) por 10 dias']},
{n:'Cefalexina',c:'Antibióticos',i:'Impetigo, celulite, ITU, faringite estreptocócica',a:'Recém-nascido',p:[
 {t:'Suspensão 50 mg/mL (250 mg/5 mL)',u:'mL',per:50,d:12.5,v:'via oral a cada 6 h (50 mg/kg/dia)',m:20},
 {t:'Suspensão 100 mg/mL (500 mg/5 mL)',u:'mL',per:100,d:12.5,v:'via oral a cada 6 h',m:10},
 {t:'Gotas 100 mg/mL (5 mg/gota)',u:'gotas',per:5,d:12.5,v:'via oral a cada 6 h',m:200},
 {t:'Comprimido / cápsula 500 mg',u:'mg',per:1,d:12.5,v:'via oral a cada 6 h',m:1000}],
 o:['Dose: 25–50 mg/kg/dia divididos a cada 6 h (até 100 mg/kg/dia em infecções graves); máximo 4 g/dia','Pode ser dividida a cada 8 h na pele e 12 h na faringite']},
{n:'Cefalotina',c:'Antibióticos',i:'Profilaxia cirúrgica, infecções de pele e osteoarticulares (cefalosporina de 1ª geração EV)',a:'Recém-nascido',p:[
 {t:'Frasco-ampola 1 g',u:'mg',per:1,d:[20,40],v:'EV ou IM a cada 6 h (80–160 mg/kg/dia)',m:2000}],
 o:['Dose: 80–160 mg/kg/dia divididos a cada 6 h; máximo 12 g/dia','Profilaxia cirúrgica: 20–30 mg/kg na indução']},
{n:'Cefazolina',c:'Antibióticos',i:'Profilaxia cirúrgica, infecções de pele, osteomielite por S. aureus sensível',a:'1 mês (usada em neonatos)',p:[
 {t:'Frasco-ampola 1 g',u:'mg',per:1,d:[17,33],v:'EV ou IM a cada 8 h (50–100 mg/kg/dia)',m:2000}],
 o:['Dose: 50–100 mg/kg/dia divididos a cada 8 h; máximo 6 g/dia','Profilaxia cirúrgica: 30 mg/kg (máximo 2 g) 30–60 min antes da incisão']},
{n:'Cefdinir',c:'Antibióticos',i:'OMA, sinusite, faringite, infecções de pele (cefalosporina de 3ª geração oral)',a:'6 meses',p:[
 {t:'Suspensão 25 mg/mL (125 mg/5 mL)',u:'mL',per:25,d:7,v:'via oral a cada 12 h (ou 14 mg/kg 1×/dia)',m:12},
 {t:'Suspensão 50 mg/mL (250 mg/5 mL)',u:'mL',per:50,d:7,v:'via oral a cada 12 h',m:6},
 {t:'Cápsula 300 mg',u:'mg',fx:'≥ 13 anos: 300 mg 12/12 h ou 600 mg 1×/dia'}],
 o:['Dose: 14 mg/kg/dia (1× ou 2×/dia); máximo 600 mg/dia','Fezes avermelhadas com ferro/fórmula (inócuo); separar de antiácidos e ferro por 2 h']},
{n:'Cefepima',c:'Antibióticos',i:'Neutropenia febril, infecções nosocomiais, Pseudomonas',a:'2 meses',p:[
 {t:'Frasco-ampola 1 g / 2 g',u:'mg',per:1,d:50,v:'EV a cada 8 h (neutropenia febril/meningite) ou a cada 12 h',m:2000}],
 o:['Dose: 100–150 mg/kg/dia divididos a cada 8–12 h; máximo 6 g/dia','Neurotoxicidade (mioclonia, encefalopatia) na insuficiência renal: ajustar dose']},
{n:'Ceftriaxona',c:'Antibióticos',i:'Meningite, pneumonia grave, pielonefrite, sepse, gonorreia, febre tifoide',a:'Neonatos: evitar (icterícia, cálcio)',p:[
 {t:'Frasco-ampola 1 g (EV) — dose habitual',u:'mg',per:1,d:[50,75],v:'EV 1×/dia (ou dividido 12/12 h)',m:2000},
 {t:'Frasco-ampola 1 g (EV) — meningite',u:'mg',per:1,d:50,v:'EV a cada 12 h (100 mg/kg/dia)',m:2000},
 {t:'Frasco-ampola 1 g (IM com lidocaína 1%)',u:'mg',per:1,d:50,v:'IM profundo 1×/dia',m:1000}],
 o:['Dose: 50–75 mg/kg/dia (máximo 2 g/dia); meningite 100 mg/kg/dia 12/12 h (máximo 4 g/dia)','OMA dose única IM: 50 mg/kg (até 3 dias se falha)','Não administrar com soluções contendo cálcio (precipitação) em neonatos; evitar em hiperbilirrubinemia neonatal','Pseudolitíase biliar reversível']},
{n:'Cefuroxima',c:'Antibióticos',i:'Pneumonia, infecções de pele, osteoarticulares, pós-operatório (cefalosporina de 2ª geração EV)',a:'Recém-nascido',p:[
 {t:'Frasco-ampola 750 mg / 1,5 g',u:'mg',per:1,d:[25,50],v:'EV ou IM a cada 8 h (75–150 mg/kg/dia)',m:1500}],
 o:['Dose: 75–150 mg/kg/dia divididos a cada 8 h; máximo 6 g/dia','Não é adequada para meningite (resposta inferior à ceftriaxona)']},
{n:'Ciprofloxacino',c:'Antibióticos',i:'ITU complicada, Pseudomonas (fibrose cística), Shigella/febre tifoide resistente, antraz',a:'Uso restrito (1 ano); sem limite quando indicado',p:[
 {t:'Suspensão 50 mg/mL (250 mg/5 mL) / 100 mg/mL',u:'mL',per:50,d:[10,15],v:'via oral a cada 12 h',m:15},
 {t:'Comprimido 250 / 500 mg',u:'mg',per:1,d:[10,15],v:'via oral a cada 12 h',m:750},
 {t:'Solução EV 2 mg/mL (200 mg/100 mL)',u:'mg',per:1,d:10,v:'EV em 60 min a cada 8–12 h',m:400}],
 o:['VO: 20–30 mg/kg/dia divididos 12/12 h (máximo 1,5 g/dia); EV: 20–30 mg/kg/dia 8–12 h (máximo 1,2 g/dia)','Artropatia/tendinopatia em animais jovens: reservar quando não há alternativa','Não dar com leite/antiácidos; fotossensibilidade; QT']},
{n:'Claritromicina',c:'Antibióticos',i:'Pneumonia atípica, coqueluche, H. pylori, micobactérias não tuberculosas',a:'6 meses',p:[
 {t:'Suspensão 25 mg/mL (125 mg/5 mL)',u:'mL',per:25,d:7.5,v:'via oral a cada 12 h por 7–10 dias',m:20},
 {t:'Suspensão 50 mg/mL (250 mg/5 mL)',u:'mL',per:50,d:7.5,v:'via oral a cada 12 h',m:10},
 {t:'Comprimido 250 / 500 mg',u:'mg',per:1,d:7.5,v:'via oral a cada 12 h',m:500}],
 o:['Dose: 15 mg/kg/dia divididos a cada 12 h; máximo 1 g/dia','Muitas interações (CYP3A4): carbamazepina, teofilina, estatinas, midazolam; QT','Gosto metálico, dispepsia']},
{n:'Doxiciclina',c:'Antibióticos',i:'Riquetsioses (febre maculosa), leptospirose, Mycoplasma, acne, malária (profilaxia), cólera',a:'8 anos (exceto febre maculosa: qualquer idade)',p:[
 {t:'Comprimido / cápsula 100 mg',u:'mg',per:1,d:2.2,v:'via oral a cada 12 h (dia 1), depois 2,2 mg/kg 1–2×/dia',m:100},
 {t:'Suspensão 5 mg/mL (manipulada / 25 mg/5 mL)',u:'mL',per:5,d:2.2,v:'via oral a cada 12 h',m:20}],
 o:['Dose: 2–4 mg/kg/dia divididos a cada 12 h; máximo 200 mg/dia; < 45 kg usar mg/kg, ≥ 45 kg dose de adulto','Febre maculosa: iniciar em qualquer idade (benefício supera risco dental em curso ≤ 10 dias)','Tomar com água e sem deitar; fotossensibilidade; não com leite/ferro/antiácidos']},
{n:'Eritromicina',c:'Antibióticos',i:'Coqueluche (> 1 mês), pneumonia atípica, clamídia neonatal, alérgicos à penicilina',a:'Recém-nascido (risco de estenose pilórica < 1 mês)',p:[
 {t:'Suspensão 50 mg/mL (250 mg/5 mL) — estolato/etilsuccinato',u:'mL',per:50,d:10,v:'via oral a cada 6 h (30–50 mg/kg/dia)',m:10},
 {t:'Comprimido 500 mg',u:'mg',per:1,d:10,v:'via oral a cada 6 h',m:500}],
 o:['Dose: 30–50 mg/kg/dia divididos a cada 6–8 h; máximo 2 g/dia','Coqueluche: 40–50 mg/kg/dia por 14 dias (preferir azitromicina em < 1 mês)','Intolerância GI frequente; interações CYP3A4; QT']},
{n:'Fenoximetilpenicilina Potássica',c:'Antibióticos',i:'Faringoamigdalite estreptocócica, profilaxia de febre reumática, erisipela leve',a:'Recém-nascido',p:[
 {t:'Suspensão 80.000 UI/mL (400.000 UI/5 mL; 400.000 UI = 250 mg)',u:'mL',per:50,d:[8,16],v:'via oral a cada 6–8 h por 10 dias',m:10},
 {t:'Comprimido 500.000 UI (≈ 312 mg)',u:'mg',per:1,d:[8,16],v:'via oral a cada 6–8 h',m:625}],
 o:['Dose: 25–50 mg/kg/dia (40.000–80.000 UI/kg/dia) divididos a cada 6–8 h; máximo 3 g/dia','Faringite: < 27 kg 250 mg 12/12 h; ≥ 27 kg 500 mg 12/12 h por 10 dias','Profilaxia de febre reumática: 250 mg 12/12 h contínuo','Dar 1 h antes ou 2 h após as refeições']},
{n:'Gentamicina',c:'Antibióticos',i:'Sepse neonatal (com ampicilina), pielonefrite, infecções por gram-negativos, endocardite (sinergia)',a:'Recém-nascido',p:[
 {t:'Solução injetável 40 mg/mL (80 mg/2 mL)',u:'mL',per:40,d:[5,7.5],v:'EV em 30 min ou IM, 1×/dia (ou 2,5 mg/kg 8/8 h)',m:7.5},
 {t:'Solução injetável 10 mg/mL (20 mg/2 mL) — pediátrica',u:'mL',per:10,d:[5,7.5],v:'EV em 30 min ou IM, 1×/dia',m:30}],
 o:['Dose: 5–7,5 mg/kg/dia em dose única (máximo 300 mg/dia) ou 2–2,5 mg/kg a cada 8 h','Neonatos: 4–5 mg/kg a cada 24–36 h conforme IG e idade','Nefro/ototoxicidade: creatinina e nível vale (< 1 mcg/mL) se uso > 48–72 h']},
{n:'Metronidazol',c:'Antibióticos',i:'Giardíase, amebíase, anaeróbios, C. difficile, vaginose',a:'Recém-nascido (dose ajustada)',p:[
 {t:'Suspensão 40 mg/mL (benzoilmetronidazol 200 mg/5 mL)',u:'mL',per:40,d:10,v:'via oral a cada 8 h (30 mg/kg/dia)',m:12.5},
 {t:'Comprimido 250 / 400 mg',u:'mg',per:1,d:10,v:'via oral a cada 8 h',m:500},
 {t:'Solução EV 5 mg/mL (500 mg/100 mL)',u:'mg',per:1,d:[7.5,10],v:'EV em 30–60 min a cada 8 h',m:500}],
 o:['Dose: 30 mg/kg/dia divididos a cada 8 h; máximo 2 g/dia VO','Giardíase: 15 mg/kg/dia 8/8 h por 5–7 dias; amebíase intestinal: 35–50 mg/kg/dia por 7–10 dias','Efeito dissulfiram com álcool; gosto metálico; neuropatia em uso prolongado']},
{n:'Oxacilina',c:'Antibióticos',i:'Infecções por S. aureus sensível à meticilina (pele, osteomielite, pneumonia, endocardite)',a:'Recém-nascido',p:[
 {t:'Frasco-ampola 500 mg',u:'mg',per:1,d:[25,50],v:'EV a cada 6 h (100–200 mg/kg/dia)',m:2000}],
 o:['Dose: 100–200 mg/kg/dia divididos a cada 6 h; máximo 12 g/dia','Hepatite medicamentosa, neutropenia em uso prolongado (hemograma e TGO/TGP semanais)','Flebite: diluir e infundir em 30 min']},
{n:'Penicilina Benzatina',c:'Antibióticos',i:'Faringoamigdalite estreptocócica, sífilis, profilaxia de febre reumática, impetigo',a:'Recém-nascido (sífilis congênita)',p:[
 {t:'Frasco-ampola 600.000 UI / 1.200.000 UI (IM)',u:'UI',per:1,d:50000,v:'IM profundo (glúteo/vasto lateral) em dose única',m:1200000,n:['< 27 kg: 600.000 UI · ≥ 27 kg: 1.200.000 UI']}],
 o:['Dose: 50.000 UI/kg (máximo 1.200.000 UI) em dose única','Profilaxia secundária de febre reumática: mesma dose a cada 21 dias','Sífilis congênita (sem neurossífilis): 50.000 UI/kg dose única; sífilis adquirida: 50.000 UI/kg/semana × 1–3','Reação de Jarisch-Herxheimer; anafilaxia (observar 30 min)']},
{n:'Penicilina Cristalina (potássica)',c:'Antibióticos',i:'Meningite meningocócica/pneumocócica sensível, sífilis congênita, pneumonia, erisipela grave',a:'Recém-nascido',p:[
 {t:'Frasco-ampola 5.000.000 UI — dose habitual (100.000–200.000 UI/kg/dia)',u:'UI',per:1,d:[25000,50000],v:'EV em 30 min a cada 4–6 h',m:4000000},
 {t:'Frasco-ampola 5.000.000 UI — meningite (300.000–400.000 UI/kg/dia)',u:'UI',per:1,d:[50000,66000],v:'EV a cada 4 h',m:4000000}],
 o:['Dose: 100.000–400.000 UI/kg/dia divididos a cada 4–6 h; máximo 24.000.000 UI/dia','Sífilis congênita: 50.000 UI/kg/dose a cada 12 h (1ª semana de vida) ou 8 h, por 10 dias','Cada 1.000.000 UI contém 1,7 mEq de K⁺: cuidado em doses altas']},
{n:'Penicilina Procaína + Potássica',c:'Antibióticos',i:'Pneumonia leve, erisipela, sífilis congênita (alternativa), faringite',a:'Recém-nascido',p:[
 {t:'Frasco-ampola 400.000 UI (300.000 procaína + 100.000 potássica) — IM',u:'UI',per:1,d:[25000,50000],v:'IM profundo a cada 12–24 h',m:1200000}],
 o:['Dose: 25.000–50.000 UI/kg/dia divididos a cada 12–24 h; máximo 4.800.000 UI/dia','Sífilis congênita: 50.000 UI/kg IM 1×/dia por 10 dias','Nunca EV (procaína); reação psicótica transitória (síndrome de Hoigné)']},
{n:'Piperacilina + Tazobactam',c:'Antibióticos',i:'Neutropenia febril, infecções intra-abdominais, Pseudomonas, pneumonia nosocomial',a:'2 meses',p:[
 {t:'Frasco-ampola 4,5 g (4 g + 0,5 g) — dose em piperacilina',u:'mg',per:1,d:100,v:'EV em 30 min a cada 8 h (2–9 meses: 80 mg/kg 8/8 h)',m:4000}],
 o:['Dose: 300 mg/kg/dia de piperacilina divididos a cada 8 h (até 400 mg/kg/dia 6/6 h); máximo 16 g/dia','Infusão prolongada (4 h) melhora atividade em Pseudomonas','Hipocalemia, alteração plaquetária em uso prolongado']},
{n:'Sulfametoxazol + Trimetoprima',c:'Antibióticos',i:'ITU, Pneumocystis (tratamento e profilaxia), Shigella, MRSA comunitário, otite (alternativa)',a:'2 meses',p:[
 {t:'Suspensão 200 mg + 40 mg / 5 mL (8 mg TMP/mL) — dose em trimetoprima',u:'mL',per:8,d:5,v:'via oral a cada 12 h (8–10 mg/kg/dia de TMP)',m:20},
 {t:'Comprimido 400 + 80 mg / 800 + 160 mg (F)',u:'mg',per:1,d:5,v:'via oral a cada 12 h (dose em TMP)',m:160},
 {t:'Pneumocystis — tratamento (20 mg/kg/dia TMP)',u:'mL',per:8,d:5,v:'via oral ou EV a cada 6 h por 21 dias',m:40},
 {t:'Pneumocystis — profilaxia (5 mg/kg/dia TMP)',u:'mL',per:8,d:2.5,v:'via oral a cada 12 h, 3×/semana',m:20}],
 o:['Dose em trimetoprima: 8–10 mg/kg/dia divididos a cada 12 h; máximo 320 mg/dia de TMP','Contraindicado em < 2 meses (kernicterus) e deficiência de G6PD grave','Hipercalemia, citopenias, Stevens-Johnson; hidratar bem']},
{n:'Vancomicina',c:'Antibióticos',i:'MRSA, infecções graves por gram-positivos resistentes, C. difficile (VO)',a:'Recém-nascido (dose ajustada)',p:[
 {t:'Frasco-ampola 500 mg / 1 g — diluir para ≤ 5 mg/mL',u:'mg',per:1,d:15,v:'EV em 60 min a cada 6 h (60 mg/kg/dia; meningite 15 mg/kg 6/6 h)',m:1000},
 {t:'Via oral (C. difficile): solução 10 mg/mL',u:'mL',per:10,d:10,v:'via oral a cada 6 h por 10 dias',m:12.5}],
 o:['Dose: 40–60 mg/kg/dia divididos a cada 6 h (máximo 2 g/dia inicial); ajustar por nível vale 10–20 mcg/mL (AUC/CIM 400–600)','Síndrome do homem vermelho: infundir em ≥ 60 min','Nefrotoxicidade (sobretudo com aminoglicosídeo/piperacilina-tazobactam): monitorar creatinina']},
/* ===== ANTICONVULSIVANTES ===== */
{n:'Ácido Valproico',c:'Anticonvulsivantes',i:'Epilepsia generalizada e focal, ausências, mioclonias, enxaqueca (profilaxia)',a:'2 anos (hepatotoxicidade maior abaixo)',p:[
 {t:'Xarope / solução 50 mg/mL (250 mg/5 mL)',u:'mL',per:50,d:[5,10],v:'via oral a cada 8–12 h; iniciar 10–15 mg/kg/dia e aumentar 5–10 mg/kg/semana',m:10},
 {t:'Comprimido 250 / 500 mg',u:'mg',per:1,d:[10,20],v:'via oral a cada 12 h',m:1000},
 {t:'Frasco-ampola 500 mg (EV)',u:'mg',per:1,d:[15,20],v:'EV em 5–10 min (ataque); manutenção 1 mg/kg/h',m:1500}],
 o:['Manutenção: 30–60 mg/kg/dia (máximo 60 mg/kg/dia); nível sérico 50–100 mcg/mL','Hepatotoxicidade (< 2 anos, politerapia), pancreatite, trombocitopenia, hiperamonemia; TGO/TGP e hemograma','Teratogênico: evitar em adolescentes com potencial gestacional']},
{n:'Carbamazepina',c:'Anticonvulsivantes',i:'Epilepsia focal, tônico-clônica generalizada, neuralgia do trigêmeo',a:'Sem limite',p:[
 {t:'Suspensão 20 mg/mL (100 mg/5 mL)',u:'mL',per:20,d:[5,10],v:'via oral a cada 8 h; iniciar 5 mg/kg/dia e aumentar a cada 5–7 dias',m:20},
 {t:'Comprimido 200 / 400 mg',u:'mg',per:1,d:[5,10],v:'via oral a cada 8–12 h',m:400}],
 o:['Manutenção: 10–20 mg/kg/dia (máximo 35 mg/kg/dia ou 1,2 g/dia); nível 4–12 mcg/mL','Piora ausências e mioclonias; indutor enzimático (muitas interações)','Stevens-Johnson (HLA-B*1502 em asiáticos), hiponatremia, leucopenia']},
{n:'Fenitoína',c:'Anticonvulsivantes',i:'Estado de mal epiléptico (2ª linha), epilepsia focal/generalizada',a:'Recém-nascido',p:[
 {t:'Solução injetável 50 mg/mL (250 mg/5 mL) — ataque',u:'mL',per:50,d:[15,20],v:'EV lento ≤ 1 mg/kg/min (máx. 50 mg/min), diluída em SF 0,9% com filtro',m:20},
 {t:'Comprimido 100 mg / suspensão 20 mg/mL — manutenção',u:'mg',per:1,d:[2.5,4],v:'via oral a cada 12 h (5–8 mg/kg/dia)',m:150}],
 o:['Ataque: 15–20 mg/kg (máximo 1 g); manutenção 5–8 mg/kg/dia; nível 10–20 mcg/mL','Só em SF 0,9% (precipita em glicose); extravasamento → síndrome da luva roxa','Hipotensão e arritmia na infusão rápida: monitorar ECG e PA']},
{n:'Fenobarbital',c:'Anticonvulsivantes',i:'Convulsão neonatal (1ª linha), estado de mal, epilepsia (manutenção)',a:'Recém-nascido',p:[
 {t:'Solução injetável 100 mg/mL (200 mg/2 mL) — ataque',u:'mL',per:100,d:[15,20],v:'EV lento (≤ 1 mg/kg/min), pode repetir 5–10 mg/kg',m:10},
 {t:'Gotas 40 mg/mL (1 mg/gota) — manutenção',u:'gotas',per:1,d:[3,5],v:'via oral 1×/dia ou a cada 12 h',m:100},
 {t:'Comprimido 100 mg — manutenção',u:'mg',per:1,d:[3,5],v:'via oral 1×/dia',m:200}],
 o:['Ataque: 15–20 mg/kg (máximo 1 g); manutenção 3–5 mg/kg/dia; nível 15–40 mcg/mL','Depressão respiratória, sedação, hiperatividade paradoxal; indutor enzimático','Neonatos: manutenção 3–4 mg/kg/dia iniciada 12–24 h após o ataque']},
/* ===== ANTIEMÉTICOS ===== */
{n:'Bromoprida',c:'Antieméticos',i:'Náuseas e vômitos, refluxo (uso limitado)',a:'1 ano (evitar em lactentes)',p:[
 {t:'Gotas 4 mg/mL (0,2 mg/gota)',u:'gotas',per:0.2,d:0.2,v:'via oral a cada 8 h, 15–30 min antes das refeições',m:50,n:['regra prática: 1 gota/kg/dose']},
 {t:'Solução oral 1 mg/mL',u:'mL',per:1,d:0.2,v:'via oral a cada 8 h',m:10},
 {t:'Solução injetável 5 mg/mL (10 mg/2 mL)',u:'mL',per:5,d:0.15,v:'IM ou EV lento a cada 8 h',m:2}],
 o:['Dose: 0,5–1 mg/kg/dia divididos a cada 8 h (0,15–0,3 mg/kg/dose); máximo 10 mg/dose','Reações extrapiramidais (distonia) em crianças: tratar com biperideno ou prometazina','SBP não recomenda antieméticos de rotina na gastroenterite; ondansetrona é a opção com evidência']},
{n:'Dimenidrinato + Piridoxina',c:'Antieméticos',i:'Náuseas, vômitos, cinetose, vertigem',a:'2 anos',p:[
 {t:'Gotas 25 mg/mL (1,25 mg/gota de dimenidrinato)',u:'gotas',per:1.25,d:1.25,v:'via oral a cada 6–8 h',m:40,n:['regra prática: 1 gota/kg/dose']},
 {t:'Solução oral 2,5 mg/mL (12,5 mg/5 mL)',u:'mL',per:2.5,d:1.25,v:'via oral a cada 6–8 h',m:20},
 {t:'Solução injetável EV (dimenidrinato 3 mg/mL + piridoxina + glicose, 10 mL)',u:'mL',per:3,d:1.25,v:'EV lento (3–5 min) a cada 6–8 h',m:10}],
 o:['Dose: 1,25 mg/kg/dose (5 mg/kg/dia); máximo 300 mg/dia','Contraindicado abaixo de 2 anos; IM 50 mg/mL somente ≥ 12 anos','Sonolência, excitação paradoxal, boca seca']},
{n:'Dimenidrinato + Piridoxina + Frutose + Glicose',c:'Antieméticos',i:'Náuseas e vômitos com necessidade de reposição calórica (EV)',a:'2 anos',p:[
 {t:'Solução injetável EV 10 mL (dimenidrinato 30 mg = 3 mg/mL)',u:'mL',per:3,d:1.25,v:'EV lento em 3–5 min (pode diluir em 50 mL SF) a cada 6–8 h',m:10}],
 o:['Dose: 1,25 mg/kg/dose de dimenidrinato; máximo 30 mg/dose (1 ampola) em crianças','Contraindicado abaixo de 2 anos e em intolerância à frutose','Via exclusivamente EV']},
{n:'Domperidona',c:'Antieméticos',i:'Náuseas, vômitos, refluxo e gastroparesia (uso restrito)',a:'ANVISA: evitar em < 12 anos ou < 35 kg',p:[
 {t:'Suspensão 1 mg/mL',u:'mL',per:1,d:0.25,v:'via oral a cada 8 h, 15–30 min antes das refeições',m:10},
 {t:'Comprimido 10 mg',u:'mg',fx:'≥ 12 anos e ≥ 35 kg: 10 mg a cada 8 h (máximo 30 mg/dia)'}],
 o:['Dose: 0,25 mg/kg/dose a cada 8 h (máximo 0,75 mg/kg/dia e 30 mg/dia)','Prolongamento de QT e morte súbita: evitar com macrolídeos/azólicos; menor dose pelo menor tempo (≤ 7 dias)','Sem evidência de benefício no refluxo do lactente']},
{n:'Metoclopramida',c:'Antieméticos',i:'Náuseas e vômitos (quimioterapia, pós-operatório), gastroparesia',a:'1 ano (ANVISA: evitar < 18 anos)',p:[
 {t:'Gotas 4 mg/mL (0,2 mg/gota)',u:'gotas',per:0.2,d:0.1,v:'via oral a cada 8 h, 30 min antes das refeições',m:50,n:['regra prática: 1 gota a cada 2 kg']},
 {t:'Solução oral 1 mg/mL',u:'mL',per:1,d:0.1,v:'via oral a cada 8 h',m:10},
 {t:'Solução injetável 5 mg/mL (10 mg/2 mL)',u:'mL',per:5,d:0.1,v:'EV lento ou IM a cada 8 h',m:2}],
 o:['Dose: 0,1–0,15 mg/kg/dose a cada 8 h; máximo 0,5 mg/kg/dia e 10 mg/dose','Contraindicada em < 1 ano; reações extrapiramidais frequentes em crianças (biperideno 0,04 mg/kg se distonia)','Uso máximo de 5 dias']},
{n:'Ondansetrona',c:'Antieméticos',i:'Vômitos na gastroenterite aguda (dose única), quimioterapia, pós-operatório',a:'6 meses',p:[
 {t:'Comprimido orodispersível 4 / 8 mg — gastroenterite (dose única)',u:'mg',fx:'8–15 kg: 2 mg · 15–30 kg: 4 mg · > 30 kg: 8 mg, dose única (pode repetir após 8 h)'},
 {t:'Xarope 0,8 mg/mL (4 mg/5 mL)',u:'mL',per:0.8,d:0.15,v:'via oral a cada 8 h',m:10},
 {t:'Solução injetável 2 mg/mL (4 mg/2 mL / 8 mg/4 mL)',u:'mL',per:2,d:0.15,v:'EV lento (2–5 min) a cada 8 h',m:4}],
 o:['Dose: 0,15 mg/kg/dose (máximo 8 mg/dose); na gastroenterite dose única VO 30 min antes da TRO','Única opção antiemética recomendada pela SBP na gastroenterite; reduz necessidade de hidratação EV','Prolongamento de QT; cefaleia; pode aumentar diarreia']},
/* ===== ANTIESPASMÓDICOS ===== */
{n:'Dipirona + Escopolamina',c:'Antiespasmódicos',i:'Cólica abdominal, cólica renal/biliar, dismenorreia',a:'1 ano (gotas, bula); bula adulto ≥ 15 anos para comprimido',p:[
 {t:'Gotas (dipirona 333,4 mg/mL + hioscina 6,67 mg/mL) — 1 gota/kg',u:'gotas',per:16.7,d:[10,16],v:'via oral a cada 6–8 h',m:40,n:['regra prática: 1 gota/kg/dose (máximo 40 gotas)']},
 {t:'Solução injetável (dipirona 2,5 g + hioscina 20 mg / 5 mL)',u:'mL',per:500,d:12,v:'EV lento (diluído) ou IM a cada 6–8 h',m:2.5}],
 o:['Dose em dipirona 10–16 mg/kg/dose; a dose de escopolamina resultante é 0,2–0,3 mg/kg','Contraindicado em < 3 meses; EV lento pelo risco de hipotensão','Anticolinérgico: taquicardia, retenção urinária, hipertermia em lactentes']},
{n:'Escopolamina',c:'Antiespasmódicos',i:'Cólica abdominal, espasmos do trato GI e urinário',a:'1 ano (bula: lactentes a critério médico)',p:[
 {t:'Gotas 10 mg/mL (0,5 mg/gota)',u:'gotas',per:0.5,d:[0.3,0.6],v:'via oral a cada 8 h',m:20,n:['bula: 6–12 anos 10–20 gotas 8/8 h; > 12 anos 20–40 gotas']},
 {t:'Solução injetável 20 mg/mL',u:'mL',per:20,d:[0.3,0.6],v:'EV lento ou IM a cada 8 h',m:1}],
 o:['Dose: 0,3–0,6 mg/kg/dose a cada 8 h; máximo 20 mg/dose (1 ampola)','Hipertermia e taquicardia em lactentes; evitar em miastenia, glaucoma, obstrução intestinal']},
/* ===== ANTIFISÉTICOS ===== */
{n:'Simeticona',c:'Antifiséticos',i:'Cólica do lactente, flatulência, preparo para exames',a:'Sem limite (benefício não comprovado na cólica)',p:[
 {t:'Gotas 75 mg/mL (≈ 3,75 mg/gota)',u:'gotas',fx:'Lactentes: 4–6 gotas (15–22 mg) 3–4×/dia · Crianças: 6–12 gotas 3–4×/dia · ≥ 12 anos: 13–16 gotas (≈ 50 mg) 3–4×/dia'}],
 o:['Não é absorvida; segura, mas sem evidência de eficácia na cólica do lactente (SBP)','Máximo 240 mg/dia em lactentes; 480 mg/dia em adultos']},
/* ===== ANTIFÚNGICOS ===== */
{n:'Anfotericina B Complexo Lipídico',c:'Antifúngicos',i:'Infecções fúngicas invasivas (candidíase, aspergilose, mucormicose), leishmaniose visceral',a:'Sem limite',p:[
 {t:'Frasco 100 mg/20 mL (5 mg/mL) — diluir em SG 5% até 1–2 mg/mL',u:'mg',per:1,d:5,v:'EV em 2 h, 1×/dia',m:500}],
 o:['Dose: 5 mg/kg/dia; leishmaniose 3 mg/kg/dia por 5–7 dias','Febre e calafrios na infusão (pré-medicar com paracetamol/hidrocortisona)','Menos nefrotóxica que a desoxicolato; só em SG 5% (precipita em SF)']},
{n:'Anfotericina B Desoxicolato',c:'Antifúngicos',i:'Infecções fúngicas invasivas, leishmaniose visceral, meningite criptocócica',a:'Sem limite (neonatos: tolerância boa)',p:[
 {t:'Frasco 50 mg — diluir em SG 5% para 0,1 mg/mL',u:'mg',per:1,d:[0.5,1],v:'EV em 4–6 h, 1×/dia (iniciar 0,25–0,5 mg/kg e aumentar)',m:50}],
 o:['Dose: 0,5–1 mg/kg/dia (máximo 1,5 mg/kg/dia); dose teste 0,1 mg/kg opcional','Nefrotoxicidade, hipocalemia, hipomagnesemia, anemia: hidratar com SF antes, dosar eletrólitos e creatinina 2×/semana','Febre e calafrios: pré-medicar; só em SG 5%']},
{n:'Anfotericina B Lipossomal',c:'Antifúngicos',i:'Infecções fúngicas invasivas, neutropenia febril (empírico), leishmaniose visceral',a:'1 mês',p:[
 {t:'Frasco 50 mg — reconstituir em água e diluir em SG 5% (0,2–2 mg/mL)',u:'mg',per:1,d:[3,5],v:'EV em 1–2 h, 1×/dia',m:500}],
 o:['Dose: 3–5 mg/kg/dia (mucormicose até 10 mg/kg/dia); leishmaniose visceral 3–4 mg/kg/dia por 5 dias (dose total ≥ 20 mg/kg)','Menor nefrotoxicidade e reações infusionais; preferida em nefropatas e neonatos','Só em SG 5%; usar filtro de 5 micra']},
{n:'Cetoconazol',c:'Antifúngicos',i:'Dermatofitoses extensas, pitiríase versicolor (sistêmico — uso restrito pela hepatotoxicidade)',a:'2 anos',p:[
 {t:'Comprimido 200 mg',u:'mg',per:1,d:[3.3,6.6],v:'via oral 1×/dia com alimento',m:400}],
 o:['Dose: 3,3–6,6 mg/kg/dia; máximo 400 mg/dia','Uso sistêmico restrito (ANVISA/FDA) por hepatotoxicidade grave: preferir fluconazol, itraconazol ou terbinafina','Interações CYP3A4; absorção requer acidez gástrica']},
{n:'Fluconazol',c:'Antifúngicos',i:'Candidíase oral/esofágica/sistêmica, criptococose (manutenção), profilaxia em prematuros',a:'Recém-nascido',p:[
 {t:'Suspensão 10 mg/mL (50 mg/5 mL) — candidíase oral',u:'mL',per:10,d:3,v:'via oral 1×/dia por 7–14 dias (D1: 6 mg/kg)',m:40},
 {t:'Suspensão 10 mg/mL — candidíase invasiva / esofágica',u:'mL',per:10,d:[6,12],v:'via oral 1×/dia (ataque 12 mg/kg)',m:80},
 {t:'Cápsula 100 / 150 mg',u:'mg',per:1,d:[3,6],v:'via oral 1×/dia',m:400},
 {t:'Solução EV 2 mg/mL (200 mg/100 mL)',u:'mg',per:1,d:[6,12],v:'EV em 1–2 h, 1×/dia',m:800}],
 o:['Dose: 3 mg/kg/dia (oral), 6 mg/kg/dia (esofágica), 12 mg/kg/dia (invasiva); máximo 400–800 mg/dia','Neonatos < 2 semanas: mesma dose a cada 72 h; 2–4 semanas: a cada 48 h','Interações (CYP), QT, hepatotoxicidade; ajustar na insuficiência renal']},
{n:'Griseofulvina',c:'Antifúngicos',i:'Tinea capitis (1ª linha), tinea corporis extensa, onicomicose',a:'2 anos',p:[
 {t:'Comprimido 500 mg (micronizada)',u:'mg',per:1,d:[15,25],v:'via oral 1×/dia com alimento gorduroso, por 6–8 semanas (tinea capitis)',m:1000}],
 o:['Dose: 15–25 mg/kg/dia (micronizada; ultramicronizada 10–15 mg/kg/dia); máximo 1 g/dia','Tinea capitis: tratar até 2 semanas após cura clínica (6–12 semanas); tratar contactantes com xampu de cetoconazol','Cefaleia, fotossensibilidade; contraindicada em porfiria e hepatopatia']},
{n:'Nistatina',c:'Antifúngicos',i:'Candidíase oral (monilíase), candidíase de fralda (creme), prevenção em prematuros',a:'Recém-nascido',p:[
 {t:'Suspensão oral 100.000 UI/mL',u:'mL',fx:'Lactentes: 1–2 mL (100.000–200.000 UI) na boca a cada 6 h, após as mamadas · Crianças: 4–6 mL a cada 6 h · Manter por 7–14 dias (48 h após desaparecer as lesões)'}],
 o:['Aplicar metade em cada lado da boca com conta-gotas; manter o máximo de tempo em contato','Tratar os mamilos da mãe (creme) se amamentando; ferver bicos e chupetas','Não é absorvida; em imunossuprimidos preferir fluconazol']},
{n:'Terbinafina',c:'Antifúngicos',i:'Tinea capitis (Trichophyton), onicomicose, dermatofitoses extensas',a:'4 anos (> 2 anos em alguns protocolos)',p:[
 {t:'Comprimido 250 mg',u:'mg',fx:'< 20 kg: 62,5 mg (¼ cp) 1×/dia · 20–40 kg: 125 mg (½ cp) 1×/dia · > 40 kg: 250 mg 1×/dia — tinea capitis 4–6 semanas; unhas das mãos 6 semanas, dos pés 12 semanas'}],
 o:['Alternativa à griseofulvina na tinea capitis (curso mais curto); menos eficaz contra Microsporum','Hepatotoxicidade rara: TGO/TGP antes se uso > 6 semanas; disgeusia']},
/* ===== ANTIPARASITÁRIOS ===== */
{n:'Albendazol',c:'Antiparasitários',i:'Ascaridíase, ancilostomíase, oxiuríase, tricuríase, giardíase, estrongiloidíase, neurocisticercose, larva migrans',a:'1 ano (2 anos na bula)',p:[
 {t:'Suspensão 40 mg/mL (400 mg/10 mL)',u:'mL',fx:'1–2 anos: 5 mL (200 mg) dose única · ≥ 2 anos: 10 mL (400 mg) dose única · Giardíase e estrongiloidíase: 400 mg/dia por 5 dias (3 na estrongiloidíase) · Tricuríase: 400 mg/dia por 3 dias'},
 {t:'Comprimido mastigável 400 mg',u:'mg',fx:'≥ 2 anos: 400 mg dose única (oxiuríase: repetir em 2 semanas)'},
 {t:'Neurocisticercose / hidatidose — 15 mg/kg/dia',u:'mg',per:1,d:7.5,v:'via oral a cada 12 h com alimento gorduroso, por 8–30 dias (com corticoide)',m:400}],
 o:['Dose única 400 mg para a maioria das helmintíases (200 mg entre 1–2 anos)','Tomar com alimento; tratar contactantes na oxiuríase','Leucopenia e hepatotoxicidade em cursos prolongados; teratogênico']},
{n:'Ivermectina',c:'Antiparasitários',i:'Escabiose, pediculose, estrongiloidíase, larva migrans, oncocercose',a:'≥ 15 kg (ou > 5 anos)',p:[
 {t:'Comprimido 6 mg (200 mcg/kg)',u:'mg',per:1,d:0.2,v:'via oral em jejum, dose única (escabiose: repetir em 7–14 dias; estrongiloidíase: 2 dias)',m:18,n:['15–24 kg: ½ cp · 25–35 kg: 1 cp · 36–50 kg: 1½ cp · 51–65 kg: 2 cp · 66–79 kg: 2½ cp']}],
 o:['Dose: 200 mcg/kg; não usar abaixo de 15 kg (barreira hematoencefálica)','Escabiose: associar permetrina tópica e tratar contactantes','Sem evidência de benefício em viroses']},
{n:'Mebendazol',c:'Antiparasitários',i:'Oxiuríase, ascaridíase, tricuríase, ancilostomíase',a:'1 ano (2 anos na bula)',p:[
 {t:'Suspensão 20 mg/mL (100 mg/5 mL)',u:'mL',fx:'5 mL (100 mg) a cada 12 h por 3 dias, independente do peso · Oxiuríase: 100 mg dose única, repetir em 2 semanas'},
 {t:'Comprimido 100 mg / 500 mg',u:'mg',fx:'100 mg 12/12 h por 3 dias ou 500 mg em dose única'}],
 o:['Dose fixa, não depende do peso','Pouco absorvido; tratar toda a família na oxiuríase','Pode ser mastigado; não exige jejum']},
{n:'Nitazoxanida',c:'Antiparasitários',i:'Giardíase, criptosporidiose, amebíase, helmintíases múltiplas, rotavírus (benefício discutível)',a:'1 ano',p:[
 {t:'Suspensão 20 mg/mL (100 mg/5 mL)',u:'mL',fx:'1–3 anos: 5 mL (100 mg) a cada 12 h por 3 dias · 4–11 anos: 10 mL (200 mg) a cada 12 h por 3 dias',n:['equivale a ~7,5 mg/kg/dose']},
 {t:'Comprimido 500 mg',u:'mg',fx:'≥ 12 anos: 500 mg a cada 12 h por 3 dias'}],
 o:['Tomar com alimento; urina amarelo-esverdeada (inócuo)','Dor abdominal, náuseas e cefaleia leves']},
{n:'Pirvínio',c:'Antiparasitários',i:'Oxiuríase (Enterobius vermicularis)',a:'Sem limite (bula: > 2 anos)',p:[
 {t:'Suspensão 10 mg/mL (50 mg/5 mL)',u:'mL',per:10,d:10,v:'via oral em dose única; repetir em 2 semanas',m:60},
 {t:'Comprimido 100 mg',u:'mg',per:1,d:10,v:'via oral em dose única; repetir em 2 semanas',m:600}],
 o:['Dose: 10 mg/kg (máximo 600 mg) em dose única, repetida após 14 dias','Cora fezes e roupas de vermelho (avisar a família); não exige jejum','Tratar todos os contactantes domiciliares; higiene das mãos e unhas']},
{n:'Secnidazol',c:'Antiparasitários',i:'Giardíase, amebíase intestinal, tricomoníase',a:'2 anos (suspensão)',p:[
 {t:'Suspensão 30 mg/mL (900 mg/30 mL)',u:'mL',per:30,d:30,v:'via oral em dose única após refeição',m:66.7},
 {t:'Comprimido 500 mg / 1 g',u:'mg',per:1,d:30,v:'via oral em dose única',m:2000}],
 o:['Dose: 30 mg/kg em dose única (máximo 2 g)','Gosto metálico, náuseas; efeito dissulfiram (adolescentes: evitar álcool por 72 h)']},
/* ===== ANTITUSSÍGENOS / EXPECTORANTES ===== */
{n:'Acebrofilina',c:'Antitussígenos',i:'Tosse produtiva e broncoespasmo leve (mucolítico + broncodilatador)',a:'2 anos (SBP: sem evidência em < 6 anos)',p:[
 {t:'Xarope pediátrico 5 mg/mL',u:'mL',fx:'2–3 anos: 2,5 mL a cada 12 h · 3–6 anos: 5 mL a cada 12 h · 6–12 anos: 10 mL a cada 12 h (10 mg/mL adulto: 10 mL 12/12 h)'}],
 o:['Dose aproximada de 1 mg/kg/dia divididos em 2 tomadas','Taquicardia, agitação, náuseas; cautela em cardiopatas e epilepsia','SBP: xaropes para tosse não são recomendados em menores de 6 anos']},
{n:'Acetilcisteína',c:'Antitussígenos',i:'Fluidificante (uso discutível), intoxicação por paracetamol (antídoto)',a:'2 anos (xarope); antídoto: qualquer idade',p:[
 {t:'Xarope pediátrico 20 mg/mL (100 mg/5 mL)',u:'mL',fx:'2–4 anos: 5 mL (100 mg) a cada 8–12 h · 4–12 anos: 5 mL (100 mg) a cada 8 h · > 12 anos: 10 mL (200 mg) a cada 8 h'},
 {t:'Antídoto — solução injetável 100 mg/mL (EV) — ataque',u:'mg',per:1,d:150,v:'EV em 60 min (diluída), depois 50 mg/kg em 4 h e 100 mg/kg em 16 h',m:15000},
 {t:'Antídoto — via oral — ataque',u:'mg',per:1,d:140,v:'via oral; depois 70 mg/kg a cada 4 h por 17 doses',m:14000}],
 o:['Mucolítico: 10–20 mg/kg/dia; sem evidência de benefício na tosse aguda (SBP)','Intoxicação por paracetamol: iniciar em até 8 h; nomograma de Rumack-Matthew','Broncoespasmo e reações anafilactoides na infusão EV (reduzir velocidade)']},
{n:'Ambroxol',c:'Antitussígenos',i:'Tosse produtiva, fluidificante (eficácia limitada)',a:'2 anos (SBP: evitar < 6 anos)',p:[
 {t:'Xarope pediátrico 3 mg/mL (15 mg/5 mL)',u:'mL',fx:'2–5 anos: 2,5 mL a cada 8 h · 6–12 anos: 5 mL a cada 8 h · > 12 anos: 10 mL (xarope adulto 6 mg/mL: 5 mL) a cada 8 h'},
 {t:'Gotas 7,5 mg/mL',u:'gotas',fx:'2–5 anos: 10 gotas 8/8 h (1,2–1,6 mg/kg/dia) · 6–12 anos: 20 gotas 8/8 h'}],
 o:['Dose: 1,2–1,6 mg/kg/dia divididos a cada 8 h','Sem evidência de eficácia na tosse aguda; desaconselhado em < 6 anos (SBP)','Náuseas e dispepsia']},
{n:'Bromexina',c:'Antitussígenos',i:'Tosse produtiva, fluidificante (eficácia limitada)',a:'2 anos (SBP: evitar < 6 anos)',p:[
 {t:'Xarope pediátrico 0,8 mg/mL (4 mg/5 mL)',u:'mL',fx:'2–6 anos: 2,5 mL a cada 8 h · 6–12 anos: 5 mL a cada 8 h · > 12 anos: 10 mL a cada 8 h (ou xarope adulto 8 mg/5 mL: 5 mL)'}],
 o:['Dose: 0,3 mg/kg/dia; sem evidência de benefício em tosse aguda (SBP)','Dispepsia, cefaleia']},
{n:'Carbocisteína',c:'Antitussígenos',i:'Tosse produtiva com secreção espessa (eficácia limitada)',a:'2 anos (SBP: evitar < 6 anos)',p:[
 {t:'Xarope pediátrico 20 mg/mL (100 mg/5 mL)',u:'mL',per:20,d:[7,10],v:'via oral a cada 8 h (20–30 mg/kg/dia)',m:10,n:['2–5 anos: 2,5–5 mL 8/8 h · > 5 anos: 5–10 mL 8/8 h']}],
 o:['Dose: 20–30 mg/kg/dia divididos a cada 8 h','Contraindicada em úlcera péptica ativa; desaconselhada em < 6 anos (SBP)']},
{n:'Dexclorfeniramina + Betametasona',c:'Antitussígenos',i:'Rinite alérgica aguda, urticária, dermatite com prurido intenso (uso breve)',a:'2 anos',p:[
 {t:'Xarope (dexclorfeniramina 2 mg + betametasona 0,25 mg / 5 mL)',u:'mL',fx:'2–6 anos: 1,25–2,5 mL a cada 8 h · 6–12 anos: 2,5–5 mL a cada 8 h · > 12 anos: 5–10 mL a cada 8 h, por no máximo 5–7 dias'}],
 o:['Corticoide sistêmico: usar pelo menor tempo; supressão adrenal e hiperglicemia em uso prolongado','Sedação; não tratar tosse ou resfriado comum com esta associação']},
{n:'Drosera 3 CH + Associações',c:'Antitussígenos',i:'Tosse (homeopático — sem evidência de eficácia)',a:'Conforme bula (geralmente > 2 anos)',p:[
 {t:'Xarope / gotas homeopático',u:'mL',fx:'Conforme bula do produto: em geral 2,5–5 mL (ou 5–10 gotas) 3×/dia'}],
 o:['Sem evidência científica de eficácia; não substitui avaliação da causa da tosse','Verificar teor alcoólico e açúcar da formulação']},
{n:'Hedera Helix L',c:'Antitussígenos',i:'Tosse produtiva, bronquite aguda (extrato de hera — evidência limitada)',a:'2 anos',p:[
 {t:'Xarope 7 mg/mL (35 mg/5 mL)',u:'mL',fx:'2–5 anos: 2,5 mL a cada 8 h · 6–11 anos: 5 mL a cada 8 h · ≥ 12 anos: 5–7,5 mL a cada 8 h'},
 {t:'Gotas 20 mg/mL',u:'gotas',fx:'2–5 anos: 10 gotas 8/8 h · 6–11 anos: 15 gotas 8/8 h · ≥ 12 anos: 20 gotas 8/8 h'}],
 o:['Pode causar diarreia e náuseas; evitar em < 2 anos','Evidência de qualidade baixa; SBP não recomenda xaropes em < 6 anos']},
{n:'Levodropropizina',c:'Antitussígenos',i:'Tosse seca irritativa (antitussígeno periférico)',a:'2 anos (SBP: evitar < 6 anos)',p:[
 {t:'Xarope 6 mg/mL (30 mg/5 mL)',u:'mL',per:6,d:0.33,v:'via oral a cada 8 h (1 mg/kg/dia)',m:10,n:['10–20 kg: 3 mL 8/8 h · 20–30 kg: 5 mL 8/8 h · > 12 anos: 10 mL 8/8 h']},
 {t:'Gotas 60 mg/mL (3 mg/gota)',u:'gotas',per:3,d:0.33,v:'via oral a cada 8 h',m:20}],
 o:['Dose: 1 mg/kg/dia divididos a cada 8 h; máximo 60 mg/dose','Não usar em tosse produtiva; sonolência rara','Antitussígenos não são recomendados em < 6 anos (SBP)']},
{n:'Oxomemazina + Associações',c:'Antitussígenos',i:'Tosse irritativa (anti-histamínico fenotiazínico + guaifenesina)',a:'2 anos (contraindicado abaixo; SBP: evitar < 6 anos)',p:[
 {t:'Xarope pediátrico (oxomemazina 0,33 mg/mL)',u:'mL',fx:'2–6 anos: 2,5–5 mL a cada 8 h · 6–12 anos: 5–10 mL a cada 8 h · > 12 anos: 10 mL a cada 8 h (xarope adulto)'}],
 o:['Fenotiazínico: contraindicado em < 2 anos (depressão respiratória, morte súbita)','Sedação, efeitos anticolinérgicos; sem evidência de benefício']},
{n:'Timomodulina',c:'Antitussígenos',i:'Infecções respiratórias de repetição (imunoestimulante — evidência fraca)',a:'1 ano (bula)',p:[
 {t:'Xarope 8 mg/mL (80 mg/10 mL)',u:'mL',fx:'1–6 anos: 5 mL 1–2×/dia · > 6 anos: 10 mL 1–2×/dia, por 1–3 meses'}],
 o:['Evidência de baixa qualidade; não substitui investigação de imunodeficiência quando indicada','Contraindicada em alergia a proteínas bovinas']},
/* ===== ANTIVIRAIS ===== */
{n:'Aciclovir',c:'Antivirais',i:'Herpes neonatal, encefalite herpética, varicela (grupos de risco), herpes-zóster, gengivoestomatite herpética grave',a:'Recém-nascido',p:[
 {t:'Suspensão 40 mg/mL (200 mg/5 mL) — varicela / gengivoestomatite',u:'mL',per:40,d:20,v:'via oral a cada 6 h por 5–7 dias (iniciar em até 24 h do rash)',m:20},
 {t:'Comprimido 200 / 400 mg',u:'mg',per:1,d:20,v:'via oral a cada 6 h',m:800},
 {t:'Frasco-ampola 250 mg (EV) — varicela grave / imunossuprimido',u:'mg',per:1,d:10,v:'EV em 1 h a cada 8 h por 7–10 dias',m:800},
 {t:'Frasco-ampola 250 mg (EV) — encefalite herpética / herpes neonatal',u:'mg',per:1,d:[15,20],v:'EV em 1 h a cada 8 h por 14–21 dias',m:1000}],
 o:['VO: 20 mg/kg/dose a cada 6 h (máximo 800 mg/dose); EV: 10–20 mg/kg/dose a cada 8 h (neonatos 20 mg/kg)','Hidratação adequada (cristalização tubular); ajustar na insuficiência renal','Varicela em criança saudável: não é rotina (SBP); indicar em > 12 anos, 2º caso domiciliar, doença crônica, corticoide']},
{n:'Oseltamivir',c:'Antivirais',i:'Influenza (tratamento em grupos de risco/SRAG e profilaxia pós-exposição)',a:'Recém-nascido (tratamento)',p:[
 {t:'Cápsula 30 / 45 / 75 mg (ou suspensão 6 mg/mL manipulada) — tratamento',u:'mg',fx:'< 1 ano: 3 mg/kg/dose a cada 12 h · ≤ 15 kg: 30 mg · 15–23 kg: 45 mg · 23–40 kg: 60 mg · > 40 kg: 75 mg, a cada 12 h por 5 dias'},
 {t:'Menores de 1 ano — 3 mg/kg/dose',u:'mg',per:1,d:3,v:'via oral a cada 12 h por 5 dias',m:30},
 {t:'Profilaxia pós-exposição (≥ 1 ano)',u:'mg',fx:'Mesma dose por peso, 1×/dia por 10 dias'}],
 o:['Iniciar idealmente em até 48 h do início dos sintomas (em SRAG iniciar mesmo após)','Cápsula pode ser aberta e misturada com alimento doce','Náuseas e vômitos (dar com alimento); raros eventos neuropsiquiátricos']},
/* ===== CORTICOIDES ===== */
{n:'Betametasona',c:'Corticoides',i:'Processos alérgicos e inflamatórios, crupe (alternativa), maturação pulmonar fetal',a:'Sem limite',p:[
 {t:'Elixir 0,1 mg/mL (0,5 mg/5 mL)',u:'mL',per:0.1,d:[0.02,0.1],v:'via oral 1×/dia pela manhã (ou dividido 12/12 h)',m:30},
 {t:'Gotas 0,5 mg/mL',u:'gotas',per:0.025,d:[0.02,0.1],v:'via oral 1×/dia',m:120},
 {t:'Solução injetável 4 mg/mL (fosfato) — IM/EV',u:'mL',per:4,d:[0.1,0.2],v:'IM ou EV 1×/dia',m:2}],
 o:['Dose: 0,02–0,3 mg/kg/dia (equivalente a dexametasona: 0,75 mg = 5 mg de prednisona)','Uso breve (≤ 5–7 dias) não exige desmame','Hiperglicemia, insônia, supressão adrenal em uso prolongado']},
{n:'Dexametasona',c:'Corticoides',i:'Laringite viral (crupe), asma (alternativa à prednisolona), meningite bacteriana, edema cerebral, náuseas da quimioterapia',a:'Sem limite',p:[
 {t:'Elixir 0,1 mg/mL (0,5 mg/5 mL) — crupe / asma',u:'mL',per:0.1,d:0.6,v:'via oral em dose única (asma: 1–2 dias)',m:100},
 {t:'Comprimido 0,5 / 0,75 / 4 mg',u:'mg',per:1,d:0.6,v:'via oral em dose única',m:16},
 {t:'Solução injetável 4 mg/mL (2 mg/mL ou 10 mg/2,5 mL) — crupe / asma / anti-inflamatório',u:'mL',per:4,d:0.6,v:'IM ou EV em dose única (crupe)',m:4},
 {t:'Solução injetável 4 mg/mL — meningite bacteriana',u:'mL',per:4,d:0.15,v:'EV a cada 6 h por 2–4 dias, antes ou junto da 1ª dose de antibiótico',m:2.5}],
 o:['Crupe: 0,6 mg/kg VO/IM dose única (máximo 10–16 mg); 0,15 mg/kg é igualmente eficaz no crupe leve','Asma: 0,6 mg/kg/dia por 1–2 dias (máximo 16 mg) equivale a 5 dias de prednisolona','Meningite: 0,15 mg/kg 6/6 h por 2–4 dias (H. influenzae; pneumococo)','Edema cerebral: 1–2 mg/kg ataque, depois 1–1,5 mg/kg/dia 6/6 h']},
{n:'Hidrocortisona',c:'Corticoides',i:'Insuficiência adrenal aguda, crise asmática grave, anafilaxia (adjuvante), choque refratário',a:'Recém-nascido',p:[
 {t:'Frasco-ampola 100 mg / 500 mg — asma / anafilaxia',u:'mg',per:1,d:[4,8],v:'EV ataque, depois 2–4 mg/kg a cada 6 h',m:250},
 {t:'Frasco-ampola 100 mg — insuficiência adrenal aguda (estresse)',u:'mg',per:1,d:2,v:'EV ou IM: 50–100 mg/m² ataque, depois 100 mg/m²/dia dividido 6/6 h',m:100,n:['< 3 anos: 25 mg · 3–12 anos: 50 mg · > 12 anos: 100 mg']},
 {t:'Comprimido 10 / 20 mg — reposição crônica',u:'mg',per:1,d:0.3,v:'via oral a cada 8 h (8–12 mg/m²/dia)',m:20}],
 o:['Asma/anafilaxia: 4–8 mg/kg (máximo 250 mg) ataque, manutenção 2–4 mg/kg 6/6 h','Choque séptico refratário a catecolaminas: 50–100 mg/m²/dia','Hiperglicemia, hipertensão, hipocalemia']},
{n:'Metilprednisolona',c:'Corticoides',i:'Crise asmática grave (EV), pulsoterapia (nefrite lúpica, vasculites), lesão medular (controverso)',a:'Sem limite',p:[
 {t:'Frasco-ampola 40 / 125 / 500 mg — asma',u:'mg',per:1,d:[1,2],v:'EV a cada 6 h (1–2 mg/kg/dia; grave 2–4 mg/kg/dia)',m:60},
 {t:'Frasco-ampola 500 mg / 1 g — pulsoterapia',u:'mg',per:1,d:30,v:'EV em 1–2 h, 1×/dia por 3 dias',m:1000},
 {t:'Comprimido 4 / 16 mg',u:'mg',per:1,d:[0.5,1],v:'via oral 1×/dia ou a cada 12 h',m:60}],
 o:['Asma: 1–2 mg/kg/dia (máximo 60 mg/dia) por 3–5 dias; sem vantagem sobre prednisolona VO se tolerar','Pulsoterapia: 30 mg/kg/dia (máximo 1 g) por 3 dias; monitorar PA, glicemia e ritmo','Hipertensão e arritmia na infusão rápida; psicose/insônia']},
{n:'Prednisolona',c:'Corticoides',i:'Crise de asma, síndrome nefrótica, laringite (alternativa), reações alérgicas, PTI, Kawasaki (adjuvante)',a:'Sem limite',p:[
 {t:'Solução oral 3 mg/mL (15 mg/5 mL) — asma',u:'mL',per:3,d:[1,2],v:'via oral 1×/dia pela manhã (ou 12/12 h) por 3–5 dias',m:13.3},
 {t:'Solução oral 1 mg/mL (5 mg/5 mL)',u:'mL',per:1,d:[1,2],v:'via oral 1×/dia por 3–5 dias',m:40},
 {t:'Comprimido 5 / 20 mg',u:'mg',per:1,d:[1,2],v:'via oral 1×/dia',m:40},
 {t:'Síndrome nefrótica — 60 mg/m²/dia (≈ 2 mg/kg/dia)',u:'mg',per:1,d:2,v:'via oral 1×/dia por 4–6 semanas, depois 40 mg/m² em dias alternados',m:60}],
 o:['Asma: 1–2 mg/kg/dia (máximo 40 mg/dia; alguns protocolos 60 mg) por 3–5 dias, sem desmame','Dar com alimento; gosto amargo (3 mg/mL é melhor tolerada)','Varicela/herpes-zóster grave em uso de corticoide: orientar família; uso prolongado exige desmame']},
/* ===== DROGAS DA EMERGÊNCIA ===== */
{n:'Ácido Ascórbico',c:'Drogas da Emergência',i:'Metemoglobinemia (alternativa ao azul de metileno), escorbuto, acidificação urinária',a:'Sem limite',p:[
 {t:'Solução injetável 100 mg/mL (500 mg/5 mL) — metemoglobinemia',u:'mg',per:1,d:[50,100],v:'EV lento (diluído) a cada 6–8 h até resposta',m:2000},
 {t:'Comprimido / gotas 200 mg/mL — escorbuto',u:'mg',fx:'100–300 mg/dia VO por 1–2 semanas; lactentes 50 mg/dia'}],
 o:['Metemoglobinemia: preferir azul de metileno 1–2 mg/kg EV; ácido ascórbico 50–100 mg/kg (máximo 10 g/dia) em deficiência de G6PD','Doses altas: oxalúria e cálculos renais; hemólise em G6PD']},
{n:'Adrenalina',c:'Drogas da Emergência',i:'Parada cardiorrespiratória, anafilaxia, choque refratário, bradicardia sintomática',a:'Sem limite',p:[
 {t:'PCR — solução 1:10.000 (0,1 mg/mL: 1 mL de 1:1000 + 9 mL SF)',u:'mL',per:0.1,d:0.01,v:'EV/IO a cada 3–5 min (0,1 mL/kg de 1:10.000)',m:10},
 {t:'Anafilaxia — solução 1:1000 (1 mg/mL) IM',u:'mL',per:1,d:0.01,v:'IM no vasto lateral da coxa; repetir a cada 5–15 min se necessário',m:0.5,n:['máximo 0,3 mg (< 12 anos ou < 30 kg) e 0,5 mg (≥ 12 anos)']},
 {t:'Via endotraqueal — 1:1000',u:'mL',per:1,d:0.1,v:'ET diluída em 3–5 mL SF, seguida de ventilações',m:2.5},
 {t:'Infusão contínua — 0,1 a 1 mcg/kg/min',u:'mg',fx:'Diluir 0,6 × peso (kg) em mg para 100 mL de SG 5%: 1 mL/h = 0,1 mcg/kg/min; titular 0,1–1 mcg/kg/min'}],
 o:['PCR: 0,01 mg/kg (máximo 1 mg) EV/IO a cada 3–5 min; ET 0,1 mg/kg','Anafilaxia: 0,01 mg/kg IM (máximo 0,3–0,5 mg); IM é a via de escolha, nunca EV em bolus fora da PCR','Taquiarritmias, hipertensão, isquemia; infundir em veia calibrosa/central']},
{n:'Atropina',c:'Drogas da Emergência',i:'Bradicardia sintomática (vagal, BAV), intoxicação por organofosforados/carbamatos, pré-medicação para IOT em < 1 ano',a:'Sem limite',p:[
 {t:'Solução injetável 0,25 mg/mL (ou 0,5 mg/mL) — bradicardia',u:'mL',per:0.25,d:0.02,mn:0.4,v:'EV/IO, pode repetir 1× em 5 min',m:2,n:['dose mínima 0,1 mg (0,4 mL); máxima 0,5 mg (criança) e 1 mg (adolescente) por dose']},
 {t:'Intoxicação por organofosforados — 0,05 mg/kg',u:'mL',per:0.25,d:0.05,v:'EV a cada 5–10 min, dobrando até atropinização (secreções secas, FC ↑)',m:8}],
 o:['Bradicardia: 0,02 mg/kg (mínimo 0,1 mg; máximo 0,5 mg/dose, total 1 mg criança / 3 mg adolescente)','Dose < 0,1 mg pode causar bradicardia paradoxal','Organofosforados: não há dose máxima; associar pralidoxima']},
{n:'Clorpromazina',c:'Drogas da Emergência',i:'Agitação psicomotora, psicose, náuseas refratárias, soluço intratável',a:'6 meses (bula); evitar em < 1 ano',p:[
 {t:'Gotas 40 mg/mL (1 mg/gota)',u:'gotas',per:1,d:0.5,v:'via oral a cada 6–8 h',m:25},
 {t:'Solução injetável 5 mg/mL (25 mg/5 mL)',u:'mL',per:5,d:0.5,v:'IM profundo (EV só diluída e lenta) a cada 6–8 h',m:5}],
 o:['Dose: 0,5 mg/kg/dose a cada 6–8 h; máximo 40 mg/dia (< 5 anos) e 75 mg/dia (5–12 anos)','Hipotensão (sobretudo EV), sedação, distonia aguda, síndrome neuroléptica maligna, QT','Contraindicada em depressão do SNC e coma']},
{n:'Diazepam',c:'Drogas da Emergência',i:'Crise convulsiva/estado de mal (1ª linha com midazolam), sedação, abstinência, espasticidade',a:'Recém-nascido (cautela)',p:[
 {t:'Solução injetável 5 mg/mL (10 mg/2 mL) — EV',u:'mL',per:5,d:[0.2,0.3],v:'EV lento (≤ 2 mg/min), pode repetir em 5–10 min (máximo 2 doses)',m:2},
 {t:'Solução injetável 5 mg/mL — via retal',u:'mL',per:5,d:0.5,v:'retal com sonda/seringa (sem agulha), pode repetir em 10 min',m:4},
 {t:'Comprimido 5 / 10 mg — sedação / espasticidade',u:'mg',per:1,d:[0.1,0.3],v:'via oral a cada 6–8 h',m:10}],
 o:['Convulsão: 0,2–0,3 mg/kg EV (máximo 10 mg); retal 0,5 mg/kg (máximo 20 mg)','Depressão respiratória, sobretudo após 2 doses ou com fenobarbital: ter ventilação à mão','Não diluir nem infundir contínuo (precipita); não IM (absorção errática)']},
{n:'Dobutamina',c:'Drogas da Emergência',i:'Choque cardiogênico, disfunção miocárdica (sepse com débito baixo)',a:'Sem limite',p:[
 {t:'Ampola 250 mg/20 mL (12,5 mg/mL) — infusão 2 a 20 mcg/kg/min',u:'mg',fx:'Diluir 6 × peso (kg) em mg para 100 mL de SG 5%: 1 mL/h = 1 mcg/kg/min · Iniciar 5 mcg/kg/min e titular até 20'}],
 o:['Dose: 2–20 mcg/kg/min; inotrópico com vasodilatação (pode causar hipotensão)','Taquiarritmias; pode ser infundida em veia periférica','Ver módulo Infusões para o cálculo de mL/h']},
{n:'Fentanila',c:'Drogas da Emergência',i:'Analgesia em dor intensa, sequência rápida de intubação, sedoanalgesia em VM',a:'Recém-nascido',p:[
 {t:'Solução injetável 50 mcg/mL — bolus',u:'mL',per:50,d:[1,2],v:'EV lento em 3–5 min (dose em mcg/kg), a cada 1–2 h',m:2,n:['dose em mcg: 1–2 mcg/kg; SRI 1–3 mcg/kg']},
 {t:'Infusão contínua 1 a 3 mcg/kg/h',u:'mcg',fx:'Diluir 50 × peso (kg) em mcg para 50 mL SF: 1 mL/h = 1 mcg/kg/h · Iniciar 1 mcg/kg/h e titular'}],
 o:['Bolus: 1–2 mcg/kg (máximo 100 mcg/dose); 100× mais potente que morfina','Rigidez torácica com bolus rápido ou dose alta (tratar com naloxona/bloqueador neuromuscular)','Depressão respiratória, bradicardia; tolerância rápida em infusão prolongada']},
{n:'Flumazenil',c:'Drogas da Emergência',i:'Reversão de sedação por benzodiazepínico (iatrogênica); intoxicação (com cautela)',a:'1 ano (usado abaixo)',p:[
 {t:'Solução injetável 0,1 mg/mL (0,5 mg/5 mL)',u:'mL',per:0.1,d:0.01,v:'EV em 15 s; repetir a cada 1 min até resposta (máximo 5 doses ou 1 mg)',m:2}],
 o:['Dose: 0,01 mg/kg (máximo 0,2 mg/dose); dose total máxima 0,05 mg/kg ou 1 mg','Risco de convulsão em usuários crônicos de BZD, intoxicação mista com tricíclicos ou epilépticos: evitar','Meia-vida curta: ressedação após 20–60 min, observar']},
{n:'Loperamida',c:'Drogas da Emergência',i:'Diarreia crônica em situações selecionadas (NÃO indicada em diarreia aguda infantil)',a:'Contraindicada em < 2 anos; SBP desaconselha em < 12 anos na diarreia aguda',p:[
 {t:'Comprimido / cápsula 2 mg',u:'mg',fx:'6–8 anos (20–30 kg): 2 mg até 2×/dia · 8–12 anos (> 30 kg): 2 mg até 3×/dia · ≥ 12 anos: 4 mg, depois 2 mg após cada evacuação (máximo 8 mg/dia)'}],
 o:['Contraindicada em < 2 anos (íleo paralítico, depressão respiratória, morte) e em diarreia com sangue/febre','Na gastroenterite aguda pediátrica: hidratação oral, zinco e alimentação precoce (SBP/OMS); antidiarreicos não são recomendados']},
{n:'Manitol',c:'Drogas da Emergência',i:'Hipertensão intracraniana, edema cerebral, glaucoma agudo',a:'Sem limite',p:[
 {t:'Solução 20% (200 mg/mL)',u:'mL',per:200,d:[250,1000],v:'EV em 20–30 min, pode repetir a cada 4–6 h',m:500,n:['0,25–1 g/kg = 1,25–5 mL/kg de manitol 20%']}],
 o:['Dose: 0,25–1 g/kg/dose; manter osmolaridade sérica < 320 mOsm/L','Hipovolemia e hipernatremia: monitorar diurese, eletrólitos e PA; usar filtro (cristaliza)','Salina hipertônica 3% (2–5 mL/kg) é alternativa, sobretudo em hipovolemia']},
{n:'Midazolam',c:'Drogas da Emergência',i:'Crise convulsiva (1ª linha), sedação para procedimentos, pré-anestésico, sedação em VM',a:'Recém-nascido',p:[
 {t:'Solução injetável 5 mg/mL — EV (convulsão / sedação)',u:'mL',per:5,d:[0.1,0.2],v:'EV lento em 2–3 min; pode repetir em 5–10 min',m:2,n:['sedação para procedimento: 0,05–0,1 mg/kg, titular']},
 {t:'Solução injetável 5 mg/mL — IM (convulsão sem acesso)',u:'mL',per:5,d:0.2,v:'IM no vasto lateral',m:2},
 {t:'Solução injetável 5 mg/mL — intranasal / bucal',u:'mL',per:5,d:[0.2,0.3],v:'intranasal (metade em cada narina, com atomizador) ou bucal',m:2},
 {t:'Via oral — pré-anestésico (solução 2 mg/mL ou ampola com xarope)',u:'mg',per:1,d:0.5,v:'via oral 20–30 min antes do procedimento',m:20},
 {t:'Infusão contínua 0,05 a 0,2 mg/kg/h',u:'mg',fx:'Diluir 3 × peso (kg) em mg para 50 mL SF: 1 mL/h = 1 mcg/kg/min (0,06 mg/kg/h)'}],
 o:['Convulsão: EV 0,1–0,2 mg/kg; IM 0,2 mg/kg; intranasal/bucal 0,2–0,3 mg/kg; máximo 10 mg/dose','Depressão respiratória e hipotensão (sobretudo com opioide): monitorar SatO₂','Agitação paradoxal; antídoto flumazenil']},
{n:'Morfina',c:'Drogas da Emergência',i:'Dor intensa (trauma, queimadura, crise falciforme, pós-operatório), edema agudo de pulmão, cuidados paliativos',a:'Recém-nascido (cautela)',p:[
 {t:'Solução injetável 10 mg/mL (diluir 1 mL + 9 mL SF = 1 mg/mL)',u:'mg',per:1,d:[0.05,0.1],v:'EV lento (5 min) a cada 2–4 h; titular',m:5},
 {t:'Solução injetável 1 mg/mL (ou 0,2 mg/mL)',u:'mL',per:1,d:[0.05,0.1],v:'EV lento ou SC a cada 2–4 h',m:5},
 {t:'Via oral — solução 10 mg/mL ou comprimido 10 / 30 mg',u:'mg',per:1,d:[0.2,0.5],v:'via oral a cada 4–6 h',m:15},
 {t:'Infusão contínua 10 a 40 mcg/kg/h',u:'mg',fx:'Diluir 0,5 × peso (kg) em mg para 50 mL SF: 1 mL/h = 10 mcg/kg/h'}],
 o:['EV: 0,05–0,1 mg/kg/dose (máximo 2–4 mg inicial em crianças pequenas; 5–10 mg adolescentes); VO: 0,2–0,5 mg/kg','Depressão respiratória, hipotensão, prurido, náuseas, retenção urinária; naloxona à mão','Neonatos: 0,05 mg/kg, intervalos maiores']},
{n:'Naloxona',c:'Drogas da Emergência',i:'Intoxicação/depressão respiratória por opioide',a:'Recém-nascido',p:[
 {t:'Solução injetável 0,4 mg/mL — intoxicação (reversão total)',u:'mL',per:0.4,d:0.1,v:'EV/IO/IM/SC; repetir a cada 2–3 min até resposta',m:5,n:['≤ 20 kg ou < 5 anos: 0,1 mg/kg · > 20 kg: 2 mg']},
 {t:'Solução injetável 0,4 mg/mL — depressão iatrogênica (reversão parcial)',u:'mL',per:0.4,d:[0.001,0.005],v:'EV, titular a cada 2–3 min',m:0.5},
 {t:'Infusão contínua',u:'mg',fx:'⅔ da dose eficaz por hora (opioides de longa ação, como metadona)'}],
 o:['Dose: 0,1 mg/kg (máximo 2 mg); em uso crônico de opioide titular 0,001–0,005 mg/kg (síndrome de abstinência)','Meia-vida (30–60 min) menor que a de muitos opioides: observar ≥ 4–6 h e repetir/infundir','Via intranasal 2–4 mg se sem acesso (adolescentes)']},
{n:'Noradrenalina',c:'Drogas da Emergência',i:'Choque séptico quente/vasodilatado, choque com hipotensão refratária a volume',a:'Sem limite',p:[
 {t:'Ampola 4 mg/4 mL (1 mg/mL) — infusão 0,05 a 2 mcg/kg/min',u:'mg',fx:'Diluir 0,6 × peso (kg) em mg para 100 mL de SG 5%: 1 mL/h = 0,1 mcg/kg/min · Iniciar 0,05–0,1 mcg/kg/min e titular até 1–2'}],
 o:['Dose: 0,05–2 mcg/kg/min; 1ª escolha no choque séptico com hipotensão (Surviving Sepsis pediátrico)','Preferir acesso central; extravasamento: fentolamina ou terbutalina SC local','Ver módulo Infusões para o cálculo de mL/h']},
{n:'Petidina',c:'Drogas da Emergência',i:'Dor intensa quando outros opioides não disponíveis (não recomendada em pediatria)',a:'Evitar (bula: > 1 ano)',p:[
 {t:'Solução injetável 50 mg/mL (100 mg/2 mL)',u:'mL',per:50,d:[1,1.5],v:'IM ou EV lento (diluída) a cada 3–4 h',m:2}],
 o:['Dose: 1–1,5 mg/kg/dose (máximo 100 mg); evitar uso > 48 h (acúmulo de normeperidina → convulsões)','Preferir morfina ou fentanila; interação grave com IMAO','Depressão respiratória, hipotensão, taquicardia']},
{n:'Propofol',c:'Drogas da Emergência',i:'Indução anestésica, sedação para procedimentos curtos, estado de mal refratário (UTI)',a:'1 mês (indução); 3 anos (manutenção)',p:[
 {t:'Emulsão 10 mg/mL (1%) — indução',u:'mL',per:10,d:[1,3],v:'EV em 20–30 s; doses adicionais 0,5–1 mg/kg (crianças pequenas: 2,5–3,5 mg/kg)',m:20},
 {t:'Infusão — sedação 25 a 75 mcg/kg/min (anestesia 100–300)',u:'mg',fx:'Puro (10 mg/mL): mL/h = peso (kg) × dose (mcg/kg/min) × 0,006 · Ex.: 20 kg a 50 mcg/kg/min = 6 mL/h'}],
 o:['Hipotensão e apneia na indução: ter via aérea e volume prontos; dor à injeção (lidocaína)','Síndrome da infusão do propofol (PRIS): evitar > 4 mg/kg/h por > 48 h em UTI pediátrica','Contraindicado em alergia a ovo/soja (controverso) e em < 1 mês']},
{n:'Propranolol',c:'Drogas da Emergência',i:'Hemangioma infantil, crise de cianose (tetralogia), TSV (controle), tireotoxicose, enxaqueca (profilaxia), hipertensão',a:'Recém-nascido (hemangioma: > 5 semanas)',p:[
 {t:'Comprimido 10 / 40 mg (ou solução 1 mg/mL manipulada) — hemangioma',u:'mg',per:1,d:[0.5,1],v:'via oral a cada 12 h com alimento; iniciar 1 mg/kg/dia e subir até 2–3 mg/kg/dia em 1–2 semanas',m:40},
 {t:'Via oral — arritmia / tireotoxicose / hipertensão',u:'mg',per:1,d:[0.25,1],v:'via oral a cada 6–8 h (0,5–1 mg/kg/dia; até 4 mg/kg/dia)',m:60},
 {t:'Solução injetável 1 mg/mL — crise de cianose / TSV',u:'mL',per:1,d:[0.01,0.1],v:'EV lento em 10 min; pode repetir em 15 min',m:1}],
 o:['Hemangioma: 2–3 mg/kg/dia 12/12 h por 6–12 meses; monitorar FC, PA e glicemia nas 2 primeiras horas das doses iniciais','Contraindicado em asma, BAV, bradicardia, choque cardiogênico; hipoglicemia em jejum (dar com alimento)','EV: máximo 1 mg/dose em crianças; monitorização contínua']},
{n:'Quetamina',c:'Drogas da Emergência',i:'Sedoanalgesia para procedimentos, SRI (asma, choque), analgesia em dor intensa (dose baixa)',a:'3 meses',p:[
 {t:'Solução injetável 50 mg/mL — EV',u:'mL',per:50,d:[1,2],v:'EV em 1–2 min; doses adicionais 0,5 mg/kg a cada 10–15 min',m:4},
 {t:'Solução injetável 50 mg/mL — IM',u:'mL',per:50,d:[4,5],v:'IM; início em 3–5 min, duração 15–30 min',m:10},
 {t:'Analgesia (dose subdissociativa) 0,1 a 0,3 mg/kg',u:'mL',per:50,d:[0.1,0.3],v:'EV lento em 10 min (diluída)',m:1}],
 o:['Sedação: 1–2 mg/kg EV ou 4–5 mg/kg IM; SRI 1–2 mg/kg','Laringoespasmo, sialorreia (atropina opcional), vômitos, alucinações ao despertar (menos em < 10 anos); midazolam reduz','Evitar em psicose, hipertensão intracraniana descontrolada e < 3 meses']},
{n:'Sulfato de Zinco',c:'Drogas da Emergência',i:'Diarreia aguda (OMS/SBP: reduz duração e gravidade), deficiência de zinco',a:'Sem limite',p:[
 {t:'Solução oral 4 mg/mL (zinco elementar) / xarope 2 mg/mL',u:'mg',fx:'< 6 meses: 10 mg/dia (2,5 mL de 4 mg/mL) por 10–14 dias · ≥ 6 meses: 20 mg/dia (5 mL de 4 mg/mL) por 10–14 dias'},
 {t:'Comprimido dispersível 20 mg',u:'mg',fx:'< 6 meses: ½ cp (10 mg) 1×/dia · ≥ 6 meses: 1 cp (20 mg) 1×/dia por 10–14 dias'}],
 o:['Recomendação OMS/SBP para toda diarreia aguda em < 5 anos (sobretudo desnutridos), junto com hidratação oral','Náuseas e vômitos (dar com alimento); conferir se a concentração do produto é de zinco elementar ou de sulfato']},
{n:'Sulfato Ferroso',c:'Drogas da Emergência',i:'Anemia ferropriva (tratamento), profilaxia de ferropenia (SBP: lactentes, pré-termo)',a:'Recém-nascido (pré-termo a partir de 30 dias)',p:[
 {t:'Gotas 125 mg/mL de sulfato ferroso (25 mg de Fe elementar/mL; 1,25 mg Fe/gota) — tratamento',u:'gotas',per:1.25,d:[3,5],v:'via oral 1×/dia (ou 12/12 h) longe das refeições, com suco cítrico, por 3–6 meses',m:120,n:['dose em ferro elementar: 3–5 mg/kg/dia']},
 {t:'Gotas 25 mg Fe/mL — profilaxia (1 mg/kg/dia)',u:'gotas',per:1.25,d:1,v:'via oral 1×/dia',m:24},
 {t:'Xarope 5 mg Fe/mL (25 mg Fe/5 mL) — tratamento',u:'mL',per:5,d:[3,5],v:'via oral 1×/dia ou 12/12 h',m:30},
 {t:'Comprimido 40 mg Fe (sulfato 200 mg)',u:'mg',per:1,d:[3,5],v:'via oral 1×/dia ou 12/12 h',m:120}],
 o:['Tratamento: 3–5 mg/kg/dia de ferro elementar (máximo 150–200 mg/dia) por 3–6 meses; reticulócitos sobem em 7–10 dias','Profilaxia (SBP 2018): 1 mg/kg/dia dos 3 meses aos 2 anos (aleitamento exclusivo) ; pré-termo/baixo peso: 2–4 mg/kg/dia do 30º dia até 1 ano, depois 1 mg/kg/dia','Fezes escuras, dispepsia, escurecimento dos dentes (diluir, escovar); intoxicação grave em superdosagem — guardar longe de crianças']},
/* ===== LAXANTES ===== */
{n:'Hidróxido de Magnésio',c:'Laxantes',i:'Constipação funcional (osmótico), dispepsia',a:'2 anos (evitar abaixo e em nefropatas)',p:[
 {t:'Suspensão 8% (80 mg/mL — leite de magnésia)',u:'mL',per:80,d:[80,240],v:'via oral 1×/dia à noite (1–3 mL/kg/dia)',m:60,n:['2–5 anos: 5–15 mL/dia · 6–11 anos: 15–30 mL/dia · ≥ 12 anos: 30–60 mL/dia']}],
 o:['Dose: 1–3 mL/kg/dia (até 60 mL/dia); ajustar para fezes pastosas diárias','Hipermagnesemia em lactentes e insuficiência renal; cólicas','Polietilenoglicol 3350 (0,4–0,8 g/kg/dia) é a 1ª escolha na constipação funcional (SBP/NASPGHAN)']},
{n:'Lactulose',c:'Laxantes',i:'Constipação funcional, encefalopatia hepática',a:'Sem limite (lactentes com cautela)',p:[
 {t:'Xarope 667 mg/mL (10 g/15 mL)',u:'mL',per:667,d:[667,2000],v:'via oral 1×/dia ou dividido 12/12 h (1–3 mL/kg/dia)',m:60},
 {t:'Encefalopatia hepática',u:'mL',per:667,d:[1300,2000],v:'via oral a cada 6–8 h até 2–3 evacuações pastosas/dia',m:30}],
 o:['Dose: 1–3 mL/kg/dia (máximo 60 mL/dia); titular pelo efeito','Flatulência, distensão e cólicas (reduzir dose); contém galactose/lactose','Encefalopatia: 2–3 mL/kg/dose a cada 6–8 h']},
{n:'Óleo Mineral',c:'Laxantes',i:'Constipação funcional (lubrificante), desimpactação (adjuvante)',a:'1 ano (evitar abaixo); contraindicado em risco de aspiração',p:[
 {t:'Óleo mineral puro (1 mL = 1 mL)',u:'mL',per:1,d:[1,3],v:'via oral 1×/dia ou 12/12 h, longe das refeições (gelado ou com suco)',m:90}],
 o:['Dose: 1–3 mL/kg/dia (máximo 90 mL/dia); desimpactação 15–30 mL/ano de idade (máximo 240 mL)','Pneumonia lipoídica se aspirado: contraindicado em < 1 ano, neuropatas, refluxo grave e disfagia','Uso prolongado reduz absorção de vitaminas A, D, E e K; escape de óleo pelo ânus']},
];
