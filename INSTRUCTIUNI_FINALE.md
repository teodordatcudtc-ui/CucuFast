# 🚀 INSTRUCȚIUNI FINALE - Cucu Fast Service

## ✅ CHECKLIST COMPLET

### 📦 Instalare Inițială

- [ ] Rulează `npm install` (sau `pnpm install` / `yarn install`)
- [ ] Creează fișier `.env.local` bazat pe `.env.example`
- [ ] Completează toate variabilele de mediu în `.env.local`
- [ ] Verifică că Node.js este versiunea 18 sau mai nouă

### 🎨 Conținut și Imagini

- [ ] **IMPORTANT:** Înlocuiește toate imaginile placeholder cu fotografii reale:
  - `/public/images/gallery/` - Imagini pentru galerie (minim 6)
  - `/public/images/team/` - Fotografii echipă (3 persoane)
  - `/public/images/before-repair.jpg` - Pentru slider before/after
  - `/public/images/after-repair.jpg` - Pentru slider before/after
  - `/public/og-image.jpg` - Imagine Open Graph (1200x630px)
  - `/public/icon-192.png` - Icon PWA (192x192px)
  - `/public/icon-512.png` - Icon PWA (512x512px)
  - `/public/favicon.ico` - Favicon

- [ ] Actualizează informațiile despre echipă în `app/despre/page.tsx`
- [ ] Verifică că toate textele sunt corecte și în română
- [ ] Adaugă prețuri exacte (dacă dorești) în `app/servicii/page.tsx`

### ⚙️ Configurare

- [ ] Configurează SMTP pentru email (vezi secțiunea "Configurare Email")
- [ ] Setează `SITE_URL` cu domeniul real (ex: `https://cucufastservice.ro`)
- [ ] Adaugă Google Analytics ID (opțional, dacă dorești)
- [ ] Adaugă Facebook Pixel ID (opțional, dacă dorești)

### 🧪 Testare Locală

- [ ] Rulează `npm run dev` și verifică site-ul local
- [ ] Testează toate paginile:
  - [ ] Home (`/`)
  - [ ] Servicii (`/servicii`)
  - [ ] Despre (`/despre`)
  - [ ] Contact (`/contact`)
  - [ ] Programări (`/programari`)
  - [ ] Galerie (`/galerie`)
  - [ ] Blog (`/blog`)
- [ ] Testează formularele (contact și programări)
- [ ] Verifică că email-urile ajung (dacă SMTP este configurat)
- [ ] Testează pe mobile (responsive design)
- [ ] Verifică link-urile WhatsApp și telefon

### 🚀 Deploy

- [ ] Alege platforma de deploy (Vercel recomandat)
- [ ] Configurează variabilele de mediu pe platformă
- [ ] Fă deploy și verifică că site-ul funcționează
- [ ] Configurează domeniul personalizat
- [ ] Configurează SSL (HTTPS)

### 🔍 SEO și Analytics

- [ ] Trimite sitemap la Google Search Console
- [ ] Configurează Google Analytics (dacă folosești)
- [ ] Configurează Facebook Pixel (dacă folosești)
- [ ] Testează sitemap: `https://cucufastservice.ro/sitemap.xml`
- [ ] Testează robots.txt: `https://cucufastservice.ro/robots.txt`
- [ ] Rulează Google PageSpeed Insights
- [ ] Rulează Lighthouse pentru performanță

### 📋 GDPR și Legal

- [ ] Creează pagina `/politica-confidentialitate` (text complet GDPR)
- [ ] Creează pagina `/termeni-conditii` (dacă e necesar)
- [ ] Verifică că checkbox-urile GDPR funcționează în formulare

---

## 📝 COMENZI EXACTE DE RULARE

### 1. Instalare Dependențe

```bash
npm install
```

**SAU** (dacă preferi pnpm):

```bash
pnpm install
```

**SAU** (dacă preferi yarn):

```bash
yarn install
```

### 2. Configurare Variabile de Mediu

```bash
cp .env.example .env.local
```

Apoi editează `.env.local` și completează:

