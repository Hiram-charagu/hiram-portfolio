import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
let lenis
let lenisTimer
async function startSmoothScroll() {
  if (motionQuery.matches || lenis) return
  const [{ default: Lenis }] = await Promise.all([import('lenis'), import('lenis/dist/lenis.css')])
  if (motionQuery.matches) return
  lenis = new Lenis({ autoRaf: true, respectReducedMotion: true, anchors: true })
}
if (!motionQuery.matches) lenisTimer = window.setTimeout(startSmoothScroll, 5000)
motionQuery.addEventListener('change', (event) => {
  if (event.matches) { window.clearTimeout(lenisTimer); lenis?.destroy(); lenis = undefined }
  else lenisTimer = window.setTimeout(startSmoothScroll, 1000)
})

const root = document.getElementById('root')
const tree = <React.StrictMode><App /></React.StrictMode>
if (root.hasAttribute('data-prerendered')) hydrateRoot(root, tree)
else createRoot(root).render(tree)
