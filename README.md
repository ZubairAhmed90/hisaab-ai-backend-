# HisaabAI Backend

Express.js · MySQL · Railway

## Stack

| Layer | Technology |
|---|---|
| Framework | Express.js (Node 18+) |
| Database | MySQL via `mysql2` |
| Auth | JWT (`jsonwebtoken` + `bcryptjs`) |
| Validation | Joi |
| AI | Groq API |
| Scheduler | `node-cron` |
| Deployment | Railway |

## Local Development

```bash
cp .env.example .env
# fill in your values in .env

npm install
npm run db:push       # create tables from schema.sql
npm run dev           # nodemon server.js
```

API base: `http://localhost:3001/api/v1`  
Health check: `http://localhost:3001/api/v1/health`

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | `mysql://user:pass@host:3306/dbname` |
| `JWT_SECRET` | Secret for access tokens |
| `JWT_REFRESH_SECRET` | Secret for refresh tokens |
| `GROQ_API_KEY` | Groq AI API key |
| `GROQ_MODEL` | e.g. `llama-3.3-70b-versatile` |
| `GOLD_API_KEY` | GoldAPI.io key |
| `PORT` | Server port (default `3001`) |
| `NODE_ENV` | `development` or `production` |
| `FRONTEND_URL` | CORS origin (e.g. `https://app.hisaab.ai`) |
| `DISABLE_CRON` | Set `true` to disable the market scheduler |
| `ADMIN_EMAIL` | Auto-created admin email |
| `ADMIN_PASSWORD` | Auto-created admin password |

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start production server |
| `npm run dev` | Start with nodemon (hot reload) |
| `npm run db:push` | Apply `schema.sql` to database |

## Project Structure

```
src/
├── app.js              # Express app setup
├── config/             # DB pool, env config
├── middleware/         # auth, admin, validate, error
├── models/             # Data access layer (raw SQL)
├── services/           # Business logic
├── controllers/        # HTTP request handlers
├── routes/             # Route definitions
├── helpers/            # Pure utility functions
├── prompts/            # AI prompt templates
├── catalog/            # Static data (PSX stocks)
└── scheduler/          # node-cron jobs
schema.sql              # MySQL table definitions
scripts/
└── db-push.js          # Runs schema.sql against DB
```

## Railway Deployment

1. Create a Railway project and add a MySQL plugin.
2. Set all environment variables in Railway dashboard.
3. Push to `main` — Railway auto-deploys via `railway.toml`.

The `releaseCommand` runs `node scripts/db-push.js` to apply the schema before each deploy.

Never commit `.env`.
