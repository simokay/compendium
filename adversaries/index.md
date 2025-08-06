---
layout: page.njk
title: Adversaries
tags:
  - nav
navtitle: Adversaries
---

{%- for adversary in collections.adversary %}
* <a href="{{ adversary.url | url }}">{{ adversary.data.name }}</a>
{%- endfor %}