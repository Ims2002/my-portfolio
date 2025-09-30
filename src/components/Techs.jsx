export default function Techs() {
  const techs = [
    {
      name: "Vue",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "R",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    },
    {
      name: "PHP",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    },
    {
      name: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "FastAPI",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "Android",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    },
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "SQLite",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    },
    {
      name: "PowerBI",
      src: "https://camo.githubusercontent.com/12f3ad3d8fe61b4bec6fd507a2e91af1044ec25e095c38d7cee0c08b2137b599/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f632f63662f4e65775f506f7765725f42495f4c6f676f2e737667",
    },
    {
      name: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Quasar",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quasar/quasar-plain.svg",
    },
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    },
    {
      name: "Jupyter",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
    },
    {
      name: "Streamlit",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
    },
    {
      name: "Anaconda",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original-wordmark.svg",
    },
    {
      name: "Spring",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    },
    {
      name: "Jet Brains IDE's",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg",
    },
    {
      name: "Capacitor",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-plain-wordmark.svg",
    },
  ];

  return (
    <section
      id="techs"
      className="min-h-screen  bg-black  text-white px-8 py-16"
    >
      <h2
        className="text-4xl font-bold mb-12 text-orange-400 flex justify-center items-center"
        data-aos="flip-up"
      >
        Tecnologías
      </h2>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center"
        
      >
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="group relative w-24 h-24 border-2 border-orange-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 bg-black" data-aos="fade-down"
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="max-w-12 max-h-12 object-contain"
            />

            {/* Tooltip */}
            <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 bg-orange-500 text-black text-sm font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
