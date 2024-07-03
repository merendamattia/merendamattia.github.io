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


# Education

{% for post in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}

# Talks

{% for post in site.talks %}
  {% include archive-single.html %}
{% endfor %}

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>