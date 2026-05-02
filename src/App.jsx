import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Techs from "./components/Techs";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./components/Experience";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    AOS.refreshHard();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Techs />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
