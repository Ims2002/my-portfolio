import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-gradient-to-t from-gray-900 to-black text-white px-20 py-20"
    >
      {/* Iconos arriba derecha */}
      <div className="absolute top-6 right-6 flex space-x-4" data-aos="fade-up">
        <a
          href="https://www.linkedin.com/in/ivan-morell-salmeron-b76073245/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-500 text-3xl transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ims2002"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-500 text-3xl transition-colors"
        >
          <FaGithub />
        </a>
      </div>

      {/* Columna izquierda: texto */}
      <div className="flex-1 flex flex-col justify-center items-center text-center" data-aos="fade-right">
        <h1 className="text-5xl font-bold mb-10">
          <span className="text-orange-400">Iván Morell Salmerón</span>
        </h1>
        <p className="text-2xl text-gray-300 mb-10">
          Desarrollador Web | Multiplataforma | Fullstack | Data Analyst
        </p>
        <p className="text-lg text-center text-gray-300 mb-10">
          Soy un Desarrollador FullStack con un año de experiencia, apasionado por crear aplicaciones web y móviles
          útiles y escalables. Actualmente estoy ampliando mis conocimientos en Data Analytics en The Power 
          Education, buscando unir el desarrollo con el poder de los datos para dar vida a soluciones más completas e inteligentes.
        </p>
      </div>

      {/* Columna derecha: marco para la foto */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0" data-aos="zoom-in">
        <div className="w-72 h-72 border-4 border-orange-400 rounded-2xl shadow-lg overflow-hidden">
          <img
            src="./img/PL.jpeg"
            alt="Iván Morell"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
