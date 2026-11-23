# Hiram Ngatia Charagu — Portfolio

Responsive single-page portfolio built with React, Vite, and Tailwind CSS. The visual styling lives in `src/styles.css`; the page is composed from reusable section components in `src/components/`.

## Project layout

```text
public/
  assets/
    Hiram_Ngatia_Charagu_CV_Final.docx
    Hiram_Charagu_Software_Developer_Resume.pdf
    hiram-portrait.webp       Optimized profile portrait
    umma-university-logo.png
src/
  components/
    About.jsx                About section and visual
    Certifications.jsx       Training credentials
    Education.jsx            Education cards
    Footer.jsx               Contact and footer
    Hero.jsx                 Introduction and hero artwork
    Nav.jsx                  Responsive navigation
    Projects.jsx             Featured and additional work
    TechStack.jsx            Skills grouped by area
    Timeline.jsx             Experience and learning timeline
  App.jsx                    Page composition
  data.js                    Profile, projects, skills, timeline content
  main.jsx                   React entry point
  styles.css                 Global styles and responsive layout
index.html                   HTML shell and metadata
vite.config.js               Vite configuration
tailwind.config.js           Tailwind configuration
postcss.config.js            PostCSS configuration
```

## Run locally

```bash
npm install
npm run dev
```

Create a deployment build with `npm run build` and preview it with `npm run preview`.

## Personalize before publishing

- Contact details and profile URLs in `src/data.js` are set from the details provided.
- Review the two CV downloads in `public/assets/` and replace either file if you revise them.
- Replace `public/assets/hiram-portrait.webp` with a new optimized portrait if you update the photo.
- Confirm project descriptions, technologies, work dates, and leadership details match your actual contributions.
- Add real project screenshots or repository/demo URLs when available. The current project visuals are custom CSS mockups, not screenshots of live products.
- Update the title and metadata in `index.html` if the branding changes.

The Umma University logo is served from a local asset copied from the [official university site](https://umma.ac.ke/wp-content/uploads/2025/09/umma-university-logo.png).

Navigation items point to sections on this single-page site; project case studies can be added later as routes or separate pages.
