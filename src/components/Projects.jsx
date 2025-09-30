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
          <h3 className="text-2xl font-semibold mb-3 text-orange-300">Proyecto 1</h3>
          <p className="text-gray-400 mb-4">Descripción breve del proyecto.</p>
          <a href="#" target="_blank" className="text-orange-400 hover:underline">Ver más →</a>
        </div>
        {/* Proyecto 2 */}
        <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-3 text-orange-300">Proyecto 2</h3>
          <p className="text-gray-400 mb-4">Descripción breve del proyecto.</p>
          <a href="#" target="_blank" className="text-orange-400 hover:underline">Ver más →</a>
        </div>
        {/* Proyecto 3 */}
        <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-3 text-orange-300">Proyecto 3</h3>
          <p className="text-gray-400 mb-4">Descripción breve del proyecto.</p>
          <a href="#" target="_blank" className="text-orange-400 hover:underline">Ver más →</a>
        </div>
      </div>
    </section>
  );
}
