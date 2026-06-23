# HisaabAI Backend

NestJS API for HisaabAI — deploy separately from the web/mobile monorepo.

## Stack

- NestJS 10 · Prisma 5 · MySQL (cPanel)
- JWT auth · Groq AI · Swagger at `/api`

## Local development

```bash
cp .env.example .env
# Edit .env with your DATABASE_URL and secrets

npm install
npx prisma generate
npx prisma migrate deploy   # or: npx prisma migrate dev
npm run start:dev
```

API: `http://localhost:3001/api/v1`  
Swagger: `http://localhost:3001/api`

## Split from monorepo (new Git repo)

From the main Hisaab-AI project:

```bash
cd backend
git init
git add .
git commit -m "Initial commit: HisaabAI backend"
git branch -M main
git remote add origin https://github.com/YOUR_ORG/hisaab-backend.git
git push -u origin main
```

> **Never commit `.env`** — it is in `.gitignore`.

## cPanel deployment

### 1. MySQL

1. cPanel → **MySQL Databases** → create DB + user → assign **All Privileges**
2. On the **same server**, use `localhost` in `DATABASE_URL`

### 2. Node.js app

1. cPanel → **Setup Node.js App** → Create Application
2. Node version: **20**
3. Application root: e.g. `/home/petzonep/nodeapps/hisaab-api`
4. Application startup file: **`server.js`**
5. Create `.env` in the application root (copy from `.env.example`)

### 3. Git deploy (`.cpanel.yml`)

1. Edit `.cpanel.yml` → set `DEPLOYPATH` to your Node.js app root
2. cPanel → **Git Version Control** → Clone this repository
3. Click **Deploy HEAD Commit** — runs install, migrate, build automatically

### 4. GitHub Actions CI/CD

Add these **repository secrets** in GitHub → Settings → Secrets:

| Secret | Example |
|--------|---------|
| `CPANEL_SSH_HOST` | `h40.eu.core.hostnext.net` |
| `CPANEL_SSH_USER` | `petzonep` |
| `CPANEL_SSH_KEY` | Private SSH key (generate in cPanel → SSH Access) |
| `CPANEL_SSH_PORT` | `22` |
| `CPANEL_REPO_PATH` | `/home/petzonep/repositories/hisaab-backend` |
| `CPANEL_APP_ROOT` | `/home/petzonep/nodeapps/hisaab-api` |
| `CPANEL_API_URL` | `https://api.yourdomain.com` (optional health check) |

On every push to `main`, GitHub builds the app and SSHs into cPanel to pull + deploy.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Dev server with hot reload |
| `npm run build` | Compile to `dist/` |
| `npm run start:prod` | Run production build |
| `npm run deploy:cpanel` | generate + migrate + build (manual deploy) |
| `npx prisma migrate deploy` | Apply migrations on production DB |
| `node scripts/test-db-connection.js` | Verify DB connection |

## Environment variables

See `.env.example`. Required:

- `DATABASE_URL` — MySQL connection string for Prisma
- `JWT_SECRET` / `JWT_REFRESH_SECRET` — min 32 chars each
- `FRONTEND_URL` — web app URL for CORS
- `GROQ_API_KEY` — AI advisor (optional for boot, required for chat)
