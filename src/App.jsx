import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StoryBoard from './components/StoryBoard'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <StoryBoard />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Your Name — Crafted with passion and motion.
      </footer>
    </div>
  )
}

export default App
