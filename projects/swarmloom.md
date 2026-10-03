---
layout: project
project: true
pinned: true
priority: 1
projid: swarmloom
languages: AI LLM database
title: "Swarmloom"
description: "AI agent orchestration for GitHub: durable jobs, isolated worktrees, independent review, and human merge."
repo: "https://github.com/merendamattia/swarmloom"
---

Swarmloom coordinates agentic software engineering through GitHub issues and pull requests: issue → implementation → PR → independent review → fix loop → human merge. Implementation, review, and fixes run as separate durable jobs, with independently configured coding and review models behind Codex and OpenCode provider adapters.

The scheduler reconciles GitHub state and queues work; workers execute each implementation in an isolated, persistent Git worktree. BullMQ and Redis handle job delivery and locking, while PostgreSQL stores persistent workflow state, history, events, and review results. Review is tied to the exact PR head commit, and fixes return the updated branch to review.

Retry retains the workspace and, when a Codex session is persisted, resumes that session; jobs without a resumable session restart in the retained worktree. Dashboard state, logs, and event history provide observability for failed or stale jobs. A configurable fix-loop limit and the final human merge decision keep the workflow human-in-the-loop.
