---
layout: page.njk
title: Magic Items
tags:
  - nav
navtitle: Magic Items
---

{%- for item in collections.magicitems %}
* <a href="{{ item.url | url }}">{{ item.data.name }}</a>
{%- endfor %}
