---
layout: post
title: Spark Release 0.9.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 0.9.0 is a major release that adds significant new features. It updates Spark to Scala 2.10, simplifies high availability, and updates numerous components of the project. This release includes a first version of [GraphX]({{site.baseurl}}/graphx/), a powerful new framework for graph processing that comes with a library of standard algorithms. In addition, [Spark Streaming]({{site.baseurl}}/streaming/) is now out of alpha, and includes significant optimizations and simplified high availability deployment.

You can download Spark 0.9.0 as either a
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.0-incubating.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.0-incubating.tgz'); return false;">source package</a>
(5 MB tgz) or a prebuilt package for
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.0-incubating-bin-hadoop1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.0-incubating-bin-hadoop1.tgz'); return false;">Hadoop 1 / CDH3</a>,
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.0-incubating-bin-cdh4.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.0-incubating-bin-cdh4.tgz'); return false;">CDH4</a>, or
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.0-incubating-bin-hadoop2.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.0-incubating-bin-hadoop2.tgz'); return false;">Hadoop 2 / CDH5 / HDP2</a>
(160 MB tgz). Release signatures and checksums are available at the official [Apache download site](http://www.apache.org/dist/incubator/spark/spark-0.9.0-incubating/).

### Scala 2.10 Support

Spark now runs on Scala 2.10, letting users benefit from the language and library improvements in this version.

### Configuration System

The new [SparkConf]({{site.baseurl}}/docs/0.9.0/api/core/index.html#org.apache.spark.SparkConf) class is now the preferred way to configure advanced settings on your SparkContext, though the previous Java system property method still works. SparkConf is especially useful in tests to make sure properties don’t stay set across tests.

### Spark Streaming Improvements

Spark Streaming is now out of alpha, and comes with simplified high availability and several optimizations.

* When running on a Spark standalone cluster with the [standalone cluster high availability mode]({{site.baseurl}}/docs/0.9.0/spark-standalone.html#high-availability), you can submit a Spark Streaming driver application to the cluster and have it automatically recovered if either the driver or the cluster master crashes.
* Windowed operators have been sped up by 30-50%.
* Spark Streaming’s input source plugins (e.g. for Twitter, Kafka and Flume) are now separate Maven modules, making it easier to pull in only the dependencies you need.
* A new [StreamingListener]({{site.baseurl}}/docs/0.9.0/api/streaming/index.html#org.apache.spark.streaming.scheduler.StreamingListener) interface has been added for monitoring statistics about the streaming computation.
* A few aspects of the API have been improved:
   * `DStream` and `PairDStream` classes have been moved from `org.apache.spark.streaming` to `org.apache.spark.streaming.dstream` to keep it consistent with `org.apache.spark.rdd.RDD`.
   * `DStream.foreach` has been renamed to `foreachRDD` to make it explicit that it works for every RDD, not every element
   * `StreamingContext.awaitTermination()` allows you wait for context shutdown and catch any exception that occurs in the streaming computation.
   *`StreamingContext.stop()` now allows stopping of StreamingContext without stopping the underlying SparkContext.

### GraphX Alpha

[GraphX]({{site.baseurl}}/graphx/) is a new framework for graph processing that uses recent advances in graph-parallel computation. It lets you build a graph within a Spark program using the standard Spark operators, then process it with new graph operators that are optimized for distributed computation. It includes [basic transformations]({{site.baseurl}}/docs/0.9.0/api/graphx/index.html#org.apache.spark.graphx.Graph), a [Pregel API]({{site.baseurl}}/docs/0.9.0/api/graphx/index.html#org.apache.spark.graphx.Pregel$) for iterative computation, and a standard library of [graph loaders]({{site.baseurl}}/docs/0.9.0/api/graphx/index.html#org.apache.spark.graphx.util.GraphGenerators$) and [analytics algorithms]({{site.baseurl}}/docs/0.9.0/api/graphx/index.html#org.apache.spark.graphx.lib.package). By offering these features *within* the Spark engine, GraphX can significantly speed up processing pipelines compared to workflows that use different engines.

GraphX features in this release include:

* Building graphs from arbitrary Spark RDDs
* Basic operations to transform graphs or extract subgraphs
* An optimized Pregel API that takes advantage of graph partitioning and indexing
* Standard algorithms including [PageRank]({{site.baseurl}}/docs/0.9.0/api/graphx/index.html#org.apache.spark.graphx.lib.PageRank$), [connected components]({{site.baseurl}}/docs/0.9.0/api/graphx/index.html#org.apache.spark.graphx.lib.ConnectedComponents$), [strongly connected components]({{site.baseurl}}/docs/0.9.0/api/graphx/index.html#org.apache.spark.graphx.lib.StronglyConnectedComponents$), [SVD++]({{site.baseurl}}/docs/0.9.0/api/graphx/index.html#org.apache.spark.graphx.lib.SVDPlusPlus$), and [triangle counting]({{site.baseurl}}/docs/0.9.0/api/graphx/index.html#org.apache.spark.graphx.lib.TriangleCount$)
* Interactive use from the Spark shell

GraphX is still marked as alpha in this first release, but we recommend for new users to use it instead of the more limited Bagel API.

### MLlib Improvements

* Spark’s machine learning library (MLlib) is now [available in Python]({{site.baseurl}}/docs/0.9.0/mllib-guide.html#using-mllib-in-python), where it operates on NumPy data (currently requires Python 2.7 and NumPy 1.7)
* A new algorithm has been added for [Naive Bayes classification]({{site.baseurl}}/docs/0.9.0/api/mllib/index.html#org.apache.spark.mllib.classification.NaiveBayes)
* Alternating Least Squares models can now be used to predict ratings for multiple items in parallel
* MLlib’s documentation was expanded to include more examples in Scala, Java and Python

### Python Changes

* Python users can now use MLlib (requires Python 2.7 and NumPy 1.7)
* PySpark now shows the call sites of running jobs in the Spark application UI (http://<driver>:4040), making it easy to see which part of your code is running
* IPython integration has been updated to work with newer versions

### Packaging

* Spark’s scripts have been organized into “bin” and “sbin” directories to make it easier to separate admin scripts from user ones and install Spark on standard Linux paths.
* Log configuration has been improved so that Spark finds a default log4j.properties file if you don’t specify one.

### Core Engine

* Spark’s standalone mode now supports submitting a driver program to run on the cluster instead of on the external machine submitting it. You can access this functionality through the [org.apache.spark.deploy.Client]({{site.baseurl}}/docs/0.9.0/spark-standalone.html#launching-applications-inside-the-cluster) class.
* Large reduce operations now automatically spill data to disk if it does not fit in memory.
* Users of standalone mode can now limit how many cores an application will use by default if the application writer didn’t configure its size. Previously, such applications took all available cores on the cluster.
* `spark-shell` now supports the `-i` option to run a script on startup.
* New `histogram` and `countDistinctApprox` operators have been added for working with numerical data.
* YARN mode now supports distributing extra files with the application, and several bugs have been fixed.

### Compatibility

This release is compatible with the previous APIs in stable components, but several language versions and script locations have changed.

* Scala programs now need to use Scala 2.10 instead of 2.9.
* Scripts such as `spark-shell` and `pyspark` have been moved into the `bin` folder, while administrative scripts to start and stop standalone clusters have been moved into `sbin`.
* Spark Streaming’s API has been changed to move external input sources into separate modules, `DStream` and `PairDStream` has been moved to package `org.apache.spark.streaming.dstream` and `DStream.foreach` has been renamed to `foreachRDD`. We expect the current API to be stable now that Spark Streaming is out of alpha.
* While the old method of configuring Spark through Java system properties still works, we recommend that users update to the new [SparkConf], which is easier to inspect and use.

We expect all of the current APIs and script locations in Spark 0.9 to remain stable when we release Spark 1.0. We wanted to make these updates early to give users a chance to switch to the new API.

### Contributors
The following developers contributed to this release:

 * Andrew Ash -- documentation improvements
 * Pierre Borckmans -- documentation fix
 * Russell Cardullo -- graphite sink for metrics
 * Evan Chan -- local:// URI feature
 * Vadim Chekan -- bug fix
 * Lian Cheng -- refactoring and code clean-up in several locations, bug fixes
 * Ewen Cheslack-Postava -- Spark EC2 and PySpark improvements
 * Mosharaf Chowdhury -- optimized broadcast
 * Dan Crankshaw -- GraphX contributions
 * Haider Haidi -- documentation fix
 * Frank Dai -- Naive Bayes classifier in MLlib, documentation improvements
 * Tathagata Das -- new operators, fixes, and improvements to Spark Streaming (lead)
 * Ankur Dave -- GraphX contributions
 * Henry Davidge -- warning for large tasks
 * Aaron Davidson -- shuffle file consolidation, H/A mode for standalone scheduler, various improvements and fixes
 * Kyle Ellrott -- GraphX contributions
 * Hossein Falaki -- new statistical operators, Scala and Python examples in MLlib
 * Harvey Feng -- hadoop file optimizations and YARN integration
 * Ali Ghodsi -- support for SIMR
 * Joseph E. Gonzalez -- GraphX contributions
 * Thomas Graves -- fixes and improvements for YARN support (lead)
 * Rong Gu -- documentation fix
 * Stephen Haberman -- bug fixes
 * Walker Hamilton -- bug fix
 * Mark Hamstra -- scheduler improvements and fixes, build fixes
 * Damien Hardy -- Debian build fix
 * Nathan Howell -- sbt upgrade
 * Grace Huang -- improvements to metrics code
 * Shane Huang -- separation of admin and user scripts:
 * Prabeesh K -- MQTT integration for Spark Streaming and code fix
 * Holden Karau -- sbt build improvements and Java API extensions
 * KarthikTunga -- bug fix
 * Grega Kespret -- bug fix
 * Marek Kolodziej -- optimized random number generator
 * Jey Kottalam -- EC2 script improvements
 * Du Li -- bug fixes
 * Haoyuan Li -- tachyon support in EC2
 * LiGuoqiang -- fixes to build and YARN integration
 * Raymond Liu -- build improvement and various fixes for YARN support
 * George Loentiev -- Maven build fixes
 * Akihiro Matsukawa -- GraphX contributions
 * David McCauley -- improvements to json endpoint
 * Mike -- bug fixes
 * Fabrizio (Misto) Milo -- bug fix
 * Mridul Muralidharan -- speculation improvements, several bug fixes
 * Tor Myklebust -- Python mllib bindings, instrumentation for task serailization
 * Sundeep Narravula -- bug fix
 * Binh Nguyen -- Java API improvements and version upgrades
 * Adam Novak -- bug fix
 * Andrew Or -- external sorting
 * Kay Ousterhout -- several bug fixes and improvements to Spark scheduler
 * Sean Owen -- style fixes
 * Nick Pentreath -- ALS implicit feedback algorithm
 * Pillis -- `Vector.random()` method
 * Imran Rashid -- bug fix
 * Ahir Reddy -- support for SIMR
 * Luca Rosellini -- script loading for Scala shell
 * Josh Rosen -- fixes, clean-up, and extensions to scala and Java API’s
 * Henry Saputra -- style improvements and clean-up
 * Andre Schumacher -- Python improvements and bug fixes
 * Jerry Shao -- multi-user support, various fixes and improvements
 * Prashant Sharma -- Scala 2.10 support, configuration system, several smaller fixes
 * Shiyun -- style fix
 * Wangda Tan -- UI improvement and bug fixes
 * Matthew Taylor -- bug fix
 * Jyun-Fan Tsai -- documentation fix
 * Takuya Ueshin -- bug fix
 * Shivaram Venkataraman -- sbt build optimization, EC2 improvements, Java and Python API
 * Jianping J Wang -- GraphX contributions
 * Martin Weindel -- build fix
 * Patrick Wendell -- standalone driver submission, various fixes, release manager
 * Neal Wiggins -- bug fix
 * Andrew Xia -- bug fixes and code cleanup
 * Reynold Xin -- GraphX contributions, task killing, various fixes, improvements and optimizations
 * Dong Yan -- bug fix
 * Haitao Yao -- bug fix
 * Xusen Yin -- bug fix
 * Fengdong Yu -- documentation fixes
 * Matei Zaharia -- new configuration system, Python MLlib bindings, scheduler improvements, various fixes and optimizations
 * Wu Zeming -- bug fix
 * Nan Zhu -- documentation improvements

_Thanks to everyone who contributed!_
