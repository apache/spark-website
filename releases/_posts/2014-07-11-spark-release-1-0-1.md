---
layout: post
title: Spark Release 1.0.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.0.1 is a maintenance release with several stability fixes and a few new features in Spark’s SQL (alpha) library. This release is based on the [branch-1.0](https://github.com/apache/spark/tree/branch-1.0) maintenance branch of Spark. We recommend users follow the head of this branch to get the most recent stable version of Spark.

You can download Spark 1.0.1 as either a 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.1.tgz'); return false;">source package</a>
(5 MB tgz) or a prebuilt package for 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1-bin-hadoop1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.1-bin-hadoop1.tgz'); return false;">Hadoop 1 / CDH3</a>, 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1-bin-cdh4.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.1-bin-cdh4.tgz'); return false;">CDH4</a>, or
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1-bin-hadoop2.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.1-bin-hadoop2.tgz'); return false;">Hadoop 2 / CDH5 / HDP2</a>
(160 MB tgz). Release signatures and checksums are available at the official [Apache download site](http://www.apache.org/dist/spark/spark-1.0.1/).

### Fixes
Spark 1.0.1 contains stability fixes in several components. Some of the more important fixes are highlighted below. You can visit the [Spark issue tracker](http://s.apache.org/5zh) for an exhaustive list of fixes.

#### Spark Core
 - Issue with missing keys during external aggregations ([SPARK-2043](https://issues.apache.org/jira/browse/SPARK-2043))
 - Issue during job failures in Mesos mode ([SPARK-1749](https://issues.apache.org/jira/browse/SPARK-1749))
 - Error when defining case classes in Scala shell ([SPARK-1199](https://issues.apache.org/jira/browse/SPARK-1199))
 - Proper support for r3.xlarge instances on AWS ([SPARK-1790](https://issues.apache.org/jira/browse/SPARK-1790))

#### PySpark
 - Issue causing crashes when large numbers of tasks finish quickly ([SPARK-2282](https://issues.apache.org/jira/browse/SPARK-2282))
 - Issue importing MLlib in YARN-client mode ([SPARK-2172](https://issues.apache.org/jira/browse/SPARK-2172))
 - Incorrect behavior when hashing None ([SPARK-1468](https://issues.apache.org/jira/browse/SPARK-1468))
 
#### MLlib
 - Added compatibility for numpy 1.4 ([SPARK-2091](https://issues.apache.org/jira/browse/SPARK-2091))
 - Concurrency issue in random sampler ([SPARK-2251](https://issues.apache.org/jira/browse/SPARK-2251))
 - NotSerializable exception in ALS ([SPARK-1977](https://issues.apache.org/jira/browse/SPARK-1977))

#### Streaming
 - Key not found when slow receiver starts ([SPARK-2009](https://issues.apache.org/jira/browse/SPARK-2009))
 - Resource clean-up with KafkaInputDStream ([SPARK-2034](https://issues.apache.org/jira/browse/SPARK-2034))
 - Issue with Flume events larger than 1020 bytes ([SPARK-1916](https://issues.apache.org/jira/browse/SPARK-1916))

### SparkSQL Features
 - Support for querying JSON datasets ([SPARK-2060](https://issues.apache.org/jira/browse/SPARK-2060)).
 - Improved reading and writing Parquet data, including support for nested records and arrays ([SPARK-1293](https://issues.apache.org/jira/browse/SPARK-1293), [SPARK-2195](https://issues.apache.org/jira/browse/SPARK-2195), [SPARK-1913](https://issues.apache.org/jira/browse/SPARK-1913), and [SPARK-1487](https://issues.apache.org/jira/browse/SPARK-1487)).
 - Improved support for SQL commands (`CACHE TABLE`, `DESCRIBE`, SHOW TABLES) ([SPARK-1968](https://issues.apache.org/jira/browse/SPARK-1968), [SPARK-2128](https://issues.apache.org/jira/browse/SPARK-2128), and [SPARK-1704](https://issues.apache.org/jira/browse/SPARK-1704)).
 - Support for SQL specific configuration (initially used for setting number of partitions) ([SPARK-1508](https://issues.apache.org/jira/browse/SPARK-1508)).
 - Idempotence for DDL operations ([SPARK-2191](https://issues.apache.org/jira/browse/SPARK-2191)).

### Known Issues
This release contains one known issue: multi-statement lines the REPL with internal references (`> val x = 10; val y = x + 10`) produce exceptions ([SPARK-2452](https://issues.apache.org/jira/browse/SPARK-2452)). This will be fixed shortly on the 1.0 branch; the fix will be included in the 1.0.2 release.

### Contributors
The following developers contributed to this release:

 * Aaron Davidson -- bug fixes in PySpark and Spark core
 * Ali Ghodsi -- documentation update
 * Anant -- compatibility fix for spark-ec2 script
 * Anatoli Fomenko -- MLlib doc fix
 * Andre Schumacher -- nested Parquet data
 * Andrew Ash -- documentation
 * Andrew Or -- bug fixes and documentation
 * Ankur Dave -- bug fixes
 * Arkadiusz Komarzewski -- doc fix
 * Baishuo -- sql fix
 * Chen Chao -- comment fix and bug fix
 * Cheng Hao -- SQL features
 * Cheng Lian -- SQL features
 * Christian Tzolov -- build improvement
 * Clément MATHIEU -- doc updates 
 * CodingCat -- doc updates and bug fix 
 * Colin McCabe -- bug fix
 * Daoyuan -- SQL joins
 * David Lemieux -- bug fix
 * Derek Ma -- bug fix
 * Doris Xin -- bug fix
 * Erik Selin -- PySpark fix
 * Gang Bai -- bug fix
 * Guoqiang Li -- bug fixes
 * Henry Saputra -- documentation
 * Jiang -- doc fix
 * Joy Yoj -- bug fix
 * Jyotiska NK -- test improvement
 * Kan Zhang -- PySpark SQL features
 * Kay Ousterhout -- documentation fix
 * LY Lai -- bug fix
 * Lars Albertsson -- bug fix 
 * Lei Zhang -- SQL fix and feature
 * Mark Hamstra -- bug fix
 * Matei Zaharia -- doc updates and bug fix
 * Matthew Farrellee -- bug fixes
 * Michael Armbrust -- sql features and fixes
 * Neville Li -- buf fix
 * Nick Chammas -- doc fix
 * Ori Kremer -- bug fix
 * Patrick Wendell -- documentation and release manager
 * Prashant Sharma -- bug and doc fixes
 * Qiuzhuang.Lian -- bug fix
 * Raymond Liu -- bug fix
 * Ravikanth Nawada -- bug fixes
 * Reynold Xin  -- bug and doc fixes
 * Sameer Agarwal -- optimization
 * Sandy Ryza -- doc fix
 * Sean Owen -- bug fix
 * Sebastien Rainville -- bug fix
 * Shixiong Zhu -- code clean-up
 * Szul, Piotr -- bug fix
 * Takuya UESHIN -- bug fixes and SQL features
 * Thomas Graves -- bug fix 
 * Uri Laserson -- bug fix
 * Vadim Chekan -- bug fix
 * Varakhedi Sujeet -- ec2 r3 support
 * Vlad -- doc fix
 * Wang Lianhui -- bug fix
 * Wenchen Fan -- optimization
 * William Benton -- SQL feature
 * Xi Liu -- SQL feature
 * Xiangrui Meng -- bug fix
 * Ximo Guanter Gonzalbez -- SQL feature
 * Yadid Ayzenberg -- doc fix
 * Yijie Shen -- buf fix
 * Yin Huai -- JSON support and bug fixes
 * Zhen Peng -- bug fix
 * Zichuan Ye -- ec2 fixes
 * Zongheng Yang  -- sql fixes

_Thanks to everyone who contributed!_
