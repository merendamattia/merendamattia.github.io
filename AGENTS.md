# Repository instructions for AI agents

This file is the durable entry point for work on `merendamattia.com`.

## Read first

Before changing files, read these documents in order:

1. `HANDOFF.md`: current work, completed items, open tasks, and latest user requests.
2. `PRODUCT.md`: product behavior and content requirements.
3. `DESIGN.md`: visual system, responsive rules, and component conventions.

Update `HANDOFF.md` immediately when the user adds or changes a requirement. Keep its completed, in-progress, and remaining sections accurate throughout the session, not only at the end.

## Hard constraints

- Create a Git commit only when the user explicitly requests one. The user authorized a commit for the completed redesign on 2026-07-17.
- The worktree may already be dirty. Do not revert or overwrite unrelated user changes.
- Preserve the original biography, CV data, education/experience/publication/talk/research/event/project content, course grades, links, and attachments. Redesign styling and structure without inventing replacement content.
- Do not edit generated `_site/` files. Change Jekyll sources and rebuild.
- Use `apply_patch` for manual file edits.
- Avoid new dependencies unless the existing stack cannot solve the problem.

## Stack and commands

- Static site: Jekyll and GitHub Pages.
- Build: `bundle exec jekyll build`.
- Local preview: `bundle exec jekyll serve --host 127.0.0.1 --port 4000`.
- Primary stylesheet: `assets/css/broadsheet.css`.
- Source Serif 4 Latin WOFF2 assets are local in `assets/fonts/`; do not restore Google Fonts runtime requests.
- Phosphor Icons 2.1.1 is reduced to the live icon set in `assets/vendor/phosphor/`. When adding or removing a `ph ph-*` class, update both its CSS mapping and the font subset; do not restore the all-variant loader or a runtime CDN dependency.
- Client behavior: `assets/js/broadsheet.js`.
- Shared detail template: `_includes/detail.html`.
- Shared resource row: `_includes/resource-link.html` and `.reflink`.

Before declaring work complete, run at least:

```sh
git diff --check
bundle exec jekyll build
```

Also inspect representative generated pages and verify local links/assets, metadata, and responsive overflow.

## Content and component conventions

- Masthead and home name: `Saverio Mattia` is regular roman; `Merenda` is bold roman. Never italicize either part.
- Profile: `assets/images/profile.webp`, displayed as a clean 200 by 200 circular portrait without halftone effects.
- Center the home identity rail on desktop and mobile. Keep `.links` as a centered intrinsic-width group whose individual link rows remain left-aligned so all icons share one vertical column.
- GitLab and DBLP are intentionally absent from profile links, site configuration, and social metadata because they are not used. Do not restore them without a new explicit request.
- Keep the rail's Download CV action compact and centered; its icon is 16px rather than an oversized full-rail treatment.
- Favicon: `assets/images/favicon.webp`, derived from the complete profile photo without a cropped composition.
- Home has no tag filter. Do not restore its markup, CSS, JavaScript, or front-matter tags added only for filtering.
- Render every visible content tag through `_includes/tag.html`. `_data/tag_colors.yml` assigns every distinct label its own pastel hue and keeps it stable across the site; add every new label there with an unused hue. Do not add one-off tag colors or client-side color logic.
- Detail resources use the publication-style row pattern. Use `_includes/resource-link.html` for inline resources and `.reflink` for generated detail references. Do not add legacy `.divtable` resource tables.
- University grade chips all use one neutral visual style. Do not color grades differently based on score or lode.
- Do not invent exam notes to fill space; course year grouping and existing metadata remain the source of context.

## Responsive behavior

- Test at 320, 400, 768, and 1440 CSS pixels.
- At widths up to 860px, the home identity area is a true single column: portrait, identity text, degree, location, one-column contacts, and CV action.
- At widths up to 700px, preserve the centered identity layout; the contact group stays internally left-aligned.
- At widths up to 700px, the masthead is sticky. It shows the full name on the left and a 44px hamburger on the right. The expanded menu contains Home, Curriculum, University Notes, and CV.
- Keep exactly one line below the masthead: the standalone desktop rule is single, and it is hidden on mobile so only the sticky masthead border remains.
- The menu must maintain `aria-expanded`, support Escape, close after link activation, expose visible focus, and leave navigation available without JavaScript.
- Interactive targets on smartphone layouts should be at least 44px high.
- No page may create horizontal document overflow at supported widths. Long titles, tags, links, tables, and resource rows must wrap or scroll within their own bounded container.

## SEO and accessibility

- Preserve one descriptive title, meta description, canonical URL, and H1 per indexable page.
- `/uni/` pages use Italian document language and locale; the rest of the site defaults to English.
- Preserve Person structured data and social/profile metadata on the home page.
- Keep `alt` text meaningful. Load below-the-fold images lazily; keep explicit image dimensions where practical.
- Load MathJax only on pages that require it.
- Keep keyboard focus visible and controls semantically labeled.

## Final handoff

Before ending a task:

1. Re-read the latest user requests and this file.
2. Review every item in `HANDOFF.md` and update its status.
3. Run build, diff, generated-link/asset, SEO, and responsive checks appropriate to the change.
4. Record exact results and any genuinely deferred work in `HANDOFF.md`.
5. Do not commit unless the user explicitly requests it.
