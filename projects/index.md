---
layout: default
title: Projects
description: Software, artificial intelligence, optimization, quantum computing, and blockchain projects by Saverio Mattia Merenda.
---

<main class="list-main">
	<a class="backlink" href="{{ site.baseurl }}/"><i class="ph ph-arrow-left"></i>Back to home</a>
	<span class="d-kicker">Curriculum</span>
		<h1 class="list-title">All projects</h1>

	{% assign pinned_prjs = site.pages | where: "project", true | where: "pinned", true %}
	{% assign unpinned_prjs = site.pages | where: "project", true | where: "pinned", false %}
	{% assign projectlist = pinned_prjs | concat: unpinned_prjs %}
	<div class="pgrid">
			{% for p in projectlist %}
			<a class="pcard" href="{{ p.url }}">
				<span class="pcard-title">{{ p.title }}</span>
				<span class="pcard-desc">{{ p.description }}</span>
				<span class="rl-tags">{% assign langs = p.languages | split: ' ' %}{% for lang in langs %}{% include tag.html label=lang %}{% endfor %}</span>
				<span class="pcard-open">Open <i class="ph ph-arrow-up-right"></i></span>
		</a>
		{% endfor %}
	</div>

	<footer class="site-footer" style="margin-top:40px">
		© {{ 'now' | date: "%Y" }} Saverio Mattia Merenda · <a href="{{ site.baseurl }}/">Back to home</a>
	</footer>
</main>
