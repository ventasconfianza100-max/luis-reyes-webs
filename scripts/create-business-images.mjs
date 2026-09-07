import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const background = 'assets/business-showcase-background.png'
const outputDir = 'entregables-google-business'
const projects = [
  ['trabalengua', 'TRABALENGUA', 'E-COMMERCE ESCOLAR', 'portfolio-trabalengua.webp'],
  ['7ma-control', '7MA CONTROL', 'SITIO WEB DE SERVICIOS', 'portfolio-7ma-control.webp'],
  ['munay-cueros', 'MUNAY CUEROS CHILE', 'CATÁLOGO PREMIUM', 'portfolio-munay.webp'],
  ['escuela-rdlf', 'ESCUELA RDLF', 'PLATAFORMA DEPORTIVA', 'portfolio-rdlf.webp'],
  ['cuchillos-bravo', 'CUCHILLOS BRAVO', 'TIENDA Y CATÁLOGO', 'portfolio-cuchillos-bravo.webp'],
  ['psico-andrea-martinez', 'PSICÓLOGA ANDREA MARTÍNEZ', 'MARCA PROFESIONAL', 'portfolio-andrea.webp'],
]

const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

await mkdir(outputDir, { recursive: true })

for (const [slug, name, type, screenshotName] of projects) {
  const screenshot = await sharp(`public/${screenshotName}`).resize(1016, 635, { fit: 'cover', position: 'top' }).png().toBuffer()
  const chrome = Buffer.from(`<svg width="1080" height="720" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="s" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#172554" flood-opacity=".22"/></filter></defs>
    <g filter="url(#s)"><rect x="32" y="32" width="1016" height="688" rx="28" fill="#fff"/><rect x="32" y="32" width="1016" height="53" rx="28" fill="#f8fafc"/><rect x="32" y="60" width="1016" height="25" fill="#f8fafc"/><circle cx="65" cy="58" r="7" fill="#fb7185"/><circle cx="89" cy="58" r="7" fill="#fbbf24"/><circle cx="113" cy="58" r="7" fill="#34d399"/><rect x="154" y="47" width="330" height="22" rx="11" fill="#e2e8f0"/></g>
  </svg>`)
  const label = Buffer.from(`<svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
    <style>.brand{font:800 30px Arial,sans-serif;letter-spacing:-1px}.title{font:800 45px Arial,sans-serif;letter-spacing:-1px}.type{font:700 17px Arial,sans-serif;letter-spacing:3px}.site{font:600 18px Arial,sans-serif}</style>
    <rect x="54" y="44" width="54" height="54" rx="16" fill="#111827"/><text x="81" y="79" fill="white" text-anchor="middle" font-family="Arial" font-size="18" font-weight="800">LR</text>
    <text x="126" y="80" class="brand" fill="#111827">Luis Reyes <tspan fill="#7c3aed">Castro</tspan></text>
    <rect x="54" y="852" width="210" height="38" rx="19" fill="#ede9fe"/><text x="159" y="877" class="type" fill="#6d28d9" text-anchor="middle">${escapeXml(type)}</text>
    <text x="54" y="946" class="title" fill="#0f172a">${escapeXml(name)}</text><text x="54" y="993" class="site" fill="#64748b">Diseño y desarrollo web · luisreyesweb.cl</text>
    <path d="M914 944h96M978 912l32 32-32 32" fill="none" stroke="#7c3aed" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`)
  await sharp(background).resize(1080, 1080).composite([
    { input: chrome, top: 126, left: 0 },
    { input: screenshot, top: 211, left: 32 },
    { input: label, top: 0, left: 0 },
  ]).jpeg({ quality: 92, chromaSubsampling: '4:4:4' }).toFile(`${outputDir}/${slug}-google-business.jpg`)
}

console.log(`Creadas ${projects.length} imágenes en ${outputDir}`)
