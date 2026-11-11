import Section from "./Section.jsx";

function Timeline({ title, items }) {
  if (!items?.length) return null;
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider  text-cyan-200">
        {title}
      </h3>
      <ul className="space-y-5 border-l border-slate-200 pl-5">
        {items.map((item) => (
          <li key={`${item.title}-${item.period}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[25px] top-2 h-2 w-2 rounded-full bg-green-500"
            />
            <p className="font-medium text-cyan-400">{item.title}</p>
            <p className="text-sm text-cyan-400">{item.place}</p>
            <p className="text-sm text-cyan-600">{item.period}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About({ about }) {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-4 leading-relaxed md:col-span-3">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="space-y-10 md:col-span-2">
          <Timeline title="Formación" items={about.education} />
          <Timeline title="Experiencia" items={about.experience} />
        </div>
      </div>
    </Section>
  );
}
