---
layout: global
title: Home
type: page
navigation:
  weight: 1
  show: true
---
## What is Apache Spark?
Apache Spark is an open source cluster computing system that aims to make data analytics <em>fast</em> — both fast to run and fast to write.
To run programs faster, Spark provides primitives for in-memory cluster computing: your job can load data into memory and query it repeatedly much more quickly than with disk-based systems like Hadoop MapReduce.
To make programming faster, Spark provides clean, concise APIs in <a href="http://www.scala-lang.org" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.scala-lang.org']);">Scala</a>, <a href="{{site.url}}docs/latest/quick-start.html#a-standalone-job-in-java" >Java</a> and <a href="{{site.url}}docs/latest/quick-start.html#a-standalone-job-in-python" >Python</a>. You can also use Spark interactively from the Scala and Python shells to rapidly query big datasets.

## What can it do?
Spark was initially developed for two  applications where keeping data in memory helps: <em>iterative</em> algorithms, which are common in machine learning, and <em>interactive</em> data mining. In both cases, Spark can run up to <b>100x</b> faster than Hadoop MapReduce. However, you can use Spark for general data processing too. Check out our <a href="{{site.url}}examples.html" >example jobs</a>.
Spark is also the engine behind <a href="http://shark.cs.berkeley.edu" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://shark.cs.berkeley.edu']);">Shark</a>, a fully <a href="http://hive.apache.org" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://hive.apache.org']);">Apache Hive</a>-compatible data warehousing system that can run 100x faster than Hive.
While Spark is a new engine, it can access any data source supported by Hadoop, making it easy to run over existing data.

## Who uses it?
Spark was developed in the <a href="https://amplab.cs.berkeley.edu" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://amplab.cs.berkeley.edu']);">UC Berkeley AMPLab</a>. It&#8217;s used by several groups of researchers at Berkeley to run large-scale applications such as spam filtering and traffic prediction. It&#8217;s also used to accelerate data analytics at <a href="http://www.yahoo.com" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.yahoo.com']);">Yahoo!</a>, <a href="http://www.conviva.com" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.conviva.com']);">Conviva</a>, <a href="http://www.quantifind.com" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.quantifind.com']);">Quantifind</a>, and other companies &#8212; in total, 17 companies have contributed to Spark! Spark is <a href="https://github.com/mesos/spark" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://github.com']);">open source</a> under a BSD license, so <a href="{{site.url}}downloads.html" >download</a> it to check it out.

## Apache Incubator notice
Apache Spark is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.

{% sidebar %}
  <h3 class="widget-title">Latest News</h3>
  <div class="latestnewswidget">
    {% for post in site.categories.news limit:4 %}
      <div><a href="{{ post.url }}">{{ post.title }}</a> <span class="post-info">({{post.date| date:"%B %d, %Y"}})</span></div>
    {% endfor %}
  </div>

  <div style="text-align:right"><a href="{{site.url}}news/index.html">News Archive</a></div>

  <!-- Not porting the following to Pygments since it becomes a lot less colorful -->

  <div class="code" style="margin-top: 20px;">
    file = spark.textFile(<span class="string">"hdfs://..."</span>)<br>
    &nbsp;<br>
    file.<span class="sparkop">flatMap</span>(<span class="closure">line =&gt; line.split(" ")</span>)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">map</span>(<span class="closure">word =&gt; (word, 1)</span>)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">reduceByKey</span>(<span class="closure">_ + _</span>)
  </div>
  <div class="caption">Word Count implemented in Spark</div>

  <div align="center" style="margin-top: 20px;">
    <img src="{{site.url}}images/spark-lr.png" alt="Logistic regression performance in Spark vs Hadoop">
  </div>
  <div class="caption">Logistic regression in Spark vs Hadoop</div>
  <h2 style="text-align:center"><a href="{{site.url}}downloads"><img src="{{site.url}}images/download.png" alt="Download" style="vertical-align: middle">&nbsp;&nbsp;Download Spark</a></h2>
{% endsidebar %}

