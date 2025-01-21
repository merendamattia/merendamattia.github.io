---
layout: project
project: true
pinned: true
projid: qpo
languages: Python
title: "Quantum Portfolio Optimization"
description: "Quantum Computing-based tool for optimizing portfolio allocation, enhancing traditional methods for improved risk-return management."
repo: "https://github.com/merendamattia/quantum-portfolio-optimization"
---

## Quantum Portfolio Optimization

In collaboration with [Simone Colli](https://github.com/simonecolli), this project was presented during the *Quantum Computing* course (academic year 2024/25) and explored the application of quantum computing to portfolio optimization in financial contexts. The project compared classical optimization methods with quantum approaches leveraging the Variational Quantum Eigensolver (VQE) and the Quantum Approximate Optimization Algorithm (QAOA).

Key highlights include:
	•	Objective: Formulated the portfolio optimization problem as a Quadratic Unconstrained Binary Optimization (QUBO) problem to balance risk and returns in asset allocation.
	•	Methodology: Implemented quantum algorithms using Qiskit, modeling the problem through expected returns, covariance matrices, and penalty terms for constraint violations.
	•	Implementation: Simulated the algorithms under both noiseless and noisy conditions to evaluate performance and robustness.
	•	Validation: Results demonstrated that quantum approaches, particularly QAOA, can approximate optimal solutions effectively while highlighting current hardware limitations.

This project underscores the potential of quantum computing in addressing complex optimization problems in finance, despite current scalability challenges. The source code is available on GitHub.