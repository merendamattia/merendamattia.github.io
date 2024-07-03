---
layout: secondary
---

## Appunti universitari
Potete supportare il mio lavoro facendo una piccola donazione su [Paypal](https://www.paypal.com/paypalme/merendasaveriomattia).

### Ripetizioni
Hai bisogno di aiuto per studiare una materia? Puoi contattarmi via <a href="mailto:{{ site.mail-work }}">email</a>.

### Attenzione
È possibile che ci siano alcuni errori e/o imprecisioni: per uno studio adeguato della materia è fondamentale riferirsi principalmente al materiale fornito dal docente e ad i libri di testo consigliati.

### Guida all'utilizzo di Obsidian
Obsidian è un editor di testo che utilizza la sintassi Markdown (.md) per gestire gli appunti in modo organizzato. Si consiglia inoltre di installare i plugin presenti nella seguente [Wiki](http://bit.ly/3lfPQiB) per sfruttare al meglio le potenzialità del software. La preview che si vede su Github può risultare incompleta o non leggibile.

Elenco dei corsi i cui appunti sono stati presi su Obsidian:
- Metodologie di Programmazione
- Laboratorio di Algoritmi
- Fondamenti di Informatica
- Reti di Calcolatori
- Ingegneria del Software
- Intelligenza Artificiale

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
	<li>
		<a href="{{ post.url }}"><b>{{ post.title }}</b>, voto: {{ post.voto }}</a>
	</li>
{% endfor %}
</ul>