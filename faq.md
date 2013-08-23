---
layout: global
title: FAQ
type: "page singular"
navigation:
  weight: 7
  show: true
---
<h2>Spark FAQ</h2>

<p class="question">Is Spark a modified version of Hadoop?</p>
<p class="answer">No. Spark is a completely separate codebase optimized for low latency, although it can load data from any Hadoop input source (InputFormat).</p>

<p class="question">Which languages does Spark support?</p>
<p class="answer">Starting in version 0.7, Spark supports Scala, Java and Python.</p>

<p class="question">Does Spark require modified versions of Scala or Python?</p>
<p class="answer">No. Spark requires no changes to Scala or compiler plugins. The Python API uses the standard CPython implementation, and can call into existing C libraries for Python such as NumPy.</p>

<p class="question">What happens when a cached dataset does not fit in memory?</p>
<p class="answer">Spark can either spill it to disk or recompute the partitions that don't fit in RAM each time they are requested. By default, it uses recomputation, but you can set a dataset's <a href="{{site.url}}docs/latest/scala-programming-guide.html#rdd-persistence">storage level</a> to <tt>MEMORY_AND_DISK</tt> to avoid this.  </p>

<p class="question">How can I run Spark on a cluster?</p>
<p class="answer">You can use either the <a href="{{site.url}}docs/latest/spark-standalone.html">standalone deploy mode</a>, which depends only on Java, or the <a href="{{site.url}}docs/latest/running-on-mesos.html">Apache Mesos</a> cluster manager.</p>
<p>Note that you can also run Spark locally (possibly on multiple cores) without any special setup by just passing <tt>local[N]</tt> as the master URL, where <tt>N</tt> is the number of parallel threads you want.</p>

<p class="question">I don't know Scala; how hard is it to pick it up to use Spark?</p>
<p class="answer">Scala itself is pretty easy to pick up if you have Java experience. Check out <a href="http://www.artima.com/scalazine/articles/steps.html">First Steps to Scala</a> for a quick introduction, the <a href="http://www.scala-lang.org/docu/files/ScalaTutorial.pdf">Scala tutorial for Java programmers</a>, or the free online book <a href="http://www.artima.com/pins1ed/">Programming in Scala</a>.</p>
<p>Spark 0.6 also added a <a href="{{site.url}}docs/latest/java-programming-guide.html">Java API</a>, letting you use Spark from Java, and Spark 0.7 added a <a href="{{site.url}}docs/latest/python-programming-guide.html">Python API</a>.</p>

<p class="question">What license is Spark under?</p>
<p class="answer">Spark is open source under the liberal <a href="https://github.com/mesos/spark/blob/master/LICENSE">BSD license</a>.</p>

<p class="question">How can I contribute to Spark?</p>
<p class="answer">Contact the <a href="http://groups.google.com/group/spark-users">mailing list</a> or send us a pull request on GitHub.  We're glad to hear about your experience using Spark and to accept patches </p>
<p>If you would like to report an issue, post it to the <a href="https://spark-project.atlassian.net/browse/SPARK">Spark issue tracker</a>.</p>

<p class="question">Where can I get more help?</p>
<p class="answer">Please post on the <a href="http://groups.google.com/group/spark-users">spark-users</a> mailing list.  We'll be glad to help!</p>