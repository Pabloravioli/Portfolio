import Section from "./Section.jsx";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  GithubIcon,
  DownloadIcon,
} from "./Icons.jsx";
import { asset } from "../lib/asset.js";

function ContactItem({ icon, label, value, href, external }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex items-center gap-4 rounded-xl border border-cyan-600 p-4 transition-colors hover:border-cyan-200"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-950 text-cyan-600 ">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block text-xs text-cyan-600">{label}</span>
          <span className="block truncate font-medium text-cyan-600 group-hover:text-cyan-200">
            {value}
          </span>
        </span>
      </a>
    </li>
  );
}

export default function Contact({ profile }) {
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}`;

  return (
    <Section id="contacto" title="Contacto">
      <p className="mb-8 max-w-xl leading-relaxed">
        ¿Tenés una búsqueda abierta o querés que charlemos? Escribime por
        cualquiera de estos medios.
      </p>

      <ul className="grid gap-4 sm:grid-cols-2">
        <ContactItem
          icon={<MailIcon />}
          label="Email"
          value={profile.email}
          href={gmailCompose}
          external
        />
        <ContactItem
          icon={<PhoneIcon />}
          label="Teléfono"
          value={profile.phone}
          href={`tel:${profile.phoneLink}`}
        />
        <ContactItem
          icon={<LinkedinIcon />}
          label="LinkedIn"
          value="Ver perfil"
          href={profile.linkedin}
          external
        />
        <ContactItem
          icon={<GithubIcon />}
          label="GitHub"
          value="Ver repositorios"
          href={profile.github}
          external
        />
      </ul>

      <a
        href={asset(profile.cv)}
        download={profile.cvDownloadName}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
      >
        <DownloadIcon className="h-4 w-4" />
        Descargar CV técnico (PDF)
      </a>
    </Section>
  );
}
