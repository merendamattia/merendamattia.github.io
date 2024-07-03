---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Qualcosa di about me

{% include base_path %}


# Talks
{% for post in site.talks %}
  {% include archive-single-talk.html %}
{% endfor %}


# Talks
{% for post in site.talks %}
  {% include archive-single.html %}
{% endfor %}