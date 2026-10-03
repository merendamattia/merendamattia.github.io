# HANDOFF: Broadsheet redesign

Last updated: 2026-10-03

## Goal

Polish the Jekyll redesign without changing the original CV and site content. Keep the visual language sober and editorial, make every route responsive, preserve the Markdown content workflow, and improve technical/on-page SEO.

Latest follow-up completed: refresh Projects for the current AI engineering profile on `feat/refresh-projects-2026`, preserving historical projects and the established design.

## Non-negotiable constraints

- Create Git commits only after an explicit user request. A commit for the completed redesign was authorized on 2026-07-17.
- Do not revert unrelated user changes in the dirty worktree.
- Style may change; original biography, CV data, records, course links, grades, and attachments must remain intact.
- Keep this file updated while work is in progress, including new requests and unfinished verification.

## Todo list

### Completato: aggiornamento Projects 2026

- [x] Letti AGENTS.md, HANDOFF.md, PRODUCT.md e DESIGN.md; worktree iniziale pulito. Esaminati i sei progetti esistenti e il pinning condiviso da home e listing.
- [x] Aggiunte le cinque pagine nel formato esistente, con riferimenti GitHub e soli tag già presenti. Descrizioni confrontate con i README locali; API GitHub conferma tutti i repository pubblici e raggiungibili.
- [x] Impostato l'ordine richiesto tramite `priority` e `sort` nelle query esistenti di home/listing. I primi sei sono pinned; EVMLiSA resta strategico. OGA e QPO passano a unpinned; i cinque storici conservano ordine relativo e contenuto.
- [x] Aggiornata description di `/projects/` per AI Systems Engineering, Agentic Software Engineering, Production AI e Software Verification.
- [x] `bundle exec jekyll build` e `git diff --check` superati. Audit di 67 pagine: 0 problemi di link/asset locali, title/description/canonical/H1, lingua, JSON-LD e alt; Person e PDF preservati. Tutte le nuove pagine presenti in sitemap; tag solo dalla palette esistente.
- [x] Corretto l'overflow di 3 px del riferimento GitHub a 320 px con `min-width: 0` e wrapping al contenitore testo `.reflink`, senza cambiare geometria o tipografia.
- [x] Chrome: 44 controlli su home, listing, sei dettagli Projects e tre dettagli Experience/Education/Publications a 320/400/768/1440 px; 0 overflow, un H1 per pagina, ordine e assenza di card duplicate confermati. Menu aperto/Escape verificato su tutte le route a 320/400 px. Screenshot home/listing/dettaglio ispezionati su mobile e desktop.
- [x] Lighthouse 13.4.1 locale, Chrome headless senza estensioni e senza blocco richieste: finale Performance/Accessibilità/Best Practices/SEO home 100/100/100/100 e Projects 100/96/100/100, sia mobile sia desktop; Agentic Browsing 100, CLS 0. Baseline home mobile 89/100/100/100, desktop 100/100/100/100; Projects 100/96/100/100 su entrambi. Nessuna regressione nei punteggi; il 96 preesistente riguarda il contrasto 4,48:1 del backlink. Richieste invariate: 11 home, 10 listing. Misure lab su server statico locale, senza gzip; nessun dato INP sul campo o verifica di pubblicazione.
- [x] Confronto Git: contenuto dei sei progetti originali invariato, modificato solo pinning/priorità. Home modificata soltanto nelle due query Projects; Head of AI, Experience, Education, Publications, configurazione e CV intatti. Nessuna dipendenza o risorsa runtime aggiunta.
- Ordine finale: Swarmloom; Ledgerly; Build Production Web App; EVM Cross-chain Policy Agent; EVMLiSA; Personal Financial AI Agent; Academic Guarantee Optimization; Quantum Portfolio Optimization; Deep Neural Network Library; My-gpt4; Tracking messages on Bitcoin blockchain.
- Nessun lavoro richiesto rimasto. Report e screenshot di verifica in `/private/tmp/projects-*`, esclusi dal repository.
- Vincoli: branch `feat/refresh-projects-2026`; commit e push autorizzati dall'utente dopo il completamento, il 2026-10-03. Nessun merge o PR autorizzato. Non modificare Head of AI, Experience, Education o Publications; usare il pinning esistente senza card duplicate, conservare contenuto storico, design e stack.
- [ ] Registrare l'aggiornamento Projects in un commit e pubblicare il branch su `origin/feat/refresh-projects-2026`, verificando il riferimento remoto.

### Correzione richiesta: push su master e rimozione main

