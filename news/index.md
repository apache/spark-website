---
layout: global
type: archive
title: Spark News Archive
---
## Spark News Archive
{% for post in site.categories.news %}
  <article class="hentry">
    <header class="entry-header">
      <h1 class="entry-title"><a href="{{ post.url }}">{{ post.title }}</a></h1>
      <div class="entry-meta">{{post.date | date: "%B %d, %Y"}}</div>
    </header>
    <div class="entry-content">{{post.excerpt}}</div>
  </article>
{% endfor %}
