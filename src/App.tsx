import Footer from "./components/sections/Footer/Footer";
import Presentation from "./components/sections/Presentation/Presentation";
import About from "./components/sections/About/About";
import Projects from "./components/sections/Projects/Projects";
import AllSkills from "./components/sections/Skills/Skills";
import Education from "./components/sections/Education/Education";
import Contact from "./components/sections/Contact/Contact";
import AnimatedBackground from "./components/common/AnimatedBackground";

export default function App() {
  return (
    <div className="relative w-full min-h-lvh text-white bg-gray-900 -z-30">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto flex flex-col w-full sm:px-16 px-8">
        <Presentation />
        <main className="flex flex-col gap-8">
          <About />
          <div className="flex lg:flex-row-reverse flex-col gap-8">
            <div className="lg:w-1/3 w-auto flex flex-col gap-8">
              <AllSkills />
              <Education />
            </div>
            <div className="lg:w-2/3 w-auto flex flex-col gap-8">
              <Projects />
            </div>
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
