---
layout: talk
kind: Tutorial
title: "Getting started with LiSA"
tags: static-analysis abstract-interpretation teaching
venue: "Lipari Summer School 2024"
location: "Lipari, Sicily, Italy"
when: "June 24, 2024, 1:00 PM - 4:30 PM CEST"
projects: lisa
confpage: "https://absint24.liparischool.it/"
---

### Abstract

The development of a fully semantic static analyzer based on the Abstract Interpretation theory requires theoretical knowledge, development skills, and quite a lot of time. Usually, such analyzers require the development of a parser, and several standard components for the analysis (such as fixpoint computations, standard abstraction of values and heap structures, etc..). Unfortunately, the current industrial trend is to develop and adopt syntactic analyzers (that are usually quite imprecise and unsound) instead of adopting more semantics approaches (usually more precise and sound[y]). LiSA (LIbrary for Static Analysis, [https://github.com/lisa-analyzer](https://github.com/lisa-analyzer)) aims to ease the creation and implementation of those static analyzers by providing the implementations of the main analysis components. In this tutorial, we will explain how one can use such a library to implement some standard value abstractions, and property checkers.

Work partially supported by SERICS (PE00000014) project funded by PNRR NextGeneration EU.
