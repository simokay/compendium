---
layout: page.njk
title: Magic Items
---

Filter: <input type="search" id="miSearch" class="jetsearch">
<ul id="miContent">
{%- for item in collections.magicitems | sort(attribute="data.name") %}
<li><a href="{{ item.url | url }}">{{ item.data.name }}</a></li>
{%- endfor %}
</ul>


  <script>
  var jets = new Jets({
    searchTag: '#miSearch',
    contentTag: '#miContent'
  });
  </script>