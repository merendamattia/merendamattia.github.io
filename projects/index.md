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
		<i class="fas fa-laptop-code"></i> <span><a href="{{ p.url }}">{{ p.title }}</a></span><br/>
		<venue>{{ p.description }}</venue><br/>
		<!-- <topic>{{ p.languages | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic> -->
	</div>
{% endfor %}
</div>
