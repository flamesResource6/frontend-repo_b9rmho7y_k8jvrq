import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A playful, modern marketing site using Spline and motion.',
    stars: '1.2k',
  },
  {
    title: 'Realtime Collab Editor',
    desc: 'Multiplayer editing with CRDTs and buttery-smooth UX.',
    stars: '980',
  },
  {
    title: 'AI Design Copilot',
    desc: 'Turns prompts into pixel-perfect components and flows.',
    stars: '2.1k',
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_0%,rgba(168,85,247,0.18),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Selected work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-white/5 to-white/0" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <div className="inline-flex items-center gap-1 text-amber-300">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{p.stars}</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-6 flex items-center gap-3">
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-white/80 hover:bg-white/10">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white hover:bg-white/20">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
