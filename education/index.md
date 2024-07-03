---
layout: secondary
---

## Education

{% assign first_edu = site.categories.education | first %}
{% assign year = first_edu.start_date | date: "%Y" %}

<h3>{{ year }}</h3>
<ul class="fa-ul education-list">
{% for edu in site.categories.education %}
	{% assign cur_year = edu.start_date | date: "%Y" %}
	{% if cur_year != year %}
</ul>
		{% assign year = cur_year %} 
<h3>{{ year }}</h3>
<ul class="fa-ul education-list">
	{% endif %}
	<li>
		<span class="fa-li"><i class="fas fa-university"></i></span>
		<strong>{{ edu.degree }}</strong> in {{ edu.field }}<br/>
		<institution>{{ edu.institution }}</institution><br/>
		<location>{{ edu.location }}</location><br/>
		<small>{{ edu.start_date | date: "%-d %B %Y" }} - {% if edu.end_date %}{{ edu.end_date | date: "%-d %B %Y" }}{% else %}Present{% endif %}</small>
	</li>
{% endfor %}
</ul>
