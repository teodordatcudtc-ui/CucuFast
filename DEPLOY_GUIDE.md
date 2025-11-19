# Ghid Complet de Deploy - Cucu Fast Service

## 📋 Checklist Pre-Deploy

### Conținut și Imagini
- [ ] Înlocuiește toate imaginile placeholder cu fotografii reale
- [ ] Adaugă fotografii pentru echipă (în `/public/images/team/`)
- [ ] Adaugă imagini pentru galerie (în `/public/images/gallery/`)
- [ ] Creează logo-uri și favicon-uri (192x192, 512x512)
- [ ] Adaugă imagine Open Graph (`/public/og-image.jpg` - 1200x630px)

### Configurare
- [ ] Completează `.env.local` cu datele reale
- [ ] Configurează SMTP pentru email
- [ ] Setează `SITE_URL` cu domeniul real
- [ ] Adaugă Google Analytics ID (opțional)
- [ ] Adaugă Facebook Pixel ID (opțional)

### Testare
- [ ] Testează toate formularele (contact, programări)
- [ ] Verifică link-urile interne și externe
- [ ] Testează pe mobile (responsive)
- [ ] Verifică accesibilitatea (keyboard navigation, screen readers)
- [ ] Testează performanța (Lighthouse)

## 🚀 Pași de Deploy

### Opțiunea 1: Vercel (Recomandat - Cel mai ușor)

1. **Creează cont Vercel**
   - Mergi pe [vercel.com](https://vercel.com)
   - Conectează contul GitHub/GitLab

2. **Importă proiectul**
   - Click "New Project"
   - Selectează repository-ul
   - Vercel detectează automat Next.js

3. **Configurează variabilele de mediu**
   - În setările proiectului, adaugă:
     ```
     SITE_URL=https://cucufastservice.ro
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_SECURE=false
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your-app-password
     CONTACT_EMAIL=contact@cucufastservice.ro
     ```

4. **Deploy**
   - Click "Deploy"
   - Așteaptă finalizarea build-ului
   - Site-ul va fi live la un URL Vercel

5. **Configurează domeniul**
   - În setările proiectului → Domains
   - Adaugă domeniul tău
   - Urmează instrucțiunile pentru DNS

### Opțiunea 2: Netlify

1. **Creează cont Netlify**
   - Mergi pe [netlify.com](https://netlify.com)
   - Conectează repository-ul

2. **Configurează build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - **IMPORTANT:** Adaugă `next export` în `package.json` sau folosește Netlify Next.js plugin

3. **Variabile de mediu**
   - Site settings → Environment variables
   - Adaugă toate variabilele din `.env.example`

4. **Deploy**
   - Netlify va face deploy automat la fiecare push

### Opțiunea 3: Server Propriu (VPS/Dedicated)

#### Cerințe
- Node.js 18+ instalat
- PM2 pentru process management (opțional)
- Nginx pentru reverse proxy
- SSL certificate (Let's Encrypt)

#### Pași

1. **Clonează repository-ul pe server**
   ```bash
   git clone <your-repo-url>
   cd cucu-fast
   ```

2. **Instalează dependențele**
   ```bash
   npm install
   ```

3. **Configurează variabilele de mediu**
   ```bash
   cp .env.example .env.local
   nano .env.local  # Editează cu datele reale
   ```

4. **Build**
   ```bash
   npm run build
   ```

5. **Rulează cu PM2 (recomandat)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "cucu-fast" -- start
   pm2 save
   pm2 startup  # Configurează auto-start la reboot
   ```

6. **Configurează Nginx**

   Creează `/etc/nginx/sites-available/cucufastservice.ro`:
   ```nginx
   server {
       listen 80;
       server_name cucufastservice.ro www.cucufastservice.ro;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

   Activează configurația:
   ```bash
   sudo ln -s /etc/nginx/sites-available/cucufastservice.ro /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

7. **Configurează SSL cu Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d cucufastservice.ro -d www.cucufastservice.ro
   ```

## 📧 Configurare Email (SMTP)

### Gmail

1. Activează "2-Step Verification" în contul Google
2. Generează "App Password":
   - Google Account → Security → 2-Step Verification → App passwords
   - Selectează "Mail" și "Other"
   - Copiază parola generată

3. Configurează în `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   CONTACT_EMAIL=contact@cucufastservice.ro
   ```

### SendGrid / Mailgun / Alt serviciu

Folosește credențialele furnizate de serviciul ales.

## 📱 Configurare WhatsApp Webhook (Opțional)

### Folosind Make.com (fost Integromat)

1. Creează cont Make.com
2. Creează un scenariu nou
3. Adaugă trigger: "Webhook"
4. Adaugă action: "WhatsApp Business API" sau "Zapier"
5. Configurează pentru a trimite notificări la programări noi

### Folosind Twilio

1. Creează cont Twilio
2. Configurează WhatsApp Business API
3. Adaugă webhook în API route pentru notificări

## 🔍 Configurare SEO și Analytics

### Google Search Console

1. Mergi pe [search.google.com/search-console](https://search.google.com/search-console)
2. Adaugă proprietatea (domeniul tău)
3. Verifică proprietatea (DNS sau HTML file)
4. Trimite sitemap: `https://cucufastservice.ro/sitemap.xml`

### Google Analytics

1. Creează cont Google Analytics
2. Obține Measurement ID (G-XXXXXXXXXX)
3. Adaugă în `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Adaugă script în `app/layout.tsx` (opțional, dacă nu e deja)

### Facebook Pixel

1. Creează Facebook Pixel în Facebook Business Manager
2. Obține Pixel ID
3. Adaugă în `.env.local`:
   ```
   NEXT_PUBLIC_FB_PIXEL_ID=your-pixel-id
   ```

## ✅ Verificări Post-Deploy

1. **Testează toate paginile**
   - Home: `/`
   - Servicii: `/servicii`
   - Despre: `/despre`
   - Contact: `/contact`
   - Programări: `/programari`
   - Galerie: `/galerie`
   - Blog: `/blog`

2. **Testează formularele**
   - Trimite un mesaj de contact
   - Trimite o programare
   - Verifică că email-urile ajung

3. **Verifică SEO**
   - Testează sitemap: `https://cucufastservice.ro/sitemap.xml`
   - Testează robots.txt: `https://cucufastservice.ro/robots.txt`
   - Rulează Google PageSpeed Insights
   - Rulează Lighthouse (Chrome DevTools)

4. **Testează mobile**
   - Deschide site-ul pe telefon
   - Verifică responsive design
   - Testează butonul WhatsApp din sticky bar

5. **Verifică accesibilitatea**
   - Navigare cu tastatura
   - Contrast culori
   - Screen reader compatibility

## 🛠️ Mentenanță

### Actualizări

```bash
# Pe server
cd cucu-fast
git pull
npm install
npm run build
pm2 restart cucu-fast
```

### Backup

- Backup regulat al folderului `submissions/` (formulare trimise)
- Backup bazei de date (dacă folosești una)
- Backup configurație server

### Monitorizare

- Configurează uptime monitoring (UptimeRobot, Pingdom)
- Monitorizează erorile (Sentry, opțional)
- Verifică log-urile PM2: `pm2 logs cucu-fast`

## 📞 Suport

Pentru probleme sau întrebări despre deploy, contactează echipa de dezvoltare.

