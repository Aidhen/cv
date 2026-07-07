# Aidhen's Dev Portfolio

**🌐 Live Demo:** [aidhen.github.io/cv](https://aidhen.github.io/cv/)

A highly interactive, developer-centric personal portfolio built with React and Vite. It features a dual-layout architecture that allows users to seamlessly switch between a modern Bento grid UI and a simulated IDE environment.

## 🏗 Architecture & Design Choices

The project avoids bloated component libraries in favor of a clean, custom architecture tailored for performance and specific UI/UX goals.

* **Dual-Layout System:** State-driven rendering to toggle between `BentoLayout` (visual, widget-based) and `IdeLayout` (text-based, code-editor aesthetic).
* **Component Isolation:** Pure functional components with explicit props. State is lifted to `App.tsx` only when necessary (e.g., global theme coloring, easter eggs).
* **Zero-Dependency SVG:** The pixel-art avatar is rendered inline via mathematically calculated `<rect>` nodes directly from image data, ensuring infinite scalability and avoiding blur/aliasing issues typical of pixel art scaling.
* **Tailwind CSS:** Used for layout composition and responsive design, compiling to a minimal CSS bundle in production. Global styles are strictly contained within the `@layer base` directive.

## 🛠 Tech Stack

* **Core:** React, TypeScript, Vite
* **Styling:** Tailwind CSS (utility-first approach)
* **Environment:** Docker (containerized local development)
* **CI/CD:** GitHub Actions (automated deployment to GitHub Pages)

## 🚀 Local Evaluation (For Tech Leads & Reviewers)

The development environment is fully containerized to demonstrate a clean, reproducible setup. 
To inspect the local build process and architecture:

```bash
git clone https://github.com/Aidhen/cv.git
cd cv
docker compose up
```

3.  Access the app at `http://localhost:5173`.

## 🐛 Easter Eggs

* **The Overload:** Clicking the theme color palette too rapidly will trigger a state buffer overload, causing UI glitches and spawning an unclickable "troll button" via randomized CSS transforms.

## ⚖️ License & Copyright

**© 2026 Aidhen. All rights reserved.** This repository is made public for showcase and evaluation purposes only. You are welcome to view the source code, but you may not copy, fork, reuse, or distribute the code, layouts, or visual assets without explicit written permission.