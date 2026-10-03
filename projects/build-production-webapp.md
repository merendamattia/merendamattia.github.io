---
layout: project
project: true
pinned: true
priority: 3
projid: build-production-webapp
languages: AI database
title: "Build Production Web App"
description: "Installable coding-agent skill combining engineering practices with a Bun, Next.js, Hono, Prisma, and Docker starter."
repo: "https://github.com/merendamattia/skills"
---

Build Production Web App is an installable agent skill for building, extending, and reviewing production web applications. It packages engineering practices and focused references for frontend design, React performance, backend architecture, authentication, durable jobs, and delivery in the standard `SKILL.md` format.

The included Bun workspace starter combines Next.js, Hono typed RPC, Prisma, PostgreSQL, Redis, and Docker Compose. Better Auth provides authentication; a separate BullMQ worker uses PostgreSQL-backed job state for durable background work. Local and production Compose configurations and GitHub Actions accompany the application.

Coding agents begin with product requirements and the existing repository, then load the references relevant to the task. New applications can adapt the starter; existing applications can use the guidance without replacing their stack. The skill can be installed with `npx skills add merendamattia/skills -g`.
