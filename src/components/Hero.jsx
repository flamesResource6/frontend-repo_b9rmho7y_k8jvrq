import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(124,58,237,0.25),transparent)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-br from-white to-white/70 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-7xl"
        >
          Creative Developer Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          Tech, interactive, playful, modern — explore my work and the stories behind each project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#story" className="pointer-events-auto group rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white/90 backdrop-blur-xl transition hover:bg-white/20">
            <span className="">Read the journey</span>
          </a>
          <a href="#work" className="pointer-events-auto group rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
            Explore projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
