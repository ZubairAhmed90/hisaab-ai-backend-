'use strict';

const fs = require('fs');
const path = require('path');

/** HostNext / CloudLinux often needs debian-openssl-1.0.x */
const LINUX_ENGINES = [
  'libquery_engine-debian-openssl-1.0.x.so.node',
  'libquery_engine-debian-openssl-1.1.x.so.node',
  'libquery_engine-debian-openssl-3.0.x.so.node',
  'libquery_engine-rhel-openssl-3.0.x.so.node',
];

function findEngineInDir(dir) {
  if (!dir || !fs.existsSync(dir)) return null;
  for (const file of LINUX_ENGINES) {
    const p = path.join(dir, file);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

/**
 * Force Prisma to load the query engine from app-root prisma/client
 * (works even when nodevenv copy is incomplete).
 */
function pinPrismaEngine(appRoot) {
  const clientDir = path.join(appRoot, 'prisma', 'client');
  const engine = findEngineInDir(clientDir);
  if (engine) {
    process.env.PRISMA_QUERY_ENGINE_LIBRARY = engine;
    process.env.PRISMA_CLIENT_ENGINE_TYPE = 'library';
    return engine;
  }
  return null;
}

function listEngineStatus(appRoot) {
  const clientDir = path.join(appRoot, 'prisma', 'client');
  const lines = [`prisma/client dir: ${clientDir}`];
  if (!fs.existsSync(clientDir)) {
    lines.push('STATUS: MISSING — run git pull or upload prisma/client from your PC');
    return lines;
  }
  for (const file of LINUX_ENGINES) {
    const p = path.join(clientDir, file);
    lines.push(`${file}: ${fs.existsSync(p) ? 'OK' : 'missing'}`);
  }
  return lines;
}

module.exports = { pinPrismaEngine, listEngineStatus, LINUX_ENGINES };
