# HisaabAI Backend

NestJS API · Prisma · MySQL

## CloudLinux / cPanel — `node_modules` symlink (important)

On HostNext/CloudLinux, **Node.js Selector** stores packages outside your app folder:

```
/home/petzonep/hisaab.petzone.pk/node_modules  →  symlink
/home/petzonep/nodevenv/hisaab.petzone.pk/20/lib/node_modules  →  real files
```

**Rules:**

| Do | Don't |
|----|--------|
| Run `npm install` from cPanel **Run NPM Install** or SSH with venv activated | Upload/copy a real `node_modules` folder into app root |
| Keep `prisma/client/` in app root (committed) | Put a file/folder named `node_modules` in git |
| Use `node scripts/copy-prisma-client.js` after install | Run `prisma generate` on server (OOM on shared hosting) |
| Build with `npm run build` or build on PC and push `dist/` | Commit `node_modules/` |

**If install acts broken**, check whether `node_modules` is a symlink:

```bash
cd ~/hisaab.petzone.pk
ls -la node_modules
# Should show: node_modules -> .../nodevenv/.../lib/node_modules
```

If it is a **real directory** (not a symlink), remove it and use cPanel **Run NPM Install** again so CloudLinux recreates the symlink:

```bash
rm -rf node_modules   # only if it's NOT already a symlink
# then cPanel → Run NPM Install
```

Our `copy-prisma-client.js` follows the symlink into nodevenv and copies Prisma engines there.

---

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
NODE_ENV=production
```

Do **not** set `PORT` on cPanel — the Node.js App assigns it automatically when you **RESTART**.

Encode `@` in password as `%40` inside `DATABASE_URL`.

### 3. Install (use Terminal — not only the UI button)

cPanel **Setup Node.js App → Run NPM Install** often uses `--production` and **breaks** NestJS builds.

**Use SSH / Terminal** in your app folder:

```bash
cd ~/hisaab.petzone.pk   # your app root (must match cPanel Application root)

git pull origin main

npm install --ignore-scripts
node scripts/copy-prisma-client.js
npm run build
```

Then cPanel → **Restart** (startup file **`server.js`**).

Do **not** run `prisma generate` on the server. Linux engines live in committed `prisma/client/`.

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
