import Section from "./Section.jsx";
import { GithubIcon, ExternalIcon } from "./Icons.jsx";
import { asset } from "../lib/asset.js";

function Screenshots({ images, title }) {
  // Sin capturas todavía: imagen de relleno.
  if (!images?.length) {
    return (
      <img
        src={asset("proyecto-placeholder.svg")}
        alt={`Captura de ${title} (pendiente)`}
        className="aspect-video w-full object-cover"
      />
    );
  }

  // Una captura: grande. Varias: cuadrícula de dos columnas.
  if (images.length === 1) {
    return (
      <img
        src={asset(images[0])}
        alt={`Captura de ${title}`}
        className="aspect-video w-full object-cover object-top"
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-px bg-cyan-950">
      {images.map((src, i) => (
        <img
          key={src}
          src={asset(src)}
          alt={`Captura ${i + 1} de ${title}`}
          className="aspect-video w-full object-cover object-top"
        />
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-cyan-950">
      <div className="border-b border-slate-200">
        <Screenshots images={project.images} title={project.title} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-cyan-600">{project.title}</h3>
        <p className="mt-2 leading-relaxed">{project.description}</p>

        {project.learned && (
          <p className="mt-4 text-sm leading-relaxed text-cyan-200">
            <span className="font-medium text-cyan-100">Lo que aprendí: </span>
            {project.learned}
          </p>
        )}

        {project.tech?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full  bg-cyan-700 px-3 py-1 text-xs font-medium text-cyan-400"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {(project.repo || project.demo) && (
          <div className="mt-6 flex gap-5 pt-1 text-sm font-medium">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-600 hover:text-cyan-200"
              >
                <GithubIcon className="h-4 w-4" /> Repositorio
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-cyan-200"
              >
                <ExternalIcon /> Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects({ projects }) {
  // Con un solo proyecto la tarjeta queda centrada y de buen tamaño;
  // al agregar más, se acomodan solas en dos columnas.
  const single = projects.length === 1;

  return (
    <Section id="proyectos" title="Proyectos">
      <div
        className={
          single ? "mx-auto grid max-w-2xl gap-8" : "grid gap-8 md:grid-cols-2"
        }
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
