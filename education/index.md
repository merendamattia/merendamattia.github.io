---
layout: default
title: Education
description: Degrees, theses, grades, and academic work by Saverio Mattia Merenda at the University of Parma.
---

<main class="list-main">
	<a class="backlink" href="{{ site.baseurl }}/"><i class="ph ph-arrow-left"></i>Back to home</a>
	<span class="d-kicker">Curriculum</span>
		<h1 class="list-title">Education</h1>

		{% assign year = '' %}
		{% for post in site.categories.education %}
		{% assign cur_year = post.date | date: "%Y" %}
		{% if cur_year != year %}{% assign year = cur_year %}<h2 class="list-year">{{ year }}</h2>{% endif %}
		<a class="row-link" href="{{ post.url }}">
			<div class="rl-top"><span class="rl-title">{{ post.title }}</span><span class="rl-date">{{ post.when }}</span></div>
			<p class="rl-desc">{{ post.venue }} · {{ post.location }}{% if post.grade %} · <strong>{{ post.grade }}</strong>{% endif %}</p>
			<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
			{% if post.manuscript or post.attendance %}<p class="rl-availability">{% if post.manuscript %}<i class="ph ph-file-pdf"></i>Thesis available{% endif %}{% if post.manuscript and post.attendance %} · {% endif %}{% if post.attendance %}<i class="ph ph-file-pdf"></i>Attendance available{% endif %}</p>{% endif %}
		</a>
	{% endfor %}

	<footer class="site-footer" style="margin-top:40px">
		© {{ 'now' | date: "%Y" }} Saverio Mattia Merenda · <a href="{{ site.baseurl }}/">Back to home</a>
	</footer>
</main>
