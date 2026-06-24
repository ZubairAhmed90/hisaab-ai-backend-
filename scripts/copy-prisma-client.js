'use strict';

/**
 * Copy committed prisma/client → node_modules/.prisma/client
 * Avoids running `prisma generate` on memory-limited cPanel hosts.
 */
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'prisma', 'client');
const dest = path.join(__dirname, '..', 'node_modules', '.prisma', 'client');

if (!fs.existsSync(src)) {
  console.warn(
    '[prisma] prisma/client missing — run `npm run prisma:generate` on your PC first',
  );
  process.exit(0);
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, entry.name);
    const d = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

copyDir(src, dest);
console.log('[prisma] Client copied to node_modules/.prisma/client');
