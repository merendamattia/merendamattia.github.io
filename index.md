---
layout: default
---

## Hi, I'm Mattia!

I’m Saverio Mattia Merenda, an AI Solution Architect and Master’s Student in Computer Science at the University of Parma, Italy.

My academic and professional path sits at the intersection of artificial intelligence, software engineering, and software security. Alongside my Master’s studies, focused on Artificial Intelligence and Software Verification, I actively design and engineer advanced AI systems, combining research-driven methodologies with production-grade architectures.

Currently, I work as an AI Solution Architect, where I design, develop, and deploy custom AI agents and AI-driven systems for both client-specific solutions and internal optimization projects. My work includes the development of autonomous agent ecosystems, continuous-learning AI agents for customer support, and meta-agent architectures capable of automatically configuring and generating other AI agents. I also engineer ad-hoc MCP tools and internal AI tooling platforms to support agent orchestration, lifecycle management, and scalable deployment, integrating these systems into enterprise workflows through modern automation and orchestration platforms.

In parallel, I am deeply involved in academic research and advanced software development. I contributed to the development of [EVMLiSA](https://github.com/lisa-analyzer/evm-lisa), a static analyzer for EVM bytecode based on abstract interpretation, and I am currently working on xEVMLiSA, extending static analysis capabilities to cross-chain ecosystems. My research activities include software security, access control analysis in smart contracts, and the integration of large language models with static analysis to improve the quality and reliability of AI-generated code. These activities have led to peer-reviewed publications and participation in international research projects.

Alongside research and industry work, I have served as a Teaching Assistant at the University of Parma, delivering academic lectures and supporting undergraduate education in computer science. This role strengthened my ability to combine theoretical rigor with practical system design, communication, and mentorship.

I am driven by the construction of intelligent systems that are not only functional, but also scalable, verifiable, and architecturally sound. My focus is on building AI infrastructures that merge automation, learning, and formal methods, with a long-term vision toward reliable, autonomous, and secure AI-driven systems.

<span class="subsect">You can find my full CV <a href="{{ site.baseurl }}/files/cv.pdf">here</a></span>.

<span class="subsect">Interests:</span> AI Agents & Autonomous Systems, Multi-Agent Architectures, AI Systems Engineering, Software Verification, Blockchain.

<!-- ----------------------- -->

## Education

<ul class="fa-ul">
{% for post in site.categories.education limit: 3 %}
	<li>
		<span class="fa-li"><i class="fas fa-university"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small><i>{{ post.when }} - {{ post.location }}</i>
			{% if post.grade %}
				- <small><i>Grade: {{ post.grade }}</i></small>
			{% endif %}
			{% if post.manuscript %}
				- <i class="fas fa-file-pdf"></i> Thesis available<br/>
			{% endif %}
			{% if post.attendance %}
				- <i class="fas fa-file-pdf"></i> Attendance available<br/>
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

## Publications

<ul class="fa-ul">
{% for post in site.categories.publications limit: 2 %}
	<li>
		<span class="fa-li"><i class="fas fa-book-open"></i></span>
		{{ post.authors }}. <a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small><i>{{ post.kind }} - {{ post.date | date: "%-d %B %Y" }} - {{ post.location }}</i>
		{% if post.manuscript %}
			 - <i class="fas fa-file-pdf"></i> PDF available<br/>
		{% endif %}
		</small>
	</li>
{% endfor %}
</ul>

[All publications ({{ site.categories.publications.size }}) >>]({{ site.baseurl }}/publications/)

<!-- ----------------------- -->

## Talks

<ul class="fa-ul">
{% for post in site.categories.talks limit: 2 %}
	<li>
		<span class="fa-li"><i class="fas fa-calendar-alt"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.kind }} - {{ post.date | date: "%-d %B %Y" }} - {{ post.location }}
			{% if post.slides %}
				- <i class="fas fa-file-pdf"></i> Slides available
			{% endif %}
			{% if post.attendance %}
				- <i class="fas fa-file-pdf"></i> Attendance available
			{% endif %}
			<br/>
		</small>
	</li>
{% endfor %}
</ul>

[All talks ({{ site.categories.talks.size }}) >>]({{ site.baseurl }}/talks/)

<!-- ----------------------- -->

## Research Projects

<ul class="fa-ul">
{% for post in site.categories.research limit: 2 %}
	<li>
		<span class="fa-li"><i class="fas fa-brain"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small><i>{{ post.when }} - {{ post.location }}</i></small>
	</li>
{% endfor %}
</ul>

[See all research projects ({{ site.categories.research.size }}) >>]({{ site.baseurl }}/research/)

<!-- ----------------------- -->

## Events

<ul class="fa-ul">
{% for post in site.categories.events limit: 2 %}
	<li>
		<span class="fa-li"><i class="fas fa-calendar-day"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic>&nbsp;&nbsp;<topic>" }}</topic><br/>
		<venue><i>{{ post.venue }}</i></venue><br/>
		<small>{{ post.kind }} - {{ post.when }} - {{ post.location }}
		{% if post.manuscript %}
			 - <i class="fas fa-file-pdf"></i> PDF available<br/>
		{% endif %}
		{% if post.attendance %}
			- <i class="fas fa-file-pdf"></i> Attendance available<br/>
		{% endif %}
		</small>
	</li>
{% endfor %}
</ul>

[All events ({{ site.categories.events.size }}) >>]({{ site.baseurl }}/events/)

<!-- ----------------------- -->

## Projects

{% assign pinned_prjs = site.pages | where: "project", true | where: "pinned", true %}
{% assign unpinned_prjs = site.pages | where: "project", true | where: "pinned", false %}
{% assign projectlist = pinned_prjs | concat: unpinned_prjs %}
{% if pinned_prjs.size > 6 %}
	{% assign limit = pinned_prjs.size %}
{% else %}
	{% assign limit = 6 %}
{% endif %}

<div class="project-box-wrapper">
{% for p in projectlist limit: limit %}
	<a href="{{ p.url }}" class="project-box">
		<i class="fas fa-laptop-code"></i> <span>{{ p.title }}</span><br/>
		<venue>{{ p.description }}</venue><br/>
		{% assign langs = p.languages | split: " " %}
		<!-- <small>
		{% for lang in langs %}
			{{ lang }}&nbsp;
		{% endfor %}
		</small> -->
	</a>
{% endfor %}
</div>

{% assign prj_count = pinned_prjs.size | plus: unpinned_prjs.size %}
[All projects ({{ prj_count }}) >>]({{ site.baseurl }}/projects/)

<!-- ----------------------- -->


