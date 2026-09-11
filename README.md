# francesco-bracchi-site

Sito personale statico in Astro, pubblicato su Vercel con funzione serverless per il double opt-in Brevo.

## Prerequisiti
- Node.js 22.12 o successivo
- Git
- VS Code
- Account GitHub, Vercel e Brevo

## Avvio locale
```bash
npm install
npm run dev
```
Apri l'indirizzo mostrato nel terminale, normalmente `http://localhost:4321`.

## Controllo e build
```bash
npm run check
npm run build
npm run preview
```

## Foto
La foto ottimizzata è in `public/images/francesco-bracchi.webp`. Per sostituirla, mantieni lo stesso nome oppure aggiorna il percorso in `src/pages/index.astro` e `src/layouts/BaseLayout.astro`.

## Aggiornare i contenuti
- Home e sezioni: `src/pages/index.astro`
- Stili e colori: `src/styles/global.css`
- Privacy: `src/pages/privacy-policy.astro`
- Cookie: `src/pages/cookie-policy.astro`
- Menu: `src/components/Header.astro`

## Newsletter Brevo
1. Crea in Brevo una lista contatti e annota il relativo ID.
2. Crea un template double opt-in con il link DOI previsto da Brevo e annota l'ID del template.
3. Crea una API key Brevo.
4. In Vercel, apri Project > Settings > Environment Variables.
5. Inserisci `BREVO_API_KEY`, `BREVO_LIST_ID`, `BREVO_DOI_TEMPLATE_ID`, `BREVO_REDIRECT_URL`.
6. Imposta `BREVO_REDIRECT_URL` su `https://francescobracchi.it/iscrizione-confermata`.
7. Configura nel template newsletter Brevo il link di disiscrizione nativo.

Non inserire mai l'API key nei file del progetto. `.env` è escluso da Git.

## Git e primo push
Crea su GitHub un repository vuoto chiamato `francesco-bracchi-site`, poi esegui:
```bash
git init
git add .
git commit -m "chore: inizializza progetto Astro"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/francesco-bracchi-site.git
git push -u origin main
```
Sostituisci `TUO-USERNAME` con il tuo nome utente GitHub.

## Deploy su Vercel
1. Accedi a Vercel con GitHub.
2. Seleziona Add New > Project.
3. Importa `francesco-bracchi-site`.
4. Vercel rileva Astro. Lascia Build Command `npm run build` e Output Directory `dist`.
5. Aggiungi le variabili ambiente indicate sopra.
6. Premi Deploy.
7. Ogni push su `main` pubblicherà automaticamente una nuova versione.

## Dominio francescobracchi.it
In Vercel: Project > Settings > Domains > aggiungi `francescobracchi.it` e `www.francescobracchi.it`. Vercel mostrerà i record DNS esatti da configurare presso il registrar. Imposta un reindirizzamento permanente fra la variante `www` e quella senza `www`, scegliendo `francescobracchi.it` come primaria.

## Prima della pubblicazione
- Completa email e recapito nelle policy.
- Fai verificare Privacy Policy e Cookie Policy da un professionista.
- Configura Brevo, double opt-in e disiscrizione.
- Verifica testi, date e descrizioni professionali.
- Esegui test mobile, tastiera, form e Lighthouse.

## Assunzioni di progetto
- Astro statico per semplicità e prestazioni.
- Vercel per deploy Git e funzione `/api/newsletter`.
- Brevo per consenso, double opt-in e disiscrizione.
- Nessun analytics nella prima versione.
- Palette: navy `#102238`, antracite, accento oro `#c59b45`.
- One-page per i contenuti principali, pagine separate per privacy e cookie.