```env
SITE_URL=https://cucufastservice.ro
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=contact@cucufastservice.ro
```

### 3. Rulează în Development

```bash
npm run dev
```

Site-ul va fi disponibil la: `http://localhost:3000`

### 4. Build pentru Producție

```bash
npm run build
```

### 5. Start Producție (după build)

```bash
npm run start
```

---

## 📧 CONFIGURARE EMAIL (SMTP)

### Opțiunea 1: Gmail (Recomandat pentru început)

1. **Activează 2-Step Verification** în contul Google
2. **Generează App Password:**
   - Mergi la: https://myaccount.google.com/security
   - Click pe "2-Step Verification"
   - Scroll jos la "App passwords"
   - Selectează "Mail" și "Other (Custom name)"
   - Introdu "Cucu Fast Service"
   - Copiază parola generată (16 caractere)

3. **Configurează în `.env.local`:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx  (parola generată, fără spații)
   CONTACT_EMAIL=contact@cucufastservice.ro
   ```

### Opțiunea 2: SendGrid / Mailgun

Folosește credențialele furnizate de serviciul ales.

---

## 🌐 DEPLOY - Pași Detaliați

### Opțiunea 1: Vercel (CEL MAI UȘOR - Recomandat)

1. **Creează cont:**
   - Mergi pe: https://vercel.com
   - Sign up cu GitHub/GitLab/Bitbucket

2. **Importă proiectul:**
   - Click "Add New..." → "Project"
   - Selectează repository-ul tău
   - Vercel detectează automat Next.js

3. **Configurează Environment Variables:**
   - În setările proiectului → "Environment Variables"
   - Adaugă fiecare variabilă din `.env.local`:
     - `SITE_URL`
     - `SMTP_HOST`
     - `SMTP_PORT`
     - `SMTP_SECURE`
     - `SMTP_USER`
     - `SMTP_PASS`
     - `CONTACT_EMAIL`

4. **Deploy:**
   - Click "Deploy"
   - Așteaptă finalizarea (2-3 minute)
   - Site-ul va fi live la un URL Vercel (ex: `cucu-fast.vercel.app`)

5. **Configurează domenul:**
   - În proiect → "Settings" → "Domains"
   - Adaugă domeniul tău: `cucufastservice.ro`
   - Urmează instrucțiunile pentru DNS:
     - Adaugă record CNAME: `www` → `cname.vercel-dns.com`
     - SAU record A: `@` → IP-ul furnizat de Vercel

### Opțiunea 2: Netlify

1. **Creează cont:** https://netlify.com
2. **Importă proiectul** din Git
3. **Configurează build:**
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Adaugă Environment Variables** (la fel ca Vercel)
5. **Deploy**

### Opțiunea 3: Server Propriu

Vezi `DEPLOY_GUIDE.md` pentru instrucțiuni detaliate.

---

## 📱 CONFIGURARE WHATSAPP WEBHOOK (Opțional)

### Folosind Make.com (fost Integromat)

1. Creează cont: https://www.make.com
2. Creează un scenariu nou
3. Adaugă trigger: "Webhook" → "Custom webhook"
4. Copiază URL-ul webhook
5. Adaugă action: "WhatsApp Business API" sau "Zapier"
6. Configurează pentru a trimite notificări

**Notă:** Va trebui să modifici API routes pentru a trimite date la webhook.

---

## 🔍 VERIFICĂRI POST-DEPLOY

### Testare Funcționalități

1. **Testează toate paginile:**
   ```bash
   # Deschide în browser și verifică:
   - https://cucufastservice.ro/ ✅
   - https://cucufastservice.ro/servicii ✅
   - https://cucufastservice.ro/despre ✅
   - https://cucufastservice.ro/contact ✅
   - https://cucufastservice.ro/programari ✅
   - https://cucufastservice.ro/galerie ✅
   - https://cucufastservice.ro/blog ✅
   ```

2. **Testează formularele:**
   - Trimite un mesaj de contact
   - Trimite o programare
   - Verifică că email-urile ajung

3. **Testează link-urile:**
   - WhatsApp: Click pe buton → verifică că se deschide chat
   - Telefon: Click pe număr → verifică că se deschide dialer
   - Google Maps: Verifică că harta se încarcă

### SEO

1. **Verifică sitemap:**
   ```
   https://cucufastservice.ro/sitemap.xml
   ```

2. **Verifică robots.txt:**
   ```
   https://cucufastservice.ro/robots.txt
   ```

3. **Trimite la Google Search Console:**
   - Mergi pe: https://search.google.com/search-console
   - Adaugă proprietatea
   - Trimite sitemap: `https://cucufastservice.ro/sitemap.xml`

