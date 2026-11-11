import { useState } from "react";
import { MenuIcon, CloseIcon } from "./Icons.jsx";

const links = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header({ name }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-cyan-100/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#inicio" className="font-semibold tracking-tight text-cyan-800">
          {name}
        </a>

        {/* Menú de escritorio */}
        <nav className="hidden gap-8 sm:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Botón de menú en celular */}
        <button
          type="button"
          className="-mr-2 rounded-md p-2 text-cyan-900 sm:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Principal"
          className="border-t border-slate-200 bg-blue-950 px-6 py-2 sm:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-cyan-200"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
