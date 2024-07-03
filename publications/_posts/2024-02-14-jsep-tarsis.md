---
layout: publication
kind: "Journal paper"
title: "Tarsis: An effective automata-based abstract domain for string analysis"
tags: string-analysis static-analysis abstract-interpretation
venue: "In Journal of Software: Evolution and Processes"
when: "February 14, 2024"
authors: "L. Negrini, V. Arceri, A. Cortesi, P. Ferrara"
projects: lisa
manuscript: "JSEP24.pdf"
publishername: "Wiley"
publisherpage: "https://onlinelibrary.wiley.com/doi/10.1002/smr.2647"
---

### Abstract

In this paper, we introduce Tarsis, a new abstract domain based on the abstract interpretation theory that approximates string values through finite state automata. The main novelty of Tarsis is that it works over an alphabet of strings instead of single characters. On the one hand, such an approach requires a more complex and refined definition of the lattice operators and of the abstract semantics of string operators. On the other hand, it is in position to obtain strictly more precise results than state-of-the-art approaches. We compare Tarsis both with simpler domains and with the standard automata model, targeting case studies containing standard yet challenging string manipulations. The performance gain w.r.t. the standard automata model is also assessed, measuring the speed-up gained by Tarsis. Experiments confirm that Tarsis can obtain precise results without incurring in excessive computational costs.
