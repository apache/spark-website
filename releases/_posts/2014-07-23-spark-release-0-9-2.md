---
layout: post
title: Spark Release 0.9.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 0.9.2 is a maintenance release with bug fixes. This release is based on the [branch-0.9](https://github.com/apache/spark/tree/branch-0.9) maintenance branch of Spark. We recommend all 0.9.x users to upgrade to this stable release. Contributions to this release came from 28 developers.

You can download Spark 0.9.2 as either a 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.2.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.2.tgz'); return false;">source package</a>
(6 MB tgz) or a prebuilt package for 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.2-bin-hadoop1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.2-bin-hadoop1.tgz'); return false;">Hadoop 1 / CDH3</a> (156 MB tgz), 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.2-bin-cdh4.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.2-bin-cdh4.tgz'); return false;">CDH4</a> (161 MB tgz), or
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-0.9.2-bin-hadoop2.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-0.9.2-bin-hadoop2.tgz'); return false;">Hadoop 2 / CDH5 / HDP2</a>
(168 MB tgz). Release signatures and checksums are available at the official [Apache download site](http://www.apache.org/dist/spark/spark-0.9.2/).

### Fixes
Spark 0.9.2 contains bug fixes in several components. Some of the more important fixes are highlighted below. You can visit the [Spark issue tracker](http://s.apache.org/d0t) for the full list of fixes.

#### Spark Core
 - ExternalAppendOnlyMap doesn't always find matching keys. ([SPARK-2043](https://issues.apache.org/jira/browse/SPARK-2043))
 - Jobs hang due to akka frame size settings. ([SPARK-1112](https://issues.apache.org/jira/browse/SPARK-1112), [SPARK-2156](https://issues.apache.org/jira/browse/SPARK-2156))
 - HDFS FileSystems continually pile up in the FS cache. ([SPARK-1676](https://issues.apache.org/jira/browse/SPARK-1676))
 - Unneeded lock in ShuffleMapTask.deserializeInfo. ([SPARK-1775](https://issues.apache.org/jira/browse/SPARK-1775))
 - Secondary jars are not added to executor classpath for YARN. ([SPARK-1870](https://issues.apache.org/jira/browse/SPARK-1870))

#### PySpark
 - IPython won't run standalone Python script. ([SPARK-1134](https://issues.apache.org/jira/browse/SPARK-1134))
 - The hash method used by partitionBy doesn't deal with None correctly. ([SPARK-1468](https://issues.apache.org/jira/browse/SPARK-1468))
 - PySpark crashes if too many tasks complete quickly. ([SPARK-2282](https://issues.apache.org/jira/browse/SPARK-2282))
  
#### MLlib
 - Make MLlib work on Python 2.6. ([SPARK-1421](https://issues.apache.org/jira/browse/SPARK-1421))
 - Fix PySpark's Naive Bayes implementation. ([SPARK-2433](https://issues.apache.org/jira/browse/SPARK-2433))
 
#### Streaming
 - SparkFlumeEvent with body bigger than 1020 bytes are not read properly. ([SPARK-1916](https://issues.apache.org/jira/browse/SPARK-1916))
 
#### GraphX
 - GraphX triplets not working properly. ([SPARK-1188](https://issues.apache.org/jira/browse/SPARK-1188))

### Contributors
The following developers contributed to this release:

* Aaron Davidson - bug fix and optimization
* Anant Daksh Asthana - improvement
* Daniel Darabos - bug fix
* David Lemieux - bug fix
* Davis Shepherd - bug fix
* DB Tsai - bug fix
* Diana Carroll - bug fix
* Erik Selin - bug fix
* Gabriele Nizzoli - bug fix
* Guoqiang Li - bug fix
* John Zhao - improvement
* Mark Hamstra - bug fix
* Matei Zaharia - bug fix and improvement
* Nan Zhu - bug fix
* Nick Lanham - bug fix
* Ori Kremer - bug fix
* Patrick Wendell - bug fixes
* Prashant Sharma - new feature
* Sam Sun - bug fix
* Sandeep Singh - bug fix
* Shuo Bai - improvement
* Sujeet Varakhedi - improvement
* Tathagata Das - bug fixes and documentation fix
* Thomas Graves - bug fixes
* Uri Laserson - bug fix
* Wenchen Fan - bug fix
* Xiangrui Meng - bug fixes and release manager
* Yin Huai - bug fix

_Thanks to everyone who contributed!_
