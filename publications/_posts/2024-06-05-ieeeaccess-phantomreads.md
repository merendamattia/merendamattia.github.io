---
layout: publication
kind: "Journal paper"
title: "Detection of Phantom Reads in Hyperledger Fabric"
tags: blockchain static-analysis abstract-interpretation
venue: "IEEE Access, Volume 12"
when: "June 5, 2024"
authors: "L. Olivieri, L. Negrini, V. Arceri, B. Chachar, P. Ferrara, A. Cortesi"
projects: lisa
manuscript: "IEEEA24.pdf"
publishername: "IEEE"
publisherpage: "https://ieeexplore.ieee.org/document/10549518"
---

### Abstract

In concurrent transactional systems, a phantom read occurs when a transaction retrieves a set of data, and simultaneously, new data is inserted, updated, or removed from that set by one or more other transactions, leading to unexpected data being read. In Hyperledger Fabric (HF), a popular enterprise-grade framework for developing permissioned blockchain platforms, phantom reads are detected during the transaction validation phase. It inspects the values from read operations and checks their consistency, also re-executing some domain-specific read operations called range queries. However, being HF based on an optimistic concurrency control model, managing an excessive number of conflicts related to phantom reads could result in sudden system slowdowns. Additionally, some kind of range queries are not considered in the validation and verification process. For the latter, the re-execution is not performed and checks are not provided leading to undetected phantom reads when the values returned from them are written to the ledger. Hence, the burden of implementing phantom read-free applications (i.e., smart contracts) is on the developers, who need to correctly manage the read instructions in the code and use automatic verification tools to detect any unsafe implementations leading to system slowdowns and undetectable phantom reads. In this paper, we explore the phantom reads detection problem at the smart contract level and demonstrate how a verification approach through formal methods can identify possible bottlenecks caused by phantom reads and mitigate range query risks, outperforming the current state-of-the-art and state-of-the-practice for their detection. Our approach is implemented with GoLiSA, a semantic static analyzer based on abstract interpretation for Go applications.
