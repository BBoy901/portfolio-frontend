import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Stats from './components/Stats'


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
    "></div>

    <Hero />
    <Stats />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    
    </div>
  )
}

export default App