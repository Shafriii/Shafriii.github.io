# M Shafri Syamsuddin Portfolio

Static, dark-mode portfolio for showcasing my CV, case studies, publications, and ML-first tech stack. The site is plain HTML/CSS/JS so it ships easily on GitHub Pages, with styling inspired by the clean editorial feel of [mitchellsparrow.com](https://www.mitchellsparrow.com/).

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/My-Portofolio.git
   cd My-Portofolio
   ```
2. **Preview locally**  
   Open `index.html` in your browser, or run `python -m http.server` and visit `http://localhost:8000`.

## Content Map

- `index.html` - Page copy (hero, case studies, publications, journey timeline, stack, scores, contact).
- `assets/images/` - Portrait, project snapshots, and conference documentation.
- `assets/docs/m-shafri-syamsuddin-cv.pdf` - CV download.
- `assets/docs/toefl-itp-2025.pdf`, `assets/docs/tpa-online-2025.pdf` - Score reports linked from the site.
- `assets/icons/` - SVG logos for the tech stack grid.
- `assets/css/styles.css` - Layout, typography, and responsive rules.
- `assets/js/main.js` - Mobile navigation toggle, IntersectionObserver reveal animations, and footer year.

Update these assets as new work ships; swap in fresh screenshots, certificates, and copy without needing a build step.

## Deploying to GitHub Pages

1. Push the repository to GitHub.
2. In **Settings -> Pages**, choose the `main` branch and the `/root` directory.
3. Save to publish at `https://<your-username>.github.io/My-Portofolio/`.  
   - Rename the repo to `<your-username>.github.io` if you want it to live at the root domain.
4. (Optional) Configure a custom domain in the same Pages panel.

## Credits

- Typography: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Inter](https://fonts.google.com/specimen/Inter)
- Visual inspiration: [mitchellsparrow.com](https://www.mitchellsparrow.com/) and modern CV/NLP landing pages.