- L'utente ha corretto il branch di destinazione: pubblicare tutti i commit su `origin/master` e rimuovere `main` remoto e locale.
- [x] Worktree iniziale pulito; `origin/master` verificato a `bc47aed`, `origin/main` a `64b79e5`. Trasferiti i tre commit su `master` con fast-forward, senza riscrivere la cronologia.
- [x] Push su `origin/master` verificato a `64b79e5`, comprensivo di tutti i commit di `main`. Rimossi `main` remoto e locale dopo la verifica di inclusione; `git ls-remote` conferma che resta solo `master` tra i due branch. Branch corrente `master`, nessun force push.
- [x] Build e `git diff --check` superati; audit delle 62 pagine con zero problemi. Resa e sorgenti del sito invariati rispetto alle verifiche responsive già completate. Registro finale incluso in un commit di documentazione su `master`.

### Richiesta attuale: miglioramenti da Lighthouse

- [x] Nuova richiesta: assegnati a Promoservice Parma gli stessi quattro tag di Keplero AI, riutilizzando la palette esistente.
- [x] Preferenza esplicita: rimossi Rybbit e AdSense; mantenuto solo Google Analytics GA4 `G-LNQ45S8LE2` già osservato nelle richieste del sito, con caricamento diretto senza container GTM e comandi legacy.
- [x] Keplero AI nel résumé della home collegata a `https://keplero.ai/`.
- [x] Foto responsive 200/400/800px, CSS compresso tramite Sass/Jekyll già disponibile, contrasto di link/pulsanti/testi secondari e banner cookie corretto; link CV e cookie descrittivi e rimossa la richiesta cookie con redirect.
- [x] Rimossi libreria cookie remota, scroll reveal, varianti CSS inutilizzate e meta IE legacy. Avviso locale con chiusura persistente verificata; CLS mobile corretto (0,220 → 0).
- [x] Applicate seo, seo-page, seo-technical e seo-performance. Metriche in `SUMMARY.json` e cache SEO esclusa da Git. Rimosso il report Markdown su richiesta dell'utente; eliminata anche la sua voce nella configurazione Jekyll.
- [x] Lighthouse 13.4.1 finale senza estensioni e senza blocco richieste: Performance/Accessibilità/Best Practices/SEO 100/100/100/100 sia desktop sia mobile. Agentic Browsing 100. Baseline desktop pulita già a Performance 100: il 70 originale era contaminato dalle estensioni. Richieste desktop 34 → 11, byte circa 789 KB → 297 KB. GA4 page_view verificato.
- [x] Build, sintassi JS, git diff --check e audit di 62 pagine passano, con zero problemi SEO/link/asset; sitemap 81 URL univoci. University Notes 100 in Accessibilità/Best Practices/SEO. 20 controlli responsive con zero overflow a 320/400/768/1440; verificati Escape, fallback senza JS, banner persistente e foto Retina. Screenshot ispezionati.
- [x] Limiti documentati: solo misure lab, nessun INP reale. Gzip già attivo su GitHub Pages; cache/bfcache locali non riflettono produzione. Resta da attivare Enforce HTTPS nelle impostazioni Pages (HTTP pubblico osservato 200); header HSTS/CSP/COOP richiedono hosting/proxy. Misure effettuate prima del push; pubblicazione del sito non verificata.
- [x] Commit e push su `origin/main` autorizzati ed eseguiti: `056af8f` aggiorna tag e link del profilo, `b438005` registra le ottimizzazioni. Verificato il riferimento remoto `main` a `b438005` dopo il push. Il branch è stato creato dalla versione corrente di `master`, preservato a `bc47aed`. Hook superati, build e audit di 62 pagine riconfermati, worktree pulito dopo il push. Nessuna modifica al branch predefinito o alla configurazione Pages. Questo aggiornamento finale del registro viene incluso in un successivo commit di documentazione su `main`.
- [x] Dopo la rimozione del report: build e git diff --check superati; audit delle 62 pagine con zero problemi. Nessuna modifica alla resa responsive.

### Completato: commit e push

- [x] L'utente ha autorizzato esplicitamente commit e push di tutti gli aggiornamenti al CV e al profilo su `master` il 2026-10-03.
- [x] Revisionati i sette file della modifica: nuovo PDF, esperienza Promoservice, date Keplero, home sintetica con link aziendale, SEO e documentazione. Controlli di build, link/asset e SEO superati; verifiche responsive precedenti valide.
- Commit e push vengono eseguiti su `origin/master`; il risultato definitivo è verificabile nella cronologia Git e nel riferimento remoto. Nessun intervento sui file generati.

### Completato: link Promoservice Parma

