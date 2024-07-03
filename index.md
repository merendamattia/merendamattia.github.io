---
layout: default
---

## Hi, I'm Mattia!

I'm Saverio Mattia Merenda, a recent graduate in Computer Science from the University of Parma, Italy.

Throughout my academic journey, I have gained extensive experience in software development, research, and static analysis. Notably, I played a key role in the development of EVMLiSA, a static analyzer for EVM bytecode, and contributed to various AI and blockchain-related initiatives.

In addition to my academic pursuits, I have had the opportunity to work with several organizations. These experiences have allowed me to develop cutting-edge software solutions, streamline operations, and enhance security measures.

I'm constantly driven to explore new technologies and techniques, always seeking to improve my skills and knowledge. I believe that experimentation and innovation are essential in the rapidly evolving field of computer science, and I am excited to continue contributing to its advancement.

You can find my full CV [here](cv.pdf).

<span class="subsect">Interests:</span> Static Program Analysis, Program Verification, Abstract Interpretation.

<!-- ----------------------- -->

## Education

<ul class="fa-ul">
{% for post in site.categories.education limit: 2 %}
	<li>
		<span class="fa-li"><i class="fas fa-university"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small><i>{{ post.when }} - {{ post.location }}</i>
		{% if post.manuscript %}
			 • <i class="fas fa-file-pdf"></i> Thesis available<br/>
		{% endif %}
		</small>
	</li>
{% endfor %}
</ul>

[See all ({{ site.categories.education.size }}) >>]({{ site.baseurl }}/education/)

<!-- ----------------------- -->

## Experience

<ul class="fa-ul">
{% for post in site.categories.experience limit: 2 %}
	<li>
		<span class="fa-li"><i class="fas fa-briefcase"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small><i>{{ post.when }} - {{ post.location }}</i></small>
	</li>
{% endfor %}
</ul>

[See all experiences ({{ site.categories.experience.size }}) >>]({{ site.baseurl }}/experience/)

<!-- ----------------------- -->

## Research Projects

<ul class="fa-ul">
{% for post in site.categories.research limit: 2 %}
	<li>
		<span class="fa-li"><i class="fa-solid fa-brain"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small><i>{{ post.when }} - {{ post.location }}</i></small>
	</li>
{% endfor %}
</ul>

[See all research projects ({{ site.categories.research.size }}) >>]({{ site.baseurl }}/research/)

<!-- ----------------------- -->

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

<!-- ----------------------- -->

<!-- ## Publications

<ul class="fa-ul">
{% for post in site.categories.publications limit: 2 %}
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

[All publications ({{ site.categories.publications.size }}) >>]({{ site.baseurl }}/publications/) -->

<!-- ----------------------- -->

<!-- ## Talks

<ul class="fa-ul">
{% for post in site.categories.talks limit: 2 %}
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

[All talks ({{ site.categories.talks.size }}) >>]({{ site.baseurl }}/talks/) -->
