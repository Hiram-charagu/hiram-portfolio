# Hiram Ngatia Charagu — Portfolio

Responsive React/Vite portfolio for Hiram Ngatia Charagu. The dark slate, lime-accented design presents selected systems, education, community work, skills and contact options.

## Run locally

```sh
npm install
npm run dev
```

`npm run build` builds the Vite app and pre-renders its main route into `dist/index.html`; `npm run preview` serves that production output.

## Editing the content

Edit profile, education, project, skill, journey, certificate and section copy in [`src/content/site.ts`](src/content/site.ts). Run `npm run typecheck` to validate the content types. Project case studies are explicitly labeled with their current status. The project visuals are illustrative sketches because real screenshots and demo links have not been provided. Add certificate verification URLs to `verificationUrl` when available.

## Contact form

The contact form uses Web3Forms. Copy `.env.example` to `.env.local`, then add your private Web3Forms access key to `VITE_WEB3FORMS_ACCESS_KEY`. `.env.local` is ignored by Git. Until a key is configured, the form shows an email fallback and does not transmit messages.

## 3D scene and motion

The procedural Three.js hero is loaded only when the hero is visible and the browser/device supports it. It auto-loads on capable desktop browsers and is activated by a tap on touch-first devices to keep the initial mobile experience light. It is skipped for reduced-motion users, devices reporting four or fewer CPU cores or 4 GB memory, and browsers without WebGL. The CSS orb remains the fallback. To disable the 3D scene entirely, remove the `<Suspense>`/`HeroScene` render in `src/components/Hero.jsx`; Lenis and the intersection-based section reveal also respect reduced-motion preferences.

## Deployment and domain

The canonical URL is `https://hiram-portfolio-ten.vercel.app/`, configured in `index.html`, `public/robots.txt` and `public/sitemap.xml`. The repository deploys through Vercel on pushes to `main`. For a custom domain, add it in Vercel Project Settings → Domains, complete the DNS records shown there, then update the canonical, Open Graph, JSON-LD, sitemap and robots URLs together.

## Changelog

- Added a lazy procedural WebGL network orb with a static fallback, reduced-motion and low-capability checks.
- Replaced remote font loading with self-hosted Manrope and DM Mono; improved copy sizing, contrast, focus styles, landmarks and mobile navigation behavior.
- Consolidated portfolio content in `src/content/site.ts`; added case-study details, project status labels, instructor/Web3, SecGuard and UMMA Telemedicine information.
- Added server-rendered HTML, canonical/social metadata, an Open Graph preview, Person JSON-LD, sitemap, robots, manifest and favicon links.
- Added the Web3Forms contact form shell and removed the public phone text and DOCX link.

## Remaining setup

- Add the Web3Forms access key privately to Vercel and `.env.local` before expecting form delivery.
- Add project screenshots/demo URLs and certificate verification links when you have them.
- Local Lighthouse mobile run on the production preview: Performance 87, Accessibility 100, Best Practices 100, SEO 100; LCP 0.9 s and CLS 0. The performance target of 90+ is not yet met, and this local score may differ from the deployed site. No pre-change Lighthouse baseline was recorded.
- Enable Vercel Web Analytics in the project dashboard before adding its tracking integration; it is not active in the current build.
