export default function Experience() {
  const experiences = [
    {
      title: "Programador Full Stack",
      company: "Grupo Fernando A. Moll",
      type: "Contrato de prácticas",
      period: "mar. 2025 - jun. 2025 · 4 meses",
      location: "Dénia, Comunidad Valenciana, España · Presencial",
      description:
        "Desarrollo de un CRM en Quasar consultando a una API con backend PHP en Velneo. PHP, JavaScript entre otras tecnologías.",
    },
    {
      title: "Programador Full Stack",
      company: "Ayuntamiento El Poble Nou de Benitatxell",
      type: "Jornada completa",
      period: "feb. 2023 - jun. 2023 · 4 meses",
      location: "Benitachell, Comunidad Valenciana, España · Presencial",
      description:
        "Desarrollo de una aplicación móvil para la gestión de RSU usando Android Studio, SQL entre otras tecnologías.",
    },
    {
      title: "Repartidor de Correos",
      company: "Sociedad Estatal de Correos y Telégrafos",
      type: "Jornada completa",
      period: "jun. 2022/23/24/25 - sep. 2022/23/24/25 · 9 meses",
      location: "Oficinas de reparto por toda la Marina Alta · Presencial",
      description:
        "Reparto de mensajería y paquetería a lo largo de un barrio o zona asignada, gestión mediante PDA Honeywell.",
    },
    {
      title: "Ayudante de Cocina",
      company: "Grupo Bon Amb",
      type: "Jornada completa",
      period: "abr. 2022 - jun. 2022 · 2 meses",
      location: "Jávea, Comunidad Valenciana, España · Presencial",
      description:
        "Apoyo en la preparación de platos, organización de ingredientes y limpieza de la cocina, aprendiendo técnicas profesionales de gastronomía y trabajo en equipo.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-50 px-8 md:px-20 py-20"
    >
      <div className="flex items-center gap-3 mb-14 justify-center" data-aos="flip-up">
        <div className="w-1 h-10 bg-blue-700 rounded-full"></div>
        <h2 className="text-4xl font-bold text-slate-900">Experiencia</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
          >
            <div className="flex items-start justify-between mb-3 gap-2">
              <h3 className="text-lg font-bold text-slate-900 leading-tight">{exp.title}</h3>
              <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                {exp.type}
              </span>
            </div>
            <p className="text-blue-700 font-semibold mb-1 text-sm">{exp.company}</p>
            <p className="text-slate-400 text-xs mb-0.5">{exp.period}</p>
            <p className="text-slate-400 text-xs mb-4">{exp.location}</p>
            <p className="text-slate-600 text-sm leading-relaxed mt-auto pt-3 border-t border-slate-100">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
