import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import TechStack from './components/TechStack.jsx'
import Timeline from './components/Timeline.jsx'
import Certifications from './components/Certifications.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'

export default function App() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Nav/><main id="main-content"><Hero/><Reveal><Projects/></Reveal><Reveal><About/></Reveal><Reveal><Education/></Reveal><Reveal><TechStack/></Reveal><Reveal><Timeline/></Reveal><Reveal><Certifications/></Reveal></main><Footer/></>
}
