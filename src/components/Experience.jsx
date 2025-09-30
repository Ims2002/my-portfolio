export default function Experience() {
  const experiences = [
    {
      title: "Programador Full Stack",
      company: "Grupo Fernando A. Moll",
      type: "Contrato de prácticas",
      period: "mar. 2025 - jun. 2025 · 4 meses",
      location: "Dénia, Comunidad Valenciana, España · Presencial",
      description: "Desarrollo de un CRM en Quasar consultando a una API con backend PHP en Velneo. PHP, JavaScript entre otras tecnologías."
    },
    {
      title: "Programador Full Stack",
      company: "Ayuntamiento El Poble Nou de Benitatxell",
      type: "Jornada completa",
      period: "feb. 2023 - jun. 2023 · 4 meses",
      location: "Benitachell, Comunidad Valenciana, España · Presencial",
      description: "Desarrollo de una aplicación móvil para la gestión de RSU usando Android Studio, SQL entre otras tecnologías."
    },
    {
      title: "Repartidor de Correos",
      company: "Sociedad Estatal de Correos y Telégrafos",
      type: "Jornada completa",
      period: "jun. 2022/23/24/25 - sep. 2022/23/24/25 · 9 meses",
      location: "Oficinas de reparto por toda la Marina Alta · Presencial",
      description: "Reparto de mensajería y paquetería a lo largo de un barrio o zona asignada, gestión mediante PDA Honeywell."
    },
    {
      title: "Ayudante de Cocina",
      company: "Grupo Bon Amb",
      type: "Jornada completa",
      period: "abr. 2022 - jun. 2022 · 2 meses",
      location: "Jávea, Comunidad Valenciana, España · Presencial",
      description: "Apoyo en la preparación de platos, organización de ingredientes y limpieza de la cocina, aprendiendo técnicas profesionales de gastronomía y trabajo en equipo."
    }
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white px-8 py-16"
    >
      <h2
        className="text-4xl font-bold mb-12 text-orange-400 flex justify-center items-center"
        data-aos="flip-up"
      >
        Experiencia
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative border-2 border-orange-400 rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 bg-black max-w-sm w-full"
            data-aos="fade-down"
          >
            {/* Texto */}
            <h3 className="text-xl font-bold text-orange-400 mb-1 text-center">
              {exp.title}
            </h3>
            <p className="text-gray-300 font-semibold text-center mb-1">{exp.company} · {exp.type}</p>
            <p className="text-gray-400 text-sm text-center mb-2">{exp.period}</p>
            <p className="text-gray-400 text-sm text-center mb-4">{exp.location}</p>
            <p className="text-gray-300 text-center">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
