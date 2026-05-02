const categories = [
  {
    name: "Datos & IA",
    highlight: true,
    badge: "Especialización",
    techs: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "R", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      { name: "Jupyter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" },
      { name: "Anaconda", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original-wordmark.svg" },
      { name: "Streamlit", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
      { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Power BI", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/120px-New_Power_BI_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210102182532" },
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    name: "Otras Tecnologías",
    techs: [
      { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "Vue", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" },
      { name: "Spring", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" },
      { name: "Android", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "Quasar", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quasar/quasar-plain.svg" },
      { name: "Capacitor", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-plain-wordmark.svg" },
      { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "JetBrains", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg" },
    ],
  },
];

function TechCard({ tech, highlighted }) {
  return (
    <div
      className={`group w-24 h-24 rounded-xl flex flex-col items-center justify-center gap-1.5 hover:-translate-y-1 transition-all duration-300 cursor-default px-2 border ${
        highlighted
          ? "bg-white border-blue-200 hover:border-blue-500 hover:shadow-md hover:shadow-blue-100"
          : "bg-white border-slate-200 hover:border-blue-400 hover:shadow-md"
      }`}
      data-aos="fade-up"
    >
      <img src={tech.src} alt={tech.name} className="w-9 h-9 object-contain" />
      <span
        className={`text-xs font-medium text-center leading-tight transition-colors ${
          highlighted
            ? "text-blue-700 group-hover:text-blue-900"
            : "text-slate-500 group-hover:text-blue-700"
        }`}
      >
        {tech.name}
      </span>
    </div>
  );
}

export default function Techs() {
  return (
    <section id="techs" className="bg-white px-8 md:px-20 py-20">
      <div className="flex items-center gap-3 mb-14 justify-center" data-aos="flip-up">
        <div className="w-1 h-10 bg-blue-700 rounded-full"></div>
        <h2 className="text-4xl font-bold text-slate-900">Tecnologías</h2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`rounded-2xl p-6 border ${
              cat.highlight
                ? "bg-blue-50 border-blue-200"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <h3
                className={`text-lg font-bold ${
                  cat.highlight ? "text-blue-800" : "text-slate-700"
                }`}
              >
                {cat.name}
              </h3>
              {cat.badge && (
                <span className="text-xs font-semibold bg-blue-700 text-white px-2.5 py-1 rounded-full">
                  {cat.badge}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              {cat.techs.map((tech) => (
                <TechCard key={tech.name} tech={tech} highlighted={cat.highlight} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
