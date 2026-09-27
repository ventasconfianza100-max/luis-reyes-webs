// Genera las imágenes para compartir (Open Graph, 1200x630) de proyectos y rubros.
// Uso: node scripts/create-og-images.mjs  → public/og/<nombre>.jpg
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { portfolioProjects } from '../src/portfolioProjects.js'
import { rubrosTalca } from '../src/rubrosTalca.js'

const escapeXml = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

async function card(file, screenshot, eyebrow, title) {
  const shot = await sharp(`public/${screenshot}`).resize(620, 420, { fit: 'cover', position: 'top' }).png().toBuffer()
  const lines = []
  let line = ''
  for (const word of title.split(' ')) {
    if ((line + ' ' + word).trim().length > 20) { lines.push(line.trim()); line = word } else line += ` ${word}`
  }
  lines.push(line.trim())
  const titleSvg = lines.slice(0, 4).map((l, i) => `<text x="64" y="${270 + i * 58}" class="title">${escapeXml(l)}</text>`).join('')

  const base = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="a" cx="15%" cy="10%" r="60%"><stop offset="0" stop-color="#7c3aed" stop-opacity=".55"/><stop offset="1" stop-color="#7c3aed" stop-opacity="0"/></radialGradient>
      <radialGradient id="b" cx="90%" cy="95%" r="55%"><stop offset="0" stop-color="#22d3ee" stop-opacity=".25"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/></radialGradient>
    </defs>
    <style>.brand{font:800 30px Arial,sans-serif}.eyebrow{font:700 17px Arial,sans-serif;letter-spacing:3px}.title{font:800 50px Arial,sans-serif;fill:#fff}.site{font:600 22px Arial,sans-serif;fill:#94a3b8}</style>
    <rect width="1200" height="630" fill="#0b1020"/><rect width="1200" height="630" fill="url(#a)"/><rect width="1200" height="630" fill="url(#b)"/>
    <rect x="64" y="56" width="54" height="54" rx="15" fill="#141a33" stroke="#7c3aed" stroke-opacity=".5"/><text x="91" y="91" fill="#67e8f9" text-anchor="middle" font-family="Arial" font-size="18" font-weight="800">LR</text>
    <text x="134" y="93" class="brand" fill="#fff">Luis Reyes <tspan fill="#c4b5fd">Castro</tspan></text>
    <text x="64" y="190" class="eyebrow" fill="#c4b5fd">${escapeXml(eyebrow.toUpperCase())}</text>
    ${titleSvg}
    <text x="64" y="570" class="site">luisreyesweb.cl · Diseño web en Talca</text>
    <rect x="530" y="95" width="640" height="470" rx="22" fill="#141a33" stroke="#a78bfa" stroke-opacity=".35"/>
    <circle cx="560" cy="120" r="6" fill="#f87171"/><circle cx="580" cy="120" r="6" fill="#fbbf24"/><circle cx="600" cy="120" r="6" fill="#34d399"/>
  </svg>`)

  await sharp(base)
    .composite([{ input: shot, left: 540, top: 138 }])
    .jpeg({ quality: 84 })
    .toFile(`public/og/${file}.jpg`)
}

await mkdir('public/og', { recursive: true })

for (const project of portfolioProjects) {
  await card(`proyecto-${project.slug}`, project.image.replace(/^\//, ''), project.type, project.name)
}

for (const rubro of rubrosTalca) {
  const project = portfolioProjects.find((p) => p.slug === rubro.projects[0])
  await card(rubro.path.replace(/^\//, ''), project.image.replace(/^\//, ''), 'Página web en Talca', rubro.label)
}

console.log('Imágenes Open Graph generadas en public/og/')
