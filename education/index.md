---
layout: secondary
---

## Education

{% assign first_talk = site.categories.education | first %}
{% assign year = first_talk.date | date: "%Y" %}

<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
{% for post in site.categories.education %}
	{% assign cur_year = post.date | date: "%Y" %}
	{% if cur_year != year %}
</ul>
		{% assign year = cur_year %} 
<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
	{% endif %}
	<li>
		<span class="fa-li"><i class="fas fa-university"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic> <topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.when }} - {{ post.location }}
		{% if post.manuscript %}
			 - <i class="fas fa-file-pdf"></i> Thesis available<br/>
		{% endif %}
		</small>
	</li>
{% endfor %}
</ul>