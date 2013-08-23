---
layout: post
title: Spark Release 0.6.0
categories:
- Releases
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
---
Spark 0.6.0 is a major release that brings several new features, architectural changes, and performance enhancements. The most visible additions are a standalone deploy mode, a Java API, and expanded documentation; but there are also numerous other changes under the hood, which improve performance in some cases by as much as 2x.

You can download this release as either a <a href="http://github.com/downloads/mesos/spark/spark-0.6.0-sources.tar.gz">source package</a> (2 MB tar.gz) or <a href="http://github.com/downloads/mesos/spark/spark-0.6.0-prebuilt.tar.gz">prebuilt package</a> (48 MB tar.gz)

<h3>Simpler Deployment</h3>

In addition to running on Mesos, Spark now has a <a href="/docs/0.6.0/spark-standalone.html">standalone deploy mode</a> that lets you quickly launch a cluster without installing an external cluster manager. The standalone mode only needs Java installed on each machine, and Spark deployed to it.

In addition, there is <a href="/docs/0.6.0/running-on-yarn.html">experimental support for running on YARN</a> (Hadoop NextGen), currently in a separate branch.

<h3>Java API</h3>

Java programmers can now use Spark through a new <a href="/docs/0.6.0/java-programming-guide.html">Java API layer</a>. This layer makes available all of Spark's features, including parallel transformations, distributed datasets, broadcast variables, and accumulators, in a Java-friendly manner.

<h3>Expanded Documentation</h3>

Spark's <a href="/docs/0.6.0/">documentation</a> has been expanded with a new <a href="/docs/0.6.0/quick-start.html">quick start guide</a>, additional deployment instructions, configuration guide, tuning guide, and improved <a href="/docs/0.6.0/api/core">Scaladoc</a> API documentation.

<h3>Engine Changes</h3>

Under the hood, Spark 0.6 has new, custom storage and communication layers brought in from the upcoming <a href="http://www.cs.berkeley.edu/~matei/papers/2012/hotcloud_spark_streaming.pdf">Spark Streaming</a> project. These can improve performance over past versions by as much as 2x. Specifically:

<ul>
  <li>A new communication manager using asynchronous Java NIO lets shuffle operations run faster, especially when sending large amounts of data or when jobs have many tasks.</li>
  <li>A new storage manager supports per-dataset storage level settings (e.g. whether to keep the dataset in memory, deserialized, on disk, etc, or even replicated across nodes).</li>
  <li>Spark's scheduler and control plane have been optimized to better support ultra-low-latency jobs (under 500ms) and high-throughput scheduling decisions.</li>
</ul>

<h3>New APIs</h3>

<ul>
  <li>This release adds the ability to control caching strategies on a per-RDD level, so that different RDDs may be stored in memory, on disk, as serialized bytes, etc. You can choose your storage level using the <a href="/docs/0.6.0/scala-programming-guide.html#rdd-persistence"><tt>persist()</tt> method</a> on RDD.</li>
  <li>A new Accumulable class generalizes Accumulators for the case when the type being accumulated is not the same as the types of elements being added (e.g. you wish to accumulate a collection, such as a Set, by adding individual elements).</li>
  <li>You can now dynamically add files or JARs that should be shipped to your workers with <tt>SparkContext.addFile/Jar</tt>.</li>
  <li>More Spark operators (e.g. joins) support custom partitioners.</li>
</ul>

<h3>Enhanced Debugging</h3>

Spark's log now prints which operation in your program each RDD and job described in your logs belongs to, making it easier to tie back to which parts of your code experience problems.

<h3>Maven Artifacts</h3>

Spark is now available in Maven Central, making it easier to link into your programs without having to build it as a JAR. Use the following Maven identifiers to add it to a project:

<ul>
  <li>groupId: org.spark-project</li>
  <li>artifactId: spark-core_2.9.2</li>
  <li>version: 0.6.0</li>
</ul>

<h3>Compatibility</h3>

This release is source-compatible with Spark 0.5 programs, but you will need to recompile them against 0.6. In addition,  the configuration for caching has changed: instead of having a <tt>spark.cache.class</tt> parameter that sets one caching strategy for all RDDs, you can now set a <a href="/docs/0.6.0/scala-programming-guide.html#rdd-persistence">per-RDD storage level</a>. Spark will warn if you try to set <tt>spark.cache.class</tt>.

<h3>Credits</h3>

Spark 0.6 was the work of a large set of new contributors from Berkeley and outside.

<ul>
  <li>Tathagata Das contributed the new communication layer, and parts of the storage layer.</li>
  <li>Haoyuan Li contributed the new storage manager.</li>
  <li>Denny Britz contributed the YARN deploy mode, key aspects of the standalone one, and several other features.</li>
  <li>Andy Konwinski contributed the revamped documentation site, Maven publishing, and several API docs.</li>
  <li>Josh Rosen contributed the Java API, and several bug fixes.</li>
  <li>Patrick Wendell contributed the enhanced debugging feature and helped with testing and documentation.</li>
  <li>Reynold Xin contributed numerous bug and performance fixes.</li>
  <li>Imran Rashid contributed the new Accumulable class.</li>
  <li>Harvey Feng contributed improvements to shuffle operations.</li>
  <li>Shivaram Venkataraman improved Spark's memory estimation and wrote a memory tuning guide.</li>
  <li>Ravi Pandya contributed Spark run scripts for Windows.
  </li><li>Mosharaf Chowdhury provided several fixes to broadcast.</li>
  <li>Henry Milner pointed out several bugs in sampling algorithms.</li>
  <li>Ray Racine provided improvements to the EC2 scripts.</li>
  <li>Paul Ruan and Bill Zhao helped with testing.</li>
</ul>

<p style="padding-top:5px;">Thanks also to all the Spark users who have diligently suggested features or reported bugs.</p>
