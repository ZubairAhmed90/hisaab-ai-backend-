'use strict';

/**
 * Copy committed prisma/client → node_modules/.prisma/client
 * Skips `prisma generate` on memory-limited cPanel hosts.
 *
 * cPanel runs npm from nodevenv/.../lib — use INIT_CWD or server.js to invoke this.
 */
const fs = require('fs');
const path = require('path');

function findRepoRoot() {
  const hints = [
    process.env.HISAAB_ROOT,
    process.env.INIT_CWD,
    process.argv[2],
    path.join(__dirname, '..'),
  ].filter(Boolean);

  for (const hint of hints) {
    const root = path.resolve(hint);
    if (fs.existsSync(path.join(root, 'prisma', 'client'))) return root;
  }

  let dir = __dirname;
  for (let i = 0; i < 12; i++) {
    if (fs.existsSync(path.join(dir, 'prisma', 'client'))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  const home = process.env.HOME;
  if (home) {
    const app = path.join(home, 'hisaab-ai-backend');
    if (fs.existsSync(path.join(app, 'prisma', 'client'))) return app;
  }

  return null;
}

function findPrismaClientDest(repoRoot) {
  try {
    const pkg = require.resolve('@prisma/client/package.json', {
      paths: [repoRoot, process.cwd(), __dirname],
    });
    return path.join(path.dirname(path.dirname(pkg)), '.prisma', 'client');
  } catch {
    const candidates = [
      path.join(repoRoot, 'node_modules', '.prisma', 'client'),
      path.join(process.cwd(), 'node_modules', '.prisma', 'client'),
    ];
    if (process.env.HOME) {
      candidates.push(
        path.join(
          process.env.HOME,
          'nodevenv',
          'hisaab-ai-backend',
          '18',
          'lib',
          'node_modules',
          '.prisma',
          'client',
        ),
      );
    }
    for (const c of candidates) {
      const nm = path.dirname(path.dirname(c));
      if (fs.existsSync(nm)) return c;
    }
    return path.join(repoRoot, 'node_modules', '.prisma', 'client');
  }
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

function copyPrismaClient(repoRoot) {
  const src = path.join(repoRoot, 'prisma', 'client');
  if (!fs.existsSync(src)) {
    console.warn(
      '[prisma] prisma/client missing — run `npm run prisma:generate` on your PC',
    );
    return false;
  }

  const dest = findPrismaClientDest(repoRoot);
  copyDir(src, dest);
  console.log(`[prisma] Client copied to ${dest}`);
  return true;
}

module.exports = { copyPrismaClient, findRepoRoot };

if (require.main === module) {
  const repo = findRepoRoot();
  if (!repo) {
    console.warn('[prisma] Could not find repo root — skip copy');
    process.exit(0);
  }
  copyPrismaClient(repo);
}
