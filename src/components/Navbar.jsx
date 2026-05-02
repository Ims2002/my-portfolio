import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-slate-900 text-lg tracking-tight">
          Iván <span className="text-blue-700">Morell</span>
        </span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <a href="#about" className="hover:text-blue-700 transition-colors">Sobre mí</a>
          <a href="#experience" className="hover:text-blue-700 transition-colors">Experiencia</a>
          <a href="#techs" className="hover:text-blue-700 transition-colors">Tecnologías</a>
          <a href="#projects" className="hover:text-blue-700 transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-blue-700 transition-colors">Contacto</a>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/ivan-morell-salmeron-b76073245/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-700 text-xl transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Ims2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 text-xl transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}
