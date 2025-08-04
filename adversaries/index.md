---
layout: page.njk
title: Adversaries
tags:
  - nav
navtitle: Adversaries
---

{%- for post in collections.adversary %}
* <a href="{{ post.url | url }}">{{ post.data.name }}</a>
{%- endfor %}