---
layout: page.njk
title: Spells
tags:
  - nav
navtitle: Spells
---

Filter: <input type="search" id="spSearch" class="jetsearch">
<ul id="spContent">
{%- for item in collections.spells | sort(attribute="data.name") %}
<li><a href="{{ item.url | url }}">{{ item.data.name }}</a></li>
{%- endfor %}
</ul>


<script>
  var jets = new Jets({
    searchTag: '#spSearch',
    contentTag: '#spContent'
  });
</script>