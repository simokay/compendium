---
layout: page.njk
title: Magic Items
tags:
  - nav
navtitle: Magic Items
---

{%- for item in collections.magicitems | sort(attribute="data.name") %}
* <a href="{{ item.url | url }}">{{ item.data.name }}</a>
{%- endfor %}
