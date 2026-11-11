import { useState } from "react";
import { asset } from "../lib/asset.js";

function Avatar({ photo, name }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const size = "h-32 w-32 sm:h-40 sm:w-40";

  // Si no hay foto (o no se encuentra el archivo), se muestran las iniciales.
  if (!photo || failed) {
    return (
      <div
        aria-hidden="true"
        className={`${size} grid shrink-0 place-items-center rounded-full bg-indigo-50 text-3xl font-semibold text-indigo-600`}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={asset(photo)}
      alt={`Foto de ${name}`}
      onError={() => setFailed(true)}
      className={`${size} shrink-0 rounded-full object-cover ring-1 ring-black-200`}
    />
  );
}

export default function Hero({ profile }) {
  return (
    <section id="inicio" className="py-16 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 sm:flex-row sm:items-center sm:gap-12">
        <Avatar photo={profile.photo} name={profile.name} />

        <div>
          <p className="text-sm font-medium text-cyan-100">Hola, soy</p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-cyan-200 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-xl text-cyan-600">{profile.role}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-cyan-400">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-lg bg-cyan-800 px-5 py-2.5 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-600"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-lg border border-cyan-200 px-5 py-2.5 text-sm font-medium text-cyan-400 transition-colors  hover:bg- hover:text-cyan-200"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
