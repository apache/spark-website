---
layout: global
title: FAQ
type: "page singular"
navigation:
  weight: 7
  show: true
---
<h2>Spark FAQ</h2>

<p class="question">How does Spark relate to Hadoop?</p>
<p class="answer">
Spark is a fast and powerful engine for processing Hadoop data.
It runs in Hadoop clusters through
<a href="http://hadoop.apache.org/docs/current2/hadoop-yarn/hadoop-yarn-site/YARN.html">Hadoop YARN</a> 
or Spark's <a href="{{site.url}}docs/latest/spark-standalone.html">standalone mode</a>, and it can process
data in HDFS, HBase, Cassandra, Hive, and any Hadoop InputFormat.
It is designed to perform both general data processing (similar to MapReduce) and new workloads like
streaming, interactive queries, and machine learning.
</p>

<p class="question">Which languages does Spark support?</p>
<p class="answer">Spark supports Scala, Java and Python.</p>

<p class="question">Does Spark require modified versions of Scala or Python?</p>
<p class="answer">No. Spark requires no changes to Scala or compiler plugins. The Python API uses the standard CPython implementation, and can call into existing C libraries for Python such as NumPy.</p>

<p class="question">What happens when a cached dataset does not fit in memory?</p>
<p class="answer">Spark can either spill it to disk or recompute the partitions that don't fit in RAM each time they are requested. By default, it uses recomputation, but you can set a dataset's <a href="{{site.url}}docs/latest/scala-programming-guide.html#rdd-persistence">storage level</a> to <code>MEMORY_AND_DISK</code> to avoid this.  </p>

<p class="question">How can I run Spark on a cluster?</p>
<p class="answer">You can use either the <a href="{{site.url}}docs/latest/spark-standalone.html">standalone deploy mode</a>, which only needs Java to be installed on each node, or the <a href="{{site.url}}docs/latest/running-on-mesos.html">Mesos</a> and <a href="{{site.url}}docs/latest/running-on-yarn.html">YARN</a> cluster managers. If you'd like to run on Amazon EC2, Spark provides <a href="{{site.url}}docs/latest/ec2-scripts.html}}">EC2 scripts</a> to automatically launch a cluster.</p>

<p>Note that you can also run Spark locally (possibly on multiple cores) without any special setup by just passing <code>local[N]</code> as the master URL, where <code>N</code> is the number of parallel threads you want.</p>

<p class="question">Do I need Hadoop to run Spark?</p>
<p class="answer">No, but if you run on a cluster, you will need some form of shared file system (for example, NFS mounted at the same path on each node). If you have this type of filesystem, you can just deploy Spark in standalone mode.</p>

<p class="question">How can I access data in S3?</p>
<p class="answer">Use the <code>s3n://</code> URI scheme (<code>s3n://bucket/path</code>). You will also need to set your Amazon security credentials, either by setting the environment variables <code>AWS_ACCESS_KEY_ID</code> and <code>AWS_SECRET_ACCESS_KEY</code> before your program runs, or by setting <code>fs.s3.awsAccessKeyId</code> and <code>fs.s3.awsSecretAccessKey</code> in <code>SparkContext.hadoopConfiguration</code>.</p>

<p class="question">What are good resources for learning Scala?</p>
<p class="answer">Check out <a href="http://www.artima.com/scalazine/articles/steps.html">First Steps to Scala</a> for a quick introduction, the <a href="http://www.scala-lang.org/docu/files/ScalaTutorial.pdf">Scala tutorial for Java programmers</a>, or the free online book <a href="http://www.artima.com/pins1ed/">Programming in Scala</a>. Scala is easy to transition to if you have Java experience or experience in a similarly high-level language (e.g. Ruby).</p>


<p>In addition, Spark also has <a href="{{site.url}}docs/latest/java-programming-guide.html">Java</a> and <a href="{{site.url}}docs/latest/python-programming-guide.html">Python</a> APIs.</p>

<p class="question">What license is Spark under?</p>

<p class="answer">Starting in version 0.8, Spark is under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0 license</a>. Previous versions used the <a href="https://github.com/mesos/spark/blob/branch-0.7/LICENSE">BSD license</a>.</p>

<p class="question">How can I contribute to Spark?</p>
<p class="answer">Contact the <a href="{{site.url}}community.html">mailing list</a> or send us a pull request on <a href="https://github.com/apache/spark">GitHub</a> (instructions <a href="https://cwiki.apache.org/confluence/display/SPARK/Contributing+to+Spark">here</a>).  We're glad to hear about your experience using Spark and to accept patches.</p>
<p>If you would like to report an issue, post it to the <a href="https://issues.apache.org/jira/browse/SPARK">Spark issue tracker</a>.</p>

<p class="question">Where can I get more help?</p>
<p class="answer">Please post on the <a href="http://apache-spark-user-list.1001560.n3.nabble.com">Spark Users</a> mailing list.  We'll be glad to help!</p>
