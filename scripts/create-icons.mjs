// Íconos PNG para celulares y buscadores a partir del diseño del favicon.
import sharp from 'sharp'

const icon = (size, padding) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#5b21b6"/></linearGradient></defs>
  <rect width="512" height="512" rx="${padding ? 0 : 112}" fill="url(#g)"/>
  <text x="256" y="${padding ? 318 : 330}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="${padding ? 190 : 250}" fill="#ffffff">L<tspan fill="#ddd6fe">R</tspan></text>
</svg>`)

await sharp(icon(180, false)).png().toFile('public/apple-touch-icon.png')
await sharp(icon(192, false)).png().toFile('public/icon-192.png')
await sharp(icon(512, false)).png().toFile('public/icon-512.png')
await sharp(icon(512, true)).png().toFile('public/icon-maskable-512.png')
await sharp(icon(48, false)).png().toFile('public/favicon-48.png')
console.log('Íconos generados')
