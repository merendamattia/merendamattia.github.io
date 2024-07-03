---
layout: talk
kind: Conference presentation
title: "Static Analysis of Data Transformations in Jupyter Notebooks"
tags: data-science static-analysis abstract-interpretation jupyter-notebooks
venue: "12th ACM SIGPLAN International Workshop on the State Of the Art in Program Analysis (SOAP 2023)"
location: "Orlando FL USA (Virtual talk)"
when: "June 17, 2023, 9:30 AM - 10:00 AM EST"
projects: lisa
relatedpub: "2023-06-17-soap-dataframes.md"
relatedpubtitle: "Paper @ SOAP 2023"
confpage: "https://pldi23.sigplan.org/details/SOAP-2023-papers/1/Static-Analysis-of-Data-Transformations-in-Jupyter-Notebooks"
---

### Abstract

Jupyter notebooks used to pre-process and polish raw data for data science and machine learning processes are challenging to analyze. Their data-centric code manipulates dataframes through call to library functions with complex semantics, and the properties to track over it vary widely depending on the verification task. This paper presents a novel abstract domain that simplifies writing analyses for such programs, by extracting a unique CFG from the notebook that contains all transformations applied to the data. Several properties can then be determined by analyzing such CFG, that is simpler than the original Python code. We present a first use case that exploits our analysis to infer the required shape of the dataframes manipulated by the notebook.
