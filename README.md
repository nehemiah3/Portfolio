# Portfolio

Personal portfolio website for **Nehemiah Hosea**, built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (v4)
- [shadcn/ui](https://ui.shadcn.com/) components
- Deployed on [Netlify](https://www.netlify.com/) (with Netlify Forms for the contact form)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## Editing content

All site content (name, bio, projects, skills, social links) lives in
[`src/data/portfolio.ts`](src/data/portfolio.ts) — edit that file to update the site.

## Deployment

The site deploys to Netlify. Configuration is in [`netlify.toml`](netlify.toml):
build command `npm run build`, publish directory `dist`, with an SPA redirect.
The contact form uses Netlify Forms (see the hidden form in `index.html`).
