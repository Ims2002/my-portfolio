export default function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-t to-gray-900 from-black text-white px-8 py-16 gap-12"
    >
      {/* Marco con imagen */}
      <div className="w-64 h-64 border-4 border-orange-400 rounded-lg flex items-center justify-center overflow-hidden shadow-lg" data-aos="fade-down">
        <img 
          src="/mi-foto.jpg" // cambia por la ruta real de tu imagen
          alt="Sobre mí"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto */}
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 text-orange-400" data-aos="fade-down">Sobre mí</h2>

        <p className="text-lg text-gray-300 mb-4" data-aos="fade-down">
          Soy <span className="font-semibold text-white">Iván Morell</span>, 
          Desarrollador Web Full Stack con especial interés en 
          <span className="text-orange-400"> Inteligencia Artificial</span> y 
          <span className="text-orange-400"> Big Data</span>. Me caracterizo por 
          mi implicación en cada proyecto y por una constante búsqueda de aprendizaje 
          para aportar soluciones innovadoras.
        </p>

        <p className="text-lg text-gray-300 mb-4" data-aos="fade-down">
          Cuento con formación en <span className="font-semibold">DAM</span>, 
          <span className="font-semibold"> DAW</span> y una especialización en 
          <span className="font-semibold"> IA y Big Data</span>, además de experiencia 
          profesional en el desarrollo de un CRM con Quasar y en el 
          Ayuntamiento de El Poble Nou de Benitatxell desarrollando aplicaciones móviles.
        </p>
        <p className="text-lg text-gray-300 italic" data-aos="fade-down">
          Mi objetivo es seguir creciendo en el sector tecnológico y afrontar nuevos retos, siempre con la convicción de que:  
          <span className="block mt-2 text-orange-400 font-semibold">“El mundo es cómo lo programamos.”</span>
        </p>
      </div>
    </section>
  );
}
