#!/bin/bash
# cPanel-friendly install (low memory, shows progress)
set -e
cd "$(dirname "$0")/.."

export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=512}"

echo "=== HisaabAI cPanel install ==="
echo "Node: $(node -v)"
echo "This may take 10-25 minutes on shared hosting — wait for output."
echo ""

echo "[1/4] npm install..."
npm install --no-optional --maxsockets=2 --loglevel=info

echo "[2/4] prisma generate..."
npm run prisma:generate

echo "[3/4] prisma migrate deploy..."
npm run prisma:migrate:deploy

echo "[4/4] nest build..."
npm run build

echo ""
echo "=== Done ==="
echo "Restart Node app in cPanel, or run: npm start"
