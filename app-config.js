/* ============================================================
   MedKit (MeK) — CONFIGURAÇÃO DO APP
   Este é o ÚNICO arquivo que você precisa editar para ligar
   login, assinatura e IA. Enquanto estiver vazio, o app roda
   em "modo demonstração" (sem login, IA só com chave própria).
   ============================================================ */
window.APP_CFG = {
  appName: 'MedKit',
  version: '1.0.0',

  /* 1) LOGIN (Supabase — plano gratuito serve)
     supabase.com → New project → Settings → API:
     copie "Project URL" e "anon public" key. */
  supabaseUrl: 'https://musixhvqxyuwziyywzqe.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11c2l4aHZxeHl1d3ppeXl3enFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzNjUzMTYsImV4cCI6MjEwNzk0MTMxNn0.cbn48dKG52FwOctuGrEs86HWLkEnhxAPsHiPf36ccGg',

  /* 2) QUEM PODE ENTRAR
     'convite'    → só e-mails que VOCÊ marcar como autorizados na tabela
                    profiles (coluna "autorizado") entram. Sem cobrança.
     'assinatura' → teste grátis + pagamento (lojas/Mercado Pago). */
  accessMode: 'convite',

  /* 2) ASSINATURA (usada quando accessMode = 'assinatura') */
  plan: { name: 'MedKit Pro', price: 'R$ 29,90', period: 'mês', trialDays: 7 },

  /* 2a) Pagamento pela WEB (fora das lojas) — link de assinatura
     recorrente do Mercado Pago ou Stripe. O webhook (pasta
     supabase/functions/mp-webhook) libera o acesso automaticamente. */
  checkoutUrl: '',

  /* 2b) Pagamento DENTRO do app (obrigatório na App Store e no Google
     Play para assinaturas digitais) — RevenueCat (gratuito até
     US$ 2.500/mês de receita): app.revenuecat.com → Project → API keys. */
  revenuecat: { apple: '', google: '', entitlement: 'pro' },

  /* 3) IA PARA LAUDOS (Google Gemini — tem camada gratuita)
     aiEndpoint: URL da Edge Function "laudo-ia" do seu Supabase, que guarda
     a chave do Gemini no servidor (recomendado). Ex.:
     https://xxxx.supabase.co/functions/v1/laudo-ia
     allowOwnKey: deixa o médico colar a própria chave gratuita do
     Google AI Studio (aistudio.google.com) em Conta › Chave de IA. */
  aiEndpoint: '',
  aiModel: 'gemini-2.5-flash',
  allowOwnKey: true,

  /* 4) Links exigidos pelas lojas */
  privacyUrl: '',
  termsUrl: '',
  supportEmail: 'mmocorreia5@gmail.com'
};
