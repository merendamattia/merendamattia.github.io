---
layout: education
title: "B.S. in Computer Science"
tags: static-analysis abstract-interpretation EVMLiSA
venue: "Thesis title: Construction of sound Control‑Flow Graphs for bytecode EVM."
location: "University of Parma, Italy"
when: "Sep. 2021 ‑ Jul. 2024"
manuscript: "bachelor-thesis.pdf"
slides: "bachelor-slides.pdf"
grade: "108/110"
projects: evmlisa
images: "matematica.jpeg discussione1.jpeg discussione2.jpeg"
---

* Best Marks: Calculus, Programming, Algorithms & DS, Cloud Administration, Database, AI, HPC.
* Got different ERGO scholarships which are given to promising students in Unipr.

# Abstract thesis
Ethereum is a blockchain platform that enables the creation of a decentralized global environment, where users can develop secure digital tools using the native currency ether (ETH) for transactions and computational services. 
The Ethereum network is made up of interconnected nodes that follow rules defined in the Ethereum protocol, supporting a wide range of digital communities, applications, organizations, and businesses that are accessible to anyone with an internet connection. 
Ethereum's main feature is the ability to execute smart contracts via the Ethereum Virtual Machine (EVM), enabling advanced functionality beyond basic financial transactions (e.g., Bitcoin). Smart contracts are immutable programs stored on the blockchain that perform predefined actions without human intervention. 
However, ensuring the security and reliability of smart contracts is essential, as they cannot be modified once uploaded to the blockchain. Bugs or vulnerabilities could cause serious consequences, such as loss of funds or unwanted actions, as happened in 2016 with the attack on The DAO. 
To ensure the quality of smart contracts, code analysis and verification techniques are developed. Static analysis, for example, identifies potential security issues without actually executing the code. 
However, in the context of Ethereum, building a reliable Control-Flow Graph (CFG) is complex due to dynamic jump destinations (Orphan Jumps) during the execution of the EVM bytecode. 
This paper presents EVMLiSA, a software capable of building a complete and reliable CFG of smart contracts that can be executed on EVM.
