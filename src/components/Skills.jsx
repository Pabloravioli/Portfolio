import Section from "./Section.jsx";

export default function Skills({ skills }) {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title} className="rounded-xl border bg-cyan-950 p-6">
            <h3 className="mb-4 font-semibold text-cyan-200">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-cyan-700 px-3 py-1 text-sm text-cyan-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
