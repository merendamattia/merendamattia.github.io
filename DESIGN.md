# Design specification: Broadsheet

## Direction

An editorial academic site inspired by printed broadsheets: paper-tinted ground, dark serif type, restrained cyan interaction color, and rare magenta warnings. Hierarchy comes from typography and space rather than nested cards or decorative effects.

The live source of truth is `assets/css/broadsheet.css`. Reuse its variables and existing component classes.

## Foundations

- Typeface: Source Serif 4 for headings, body, and interface chrome.
- Ground: `--color-bg`; text: `--color-text`; primary interaction: `--color-accent` and its accessible darker ramp values.
- Keep reading content left-aligned and bounded near 65 to 75 characters; the smartphone identity block is the deliberate centered exception.
- Use the spacing variables for rhythm; keep radii small except the circular portrait.
- Focus uses a visible 2px accent outline.
- Touch targets on smartphone layouts are at least 44px high.
- Respect `prefers-reduced-motion`.

## Masthead

Desktop:

- Maximum 1120px, full-name brand left, navigation right, one 1px rule below.
- Brand typography: `Saverio Mattia` at weight 400 roman; `Merenda` at weight 600 roman. No italics.

At 700px and below:

- Sticky, paper-colored bar at the top with one bottom border. The standalone desktop rule is hidden at this breakpoint.
- Two-column first row: full brand in `minmax(0, 1fr)` and a stable 44 by 44 hamburger.
- JavaScript-enhanced navigation is collapsed by default and expands below as a full-width vertical list.
- Home, Curriculum, University Notes, and CV each receive a full-width 44px target.
- Without JavaScript, the menu remains visible below the first row rather than becoming inaccessible.

## Home identity

- Desktop shell: 300px identity rail plus flexible content column, 64px gap.
- Portrait: 200 by 200, circular, `object-fit: cover`, clean bitmap presentation.
- Never apply halftone, dot screens, generated overlays, or coin/grid effects to the portrait.
- Name repeats the brand weight distinction: `Saverio Mattia` regular, `Merenda` bold, no italics.
- Center the complete identity rail on desktop and mobile.
- Contacts use icon and text labels inside a `width: fit-content` group centered in the rail. Rows stay left-aligned and stretched to the group width so icons form a clean vertical column.
- CV is the primary action, but remains a compact centered button with a 16px icon rather than a full-width rail button.

At 860px and below, the shell and identity area are single column. Required order: portrait, identity text, degree, location, one-column contacts, CV button, then main content. Do not place the portrait beside contacts at any collapsed width. The identity stays centered while the contact rows remain internally left-aligned.

## Records and projects

- `.row-link` is the standard affordance for CV records: hairline top rule, persistent chevron, restrained hover color, and small positional feedback.
- Titles, dates, descriptions, tags, and attachment availability wrap naturally.
- `.pcard` is reserved for discrete projects. Do not use cards as page-section containers or nest cards.
- The home has no filter bar.

## Tags

- All content tags use `_includes/tag.html`, including home interests, record metadata, project languages, listings, and detail pages.
- `_data/tag_colors.yml` maps each label to a unique pastel hue, so distinct labels never share a color and identical labels remain visually consistent without client-side JavaScript.
- The palette adds restrained color while preserving readable contrast, compact sizing, natural wrapping, and the editorial geometry.
- Add new labels to the central map with an unused hue; do not assign colors inline or restore mixed neutral/accent variants.

## Reference rows

`.reflink` is the only resource/reference presentation for detail content:

- Full-width row with a top hairline.
- Leading type icon, primary `.ref-name`, secondary `.ref-sub`, trailing arrow.
- Hover changes color and adds subtle horizontal feedback.
- `.resource-list` groups embedded rows inside long Education content.
- `_includes/resource-link.html` is the reusable inline renderer.
- Front-matter references rendered by `_includes/detail.html` use the same markup and styling.
- Do not add `.divtable` resource tables.

## University Notes

- Maximum 900px reading surface with a strong page title and compact support/disclaimer copy.
- Search is a bounded full-width control with an icon and visible result count.
- Desktop `.course` grid: fixed grade column, flexible title, resource column using the remaining right side.
- `.gradechip` has one neutral transparent background, border, and text treatment for every grade. No special fill for high grades or lode.
- Resource pills wrap and appear only for existing links.
- At 700px and below, use grade plus flexible title on the first row; resources span the full second row.

## Detail typography

- Maximum 760px reading surface.
- One display H1 followed by metadata and tags.
- Body copy remains at least 16px on phones.
- Long links and words wrap; code blocks and genuinely wide tables scroll inside their own container.
- Images stay within the reading column and include meaningful alt text.

## Responsive verification

Test 320, 400, 768, and 1440 CSS pixels. Check:

- Sticky menu open and closed states, keyboard operation, and target sizes.
- Home identity order and circular portrait.
- University course title/resource wrapping.
- Long tags, titles, references, Markdown tables, and code.
- Cookie banner containment.
- `document.documentElement.scrollWidth === document.documentElement.clientWidth` on representative pages.

## Avoid

- Halftone/profile effects, gradient text, decorative glass, or colored side stripes.
- Mixed grade-chip colors.
- Restoring the home tag filter.
- Invented filler content or exam notes.
- Rounded text pills where a familiar icon-only command is clearer.
- Hidden core functionality on mobile.
