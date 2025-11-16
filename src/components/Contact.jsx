import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold text-white">Let’s create something</h3>
          <p className="mt-2 text-white/70">I’m open to freelance work, collaborations, and full-time roles.</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <input placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 sm:col-span-1" />
            <input placeholder="Email" type="email" className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 sm:col-span-1" />
            <textarea placeholder="Tell me about your idea" rows={4} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 sm:col-span-2" />
            <button className="w-fit rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">Send</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
