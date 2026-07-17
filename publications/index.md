---
layout: default
title: Publications
description: Peer-reviewed publications by Saverio Mattia Merenda on static analysis, EVM bytecode, and blockchain security.
---

<main class="list-main">
	<a class="backlink" href="{{ site.baseurl }}/"><i class="ph ph-arrow-left"></i>Back to home</a>
	<span class="d-kicker">Curriculum</span>
		<h1 class="list-title">All publications</h1>

		{% assign year = '' %}
		{% for post in site.categories.publications %}
		{% assign cur_year = post.date | date: "%Y" %}
		{% if cur_year != year %}{% assign year = cur_year %}<h2 class="list-year">{{ year }}</h2>{% endif %}
		<a class="row-link" href="{{ post.url }}">
			<span class="rl-title-sm">{{ post.authors }}. {{ post.title }}</span>
			<p class="rl-desc-sm">{{ post.venue }} · {{ post.kind }} · {{ post.date | date: "%-d %B %Y" }} · {{ post.location }}</p>
			<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
			{% if post.manuscript %}<p class="rl-availability"><i class="ph ph-file-pdf"></i>PDF available</p>{% endif %}
		</a>
	{% endfor %}

	<footer class="site-footer" style="margin-top:40px">
		© {{ 'now' | date: "%Y" }} Saverio Mattia Merenda · <a href="{{ site.baseurl }}/">Back to home</a>
	</footer>
</main>
