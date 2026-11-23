import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Github, Linkedin, MoveUpRight, Orbit } from 'lucide-react'
import { content, profile } from '../data'

const HeroScene = lazy(() => import('./hero3d/HeroScene.jsx'))
function StaticOrb() {
  return <div className="static-orb" aria-hidden="true"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/><div className="art-core"><div className="core-inner"><span>H</span></div></div><i className="node node-one"/><i className="node node-two"/><i className="node node-three"/></div>
}

export default function Hero() {
  const { hero } = content
  const art = useRef(null)
  const [loadScene, setLoadScene] = useState(false)
  const [sceneAvailable, setSceneAvailable] = useState(false)
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const weak = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || (navigator.deviceMemory && navigator.deviceMemory <= 4)
    let webgl = false
    try { const canvas = document.createElement('canvas'); webgl = Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl')) } catch { /* retain the static fallback */ }
    if (reduced || weak || !webgl) return
    setSceneAvailable(true)
    const pointerDriven = matchMedia('(hover: hover) and (pointer: fine)').matches
    const mobileDevice = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
    if (mobileDevice || navigator.maxTouchPoints > 0 || !pointerDriven) return
    let loadTimer
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()
        loadTimer = window.setTimeout(() => setLoadScene(true), 400)
      }
    }, { rootMargin: '120px' })
    observer.observe(art.current)
    return () => { observer.disconnect(); window.clearTimeout(loadTimer) }
  }, [])
  return <section className="hero section-pad" id="home" aria-labelledby="hero-title">
    <div className="hero-gridline" aria-hidden="true" />
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-dot" /> {hero.eyebrow}</p>
      <h1 id="hero-title">{hero.lines[0]}<br/>{hero.lines[1]}<br/><span className="accent-word">{hero.lines[2]}</span><span className="period">.</span></h1>
      <div className="hero-bottom">
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{hero.intro}</p>
        <div className="hero-actions"><a href="#work" className="button button-primary">{hero.cta} <ArrowDown size={15} /></a><a href={profile.resume} className="text-link" target="_blank" rel="noreferrer">{hero.resumeLabel} <ArrowUpRight size={15} /></a></div>
        <p className="hero-proof">{hero.proof}</p>
      </div>
      <div className="hero-socials">
        <span>BASED IN KENYA</span><span className="social-line" />
        {profile.github && <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /><span>GitHub</span></a>}
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /><span>LinkedIn</span></a>}
        <a href={profile.email ? `mailto:${profile.email}` : '#contact'} aria-label="Email Hiram"><span>Email ↗</span></a>
      </div>
    </div>
    <div className="hero-art" ref={art} aria-label="Illustration of a connected digital network">
      <div className="art-caption"><span>FIG. 01</span><span>IDEAS, CONNECTED</span></div>
      <div className="art-grid" />
      <div className="hero-scene"><StaticOrb/>{loadScene && <Suspense fallback={<StaticOrb/>}><HeroScene/></Suspense>}</div>
      {sceneAvailable && !loadScene && <button className="scene-activate" onClick={() => setLoadScene(true)} aria-label="Enable the interactive 3D network illustration" title="Enable 3D view"><Orbit size={18}/></button>}
      <div className="art-label label-one"><span className="label-icon">01</span><span>THINK<br />IN SYSTEMS</span></div>
      <div className="art-label label-two"><span className="label-icon">02</span><span>BUILD WITH<br />INTENTION</span></div>
      <div className="art-coordinate">WEB / MOBILE<br/>SYSTEMS / PRODUCT</div>
      <div className="art-bottom"><span>SOFTWARE / SYSTEMS / PEOPLE</span><MoveUpRight size={14} /></div>
    </div>
    <a className="scroll-note" href="#work"><span>SCROLL TO EXPLORE</span><span className="scroll-rule" /></a>
  </section>
}
