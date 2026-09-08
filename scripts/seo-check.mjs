import fs from 'node:fs'
import path from 'node:path'
import { PRIVATE_ROUTES, ROUTES, SITE_URL } from '../src/seo.js'
const dist = path.resolve('dist')
const titles = new Map()
for (const route of ROUTES) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html')
  if (!fs.existsSync(file)) throw new Error(`Falta prerender: ${route}`)
  const html = fs.readFileSync(file, 'utf8')
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  if (!title) throw new Error(`Falta title: ${route}`)
  if ((html.match(/<meta name="description"/g) || []).length !== 1) throw new Error(`Descripción inválida: ${route}`)
  if ((html.match(/<link rel="canonical"/g) || []).length !== 1 || !html.includes(SITE_URL)) throw new Error(`Canonical inválido: ${route}`)
  if ((html.match(/hreflang="es-CL"/g) || []).length !== 1) throw new Error(`Hreflang es-CL inválido: ${route}`)
  if ((html.match(/hreflang="x-default"/g) || []).length !== 1) throw new Error(`Hreflang x-default inválido: ${route}`)
  if ((html.match(/<h1\b/g) || []).length !== 1) throw new Error(`H1 inválido: ${route}`)
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  if (!jsonLdBlocks.length) throw new Error(`Faltan datos estructurados: ${route}`)
  for (const [, json] of jsonLdBlocks) JSON.parse(json)
  if (titles.has(title)) throw new Error(`Title duplicado: ${route} y ${titles.get(title)}`)
  titles.set(title, route)
}
if (!fs.existsSync(path.join(dist, 'sitemap.xml'))) throw new Error('Falta sitemap')
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
for (const route of PRIVATE_ROUTES) {
  const file = path.join(dist, route.slice(1), 'index.html')
  if (!fs.existsSync(file)) throw new Error(`Falta prerender privado: ${route}`)
  const html = fs.readFileSync(file, 'utf8')
  if (!html.includes('name="robots" content="noindex, nofollow"')) throw new Error(`Noindex inválido: ${route}`)
  if (sitemap.includes(`${SITE_URL}${route}`)) throw new Error(`Ruta privada incluida en sitemap: ${route}`)
}
if (!fs.existsSync(path.join(dist, '404.html'))) throw new Error('Falta 404')
console.log(`SEO OK: ${ROUTES.length} rutas públicas y ${PRIVATE_ROUTES.length} privada(s) prerenderizadas.`)
