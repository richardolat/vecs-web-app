# Veritas-Eagles Communications (VECS) — Website

A clean, dependency-free static rebuild of the VECS website: plain HTML, CSS,
and vanilla JavaScript. No framework, no build step, no external database —
built specifically to stop the "broken on deploy" problem the previous
Figma-Make/Supabase build had (missing images, missing logo, broken links).

## Why this version won't break on deploy

The previous build depended on a large React/MUI/Radix/Supabase stack and
externally-hosted images that didn't reliably resolve outside the Figma
preview environment. This version:

- Has zero build step — Vercel serves the files as-is.
- Uses only local, bundled assets (SVG graphics in `/images`) — nothing
  depends on an external image host staying online.
- Has no database or environment-variable dependency, so there's nothing to
  misconfigure on deploy.
- Uses real relative links between pages (`about.html`, `services.html`,
  etc.) — every nav link and footer link resolves to a real file in this
  repo.

## Deploying to Vercel

1. Push this folder to a GitHub repository (replacing the old repo content,
   or as a new repo).
2. In Vercel: **New Project → Import** the repository.
3. Framework preset: choose **Other** (or leave as detected — Vercel will
   correctly treat this as a static site).
4. Leave the build command and output directory blank — there's nothing to
   build.
5. Deploy. That's it — no environment variables required.

You can also drag-and-drop this folder directly into Vercel's dashboard for
a one-off deploy without connecting GitHub at all.

## What still needs real content

- **Logo and Richard's headshot are now real** — both are in `/images`
  (`veritas-logo-header.png` for the light header, `veritas-logo-transparent.png`
  for the dark footer, `richard-headshot.jpg` on the About page).
- **Team/office photography** — the hero and section graphics are still custom
  SVG illustrations rather than photos, since no real work/team photos exist
  yet. Once you have real photography, swap the SVGs in `/images` for real
  photos and update the `<img>` tags accordingly.
- **Social links** — the footer social icons currently point to `#`. Update
  `js/footer.js` with the real Twitter/X, LinkedIn, Instagram, and Facebook
  URLs.
- **Contact form** — currently submits via a `mailto:` link (opens the
  user's email client with the enquiry pre-filled). This works with zero
  backend, but if you want it to submit silently to an inbox or CRM, that
  needs a form backend (e.g. Formspree, or a small Vercel serverless
  function) — let me know if you want that built.
- **Newsletter signup** on the Insight Hub currently just shows a
  confirmation message with no real subscription happening — connect it to
  an email service (Mailchimp, Substack, Buttondown, etc.) when ready.

## File structure

```
/index.html          Homepage
/about.html           About, leadership, registration
/services.html        All six core services
/work.html             Case studies
/insight-hub.html      Articles + Substack section
/contact.html          Enquiry form + contact details
/css/styles.css        All site styling (navy/gold brand system)
/js/main.js             Mobile nav, form handling
/js/footer.js           Shared footer, injected on every page
/images/                Logo, hero graphic, headshot placeholder
```
