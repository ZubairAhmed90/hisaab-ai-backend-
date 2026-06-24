/**
 * HisaabAI — production entry point (cPanel / Node.js hosting)
 *
 * cPanel → Setup Node.js App → Application startup file: server.js
 *
 * Flow: server.js → dist/main.js (bootstrap) → NestJS app
 */
'use strict';

// Limit heap for CloudLinux / cPanel shared hosting
process.env.UV_THREADPOOL_SIZE = process.env.UV_THREADPOOL_SIZE || '2';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST_MAIN = path.join(ROOT, 'dist', 'main.js');

function fail(message) {
  console.error(`[HisaabAI] ${message}`);
  process.exit(1);
}

// Ensure build exists before starting
if (!fs.existsSync(DIST_MAIN)) {
  fail(
    'dist/main.js not found. On the server run: npm install && npm run deploy:cpanel',
  );
}

// Optional: warn if .env is missing (Nest also loads via @nestjs/config)
if (!fs.existsSync(path.join(ROOT, '.env'))) {
  console.warn('[HisaabAI] Warning: .env not found — set env vars in cPanel Node.js app');
}

// Copy committed Prisma client (cPanel nodevenv may skip postinstall paths)
try {
  const { copyPrismaClient } = require(path.join(ROOT, 'scripts', 'copy-prisma-client.js'));
  copyPrismaClient(ROOT);
} catch (e) {
  console.warn('[HisaabAI] Prisma client copy skipped:', e.message);
}

const { bootstrap } = require(DIST_MAIN);

bootstrap().catch((err) => {
  console.error('[HisaabAI] Server failed to start:', err);
  process.exit(1);
});
