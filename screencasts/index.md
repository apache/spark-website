---
layout: global
type: archive
title: Spark Screencast Archive
---
## Spark Screencast Archive
{% for post in site.categories.screencasts %}
  <article class="hentry">
    <header class="entry-header">
      <h1 class="entry-title"><a href="{{ post.url }}">{{ post.title }}</a></h1>
      <div class="entry-meta">{{post.date | date: "%B %d, %Y"}}</div>
    </header>
    <div class="entry-content">{{post.excerpt}}</div>
  </article>
{% endfor %}
