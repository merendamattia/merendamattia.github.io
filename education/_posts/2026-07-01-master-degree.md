---
layout: education
title: "M.S. in Computer Science"
tags: software-security quantum-computing machine-learning AI
venue: "Expected graduation year: July 2026."
location: "University of Parma, Italy"
when: "Sep. 2024 ‑ Present"
# grade: ""
---

* Topics: Software Security & Verification, Quantum Computing, Machine Learning & AI, Compilers.

---


## Quantum Computing
#### Project: Quantum Portfolio Optimization

In collaboration with [Simone Colli](https://github.com/simonecolli), this project was presented during the *Quantum Computing* course (academic year 2024/25) and explored the application of quantum computing to portfolio optimization in financial contexts. The project compared classical optimization methods with quantum approaches leveraging the Variational Quantum Eigensolver (VQE) and the Quantum Approximate Optimization Algorithm (QAOA).

Key highlights include:
- Objective: formulated the portfolio optimization problem as a Quadratic Unconstrained Binary Optimization (QUBO) problem to balance risk and returns in asset allocation.
- Methodology: implemented quantum algorithms using Qiskit, modeling the problem through expected returns, covariance matrices, and penalty terms for constraint violations.
- Implementation: simulated the algorithms under both noiseless and noisy conditions to evaluate performance and robustness.
- Validation: results demonstrated that quantum approaches, particularly QAOA, can approximate optimal solutions effectively while highlighting current hardware limitations.

This project underscores the potential of quantum computing in addressing complex optimization problems in finance, despite current scalability challenges. The source code is available on GitHub.

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Slides:</td>
        <td><a href="{{ site.baseurl }}/files/slides-QC.pdf">PDF</a></td>
      </tr>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Paper:</td>
        <td><a href="{{ site.baseurl }}/files/paper-QC.pdf">PDF</a></td>
      </tr>
      <tr>
      	<td><i class="fas fa-code-branch"></i> Code:</td>
        <td><a href="https://github.com/merendamattia/quantum-portfolio-optimization">GitHub</a></td>
      </tr>
    </tbody>
  </table>
</div>


## Cyber ​​Security
Presented during the *Cyber Security* course (academic year 2024/25), this seminar analyzed the 2016 Bitfinex hack, one of the most significant events in cryptocurrency history. The analysis examined vulnerabilities in multi-signature wallets and the sophisticated laundering strategy used by cybercriminals.

Key highlights include:
- Objective: investigated the vulnerability exploited in Bitfinex's multi-signature wallet configuration and its impact on cryptocurrency security.
- Methodology: analyzed the N-of-M scheme employed by Bitfinex and BitGo, identifying weaknesses in transaction approval and monitoring mechanisms.
- Case Study: documented the attackers' laundering process, involving over 2,000 transactions, mixers, and integration of stolen funds into the traditional banking system.
- Outcome: discussed the recovery of $3.6 billion worth of Bitcoin by U.S. authorities in 2022, marking the largest financial seizure in the history of the Department of Justice.

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Slides:</td>
        <td><a href="{{ site.baseurl }}/files/slides-SI.pdf">PDF</a></td>
      </tr>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Paper:</td>
        <td><a href="{{ site.baseurl }}/files/paper-SI.pdf">PDF</a></td>
      </tr>
    </tbody>
  </table>
</div>


## Declarative Programming
#### Project: Optimization of Academic Guarantors

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
