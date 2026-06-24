'use strict';

const path = require('path');
const { copyPrismaClient, findRepoRoot } = require('./copy-prisma-client');
const { listEngineStatus, pinPrismaEngine } = require('./pin-prisma-engine');

const root = findRepoRoot() || path.join(__dirname, '..');

console.log('=== HisaabAI Prisma deploy check ===\n');
for (const line of listEngineStatus(root)) {
  console.log(line);
}

console.log('');
const engine = pinPrismaEngine(root);
if (engine) {
  console.log(`\nEngine pin OK: ${engine}`);
  console.log('\nCopying client to nodevenv...');
  copyPrismaClient(root);
  console.log('\nDone. Restart the app (server.js).');
  process.exit(0);
}

console.log('\nFAILED: No Linux engine in prisma/client/.');
console.log('Fix: on your PC run `npm run prisma:generate`, then git push,');
console.log('     OR upload folder prisma/client/ via cPanel File Manager.');
process.exit(1);
