import { ArrowUpRight } from 'lucide-react'
import { milestones } from '../data'

export default function Timeline() {
  return <section id="journey" className="journey-section section-pad">
    <div className="section-head"><div><p className="eyebrow"><span className="section-no">05</span> THE JOURNEY</p><h2>Things I’ve<br/><span className="serif-italic">been part of.</span></h2></div><p className="section-note">Contract work, client websites, student leadership, innovation events, and school rugby.</p></div>
    <div className="timeline">{milestones.map((item,i)=><article className="timeline-item" key={`${item.org}-${item.title}`}><div className="timeline-date">{item.date}</div><div className="timeline-marker"><span>{String(i+1).padStart(2,'0')}</span></div><div className="timeline-copy"><div className="timeline-title"><h3>{item.title}</h3>{item.url && <a href={item.url} target="_blank" rel="noreferrer" aria-label={`Open ${item.org} website`}><ArrowUpRight size={16}/></a>}</div><p className="timeline-org">{item.org}</p><p>{item.text}</p>{item.url && <a className="timeline-link" href={item.url} target="_blank" rel="noreferrer">Visit website <span>{item.url.replace('https://','')}</span><ArrowUpRight size={12}/></a>}{item.sourceUrl && <a className="timeline-link" href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceLabel}<ArrowUpRight size={12}/></a>}</div></article>)}</div>
    <div className="journey-foot"><span>STILL IN MOTION</span><span className="journey-line"/><span>MORE TO COME <span className="accent-text">↗</span></span></div>
  </section>
}
