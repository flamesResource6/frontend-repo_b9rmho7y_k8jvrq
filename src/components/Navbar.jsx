import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const items = [
    { href: '#home', label: 'Home' },
    { href: '#story', label: 'Story' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto mt-4 w-[92%] rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgb(2,6,23,0.08)]">
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold text-white/90 group-hover:text-white transition">Flames Blue</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {items.map((it) => (
              <a key={it.href} href={it.href} className="text-white/70 hover:text-white transition font-medium">
                {it.label}
              </a>
            ))}
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 px-5 py-3 space-y-2 bg-black/20">
            {items.map((it) => (
              <a key={it.href} href={it.href} className="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white" onClick={() => setOpen(false)}>
                {it.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
