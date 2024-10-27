import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Tecnologies from './components/Tecnologies'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education'


function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
        <div className="fixed top-0 left-0 w-full h-full bg-neutral-950 -z-10"></div>
        <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10"></div>
        
        <div className="container mx-auto px-8 relative z-0">
          <NavBar />
          <Hero />
          <About />
          <Tecnologies />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}


export default App
