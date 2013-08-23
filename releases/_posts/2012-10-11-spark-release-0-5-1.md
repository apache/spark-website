---
layout: post
title: Spark Release 0.5.1
categories:
- Releases
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
Spark 0.5.1 is a maintenance release that adds several important bug fixes and usability features. You can download it as a <a href="http://github.com/downloads/mesos/spark/spark-0.5.1.tgz">tar.gz file</a>.

<h3>Maven Publishing</h3>

Spark is now available in Maven Central, making it easier to link into your programs without having to build it as a JAR. Use the following Maven identifiers to add it to a project:
<ul>
  <li>groupId: org.spark-project</li>
  <li>artifactId: spark-core_2.9.2</li>
  <li>version: 0.5.1</li>
</ul>

<h3>Scala 2.9.2</h3>

Spark now builds against Scala 2.9.2 by default.

<h3>Improved Accumulators</h3>

The new Accumulable class generalizes Accumulators for the case when the type being accumulated is not the same as the types of elements being added (e.g. you wish to accumulate a collection, such as a Set, by adding individual elements). This interface is also more efficient in avoiding the creation of temporary objects. (Contributed by Imran Rashid.)

<h3>Bug Fixes</h3>

<ul>
  <li>Spark's algorithm for estimating the sizes of objects (in order to manage memory correctly) has been improved
    to handle JVMs with 32- vs 64-bit pointers and to measure objects more accurately. (Contributed by Shivaram Venkataraman.)</li>
  <li>Improved algorithms for taking random samples out of datasets to avoid biases that could occur in the previous ones. (Suggested by Henry Milner.)</li>
  <li>Improved load balancing across nodes in sort operations.</li>
  <li>Fixed a shuffle bug that could cause reduce tasks to fail to receive a map task's full output.</li>
  <li>Fixed a bug with locating custom KryoSerializers.</li>
  <li>Reduced memory consumption of <tt>saveAsObjectFile</tt> when objects are large.</li>
</ul>

<h3>EC2 Improvements</h3>

Spark's EC2 launch script now configures Spark's memory limit automatically based on the machine's available RAM.
