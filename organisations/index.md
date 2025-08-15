---
layout: page.njk
title: Organisations
tags:
  - nav
navtitle: Organisations
---

{%- for item in collections.orgs | sort(attribute="data.name") %}
* <a href="{{ item.url | url }}">{{ item.data.name }}</a>
{%- endfor %}
