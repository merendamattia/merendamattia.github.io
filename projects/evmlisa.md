---
layout: project
project: true
pinned: true
projid: evmlisa
languages: Java static-analysis abstract-interpretation software-verification smart-contract ethereum
title: "EVMLiSA"
description: "An abstract interpretation-based static analyzer for EVM bytecode."
repo: "https://github.com/lisa-analyzer/evm-lisa"
website: "https://lisa-analyzer.github.io/"
---

EVMLiSA is a specific implementation of a static analyzer using the LiSA (<b>Li</b>brary for <b>S</b>tatic <b>A</b>nalysis) library to conduct static analysis of Ethereum Virtual Machine (EVM) bytecode. In particular, it is dedicated to generate a complete Control‑Flow Graph (CFG) of smart contracts deployed on the Ethereum blockchain. EVMLiSA’s primary objective is to provide semantic information and valuable warnings for developers and security auditors.

Grounded in abstract interpretation, EVMLiSA reconstructs a sound and precise CFG directly from bytecode and resolves the dynamic jump destinations (orphan jumps) that make EVM control flow hard to analyze, classifying each jump as resolved, unreachable, or unsound. Precision on looped code is improved through an *abstract stack set* domain, which tracks collections of abstract stacks of configurable size.

On top of this foundation it ships a set of security checkers, including detectors for reentrancy, timestamp dependency, and `tx.origin` vulnerabilities, and — as part of my Master's thesis work — a checker for Access Control Incompleteness in cross-chain bridges. Contracts can be supplied as raw bytecode, files, or on-chain addresses (fetched via the Etherscan API), and the tool runs as a command-line application, a Docker container, or a Java library. Its soundness results have appeared in peer-reviewed venues (*Blockchain: Research and Applications*, 2025; ACM FTfJP, 2024).

EVMLiSA is distributed under the MIT license, and it is available on GitHub.
