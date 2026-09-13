// Fondo ambiental: luces moradas que se desplazan lento (solo transform) + grano muy leve.
// Se apaga con prefers-reduced-motion. La barra superior muestra el avance de lectura.
export default function Decorations() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <span className="ambient__orb ambient__orb--1" />
        <span className="ambient__orb ambient__orb--2" />
        <span className="ambient__orb ambient__orb--3" />
        <span className="ambient__orb ambient__orb--4" />
        {/* grano sutil */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </>
  )
}
