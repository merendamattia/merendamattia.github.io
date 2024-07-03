---
layout: secondary
---

## Appunti universitari

{% assign first_talk = site.categories.university | first %}
{% assign year = first_talk.date | date: "%Y" %}

<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
{% for post in site.categories.university %}
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