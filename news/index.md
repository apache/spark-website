---
layout: global
type: archive
title: News
---
## Spark News
{% for post in site.categories.news %}
  <article class="hentry">
    <header class="entry-header">
      <h3 class="entry-title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div class="entry-date">{{post.date | date: "%B %-d, %Y"}}</div>
    </header>
    <div class="entry-content">{{post.excerpt}}</div>
  </article>
{% endfor %}
