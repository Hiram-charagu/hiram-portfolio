import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { content } from '../data'

const links = content.navigation

export default function Nav() {
  const [open, setOpen] = useState(false)
  const button = useRef(null)
  const panel = useRef(null)
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel.current?.querySelector('a')?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus() }
      if (event.key === 'Tab') {
        const focusable = [...panel.current.querySelectorAll('a')]
        const first = focusable[0], last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKey) }
  }, [open])
  return <header className="nav-wrap">
    <nav className="nav-shell" aria-label="Main navigation">
      <a href="#home" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">H.</span><span>HIRAM NGATIA<br/><small>DEVELOPER · BUILDER</small></span></a>
      <div className="desktop-links">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
      <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={14}/></a>
      <button ref={button} className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </nav>
    <div ref={panel} id="mobile-navigation" className={`mobile-menu${open ? ' is-open' : ''}`} inert={!open} aria-hidden={!open}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={15}/></a>)}
    </div>
  </header>
}
