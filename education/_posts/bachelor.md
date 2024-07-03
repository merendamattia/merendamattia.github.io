---
layout: talk
kind: Workshop presentation
title: "B.S. in Computer Science"
tags: library-models software-frameworks static-analysis
venue: "The Ninth Workshop on Tools for Automatic Program Analysis (TAPAS 2018)"
location: "University of Parma, Italy"
when: "Sep. 2021 ‑ Jul. 2024"
manuscript: "TAPAS18.pdf"
---

### Abstract

Modern object-oriented applications make heavy use of frameworks like AspectJ and ASP.NET. These frameworks not only provide some library code, but they often extend and modify the execution model of the object oriented software. Therefore, a precise static analysis on such applications needs to take into account such execution models, since each framework may modify either the structure and/or the behavior of the application under analysis. In this paper we introduce SARL, a domain-specific language that allows to specify the behaviors of frameworks. Such language can be applied to object-oriented programs using these frameworks to annotate some components in order to model the framework’s behavior. The experimental results show that the number of false alarms produced by an industrial static analyzer (Julia) can be greatly decreased using SARL.
