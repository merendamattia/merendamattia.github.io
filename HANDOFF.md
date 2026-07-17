# HANDOFF: Broadsheet redesign

Last updated: 2026-07-17

## Goal

Polish the Jekyll redesign without changing the original CV and site content. Keep the visual language sober and editorial, make every route responsive, preserve the Markdown content workflow, and improve technical/on-page SEO.

## Non-negotiable constraints

- Create Git commits only after an explicit user request. A commit for the completed redesign was authorized on 2026-07-17.
- Do not revert unrelated user changes in the dirty worktree.
- Style may change; original biography, CV data, records, course links, grades, and attachments must remain intact.
- Keep this file updated while work is in progress, including new requests and unfinished verification.

## Todo list

### Follow-up completato: allineamento home e nome

- [x] Centrare nella vista mobile l'intero blocco identità: foto, nome, ruolo, titolo di studio, posizione, contatti e pulsante CV.
- [x] Spostare `Parma, Italy` sopra i contatti, vicino alle informazioni personali, e non lasciarlo sotto il pulsante CV.
- [x] Impostare `Saverio Mattia` in peso regolare e `Merenda` in grassetto, senza corsivo, nel masthead e nel nome della home.
- [x] Rendere singola la linea sotto la navbar in ogni stato: una linea desktop e il solo bordo del masthead sticky su mobile.
- [x] Aggiornare `AGENTS.md`, `PRODUCT.md` e `DESIGN.md` con queste convenzioni definitive.
- [x] Centrare il blocco identità anche nel rail desktop.
- [x] Usare `.links` come box di larghezza intrinseca centrato nel rail, ma con righe e icone allineate a sinistra sia su mobile sia su desktop.
- [x] Rendere il pulsante Download CV compatto e centrato, con icona da 16px, invece che largo quanto tutto il rail.
- [x] Verificare visivamente e numericamente le viste mobile/desktop, poi rieseguire build, audit e `git diff --check`.
- [x] Test browser finale del follow-up: 64 controlli, 0 problemi, con screenshot mobile e desktop ispezionati.
- [x] Reso asincrono il caricamento di Phosphor Icons per evitare che una CDN lenta ritardi l'attivazione del menu hamburger.

### Fase successiva: ottimizzazione prestazioni Ponytail

- [x] Usare `AGENTS.md` e questo handoff come contesto distillato; l'autocompact della conversazione non è invocabile manualmente.
- [x] Misurare il caricamento reale della home e di una pagina interna, includendo richieste, risorse bloccanti, dimensioni e metriche browser.
- [x] Sostituire il loader di tutte le varianti Phosphor con il solo foglio `regular`: 7 richieste e circa 76 KB in meno sulla home cold, DCL da circa 1097 ms a 427 ms, load da circa 1578 ms a 1042 ms e CLS da 0,203 a 0 nel test locale.
- [x] Portare Phosphor Icons 2.1.1 sullo stesso origin e ridurlo alle 21 icone live dopo la rimozione di GitLab: CSS piu font passano da circa 160 KB trasferiti a 4,5 KB locali, senza cambiare i glifi usati.
- [x] Servire localmente gli stessi due WOFF2 Latin di Source Serif 4 (400/600 e corsivo 400), eliminando Google Fonts, due origin esterni e una richiesta senza cambiare la tipografia.
- [x] Precaricare i due font locali sopra la piega: due cold run consecutivi hanno CLS 0 e FCP/LCP rispettivamente 64/64 ms e 60/60 ms.
- [x] Eliminare o rinviare solo lavoro e asset non necessari, riutilizzando browser/Jekyll/CSS nativi e senza nuove dipendenze.
- [x] Mantenere invariati stile, componenti, contenuti, SEO e funzionalita durante gli interventi prestazionali; la sola nuova variazione visiva e la successiva richiesta esplicita sui tag.
- [x] Confrontare le misure prima/dopo e ripetere build, audit, responsive e controllo link.
- [x] Confronto cold finale home: 40 -> 30 richieste, 35 -> 21 richieste esterne, circa 970 -> 745 KB, FCP/LCP 508/508 -> 60-64/60-64 ms, CLS 0,203 -> 0.
- [x] Confronto cold finale `/uni/`: 36 -> 29 richieste, 32 -> 21 richieste esterne, circa 941 -> 719 KB, FCP/LCP 188/188 -> 60-64/60-64 ms, CLS resta 0.
- [x] Il tempo `load` non viene usato come indicatore principale: in una ripetizione AdSense lo ha portato a circa 5,9 s mentre richieste locali, FCP/LCP e CLS restavano stabili.

### Nuova richiesta: colori pastello dei tag

