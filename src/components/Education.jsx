import { ArrowUpRight } from 'lucide-react'
import { content, education } from '../data'

export default function Education() {
  const copy = content.sections.education
  return <section id="education" className="education-section section-pad" aria-labelledby="education-heading">
    <div className="section-head"><div><p className="eyebrow"><span className="section-no">03</span> {copy.eyebrow}</p><h2 id="education-heading">{copy.title}<br/><span className="serif-italic">{copy.accent}</span></h2></div><p className="section-note">{copy.note}</p></div>
    <div className="education-grid">{education.map((item, i) => <article className="education-card" key={item.name}>
      <div className="education-card-top"><span>0{i + 1} / EDUCATION</span><ArrowUpRight size={15}/></div>
      <div className={`education-emblem ${item.logo ? 'university-emblem' : 'school-emblem'}`}>
        {item.logo ? <img src={item.logo} width="170" height="193" loading="lazy" decoding="async" alt={item.logoAlt} /> : <div className="school-monogram" aria-label="Nduru Boys High School monogram">NB</div>}
      </div>
      <div className="education-copy"><h3>{item.name}</h3><p>{item.credential}</p><span>{item.status}</span><small>{item.location}</small></div>
    </article>)}</div>
  </section>
}
