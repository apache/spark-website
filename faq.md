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
Spark is a fast and general processing engine compatible with Hadoop data. It can run in Hadoop clusters through YARN or Spark's standalone mode, and it can process data in HDFS, HBase, Cassandra, Hive, and any Hadoop InputFormat. It is designed to perform both batch processing (similar to MapReduce) and new workloads like streaming, interactive queries, and machine learning.
</p>

<p class="question">Who is using Spark in production?</p>

<p class="answer">As of early 2015, <a href="http://java.dzone.com/articles/apache-spark-survey-typesafe-0">surveys</a> show that more than 500 organizations are using Spark in production. Some of them are listed on the <a href="https://cwiki.apache.org/confluence/display/SPARK/Powered+By+Spark">Powered By page</a> and at the <a href="http://spark-summit.org">Spark Summit</a>.</p>


<p class="question">How large a cluster can Spark scale to?</p>
<p class="answer">Many organizations run Spark on clusters of thousands of nodes. The largest cluster we are know has 8000. In terms of data size, Spark has been shown to work well up to petabytes. It has been used to sort 100 TB of data 3X faster than Hadoop MapReduce on 1/10th of the machines, <a href="http://databricks.com/blog/2014/11/05/spark-officially-sets-a-new-record-in-large-scale-sorting.html">winning the 2014 Daytona GraySort Benchmark</a>, as well as to <a href="https://databricks.com/blog/2014/10/10/spark-petabyte-sort.html">sort 1 PB</a>. Several production workloads <a href="http://databricks.com/blog/2014/08/14/mining-graph-data-with-spark-at-alibaba-taobao.html">use Spark to do ETL and data analysis on PBs of data</a>.</p>

<p class="question">Does my data need to fit in memory to use Spark?</p>

<p class="answer">No. Spark's operators spill data to disk if it does not fit in memory, allowing it to run well on any sized data. Likewise, cached datasets that do not fit in memory are either spilled to disk or recomputed on the fly when needed, as determined by the RDD's <a href="{{site.url}}docs/latest/scala-programming-guide.html#rdd-persistence">storage level</a>.

<p class="question">How can I run Spark on a cluster?</p>
<p class="answer">You can use either the <a href="{{site.url}}docs/latest/spark-standalone.html">standalone deploy mode</a>, which only needs Java to be installed on each node, or the <a href="{{site.url}}docs/latest/running-on-mesos.html">Mesos</a> and <a href="{{site.url}}docs/latest/running-on-yarn.html">YARN</a> cluster managers. If you'd like to run on Amazon EC2, Spark provides <a href="{{site.url}}docs/latest/ec2-scripts.html}}">EC2 scripts</a> to automatically launch a cluster.</p>

<p>Note that you can also run Spark locally (possibly on multiple cores) without any special setup by just passing <code>local[N]</code> as the master URL, where <code>N</code> is the number of parallel threads you want.</p>

<p class="question">Do I need Hadoop to run Spark?</p>
<p class="answer">No, but if you run on a cluster, you will need some form of shared file system (for example, NFS mounted at the same path on each node). If you have this type of filesystem, you can just deploy Spark in standalone mode.</p>

<p class="question">How can I access data in S3?</p>
<p class="answer">Use the <code>s3n://</code> URI scheme (<code>s3n://bucket/path</code>). You will also need to set your Amazon security credentials, either by setting the environment variables <code>AWS_ACCESS_KEY_ID</code> and <code>AWS_SECRET_ACCESS_KEY</code> before your program runs, or by setting <code>fs.s3.awsAccessKeyId</code> and <code>fs.s3.awsSecretAccessKey</code> in <code>SparkContext.hadoopConfiguration</code>.</p>

<p class="question">Which languages does Spark support?</p>
<p class="answer">Spark supports Scala, Java and Python.</p>

<p class="question">Does Spark require modified versions of Scala or Python?</p>
<p class="answer">No. Spark requires no changes to Scala or compiler plugins. The Python API uses the standard CPython implementation, and can call into existing C libraries for Python such as NumPy.</p>

<p class="question">What are good resources for learning Scala?</p>
<p class="answer">Check out <a href="http://www.artima.com/scalazine/articles/steps.html">First Steps to Scala</a> for a quick introduction, the <a href="http://www.scala-lang.org/docu/files/ScalaTutorial.pdf">Scala tutorial for Java programmers</a>, or the free online book <a href="http://www.artima.com/pins1ed/">Programming in Scala</a>. Scala is easy to transition to if you have Java experience or experience in a similarly high-level language (e.g. Ruby).</p>


<p>In addition, Spark also has <a href="{{site.url}}docs/latest/java-programming-guide.html">Java</a> and <a href="{{site.url}}docs/latest/python-programming-guide.html">Python</a> APIs.</p>

<p class="question">What license is Spark under?</p>

<p class="answer">Starting in version 0.8, Spark is under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0 license</a>. Previous versions used the <a href="https://github.com/mesos/spark/blob/branch-0.7/LICENSE">BSD license</a>.</p>

<p class="question">How can I contribute to Spark?</p>

<p class="answer">See the <a href="https://cwiki.apache.org/confluence/display/SPARK/Contributing+to+Spark">Contributing to Spark wiki</a> for more information.</p>

<p class="question">Where can I get more help?</p>
<p class="answer">Please post on the <a href="http://apache-spark-user-list.1001560.n3.nabble.com">Spark Users</a> mailing list.  We'll be glad to help!</p>
