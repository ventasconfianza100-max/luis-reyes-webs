import { portfolioProjects } from '../portfolioProjects'

// Tarjeta con la captura de un proyecto real publicado, para respaldar el encabezado de cada landing.
export default function ProjectProof({ name, label = 'Proyecto real publicado' }) {
  const project = portfolioProjects.find((item) => item.name === name)

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-[1.75rem] border border-white/80 bg-white/85 p-3 shadow-[0_28px_70px_-40px_rgba(15,23,42,.55)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_32px_80px_-40px_rgba(79,70,229,.55)]"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-100">
        <img
          src={project.image}
          alt={project.alt}
          width="1200"
          height="833"
          loading="eager"
          decoding="async"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-brand-600">{label}</p>
          <p className="mt-1 truncate font-display text-lg font-bold text-slate-900">{project.name}</p>
          <p className="truncate text-xs text-slate-500">{project.type} · {project.domain}</p>
        </div>
        <span className="flex-none rounded-xl bg-slate-950 px-3.5 py-2 text-xs font-bold text-white transition group-hover:bg-brand-700">
          Ver sitio <span aria-hidden="true">↗</span>
        </span>
      </div>
    </a>
  )
}
