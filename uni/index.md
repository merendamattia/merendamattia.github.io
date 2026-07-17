---
layout: default
title: Appunti universitari
description: Appunti, esercizi, esercitazioni e repository dei corsi di Informatica dell'Università di Parma.
lang: it
---

<main class="notes-main">

	<span class="kicker" style="margin-bottom:14px">Computer Science · University of Parma</span>
	<h1 class="notes-title">Appunti universitari</h1>
	<div class="notes-copy">
		<p>Potete supportare il mio lavoro con una piccola donazione su <a href="https://www.paypal.com/paypalme/merendasaveriomattia" target="_blank" rel="noopener">PayPal</a>.</p>
		<h2>Ripetizioni</h2>
		<p>Hai bisogno di aiuto per studiare una materia? Puoi contattarmi via <a href="mailto:{{ site.mail-work }}">email</a>.</p>
		<h2><i class="ph ph-warning"></i> Disclaimer</h2>
		<p>È possibile che ci siano alcuni errori e/o imprecisioni: per uno studio adeguato della materia è fondamentale riferirsi principalmente al materiale fornito dal docente e ad i libri di testo consigliati.</p>
	</div>

	<!-- live search -->
	<div class="search-wrap">
		<i class="ph ph-magnifying-glass"></i>
		<input class="input" id="course-search" type="search" placeholder="Cerca un corso…" aria-label="Cerca un corso" />
	</div>
	{% assign groups = site.categories.uni | group_by_exp: "post", "post.date | date: '%Y'" %}
	<p class="count" id="course-count">{{ site.categories.uni | size }} corsi · {{ groups | size }} anni</p>

	{% for yg in groups %}
	<section class="yeargroup">
		<div class="yearhead">
			<h2>{{ yg.name }}</h2>
		</div>
		{% for post in yg.items %}
		<div class="course" data-name="{{ post.title | downcase }}">
			<span class="gradechip">voto: {{ post.voto }}</span>
			<a class="cname" href="{{ post.url }}">{{ post.title }}</a>
			<div class="res-row">
				{% if post.esercitazioni %}<a class="res" href="{{ post.esercitazioni }}" target="_blank" rel="noopener"><i class="ph ph-chalkboard"></i>Esercitazioni</a>{% endif %}
				{% if post.esercizi %}<a class="res" href="{{ post.esercizi }}" target="_blank" rel="noopener"><i class="ph ph-pencil-line"></i>Esercizi</a>{% endif %}
				{% if post.appunti %}<a class="res" href="{{ post.appunti }}" target="_blank" rel="noopener"><i class="ph ph-note"></i>Appunti</a>{% endif %}
				{% if post.github %}<a class="res" href="{{ post.github }}" target="_blank" rel="noopener"><i class="ph ph-github-logo"></i>Github</a>{% endif %}
			</div>
		</div>
		{% endfor %}
	</section>
	{% endfor %}

	<p class="no-results" id="no-results"></p>

	<footer class="site-footer" style="margin-top:40px">
		© {{ 'now' | date: "%Y" }} Saverio Mattia Merenda · <a href="{{ site.baseurl }}/">Back to home</a>
	</footer>
</main>
