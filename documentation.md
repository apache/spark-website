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
  <li><a href="{{site.url}}docs/latest/">Spark 0.9.0 (latest release)</a></li>
  <li><a href="{{site.url}}docs/0.8.1/">Spark 0.8.1</a></li>
  <li><a href="{{site.url}}docs/0.7.3/">Spark 0.7.3</a></li>
  <li><a href="{{site.url}}docs/0.6.2/">Spark 0.6.2</a></li>
</ul>

<p>Read these documents to get started with Spark, as well as with the built-in components
(<a href="{{site.url}}docs/latest/mllib-guide.html">MLlib</a> and
<a href="{{site.url}}docs/latest/streaming-programming-guide.html">Spark Streaming</a>).</p>

<p>In addition, this page lists some external resources for learning Spark.</p>

<h3>Video Tutorials</h3>

<ul>
  <li><a href="{{site.url}}screencasts/1-first-steps-with-spark.html">Screencast 1: First Steps with Spark</a></li>
  <li><a href="{{site.url}}screencasts/2-spark-documentation-overview.html">Screencast 2: Spark Documentation Overview</a></li>
<li><a href="{{site.url}}screencasts/3-transformations-and-caching.html">Screencast 3: Transformations and Caching</a></li>
<li><a href="{{site.url}}screencasts/4-a-standalone-job-in-spark.html">Screencast 4: A Spark Standalone Job in Scala</a></li>

</ul>

<h3>Hands-On Exercises</h3>

<ul>
  <li><a href="http://spark-summit.org/2013/exercises/">Hands-on exercises</a> are available online from Spark Summit 2013. These exercises let you launch a small EC2 cluster, load a dataset, and query it with Spark, Shark, Spark Streaming, and MLLib.</li>
</ul>

<a name="summit"></a>
<h3>Training Materials</h3>
<ul>
  <li><a href="http://spark-summit.org/2013">Spark Summit 2013</a> contained a training session for which
    <a href="http://spark-summit.org/summit-2013/#day2">slides and videos</a> are available for free online.
    The session also included <a href="http://spark-summit.org/2013/exercises/">exercises</a> that you can run on Amazon EC2.</li>
  <li>The <a href="https://amplab.cs.berkeley.edu/">UC Berkeley AMPLab</a> regularly hosts training camps on Spark and related projects.
Slides and videos are available online:
<ul>
    <li><a href="http://ampcamp.berkeley.edu/3/">AMP Camp Three</a> (Berkeley, CA, August 2013)</li>
    <li><a href="http://ampcamp.berkeley.edu/amp-camp-two-strata-2013/">AMP Camp Two</a> (Strata Santa Clara, February 2013)</li>
    <li><a href="http://ampcamp.berkeley.edu/agenda-2012/">AMP Camp One</a> (Berkeley, CA, August 2012)</li>
    </ul>
  </li>
</ul>

<h3>External Tutorials, Blog Posts, and Talks</h3>

<ul>
  <li><a href="http://spark-summit.org/2013">Spark Summit 2013</a> &mdash; contained 30 talks about Spark use cases, available as slides and videos</li>
  <li><a href="http://www.pwendell.com/2013/09/28/declarative-streams.html">Sampling Twitter Using Declarative Streams</a> &mdash; Spark Streaming tutorial by Patrick Wendell</li>
  <li><a href="http://zenfractal.com/2013/08/21/a-powerful-big-data-trio/">A Powerful Big Data Trio: Spark, Parquet and Avro</a> &mdash; Using Parquet in Spark by Matt Massie</li>
  <li><a href="http://www.slideshare.net/EvanChan2/cassandra2013-spark-talk-final">Real-time Analytics with Cassandra, Spark, and Shark</a> &mdash; Presentation by Evan Chan from Ooyala at 2013 Cassandra Summit</li>
  <li><a href="http://syndeticlogic.net/?p=311">Getting Spark Setup in Eclipse</a> &mdash; Developer blog post by James Percent</li>
  <li><a href="http://aws.amazon.com/articles/Elastic-MapReduce/4926593393724923">Run Spark and Shark on Amazon Elastic MapReduce</a> &mdash; Article by Amazon Elastic MapReduce team member Parviz Deyhim</li>
  <li><a href="http://blog.quantifind.com/posts/spark-unit-test/">Unit testing with Spark</a> &mdash; Quantifind tech blog post by Imran Rashid</li>
  <li><a href="http://blog.quantifind.com/posts/logging-post/">Configuring Spark logs</a> &mdash; Quantifind tech blog by Imran Rashid</li>
  <li><a href="http://www.ibm.com/developerworks/library/os-spark/">Spark, an alternative for fast data analytics</a> &mdash; IBM Developer Works article by M. Tim Jones</li>
</ul>

<h3>Books</h3>

<ul>
  <li><a href="http://www.packtpub.com/fast-data-processing-with-spark/book">Fast Data Processing with Spark</a>, by Holden Karau (Packt Publishing)</li>
</ul>

<h3>Examples</h3>

<ul>
  <li>The <a href="{{site.url}}examples.html">Spark examples page</a> shows the basic API in Scala, Java and Python.</li>
</ul>

<h3>Wiki</h3>

<ul><li>
The <a href="https://cwiki.apache.org/confluence/display/SPARK/Wiki+Homepage">Spark wiki</a> contains
information for developers, such as architecture documents and how to <a href="https://cwiki.apache.org/confluence/display/SPARK/Contributing+to+Spark">contribute</a> to Spark.
</li></ul>

<h3>Research Papers</h3>

<p>
Spark was initially developed as a UC Berkeley research project, and much of the design is documented in papers.
The <a href="{{site.url}}research.html">research page</a> lists some of the original motivation and direction.
The following papers have been published about Spark and related projects.
</p>

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
