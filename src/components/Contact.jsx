import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "imsrorsel2002@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white px-8 py-20"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-5xl font-bold mb-4 text-white">Trabajemos juntos</h2>
        <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
          ¿Quieres que empecemos a trabajar juntos? Escríbeme un correo o conéctate en mis redes :D
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-lg" data-aos="fade-up">
        <a
          href={`mailto:${email}`}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-blue-900/30"
        >
          <FaEnvelope />
          Envíame un email
        </a>

        <a
          href="https://www.linkedin.com/in/ivan-morell-salmeron-b76073245/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <button
          onClick={copyToClipboard}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5"
        >
          {copied ? (
            <>
              <FaCheck className="text-green-400" />
              <span className="text-green-400">¡Copiado!</span>
            </>
          ) : (
            <>
              <FaCopy />
              <span>Copiar email</span>
            </>
          )}
        </button>
      </div>

      <p className="mt-16 text-slate-600 text-sm">
        © {new Date().getFullYear()} Iván Morell Salmerón · Diseño y desarrollo propios
      </p>
    </section>
  );
}
