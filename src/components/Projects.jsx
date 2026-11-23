import { ArrowUpRight } from 'lucide-react'
import { content, projects, additionalProjects } from '../data'

function ProjectVisual({ project }) {
  const { visual: type, theme, number } = project
  return <div className={`project-visual ${theme}`} aria-hidden="true">
    <div className="visual-top"><span>HIRAM / FIELD NOTES</span><span>ILLUSTRATIVE UI · {number}</span></div>
    {type === 'mapphex' && <div className="mapphex-map">
      <div className="map-heading"><span>MAPPHEX / DATA BOUNDARIES</span><i>SCHEMA VIEW</i></div>
      <div className="map-core"><b>PLATFORM</b><span>Shared application layer</span></div>
      <div className="map-branches"><span/><span/><span/></div>
      <div className="tenant-row"><div><i>A</i><b>Tenant A</b><small>Scoped records</small></div><div><i>B</i><b>Tenant B</b><small>Scoped records</small></div><div><i>C</i><b>Tenant C</b><small>Scoped records</small></div></div>
      <div className="map-policy"><span>ROW-LEVEL SECURITY</span><b>auth.uid() → tenant_id</b><i>POLICY / ACTIVE</i></div>
      <div className="map-foot"><span>ISOLATED BY POLICY</span><span>POSTGRESQL / RLS</span></div>
    </div>}
    {type === 'bumu' && <div className="bumu-layout">
      <div className="bumu-phone"><div className="phone-top"><span>BUMU PAYGO</span><span>AGENT PORTAL</span></div><div className="phone-greeting">Operations,<br/><b>at a glance.</b></div>
        <div className="workflow-list"><div><i>01</i><span><b>Customer onboarding</b><small>Review account details</small></span><em>›</em></div><div><i>02</i><span><b>Payment request</b><small>Prepare transaction</small></span><em>›</em></div><div><i>03</i><span><b>Device status</b><small>Service connection</small></span><em>›</em></div></div>
        <div className="portal-footer"><span>WORKFLOW VIEW</span><span>01 / 03</span></div>
      </div><div className="bumu-side-note"><span className="note-cross">✳</span><strong>Many roles.<br/>One system.</strong><small>ADMIN · AGENT · CUSTOMER<br/>PORTAL WORKFLOWS</small></div><div className="bumu-shape" />
    </div>}
    {type === 'fundi' && <div className="fundi-layout"><div className="fundi-copy"><span className="fundi-kicker">FUNDIHUB / MARKETPLACE</span><strong>Find your<br/><em>next expert.</em></strong><div className="fundi-search">⌕ &nbsp; What do you need done? <span>→</span></div><div className="fundi-cats"><span>● Electrician</span><span>● Carpenter</span><span>● Plumber</span></div></div><div className="fundi-portrait"><div className="portrait-shape"><span>F</span></div><div className="portrait-caption"><b>LOCAL SKILLS.</b><small>REAL CONNECTIONS.</small></div></div><div className="fundi-index">CUSTOMER / PROVIDER / ADMIN</div></div>}
    <div className="visual-index">{type === 'mapphex' ? 'M / 01' : type === 'bumu' ? 'B / 02' : 'F / 03'}</div>
  </div>
}

export default function Projects() {
  const copy = content.sections.work
  return <section id="work" className="work-section section-pad" aria-labelledby="work-heading">
    <div className="section-head"><div><p className="eyebrow"><span className="section-no">01</span> {copy.eyebrow}</p><h2 id="work-heading">{copy.title}<br/><span className="serif-italic">{copy.accent}</span></h2></div><p className="section-note">{copy.note}</p></div>
    <div className="projects-list">{projects.map((project, index) => <article className={`project-row project-${index + 1}`} key={project.name}>
      <ProjectVisual project={project}/>
      <div className="project-info"><div className="project-meta"><span>{project.number} / {project.kind}</span><a href="#contact" aria-label={`Ask Hiram about ${project.name}`}><ArrowUpRight size={16}/></a></div><h3>{project.name}</h3><h4>{project.title}</h4><p>{project.description}</p><ul>{project.details.map(item=><li key={item}>{item}</li>)}</ul><div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><span className="project-status">{project.statusLabel}</span><details className="case-study"><summary>Case study · {project.status}</summary><dl><dt>Role</dt><dd>{project.caseStudy.role}</dd><dt>Problem</dt><dd>{project.caseStudy.problem}</dd><dt>Approach</dt><dd>{project.caseStudy.solution}</dd><dt>Outcome</dt><dd>{project.caseStudy.outcome}</dd></dl>{project.caseStudy.disclosure && <p className="case-disclosure">{project.caseStudy.disclosure}</p>}</details></div>
    </article>)}</div><p className="portfolio-proof-note">Project visuals are illustrative sketches. Screenshots and demo links can be added when available.</p>
    <div className="other-work"><div className="other-work-head"><div><p className="eyebrow"><span className="section-no">↳</span> {copy.otherEyebrow}</p><h3>{copy.otherTitle}<br/>{copy.otherAccent.startsWith('a ') ? 'on the ' : ''}<span className="serif-italic">{copy.otherAccent}</span></h3></div><p>{copy.otherNote}</p></div><div className="other-grid">{additionalProjects.map((project,index)=><article key={project.name} className="other-card"><div className="other-card-top"><span>0{index+1}</span><span className="other-card-mark">{project.status.toUpperCase()}</span></div><p>{project.kind}</p><h4>{project.name}</h4><div className="other-description">{project.description}</div><div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div></div>
  </section>
}
