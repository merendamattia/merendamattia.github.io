---
layout: education
title: "M.S. in Computer Science"
tags: static-analysis abstract-interpretation software-verification EVMLiSA
venue: "Thesis title: Static Detection of Access Control Incompleteness in EVM Smart Contracts: Relational Taint Analysis for Cross‑Chain Bridges."
location: "University of Parma, Italy"
when: "Sep. 2024 ‑ Jul. 2026"
manuscript: "master-thesis.pdf"
slides: "master-slides.pdf"
grade: "110/110 cum laude"
projects: evmlisa
hide_meta_table: true
---

* Topics: Software Security & Verification, Quantum Computing, Machine Learning & AI, Compilers.
* Graduated on July 9, 2026, with a thesis supervised by Prof. Vincenzo Arceri.

# Abstract thesis
Smart contracts are programs deployed immutably on a blockchain: any bug in the code remains exploitable for the entire lifetime of the contract and can lead to the theft of the funds it manages. Detecting vulnerabilities before deployment is therefore essential, and static analysis is the right tool for this purpose, since it reasons about the properties of the code without executing it and simultaneously considers all possible executions.

Among the most exploited classes of vulnerabilities in recent years is *Access Control Incompleteness*, a condition in which a function that modifies the critical state of a contract is not protected by an adequate authorization check. The compromises of the Ronin and Nomad cross-chain bridges, with losses of 625M USD and 190M USD in 2022 alone, stem from incompleteness of this kind, and it is the most recurrent vulnerability class in this context.

