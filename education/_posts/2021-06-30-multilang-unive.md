---
layout: talk
kind: Seminar
title: "Modular Multi‑language analysis in LiSA"
tags: static-analysis abstract-interpretation multilanguage-analysis
venue: "Università Ca’ Foscari Venezia"
location: "Venice, Italy (Virtual talk)"
when: "June 30, 2021, 10:00 AM - 10:30 AM CEST"
projects: lisa
---

### Abstract

One of the biggest challenges in static analysis is multi-language analysis. Modern programs are often split into different modules written in different languages, and analyzing them in isolation provides partial/inaccurate results, while formalizing an analysis that treat the same construct differently depending on the semantics of the source language is challenging. The aim of this talk is to introduce LiSA, a library for static analysis that focuses on multi-language analysis. LiSA is also modular, meaning that each component of the analysis has no knowledge on what lies outside of its scope: this enables effortless plugging of different in different analyses to obtain different levels of precision.
