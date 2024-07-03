---
layout: talk
kind: Conference presentation
title: "Twinning Automata and Regular Expressions for String Static Analysis"
tags: string-analysis static-analysis abstract-interpretation
venue: "22nd International Conference on Verification, Model Checking, and Abstract Interpretation (VMCAI 2021)"
location: "Online conference"
when: "January 18, 2021, 5:15 PM - 5:30 PM CET"
projects: tarsis
relatedpub: "2021-01-18-vmcai-tarsis.md"
relatedpubtitle: "Paper @ VMCAI 2021"
confpage: "https://popl21.sigplan.org/details/VMCAI-2021-papers/6/Twinning-automata-and-regular-expressions-for-string-static-analysis"
---

### Abstract

In this paper we formalize TARSIS, a new abstract domain based on the abstract interpretation theory that approximates string values through finite state automata. The main novelty of TARSIS is that it works over an alphabet of strings instead of single characters. On the one hand, such an approach requires a more complex and refined definition of the widening operator, and the abstract semantics of string operators. On the other hand, it is in position to obtain strictly more precise results than state-of-the-art approaches. We implemented a prototype of TARSIS, and we applied it to some case studies taken from some of the most popular Java libraries manipulating string values. The experimental results confirm that TARSIS is in position to obtain strictly more precise results than existing analyses.
