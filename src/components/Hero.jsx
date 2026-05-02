export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-white via-blue-50 to-slate-100 px-8 md:px-20 py-24 pt-32 gap-12"
    >
      {/* Columna izquierda: texto */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left" data-aos="fade-right">
        <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-green-200">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Disponible para trabajar
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900 leading-tight">
          Iván Morell<br />
          <span className="text-blue-700">Salmerón</span>
        </h1>

        <p className="text-xl text-slate-500 mb-6 font-medium">
          Desarrollador Web · Multiplataforma · Fullstack · Data Analyst
        </p>

        <p className="text-base text-slate-500 mb-10 max-w-lg leading-relaxed">
          Soy un Desarrollador FullStack con un año de experiencia, apasionado por crear aplicaciones web y móviles
          útiles y escalables. Actualmente estoy ampliando mis conocimientos en Data Analytics en The Power
          Education, además curso un Máster en Data Science en Evolve Academy,
          siempre busco unir el desarrollo con el poder de los datos para dar vida a soluciones más completas e inteligentes
          que aporten valor a los proyectos de los que formo parte.
        </p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Contáctame
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Ver proyectos
          </a>
        </div>
      </div>

      {/* Columna derecha: foto */}
      <div className="flex-1 flex justify-center items-center" data-aos="zoom-in">
        <div className="relative">
          <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-blue-200 ring-offset-4 ring-offset-blue-50">
            <img
              src="./img/PL.jpeg"
              alt="Iván Morell"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-100 rounded-3xl -z-10 border border-blue-200"></div>
        </div>
      </div>
    </section>
  );
}
