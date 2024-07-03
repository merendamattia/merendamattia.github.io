---
layout: publication
kind: "Conference paper"
title: "Information Flow Analysis for Detecting Non-Determinism in Blockchain"
tags: blockchain static-analysis abstract-interpretation 
venue: "Proceedings of the 37th European Conference on Object-Oriented Programming (ECOOP 2023)"
location: "Seattle, Washington, USA"
when: "July 11, 2023"
authors: "L. Olivieri, V. Arceri, L. Negrini, F. Tagliaferro, P. Ferrara, A. Cortesi, F. Spoto"
projects: lisa
manuscript: "ECOOP23.pdf"
confpage: "https://2023.ecoop.org/details/ecoop-2023-papers/9/Flow-Analysis-for-Detecting-Non-Determinism-in-Blockchain"
publishername: "Dagstuhl’s LIPIcs"
publisherpage: "https://doi.org/10.4230/LIPIcs.ECOOP.2023.23"
---
    

### Abstract

A mandatory feature for blockchain software, such as smart contracts and decentralized applications, is determinism. In fact, non-deterministic behaviors do not allow blockchain nodes to reach one common consensual state or a deterministic response, which causes the blockchain to be forked, stopped, or to deny services. While domain-specific languages are deterministic by design, general-purpose languages widely used for the development of smart contracts such as Go, provide many sources of non-determinism. However, not all non-deterministic behaviours are critical. In fact, only those that affect the state or the response of the blockchain can cause problems, as other uses (for example, logging) are only observable by the node that executes the application and not by others. Therefore, some frameworks for blockchains, such as Hyperledger Fabric or Cosmos SDK, do not prohibit the use of non-deterministic constructs but leave the programmer the burden of ensuring that the blockchain application is deterministic. In this paper, we present a flow-based approach to detect non-deterministic vulnerabilities which could compromise the blockchain. The analysis is implemented in GoLiSA, a semantics-based static analyzer for Go applications. Our experimental results show that GoLiSA is able to detect all vulnerabilities related to non-determinism on a significant set of applications, with better results than other open-source analyzers for blockchain software written in Go.
