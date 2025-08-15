---
layout: page.njk
title: Adversaries
tags:
  - nav
navtitle: Adversaries
---

{%- for adversary in collections.adversary  | sort(attribute="data.name") %}
* <img src="{{'/img/share/' | url }}{{adversary.data.name}}.webp" width="50" height="50" /><img src="{{'/img/tokens/' | url }}{{adversary.data.name}}.webp" width="50" height="50" /><a href="{{ adversary.url | url }}">{{ adversary.data.name }}</a>
{%- endfor %}