export default function Projects() {
  return (
    <section 
      id="projects" 
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-8 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
        Proyectos
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Proyecto 1 */}
        <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <img 
            src="./img/PH.png" 
            alt="Pet Hotel" 
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-2xl font-semibold mb-3 text-orange-300">Pet Hotel</h3>
          <p className="text-gray-400 mb-4">Página Web desarrollada en Laravel que cuenta con un servicio de IA para predecir razas de perros, esta ya en producción.</p>
          <a href="https://pethotelp9.com/" target="_blank" className="text-orange-400 hover:underline">Ver más →</a>
        </div>

        {/* Proyecto 2 */}
        <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <img 
            src="./img/MH.png" 
            alt="Movie Hub 2" 
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-2xl font-semibold mb-3 text-orange-300">Movie Hub</h3>
          <p className="text-gray-400 mb-4">Proyecto personal de Laravel y Docker que hace uso de la API de IMDB para crear un foro en el que revisar, compartir y guardar las películas que más nos gusten.</p>
          <a href="https://github.com/Ims2002/movie-hub" target="_blank" className="text-orange-400 hover:underline">Ver más →</a>
        </div>

        {/* Proyecto 3 */}
        <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <img 
            src="./img/CVP.png" 
            alt="CV Projects" 
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-2xl font-semibold mb-3 text-orange-300">CV Projects</h3>
          <p className="text-gray-400 mb-4">Repositorio que contiene varios proyectos hechos con Computer Vision.</p>
          <a href="https://github.com/Ims2002/CVProjects" target="_blank" className="text-orange-400 hover:underline">Ver más →</a>
        </div>

        {/* Proyecto 4 */}
        <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <img 
            src="./img/RM.jpg" 
            alt="Rally Models" 
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-2xl font-semibold mb-3 text-orange-300">Rally Models</h3>
          <p className="text-gray-400 mb-4">Esquema de una página web de gestión de maquetas 1:16 de coches de Rally con Spring, Maven, Thymeleaf y Hibernate.</p>
          <a href="https://github.com/Ims2002/RallyModels" target="_blank" className="text-orange-400 hover:underline">Ver más →</a>
        </div>

        {/* Proyecto 5 */}
        <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <img 
            src="./img/LA.png" 
            alt="List All" 
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-2xl font-semibold mb-3 text-orange-300">List All</h3>
          <p className="text-gray-400 mb-4">Aplicación móvil creada con Capacitor, Quasar y AS para crear listados personalizados (se sigue desarrollando).</p>
          <a href="https://github.com/Ims2002/ListAll" target="_blank" className="text-orange-400 hover:underline">Ver más →</a>
        </div>

        {/* Proyecto 6 */}
        <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <img 
            src="./img/CA.jpeg" 
            alt="Clio-s Adventure" 
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-2xl font-semibold mb-3 text-orange-300">Clio-s Adventure</h3>
          <p className="text-gray-400 mb-4">Videojuego plataformas 2D desarrollado en C# en Unity como proyecto de desarrollo de DAM.</p>
          <a href="https://github.com/Ims2002/Clio-s-Adventure" target="_blank" className="text-orange-400 hover:underline">Ver más →</a>
        </div>
      </div>
    </section>
  );
}
