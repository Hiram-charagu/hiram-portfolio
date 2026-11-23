import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function About() {
  const [portraitAvailable, setPortraitAvailable] = useState(true)
  return <section id="about" className="about-section section-pad">
    <div className="about-visual"><div className="about-frame portrait-frame">{portraitAvailable ? <img className="portrait-photo" src="/assets/hiram-portrait.webp" alt="Portrait of Hiram Ngatia Charagu" onError={() => setPortraitAvailable(false)}/> : <div className="portrait-fallback"><span>H<span>.</span></span><small>HIRAM NGATIA CHARAGU</small></div>}<div className="portrait-shade"/><span className="about-coord">KENYA<br/>SOFTWARE / PRODUCT</span><span className="about-frame-index">H / PERSONAL PROFILE</span></div><div className="about-side-note">BUILT AROUND<br/>REAL WORKFLOWS <span>✳</span></div></div>
    <div className="about-copy"><p className="eyebrow"><span className="section-no">02</span> A BIT ABOUT ME</p><h2>Curious by nature.<br/>A <span className="serif-italic">builder</span> by habit.</h2><p className="about-lede">I study Computer Science at Umma University and like figuring out how everyday services could work better.</p><p>So far, I’ve built company websites, worked on fintech portals, and designed marketplace products. I start by understanding what each person needs to do, then shape the interface, data flow, and integrations around that task.</p><p>Beyond software, I chair a student tech community and carry the teamwork I learned on the rugby field into how I work with others.</p><a href="#journey" className="text-link">See what I’ve been part of <ArrowUpRight size={15}/></a><div className="about-values"><span>START WITH PEOPLE</span><i/><span>MAKE THE FLOW CLEAR</span><i/><span>BUILD WITH CARE</span></div></div>
  </section>
}
