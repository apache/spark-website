---
layout: post
title: Spark Release 1.1.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.1.1 is a maintenance release with bug fixes. This release is based on the [branch-1.1](https://github.com/apache/spark/tree/branch-1.1) maintenance branch of Spark. We recommend all 1.1.0 users to upgrade to this stable release. Contributions to this release came from 55 developers.

To download Spark 1.1.1 visit the <a href="{{site.url}}downloads.html">downloads</a> page.

### Fixes
Spark 1.1.1 contains bug fixes in several components. Some of the more important fixes are highlighted below. You can visit the [Spark issue tracker](http://s.apache.org/z9h) for the full list of fixes.

#### Spark Core
- Avoid many small spills in external data structures ([SPARK-4480](https://issues.apache.org/jira/browse/SPARK-4480))
- Memory leak in connection manager timeout thread ([SPARK-4393](https://issues.apache.org/jira/browse/SPARK-4393))
- Incorrect of channel read return value may lead to data truncation ([SPARK-4107](https://issues.apache.org/jira/browse/SPARK-4107))
- Stream corruption exceptions observed in sort-based shuffle ([SPARK-3948](https://issues.apache.org/jira/browse/SPARK-3948))
- Integer overflow in sort-based shuffle key comparison ([SPARK-3032](https://issues.apache.org/jira/browse/SPARK-3032))
- Lack of thread safety in Hadoop configuration usage in Spark ([SPARK-2546](https://issues.apache.org/jira/browse/SPARK-2546))

#### SQL
- Wrong Parquet filters are created for all inequality predicates with literals on the left hand side ([SPARK-4468](https://issues.apache.org/jira/browse/SPARK-4468))
- Support backticks in aliases ([SPARK-3708](https://issues.apache.org/jira/browse/SPARK-3708) and [SPARK-3834](https://issues.apache.org/jira/browse/SPARK-3834))
- ColumnValue types do not match in Spark rows vs Hive rows ([SPARK-3704](https://github.com/apache/spark/pull/3704))

#### PySpark
- Fix sortByKey on empty RDD ([SPARK-4304](https://issues.apache.org/jira/browse/SPARK-4304))
- Avoid using the same random seed for all partitions ([SPARK-4148](https://issues.apache.org/jira/browse/SPARK-4148))
- Avoid OOMs when take() is run on empty partitions ([SPARK-3211](https://issues.apache.org/jira/browse/SPARK-3211))

#### MLlib
- KryoException caused by ALS.trainImplicit in PySpark ([SPARK-3990](https://issues.apache.org/jira/browse/SPARK-3990))

#### Streaming
- Block replication continuously fails if target is down ([SPARK-3495](https://issues.apache.org/jira/browse/SPARK-3495))
- Block replication may choose driver as target ([SPARK-3496](https://issues.apache.org/jira/browse/SPARK-3496))

#### GraphX
- Ensure VertexRDD.apply uses mergeFunc ([SPARK-2062](https://issues.apache.org/jira/browse/SPARK-2062))

### Contributors
The following developers contributed to this release:

* Andrew Ash - Documentation and bug fixes in Core
* Andrew Or - Improvements in Core; bug fixes in Windows, Core, Block Manager, and Shuffle
* Aniket Bhatnagar - Bug fixes in Core and Streaming
* Benjamin Piering - Improvements in GraphX
* Bertrand Bossy - Bug fixes in Core
* Brenden Matthews - Bug fixes in Mesos
* Chao Chen - Documentation in Core
* Cheng Hao - Test in SQL
* Cheng Lian - Bug fixes in PySpark, MLlib, and SQL
* Chirag Aggarwal - Bug fixes in SQL
* Chris Cope - Bug fixes in YARN
* Davies Liu - Improvements in PySpark; bug fixes in Core, SQL, and PySpark
* Eric Eijkelenboom - Bug fixes in Core
* Eric Liang - Bug fixes in Core and SQL
* Eugen Cepoi - Improvements in Core
* Fei Wang - Improvements in Core and SQL; bug fixes in Core; documentation in Streaming
* Grega Kespret - Documentation in Core
* Guoqiang Li - Bug fixes in Web UI
* Henry Cook - Documentation in Core
* Hossein Falaki - Bug fixes in Web UI
* Ian Hummel - Improvements in Core
* Jakub Dubovsky - Bug fixes in Core
* Jerry Shao - Bug fixes in Shuffle
* Jongyoul Lee - Bug fixes in Core and Mesos
* Josh Rosen - Improvements in Core; bug fixes in Streaming and Core
* Kousuke Saruta - Improvements in Core and Web UI; bug fixes in Core, Web UI, and PySpark
* Larry Xiao - Bug fixes in GraphX
* Lianhui Wang - Bug fixes in GraphX
* Liang-Chi Hsieh - Bug fixes in Core
* Lu Lu - Improvements in GraphX
* Ma Ji - Bug fixes in Streaming
* Marcelo Vanzin - Bug fixes in YARN
* Mark Hamstra - Bug fixes in Core
* Masayoshi Tsuzuki - Improvements in Core, Shell, and PySpark; bug fixes in Windows and PySpark
* Michael Armbrust - Documentation in Core
* Michael Griffiths - Bug fixes in PySpark
* Min Shen - Bug fixes in YARN
* Mubarak Seyed - Improvements in Streaming
* Nicholas Chammas - Documentation in Core
* Niklas Wilcke - Bug fixes in Core
* Oded Zimerman - Bug fixes in GraphX
* Reynold Xin - New features in Core; bug fixes in Core and SQL
* Rongquan Su - Improvements in Streaming
* Sandy Ryza - Bug fixes in Core
* Sean Owen - Bug fixes in Java API, Core, and Streaming
* Shane Knapp - Bug fixes in Core
* Shixiong Zhu - Improvements in Web UI; bug fixes in Core and YARN
* Shuo Xiang - Bug fixes in MLlib
* Tal Sliwowicz - Bug fixes in Core and Block Manager
* Tao Wang - Improvements and bug fixes in Core
* Tathagata Das - Improvements in Streaming; bug fixes in Core, Block Manager, and Streaming
* Xiangrui Meng - Improvements in Web UI and PySpark; bug fixes in Core, MLlib, and PySpark
* Yantang Zhai - Bug fixes in Core and Web UI
* Yash Datta - Improvements in SQL
* Yin Huai - Documentation in Core

_Thanks to everyone who contributed!_

