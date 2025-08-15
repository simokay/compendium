---
layout: page.njk
title: Spells
tags:
  - nav
navtitle: Spells
---

{%- for item in collections.spells | sort(attribute="data.name") %}
* <a href="{{ item.url | url }}">{{ item.data.name }}</a>
{%- endfor %}
