// Contenedor común de las secciones: mismo ancho, espaciado y título.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-slate-200 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-cyan-200 sm:text-3xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
