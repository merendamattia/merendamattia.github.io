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

## Development of Reliable, Safe and Secure Software
#### Isolette: UI Simulation & Scenario Visualization for Safety-Critical Systems

Isolette is a model project for the development of safety-critical software, simulating a neonatal incubator system that monitors and controls temperature to ensure infant health. The project emphasizes formal specifications, deterministic behavior, and testability under strict requirements.

- Contributed to the User Interface Hardware (UIH) layer, defining and implementing both the UIH and its simulator (UIHS) to ensure behavioral consistency during simulation.
- Developed the web UI in Vue and TypeScript, with strict client-side JSON validation and a clear interface displaying time, messages, real-time temperature charts, and a time slider for interactive inspection.
- Designed and implemented a Scenario Visualization Framework to replace gnuplot, leveraging Vue, Chart.js, and modular design to produce dynamic, interactive, and navigable scenario visualizations.
- The result is a scalable, browser-based visualization frontend that improves usability, speeds up development, and removes external dependencies.


## Fundamentals of Artificial Intelligence
#### Project: Impact of Data Preprocessing on Neural Network Performance: A Comparative Analysis

This project, part of the *Fundamentals of Artificial Intelligence* course, investigated how different data preprocessing techniques affect the performance of neural networks. It aimed to compare neural network effectiveness on clean versus unfiltered datasets.   

Key highlights include:
- Objective: To study and compare how neural network effectiveness varies when using datasets with and without various preprocessing steps, such as NaN value handling (removal, imputation with mean, mode, median), outlier removal (Isolation Forest), normalization (z-score), and quantile transformation.   
- Methodology: Implemented a comprehensive preprocessing pipeline and evaluated scenarios on multiple classification (Census Income, Bank Marketing) and regression (Bike Sharing, House Pricing) datasets using a feed-forward neural network.  Performance was measured using standard metrics like Accuracy, Precision, Recall, F1-score for classification, and MAE, MSE, R2 for regression.   
- Outcome: Identified that mode/median imputation and moderate outlier removal (3-5% thresholds) were generally effective preprocessing techniques. Quantile transformations were found to be essential for skewed data, while simple normalization often degraded performance. The study underscored that aggressive preprocessing can remove valuable patterns and complex combinations do not guarantee improvements, offering insights into selecting appropriate techniques.

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Slides:</td>
        <td><a href="{{ site.baseurl }}/files/slides-FdAI.pdf">PDF</a></td>
      </tr>
      <tr>
      	<td><i class="fas fa-code-branch"></i> Code:</td>
        <td><a href="https://github.com/merendamattia/neural-network-performance-by-data-quality">GitHub</a></td>
      </tr>
    </tbody>
  </table>
</div>


## Big Data and Data Mining
#### Project 1: Interpretable Machine Learning Techniques
Presented as part of the *Big Data and Data Mining* course, this project delved into the critical challenge of understanding "black box" machine learning models. The work explored various techniques to enhance model transparency and explainability, which are crucial for building trust and ensuring fairness in AI systems.   

Key highlights include:
- Objective: Investigated methods to interpret ML model decisions, aiming to improve trust in AI, facilitate model debugging, ensure fairness, and extract actionable insights from data.   
- Methodology: Explored the distinction between intrinsic and post-hoc interpretability, and global versus local explanation methods.  Key techniques studied included LIME for generating local, model-agnostic explanations and feature importance for understanding global model behavior.   
- Outcome: Developed a strong understanding of applying interpretability techniques for model validation, identifying potential biases, and debugging ML systems. Recognized the importance of creating user-friendly explanations and acknowledged the current limitations and future directions in Explainable AI (xAI).

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Slides:</td>
        <td><a href="{{ site.baseurl }}/files/slides-BDDM.pdf">PDF</a></td>
      </tr>
    </tbody>
  </table>
</div>

#### Project 2: GraphQL API Design and Comparative Analysis
This project, undertaken for the *Big Data and Data Mining* course, and in collaboration with Pasquale Castelluccia, focused on addressing the inherent inefficiencies of traditional REST APIs, such as over-fetching and under-fetching of data. The core task was to design and analyze an API using GraphQL to optimize data retrieval.   

Key highlights include:
- Objective: To design and prototype a data access layer using GraphQL, enabling clients to request precisely the data they need in a single call, thereby improving efficiency and flexibility.   
- Methodology: Mastered fundamental GraphQL concepts, including schema design using Schema Definition Language (SDL) to define data types and relationships.  Implemented GraphQL queries for efficient data fetching and mutations for data manipulation.  Conducted a comparative analysis of the GraphQL approach against traditional REST patterns, evaluating performance metrics.   
- Outcome: Demonstrated GraphQL's advantages in minimizing network latency, reducing payload sizes through precise data fetching, and enhancing developer productivity by decoupling client data needs from backend endpoint structures.  Gained practical experience in developing modern, efficient, and client-centric APIs.   

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Slides:</td>
        <td><a href="{{ site.baseurl }}/files/slides-BDDM-graphql.pdf">PDF</a></td>
      </tr>
    </tbody>
  </table>
</div>


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
