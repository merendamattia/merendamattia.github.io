---
layout: default
title: Research Projects
description: Research projects by Saverio Mattia Merenda in artificial intelligence, static analysis, and software verification.
---

<main class="list-main">
	<a class="backlink" href="{{ site.baseurl }}/"><i class="ph ph-arrow-left"></i>Back to home</a>
	<span class="d-kicker">Curriculum</span>
		<h1 class="list-title">Research Projects</h1>

		{% assign year = '' %}
		{% for post in site.categories.research %}
		{% assign cur_year = post.date | date: "%Y" %}
		{% if cur_year != year %}{% assign year = cur_year %}<h2 class="list-year">{{ year }}</h2>{% endif %}
		<a class="row-link" href="{{ post.url }}">
			<span class="rl-title-sm">{{ post.title }}</span>
			<p class="rl-desc-sm">{{ post.venue }} · {{ post.when }} · {{ post.location }}</p>
			<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
		</a>
		<div class="rl-preview">{{ post.content }}</div>
		{% endfor %}

	<footer class="site-footer" style="margin-top:40px">
		© {{ 'now' | date: "%Y" }} Saverio Mattia Merenda · <a href="{{ site.baseurl }}/">Back to home</a>
	</footer>
</main>
