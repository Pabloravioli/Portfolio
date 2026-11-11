import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { profile, about, skills, projects } from "./data/content.js";

export default function App() {
  return (
    <>
      <Header name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About about={about} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <footer className="border-t border-cyan-200 py-8 text-center text-sm text-cyan-200">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
