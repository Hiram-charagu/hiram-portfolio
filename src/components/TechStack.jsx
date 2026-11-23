import { stack } from '../data'

export default function TechStack() {
  return <section id="stack" className="stack-section section-pad">
    <div className="section-head"><div><p className="eyebrow"><span className="section-no">04</span> THE TOOLKIT</p><h2>My tools,<br/><span className="serif-italic">in their element.</span></h2></div><p className="section-note">Technologies I’ve used across the work shown here, grouped by where they fit.</p></div>
    <div className="stack-grid">{stack.map((group,i)=><article className="stack-card" key={group.title}><div className="stack-card-top"><span>0{i+1}</span><span aria-hidden="true" className="stack-spark">✳</span></div><h3>{group.title}</h3><div className="stack-items">{group.items.map((item,j)=><span className={(i+j)%3===0?'skill-active':''} key={item}>{item}</span>)}</div><div className="stack-foot">{i===0?'LANGUAGES':i===1?'PRODUCT UI':i===2?'INTEGRATION':'ENGINEERING'} <span>●</span></div></article>)}</div>
    <p className="stack-footnote"><span>✳</span> Skills reflect technologies explored across projects and ongoing learning.</p>
  </section>
}
