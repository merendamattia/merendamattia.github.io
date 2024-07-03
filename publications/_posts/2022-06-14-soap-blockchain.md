---
layout: publication
kind: "Workshop paper"
title: "Ensuring Determinism in Blockchain Software with GoLiSA: An Industrial Experience Report"
tags: blockchain static-analysis abstract-interpretation
venue: "Proceedings of the 11th ACM SIGPLAN International Workshop on the State Of the Art in Program Analysis (SOAP 2022)"
location: "San Diego, CA, USA & online"
when: "June 14, 2022"
authors: "L. Olivieri, F. Tagliaferro, V. Arceri, M. Ruaro, L. Negrini, A. Cortesi, P. Ferrara, F. Spoto, E. Tallin"
projects: lisa
manuscript: "SOAP22.pdf"
confpage: "https://pldi22.sigplan.org/details/SOAP-2022-papers/4/Ensuring-Determinism-in-Blockchain-Software-with-GoLiSA-An-Industrial-Experience-Rep"
publishername: "ACM"
publisherpage: "https://dl.acm.org/doi/10.1145/3520313.3534658"
---

### Abstract

Ensuring determinism is mandatory when writing blockchain software. When determinism is not met it can lead to serious implications in the blockchain network while compromising the software development, release, and patching processes. In the industrial context, it is widespread to adopt general-purpose languages, such as Go, for developing blockchain solutions. However, it is not surprising that non-deterministic behaviors may arise, being these programming languages not originally designed for blockchain purposes. In this paper, we present an experience report on ensuring determinism in blockchain software with GoLiSA, a static analyzer based on abstract interpretation for Go applications, in an industrial context. In particular, we ran GoLiSA on Commercio.network, a blockchain-based solution for exchanging electronic documents in a legally binding way. Thanks to GoLiSA, non-trivial bugs got detected and the analysis performed made it possible to identify the critical points where to apply the fixes.
