import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROUTES, getMeta, canonicalFor } from '../src/seo.js'
import { render } from '../dist-server/entry-server.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

function replaceAttr(html, openTag, value) {
  // Reemplaza el content/href del primer tag que empiece por `openTag`.
  const re = new RegExp(`(${openTag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})[^"]*(")`)
  return html.replace(re, `$1${value}$2`)
}

function applyMeta(html, routePath) {
  const meta = getMeta(routePath)
  const canonical = canonicalFor(routePath)

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
  html = replaceAttr(html, '<meta name="description" content="', meta.description)
  html = replaceAttr(html, '<link rel="canonical" href="', canonical)
  html = replaceAttr(html, '<meta property="og:title" content="', meta.title)
  html = replaceAttr(html, '<meta property="og:description" content="', meta.description)
  html = replaceAttr(html, '<meta property="og:url" content="', canonical)
  return html
}

for (const routePath of ROUTES) {
  const appHtml = render(routePath)
  let html = applyMeta(template, routePath)
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outPath =
    routePath === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, routePath, 'index.html')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html)
  console.log('✓ prerendered', routePath, '→', path.relative(root, outPath))
}
