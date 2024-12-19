---
layout: education
title: "M.S. in Computer Science"
tags: quantum-computing software-security machine-learning
venue: "Expected graduation year: July 2026."
location: "University of Parma, Italy"
when: "Sep. 2024 ‑ Present"
# grade: ""
---

* Topics: Software Security, Quantum Computing, Machine Learning & AI, Compilers.

## Declarative Programming
Optimization of Academic Guarantors: A Declarative Approach

In collaboration with [Simone Colli](https://github.com/simonecolli), this project was presented during the *Declarative Programming* course (academic year 2024/25) and focused on developing an automated system for assigning academic guarantors to university courses while adhering to ministerial regulations.

Key highlights include:
- Objective: ensuring each course fulfills the required teaching staff quotas, balancing resources efficiently, and meeting minimum standards across various contractual categories.
- Methodology: the problem was modeled using Answer Set Programming (ASP), incorporating rules, facts, and constraints derived from academic and ministerial data. This approach enabled dynamic configuration and adaptation to real-world scenarios.
- Implementation: a robust data preprocessing phase ensured the integration of incomplete or heterogeneous datasets into a standardized ASP framework. Custom rules optimized resource allocation while minimizing reliance on external contracted staff.
- Validation: tested on datasets ranging from small departmental groups to comprehensive university-wide configurations, the system demonstrated scalability and efficiency. Even under computational constraints, the model effectively prioritized tenured and tenure-track faculty over contracted staff, aligning with institutional guidelines.

This project underscores the potential of declarative programming in solving complex resource allocation problems in academia. The full source code and further documentation are accessible via GitHub.

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Paper:</td>
        <td><a href="{{ site.baseurl }}/files/paper-PD.pdf">PDF</a></td>
      </tr>
      <tr>
      	<td><i class="fas fa-code-branch"></i> Code:</td>
        <td><a href="https://github.com/merendamattia/ottimizzazione-garanti-accademici">GitHub</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Languages, Interpreters, and Compilers
In this seminar for the *Languages, Interpreters, and Compilers* course (cademic year 2024/25), I explored the intricacies of 
blockchain technology and the critical challenges of cross-chain interactions. The seminar focused on the role 
of static analysis in enhancing the security of smart contracts, especially in addressing vulnerabilities in cross-chain bridges.

Key topics included:
- Introduction to Blockchain: understanding decentralized ledgers and their use cases (e.g., Bitcoin, Ethereum).
- Cross-Chain Interoperability Challenges: the inability of blockchains to natively interact and the role of cross-chain smart contracts (bridges).
- Bridge Vulnerabilities: common attack surfaces, including logical flaws and reentrancy attacks.
- SmartAxe: a tool leveraging static analysis for detecting vulnerabilities in smart contracts, highlighting techniques like control-flow analysis, semantic alignment, and taint analysis.

The seminar also presented experimental results demonstrating SmartAxe’s effectiveness in detecting vulnerabilities, 
while acknowledging its limitations, such as false positives, the absence of on-chain analysis, and restricted support for non-EVM blockchains.

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Slides:</td>
        <td><a href="{{ site.baseurl }}/files/slides-LIC.pdf">PDF</a></td>
      </tr>
    </tbody>
  </table>
</div>
