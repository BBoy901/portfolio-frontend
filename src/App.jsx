import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-[#070716] text-white relative overflow-hidden">

    <Navbar />
    {/* BACKGROUND BLOBS */}

    <div className="
      absolute
      top-[-120px]
      left-[-120px]
      w-[350px]
      h-[350px]
      bg-purple-600/30
      rounded-full
      blur-[120px]
      - z-10
    "></div>

    <div className="
      absolute
      bottom-[-120px]
      right-[-120px]
      w-[350px]
      h-[350px]
      bg-blue-600/30
      rounded-full
      blur-[120px]
      - z-10
    "></div>

    <div className="
      fixed
      w-[500px]
      h-[500px]
      bg-purple-500/10
      rounded-full
      blur-[120px]
      pointer-events-none
      top-1/3
      left-1/3
      - z-10
    "></div>

    <Hero />
    <about />
    <Stats />
    <Timeline />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    
    </div>
  )
}

export default App