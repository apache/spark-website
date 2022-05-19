---
layout: global
title: FAQ
type: "page singular"
navigation:
  weight: 7
  show: true
---
<h2><span class="text-capitalize">Apache Spark<span class="tm">&trade;</span></span> FAQ</h2>

<p class="question">How does Spark relate to Apache Hadoop?</p>
<p class="answer">
Spark is a fast and general processing engine compatible with Hadoop data. It can run in Hadoop clusters through YARN or Spark's standalone mode, and it can process data in HDFS, HBase, Cassandra, Hive, and any Hadoop InputFormat. It is designed to perform both batch processing (similar to MapReduce) and new workloads like streaming, interactive queries, and machine learning.
</p>

<p class="question">Who is using Spark in production?</p>

<p class="answer">As of 2016, surveys show that more than 1000 organizations are using Spark in production. Some of them are listed on the <a href="{{site.baseurl}}/powered-by.html">Powered By page</a> and at the <a href="https://spark-summit.org">Spark Summit</a>.</p>


<p class="question">How large a cluster can Spark scale to?</p>
<p class="answer">Many organizations run Spark on clusters of thousands of nodes. The largest cluster we know has 8000 of them. In terms of data size, Spark has been shown to work well up to petabytes. It has been used to sort 100 TB of data 3X faster than Hadoop MapReduce on 1/10th of the machines, <a href="https://databricks.com/blog/2014/11/05/spark-officially-sets-a-new-record-in-large-scale-sorting.html">winning the 2014 Daytona GraySort Benchmark</a>, as well as to <a href="https://databricks.com/blog/2014/10/10/spark-petabyte-sort.html">sort 1 PB</a>. Several production workloads <a href="https://databricks.com/blog/2014/08/14/mining-graph-data-with-spark-at-alibaba-taobao.html">use Spark to do ETL and data analysis on PBs of data</a>.</p>

<p class="question">Does my data need to fit in memory to use Spark?</p>

<p class="answer">No. Spark's operators spill data to disk if it does not fit in memory, allowing it to run well on any sized data. Likewise, cached datasets that do not fit in memory are either spilled to disk or recomputed on the fly when needed, as determined by the RDD's <a href="{{site.baseurl}}/docs/latest/rdd-programming-guide.html#rdd-persistence">storage level</a>.

<p class="question">How can I run Spark on a cluster?</p>
<p class="answer">You can use either the <a href="{{site.baseurl}}/docs/latest/spark-standalone.html">standalone deploy mode</a>, which only needs Java to be installed on each node, or the <a href="{{site.baseurl}}/docs/latest/running-on-mesos.html">Mesos</a> and <a href="{{site.baseurl}}/docs/latest/running-on-yarn.html">YARN</a> cluster managers. If you'd like to run on Amazon EC2, AMPLab provides <a href="https://github.com/amplab/spark-ec2#readme">EC2 scripts</a> to automatically launch a cluster.</p>

<p>Note that you can also run Spark locally (possibly on multiple cores) without any special setup by just passing <code>local[N]</code> as the master URL, where <code>N</code> is the number of parallel threads you want.</p>

<p class="question">Do I need Hadoop to run Spark?</p>
<p class="answer">No, but if you run on a cluster, you will need some form of shared file system (for example, NFS mounted at the same path on each node). If you have this type of filesystem, you can just deploy Spark in standalone mode.</p>

<p class="question">Does Spark require modified versions of Scala or Python?</p>
<p class="answer">No. Spark requires no changes to Scala or compiler plugins. The Python API uses the standard CPython implementation, and can call into existing C libraries for Python such as NumPy.</p>

<p class="question">What’s the difference between Spark Streaming and Spark Structured Streaming? What should I use?</p>
<p class="answer">Spark Streaming is the previous generation of Spark’s streaming engine. There are no longer updates to Spark Streaming and it’s a legacy project. Spark Streaming provides a high-level abstraction called discretized stream or DStream, which represents a continuous stream of data. Internally, a DStream is represented as a sequence of RDDs.</p>
<p>Spark Structured Streaming is the current generation of Spark’s streaming engine, which is richer in functionality, easier to use, and more scalable. Spark Structured Streaming is built on top of the Spark SQL engine and enables you to express streaming computation the same way you express a batch computation on static data.</p>

<p>You should use Spark Structured Streaming for building streaming applications and pipelines with Spark. If you have legacy applications and pipelines built on Spark Streaming, you should migrate them to Spark Structured Streaming.</p>

<p class="question">Where can I find high-resolution versions of the Spark logo?</p>

<p class="answer">We provide versions here:
  <a href="images/spark-logo.eps">black logo</a>,
  <a href="images/spark-logo-reverse.eps">white logo</a>.
  Please be aware that Spark, Apache Spark and the Spark logo are
  trademarks of the Apache Software Foundation, and follow the Foundation's
  <a href="https://www.apache.org/foundation/marks/">trademark policy</a>
  in all uses of these logos.
</p>

<p class="question">Can I provide commercial software or services based on Spark?</p>

<p class="answer">
Yes, as long as you respect the Apache Software Foundation's
<a href="https://www.apache.org/licenses/">software license</a>
and <a href="https://www.apache.org/foundation/marks/">trademark policy</a>.
In particular, note that there are strong restrictions about how third-party products
use the "Spark" name (names based on Spark are generally not allowed).
Please also refer to our
<a href="{{site.baseurl}}/trademarks.html">trademark policy summary</a>.
</p>

<p class="question">How can I contribute to Spark?</p>

<p class="answer">See the <a href="{{site.baseurl}}/contributing.html">Contributing to Spark wiki</a> for more information.</p>

<p class="question">Where can I get more help?</p>

<p class="answer">Please post on StackOverflow's <a href="https://stackoverflow.com/questions/tagged/apache-spark"><code>apache-spark</code></a> tag or <a href="https://lists.apache.org/list.html?user@spark.apache.org">Spark Users</a> mailing list.  For more information, please refer to <a href="https://spark.apache.org/community.html#have-questions">Have Questions?</a>.  We'll be glad to help!</p>
