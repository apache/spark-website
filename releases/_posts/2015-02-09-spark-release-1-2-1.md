---
layout: post
title: Spark Release 1.2.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.2.1 is a maintenance release containing stability fixes. This release is based on the [branch-1.2](https://github.com/apache/spark/tree/branch-1.2) maintenance branch of Spark. We recommend all 1.2.0 users to upgrade to this stable release. Contributions to this release came from 69 developers.

To download Spark 1.2.1 visit the <a href="{{site.url}}downloads.html">downloads</a> page.

### Fixes
Spark 1.2.1 contains bug fixes in several components. Some of the more important fixes are highlighted below. You can visit the [Spark issue tracker](http://s.apache.org/Mpn) for the full list of fixes.

#### Security
- Locks down file permissions for temporary file storage

#### Spark Core
- Netty shuffle ignores spark.blockManager.port ([SPARK-4837](https://issues.apache.org/jira/browse/SPARK-4837))
- MetricsServlet does not initialize properly ([SPARK-4595](https://issues.apache.org/jira/browse/SPARK-4595))
- Repl and YARN dependencies are not published to Maven ([SPARK-5289](https://issues.apache.org/jira/browse/SPARK-5289))
- SparkConf is not thread safe ([SPARK-5355](https://issues.apache.org/jira/browse/SPARK-5355))
- Byte code errors when linking against Spark ([SPARK-2075](https://issues.apache.org/jira/browse/SPARK-2075))

#### SQL
- CACHE TABLE AS SELECT fails with Hive UDFs ([SPARK-5187](https://issues.apache.org/jira/browse/SPARK-5187))
- Attributes are case sensitive when using a select query from a projection ([SPARK-4959](https://issues.apache.org/jira/browse/SPARK-4959))
- Spark SQL built for Hive 13 fails under concurrent metadata queries ([SPARK-4908](https://issues.apache.org/jira/browse/SPARK-4908))
- Throw "Expression not in GROUP BY" when using same expression in group by clause and select clause ([SPARK-4296](https://issues.apache.org/jira/browse/SPARK-4296))

#### Streaming
- Proper file clean up for write ahead logs ([SPARK-5147](https://issues.apache.org/jira/browse/SPARK-5147))
- Error with existing files during checkpoint recovery ([SPARK-4835](https://issues.apache.org/jira/browse/SPARK-4835))
- Socket Receiver does not stop when streaming context is stopped ([SPARK-2892](https://issues.apache.org/jira/browse/SPARK-2892))

#### PySpark
- Parallelizing lists or arrays is slow ([SPARK-5224](https://issues.apache.org/jira/browse/SPARK-5224))
- Serializer bug when using zip ([SPARK-4841](https://issues.apache.org/jira/browse/SPARK-4841))
- Support Vector types within a dictionary ([SPARK-5223](https://issues.apache.org/jira/browse/SPARK-5223))

### Contributors
The following developers contributed to this release:

 * Aaron Davidson -- Bug fixes in Core
 * Alex Liu -- Improvements in Core and SQL; bug fixes in SQL
 * Andrew Ash -- Documentation in Core
 * Andrew Or -- Improvements in Core and YARN; bug fixes in Core and YARN
 * Bilna -- Test in Streaming
 * Brennon York -- Bug fixes in Core
 * Cheng Hao -- Bug fixes in Core and SQL
 * Cheng Lian -- Bug fixes in Core
 * Christophe Preaud -- Improvements in Core
 * Dale Richardson -- Improvement in Core
 * Davies Liu -- Bug fixes in Core, MLlib, and PySpark
 * Derek Ma -- Bug fixes in Shuffle
 * Earne -- Improvements in Core and GraphX
 * GuoQiang Li -- Bug fixes in Core and YARN
 * Hari Shreedharan -- Bug fixes in Streaming
 * Ilayaperumal Gopinathan -- Bug fixes in Streaming
 * Ilya Ganelin -- Bug fixes in Core and Shuffle
 * Jacek Lewandowski -- Bug fixes in Core
 * Jeremy Freeman -- Bug fixes in MLlib and PySpark
 * Jongyoul Lee -- Documentation in Streaming; bug fixes in Core and Mesos
 * Joseph K. Bradley -- Bug fixes in Core, MLlib, and PySpark
 * Josh Rosen -- Improvements in Core and SQL; new features in Core; bug fixes in Streaming and PySpark
 * Kanwaljit Singh -- Bug fixes in Core
 * Kenji Kikushima -- Bug fixes in GraphX
 * Kousuke Saruta -- Bug fixes in Core and Web UI
 * Lianhui Wang -- Bug fixes in Core
 * Madhu Siddalingaiah -- Documentation in Core
 * Marcelo Vanzin -- Bug fixes in Core
 * Michael Armbrust -- Improvements in Core; bug fixes in SQL
 * Michael Davies -- Improvements in SQL
 * Nan Zhu -- Improvements and bug fixes in Streaming
 * Nathan Kronenfeld -- Bug fixes in Core
 * Nicholas Chammas -- Documentation in Core
 * Patrick Wendell -- Improvements and documentation in Core
 * Peter Klipfel -- Documentation in Core
 * Peter Vandenabeele -- Documentation in Core
 * Ryan Williams -- Improvements, bug fixes, and documentation in Core
 * SaintBacchus -- Bug fixes in Core and YARN
 * Saisai Shao -- Bug fixes in Core
 * Saisai Shao -- Improvements in Streaming; bug fixes in Streaming and SQL; improvement in Streaming
 * Sandy Ryza -- Improvements in Core
 * Sean Owen -- Improvements in Core; wish in Core; documentation in Core; bug fixes in Java API, Core, and SQL
 * Shixiong Zhu -- Improvements in Streaming and Shuffle; bug fixes in Core and Streaming; documentation in Core and YARN
 * Su Yan -- Improvements in Core; bug fixes in Core and Web UI
 * Takeshi Yamamuro -- Improvements and bug fixes in GraphX
 * Tathagata Das -- Improvements and improvement in Streaming
 * Timothy Chen -- Documentation in Core
 * Tingjun Xu -- Bug fixes in YARN
 * Tsuyoshi Ozawa -- Documentation in Core and YARN
 * UncleGen -- Improvements in Web UI; bug fixes in Core
 * Venkata Ramana Gollamudi -- Bug fixes in Core
 * Wang Tao -- Bug fixes in Core
 * Xiangrui Meng -- Documentation in MLlib
 * Xiaohua Yi -- Bug fixes in SQL
 * Xiaojing Wang -- Documentation in Core
 * Yash Datta -- Bug fixes in SQL
 * Ye Xianjin -- Bug fixes in Core
 * Yuhao Yang -- Improvements and bug fixes in MLlib
 * Zhang, Liye -- Improvements in Web UI

_Thanks to everyone who contributed!_

