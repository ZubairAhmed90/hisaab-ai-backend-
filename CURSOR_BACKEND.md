# HisaabAI Backend — Cursor Instructions
# Stack: NestJS + Prisma + MySQL + Groq AI
# Hosted: cPanel shared hosting (Node.js app)

## Key Facts
- DB host is always "localhost" on cPanel (not a URL)
- Port: 3001
- All routes prefixed with /api/v1
- Swagger docs auto-generated at /api

## Environment Variables (create .env in backend/)
DATABASE_URL="mysql://DB_USER:DB_PASS@localhost:3306/DB_NAME"
GROQ_API_KEY="gsk_xxxx"
JWT_SECRET="long-random-string"
JWT_REFRESH_SECRET="another-long-string"
GOLD_API_KEY="from gold-api.com free tier"
PORT=3001
FRONTEND_URL="https://hisaabai.vercel.app"

## Folder Structure
backend/
├── src/
│   ├── app.module.ts           ← imports all modules
│   ├── main.ts                 ← bootstrap, cors, swagger, port
│   ├── common/
│   │   ├── response.dto.ts     ← standard { success, data, message } shape
│   │   └── jwt.guard.ts        ← reusable auth guard
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts  ← POST /api/v1/auth/register, /login, /refresh
│   │   ├── auth.service.ts     ← register, login, generateTokens
│   │   └── dto/
│   │       ├── register.dto.ts ← name, email, password, phone, monthly_income
│   │       └── login.dto.ts    ← email, password
│   ├── transactions/
│   │   ├── transactions.module.ts
│   │   ├── transactions.controller.ts ← GET/POST /api/v1/transactions, POST /import-csv
│   │   ├── transactions.service.ts    ← CRUD, CSV parse, call AI to categorize
│   │   └── dto/
│   │       └── create-transaction.dto.ts ← amount, description, date, category(optional)
│   ├── ai/
│   │   ├── ai.module.ts
│   │   ├── ai.controller.ts    ← POST /api/v1/ai/chat, GET /api/v1/ai/tips
│   │   ├── ai.service.ts       ← calls Groq API
│   │   └── prompts.ts          ← all system prompts as exported constants
│   ├── market/
│   │   ├── market.module.ts
│   │   ├── market.controller.ts ← GET /api/v1/market/stocks, /gold, /tbill
│   │   ├── market.service.ts    ← fetch Yahoo Finance + Gold API, cache in DB
│   │   └── market.scheduler.ts  ← @Cron every 15 min to refresh prices
│   ├── mirror/
│   │   ├── mirror.module.ts
│   │   ├── mirror.controller.ts ← GET /api/v1/mirror?period=1m|3m|6m|12m
│   │   └── mirror.service.ts    ← calculate overspend vs investment returns
│   ├── budgets/
│   │   ├── budgets.module.ts
│   │   ├── budgets.controller.ts ← GET/POST/PUT /api/v1/budgets
│   │   └── budgets.service.ts
│   ├── reports/
│   │   ├── reports.module.ts
│   │   ├── reports.controller.ts ← GET /api/v1/reports/monthly?month=2026-05
│   │   └── reports.service.ts    ← grade calculation A-F + AI summary
│   └── offers/
│       ├── offers.module.ts
│       ├── offers.controller.ts  ← GET /api/v1/offers, POST /api/v1/offers/:id/redeem
│       └── offers.service.ts     ← match offers to user spend profile
├── prisma/
│   └── schema.prisma            ← full DB schema
└── package.json

## All API Endpoints

### Auth (no token required)
POST   /api/v1/auth/register     body: RegisterDto
POST   /api/v1/auth/login        body: LoginDto → returns { accessToken, refreshToken }
POST   /api/v1/auth/refresh      body: { refreshToken }

### Transactions (token required)
GET    /api/v1/transactions             → list user's transactions (paginated)
GET    /api/v1/transactions/summary     → totals per category for current month
GET    /api/v1/transactions/categories  → spending breakdown with % per category
POST   /api/v1/transactions             body: CreateTransactionDto
POST   /api/v1/transactions/import-csv  body: multipart/form-data file upload
DELETE /api/v1/transactions/:id

### AI (token required)
POST   /api/v1/ai/chat   body: { message: string, language: 'en'|'ur' }
GET    /api/v1/ai/tips   → returns 3 personalized tips based on spending

### Market (token required)
GET    /api/v1/market/all     → stocks + gold + tbill in one call
GET    /api/v1/market/stocks  → KSE-100 top stocks with 30-day change
GET    /api/v1/market/gold    → gold price in PKR
GET    /api/v1/market/tbill   → current T-bill rate

### Investment Mirror (token required)
GET    /api/v1/mirror?period=1m   → 1 month overspend vs investment returns
GET    /api/v1/mirror?period=3m
GET    /api/v1/mirror?period=6m
GET    /api/v1/mirror?period=12m

### Budgets (token required)
GET    /api/v1/budgets           → user's budgets for current month
POST   /api/v1/budgets           body: { category, monthly_limit }
PUT    /api/v1/budgets/:id       body: { monthly_limit }
DELETE /api/v1/budgets/:id

### Reports (token required)
GET    /api/v1/reports/monthly?month=2026-05  → grade + breakdown + AI summary

### Offers (token required)
GET    /api/v1/offers            → top 5 personalized offers for user
POST   /api/v1/offers/:id/redeem → mark as redeemed, return promo code
POST   /api/v1/offers/:id/feedback body: { rating: 'relevant'|'not_relevant' }

## Prisma Schema Summary
Models: User, Transaction, Budget, Goal, MarketCache, AiInsight, ReportCard,
        OfferPartner, Offer, UserOfferEvent

## Key Packages to Install
npm install @nestjs/core @nestjs/common @nestjs/platform-express
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install @nestjs/swagger swagger-ui-express
npm install @nestjs/schedule
npm install @prisma/client prisma
npm install bcryptjs class-validator class-transformer
npm install axios csv-parser multer
npm install @nestjs/config

## How to Add a New Module (pattern to follow)
1. Create folder src/module-name/
2. Create module-name.module.ts  (imports PrismaModule, exports service)
3. Create module-name.controller.ts  (max 50 lines — just route definitions)
4. Create module-name.service.ts  (max 100 lines — business logic)
5. Create dto/ subfolder with request/response shapes
6. Import module in app.module.ts

## Groq AI Call Pattern
// In ai.service.ts — always use this pattern
const response = await axios.post(
  'https://api.groq.com/openai/v1/chat/completions',
  {
    model: 'llama-3.1-70b-versatile',
    max_tokens: 300,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userMessage }
    ]
  },
  { headers: { Authorization: `Bearer ${process.env.GROQ_API_KEY}` } }
)
return response.data.choices[0].message.content

## Deploying to cPanel
1. npm run build  (outputs to dist/)
2. Upload dist/, package.json, .env to cPanel app root
3. In cPanel Node.js App panel: Run NPM Install → Start App
4. App runs at your subdomain (e.g., api.yourdomain.com)
