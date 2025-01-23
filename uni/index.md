---
layout: secondary
---

## Appunti universitari
Potete supportare il mio lavoro con una piccola donazione su 
<a href="https://www.paypal.com/paypalme/merendasaveriomattia" style="color: #003087; ">
    <span style="font-weight: bold;">PayPal</span>.
</a>

### Ripetizioni
Hai bisogno di aiuto per studiare una materia? Puoi contattarmi via <a href="mailto:{{ site.mail-work }}">email</a>.

### ⚠️ Disclaimer ⚠️
È possibile che ci siano alcuni errori e/o imprecisioni: per uno studio adeguato della materia è fondamentale riferirsi principalmente al materiale fornito dal docente e ad i libri di testo consigliati.

<!-- ----------------------- -->

{% assign first_talk = site.categories.uni | first %}
{% assign year = first_talk.date | date: "%Y" %}

<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
{% for post in site.categories.uni %}
	{% assign cur_year = post.date | date: "%Y" %}
	{% if cur_year != year %}
</ul>
		{% assign year = cur_year %} 
<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
	{% endif %}
	<li >
		<table class="responsive-table">
			<tr>
				<td class="title" style="width:40%;"><a href="{{ post.url }}"><b>{{ post.title }}</b>, voto: {{ post.voto }}</a></td>
				<!-- Esercitazioni -->
				<td class="esercitazioni" style="text-align: right; width:17%;">
					{% if post.esercitazioni %}
						<i class="fas fa-book-open"></i> <a target="_blank" href="{{ post.esercitazioni }}">Esercitazioni</a>
					{% else %}
						<span style="opacity: 0;"><i class="fas fa-pen-nib"></i> Esercitazioni</span>
					{% endif %}
				</td>
				<!-- Esercizi -->
				<td class="esercizi" style="text-align: right; width:12%;">
					{% if post.esercizi %}
						<i class="fas fa-pen-nib"></i> <a target="_blank" href="{{ post.esercizi }}">Esercizi</a>
					{% else %}
						<span style="opacity: 0;"><i class="fas fa-pen-nib"></i> Esercizi</span>
					{% endif %}
				</td>
				<!-- Appunti -->
				<td class="appunti" style="text-align: right; width:15%;">
					{% if post.appunti %}
						<i class="fas fa-pen"></i> <a target="_blank" href="{{ post.appunti }}">Appunti</a>
					{% else %}
						<span style="opacity: 0;"><i class="fas fa-pen-nib"></i> Appunti</span>
					{% endif %}
				</td>
				<!-- Github -->
				<td class="github" style="text-align: right; width:10%;">
					{% if post.github %}
						<i class="fas fa-code-branch"></i> <a target="_blank" href="{{ post.github }}">Github</a>
					{% else %}
						<span style="opacity: 0;"><i class="fas fa-pen-nib"></i> Github</span>
					{% endif %}
				</td>
			</tr>
		</table>

	</li>
{% endfor %}
</ul>