---
layout: page.njk
title: Magic Items
tags:
  - nav
navtitle: Magic Items
---

{%- for item in collections.magicitems | sort(attribute="data.name") %}
* <img src="{{'/img/items/' | url }}{{item.data.name}}.png" width="50" /><a href="{{ item.url | url }}">{{ item.data.name }}</a>
{%- endfor %}
