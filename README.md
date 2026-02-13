# Senior Software Developer Portfolio

A production-ready, single-page portfolio designed for **senior backend/API engineers**.

## What was improved
- Richer professional summary and experience highlights structure.
- Dynamic personal-details configuration from a single file (`profile.js`).
- Unique and interesting API project ideas aligned with senior architecture skills.
- Placeholder links for each project so you can add live URLs later.
- Free deployment instructions suitable for adding portfolio URL in resume.

## Update your details (important)
Open `profile.js` and edit the `window.PORTFOLIO_PROFILE` object:
- `fullName`
- `role`
- `heroSummary`
- `about`
- `contact` (email, LinkedIn, GitHub, location)

Also update in `script.js`:
- `experiences` array with your actual companies and achievements
- `apiProjects` array with your project links when ready

## Add your resume
Place your resume file in the root folder as:

```text
resume.pdf
```

The **Download Resume** button in the hero section will use this file.

## Run locally
```bash
python3 -m http.server 4173
```
Then open: `http://localhost:4173`

## Deploy on a free server

### Netlify (free)
1. Push this project to GitHub.
2. Netlify → **Add new site** → **Import from Git**.
3. Build command: *(empty)*
4. Publish directory: `.`
5. Deploy and use the generated URL in resume.

### Vercel (free)
1. Push project to GitHub.
2. Import repository in Vercel.
3. Framework preset: **Other**
4. Build command: *(empty)*
5. Output directory: `.`
6. Deploy.

### GitHub Pages (free)
1. Push to GitHub.
2. Repo **Settings** → **Pages**.
3. Source: `main` branch, root folder.
4. Save and use generated URL.

## Resume tip
Add portfolio URL directly under your contact info and keep project cards updated with measurable impact as you build each API project.
