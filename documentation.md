---
layout: global
title: Documentation
type: "page singular"
navigation:
  weight: 3
  show: true
---

<h2>Spark Documentation</h2>

<p>Setup instructions, programming guides, and other documentation are available for each version of Spark below:</p>

<ul>
  <li><a href="{{site.url}}docs/latest/">Spark 0.7.3 (latest release)</a></li>
  <li><a href="{{site.url}}docs/0.6.2/">Spark 0.6.2</a></li>
  <li><a href="https://github.com/mesos/spark/wiki/Spark-0.5-Documentation">Spark 0.5.x</a> (hosted on GitHub)</li>
</ul>

<p>Read these documents to get started with Spark. In addition, this page lists a few other external resources for learning Spark.</p>

<h3>Video Tutorials</h3>

<ul>
  <li><a href="{{site.url}}screencasts/1-first-steps-with-spark.html">Screencast 1: First Steps with Spark</a></li>
  <li><a href="{{site.url}}screencasts/2-spark-documentation-overview.html">Screencast 2: Spark Documentation Overview</a></li>
<li><a href="{{site.url}}screencasts/3-transformations-and-caching.html">Screencast 3: Transformations and Caching</a></li>
<li><a href="{{site.url}}screencasts/4-a-standalone-job-in-spark.html">Screencast 4: A Spark Standalone Job in Scala</a></li>

</ul>

<h3>Hands-On Exercises</h3>

<ul>
  <li><a href="http://ampcamp.berkeley.edu/3/exercises/">Hands-on exercises</a> are available online. These exercises let you launch a small EC2 cluster, load a dataset, and query it with Spark, Shark, Spark Streaming, and MLLib.</li>
</ul>

<h3>AMP Camp Slides and Videos</h3>

<ul>
  <li>The AMP Lab regularly hosts two-day training camps on Spark and related "big data" components.
Slides and videos from each camp are posted online:
    <br><a href="http://ampcamp.berkeley.edu/3/">AMP Camp Three</a> <em>Big Data Bootcamp Berkeley</em> (August 2013)
    <br><a href="http://ampcamp.berkeley.edu/amp-camp-two-strata-2013/">AMP Camp Two</a> <em>Big Data Bootcamp Strata</em> (February 2013)
    <br><a href="http://ampcamp.berkeley.edu/agenda-2012/">AMP Camp One</a> <em>Big Data Bootcamp Berkeley</em>(August 2012)
  </li>
</ul>

<h3>Presentations</h3>

<ul>
  <li>Programming Spark tutorial at AMP Camp: <a href="http://ampcamp.berkeley.edu/wp-content/uploads/2012/06/matei-zaharia-part-1-amp-camp-2012-spark-intro.pdf">part 1 (pdf)</a>, <a href="http://ampcamp.berkeley.edu/wp-content/uploads/2012/06/matei-zaharia-part-2-amp-camp-2012-standalone-programs.pdf">part 2 (pdf)</a>, <a href="http://www.youtube.com/watch?v=7k4yDKBYOcw">video</a>.
  </li>
  <li><a href="{{site.url}}talks/strata_spark_streaming.ppt">Overview of Spark Streaming</a> (<a href="{{site.url}}talks/strata_spark_streaming.ppt">ppt</a>) (<a href="{{site.url}}talks/strata_spark_streaming.pdf">pdf</a>)</li>
  <li><a href="http://www.youtube.com/watch?v=49Hr5xZyTEA">Overview of Spark Internals [advanced]</a> (<a href="{{site.url}}talks/dev-meetup-dec-2012.pptx">pptx</a>) (<a href="http://www.youtube.com/watch?v=49Hr5xZyTEA">video</a>)</li>
</ul>

<h3>External Tutorials, Development Blogs, and Talks</h3>

