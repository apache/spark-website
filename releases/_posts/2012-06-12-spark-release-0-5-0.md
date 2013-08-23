---
layout: post
title: Spark Release 0.5.0
categories:
- Releases
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
Spark 0.5.0 brings several new features and sets the stage for some big changes coming this summer as we incorporate code from the <a href="http://www.cs.berkeley.edu/~matei/papers/2012/hotcloud_spark_streaming.pdf">Spark Streaming</a> project. You can download it as a <a href="https://github.com/mesos/spark/zipball/v0.5.0">zip</a> or <a href="https://github.com/mesos/spark/tarball/v0.5.0">tar.gz</a>.

<h3>Mesos 0.9 Support</h3>

This release runs on <a href="http://www.mesosproject.org/">Apache Mesos 0.9</a>, the first Apache Incubator release of Mesos, which contains significant usability and stability improvements.  Most notable are better memory accounting for applications with long-term memory use, easier access of old jobs' traces and logs (by keeping a history of executed tasks on the web UI), and simpler installation.

<h3>Performance Improvements</h3>
Spark's scheduling is more communication-efficient when sending out operations on RDDs with large lineage graphs. In addition, the cache replacement policy has been improved to more smartly replace data when an RDD does not fit in the cache, shuffles are more efficient, and the serializer used for shipping closures is now configurable, making it possible to use faster libraries than Java serialization there.

<h3>Debug Improvements</h3>

Spark now reports exceptions on the worker nodes back to the master, so you can see them all in one log file. It also automatically marks and filters duplicate errors.

<h3>New Operators</h3>

These include <tt>sortByKey</tt> for parallel sorting, <tt>takeSample</tt>, and more efficient <tt>fold</tt> and <tt>aggregate</tt> operators.  In addition, more of the old operators make use of, and retain, RDD partitioning information to reduce communication cost. For example, if you <tt>join</tt> two hash-partitioned RDDs that were partitioned in the same way, Spark will not shuffle any data across the network.

<h3>EC2 Launch Script Improvements</h3>

Spark's EC2 launch scripts are now included in the main package, and have the ability to discover and use the latest Spark AMI automatically instead of launching a hardcoded machine image ID.

<h3>New Hadoop API Support</h3>

You can now use Spark to read and write data to storage formats in the new <tt>org.apache.mapreduce</tt> packages (the "new Hadoop" API). In addition, this release fixes an issue caused by a HDFS initialization bug in some recent versions of HDFS.
