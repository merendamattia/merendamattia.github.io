---
layout: publication
kind: "Journal paper"
title: "Design and Implementation of Static Analyses for Tezos Smart Contracts"
tags: blockchain static-analysis abstract-interpretation 
venue: "Distributed Ledger Technologies: Research and Practice"
when: "January 11, 2024"
authors: "L. Olivieri, L. Negrini, V. Arceri, T. Jensen, F. Spoto"
projects: lisa
manuscript: "DLTRP24.pdf"
publishername: "ACM"
publisherpage: "https://dl.acm.org/doi/10.1145/3643567"
---

### Abstract

Once deployed in blockchain, smart contracts become immutable: attackers can exploit bugs and vulnerabilities in their code, that cannot be replaced with a bug-free version. For this reason, the verification of smart contracts before they are deployed in blockchain is important. However, the development of verification tools is not easy, especially if one wants to obtain guarantees by using formal methods. This paper describes the development, from scratch, of a static analyzer based on abstract interpretation for the verification of real-world Tezos smart contracts. The analyzer is generic with respect to the property under analysis. This paper shows taint analysis as a concrete instantiation of the analyzer, at different levels of precision, to detect untrusted cross-contract invocations.
