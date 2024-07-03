---
layout: default
---

## Hi, I'm Mattia!

...

You can find my full CV [here](cv.pdf).

<span class="subsect">Interests:</span> Static Program Analysis, Program Verification, Abstract Interpretation.

## Education

<ul class="fa-ul">
{% for post in site.categories.education limit: 2 %}
	<li>
		<span class="fa-li"><i class="fas fa-calendar-alt"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.when }} - {{ post.location }}
		{% if post.manuscript %}
			 • <i class="fas fa-file-pdf"></i> PDF available<br/>
		{% endif %}
		</small>
	</li>
{% endfor %}
</ul>

[See all ({{ site.categories.education.size }}) >>]({{ site.baseurl }}/education/)

## Projects

{% assign pinned_prjs = site.pages | where: "project", true | where: "pinned", true %}
{% assign unpinned_prjs = site.pages | where: "project", true | where: "pinned", false %}
{% assign projectlist = pinned_prjs | concat: unpinned_prjs %}
{% if pinned_prjs.size > 4 %}
	{% assign limit = pinned_prjs.size %}
{% else %}
	{% assign limit = 4 %}
{% endif %}

<div class="project-box-wrapper">
{% for p in projectlist limit: limit %}
	<a href="{{ p.url }}" class="project-box">
		<i class="fas fa-laptop-code"></i> <span>{{ p.title }}</span><br/>
		<venue>{{ p.description }}</venue><br/>
		{% assign langs = p.languages | split: " " %}
		<small>
		{% for lang in langs %}
			<span class="language-dot {{ lang | downcase }}-dot"></span> {{ lang }}&nbsp;
		{% endfor %}
		</small>
	</a>
{% endfor %}
</div>
<p/>


{% assign prj_count = pinned_prjs.size | plus: unpinned_prjs.size %}
[All projects ({{ prj_count }}) >>]({{ site.baseurl }}/projects/)

## Publications

<ul class="fa-ul">
{% for post in site.categories.publications limit: 6 %}
	<li>
		<span class="fa-li"><i class="fas fa-book-open"></i></span>
		{{ post.authors }}. <a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.kind }} - {{ post.date | date: "%-d %B %Y" }} - {{ post.location }}
		{% if post.manuscript %}
			 • <i class="fas fa-file-pdf"></i> PDF available<br/>
		{% endif %}
		</small>
	</li>
{% endfor %}
</ul>

[All publications ({{ site.categories.publications.size }}) >>]({{ site.baseurl }}/publications/)

## Talks

<ul class="fa-ul">
{% for post in site.categories.talks limit: 8 %}
	<li>
		<span class="fa-li"><i class="fas fa-calendar-alt"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.kind }} - {{ post.date | date: "%-d %B %Y" }} - {{ post.location }}
		{% if post.manuscript %}
			 • <i class="fas fa-file-pdf"></i> PDF available<br/>
		{% endif %}
		</small>
	</li>
{% endfor %}
</ul>


[All talks ({{ site.categories.talks.size }}) >>]({{ site.baseurl }}/talks/)

## PhD Thesis

In my PhD thesis, I defined a generic framework for the development of modular multilanguage static analyses using the abstract interpretation theory. The framework has been implemented in [LiSA]({% link projects/lisa.md %}). LiSA strives to be modular, while ensuring that analysis components are parametric to all language-specific features. Together with my colleagues, we instantiated LiSA for the analysis of smart contracts written in Go using GoLiSA, and for the analysis of data science notebooks written in Python using PyLiSA. The framework is then strenghtened by two additiona components: SARL, a domain-specific language that can be used to compactly model how frameworks and libraries interact with the analyzed application, and Tarsis, an abstract domain that abstracts strings as regular languages.

You can access the full thesis [here](manuscripts/phd-thesis.pdf).
