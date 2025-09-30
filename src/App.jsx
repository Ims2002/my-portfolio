import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Techs from "./components/Techs";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refreshHard(); // fuerza refresco de todos los elementos en el DOM
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Techs />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
