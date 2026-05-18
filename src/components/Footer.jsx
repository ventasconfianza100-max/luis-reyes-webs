export default function Footer() {
  return (
    <footer className="text-center py-8 px-4 text-slate-400 text-sm">
      <p>© {new Date().getFullYear()} Luis Reyes Castro · Diseño webs para psicólogos en Chile</p>
      <p className="mt-1">
        <a
          href="https://wa.me/56922012534"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:text-violet-600 transition-colors"
        >
          +56 9 2201 2534
        </a>
      </p>
    </footer>
  )
}
