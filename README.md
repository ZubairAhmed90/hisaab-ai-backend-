# HisaabAI Backend

NestJS API · Prisma · MySQL · JWT · Swagger

## cPanel deploy (after git pull)

1. **Node.js app** → startup file: **`server.js`**, Node **20**
2. Create **`.env`** in app root (copy from `.env.example`, use `localhost` for MySQL)
3. In app folder (SSH or Terminal):

```bash
npm install
npm run deploy:cpanel
npm start
```

Or step by step:

```bash
npm install
npx prisma migrate deploy
npm run build
npm start
```

4. **Restart** the Node.js app in cPanel if it does not restart automatically.

API: `https://your-api-domain/api/v1`  
Swagger: `https://your-api-domain/api`

## Local development

```bash
cp .env.example .env
npm install
npx prisma migrate deploy
npm run start:dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Production — runs `server.js` |
| `npm run build` | Compile `src/` → `dist/` |
| `npm run start:dev` | Dev with hot reload |
| `npm run deploy:cpanel` | prisma generate + migrate + build |
| `node scripts/reset-user-password.js` | Reset a user password (dev/admin) |

## Environment

See `.env.example`. Required: `DATABASE_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `FRONTEND_URL`.

Never commit `.env`.
