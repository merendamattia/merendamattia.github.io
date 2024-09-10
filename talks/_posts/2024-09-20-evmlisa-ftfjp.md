---
layout: talk
kind: Conference presentation
title: "Towards a Sound Construction of EVM Bytecode Control-flow Graphs"
tags: static-analysis abstract-interpretation blockchain ethereum smart-contract
venue: "26th ACM International Workshop on Formal Techniques for Java-like Programs (FTfJP 2024)"
location: "Vienna, Austria"
when: "September 20, 2024, 2:00 PM - 2:30 PM CET"
projects: evmlisa
relatedpub: "2024-07-25-FTfJP2024.md"
relatedpubtitle: "Paper @ FTfJP 2024"
confpage: "https://conf.researchr.org/details/issta-ecoop-2024/FTfJP-2024-papers/9/Towards-a-Sound-Construction-of-EVM-Bytecode-Control-flow-Graphs"
slides: "FTfJP2024-slides.pdf"
linkedinpost: ""
publishername: ""
publisherpage: ""
---

### Abstract

Ethereum enables the creation and execution of decentralized applications through smart contracts, that are compiled to Ethereum Virtual Machine (EVM) bytecode. Once deployed in the blockchain, the bytecode is immutable; hence, ensuring that smart contracts are bug-free before their deployment is of utmost importance. A crucial preliminary step for any effective static analysis of EVM bytecode is the extraction of the control-flow graph (CFG): this presents significant challenges due to dynamically computed jump destinations. In this paper we present a novel approach, based on abstract intepretation, aiming at building a sound CFG from EVM bytecode smart contracts. Our analysis, which is implemented in our static analyzer EVMLiSA, is based on a parametric abstract domain that approximates concrete execution stacks at each program point as an l-sized set of abstract stacks of maximal height h; the results of the analysis are then used to resolve the jump destinations at jump nodes. On our preliminary experiments, by fine-tuning the analysis parameters, EVMLiSA builds sound CFGs for all smart contracts where permantent storage-related opcodes do not influence jump destinations.
