import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { education } from '../data'

export default function Education() {
  return <section id="education" className="education-section section-pad">
    <div className="section-head"><div><p className="eyebrow"><span className="section-no">03</span> EDUCATION</p><h2>Where I’m<br/><span className="serif-italic">learning the craft.</span></h2></div><p className="section-note">From four years at Nduru Boys to a Computer Science degree in progress at Umma University.</p></div>
    <div className="education-grid">{education.map((item, i) => <article className="education-card" key={item.name}>
      <div className="education-card-top"><span>0{i + 1} / EDUCATION</span><ArrowUpRight size={15}/></div>
      <div className={`education-emblem ${item.logo ? 'university-emblem' : 'school-emblem'}`}>
        {item.logo ? <img src={item.logo} alt={item.logoAlt} /> : <div className="school-monogram" aria-label="Nduru Boys High School monogram">NB</div>}
      </div>
      <div className="education-copy"><h3>{item.name}</h3><p>{item.credential}</p><span>{item.status}</span><small>{item.location}</small></div>
    </article>)}</div>
    <p className="education-note"><GraduationCap size={16}/> No secondary-school grade is shown; include it only if you want to highlight a strong result or an application requires it.</p>
  </section>
}