4. **Testează performanța:**
   - Google PageSpeed Insights: https://pagespeed.web.dev
   - Lighthouse (Chrome DevTools): F12 → Lighthouse → Run

### Mobile

- Deschide site-ul pe telefon
- Verifică că totul este responsive
- Testează butonul sticky de jos (WhatsApp, Telefon, Programează)
- Verifică meniul hamburger

---

## 📊 ANALYTICS (Opțional)

### Google Analytics

1. Creează cont: https://analytics.google.com
2. Creează proprietate nouă
3. Obține Measurement ID (format: `G-XXXXXXXXXX`)
4. Adaugă în `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. (Opțional) Adaugă script în `app/layout.tsx` dacă nu e deja

### Facebook Pixel

1. Creează Pixel în Facebook Business Manager
2. Obține Pixel ID
3. Adaugă în `.env.local`:
   ```
   NEXT_PUBLIC_FB_PIXEL_ID=your-pixel-id
   ```

---

## 🎯 TITLURI BLOG PENTRU SEO LOCAL

1. "Service Auto Voluntari: Ghid Complet pentru Întreținerea Mașinii"
2. "Geometrie Roți Voluntari: Când și De Ce Este Necesară"
3. "Diagnostic Auto Voluntari: Tot Ce Trebuie Să Știi"
4. "Revizie Auto Voluntari: Pachete și Prețuri 2024"
5. "Service Auto Rapid Voluntari: Rezolvăm Problemele în Aceeași Zi"

---

## 🎨 VARIANTE CTA (Call-to-Action)

### Varianta 1 (Actuală - Directă):
```
"Programează acum"
```

### Varianta 2 (Urgentă):
```
"Rezolvă problema astăzi"
```

### Varianta 3 (Beneficii):
```
"Obține ofertă gratuită"
```

---

## ⚠️ PROBLEME COMUNE ȘI SOLUȚII

### Email-urile nu se trimit

- Verifică că SMTP este configurat corect în `.env.local`
- Pentru Gmail, folosește App Password, nu parola contului
- Verifică că portul este corect (587 pentru TLS, 465 pentru SSL)
- Verifică log-urile serverului pentru erori

### Build eșuează

- Verifică că Node.js este versiunea 18+
- Șterge `node_modules` și `.next`, apoi rulează `npm install` din nou
- Verifică că toate dependențele sunt instalate

### Imagini nu se încarcă

- Verifică că imaginile sunt în folderul `/public/images/`
- Verifică că path-urile sunt corecte (fără `/public` în path)
- Verifică că extensiile sunt corecte (.jpg, .png, .webp)

### Formularele nu funcționează

- Verifică că API routes sunt accesibile
- Verifică console-ul browser pentru erori
- Verifică că rate limiting nu blochează (așteaptă 15 minute)

---

## 📞 SUPPORT

Dacă întâmpini probleme:

1. Verifică `README.md` pentru instrucțiuni generale
2. Verifică `DEPLOY_GUIDE.md` pentru detalii despre deploy
3. Verifică log-urile pentru erori
4. Contactează echipa de dezvoltare

---

## ✨ FINALIZARE

După ce ai completat toate pașii:

1. ✅ Site-ul este live și funcțional
2. ✅ Formularele trimit email-uri
3. ✅ SEO este configurat
4. ✅ Mobile-first design funcționează
5. ✅ Toate link-urile funcționează
6. ✅ Imagini reale sunt înlocuite
7. ✅ Analytics este configurat (dacă dorești)

**Felicitări! Site-ul Cucu Fast Service este gata! 🎉**

