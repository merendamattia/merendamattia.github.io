---
layout: secondary
---

## All projects

{% assign pinned_prjs = site.pages | where: "project", true | where: "pinned", true %}
{% assign unpinned_prjs = site.pages | where: "project", true | where: "pinned", false %}
{% assign projectlist = pinned_prjs | concat: unpinned_prjs %}
<div class="project-item-wrapper">
{% for p in projectlist %}
	<div class="project-item">
		<a href="{{ p.url }}">{{ p.title }}</a><br/>
		<venue>{{ p.description }}</venue><br/>
		{% assign langs = p.languages | split: " " %}
		<small>
		{% for lang in langs %}
			<span class="language-dot {{ lang | downcase }}-dot"></span> {{ lang }}&nbsp;
		{% endfor %}
		</small>
	</div>
{% endfor %}
</div>
<p/>
