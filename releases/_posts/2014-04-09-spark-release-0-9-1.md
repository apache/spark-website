---
layout: post
title: Spark Release 0.9.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 0.9.1 is a maintenance release with bug fixes, performance improvements, better stability with YARN and improved parity of the Scala and Python API. We recommend all 0.9.0 users to upgrade to this stable release. Contributions to this release came from 37 developers.

You can download Spark 0.9.1 as either a source package 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.0-incubating.tgz'); return false;">source package</a>
(6 MB tgz) or a prebuilt package for 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.1-bin-hadoop1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.1-bin-hadoop1.tgz'); return false;">Hadoop 1 / CDH3</a>, 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.1-bin-cdh4.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.1-bin-cdh4.tgz'); return false;">CDH4</a>, or
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.1-bin-hadoop2.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.1-bin-hadoop2.tgz'); return false;">Hadoop 2 / CDH5 / HDP2</a>
(160 MB tgz). Release signatures and checksums are available at the official Apache download site.

### Improvements and bug fixes in Spark core
* Fixed hash collision bug in external spilling [[SPARK-1113](https://issues.apache.org/jira/browse/SPARK-1113)]
* Fixed conflict with Spark’s log4j for users relying on other logging backends [[SPARK-1190](https://issues.apache.org/jira/browse/SPARK-1190)]
* Fixed Graphx missing from Spark assembly jar in maven builds
* Fixed silent failures due to map output status exceeding Akka frame size [[SPARK-1244](https://issues.apache.org/jira/browse/SPARK-1244)] 
* Removed Spark’s unnecessary direct dependency on ASM [[SPARK-782](https://issues.apache.org/jira/browse/SPARK-782)] 
* Removed metrics-ganglia from default build due to LGPL license conflict [[SPARK-1167](https://issues.apache.org/jira/browse/SPARK-1167)] 
* Fixed bug in distribution tarball not containing spark assembly jar [[SPARK-1184](https://issues.apache.org/jira/browse/SPARK-1184)]
* Fixed bug causing infinite NullPointerException failures due to a null in map output locations [[SPARK-1124](https://issues.apache.org/jira/browse/SPARK-1124)]
* Fixed bugs in post-job cleanup of scheduler’s data structures
* Added the ability to make distribution tarballs with Tachyon bundled in them. This eases the deployment of Spark with Tachyon.
* Added support for HBase’s TableOutputFormat and other OutputFormats that extend Configurable

### Stability improvements for Spark-on-YARN
Several bug fixes were made to YARN deployment mode:

* Fixed bug in reading/writing files that the yarn user does not have permissions to but the submitting user does [[SPARK-1051](https://issues.apache.org/jira/browse/SPARK-1051)]
* Fixed bug making Spark application stall when YARN registration fails [[SPARK-1032](https://issues.apache.org/jira/browse/SPARK-1032)]
* Race condition in getting HDFS delegation tokens in yarn-client mode [[SPARK-1203](https://issues.apache.org/jira/browse/SPARK-1203)]
* Fixed bug in yarn-client mode not exiting properly [[SPARK-1049](https://issues.apache.org/jira/browse/SPARK-1049)]
* Fixed regression bug in ADD_JAR environment variable not correctly adding custom jars [[SPARK-1089](https://issues.apache.org/jira/browse/SPARK-1089)] 

### Improvements to other deployment scenarios
* Added support for C3 EC2 instances were added to Spark’s EC2 scripts used to launch EC2 clusters.
* Fixed bug in jar URL validation in standalone mode.

### Optimizations to MLLib
* Optimized memory usage of ALS [[MLLIB-25](https://issues.apache.org/jira/browse/MLLIB-25)] 
* Optimized computation of YtY for implicit ALS [[SPARK-1237](https://issues.apache.org/jira/browse/SPARK-1237)]
* Support for negative implicit input in ALS [[MLLIB-22](https://issues.apache.org/jira/browse/MLLIB-22)]
* Setting of a random seed in ALS [[SPARK-1238](https://issues.apache.org/jira/browse/SPARK-1238)]
* Faster construction of features with intercept [[SPARK-1260](https://issues.apache.org/jira/browse/SPARK-1260)] 
* Check for intercept and weight in GLM’s addIntercept [[SPARK-1327](https://issues.apache.org/jira/browse/SPARK-1327)]

### Bug fixes and better API parity for PySpark
* Fixed bug in Python de-pickling [[SPARK-1135](https://issues.apache.org/jira/browse/SPARK-1135)]
* Fixed bug in serialization of strings longer than 64K [[SPARK-1043](https://issues.apache.org/jira/browse/SPARK-1043)] 
* Fixed bug that made jobs hang when base file is not available [[SPARK-1025](https://issues.apache.org/jira/browse/SPARK-1025)] 
* Added Missing RDD operations to PySpark - top, zip, foldByKey, repartition, coalesce, getStorageLevel, setName and toDebugString

### Improvements to documentation
* Streaming: Added documentation on running streaming application from spark-shell
* YARN: Added documentation on running spark-shell in yarn-client mode with secured HDFS

### Credits
* Aaron Davidson - Bug fix in mergeCombiners
* Aaron Kimball - Improvements to streaming programming guide
* Andrew Ash - Bug fix in worker registration logging and improvements to docs
* Andrew Or - Bug fixes in map output status size and hash collision in external spilling,  and improvements to streaming programming guide
* Andrew Tulloch - Minor updates to MLLib
* Bijay Bisht - Fix for hadoop-client for Hadoop < 1.0.1 and for bug in Spark on Mesos + CDH4.5.0
* Bouke van der Bijl - Bug fix in Python depickling
* Bryn Keller  - Support for HBase's TableOutputFormat
* Chen Chao - Bug fix in spark-shell script, and improvements to streaming programming guide
* Christian Lundgren - Support for C3 EC2 instance type
* Diana Carroll - Improvements to PySpark programming guide
* Emtiaz Ahmed - UI bug fix
* Frank Dai - Code cleanup for MLLib
* Henry Saputra - Changes in use of Scala Option
* jianghan - Bug fixes in Java examples
* Josh Rosen - Bug fix in PySpark string serialization and exception handling
* Jyotiska NK  - Improvements to PySpark doc and examples
* Kay Ousterhout - Multiple bug fixes in scheduler's handling of task failures
* Kousuke Saruta - Use of https to access github
* Mark Grover  - Bug fix in distribution tar.gz
* Matei Zaharia - Bug fixes in handling of task failures due to NPE,  and cleaning up of scheduler data structures 
* Nan Zhu - Bug fixes in PySpark RDD.takeSample and adding of JARs using ADD_JAR -  and improvements to docs
* Nick Lanham - Added ability to make distribution tarballs with Tachyon
* Patrick Wendell - Bug fixes in ASM shading, fixes for log4j initialization, removing Ganglia due to LGPL license, and other miscallenous bug fixes
* Prabin Banka - RDD.zip and other missing RDD operations in PySpark
* Prashant Sharma - RDD.foldByKey in PySpark, and other PySpark doc improvements
* Qiuzhuang - Bug fix in standalone worker 
* Raymond Liu - Changed working directory in ZookeeperPersistenceEngine
* Reynold Xin  - Improvements to docs and test infrastructure
* Sandy Ryza - Multiple important Yarn bug fixes and improvements
* Sean Owen - Bug fixes and improvements for MLLib's ALS
* Shixiong Zhu - Fixed thread-unsafe use of SimpleDateFormat
* shiyun.wxm - UI bug fix
* Stevo Slavić - Bug fix in window's run-example script
* Tathagata Das - Improvements to streaming docs
* Tom Graves - Bug fixes in YARN deployment modes
* Xiangrui Meng - Improvements to ALS and GLM, and MLLib programming guide

