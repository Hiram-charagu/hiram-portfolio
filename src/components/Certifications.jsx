import { Award } from 'lucide-react'
import { certifications } from '../data'

export default function Certifications() {
  return <section id="credentials" className="credentials-section section-pad">
    <div className="credentials-heading"><div><p className="eyebrow"><span className="section-no">06</span> CERTIFICATIONS</p><h2>What I’ve<br/><span className="serif-italic">studied.</span></h2></div><p className="section-note">Courses in security, operating systems, networking, and infrastructure protection.</p></div>
    <div className="credentials-grid">{certifications.map((item, i) => <article className="credential-card" key={item.name}><div className="credential-top"><span>0{i + 1}</span><Award size={16}/></div><p>{item.issuer}</p><h3>{item.name}</h3><div className="credential-bottom"><span>{item.date}</span></div></article>)}</div>
  </section>
}
