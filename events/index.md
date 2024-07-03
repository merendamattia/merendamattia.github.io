---
layout: secondary
---

## All events

{% assign first_talk = site.categories.events | first %}
{% assign year = first_talk.date | date: "%Y" %}

<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
{% for post in site.categories.events %}
	{% assign cur_year = post.date | date: "%Y" %}
	{% if cur_year != year %}
</ul>
		{% assign year = cur_year %} 
<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
	{% endif %}
	<li>
		<span class="fa-li"><i class="fas fa-calendar-day"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic> <topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.kind }} - {{ post.date | date: "%-d %B %Y" }} - {{ post.location }}
		{% if post.manuscript %}
			 • <i class="fas fa-file-pdf"></i> PDF available<br/>
		{% endif %}
		</small>
		<small>{{ post.content }}</small>
	</li>
{% endfor %}
</ul>
