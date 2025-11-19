# 📋 COMENZI COPY-PASTE - Cucu Fast Service

## 🚀 SETUP INIȚIAL

### 1. Instalare Dependențe

```bash
npm install
```

### 2. Creare Fișier Environment

```bash
cp .env.example .env.local
```

### 3. Editare Environment (deschide .env.local și completează)

```env
SITE_URL=https://cucufastservice.ro
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=contact@cucufastservice.ro
```

### 4. Development Server

```bash
npm run dev
```

### 5. Build Producție

```bash
npm run build
```

### 6. Start Producție

```bash
npm run start
```

---

## 🔧 COMENZI UTILE

### Reinstalare Dependențe

```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear Cache Next.js

```bash
rm -rf .next
npm run dev
```

### Verificare Versiune Node.js

```bash
node --version
```

### Verificare Port (dacă 3000 e ocupat)

```bash
# Windows PowerShell
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000
```

---

## 📦 DEPLOY COMENZI

### Vercel (CLI)

```bash
npm i -g vercel
vercel login
vercel
```

### Netlify (CLI)

```bash
npm i -g netlify-cli
netlify login
netlify deploy
netlify deploy --prod
```

### PM2 (Server Propriu)

```bash
npm install -g pm2
pm2 start npm --name "cucu-fast" -- start
pm2 save
pm2 startup
```

---

## 🧹 CLEANUP

### Ștergere Build

```bash
rm -rf .next
```

### Ștergere Dependențe

```bash
rm -rf node_modules
```

### Ștergere Submissions (JSON files)

```bash
rm -rf submissions/*
```

---

## 📊 VERIFICĂRI

### Test Sitemap

```bash
curl https://cucufastservice.ro/sitemap.xml
```

### Test Robots.txt

```bash
curl https://cucufastservice.ro/robots.txt
```

### Verificare Port

```bash
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000
```

---

## 🔍 DEBUG

### Verificare Log-uri PM2

```bash
pm2 logs cucu-fast
```

### Verificare Status PM2

```bash
pm2 status
```

### Restart PM2

```bash
pm2 restart cucu-fast
```

---

## 📝 NOTIȚE

- Toate comenzile trebuie rulate din folderul root al proiectului
- Pentru Windows, folosește PowerShell sau CMD
- Pentru Linux/Mac, folosește Terminal
- Asigură-te că ai Node.js 18+ instalat

