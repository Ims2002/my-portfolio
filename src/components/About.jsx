export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-white px-8 md:px-20 py-20 gap-16"
    >
      {/* Marco con imagen */}
      <div className="relative flex-shrink-0" data-aos="fade-right">
        <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl ring-4 ring-blue-100">
          <img
            src="./img/PLT.png"
            alt="Sobre mí"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-3 -left-3 w-64 h-64 bg-blue-50 rounded-2xl -z-10 border border-blue-100"></div>
      </div>

      {/* Texto */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-6" data-aos="fade-left">
          <div className="w-1 h-10 bg-blue-700 rounded-full"></div>
          <h2 className="text-4xl font-bold text-slate-900">Sobre mí</h2>
        </div>

        <p className="text-lg text-slate-600 mb-5 leading-relaxed" data-aos="fade-up">
          Soy <span className="font-semibold text-slate-900">Iván Morell</span>,
          Desarrollador Web Full Stack con especial interés en
          <span className="text-blue-700 font-medium"> Inteligencia Artificial</span> y
          <span className="text-blue-700 font-medium"> Big Data</span>. Me caracterizo por
          mi implicación en cada proyecto y por una constante búsqueda de aprendizaje
          para aportar soluciones innovadoras.
        </p>

        <p className="text-lg text-slate-600 mb-6 leading-relaxed" data-aos="fade-up">
          Cuento con formación en <span className="font-semibold text-slate-800">DAM</span>,
          <span className="font-semibold text-slate-800"> DAW</span> y una especialización en
          <span className="font-semibold text-slate-800"> IA y Big Data</span>, además de experiencia
          profesional en el desarrollo de un CRM con Quasar y en el
          Ayuntamiento de El Poble Nou de Benitatxell desarrollando aplicaciones móviles.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-5 py-3 bg-blue-50 rounded-r-xl" data-aos="fade-up">
          <p className="text-slate-500 italic text-sm mb-1">
            Mi objetivo es seguir creciendo en el sector tecnológico y afrontar nuevos retos, siempre con la convicción de que:
          </p>
          <p className="text-blue-800 font-semibold text-lg">"Mi pasión son los datos y la gestión de la información."</p>
        </blockquote>
      </div>
    </section>
  );
}