This thesis proposes a static checker for detecting Access Control Incompleteness in cross-chain bridges starting from EVM bytecode alone. The checker is built on top of [EVMLiSA](https://github.com/lisa-analyzer/evm-lisa), a static analyzer based on the LiSA framework and Abstract Interpretation. The thesis formalizes the core of EVMLiSA and proves soundness and termination of the Control-Flow Graph construction; on top of this graph, a relational taint analysis tracks the provenance of untrusted values at the program-point level and verifies that every path from a *source* to a *sink* passes through an authorization *sanitizer*. The evaluation covers 16 real cross-chain bridges, 1,003 contracts in total (109,952 lines of bytecode) against a ground truth of 301 manually validated vulnerabilities, achieving 100% recall and precision from 73.24% (ABI only) up to 94.36% in the modifier-aware configuration.

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Thesis:</td>
        <td><a href="{{ site.baseurl }}/files/master-thesis.pdf">PDF</a></td>
      </tr>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Slides:</td>
        <td><a href="{{ site.baseurl }}/files/master-slides.pdf">PDF</a></td>
      </tr>
      <tr>
      	<td><i class="fas fa-laptop-code"></i> Associated project:</td>
        <td><a href="{{ site.baseurl }}/projects/evmlisa">EVMLiSA</a></td>
      </tr>
    </tbody>
  </table>
</div>

<br>
<img src="/images/magistrale.webp" alt="magistrale.webp" style="display: block; margin-left: auto; margin-right: auto; width: 80%;">

---

## Constraint Programming
#### Project: Sorting as a Planning Problem

Presented during the *Constraint Programming* course (academic year 2025/26), this project explored modeling the sorting of a permutation vector as a discrete-time planning problem. The challenge was to identify the minimum sequence of pairwise swaps required to reach a sorted state, addressing the combinatorial explosion typical of CP-based planning approaches.

Key highlights include:
- Objective: to find the minimum plan length $k$ required to sort a permutation of $N$ integers through pairwise swaps, optimizing search efficiency even for large problem instances ($N=30$).
- Methodology: implemented dual representation using channeling constraints (`inverse` global constraint) to synchronize value-based and position-based views of the vector. Applied Generalized Arc Consistency (GAC) using Régin's algorithm for permutations. Deployed mathematical pruning through parity constraints and optimal swap properties to reduce the branching factor from $O(N^2)$ to $O(N)$.
- Implementation: developed an advanced iterative deepening meta-solver in Python integrated with MiniZinc/Gecode backend. Implemented theoretical lower bounds using cycle decomposition to bypass expensive UNSAT phases. Conducted comprehensive benchmarking of 12 search strategies, including variable/value selection heuristics (first_fail, dom_w_deg, max_regret) and restart policies (Luby, Geometric, Linear).
- Outcome: demonstrated significant performance improvements through constraint programming optimizations, achieving efficient solving for permutations up to $N=30$. Generated visualization charts analyzing execution time, success rates, strategy rankings, and correlations between plan length and solving time. The project underscored the effectiveness of combining dual representation, GAC, and mathematical pruning in reducing the search space.

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Paper:</td>
        <td><a href="{{ site.baseurl }}/files/paper-CP.pdf">PDF</a></td>
      </tr>
      <tr>
      	<td><i class="fas fa-code-branch"></i> Code:</td>
        <td><a href="https://github.com/merendamattia/sorting-as-a-planning-problem">GitHub</a></td>
      </tr>
    </tbody>
  </table>
</div>


## Artificial Intelligence Laboratory
#### Project: Maximum Common Edge Subgraph (MCES) - Algorithm Implementation and Analysis

Developed during the *Artificial Intelligence Laboratory* course (academic year 2025/26), this project addressed the Maximum Common Edge Subgraph (MCES) problem, a fundamental NP-complete problem in graph theory. Given two graphs $G_1$ and $G_2$, the objective is to find a common subgraph H with the maximum number of edges that is isomorphic to both graphs.

Key highlights include:
- Objective: to implement and benchmark a comprehensive suite of algorithms spanning the entire spectrum from exact methods to heuristics, evaluating their trade-offs in terms of solution quality, execution time, and scalability.
- Methodology: implemented six distinct algorithms including Brute Force, Brute Force with Pruning and Backtracking, Connected MCES, Greedy Path heuristic, Integer Linear Programming (ILP) using the PuLP solver, and Simulated Annealing metaheuristic. Each algorithm returns node mappings, preserved edges, and detailed performance statistics (time, explored space, optimality, memory usage).
- Implementation: developed a robust benchmarking infrastructure with parallel execution (5 worker threads), process-based timeouts, fixed random seeds for reproducibility, and real-time CSV output with file locking. Created an interactive web visualizer with Flask backend and JavaScript frontend featuring random graph generation, side-by-side visualization with force-directed layout, real-time algorithm execution, and performance statistics display.
- Validation: conducted systematic performance analysis across graphs of varying sizes and densities, generating comprehensive visualization plots including performance summaries, scalability analysis, heatmaps, solution quality comparisons, and timeout analysis. Demonstrated the practical applicability of different algorithmic approaches in computational chemistry, biology, pattern recognition, and social network analysis.

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-code-branch"></i> Code:</td>
        <td><a href="https://github.com/merendamattia/mces">GitHub</a></td>
      </tr>
    </tbody>
  </table>
</div>


## Artificial Intelligence Industrial Applications
#### Project: Personal Financial AI Agent

Developed for the *Artificial Intelligence Industrial Applications* course (academic year 2025/26), this project created an intelligent personal financial advisor leveraging Retrieval-Augmented Generation (RAG) and multi-provider LLM support. The system provides expert financial guidance through natural language interactions while ensuring privacy and flexibility in model selection.

Key highlights include:
- Objective: to develop an AI-powered financial advisory system capable of extracting investor profiles through conversational interactions and generating personalized portfolio recommendations based on historical data and risk assessment.
- Methodology: implemented a multi-stage pipeline consisting of agent selection (Ollama, Google Gemini, OpenAI), interactive conversation for financial assessment, AI-driven profile extraction, and RAG-enhanced portfolio generation. Integrated retrieval mechanisms accessing 10-year historical return data for comprehensive asset analysis. Applied privacy-first design principles with full offline support through Ollama for local inference.
- Implementation: developed using Python and Streamlit for the interactive interface, incorporating support for multiple LLM providers with dynamic provider detection. Implemented robust profile management capabilities including JSON-based load, save, and download functionality. Created comprehensive testing suite with pytest and established DevOps automation with Docker containerization (multi-stage builds for backend and frontend), Docker Compose orchestration, and CI/CD pipelines.
- Outcome: delivered a production-ready application with multi-language support, enabling users to communicate in their preferred language. Demonstrated the effectiveness of RAG in enhancing financial decision-making by combining LLM reasoning with factual historical data. The system balances privacy concerns (local inference with Ollama) with performance flexibility (cloud-based Gemini/OpenAI), making it adaptable to different user requirements and deployment scenarios.

<div class="divtable">
  <table>
    <tbody>
      <tr>
      	<td><i class="fas fa-file-pdf"></i> Paper:</td>
        <td><a href="{{ site.baseurl }}/files/paper-AIAI.pdf">PDF</a></td>
      </tr>
      <tr>
      	<td><i class="fas fa-code-branch"></i> Code:</td>
        <td><a href="https://github.com/merendamattia/personal-financial-ai-agent">GitHub</a></td>
      </tr>
    </tbody>
  </table>
</div>


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
