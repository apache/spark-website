---
layout: post
title: Spark Release 0.7.3
categories:
- Releases
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---
Spark 0.7.3 is a maintenance release with several bug fixes, performance fixes, and new features. You can download it as a <a href="http://spark-project.org/download/spark-0.7.3-sources.tgz">source package</a> (4 MB tar.gz) or get prebuilt packages for <a href="http://spark-project.org/download/spark-0.7.3-prebuilt-hadoop1.tgz">Hadoop 1 / CDH3</a> or for <a href="http://spark-project.org/download/spark-0.7.3-prebuilt-cdh4.tgz">CDH 4</a> (61 MB tar.gz).

We recommend that all users update to this maintenance release.

The improvements in this release include:

<ul>
  <li><b>New "add JARs" functionality in Spark shell:</b> Users of <code>spark-shell</code> can now set the <code>ADD_JARS</code> environment variable to add a list of JARs to their clusters; these will also be sent to workers.</li>
  <li><b>Windows fixes:</b> Spark standalone clusters now properly kill executors when a job ends or fails. In addition, adding JAR paths with backslashes will now work correctly.</li>
  <li><b>Streaming API fixes:</b> The Kafka and Twitter APIs for Spark Streaming have been updated. In the Twitter case, this is to deal with the username/password authentication method being disabled in by Twitter, while in the Kafka case, it is to allow receiving messages other than strings. Note that these are breaking API changes as the Streaming API is still in alpha.</li>
  <li><b>Python performance:</b> Spark's mechanism for spawning Python VMs has been improved to do so faster when the JVM has a large heap size, speeding up the Python API.</li>
  <li><b>Mesos fixes:</b> JARs added to your job will now be on the classpath when deserializing task results in Mesos.</li>
  <li><b>Error reporting:</b> Better error reporting for non-serializable exceptions and overly large task results.</li>
  <li><b>Examples:</b> Added an example of stateful stream processing with <code>updateStateByKey</code>.</li>
  <li><b>Build:</b> Spark Streaming no longer depends on the Twitter4J repo, which should allow it to build in China.</li>
  <li><b>Bug fixes</b> in <code>foldByKey</code>, streaming <code>count</code>, statistics methods, documentation, and web UI.</li>
</ul>

The following people contributed to this release:

<ul>
  <li>Charles Reiss (Mesos)</li>
  <li>Christoph Grothaus (Windows spawn fixes)</li>
  <li>Christopher Nguyen (bug fixes)</li>
  <li>James Phillpotts (Twitter input stream)</li>
  <li>Jey Kottalam (Python performance)</li>
  <li>Josh Rosen (usability)</li>
  <li>Konstantin Boudnik (build)</li>
  <li>Mark Hamstra (build)</li>
  <li>Matei Zaharia (Windows, docs, ADD_JARS, Python, streaming)</li>
  <li>Patrick Wendell (usability)</li>
  <li>Tathagata Das (streaming fixes)</li>
  <li>Jerry Shao (bug fixes)</li>
  <li>S. Kumar (examples)</li>
  <li>Sean McNamara (Kafka input streams, streaming fixes)</li>
</ul>
