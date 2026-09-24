import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Overview from "./components/Overview";
import Credentials from "./components/Credentials";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Overview />
      <Credentials />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