- [x] Uniformare tutti i tag con una palette pastello, eliminando la situazione in cui solo alcuni risultano colorati.
- [x] Correggere la prima assegnazione a 6 tonalita: non sono ammesse collisioni tra etichette diverse (per esempio `static-analysis`/`software-verification` o `ethereum`/`smart-contract`).
- [x] Assegnare a ciascuna delle 25 etichette correnti una tonalita pastello univoca, mantenendo lo stesso colore tra pagine e sessioni.
- [x] Conservare contrasto, leggibilita, stile editoriale e comportamento responsive senza introdurre JavaScript o dipendenze non necessarie.
- [x] Verificare visivamente i tag su home, listing e dettaglio a larghezze mobile e desktop.
- [x] Centralizzare il rendering in `_includes/tag.html` e documentare la convenzione in `AGENTS.md`, `PRODUCT.md` e `DESIGN.md`.
- [x] Verifica statica finale: 25 etichette distinte, 25 colori distinti e 0 assegnazioni incoerenti nel sito generato.

### Nuova richiesta: rimozione GitLab

- [x] Rimuovere GitLab dai link del profilo/home e dai profili social dichiarati nei metadati SEO.
- [x] Eliminare configurazione e glifo GitLab rimasti inutilizzati, senza rimuovere eventuali URL GitLab appartenenti ai contenuti storici.

### Nuova richiesta: rimozione DBLP

- [x] Rimuovere DBLP dai link del profilo/home, dalla configurazione e dai profili social dichiarati nei metadati SEO.
- [x] Conservare l'icona Phosphor `books`, riutilizzata nelle reference e in altri componenti live.

### Nuova richiesta: tag EVMLiSA

- [x] Aggiungere al progetto EVMLiSA i tag esistenti `static-analysis`, `abstract-interpretation`, `software-verification`, `smart-contract` ed `ethereum`, mantenendo `Java`.
- [x] Verificare che progetto, listing e dettaglio mostrino tutti i 6 tag con 6 tonalita univoche gia definite e senza collisioni.

### Nuova richiesta: esperienza Keplero.ai

- [x] Leggere la voce lavorativa piu recente relativa a Keplero.ai direttamente da `files/cv.pdf`.
- [x] Aggiungere l'esperienza usando struttura, tono e metadati delle esperienze esistenti, preservando fedelmente le informazioni del CV senza copia meccanica o dettagli inventati.
- [x] Verificare ordine cronologico, resa su home, listing e dettaglio, SEO e responsive: 61 pagine senza problemi nell'audit e 12 controlli browser a 320/400/768/1440 px con 0 errori.

### Nuova richiesta: commit

- [x] Registrare in un unico commit il redesign completo e gli ultimi aggiornamenti, dopo autorizzazione esplicita dell'utente.

### Completed

- [x] Restored the original home biography and original record metadata/content across home, listing, and detail pages.
- [x] Removed the unused home tag filters and their JavaScript/CSS/data attributes.
- [x] Changed the masthead wordmark to the full name.
- [x] Replaced the old portrait with `assets/images/profile.webp`, generated from the uploaded `chill4.png`.
- [x] Removed the halftone treatment, enlarged the visible home portrait to 200 by 200 pixels, and made its presentation circular.
- [x] Generated `assets/images/favicon.webp` from the complete photo without cropping.
- [x] Removed `profile.jpg`, `icon.png`, and the uploaded source `chill4.png` after conversion.
- [x] Added responsive navigation, touch targets, wrapping, mobile spacing, contact layout, resource rows, and overflow protections.
- [x] Implemented SEO metadata, canonical URL, Person structured data, social image data, Italian locale for `/uni/`, robots/sitemap cleanup, unique descriptions, image alt text, and conditional MathJax loading.
- [x] Added unique SEO descriptions to all university course posts and the other content sections.
- [x] Restyled University Notes course rows to use one uniform grade-chip style for every grade.
- [x] Rebalanced University Notes desktop rows into grade, course, and resource columns so the right side is used by existing resources rather than invented notes.
- [x] Made University Notes rows reflow to two columns and then a full-width resource row on small screens.
- [x] Unified all 20 Education resources into 11 groups using the same `.reflink` row pattern as publications and projects; preserved every original PDF, repository, and project URL.
- [x] Added `_includes/resource-link.html` as the shared renderer for resources embedded in long content.
- [x] Removed all active legacy `.divtable` resource markup and stopped loading the now-unused Font Awesome stylesheet.
- [x] Made the collapsed home identity area a true single column: portrait, identity text, location, one-column contacts, and CV action.
- [x] Added the sticky smartphone masthead with full name, 44px hamburger, Home, Curriculum, University Notes, and CV.
- [x] Added menu state management: `aria-expanded`, open/close label and icon, Escape close/focus return, and close after link activation; navigation remains visible without JavaScript.
- [x] Created root `AGENTS.md` with durable repository instructions, continuous handoff rules, explicit-commit-only constraint, responsive/reference conventions, and required verification.
- [x] Rewrote `PRODUCT.md` and `DESIGN.md` to match the final implementation rather than the obsolete mockup behavior.

