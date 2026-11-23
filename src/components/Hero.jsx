import { ArrowDown, ArrowUpRight, Github, Linkedin, MoveUpRight } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  return <section className="hero section-pad" id="home">
    <div className="hero-gridline" aria-hidden="true" />
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-dot" /> COMPUTER SCIENCE <i>·</i> SOFTWARE DEVELOPMENT <i>·</i> TECHNOLOGY</p>
      <h1>Interfaces for<br/>the work behind<br/><span className="accent-word">everyday life</span><span className="period">.</span></h1>
      <div className="hero-bottom">
        <p className="hero-intro">I’m Hiram, a computer science student and software developer. My work spans web and mobile products, fintech integrations, and the interfaces people use to get things done.</p>
        <div className="hero-actions"><a href="#work" className="button button-primary">Explore my work <ArrowDown size={15} /></a><a href="/assets/Hiram_Charagu_Software_Developer_Resume.pdf" className="text-link" target="_blank" rel="noreferrer">View resume PDF <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="hero-socials">
        <span>BASED IN KENYA</span><span className="social-line" />
        {profile.github && <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /><span>GitHub</span></a>}
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /><span>LinkedIn</span></a>}
        <a href={profile.email ? `mailto:${profile.email}` : '#contact'} aria-label="Email Hiram"><span>Email ↗</span></a>
      </div>
    </div>
    <div className="hero-art" aria-label="Abstract illustration of connected digital systems" role="img">
      <div className="art-caption"><span>FIG. 01</span><span>IDEAS, CONNECTED</span></div>
      <div className="art-grid" />
      <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
      <div className="art-core"><div className="core-inner"><span>H</span></div></div>
      <span className="node node-one" /><span className="node node-two" /><span className="node node-three" />
      <div className="art-label label-one"><span className="label-icon">01</span><span>THINK<br />IN SYSTEMS</span></div>
      <div className="art-label label-two"><span className="label-icon">02</span><span>BUILD WITH<br />INTENTION</span></div>
      <div className="art-coordinate">WEB / MOBILE<br/>SYSTEMS / PRODUCT</div>
      <div className="art-bottom"><span>SOFTWARE / SYSTEMS / PEOPLE</span><MoveUpRight size={14} /></div>
    </div>
    <a className="scroll-note" href="#work"><span>SCROLL TO EXPLORE</span><span className="scroll-rule" /></a>
  </section>
}
