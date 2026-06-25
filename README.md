# HisaabAI Backend

Express.js · MySQL · cPanel

## Stack

| Layer | Technology |
|---|---|
| Framework | Express.js (Node 18+) |
| Database | MySQL via `mysql2` |
| Auth | JWT (`jsonwebtoken` + `bcryptjs`) |
| Validation | Joi |
| AI | Groq API |
| Scheduler | `node-cron` |
| Deployment | cPanel (Node.js Selector) |

---

## Local Development

```bash
cp .env.example .env
# fill in your values in .env

npm install
npm run db:push    # creates all 13 tables from schema.sql
npm run dev        # nodemon — hot reload on port 3001
```

API base: `http://localhost:3001/api/v1`
Health check: `http://localhost:3001/api/v1/health`

---

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | `mysql://user:pass%40word@host:3306/dbname` (encode `@` as `%40`) |
| `DB_HOST` / `DB_PORT` / `DB_USER` / `DB_PASSWORD` / `DB_NAME` | Alternative to `DATABASE_URL` |
| `JWT_SECRET` | Secret for access tokens (min 32 chars) |
| `JWT_REFRESH_SECRET` | Secret for refresh tokens (min 32 chars) |
| `GROQ_API_KEY` | Groq AI API key |
| `GROQ_MODEL` | e.g. `llama-3.3-70b-versatile` |
| `GOLD_API_KEY` | GoldAPI.io key |
| `NODE_ENV` | `production` on server |
| `FRONTEND_URL` | CORS origin (e.g. `https://app.hisaab.ai`) |
| `DISABLE_CRON` | Set `true` to disable the market scheduler |
| `ADMIN_EMAIL` | Auto-created admin email (default: `admin@hisaab.ai`) |
| `ADMIN_PASSWORD` | Auto-created admin password (default: `admin123`) |

> **Do NOT set `PORT` on cPanel** — cPanel assigns it automatically on Restart.

---

## cPanel Deployment

### 1. Node.js app settings (Setup Node.js App)

| Setting | Value |
|---|---|
| Node.js version | **18** or **20** |
| Application mode | **Production** |
| Application root | `/home/USERNAME/hisaab.petzone.pk` |
| Application startup file | `server.js` |

### 2. Environment variables

Set these in **cPanel → Setup Node.js App → Environment variables** (before clicking Save/Restart):

```
DATABASE_URL=mysql://USER:PASS%40WORD@HOST:3306/DBNAME
JWT_SECRET=<random 32+ char string>
JWT_REFRESH_SECRET=<random 32+ char string>
GROQ_API_KEY=<your key>
GROQ_MODEL=llama-3.3-70b-versatile
GOLD_API_KEY=<your key>
FRONTEND_URL=https://your-frontend-domain.com
NODE_ENV=production
ADMIN_EMAIL=admin@hisaab.ai
ADMIN_PASSWORD=<secure password>
```

### 3. Install & apply schema via SSH

```bash
cd ~/hisaab.petzone.pk

# Activate Node.js virtual environment (change 20 to your version)
source ~/nodevenv/hisaab.petzone.pk/20/bin/activate

# Install dependencies
npm install --omit=dev

# Create all 13 database tables (safe to re-run — uses IF NOT EXISTS)
node scripts/db-push.js
```

### 4. Restart

Click **Restart** in cPanel → Setup Node.js App.

Health check: `https://hisaab.petzone.pk/api/v1/health`

### 5. After every `git pull`

```bash
cd ~/hisaab.petzone.pk
source ~/nodevenv/hisaab.petzone.pk/20/bin/activate
npm install --omit=dev
node scripts/db-push.js   # only needed if schema.sql changed
```

Then **Restart** in cPanel.

### Auto-deploy via cPanel Git Version Control

If you use cPanel **Git Version Control**, `.cpanel.yml` runs `npm install` and `node scripts/db-push.js` automatically after each push. Then just Restart in cPanel UI.

---

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start production server (`node server.js`) |
| `npm run dev` | Start with nodemon (hot reload) |
| `npm run db:push` | Apply `schema.sql` to database |

---

## Project Structure

```
src/
├── app.js              # Express app setup
├── config/             # DB pool
├── middleware/         # auth, admin, validate, error
├── models/             # Data access layer (raw SQL — 13 models)
├── services/           # Business logic
├── controllers/        # HTTP request handlers
├── routes/             # Route definitions
├── helpers/            # Pure utility functions
├── prompts/            # AI prompt templates
├── catalog/            # Static data (PSX stocks)
└── scheduler/          # node-cron jobs
schema.sql              # MySQL table definitions (13 tables)
scripts/
└── db-push.js          # Runs schema.sql against DB
```

Never commit `.env`.
