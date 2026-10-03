---
layout: project
project: true
pinned: true
priority: 2
projid: ledgerly
languages: AI LLM database
title: "Ledgerly"
description: "Self-hosted personal finance with queued Wallet ingestion, FX conversion, and deterministic forecasts separated from AI interpretation."
repo: "https://github.com/merendamattia/ledgerly"
---

Ledgerly tracks personal net worth, investments, expenses, and cash flow. A Next.js frontend communicates with a Hono API through typed RPC; the backend owns PostgreSQL, Redis, and external data providers. BullMQ workers handle imports, market-data updates, and financial forecasts so ordinary reads use stored data and cached results.

Apple Wallet ingestion accepts raw transactions through an authenticated integration endpoint. Requests are persisted and queued, with idempotency for repeated payloads. A worker uses Structured Outputs to extract transaction fields and applies date-aware FX conversion into the user's base currency, retaining the original payload for audit and debugging.

The forecasting engine computes financial projections deterministically from observations and model inputs, without delegating calculations to an LLM. Monte Carlo aggregates are stored as reusable snapshots. Optional AI interpretation runs separately on aggregate metrics, is schema-validated and tied to the exact snapshot, and can fail without invalidating the numerical forecast.
