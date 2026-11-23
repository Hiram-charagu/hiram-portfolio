import { useState } from 'react'
import { ArrowUpRight, Github, Linkedin, MessageCircle } from 'lucide-react'
import { content, profile } from '../data'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

function ContactForm({ copy }) {
  const [state, setState] = useState('idle')
  const [message, setMessage] = useState('')
  async function submit(event) {
    event.preventDefault()
    if (!accessKey) {
      setState('error'); setMessage(copy.setup)
      return
    }
    setState('sending')
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form))
    payload.access_key = accessKey
    payload.subject = `Portfolio message from ${payload.name}`
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error('Request failed')
      form.reset(); setState('success'); setMessage(copy.success)
    } catch {
      setState('error'); setMessage(copy.error)
    }
  }
  return <form className="contact-form" onSubmit={submit}>
    <label>{copy.name}<input name="name" autoComplete="name" required maxLength="100" /></label>
    <label>{copy.email}<input name="email" type="email" autoComplete="email" required maxLength="200" /></label>
    <label>{copy.message}<textarea name="message" rows="4" required maxLength="3000" /></label>
    <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" aria-hidden="true" />
    <button className="button button-primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? copy.submitting : copy.submit} <ArrowUpRight size={16}/></button>
    <p className={`form-status ${state}`} role="status" aria-live="polite">{message}</p>
  </form>
}

export default function Footer() {
  const copy = content.sections.contact
  const formCopy = copy.form
  return <footer id="contact" className="footer section-pad" aria-labelledby="contact-heading">
    <div className="footer-top"><p className="eyebrow"><span className="section-no">07</span> {copy.eyebrow}</p><h2 id="contact-heading">{copy.title}<br/><span className="serif-italic">{copy.accent}</span></h2><p className="footer-intro">{copy.note}</p><a href={`mailto:${profile.email}`} className="button button-primary">{copy.emailCta} <ArrowUpRight size={16}/></a><div className="contact-details"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={14}/> WhatsApp me</a></div><ContactForm copy={formCopy}/></div>
    <div className="footer-bottom"><a href="#home" className="brand"><span className="brand-mark">H.</span><span>HIRAM NGATIA<br/><small>{content.footer.brand}</small></span></a><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={12}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={12}/></a><a href={profile.resume} target="_blank" rel="noreferrer">{content.footer.resumeLabel} <ArrowUpRight size={12}/></a></div><span className="copyright">© {new Date().getFullYear()} HIRAM NGATIA CHARAGU<br/>{content.footer.copyright}</span></div>
  </footer>
}
