import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'


function App() {
  return (
    <div className="min-h-screen bg-[#070716] text-white">

    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    
    </div>
  )
}

export default App