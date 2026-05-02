const institutions = [
  {
    name: "IES La Mar",
    period: "2021 – 2025",
    programs: [
      "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
      "Especialización en Big Data e Inteligencia Artificial (Grado Superior)",
    ],
  },
  {
    name: "Evolve Academy",
    period: "2026",
    programs: ["Máster en Data Analytics"],
  },
  {
    name: "The Power Education",
    period: "2025",
    programs: ["Data Analytics"],
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-white px-8 md:px-20 py-20">
      <div className="flex items-center gap-3 mb-14 justify-center" data-aos="flip-up">
        <div className="w-1 h-10 bg-blue-700 rounded-full"></div>
        <h2 className="text-4xl font-bold text-slate-900">Formación Académica</h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {institutions.map((inst, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold text-slate-900">{inst.name}</h3>
              <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                {inst.period}
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {inst.programs.map((prog, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <span className="text-slate-600 text-sm leading-relaxed">{prog}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
