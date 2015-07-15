---
layout: post
title: Spark Release 1.4.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.4.1 is a maintenance release containing stability fixes. This release is based on the [branch-1.4](https://github.com/apache/spark/tree/branch-1.4) maintenance branch of Spark. We recommend all 1.4.0 users to upgrade to this stable release. 85 developers contributed to this release.

To download Spark 1.4.1 visit the <a href="{{site.url}}downloads.html">downloads</a> page.

### Fixes
Spark 1.4.1 contains several bug fixes in Spark SQL and assorted fixes in other components. Some of the more important fixes are highlighted below. You can visit the [Spark issue tracker](https://issues.apache.org/jira/issues/?jql=project%20%3D%20SPARK%20AND%20fixVersion%20%3D%201.4.1%20ORDER%20BY%20priority%2C%20component) for the full list of fixes.

#### MLLib

 * [SPARK-8151](https://issues.apache.org/jira/browse/SPARK-8151): Pipeline components should correctly implement copy
 * [SPARK-8468](https://issues.apache.org/jira/browse/SPARK-8468): Some metrics in RegressionEvaluator should have negative sign
 * [SPARK-8736](https://issues.apache.org/jira/browse/SPARK-8736): GBTRegressionModel shouldn’t threshold predictions
 * [SPARK-8563](https://issues.apache.org/jira/browse/SPARK-8563): IndexedRowMatrix.computeSVD() yields the U with wrong numCols

#### PySpark

 * [SPARK-8202](https://issues.apache.org/jira/browse/SPARK-8202): Infinite loop during external sort
 * [SPARK-8573](https://issues.apache.org/jira/browse/SPARK-8573): Trigger exceptions when invalid operators are used
 * [SPARK-8766](https://issues.apache.org/jira/browse/SPARK-8766): Support non ASCII characters in columns

#### Data Sources and DataFrames

 * [SPARK-8804](https://issues.apache.org/jira/browse/SPARK-8804): Order of UTF8String is not consistent with String if there is any non-ascii character in it
 * [SPARK-8406](https://issues.apache.org/jira/browse/SPARK-8406): Race condition when writing Parquet files
 * [SPARK-8329](https://issues.apache.org/jira/browse/SPARK-8329): DataSource options parser no longer accepts '_'
 * [SPARK-8368](https://issues.apache.org/jira/browse/SPARK-8368): ClassNotFoundException in closure for map
 * [SPARK-8470](https://issues.apache.org/jira/browse/SPARK-8470): MissingRequirementError for ScalaReflection on user classes
 * [SPARK-8358](https://issues.apache.org/jira/browse/SPARK-8358): DataFrame explode with alias and * fails
 
#### SparkR
 * [SPARK-8506](https://issues.apache.org/jira/browse/SPARK-8506): Support for Spark packages when initializing SparkR
 * [SPARK-8085](https://issues.apache.org/jira/browse/SPARK-8085): Support for user defined schemas when reading from data sources

### Contributors
The following developers contributed to this release:

 * Adam Roberts -- Bug fixes in Core and tests
 * Ai He -- Improvements in PySpark
 * Alok Singh -- Bug fixes in Core
 * Amey Chaugule -- Improvement in SQL
 * Andrew Or -- Bug fixes in Core, tests, Shuffle, spark submit, and SQL; improvement in Web UI and tests
 * Animesh Baranawal -- Improvement in SQL
 * Ben Fradet -- Bug fixes in Streaming and Web UI
 * Brian Lockwood -- Documentation in Core
 * Burak Yavuz -- Test in SQL; improvements in spark submit; bug fixes in spark submit and SQL; improvement in SQL
 * Carson Wang -- Bug fixes in Core and Web UI
 * Cheng Hao -- Bug fixes in SQL
 * Cheng Lian -- Documentation in Core; bug fixes in SQL
 * Cheolsoo Park -- Improvement in SQL
 * Chris Freeman -- Bug fixes in r
 * Christian Kadner -- Bug fixes in SQL
 * Cody Koeninger -- Improvements and improvement in Streaming
 * DB Tsai -- New features in MLlib
 * Daniel Darabos -- Bug fixes in EC2
 * Daoyuan Wang -- Bug fixes in SQL
 * Davies Liu -- Bug fixes in PySpark; improvement in SQL and PySpark
 * Devaraj K -- Bug fixes in YARN
 * Dibyendu Bhattacharya -- Bug fixes in Streaming and Web UI
 * Favio Vazquez -- Documentation in Core and MLlib
 * Hari Shreedharan -- Bug fixes in Streaming and Core
 * Holden Karau -- Documentation in Core; bug fixes in sparkr, Shuffle, and MLlib
 * Hossein Falaki -- Improvements and bug fixes in sparkr
 * Huang Zhaowei -- Bug fixes in Streaming and YARN
 * Jean Lyn -- Bug fixes in SQL
 * Joseph K. Bradley -- Improvements in MLlib; bug fixes in MLlib; improvement in Core and MLlib
 * Josh Rosen -- New features in SQL; bug fixes in scheduler and SQL; improvement in Core
 * Kevin Conor -- Bug fixes in PySpark
 * Kousuke Saruta -- Documentation in Core
 * Lars Francke -- Documentation in Core
 * Lee -- Bug fixes in MLlib
 * Liang-Chi Hsieh -- Improvements in SQL; bug fixes in MLlib and SQL
 * Lianhui Wang -- Bug fixes in Shuffle
 * Luca Martinetti -- Documentation in Core
 * Manoj Kumar -- Improvements in SQL; bug fixes in MLlib and PySpark
 * Marcelo Vanzin -- Improvements in Core; bug fixes in Core and Web UI
 * Mark Smith -- Bug fixes in EC2
 * Michael Armbrust -- Bug fixes in SQL
 * Mike Dusenberry -- Improvements in PySpark, Core, SQL, and Streaming
 * Moussa Taifi -- Documentation in Core
 * Nathan Howell -- Bug fixes in SQL
 * Navis Ryu -- Bug fixes in SQL
 * Neelesh Srinivas Salian -- Documentation in Core and YARN
 * Oleksiy Dyagilev -- Bug fixes in Core and MLlib
 * Paavo Parkkinen -- Bug fixes in Streaming and MLlib
 * Patrick Wendell -- Improvements in Core
 * Punya Biswal -- Bug fixes in Core
 * Qian Huang -- New features in sparkr
 * Radek Ostrowski -- Documentation in Core
 * Ram Sriharsha -- New features in MLlib and PySpark
 * Rekha Joshi -- Improvements in Web UI
 * Reynold Xin -- Bug fixes and improvement in SQL
 * Rosstin Murphy -- Documentation in Core
 * Ryan Williams -- Bug fixes in Core
 * Saisai Shao -- Bug fixes in Core and Streaming
 * Scott Taylor -- Test in PySpark
 * Sean Owen -- Improvements and bug fixes in Core
 * Sephiroth Lin -- Improvements in YARN
 * Shiming Fei -- Bug fixes in Core
 * Shivaram Venkataraman -- Improvements in Core, EC2, and sparkr; bug fixes in sparkr and EC2
 * Shixiong Zhu -- Test in Streaming, tests, and Core; improvements in Streaming and Core; bug fixes in Core, tests, PySpark, and Streaming
 * Simon Hafner -- Bug fixes in EC2
 * Sun Rui -- Bug fixes in Core and sparkr
 * Tao Li -- Bug fixes in YARN
 * Tathagata Das -- Improvements in Core and Streaming; bug fixes in Core
 * Ted Blackman -- Bug fixes in PySpark
 * Ted Yu -- Bug fixes in SQL
 * Tim Ellison -- Bug fixes in Core
 * Timothy Chen -- Bug fixes in Web UI and Mesos
 * Tingjun Xu -- Improvements in Core
 * Tom Graves -- Bug fixes in Core
 * Vinod K C -- Improvements and bug fixes in SQL
 * Vyacheslav Baranov -- Bug fixes in Core
 * Wang Tao -- Bug fixes in Core and YARN
 * Wenchen Fan -- Improvement in SQL
 * Xiangrui Meng -- Bug fixes in MLlib
 * Yanbo Liang -- Improvements in Core, MLlib, and PySpark
 * Yin Huai -- Improvements in Core, tests, and SQL; bug fixes in tests and SQL; improvement in tests and SQL
 * Yu ISHIKAWA -- Improvements in PySpark; improvement in sparkr
 * Yuhao Yang -- Bug fixes in MLlib
 * Yuming Wang -- Github integration in Web UI
 * Yuri Saito -- Bug fixes in PySpark

_Thanks to everyone who contributed!_

