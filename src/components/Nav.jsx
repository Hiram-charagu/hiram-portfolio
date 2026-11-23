import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [['Work', '#work'], ['About', '#about'], ['Education', '#education'], ['Stack', '#stack'], ['Journey', '#journey'], ['Credentials', '#credentials'], ['Contact', '#contact']]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return <header className="nav-wrap">
    <nav className="nav-shell" aria-label="Main navigation">
      <a href="#home" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">H.</span><span>HIRAM NGATIA<br /><small>DEVELOPER · BUILDER</small></span></a>
      <div className="desktop-links flex">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
      <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={14} /></a>
      <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div className="mobile-menu">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={15} /></a>)}</div>}
  </header>
}
