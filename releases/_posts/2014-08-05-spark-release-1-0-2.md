---
layout: post
title: Spark Release 1.0.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.0.2 is a maintenance release with bug fixes. This release is based on the [branch-1.0](https://github.com/apache/spark/tree/branch-1.0) maintenance branch of Spark. We recommend all 1.0.x users to upgrade to this stable release. Contributions to this release came from 30 developers.

You can download Spark 1.0.2 as either a 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.2.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.2.tgz'); return false;">source package</a>
(6 MB tgz) or a prebuilt package for 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.2-bin-hadoop1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.2-bin-hadoop1.tgz'); return false;">Hadoop 1 / CDH3</a> (156 MB tgz), 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.2-bin-cdh4.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.2-bin-cdh4.tgz'); return false;">CDH4</a> (161 MB tgz), or
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.2-bin-hadoop2.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.2-bin-hadoop2.tgz'); return false;">Hadoop 2 / CDH5 / HDP2</a>
(168 MB tgz). Release signatures and checksums are available at the official [Apache download site](http://www.apache.org/dist/spark/spark-1.0.2/).

### Fixes
Spark 1.0.2 contains bug fixes in several components. Some of the more important fixes are highlighted below. You can visit the [Spark issue tracker](http://s.apache.org/9NJ) for the full list of fixes.

#### Spark Core
- Avoid pulling in the entire RDD or PairRDDFunctions in various operators ([SPARK-2534](https://issues.apache.org/jira/browse/SPARK-2534))
- RangePartitioner's binary search does not use the given Ordering ([SPARK-2598](https://issues.apache.org/jira/browse/SPARK-2598))
- Exception in accumulator update should not crash DAGScheduler and SparkContext ([SPARK-2323](https://issues.apache.org/jira/browse/SPARK-2323))

#### SQL
- Slave node throws NoClassDefFoundError $line11.$read$ when executing a Spark QL query on HDFS CSV file ([SPARK-2576](https://issues.apache.org/jira/browse/SPARK-2576))
- Concurrent initialization of various DataType objects causes exceptions ([SPARK-2498](https://issues.apache.org/jira/browse/SPARK-2498))
- Multiple instances of an InMemoryRelation in a single plan results in recaching ([SPARK-2405](https://issues.apache.org/jira/browse/SPARK-2405))

#### PySpark
- Make hash of None consistant cross machines ([SPARK-2494](https://issues.apache.org/jira/browse/SPARK-2494))

#### MLlib
 - mutable.BitSet in ALS not serializable with KryoSerializer ([SPARK-1977](https://issues.apache.org/jira/browse/SPARK-1977))
- fix bin offset in DecisionTree node aggregations ([SPARK-2152](https://issues.apache.org/jira/browse/SPARK-2152))

#### Streaming
- Ability to limit the Receiver data rate to prevent overloading of data and Spark crash ([SPARK-1341](https://issues.apache.org/jira/browse/SPARK-1341))
-  File stream processes existing files in a directory even if newFilesOnly = true ([SPARK-2362](https://issues.apache.org/jira/browse/SPARK-2362))
-  QueueInputDStream with oneAtATime=false does not dequeue items ([SPARK-2343](https://issues.apache.org/jira/browse/SPARK-2343))

#### GraphX
- VertexPartition is not serializable ([SPARK-2455](https://issues.apache.org/jira/browse/SPARK-2455))

### Contributors
The following developers contributed to this release:

* Aaron Davidson - Bug fixes in core
* Aaron Staple - Bug fix in SQL
* Andrew Or - Bug fix in core
* Ankur Dave - Bug fix in GraphX
* Artjom-Metro - Bug fix in examples
* Basit Mustafa - Added t2 EC2 instance support
* Cesar Arevalo - Doc fix
* Cheng Hao - Bug fix in SQL
* Daniel Darabos - Bug fix in core
* Davies Liu - Bug fix in PySpark
* Gabriele Nizzoli - Bug fix in Streaming
* Hossein - Bug fix in core
* Issac Buenrostro - Added support for throttling Streaming receiver
* Manuel Laflamme - Bug fix in Streaming
* Michael Armbrust - Bug fix and performance improvements in SQL
* Neville Li - Bug fix in MLlib
* Patrick Wendell - Bug fixes in core
* Reynold Xin - Bug fixes in core and SQL
* Sarah Gerweck - Bug fix in core
* Takuya UESHIN - Bug fixes in SQL
* Tathagata Das - Bug fix in Streaming
* William Benton - Bug fix in SQL
* Yin Huai - Bug fixes in SQL
* Zongheng Yang - Bug fixes in SQL
* baishuo(白硕) - Bug fix in SQL
* johnnywalleye - Bug fixes in MLlib
* joyyoj - Bug fix in Streaming
* kballou - Doc fix
* lianhuiwang - Doc fix 
* witgo - Bug fix in sbt

_Thanks to everyone who contributed!_




