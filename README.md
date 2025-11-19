# Cucu Fast Service - Website

Site web modern și premium pentru service auto Cucu Fast Service din Voluntari.

## Tehnologii

- **Next.js 14** - Framework React cu SSR/SSG
- **TypeScript** - Tipizare statică
- **Tailwind CSS** - Stilizare utility-first
- **Framer Motion** - Animații fluide
- **React Hook Form + Zod** - Validare formulare
- **Nodemailer** - Trimitere email

## Structură Proiect

```
├── app/                    # Pagini și rute Next.js
│   ├── api/               # API routes
│   ├── blog/              # Pagini blog
│   └── ...
├── components/            # Componente React reutilizabile
├── public/                # Assets statice
└── ...
```

## Instalare și Rulare

### 1. Instalează dependențele

```bash
npm install
# sau
pnpm install
# sau
yarn install
```

### 2. Configurează variabilele de mediu

Creează un fișier `.env.local` bazat pe `.env.example`:

```bash
cp .env.example .env.local
```

Editează `.env.local` și completează:
- `SITE_URL` - URL-ul site-ului tău
- `SMTP_*` - Configurare SMTP pentru email
- `CONTACT_EMAIL` - Email unde să fie trimise formularele

### 3. Rulează în modul development

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:3000`

### 4. Build pentru producție

```bash
npm run build
npm run start
```

## Configurare Email (SMTP)

Pentru ca formularele să trimită email-uri, configurează SMTP în `.env.local`:

**Exemplu Gmail:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=contact@cucufastservice.ro
```

**Notă:** Pentru Gmail, trebuie să folosești o "App Password", nu parola contului.

## Deploy

### Vercel (Recomandat)

1. Conectează repository-ul GitHub cu Vercel
2. Adaugă variabilele de mediu în setările proiectului
3. Deploy automat la fiecare push

### Netlify

1. Conectează repository-ul
2. Setează build command: `npm run build`
3. Setează publish directory: `.next`
4. Adaugă variabilele de mediu

### Server propriu

1. Rulează `npm run build`
2. Rulează `npm run start` sau folosește PM2
3. Configurează reverse proxy (Nginx) pentru SSL

## Optimizări SEO

- ✅ Meta tags complete pe fiecare pagină
- ✅ JSON-LD structured data
- ✅ Sitemap.xml generat automat
- ✅ Robots.txt configurat
- ✅ Open Graph și Twitter Cards
- ✅ Semantic HTML
- ✅ Performance optimizat

## Checklist Pre-Deploy

- [ ] Completează variabilele de mediu
- [ ] Configurează SMTP pentru email
- [ ] Adaugă imagini reale (înlocuiește placeholder-urile)
- [ ] Verifică toate link-urile
- [ ] Testează formularele
- [ ] Configurează Google Analytics (opțional)
- [ ] Configurează Facebook Pixel (opțional)
- [ ] Verifică sitemap.xml
- [ ] Testează pe mobile
- [ ] Verifică accesibilitatea

## Suport

Pentru întrebări sau probleme, contactează echipa de dezvoltare.

