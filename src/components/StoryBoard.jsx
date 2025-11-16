import { motion } from 'framer-motion'
import { Sparkles, Rocket, Code2, PenTool, BrainCircuit } from 'lucide-react'

const cards = [
  {
    icon: Rocket,
    title: 'Launchpad',
    text: 'Started with curiosity, fueled by experiments and late night builds.',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Code2,
    title: 'Craft',
    text: 'Shipped interactive apps with clean code, tests, and performance in mind.',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: PenTool,
    title: 'Design',
    text: 'Obsessed with delightful UX, motion, and micro-interactions.',
    color: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    icon: BrainCircuit,
    title: 'AI + Systems',
    text: 'Building intelligent, scalable systems that feel magical to use.',
    color: 'from-amber-500/20 to-rose-500/20',
  },
]

export default function StoryBoard() {
  return (
    <section id="story" className="relative py-24 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-10%,rgba(59,130,246,0.2),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-center justify-center gap-3">
          <Sparkles className="h-5 w-5 text-cyan-400" />
          <h2 className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            A story-like board
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
