# HisaabAI Backend

NestJS API · Prisma · MySQL

## cPanel — install & run

### 1. Node.js app settings

| Setting | Value |
|---------|--------|
| Node version | **18** or **20** |
| Application startup file | **`server.js`** |
| Application mode | **Production** |

### 2. Environment variables (cPanel → Node.js → Environment)

Add these **before** install (or create `.env` in app root):

```
DATABASE_URL=mysql://USER:PASS@localhost:3306/DBNAME
JWT_SECRET=your-long-random-secret-min-32-chars
JWT_REFRESH_SECRET=another-long-random-secret
FRONTEND_URL=https://your-frontend-domain.com
PORT=3001
NODE_ENV=production
```

Encode `@` in password as `%40` inside `DATABASE_URL`.

### 3. Install (use Terminal — not only the UI button)

cPanel **Setup Node.js App → Run NPM Install** often uses `--production` and **breaks** NestJS builds.

**Use SSH / Terminal** in your app folder:

```bash
cd ~/nodeapps/hisaab-api   # your app root path

git pull origin main

npm install
npm run deploy:cpanel
```

Then click **Restart** on the Node.js app (or `npm start`).

### 4. One-liner after pull

```bash
npm install && npm run deploy:cpanel
```

Then restart the app in cPanel.

---

## If `npm install` fails on cPanel

| Error | Fix |
|-------|-----|
| `prisma: command not found` | Run `npm install` (full, not production-only) |
| `nest: command not found` | Same — `@nestjs/cli` is now in dependencies |
| Prisma engine error | Run `npm run prisma:generate` after install |
| Out of memory | `export NODE_OPTIONS=--max-old-space-size=512` then retry |
| EACCES / permission | Fix folder ownership in cPanel File Manager |

---

## Local development

```bash
cp .env.example .env
npm install
npm run prisma:migrate:deploy
npm run start:dev
```

API: `http://localhost:3001/api/v1` · Swagger: `/api`

## Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install all packages (safe on cPanel) |
| `npm run deploy:cpanel` | prisma generate + migrate + build |
| `npm start` | Run `server.js` (production) |
| `npm run start:dev` | Dev with hot reload |

Never commit `.env`.
