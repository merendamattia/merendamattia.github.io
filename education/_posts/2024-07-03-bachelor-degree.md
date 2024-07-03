---
layout: education
title: "B.S. in Computer Science"
tags: static-analysis abstract-interpretation EVMLiSA
venue: "Thesis title: Construction of sound Control‑Flow Graphs for bytecode EVM."
location: "University of Parma, Italy"
when: "Sep. 2021 ‑ Jul. 2024"
manuscript: "bachelor-thesis.pdf"
slides: "bachelor-slides.pdf"
---

* Best Marks: Calculus, Programming, Algorithms & DS, Cloud Administration, Database, AI, HPC.
* Got different ERGO scholarships which are given to promising students in Unipr.

# Abstract thesis
Ethereum è una piattaforma blockchain che consente la creazione di un ambiente globale decentralizzato, in cui gli utenti possono sviluppare strumenti digitali sicuri utilizzando la valuta nativa ether (ETH) per transazioni e servizi computazionali.
La rete Ethereum è costituita da nodi interconnessi che seguono regole definite nel protocollo Ethereum, supportando una vasta gamma di comunità, applicazioni, organizzazioni e attività digitali accessibili a chiunque abbia una connessione internet.
La caratteristica principale di Ethereum è la capacità di eseguire smart contract tramite la Ethereum Virtual Machine (EVM), consentendo funzionalità avanzate al di là delle transazioni finanziarie di base (e.g., Bitcoin). Gli smart contract sono programmi immutabili memorizzati sulla blockchain che eseguono azioni predefinite senza l’intervento umano.
Tuttavia, garantire la sicurezza e l’affidabilità degli smart contract è essenziale, poich ́e non possono essere modificati una volta caricati sulla blockchain. La presenza di bug o vulnerabilità potrebbe causare gravi conseguenze, come perdite di fondi o azioni indesiderate, proprio come è accaduto nel 2016 con l’attacco a The DAO.
Per garantire la qualità degli smart contract, vengono sviluppate tecniche di analisi e verifica del codice. L’analisi statica, ad esempio, identifica potenziali problemi di sicurezza senza eseguire effettivamente il codice. Tuttavia, nel contesto di Ethereum, la costruzione di un Control-Flow Graph (CFG) affidabile è complesso a causa delle destinazioni dinamiche dei salti (Jump Orfane) durante l’esecuzione del EVM bytecode.
In questo elaborato viene presentato EVMLiSA, un software in grado di costruire un CFG completo e affidabile di smart contract eseguibili su EVM.

