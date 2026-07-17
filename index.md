---
layout: default
description: Saverio Mattia Merenda is an AI Solution Architect and researcher focused on AI agents, software verification, static analysis, and blockchain.
image:
  path: /assets/images/profile.webp
  width: 800
  height: 800
  alt: Portrait of Saverio Mattia Merenda
seo:
  name: Saverio Mattia Merenda
  type: Person
  links:
    - https://www.linkedin.com/in/merendamattia/
    - https://github.com/merendamattia
    - https://orcid.org/0009-0000-4137-9852
    - https://scholar.google.com/citations?user=EXZavkQAAAAJ
---

<div class="shell">

	<!-- ══ IDENTITY RAIL ══ -->
	<aside class="rail">
		<div class="rail-inner">
			<figure class="rail-photo"><img src="{{ '/assets/images/profile.webp' | relative_url }}" alt="Portrait of Saverio Mattia Merenda" width="800" height="800" fetchpriority="high" decoding="async" /></figure>
			<div>
					<h1>Saverio Mattia <strong>Merenda</strong></h1>
					<p class="role">AI Solution Architect</p>
					<p class="degree">M.Sc. · <em>University of Parma, Italy</em></p>
					<p class="place"><i class="ph ph-map-pin"></i>Parma, Italy</p>
					<div class="links">
					<a class="lk" href="mailto:{{ site.mail-work }}"><i class="ph ph-envelope-simple"></i>{{ site.mail-work }}</a>
					<a class="lk" href="{{ site.linkedin }}" target="_blank" rel="noopener"><i class="ph ph-linkedin-logo"></i>LinkedIn</a>
					<a class="lk" href="{{ site.github }}" target="_blank" rel="noopener"><i class="ph ph-github-logo"></i>GitHub</a>
					<a class="lk" href="{{ site.orcid }}" target="_blank" rel="noopener"><i class="ph ph-identification-badge"></i>ORCID</a>
					<a class="lk" href="{{ site.scholar }}" target="_blank" rel="noopener"><i class="ph ph-graduation-cap"></i>Google Scholar</a>
					</div>
					<a class="btn btn-primary btn-block" href="{{ site.baseurl }}/files/cv.pdf" target="_blank" rel="noopener"><i class="ph ph-file-pdf"></i>Download CV (PDF)</a>
				</div>
		</div>
	</aside>

	<!-- ══ MAIN CONTENT ══ -->
	<main>
		<section class="reveal" style="margin-bottom:52px">
			<span class="kicker">Hi, I'm Mattia!</span>
			<p class="lede">I’m Saverio Mattia Merenda, an AI Solution Architect who holds a Master’s Degree in Computer Science (110/110 cum laude) from the University of Parma, Italy.</p>
			<p class="body-p">My academic and professional path sits at the intersection of artificial intelligence, software engineering, and software security. Building on a Master’s focused on Artificial Intelligence and Software Verification, I actively design and engineer advanced AI systems, combining research-driven methodologies with production-grade architectures.</p>
			<p class="body-p">Currently, I work as an AI Solution Architect, where I design, develop, and deploy custom AI agents and AI-driven systems for both client-specific solutions and internal optimization projects. My work includes the development of autonomous agent ecosystems, continuous-learning AI agents for customer support, and meta-agent architectures capable of automatically configuring and generating other AI agents. I also engineer ad-hoc MCP tools and internal AI tooling platforms to support agent orchestration, lifecycle management, and scalable deployment, integrating these systems into enterprise workflows through modern automation and orchestration platforms.</p>
			<p class="body-p">In parallel, I am deeply involved in academic research and advanced software development. I contributed to the development of <a href="https://github.com/lisa-analyzer/evm-lisa" target="_blank" rel="noopener">EVMLiSA</a>, a static analyzer for EVM bytecode based on abstract interpretation, which I extended to cross-chain ecosystems and equipped with a static checker for Access Control Incompleteness in cross-chain bridges, the subject of my Master's thesis. My research activities include software security, access control analysis in smart contracts, and the integration of large language models with static analysis to improve the quality and reliability of AI-generated code. These activities have led to peer-reviewed publications and participation in international research projects.</p>
			<p class="body-p">Alongside research and industry work, I have served as a Teaching Assistant at the University of Parma, delivering academic lectures and supporting undergraduate education in computer science. This role strengthened my ability to combine theoretical rigor with practical system design, communication, and mentorship.</p>
			<p class="body-p">I am driven by the construction of intelligent systems that are not only functional, but also scalable, verifiable, and architecturally sound. My focus is on building AI infrastructures that merge automation, learning, and formal methods, with a long-term vision toward reliable, autonomous, and secure AI-driven systems.</p>
			<p class="body-p">You can find my full CV <a href="{{ site.baseurl }}/files/cv.pdf">here</a>.</p>
		</section>

		<section class="reveal" style="margin-bottom:52px">
			<span class="kicker" style="margin-bottom:14px">Interests</span>
			<div class="tagrow">
				{% include tag.html label="AI Agents & Autonomous Systems" %}
				{% include tag.html label="Multi-Agent Architectures" %}
				{% include tag.html label="AI Systems Engineering" %}
				{% include tag.html label="Software Verification" %}
				{% include tag.html label="Blockchain" %}
			</div>
		</section>

		<!-- EDUCATION -->
		<section class="rec reveal">
			<div class="sec-head"><h2>Education</h2><a class="seeall" href="{{ site.baseurl }}/education/">See all ({{ site.categories.education.size }}) →</a></div>
			{% for post in site.categories.education limit: 2 %}
			<a class="row-link" href="{{ post.url }}">
				<div class="rl-top"><span class="rl-title">{{ post.title }}</span><span class="rl-date">{{ post.when }}</span></div>
				<p class="rl-desc">{{ post.venue }} · {{ post.location }}{% if post.grade %} · <strong>{{ post.grade }}</strong>{% endif %}</p>
				<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
				{% if post.manuscript or post.attendance %}<p class="rl-availability">{% if post.manuscript %}<i class="ph ph-file-pdf"></i>Thesis available{% endif %}{% if post.manuscript and post.attendance %} · {% endif %}{% if post.attendance %}<i class="ph ph-file-pdf"></i>Attendance available{% endif %}</p>{% endif %}
			</a>
			{% endfor %}
		</section>

		<!-- EXPERIENCE -->
		<section class="rec reveal">
			<div class="sec-head"><h2>Experience</h2><a class="seeall" href="{{ site.baseurl }}/experience/">See all ({{ site.categories.experience.size }}) →</a></div>
			{% for post in site.categories.experience limit: 2 %}
			<a class="row-link" href="{{ post.url }}">
				<div class="rl-top"><span class="rl-title">{{ post.title }}</span><span class="rl-date">{{ post.when }}</span></div>
				<p class="rl-desc">{{ post.venue }} · {{ post.location }}</p>
				<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
			</a>
			{% endfor %}
		</section>

		<!-- PUBLICATIONS -->
		<section class="rec reveal">
			<div class="sec-head"><h2>Publications</h2><a class="seeall" href="{{ site.baseurl }}/publications/">All ({{ site.categories.publications.size }}) →</a></div>
			{% for post in site.categories.publications limit: 2 %}
			<a class="row-link" href="{{ post.url }}">
				<span class="rl-title-sm">{{ post.authors }}. {{ post.title }}</span>
				<p class="rl-desc-sm">{{ post.venue }} · {{ post.kind }} · {{ post.date | date: "%-d %B %Y" }} · {{ post.location }}</p>
				<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
				{% if post.manuscript %}<p class="rl-availability"><i class="ph ph-file-pdf"></i>PDF available</p>{% endif %}
			</a>
			{% endfor %}
		</section>

		<!-- TALKS -->
		<section class="rec reveal">
			<div class="sec-head"><h2>Talks</h2><a class="seeall" href="{{ site.baseurl }}/talks/">All ({{ site.categories.talks.size }}) →</a></div>
			{% for post in site.categories.talks limit: 2 %}
			<a class="row-link" href="{{ post.url }}">
				<span class="rl-title-sm">{{ post.title }}</span>
				<p class="rl-desc-sm">{{ post.venue }} · {{ post.kind }} · {{ post.date | date: "%-d %B %Y" }} · {{ post.location }}</p>
				<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
				{% if post.slides or post.attendance %}<p class="rl-availability">{% if post.slides %}<i class="ph ph-file-pdf"></i>Slides available{% endif %}{% if post.slides and post.attendance %} · {% endif %}{% if post.attendance %}<i class="ph ph-file-pdf"></i>Attendance available{% endif %}</p>{% endif %}
			</a>
			{% endfor %}
		</section>

		<!-- RESEARCH -->
		<section class="rec reveal">
			<div class="sec-head"><h2>Research Projects</h2><a class="seeall" href="{{ site.baseurl }}/research/">All ({{ site.categories.research.size }}) →</a></div>
			{% for post in site.categories.research limit: 2 %}
			<a class="row-link" href="{{ post.url }}">
				<span class="rl-title-sm">{{ post.title }}</span>
				<p class="rl-desc-sm">{{ post.venue }} · {{ post.when }} · {{ post.location }}</p>
				<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
			</a>
			{% endfor %}
		</section>

		<!-- EVENTS -->
		<section class="rec reveal">
			<div class="sec-head"><h2>Events</h2><a class="seeall" href="{{ site.baseurl }}/events/">All ({{ site.categories.events.size }}) →</a></div>
			{% for post in site.categories.events limit: 2 %}
			<a class="row-link" href="{{ post.url }}">
				<div class="rl-top"><span class="rl-title-sm">{{ post.title }}</span><span class="rl-date">{{ post.when }}</span></div>
				<p class="rl-desc-sm">{{ post.venue }} · {{ post.kind }} · {{ post.location }}</p>
				<div class="rl-tags">{% for tag in post.tags %}{% include tag.html label=tag %}{% endfor %}</div>
				{% if post.manuscript or post.attendance %}<p class="rl-availability">{% if post.manuscript %}<i class="ph ph-file-pdf"></i>PDF available{% endif %}{% if post.manuscript and post.attendance %} · {% endif %}{% if post.attendance %}<i class="ph ph-file-pdf"></i>Attendance available{% endif %}</p>{% endif %}
			</a>
			{% endfor %}
		</section>

		<!-- PROJECTS -->
		<section class="rec reveal" style="margin-bottom:12px">
			{% assign pinned_prjs = site.pages | where: "project", true | where: "pinned", true %}
			{% assign unpinned_prjs = site.pages | where: "project", true | where: "pinned", false %}
			{% assign projectlist = pinned_prjs | concat: unpinned_prjs %}
			{% assign prj_count = projectlist.size %}
			<div class="sec-head" style="margin-bottom:14px"><h2>Projects</h2><a class="seeall" href="{{ site.baseurl }}/projects/">All ({{ prj_count }}) →</a></div>
			<div class="pgrid">
				{% for p in projectlist limit: 6 %}
				<a class="pcard" href="{{ p.url }}">
					<span class="pcard-title">{{ p.title }}</span>
					<span class="pcard-desc">{{ p.description }}</span>
					<span class="pcard-open">Open <i class="ph ph-arrow-up-right"></i></span>
				</a>
				{% endfor %}
			</div>
		</section>

		<footer class="site-footer">
			© {{ 'now' | date: "%Y" }} Saverio Mattia Merenda · Parma, Italy · <a href="mailto:{{ site.mail-work }}">{{ site.mail-work }}</a>
		</footer>
	</main>
</div>
