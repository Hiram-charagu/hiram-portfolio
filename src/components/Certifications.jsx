import { Award, ArrowUpRight } from 'lucide-react'
import { content, certifications } from '../data'

export default function Certifications() {
  const copy = content.sections.credentials
  return <section id="credentials" className="credentials-section section-pad" aria-labelledby="credentials-heading">
    <div className="credentials-heading"><div><p className="eyebrow"><span className="section-no">06</span> {copy.eyebrow}</p><h2 id="credentials-heading">{copy.title}<br/><span className="serif-italic">{copy.accent}</span></h2></div><p className="section-note">{copy.note}</p></div>
    <div className="credentials-grid">{certifications.map((item, i) => <article className="credential-card" key={item.name}><div className="credential-top"><span>0{i + 1}</span><span className="issuer-mark">{item.issuerMark}</span><Award size={16}/></div><p>{item.issuer}</p><h3>{item.name}</h3><div className="credential-bottom"><span>{item.date}</span>{item.verificationUrl && <a href={item.verificationUrl} target="_blank" rel="noreferrer">Verify <ArrowUpRight size={13}/></a>}</div></article>)}</div>
  </section>
}
