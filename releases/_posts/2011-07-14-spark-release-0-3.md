---
layout: post
title: Spark Release 0.3
categories:
- Releases
tags: []
status: publish
type: post
published: true
---
Spark 0.3 brings a variety of new features. You can download it for either <a href="https://github.com/mesos/spark/tarball/0.3-scala-2.9">Scala 2.9</a> or <a href="https://github.com/mesos/spark/tarball/0.3-scala-2.8">Scala 2.8</a>.

<h3>Scala 2.9 Support</h3>

This is the first release to support Scala 2.9 in addition to 2.8. Future releases are likely to be 2.9-only unless there is high demand for 2.8.

<h3>Save Operations</h3>

You can now save distributed datasets to the Hadoop filesystem (HDFS), Amazon S3, Hypertable, and any other storage system supported by Hadoop. There are convenience methods for several common formats, like text files and SequenceFiles. For example, to save a dataset as text:

<div class="code">
<span class="keyword">val</span> numbers = spark.parallelize(1 to 100)<br> numbers.<span class="sparkop">saveAsTextFile</span>(<span class="string">"hdfs://..."</span>)
</div>

<h3>Native Types for SequenceFiles</h3>

In working with SequenceFiles, which store objects that implement Hadoop's Writable interface, Spark will now let you use native types for certain common Writable types, like IntWritable and Text. For example:

<div class="code">
<span class="comment">// Will read a SequenceFile of (IntWritable, Text)</span><br>
<span class="keyword">val</span> data = spark.sequenceFile[Int, String](<span class="string">"hdfs://..."</span>)
</div>

Similarly, you can save datasets of basic types directly as SequenceFiles:

<div class="code">
<span class="comment">// Will write a SequenceFile of (IntWritable, IntWritable)</span><br>
<span class="keyword">val</span> squares = spark.parallelize(1 to 100).<span class="sparkop">map</span>(<span class="closure">n =&gt; (n, n*n)</span>)<br>
squares.saveAsSequenceFile(<span class="string">"hdfs://..."</span>)
</div>

<h3>Maven Integration</h3>

Spark now fetches dependencies via Maven and can publish Maven artifacts for easier dependency management.

<h3>Faster Broadcast &amp; Shuffle</h3>

This release includes broadcast and shuffle algorithms from <a href="http://www.mosharaf.com/wp-content/uploads/orchestra-sigcomm11.pdf">this paper</a> to better support applications that communicate large amounts of data.

<h3>Support for Non-Filesystem Hadoop Input Formats</h3>

The new <tt>SparkContext.hadoopRDD</tt> method allows reading data from Hadoop-compatible storage systems other than file systems, such as HBase, Hypertable, etc.

<h3>Other Features</h3>

<ul>
  <li>Outer join operators (<tt>leftOuterJoin</tt>, <tt>rightOuterJoin</tt>, etc).</li>
  <li>Support for Scala 2.9 interpreter features (history search, Ctrl-C current line, etc) in the 2.9 version.</li>
  <li>Better default levels of parallelism for various operations.</li>
  <li>Ability to control number of splits in a file.</li>
  <li>Various bug fixes.</li>
</ul>
