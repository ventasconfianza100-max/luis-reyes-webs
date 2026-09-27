// Genera versiones de 480 y 800 px de las capturas del portafolio (public/portfolio-*.webp),
// para que el navegador descargue solo el tamaño que necesita.
import sharp from 'sharp'
import { readdir } from 'node:fs/promises'

const files = (await readdir('public')).filter((f) => /^portfolio-[a-z0-9-]+\.webp$/.test(f) && !/-(480|800)\.webp$/.test(f))
for (const file of files) {
  for (const width of [480, 800]) {
    await sharp(`public/${file}`).resize({ width }).webp({ quality: 78 }).toFile(`public/${file.replace('.webp', `-${width}.webp`)}`)
  }
}
console.log(`Versiones responsivas generadas para ${files.length} imágenes`)
