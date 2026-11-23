import { Fragment, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { content } from '../data'

export default function About() {
  const [portraitAvailable, setPortraitAvailable] = useState(true)
  const copy = content.sections.about
  return <section id="about" className="about-section section-pad" aria-labelledby="about-heading">
    <div className="about-visual"><div className="about-frame portrait-frame">{portraitAvailable ? <img className="portrait-photo" src="/assets/hiram-portrait.webp" width="1100" height="1005" loading="lazy" decoding="async" alt={copy.portraitAlt} onError={() => setPortraitAvailable(false)}/> : <div className="portrait-fallback"><span>H<span>.</span></span><small>HIRAM NGATIA CHARAGU</small></div>}<div className="portrait-shade"/><span className="about-coord">KENYA<br/>SOFTWARE / PRODUCT</span><span className="about-frame-index">H / PERSONAL PROFILE</span></div><div className="about-side-note">BUILT AROUND<br/>REAL WORKFLOWS <span>✳</span></div></div>
    <div className="about-copy"><p className="eyebrow"><span className="section-no">02</span> {copy.eyebrow}</p><h2 id="about-heading">{copy.title}<br/><span className="serif-italic">{copy.accent}</span></h2>{copy.paragraphs.map((paragraph,index)=><p className={index===0?'about-lede':''} key={paragraph}>{paragraph}</p>)}<a href="#journey" className="text-link">{copy.link} <ArrowUpRight size={15}/></a><div className="about-values">{copy.principles.map((principle,index)=><Fragment key={principle}><span>{principle}</span>{index<copy.principles.length-1&&<i/>}</Fragment>)}</div></div>
  </section>
}
