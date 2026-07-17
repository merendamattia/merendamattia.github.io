---
layout: default
title: Experience
description: Professional, research, software development, and teaching experience of Saverio Mattia Merenda.
---

<main class="list-main">
	<a class="backlink" href="{{ site.baseurl }}/"><i class="ph ph-arrow-left"></i>Back to home</a>
	<span class="d-kicker">Curriculum</span>
		<h1 class="list-title">Experience</h1>

		{% assign year = '' %}
		{% for post in site.categories.experience %}
		{% assign cur_year = post.date | date: "%Y" %}
		{% if cur_year != year %}{% assign year = cur_year %}<h2 class="list-year">{{ year }}</h2>{% endif %}
		<a class="row-link" href="{{ post.url }}">
			<div class="rl-top"><span class="rl-title">{{ post.title }}</span><span class="rl-date">{{ post.when }}</span></div>
			<p class="rl-desc">{{ post.venue }} · {{ post.location }}</p>
			<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
		</a>
		<div class="rl-preview">{{ post.content }}</div>
		{% endfor %}

	<footer class="site-footer" style="margin-top:40px">
		© {{ 'now' | date: "%Y" }} Saverio Mattia Merenda · <a href="{{ site.baseurl }}/">Back to home</a>
	</footer>
</main>
