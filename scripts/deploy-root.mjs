// Copy the production build (dist/) to the repo ROOT so GitHub Pages can serve
// it from the default location. The built index.src.html is renamed to
// index.html at the root (the source entry index.src.html is left untouched).
//
// Deployed top-level paths are tracked in .deployed-manifest so a re-deploy can
// clean the previous output without ever touching source files.

import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const manifestPath = join(root, '.deployed-manifest')

if (!existsSync(dist)) {
  console.error('deploy-root: dist/ not found — run `npm run build` first.')
  process.exit(1)
}

// 1. Remove what we deployed last time (top-level entries only).
if (existsSync(manifestPath)) {
  for (const name of readFileSync(manifestPath, 'utf8').split('\n').filter(Boolean)) {
    const p = join(root, name)
    if (existsSync(p)) rmSync(p, { recursive: true, force: true })
  }
}

// 2. Copy dist/ entries to root, renaming the built HTML to index.html.
//    Skip models/ — the production model is fetched from its remote host at
//    runtime, never committed (and 123MB would exceed GitHub's push limit).
const SKIP = new Set(['models'])
const deployed = []
for (const name of readdirSync(dist)) {
  if (SKIP.has(name)) continue
  const src = join(dist, name)
  const destName = name === 'index.src.html' ? 'index.html' : name
  const dest = join(root, destName)
  if (statSync(src).isDirectory()) {
    cpSync(src, dest, { recursive: true })
  } else {
    mkdirSync(dirname(dest), { recursive: true })
    copyFileSync(src, dest)
  }
  deployed.push(destName)
}

// 3. .nojekyll so GitHub Pages serves all files as-is (no Jekyll processing,
//    which would otherwise skip folders/files it doesn't understand).
writeFileSync(join(root, '.nojekyll'), '')
deployed.push('.nojekyll')

writeFileSync(manifestPath, deployed.sort().join('\n') + '\n')
console.log(`deploy-root: published ${deployed.length} entries to repo root`)
console.log('  ' + deployed.sort().join(', '))
