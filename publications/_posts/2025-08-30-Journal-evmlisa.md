---
layout: publication
kind: "Journal paper"
title: "EVMLiSA: Sound Static Control-Flow Graph Construction for EVM Bytecode"
tags: blockchain smart-contract ethereum static-analysis abstract-interpretation
# venue:
when: "Accepted August 29, 2025"
# location: "Vienna, Austria"
authors: "V. Arceri, <u>S.M. Merenda</u>, L. Negrini, L. Olivieri, E. Zaffanella"
projects: evmlisa
# manuscript: ""
publishername: "Elsevier"
# publisherpage: ""
---

### Abstract

Ethereum enables the creation and execution of decentralized applications through smart contracts, that are compiled to Ethereum Virtual Machine (EVM) bytecode. Once deployed in the blockchain, the bytecode is immutable; hence, ensuring that smart contracts are bug-free before their deployment is of utmost importance. A crucial preliminary step for any effective static analysis of EVM bytecode is the extraction of the control-flow graph (CFG): this presents significant challenges due to potentially statically unknown jump destinations. In this paper we present a novel approach, based on Abstract Interpretation, aiming to build a sound CFG from EVM bytecode smart contracts. Our analysis, which is implemented in our static analyzer EVMLiSA, is based on a parametric abstract domain that approximates concrete execution stacks at each program point as an l-sized set of abstract stacks of maximal height h; the results of the analysis are then used to resolve the jump destinations at jump nodes. Furthermore, EVMLiSA includes a checker for reentrancy detection, working on the constructed CFG. Our experiments show that, by fine-tuning the analysis parameters, EVMLiSA is able to build sound CFGs for all real-world smart contracts in the considered benchmark suite. Moreover, EVMLiSA successfully detects all reentrancy vulnerabilities in EVM bytecode smart contracts, while producing a small number of false positives.