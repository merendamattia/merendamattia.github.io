---
layout: project
project: true
pinned: true
priority: 4
projid: crosschain-policy-agent
languages: Python LLM software-verification smart-contract ethereum
title: "EVM Cross-chain Policy Agent"
description: "LLM-assisted Solidity analysis that maps cross-chain calls, events, and destination functions into structured policy JSON."
repo: "https://github.com/merendamattia/crosschain-policy-agent"
---

EVM Cross-chain Policy Agent analyzes Solidity source files to identify cross-chain calls, related events, and destination functions. It uses language-model clients to extract these relationships and normalizes them into a canonical JSON representation for security and audit pipelines.

The output schema maps source functions and their events to destination functions, providing a structured artifact for downstream tooling. A Python command-line interface accepts a source directory, an output file, and a provider selection; OpenAI, Gemini, and Ollama clients support cloud or local model execution. Docker packages the same analysis workflow for repeatable integration.