### Final verification

- [x] Run fresh browser screenshots after the portrait, favicon, SEO, and University Notes changes.
- [x] Inspect home, University Notes, a listing page, and a representative detail page on desktop and smartphone viewports.
- [x] Verify numerically that home, University Notes, Experience, and an Education detail have no horizontal overflow at 320px, 400px, 768px, and 1440px (`scrollWidth == viewport` for every probe).
- [x] Visually verify the full-name typography, circular portrait, complete-photo favicon, uniform University Notes grade chips, mobile menu states, and desktop course spacing.
- [x] Browser runtime suite: 64 checks, 0 issues. Covered four routes at 320, 400, 768, and 1440px, menu open/Escape behavior, target size, single-column identity, uniform grades, resource counts, and overflow.
- [x] Tag audit: 25 labels, 25 unique pastel hues, 0 cross-page inconsistencies; screenshots inspected on home, project listing, and publication detail at mobile and desktop widths.
- [x] Confirm GitLab is absent from the profile, configuration, SEO/social metadata, generated home, sitemap, and the 21-glyph live Phosphor subset.
- [x] Performance cold benchmark repeated after font preload: home 30 requests/21 external/about 745 KB/FCP 60-64 ms/CLS 0; `/uni/` 29 requests/21 external/about 719 KB/FCP 60-64 ms/CLS 0.
- [x] Generated-site audit: 60 HTML pages, 0 issues. Checked titles, descriptions, canonicals, H1 counts, JSON-LD, image alt text, duplicate descriptions, and all local `href`/`src` targets.
- [x] Confirm `/uni/` emits `<html lang="it">` and `og:locale=it_IT`; English pages emit `en` and `en_US`.
- [x] Content audit: 50 original content files checked, 0 changed original front-matter fields (layout-only redesign changes excluded).
- [x] Confirm the full original home biography is present and the CV blob hash matches `HEAD` exactly (`e07e53d7b71081c0971b8de82aa0f0c29f75a3d2`).
- [x] Confirm 29 University Notes posts, 20 Education resource rows, 11 resource groups, and 0 active legacy resource tables.
- [x] Confirm no active source references to old portrait/favicon files or home filter behavior; documentation mentions these only as explicit prohibitions/history.
- [x] `node --check assets/js/broadsheet.js`, `git diff --check`, and `bundle exec jekyll build` pass.
- [x] Full requirement-by-requirement review completed; no requested work remains open.
- [x] No Git commit was created before the final explicit authorization; pre-commit `HEAD` was `61d92d1`.

## Current implementation notes

- Primary stylesheet: `assets/css/broadsheet.css`.
- Tag renderer and unique hue map: `_includes/tag.html` and `_data/tag_colors.yml`.
- Local fonts: Source Serif 4 in `assets/fonts/`; 21-glyph Phosphor subset in `assets/vendor/phosphor/`.
- Client behavior: `assets/js/broadsheet.js`; mobile navigation, scroll reveal, and University Notes search.
- Profile asset: `/assets/images/profile.webp` (800 by 800 WebP).
- Home profile presentation: 200 by 200 pixels, circular, no halftone overlay.
- Favicon: `/assets/images/favicon.webp` (64 by 64 WebP, complete-photo composition).
- CV remains `/files/cv.pdf` and has not been replaced.
- University course data remains in `uni/_posts/*.md`; no additional exam-date note was invented because the year grouping already supplies that context.
- Jekyll development command: `bundle exec jekyll serve --host 127.0.0.1 --port 4000`.
- Persistent agent context: `AGENTS.md`; always read it, `HANDOFF.md`, `PRODUCT.md`, and `DESIGN.md` before changing the site.

## Prior completed redesign work

- Added the Broadsheet token system, masthead, identity rail, record rows, project grid, reusable detail include, listing layouts, and University Notes search.
- Reworked detail layouts as thin wrappers over `_includes/detail.html` where appropriate.
- Merged the former `uni/aai.md`, `uni/cp.md`, and `uni/lai.md` bodies into their corresponding course posts.
- Removed obsolete mobile-menu and unused legacy stylesheet assets. Font Awesome is no longer loaded because active Markdown content no longer uses its legacy resource-table icons.
