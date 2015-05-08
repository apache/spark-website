---
layout: post
title: Spark Release 1.3.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.3.0 is the fourth release on the 1.X line. This release brings a new DataFrame API alongside the graduation of Spark SQL from an alpha project. It also brings usability improvements in Spark’s core engine and expansion of MLlib and Spark Streaming. Spark 1.3 represents the work of 174 contributors from more than 60 institutions in more than 1000 individual patches.

To download Spark 1.3 visit the <a href="{{site.url}}downloads.html">downloads</a> page.

### Spark Core
Spark 1.3 sees a handful of usability improvements in the core engine. The core API now supports [multi level aggregation trees](https://issues.apache.org/jira/browse/SPARK-5430) to help speed up expensive reduce operations. [Improved error reporting](https://issues.apache.org/jira/browse/SPARK-5063) has been added for certain gotcha operations. Spark's Jetty dependency is [now shaded](https://issues.apache.org/jira/browse/SPARK-3996) to help avoid conflicts with user programs. Spark now supports [SSL encryption](https://issues.apache.org/jira/browse/SPARK-3883) for some communication endpoints. Finaly, realtime [GC metrics](https://issues.apache.org/jira/browse/SPARK-3428) and [record counts](https://issues.apache.org/jira/browse/SPARK-4874) have been added to the UI. 

### DataFrame API
Spark 1.3 adds a new [DataFrames API](/docs/1.3.0/sql-programming-guide.html#dataframes) that provides powerful and convenient operators when working with structured datasets. The DataFrame is an evolution of the base RDD API that includes named fields along with schema information. It’s easy to construct a DataFrame from sources such as Hive tables, JSON data, a JDBC database, or any implementation of Spark’s new data source API. Data frames will become a common interchange format between Spark components and when importing and exporting data to other systems. Data frames are supported in Python, Scala, and Java.

### Spark SQL
In this release Spark SQL [graduates from an alpha project](https://issues.apache.org/jira/browse/SPARK-5166), providing backwards compatibility guarantees for the HiveQL dialect and stable programmatic API’s. Spark SQL adds support for [writing tables in the data sources API](https://issues.apache.org/jira/browse/SPARK-5658). A new [JDBC data source](https://issues.apache.org/jira/browse/SPARK-5472) allows importing and exporting from MySQL, Postgres, and other RDBMS systems. A variety of small changes have expanded the coverage of HiveQL in Spark SQL. Spark SQL also adds support schema evolution with the ability to [merging compatible schemas in Parquet](https://issues.apache.org/jira/browse/SPARK-3851).

### Spark ML/MLlib
In this release Spark MLlib introduces several new algorithms: latent Dirichlet allocation (LDA) for [topic modeling](https://issues.apache.org/jira/browse/SPARK-1405), [multinomial logistic regression](https://issues.apache.org/jira/browse/SPARK-2309) for multiclass classification, [Gaussian mixture model (GMM)](https://issues.apache.org/jira/browse/SPARK-5012) and [power iteration clustering](https://issues.apache.org/jira/browse/SPARK-4259) for clustering, [FP-growth](https://issues.apache.org/jira/browse/SPARK-4001) for frequent pattern mining, and [block matrix abstraction](https://issues.apache.org/jira/browse/SPARK-4409) for distributed linear algebra. Initial support has been added for [model import/export](https://issues.apache.org/jira/browse/SPARK-4587) in exchangeable format, which will be expanded in future versions to cover more model types in Java/Python/Scala. The implementations of k-means and ALS receive [updates](https://issues.apache.org/jira/browse/SPARK-3424, https://issues.apache.org/jira/browse/SPARK-3541) that lead to significant performance gain. PySpark now supports the [ML pipeline API](https://issues.apache.org/jira/browse/SPARK-4586) added in Spark 1.2, and [gradient boosted trees](https://issues.apache.org/jira/browse/SPARK-5094) and [Gaussian mixture model](https://issues.apache.org/jira/browse/SPARK-5012). Finally, the ML pipeline API has been ported to support the new DataFrames abstraction.

### Spark Streaming
Spark 1.3 introduces a new [*direct* Kafka API](https://issues.apache.org/jira/browse/SPARK-4964) ([docs](http://spark.apache.org/docs/1.3.0/streaming-kafka-integration.html)) which enables exactly-once delivery without the use of write ahead logs. It also adds a [Python Kafka API](https://issues.apache.org/jira/browse/SPARK-5047) along with infrastructure for additional Python API’s in future releases. An online version of [logistic regression](https://issues.apache.org/jira/browse/SPARK-4979) and the ability to read [binary records](https://issues.apache.org/jira/browse/SPARK-4969) have also been added. For stateful operations, support has been added for loading of an [initial state RDD](https://issues.apache.org/jira/browse/SPARK-3660). Finally, the streaming programming guide has been updated to include information about SQL and DataFrame operations within streaming applications, and important clarifications to the fault-tolerance semantics. 

### GraphX
GraphX adds a handful of utility functions in this release, including conversion into a [canonical edge graph](https://issues.apache.org/jira/browse/SPARK-4917).

## Upgrading to Spark 1.3
Spark 1.3 is binary compatible with Spark 1.X releases, so no code changes are necessary. This excludes API’s marked explicitly as unstable.

As part of stabilizing the Spark SQL API, the `SchemaRDD` class has been renamed to `DataFrame`. Spark SQL's [migration guide](http://spark.apache.org/docs/1.3.0/sql-programming-guide.html#migration-guide) describes the upgrade process in detail. Spark SQL also now requires that column identifiers which use reserved words (such as "string" or "table") be escaped using backticks.

### Known Issues
This release has few known issues which will be addressed in Spark 1.3.1:

 * [SPARK-6194](https://issues.apache.org/jira/browse/SPARK-6194): A memory leak in PySPark's `collect()`.
 * [SPARK-6222](https://issues.apache.org/jira/browse/SPARK-6222): An issue with failure recovery in Spark Streaming.
 * [SPARK-6315](https://issues.apache.org/jira/browse/SPARK-6315): Spark SQL can't read parquet data generated with Spark 1.1. 
 * [SPARK-6247](https://issues.apache.org/jira/browse/SPARK-6247): Errors analyzing certain join types in Spark SQL.

### Credits
 * Aaron Davidson -- Bug fixes in Core
 * Alex Baretta -- Improvement in Core
 * Alex Liu -- Improvements in Core and SQL; bug fixes in SQL
 * Alexander Bezzubov -- Documentation in Core
 * Alexander Ulanov -- Umbrella in MLlib; documentation in Core and MLlib; new features in MLlib
 * Andrew Ash -- Documentation in Core
 * Andrew Or -- Improvements in Core and YARN; bug fixes in Core and YARN
 * Andrew Rowson -- Bug fixes in YARN
 * Andrey Zagrebin -- Improvements in Core and PySpark
 * Antonio Navarro Perez -- Documentation in Core
 * Ben Cook -- Test in MLlib and PySpark; improvements in PySpark and SQL; new features in Core
 * Bilna P -- Test in Streaming
 * Brennon York -- New features in Core; bug fixes in Core, GraphX, and scheduler; improvement in Core
 * Burak Yavuz -- Improvements in spark submit and MLlib; new features in Core and MLlib; bug fixes in Core and spark submit; documentation in Core and MLlib
 * Cheng Hao -- Improvements in SQL; new features in SQL; bug fixes in Core and SQL
 * Cheng Lian -- Documentation in Core; test in SQL; improvements in Core and SQL; bug fixes in Core, tests, and SQL; improvement in SQL
 * Cheolsoo Park -- Bug fixes in YARN
 * Chip Senkbeil -- Bug fixes in Core
 * Christophe Preaud -- Improvements in Core
 * Cody Koeninger -- Improvements in Streaming
 * DB Tsai -- Improvements in MLlib; documentation in Core and MLlib; new features in MLlib; bug fixes in MLlib; improvement in MLlib
 * Dale Richardson -- Improvement in Core
 * Daniel Darabos -- Bug fixes in Core
 * Daoyuan Wang -- Improvement in SQL; improvements in Core and SQL; new features in Core and SQL; bug fixes in SQL; documentation in Core
 * David Y. Ross -- Umbrella in Core
 * Davies Liu -- Improvements in PySpark; documentation in Core and PySpark; new features in Streaming and PySpark; bug fixes in Streaming, Core, PySpark, MLlib, and SQL; improvement in PySpark and SQL
 * Derek Ma -- Bug fixes in Shuffle
 * Doing Done -- Improvements in SQL
 * Elmer Garduno -- Bug fixes in Core
 * Emre Sevinc -- Documentation in Core and MLlib
 * Eric Moyer -- Documentation in Core
 * Ernest -- Improvements in Core and GraphX
 * Evan Yu -- Bug fixes in Core
 * Fan Jiang -- New features in MLlib
 * Fernando Otero (ZeoS) -- Improvements in MLlib
 * Gabe Mulley -- Bug fixes in PySpark and SQL
 * Gang Li -- Bug fixes in Core
 * Gankun Luo -- Improvements in Core; bug fixes in SQL
 * Gaspar Munoz -- Documentation in Core
 * Gen TANG -- Bug fixes in EC2
 * Grzegorz Dubicki -- Improvements in EC2
 * Guo Wei -- Bug fixes in SQL
 * GuoQiang Li -- Improvements in Core; bug fixes in Core and YARN
 * Hari Shreedharan -- Bug fixes in Streaming, tests, and YARN
 * Holden Karau -- Improvements in EC2
 * Huang Zhaowei -- Bug fixes in Core and YARN
 * Hung Lin -- Improvements in SQL
 * Ilayaperumal Gopinathan -- Bug fixes in Streaming
 * Ilya Ganelin -- Improvements in Core; bug fixes in Core and Shuffle
 * Imran Rashid -- Bug fixes in Core
 * Iulian Dragos -- Test in Streaming
 * Ivan Vergiliev -- Improvements in Core
 * Jacek Lewandowski -- Bug fixes in Core
 * Jacky Li -- Improvements in MLlib and SQL; new features in MLlib; bug fixes in MLlib and SQL
 * Jakub Dubovsky -- Improvements in MLlib
 * Jeremy Freeman -- Improvements in Streaming and PySpark; new features in Streaming and MLlib; bug fixes in MLlib and PySpark
 * Jesper Lundgren -- Bug fixes in Streaming
 * Jongyoul Lee -- Improvements in Core and Mesos; documentation in Streaming; bug fixes in Core, Mesos, and SQL
 * Joseph J.C. Tang -- Bug fixes in MLlib
 * Joseph K. Bradley -- New features in MLlib; umbrella in MLlib; documentation in Core and MLlib; improvement in MLlib; improvements in GraphX, MLlib, and SQL; bug fixes in Core, GraphX, PySpark, MLlib, and SQL
 * Josh Rosen -- Bug fixes in Core
 * Josh Rosen -- Improvements in Core, tests, EC2, and SQL; new features in Core; bug fixes in Core, tests, PySpark, Streaming, scheduler, SQL, spark submit, and Web UI
 * Judy Nash -- New features in SQL
 * Kai Sasaki -- Documentation in Core and PySpark; bug fixes in Core and MLlib
 * Kanwaljit Singh -- Bug fixes in Core
 * Kashish Jain -- Bug fixes in YARN
 * Kay Ousterhout -- Improvements in Web UI; new features in Core; bug fixes in Core and SQL
 * Kazuki Taniguchi -- New features in MLlib and PySpark
 * Kenji Kikushima -- Bug fixes in GraphX
 * Kenneth Myers -- Documentation in Streaming
 * Kirill A. Korinskiy -- Bug fixes in Web UI
 * Kostas Sakellis -- Improvements in Core, Web UI, and YARN; bug fixes in Core; improvement in Core
 * Kousuke Saruta -- Improvements in Core, Web UI, and YARN; new features in Streaming and PySpark; bug fixes in Core and Web UI; documentation in Core
 * Kuldeep -- Bug fixes in SQL
 * Li Zhihui -- Documentation in Core
 * Liang-Chi Hsieh -- Improvements in Core, MLlib, and SQL; test in Core; documentation in Core; bug fixes in Core and SQL
 * Liangliang Gu -- Bug fixes in Web UI
 * Lianhui Wang -- Improvements in YARN; bug fixes in Core and YARN
 * Liu Hao -- Bug fixes in GraphX
 * Liu Jiongzhou -- Bug fixes in MLlib
 * Lu Yan -- Improvements in SQL
 * Lukasz Jastrzebski -- Bug fixes in Core
 * Madhu Siddalingaiah -- Documentation in Core
 * Makoto Fukuhara -- Improvements in Core
 * Manoj Kumar -- Improvements in MLlib and PySpark; documentation in Core and MLlib
 * Marcelo Vanzin -- Improvements in Core and YARN; bug fixes in Core, PySpark, YARN, and SQL
 * Markus Dale -- Bug fixes in Core
 * Martin Zapletal -- Documentation in Core and MLlib; new features in MLlib
 * Masayoshi TSUZUKI -- Improvements in Web UI; bug fixes in Windows, Core, and YARN
 * Matei Zaharia -- Improvements in Core
 * Matt Whelan -- Bug fixes in Core
 * Matthew Cheah -- Bug fixes in Core
 * Mayur Rustagi -- Documentation in Streaming
 * Meethu Mathew -- New features in MLlib and PySpark
 * Michael Armbrust -- Improvements in Core; bug fixes in Core, MLlib, and SQL; improvement in SQL
 * Michael Davies -- Improvements in SQL
 * Michael Nazario -- Improvements and bug fixes in PySpark
 * Mike Jennings -- New features in EC2
 * Mingyu Kim -- Bug fixes in Core
 * Nan Zhu -- Improvements in Streaming; documentation in Core; bug fixes in Core and Streaming
 * Nate Crosswhite -- Improvements in MLlib and PySpark
 * Nathan Kronenfeld -- Bug fixes in Core
 * Nathan McCarthy -- Bug fixes in Core
 * Nicholas Chammas -- Improvements in EC2; umbrella in EC2; bug fixes in EC2; documentation in Core
 * Nishkam Ravi -- Bug fixes in Core
 * Octavian Geagla -- Improvements in MLlib
 * Patrick Wendell -- Improvements in Core; bug fixes in Core, tests, and Streaming; improvement in Core
 * Paul Power -- Documentation in Core
 * Peishen Jia -- New features in MLlib
 * Peng Xu -- Documentation in Core
 * Peter Klipfel -- Documentation in Core
 * Peter Rudenko -- Improvements in MLlib
 * Peter Vandenabeele -- Documentation in Core
 * Prabeesh K -- Improvements in Streaming
 * Prashant Sharma -- New features in Core; bug fixes in Core; improvement in Core and Web UI
 * RJ Nowling -- New features in MLlib and PySpark
 * Ravindra Pesala -- Improvements in SQL
 * Reynold Xin -- Improvements in Core, Shuffle, and SQL; documentation in Core; bug fixes in Core and SQL; improvement in Java API and SQL
 * Reza Zadeh -- Improvements in MLlib
 * Ryan Williams -- Improvements, bug fixes, and documentation in Core
 * Sadhan Sood -- Bug fixes in SQL
 * Saisai Shao -- Improvements in Streaming; bug fixes in Streaming, SQL, and Core; improvement in Streaming
 * Sam Halliday -- Improvements in Core
 * Sandy Ryza -- Improvements in Core and YARN; bug fixes in Core and YARN; improvement in YARN
 * Sasaki Toru -- Improvements in SQL
 * Sean Owen -- Documentation in Core; wish in Core; improvements in Java API, Core, MLlib, EC2, and Streaming; bug fixes in Core, tests, MLlib, YARN, Streaming, SQL, Java API, Web UI, and GraphX; improvement in Core
 * Shekhar Bansal -- Bug fixes in YARN
 * Sheng Li -- Improvements in Core and SQL; new features in SQL; bug fixes in SQL; documentation in Core
 * Shixiong Zhu -- Test in Core; improvement in Core; improvements in Streaming, SQL, Shuffle, YARN, and Core; bug fixes in Core, SQL, and Streaming; documentation in Core, YARN, and Streaming
 * Shuo Xiang -- New features in MLlib
 * Soumitra Kumar -- New features in Streaming
 * Stephen Boesch -- Documentation in Core and MLlib
 * Stephen Haberman -- Bug fixes in Core
 * Su Yan -- Improvements in Core; bug fixes in Core and Web UI
 * Takayuki Hasegawa -- Bug fixes in Project Infra
 * Takeshi Yamamuro -- Improvements in GraphX; documentation in Core and SQL; bug fixes in GraphX
 * Takuya UESHIN -- Improvements and bug fixes in SQL
 * Tathagata Das -- Improvements in Streaming; bug fixes in Core, Web UI, PySpark, tests, and Streaming
 * Thomas Graves -- Bug fixes in Core
 * Thu Kyaw -- Improvements in Core and SQL
 * Timothy Chen -- Documentation in Core
 * Tingjun Xu -- Improvements in Core; bug fixes in Core and YARN
 * Tobias Schlatter -- Improvements and bug fixes in Core
 * Tom Panning -- Bug fixes in SQL
 * Tor Myklebust -- Improvements in SQL
 * Travis Galoppo -- Improvements in MLlib; documentation in Core and MLlib; new features in MLlib
 * Tsuyoshi Ozawa -- Documentation in Core and YARN
 * Uncle Gen -- Improvements in spark submit and Web UI; bug fixes in Core
 * Varun Saxena -- Improvements in Core
 * Venkata Ramana Gollamudi -- Bug fixes in Core and SQL; improvement in Core
 * Vladimir Grigor -- Bug fixes in EC2
 * Vladimir Vladimirov -- Improvements in PySpark
 * Wang Fei -- Improvement in SQL; improvements in Web UI and SQL; bug fixes in SQL; documentation in Core
 * Wang Tao -- Improvements in Core and YARN; bug fixes in Core and YARN
 * Wenchen Fan -- Bug fixes in SQL
 * Winston Chen -- Bug fixes in PySpark
 * Xiangrui Meng -- Improvements in PySpark, Core, Streaming, EC2, and MLlib; documentation in Core and MLlib; new features in MLlib and PySpark; bug fixes in PySpark, MLlib, and SQL; improvement in MLlib and PySpark
 * Xiaohua Yi -- Bug fixes in SQL
 * Xiaojing Wang -- Test in SQL; improvements in SQL; documentation in Core
 * Xu Kun -- Bug fixes in Core
 * Yadong Qi -- Bug fixes in SQL; Improvements in Streaming
 * Yanbo Liang -- Bug fixes in SQL, MLlib, and PySpark
 * Yandu Oppacher -- Improvements in PySpark
 * Yantang Zhai -- Improvements in Core and SQL; bug fixes in SQL
 * Yash Datta -- Bug fixes in SQL
 * Ye Xianjin -- Bug fixes in Core
 * Yi Tian -- Improvements and bug fixes in SQL
 * Yin Huai -- Documentation in Core; improvements in SQL; bug fixes in SQL; improvement in SQL
 * Yuhao Yang -- Improvements and bug fixes in MLlib
 * Yuri Saito -- Improvements in MLlib
 * Yuu ISHIKAWA -- New features in MLlib
 * Zhan Zhang -- Bug fixes in Core and YARN
 * Zhang, Liye -- Improvements in Core and Web UI; bug fixes in Core

_Thanks to everyone who contributed!_
