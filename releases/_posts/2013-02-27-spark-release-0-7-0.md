---
layout: post
title: Spark Release 0.7.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---
The Spark team is proud to release version 0.7.0, a new major release that brings several new features. Most notable are a <a href="/docs/0.7.0/python-programming-guide.html">Python API for Spark</a> and an <a href="/docs/0.7.0/streaming-programming-guide.html">alpha of Spark Streaming</a>. (Details on Spark Streaming can also be found in this <a href="http://www.eecs.berkeley.edu/Pubs/TechRpts/2012/EECS-2012-259.pdf">technical report</a>.) The release also adds numerous other improvements across the board. Overall, this is our biggest release to date, with 31 contributors, of which 20 were external to Berkeley.

You can download Spark 0.7.0 as either a <a href="/files/spark-0.7.0-sources.tgz">source package</a> (4 MB tar.gz) or <a href="/files/spark-0.7.0-prebuilt.tgz">prebuilt package</a> (60 MB tar.gz).

<h3>Python API</h3>

Spark 0.7 adds a <a href="/docs/0.7.0/python-programming-guide.html">Python API</a> called PySpark that makes it possible to use Spark from Python, both in standalone programs and in interactive Python shells. It uses the standard CPython runtime, so your programs can call into native libraries like NumPy and SciPy. Like the Scala and Java APIs, PySpark will automatically ship functions from your main program, along with the variables they depend on, to the cluster. PySpark supports most Spark features, including RDDs, accumulators, broadcast variables, and HDFS input and output.

<h3>Spark Streaming Alpha</h3>

Spark Streaming is a new extension of Spark that adds near-real-time processing capability. It offers a simple and high-level API, where users can transform streams using parallel operations like <tt>map</tt>, <tt>filter</tt>, <tt>reduce</tt>, and new sliding window functions. It automatically distributes work over a cluster and provides efficient fault recovery with exactly-once semantics for transformations, without relying on costly transactions to an external system. Spark Streaming is described in more detail in <a href="/talks/strata_spark_streaming.ppt">these slides</a> and <a href="http://www.eecs.berkeley.edu/Pubs/TechRpts/2012/EECS-2012-259.pdf">our technical report</a>. This release is our first alpha of Spark Streaming, with most of the functionality implemented and APIs in Java and Scala.

<h3>Memory Dashboard</h3>

Spark jobs now launch a web dashboard for monitoring the memory usage of each distributed dataset (RDD) in the program. Look for lines like this in your log:

<tt>15:08:44 INFO BlockManagerUI: Started BlockManager web UI at http://mbk.local:63814</tt>

You can also control which port to use through the <tt>spark.ui.port</tt> property.

<h3>Maven Build</h3>

Spark can now be built using Maven in addition to SBT. The Maven build enables easier publishing to repositories of your choice, easy selection of Hadoop versions using the Maven profile (<tt>-Phadoop1</tt> or <tt>-Phadoop2</tt>), as well as Debian packaging using <tt>mvn -Phadoop1,deb install</tt>.

<h3>New Operations</h3>

This release adds several RDD transformations, including <tt>keys</tt>, <tt>values</tt>, <tt>keyBy</tt>, <tt>subtract</tt>, <tt>coalesce</tt>, <tt>zip</tt>. It also adds <tt>SparkContext.hadoopConfiguration</tt> to allow programs to configure Hadoop input/output settings globally across operations. Finally, it adds the <tt>RDD.toDebugString()</tt> method, which can be used to print an RDD's lineage graph for troubleshooting.

<h3>EC2 Improvements</h3>

<ul>
  <li>Spark will now read S3 credentials from the <tt>AWS_ACCESS_KEY_ID</tt> and <tt>AWS_SECRET_ACCESS_KEY</tt> environment variables, if set, making it easier to access Amazon S3.</li>
  <li>This release fixes a bug with S3 access that would leave streams open when they are not fully read (e.g. when calling <tt>RDD.first()</tt> or a SQL query with a limit), causing nodes to hang.</li>
  <li>The EC2 scripts now support both standalone and Mesos clusters, and launch Ganglia on the cluster.</li>
  <li>Spark EC2 clusters can now be spread across multiple availability zones.</li>
