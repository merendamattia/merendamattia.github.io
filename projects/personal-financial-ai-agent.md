---
layout: project
project: true
pinned: true
priority: 6
projid: personal-financial-ai-agent
languages: Python AI LLM
title: "Personal Financial AI Agent"
description: "Financial AI assistant with OpenAI, Gemini, or local Ollama inference, RAG, portfolio analysis, and Docker deployment."
repo: "https://github.com/merendamattia/personal-financial-ai-agent"
---

Personal Financial AI Agent is a Python financial assistant with configurable OpenAI, Gemini, and Ollama providers. A conversational interface extracts a financial profile, then uses retrieval-augmented generation (RAG) to support portfolio analysis with historical asset data.

Provider selection separates the application workflow from model execution, allowing local inference with Ollama alongside cloud APIs. Financial profiles can be saved and loaded as JSON. Docker and Docker Compose package the application and its optional Ollama service for self-hosted deployment.
