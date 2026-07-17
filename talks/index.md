---
layout: default
title: Talks
description: Conference and academic talks by Saverio Mattia Merenda on static analysis and EVM bytecode analysis.
---

<main class="list-main">
	<a class="backlink" href="{{ site.baseurl }}/"><i class="ph ph-arrow-left"></i>Back to home</a>
	<span class="d-kicker">Curriculum</span>
		<h1 class="list-title">All talks</h1>

		{% assign year = '' %}
		{% for post in site.categories.talks %}
		{% assign cur_year = post.date | date: "%Y" %}
		{% if cur_year != year %}{% assign year = cur_year %}<h2 class="list-year">{{ year }}</h2>{% endif %}
		<a class="row-link" href="{{ post.url }}">
			<span class="rl-title-sm">{{ post.title }}</span>
			<p class="rl-desc-sm">{{ post.venue }} · {{ post.kind }} · {{ post.date | date: "%-d %B %Y" }} · {{ post.location }}</p>
			<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
			{% if post.slides or post.attendance %}<p class="rl-availability">{% if post.slides %}<i class="ph ph-file-pdf"></i>Slides available{% endif %}{% if post.slides and post.attendance %} · {% endif %}{% if post.attendance %}<i class="ph ph-file-pdf"></i>Attendance available{% endif %}</p>{% endif %}
		</a>
	{% endfor %}

	<footer class="site-footer" style="margin-top:40px">
		© {{ 'now' | date: "%Y" }} Saverio Mattia Merenda · <a href="{{ site.baseurl }}/">Back to home</a>
	</footer>
</main>
