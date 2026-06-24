/**
 * HisaabAI — production entry point (cPanel / Node.js hosting)
 *
 * cPanel → Setup Node.js App → Application startup file: server.js
 *
 * Flow: server.js → dist/main.js (bootstrap) → NestJS app
 */
'use strict';

// CloudLinux / cPanel: lower memory footprint
process.env.UV_THREADPOOL_SIZE = process.env.UV_THREADPOOL_SIZE || '2';
process.env.DISABLE_CRON = process.env.DISABLE_CRON || 'true';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST_MAIN = path.join(ROOT, 'dist', 'main.js');

function fail(message) {
  console.error(`[HisaabAI] ${message}`);
  process.exit(1);
}

// Pin Prisma engine BEFORE any @prisma/client code loads
const { pinPrismaEngine, isRailway } = require(path.join(
  ROOT,
  'scripts',
  'pin-prisma-engine.js',
));
const onRailway = isRailway();
const enginePath = pinPrismaEngine(ROOT);
if (!enginePath && !onRailway) {
  fail(
    'No Linux Prisma engine in prisma/client/. Run: node scripts/check-prisma.js — or upload prisma/client from your PC.',
  );
}
if (enginePath) {
  console.log(`[HisaabAI] Prisma engine: ${enginePath}`);
} else if (onRailway) {
  console.log('[HisaabAI] Prisma engine: using node_modules default (Railway)');
}

// Ensure build exists before starting
if (!fs.existsSync(DIST_MAIN)) {
  fail('dist/main.js not found. Run: npm run build');
}

if (!fs.existsSync(path.join(ROOT, '.env'))) {
  const where = onRailway ? 'Railway → Variables' : 'cPanel Node.js app';
  console.warn(`[HisaabAI] Warning: .env not found — set env vars in ${where}`);
}

if (process.env.PORT) {
  console.log(`[HisaabAI] PORT=${process.env.PORT} (from cPanel / environment)`);
}

// cPanel nodevenv symlink layout only — skip on Railway (normal node_modules)
if (!onRailway) {
  try {
    const { copyPrismaClient } = require(path.join(ROOT, 'scripts', 'copy-prisma-client.js'));
    copyPrismaClient(ROOT);
  } catch (e) {
    console.warn('[HisaabAI] Prisma client copy skipped:', e.message);
  }
}

const { bootstrap } = require(DIST_MAIN);

bootstrap().catch((err) => {
  console.error('[HisaabAI] Server failed to start:', err);
  process.exit(1);
});
