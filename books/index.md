---
layout: page.njk
title: Books
tags:
  - nav
navtitle: Books
---

{%- for item in collections.books | sort(attribute="data.name") %}
* <a href="{{ item.url | url }}">{{ item.data.name }}</a>
{%- endfor %}