</ul>

<h3>Other Improvements</h3>

<ul>
  <li>Shuffle operations like <tt>groupByKey</tt> and <tt>reduceByKey</tt> now try to infer parallelism from the size of the parent RDD (unless <tt>spark.default.parallelism</tt> is set).</li>
  <li>Several performance improvements to shuffles.</li>
  <li>Standalone deploy cluster now spreads jobs out across machines by default, leading to better data locality.</li>
  <li>Better error reporting when jobs aren't being launched due to not enough resources.</li>
  <li>Standalone deploy web UI now includes JSON endpoints for querying cluster state.</li>
  <li>Better support for IBM JVM.</li>
  <li>Default Hadoop version dependency updated to 1.0.4.</li>
  <li>Improved failure handling and reporting of error messages.</li>
  <li>Separate configuration for standalone cluster daemons and user applications.</li>
  <li>Significant refactoring of the scheduler codebase to enable richer unit testing.</li>
  <li>Several bug and performance fixes throughout.</li>
</ul>

<h3>Compatibility</h3>

This release is API-compatible with Spark 0.6 programs, but the following features changed slightly:
<ul>
  <li>Parallel shuffle operations where you don't specify a level of parallelism use the number of partitions of the parent RDD instead of a constant default. However, if you set <tt>spark.default.parallelism</tt>, they will use that.</li>
  <li><tt>SparkContext.addFile</tt>, which distributes a file to worker nodes, is no longer guaranteed to put it in the executor's working directory---instead, you can find the directory it used using <tt>SparkFiles.getRootDirectory</tt>, or get a particular file using <tt>SparkFiles.get</tt>. This was done to avoid cluttering the local directory when running in local mode.</li>
</ul>

<h3>Credits</h3>

Spark 0.7 was the work of many contributors from Berkeley and outside---in total, 31 different contributors, of which 20 were from outside Berkeley. Here are the people who contributed, along with areas they worked on:

<ul>
  <li>Mikhail Bautin -- Maven build</li>
  <li>Denny Britz -- memory dashboard, streaming, bug fixes</li>
  <li>Paul Cavallaro -- error reporting</li>
  <li>Tathagata Das -- streaming (lead developer), 24/7 operation, bug fixes, docs</li>
  <li>Thomas Dudziak -- Maven build, Hadoop 2 support</li>
  <li>Harvey Feng -- bug fix</li>
  <li>Stephen Haberman -- new RDD operations, configuration, S3 improvements, code cleanup, bug fixes</li>
  <li>Tyson Hamilton -- JSON status endpoints</li>
  <li>Mark Hamstra -- API improvements, docs</li>
  <li>Michael Heuer -- docs</li>
  <li>Shane Huang -- shuffle performance fixes</li>
  <li>Andy Konwinski -- docs</li>
  <li>Ryan LeCompte -- streaming</li>
  <li>Haoyuan Li -- streaming</li>
  <li>Richard McKinley -- build</li>
  <li>Sean McNamara -- streaming</li>
  <li>Lee Moon Soo -- bug fix</li>
  <li>Fernand Pajot -- bug fix</li>
  <li>Nick Pentreath -- Python API, examples</li>
  <li>Andrew Psaltis -- bug fixes</li>
  <li>Imran Rashid -- memory dashboard, bug fixes</li>
  <li>Charles Reiss -- fault recovery fixes, code cleanup, testability, error reporting</li>
  <li>Josh Rosen -- Python API (lead developer), EC2 scripts, bug fixes</li>
  <li>Peter Sankauskas -- EC2 scripts</li>
  <li>Prashant Sharma -- streaming</li>
  <li>Shivaram Venkataraman -- EC2 scripts, optimizations</li>
  <li>Patrick Wendell -- streaming, bug fixes, examples, docs</li>
  <li>Reynold Xin -- optimizations, UI</li>
  <li>Haitao Yao -- run scripts</li>
  <li>Matei Zaharia -- streaming, fault recovery, Python API, code cleanup, bug fixes, docs</li>
  <li>Eric Zhang -- examples</li>
</ul>

Thanks to everyone who contributed!