- [x] Nome Promoservice Parma nel paragrafo introduttivo collegato a `https://promoserviceparma.it/`, con apertura in nuova scheda e `rel="noopener"`, come gli altri link esterni della biografia. Testo visibile invariato.
- [x] `git diff --check` e `bundle exec jekyll build` passano; link confermato nell'HTML generato, audit delle 62 pagine con 0 problemi. Le larghezze responsive già verificate restano applicabili: nessuna modifica a testo, componenti o CSS. Nessun lavoro rimasto, nessun commit creato.

### Completato: résumé home più sintetico

- [x] Testo di presentazione in home abbreviato preservando fatti, nuovo ruolo, attività professionali e accademiche e link. Testo visibile (spazi inclusi, markup escluso, paragrafi separati da uno spazio): 2.739 → 2.189 caratteri, riduzione del 20,08%.
- [x] `bundle exec jekyll build` e `git diff --check` passano; audit di 62 pagine HTML con 0 problemi di SEO/link/asset. Ripetuti i 20 controlli browser a 320/400/768/1440 px con 0 overflow, incluso il menu mobile. Preview Jekyll disponibile su `http://127.0.0.1:4000`. Nessun lavoro rimasto e nessun commit creato.

### Completato: nuovo CV e cambio lavoro

- [x] Individuato il nuovo CV caricato in `files/cv.pdf`; la sostituzione del PDF è una modifica dell'utente da preservare.
- [x] Confrontato il nuovo CV con quello precedente: nuovo ruolo Head of AI in Promoservice Parma da settembre 2026; Keplero AI conclusa ad agosto 2026. Le altre sezioni non hanno novità di contenuto.
- [x] Aggiornati ruolo attuale, biografia e mini résumé della home, inclusi i metadati pertinenti. Aggiunta la nuova esperienza e aggiornata al passato quella in Keplero, preservando i dettagli storici e il suo URL.
- [x] `bundle exec jekyll build` e `git diff --check` passano. Audit delle 62 pagine HTML: 0 problemi per link/asset locali, title/description/canonical/H1, lingua, JSON-LD e alt delle immagini; confermati Person in home, ordine delle nuove esperienze e copia esatta del nuovo PDF nel sito generato.
- [x] Chrome: 20 verifiche su home, listing Experience, dettagli Promoservice/Keplero e University Notes a 320/400/768/1440 px, con 0 overflow e un H1 per pagina. Menu mobile verificato con apertura e chiusura tramite Escape a 320/400 px. Screenshot home a 320/1440 px ispezionati. Analytics e AdSense bloccati durante il test locale.
- [x] Risultati registrati: nessun lavoro richiesto rimasto, nessuna dipendenza aggiunta e nessun commit creato. L'autorizzazione del luglio 2026 riguardava il redesign già completato.

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

- Primary stylesheet source: `assets/css/broadsheet.scss`, compiled to compressed `assets/css/broadsheet.css`.
- Tag renderer and unique hue map: `_includes/tag.html` and `_data/tag_colors.yml`.
- Local fonts: Source Serif 4 in `assets/fonts/`; 21-glyph Phosphor subset in `assets/vendor/phosphor/`.
- Client behavior: `assets/js/broadsheet.js`; mobile navigation, local cookie notice, and University Notes search. Scroll reveal removed to display content immediately.
- Profile asset: `/assets/images/profile.webp` (800 by 800 WebP).
- Home profile presentation: 200 by 200 pixels, circular, no halftone overlay.
- Favicon: `/assets/images/favicon.webp` (64 by 64 WebP, complete-photo composition).
- CV remains `/files/cv.pdf`; the user supplied the updated PDF on 2026-10-03, now reflecting Head of AI at Promoservice Parma.
- University course data remains in `uni/_posts/*.md`; no additional exam-date note was invented because the year grouping already supplies that context.
- Jekyll development command: `bundle exec jekyll serve --host 127.0.0.1 --port 4000`.
- Persistent agent context: `AGENTS.md`; always read it, `HANDOFF.md`, `PRODUCT.md`, and `DESIGN.md` before changing the site.

## Prior completed redesign work

- Added the Broadsheet token system, masthead, identity rail, record rows, project grid, reusable detail include, listing layouts, and University Notes search.
- Reworked detail layouts as thin wrappers over `_includes/detail.html` where appropriate.
- Merged the former `uni/aai.md`, `uni/cp.md`, and `uni/lai.md` bodies into their corresponding course posts.
- Removed obsolete mobile-menu and unused legacy stylesheet assets. Font Awesome is no longer loaded because active Markdown content no longer uses its legacy resource-table icons.
