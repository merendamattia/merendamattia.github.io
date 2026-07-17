# Product specification: merendamattia.com

## Purpose

Personal academic website for Saverio Mattia Merenda, AI Solution Architect and Computer Science researcher. It serves as a search-friendly professional profile, a complete CV archive, and a practical hub for university notes.

The site is Jekyll-based and Markdown-driven. Visual changes must not rewrite or simplify the original content model.

## Product principles

- Preserve the original biography, records, course data, grades, links, attachments, and CV PDF.
- Make professional identity and current role immediately understandable.
- Keep long academic material readable rather than hiding it behind decorative UI.
- Optimize every workflow for smartphone use as well as desktop.
- Prefer a small shared component set over one-off markup.
- Keep metadata complete and indexable without duplicating SEO tags.

## Global navigation

Desktop masthead:

- Full wordmark `Saverio Mattia Merenda`, linking home.
- Home, Curriculum, University Notes, and CV actions.
- `Saverio Mattia` is regular roman; `Merenda` is bold roman. Neither part is italic.

Smartphone masthead, up to 700px:

- Sticky bar with the full wordmark on the left.
- 44px hamburger button on the right.
- Expandable vertical menu containing Home, Curriculum, University Notes, and CV.
- Accessible expanded state, Escape handling, link-close behavior, visible focus, and a usable no-JavaScript fallback.

## Home `/`

Desktop uses a two-column shell: identity rail on the left and CV content on the right.

Identity rail:

- Circular 200 by 200 portrait from `/assets/images/profile.webp`, without halftone or decorative overlays.
- Full name, role, degree, institution, contact links, CV download, and location.
- Contact links come from `_config.yml`.
- GitLab and DBLP are intentionally excluded from the contact list and profile metadata.
- The identity rail is centered on desktop and mobile. Contact links form a centered intrinsic-width group, but each row remains left-aligned so the icons line up vertically.
- The Download CV action is compact and centered rather than spanning the full rail.

At widths up to 860px the identity rail becomes a true single column in this order: portrait, name and role, degree, location, one-column contact links, and CV action. The portrait is never placed beside the links on small screens. At widths up to 700px the entire identity area is centered.

Home content preserves the original biography and renders Education, Experience, Publications, Talks, Research, Events, and Projects from existing Markdown sources. Records remain clickable and link to their detail pages. The home tag filter has been removed because it was unused and consumed excessive space.

Visible content tags use a shared pastel color system. Every distinct label has its own color, and the same label keeps that color throughout home, listing, project, and detail views; color is presentational and never changes filtering or content semantics.

## Listing and detail pages

Section indexes group or list existing records using the shared clickable row pattern.

Detail pages use a narrow reading column with:

- Back link, section kicker, one H1, metadata, tags, lead text, Markdown body, references, and back action.
- Existing images and attachments, with useful alt text and lazy loading below the fold.
- Conditional MathJax only when page front matter declares it.

Resources use one shared publication-style row presentation:

- Full-width clickable rows with an icon, primary label, secondary type/domain, and trailing arrow.
- `_includes/resource-link.html` renders resources embedded in long content.
- `_includes/detail.html` renders references generated from front matter.
- Education, publications, projects, talks, events, and research must not introduce legacy resource tables.

## University Notes `/uni/`

Italian-language course hub driven by all posts in `uni/_posts`.

- Italian title, support link, tutoring contact, and disclaimer.
- Live course search and result count.
- Courses grouped by year.
- Every grade uses the same neutral outlined chip, including lode grades.
- Desktop course rows use available width for grade, course title, and existing resources.
- At widths up to 700px, grade and title occupy two columns and resources wrap below across the full row.
- Resource links render only when their source field exists.
- Do not invent extra exam notes to fill space; year grouping already provides context.

Individual course pages preserve the original course content and resource links.

## Assets

- Profile: `/assets/images/profile.webp`, 800 by 800 WebP source.
- Favicon: `/assets/images/favicon.webp`, 64 by 64 WebP using the complete photo composition.
- CV: `/files/cv.pdf`, unchanged.
- Other images and PDFs remain in their existing directories.

## SEO

- Canonical public origin: `https://www.merendamattia.com`.
- One title, description, canonical URL, and H1 per indexable page.
- Person structured data and profile/social metadata on home.
- English language/locale by default; Italian language and `it_IT` locale under `/uni/`.
- Unique descriptions for listing, detail, and course pages.
- Sitemap excludes redirect/error/internal documentation pages as configured.
- MathJax and image loading are page-specific to avoid unnecessary work.

## Verification

Required viewports: 320, 400, 768, and 1440 CSS pixels. Representative home, University Notes, listing, and detail pages must have no horizontal document overflow. Build with `bundle exec jekyll build`, run `git diff --check`, and validate generated links/assets and metadata before completion.
