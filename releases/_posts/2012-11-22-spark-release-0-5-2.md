---
layout: post
title: Spark Release 0.5.2
categories:
- Releases
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
Spark 0.5.2 is a minor release, whose main addition is to allow Spark to compile against Hadoop 2 distributions. To do this, edit <code>project/SparkBuild.scala</code> and change both the <code>HADOOP_VERSION</code> and <code>HADOOP_MAJOR_VERSION</code> variables, then recompile Spark. This change was contributed by Thomas Dudziak.

You can download Spark 0.5.2 as a <a href="https://github.com/downloads/mesos/spark/spark-0.5.2-sources.tgz">tar.gz file</a> (2 MB).
