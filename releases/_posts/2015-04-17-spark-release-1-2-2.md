---
layout: post
title: Spark Release 1.2.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.2.2 is a maintenance release containing stability fixes. This release is based on the [branch-1.2](https://github.com/apache/spark/tree/branch-1.2) maintenance branch of Spark. We recommend all 1.2.1 users to upgrade to this stable release. Contributions to this release came from 39 developers.

To download Spark 1.2.2 visit the <a href="{{site.baseurl}}/downloads.html">downloads</a> page.

### Fixes
Spark 1.2.2 contains bug fixes in several components. Some of the more important fixes are highlighted below. You can visit the [Spark issue tracker](https://issues.apache.org/jira/issues/?jql=project%20%3D%20SPARK%20AND%20fixVersion%20%3D%201.2.2%20ORDER%20BY%20priority%2C%20component) for the full list of fixes.


#### Spark Core
 * Thread safety problem in Netty shuffle ([SPARK-6578](http://issues.apache.org/jira/browse/SPARK-6578))
 * Memory leak in JobProgressListener ([SPARK-5967](http://issues.apache.org/jira/browse/SPARK-5967))
 * Unable to launch on YARN 2.5.0 and later ([SPARK-4267](http://issues.apache.org/jira/browse/SPARK-4267))
 * YARN auxiliary shuffle issue in secure mode ([SPARK-5655](http://issues.apache.org/jira/browse/SPARK-5655))

#### PySpark
 * Jobs hang during `collect` operation ([SPARK-6667](http://issues.apache.org/jira/browse/SPARK-6667))
 * Zip fails with serializer error ([SPARK-5973](http://issues.apache.org/jira/browse/SPARK-5973))
 * Memory leak using Spark SQL with PySpark ([SPARK-6055](http://issues.apache.org/jira/browse/SPARK-6055))
 * Hanging when using large broadcast variables ([SPARK-5363](http://issues.apache.org/jira/browse/SPARK-5363))

### Contributors
The following developers contributed to this release:

 * Andrew Or -- Bug fixes in Core and YARN
 * Andrew Rowson -- Bug fixes in YARN
 * Anselme Vignon -- Bug fixes in SQL
 * Brennon York -- Bug fixes in GraphX
 * Cheng Hao -- Bug fixes in Core
 * Cheolsoo Park -- Bug fixes in YARN
 * Davies Liu -- Improvements in PySpark; bug fixes in Streaming, Core, SQL, and PySpark; documentation in Core and PySpark
 * Emre Sevinc -- Documentation in Core and MLlib; improvement in Core
 * Gen TANG -- Bug fixes in EC2
 * Hari Shreedharan -- Bug fixes in Streaming
 * Hung Lin -- Bug fixes in scheduler
 * Iulian Dragos -- Test in Streaming
 * Jacek Lewandowski -- Bug fixes in Core
 * Jesper Lundgren -- Bug fixes in Streaming
 * Josh Rosen -- Bug fixes in Java API, Streaming, tests, and Core
 * Kashish Jain -- Bug fixes in YARN
 * Kay Ousterhout -- Bug fixes in Core and SQL
 * Kousuke Saruta -- Improvements in Streaming and tests
 * Li Zhihui -- Documentation in Core
 * Manoj Kumar -- Improvements in MLlib
 * Matt Cheah -- Bug fixes in Core
 * Michael Nazario -- Bug fixes in PySpark
 * Mingyu Kim -- Bug fixes in Core
 * Nathan McCarthy -- Bug fixes in Core
 * Nicholas Chammas -- Bug fixes in EC2
 * Peng Xu -- Documentation in Core
 * Reynold Xin -- Bug fixes in Core
 * Ryan Williams -- Improvements in Core
 * Sean Owen -- Improvements in EC2; bug fixes in Core, tests, YARN, Streaming, scheduler, and Web UI
 * Shixiong Zhu -- Improvements in Shuffle
 * Tathagata Das -- Bug fixes in Streaming and Web UI
 * Venkata Ramana Gollamudi -- Improvement in Core
 * Vladimir Grigor -- Bug fixes in EC2
 * Wang Tao -- Bug fixes in Core
 * Winston Chen -- Bug fixes in PySpark
 * Yin Huai -- Bug fixes in SQL
 * Yuhao Yang -- Bug fixes in MLlib
 * Zhan Zhang -- Bug fixes in Core
 * Zhang, Liye -- Bug fixes in Core

_Thanks to everyone who contributed!_

