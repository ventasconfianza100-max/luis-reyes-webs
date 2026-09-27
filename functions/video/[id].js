import { describe, isValidId, keyFor } from '../_lib/videos.js'

const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

function page(title, body) {
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>${escape(title)} | Luis Reyes Web</title>
<link rel="icon" href="/favicon.svg" />
<style>
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;font-family:Inter,system-ui,sans-serif;color:#e2e8f0;background:radial-gradient(circle at 15% 10%,rgba(124,58,237,.3),transparent 40%),radial-gradient(circle at 85% 90%,rgba(34,211,238,.15),transparent 40%),#0b1020;display:grid;place-items:center;padding:24px}
  main{width:min(100%,960px)}
  .brand{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;font-weight:800;margin-bottom:18px}
  .brand span{display:grid;place-items:center;width:32px;height:32px;border-radius:9px 9px 3px 9px;background:#141a33;color:#67e8f9;font-size:11px;letter-spacing:.1em}
  .brand em{font-style:normal;color:#c4b5fd}
  .card{border:1px solid rgba(167,139,250,.25);border-radius:22px;background:rgba(19,27,46,.85);padding:14px;box-shadow:0 30px 80px -35px rgba(124,58,237,.7)}
  video{display:block;width:100%;max-height:75vh;border-radius:14px;background:#000}
  h1{margin:18px 6px 4px;font-size:clamp(1.3rem,3vw,1.8rem);color:#fff}
  p{margin:0 6px;color:#94a3b8;font-size:.95rem}
  .foot{margin-top:18px;text-align:center;font-size:.85rem;color:#7c8aa0}
  .foot a{color:#c4b5fd}
</style>
</head>
<body><main>
<a class="brand" href="/"><span>LR</span>Luis Reyes <em>Castro</em></a>
${body}
<p class="foot">Video compartido de forma privada por <a href="/">Luis Reyes Web</a>. ¿Dudas? <a href="https://wa.me/56922012534">Escríbeme por WhatsApp</a>.</p>
</main></body></html>`
}

// GET /video/:id → página para ver un video compartido con un cliente.
export async function onRequestGet({ env, params }) {
  const headers = { 'content-type': 'text/html; charset=utf-8', 'x-robots-tag': 'noindex, nofollow', 'cache-control': 'no-store' }
  const object = env.VIDEOS && isValidId(params.id) ? await env.VIDEOS.head(keyFor(params.id)) : null
  if (!object) {
    return new Response(page('Video no disponible', '<div class="card"><h1>Este video ya no está disponible</h1><p>Puede que el enlace esté incompleto o que el video se haya retirado.</p></div>'), { status: 404, headers })
  }
  const video = describe(object)
  const body = `<div class="card">
<video controls playsinline preload="metadata" src="/api/videos/${escape(video.id)}#t=0.1"></video>
<h1>${escape(video.title)}</h1>
${video.client ? `<p>Para ${escape(video.client)}</p>` : ''}
</div>`
  return new Response(page(video.title, body), { headers })
}