<ul>
  <li><a href="http://zenfractal.com/2013/08/21/a-powerful-big-data-trio/">A Powerful Big Data Trio: Spark, Parquet and Avro</a> -- Using Parquet in Spark by Matt Massie</li>
  <li><a href="http://www.slideshare.net/EvanChan2/cassandra2013-spark-talk-final">Real-time Analytics with Cassandra, Spark, and Shark</a> -- Presentation by Evan Chan from Ooyala at the 2013 Cassandra Summit</li>
  <li><a href="http://syndeticlogic.net/?p=311">Getting Spark Setup in Eclipse</a> -- Developer blog post by James Percent</li>
  <li><a href="http://aws.amazon.com/articles/Elastic-MapReduce/4926593393724923">Run Spark and Shark on Amazon Elastic MapReduce</a> -- Article by Amazon AWS Elastic MapReduce team member Parviz Deyhim</li>
  <li><a href="http://blog.quantifind.com/posts/spark-unit-test/">Unit testing with Spark</a> -- Quantifind tech blog post by Imran Rashid</li>
  <li><a href="http://blog.quantifind.com/posts/logging-post/">Configuring Spark logs</a> -- Quantifind tech blog by Imran Rashid</li>
  <li><a href="http://www.ibm.com/developerworks/library/os-spark/">Spark, an alternative for fast data analytics</a> -- IBM Developer Works article by M. Tim Jones</li>
</ul>

<h3>Research Papers</h3>

<ul>
  <li>
    <a href="http://www.eecs.berkeley.edu/Pubs/TechRpts/2012/EECS-2012-214.pdf">Shark: SQL and Rich Analytics at Scale</a>. Reynold Xin, Joshua Rosen, Matei Zaharia, Michael J. Franklin, Scott Shenker, Ion Stoica. <em>Technical Report UCB/EECS-2012-214</em>. November 2012.
  </li>
  <li>
    <a href="http://www.cs.berkeley.edu/~matei/papers/2012/hotcloud_spark_streaming.pdf">Discretized Streams: An Efficient and Fault-Tolerant Model for Stream Processing on Large Clusters</a>.  Matei Zaharia, Tathagata Das, Haoyuan Li, Scott Shenker, Ion Stoica. <em>HotCloud 2012</em>. June 2012.
  </li>
  <li>
    <a href="http://www.cs.berkeley.edu/~matei/papers/2012/sigmod_shark_demo.pdf">Shark: Fast Data Analysis Using Coarse-grained Distributed Memory</a> (demo). Cliff Engle, Antonio Lupher, Reynold Xin, Matei Zaharia, Haoyuan Li, Scott Shenker, Ion Stoica. <em>SIGMOD 2012</em>. May 2012. <b>Best Demo Award</b>.
  </li>
  <li>
    <a href="http://www.cs.berkeley.edu/~matei/papers/2012/nsdi_spark.pdf">Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing</a>.  Matei Zaharia, Mosharaf Chowdhury, Tathagata Das, Ankur Dave, Justin Ma, Murphy McCauley, Michael J. Franklin, Scott Shenker, Ion Stoica. <em>NSDI 2012</em>. April 2012. <b>Best Paper Award</b> and <b>Honorable Mention for Community Award</b>.
  </li>
  <li>
    <a href="http://www.cs.berkeley.edu/~matei/papers/2011/tr_spark.pdf">Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing</a>.  Matei Zaharia, Mosharaf Chowdhury, Tathagata Das, Ankur Dave, Justin Ma, Murphy McCauley, Michael J. Franklin, Scott Shenker, Ion Stoica. <em>Technical Report UCB/EECS-2011-82</em>.  July 2011.</li>
  <li>
    <a href="http://www.cs.berkeley.edu/~matei/papers/2010/hotcloud_spark.pdf">Spark: Cluster Computing with Working Sets</a>. Matei Zaharia, Mosharaf Chowdhury, Michael J. Franklin, Scott Shenker, Ion Stoica. <em>HotCloud 2010</em>. June 2010.
  </li>
</ul>
