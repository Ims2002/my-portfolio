const projects = [
  {
    img: "./img/PH.png",
    alt: "Pet Hotel",
    title: "Pet Hotel",
    tags: ["Laravel", "IA", "En producción"],
    description:
      "Página Web desarrollada en Laravel que cuenta con un servicio de IA para predecir razas de perros, esta ya en producción.",
    link: "https://pethotelp9.com/",
    linkText: "Ver en vivo →",
    live: true,
  },
  {
    img: "./img/MH.png",
    alt: "Movie Hub",
    title: "Movie Hub",
    tags: ["Laravel", "Docker", "IMDB API"],
    description:
      "Proyecto personal de Laravel y Docker que hace uso de la API de IMDB para crear un foro en el que revisar, compartir y guardar las películas que más nos gusten.",
    link: "https://github.com/Ims2002/movie-hub",
    linkText: "Ver en GitHub →",
  },
  {
    img: "./img/CVP.png",
    alt: "CV Projects",
    title: "CV Projects",
    tags: ["Computer Vision", "Python"],
    description:
      "Repositorio que contiene varios proyectos hechos con Computer Vision.",
    link: "https://github.com/Ims2002/CVProjects",
    linkText: "Ver en GitHub →",
  },
  {
    img: "./img/RM.jpg",
    alt: "Rally Models",
    title: "Rally Models",
    tags: ["Spring", "Hibernate", "Thymeleaf"],
    description:
      "Esquema de una página web de gestión de maquetas 1:16 de coches de Rally con Spring, Maven, Thymeleaf y Hibernate.",
    link: "https://github.com/Ims2002/RallyModels",
    linkText: "Ver en GitHub →",
  },
  {
    img: "./img/LA.png",
    alt: "List All",
    title: "List All",
    tags: ["Capacitor", "Quasar", "Android"],
    description:
      "Aplicación móvil creada con Capacitor, Quasar y AS para crear listados personalizados (se sigue desarrollando).",
    link: "https://github.com/Ims2002/ListAll",
    linkText: "Ver en GitHub →",
  },
  {
    img: "./img/CA.jpeg",
    alt: "Clio's Adventure",
    title: "Clio's Adventure",
    tags: ["Unity", "C#", "2D"],
    description:
      "Videojuego plataformas 2D desarrollado en C# en Unity como proyecto de desarrollo de DAM.",
    link: "https://github.com/Ims2002/Clio-s-Adventure",
    linkText: "Ver en GitHub →",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-50 px-8 md:px-20 py-20"
    >
      <div className="flex items-center gap-3 mb-14 justify-center" data-aos="flip-up">
        <div className="w-1 h-10 bg-blue-700 rounded-full"></div>
        <h2 className="text-4xl font-bold text-slate-900">Proyectos</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      tag === "En producción"
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-blue-50 text-blue-700 border border-blue-100"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed flex-1">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 font-semibold text-sm transition-colors"
              >
                {project.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
