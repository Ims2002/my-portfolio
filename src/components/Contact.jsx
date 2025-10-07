import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "imsrorsel2002@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // mensaje se resetea a los 2s
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t to-gray-900 from-gray-800 text-white px-8 py-16"
    >
      <h2
        className="text-4xl font-bold mb-8 text-orange-400"
        data-aos="flip-up"
      >
        Contacto
      </h2>

      <p
        className="text-gray-300 mb-6 text-center"
        data-aos="flip-up"
      >
        ¿Quieres que empecemos a trabajar juntos? Escríbeme un correo o conéctate en mis redes :D
      </p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-lg" data-aos="flip-up">
        {/* Botón Email */}
        <a
          href={`mailto:${email}`}
          className="flex-1 text-center px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold shadow-md transition"
        >
          Envíame un email
        </a>

        {/* Botón LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ivan-morell-b76073245/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center px-6 py-3 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-xl font-semibold shadow-md transition"
        >
          LinkedIn
        </a>

        {/* Copiar Email */}
        <button
          onClick={copyToClipboard}
          className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-xl font-semibold shadow-md transition flex justify-center items-center"
        >
          {copied ? (
            <span className="text-green-400">¡Copiado!</span>
          ) : (
            <span className="text-gray-300">Copiar email</span>
          )}
        </button>
      </div>
    </section>
  );
}
