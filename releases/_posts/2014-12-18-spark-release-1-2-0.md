---
layout: post
title: Spark Release 1.2.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.2.0 is the third release on the 1.X line. This release brings performance and usability improvements in Spark’s core engine, a major new API for MLlib, expanded ML support in Python, a fully H/A mode in Spark Streaming, and much more. GraphX has seen major performance and API improvements and graduates from an alpha component. Spark 1.2 represents the work of 172 contributors from more than 60 institutions in more than 1000 individual patches.

To download Spark 1.2 visit the <a href="{{site.baseurl}}/downloads.html">downloads</a> page.

### Spark Core
In 1.2 Spark core upgrades two major subsystems to improve the performance and stability of very large scale shuffles. The first is Spark’s communication manager used during bulk transfers, which upgrades to a [netty-based implementation](https://issues.apache.org/jira/browse/SPARK-2468). The second is Spark’s shuffle mechanism, which upgrades to the [“sort based” shuffle initially released in Spark 1.1](https://issues.apache.org/jira/browse/SPARK-3280). These both improve the performance and stability of very large scale shuffles. Spark also adds an [elastic scaling mechanism](https://issues.apache.org/jira/browse/SPARK-3174) designed to improve cluster utilization during long running ETL-style jobs. This is currently supported on YARN and will make its way to other cluster managers in future versions. Finally, Spark 1.2 adds support for Scala 2.11. For instructions on building for Scala 2.11 see the [build documentation](/docs/1.2.0/building-spark.html#building-for-scala-211).

### Spark Streaming
This release includes two major feature additions to Spark’s streaming library, a Python API and a write ahead log for full driver H/A. The [Python API](https://issues.apache.org/jira/browse/SPARK-2377) covers almost all the DStream transformations and output operations. Input sources based on text files and text over sockets are currently supported. Support for Kafka and Flume input streams in Python will be added in the next release. Second, Spark streaming now features H/A driver support through a [write ahead log (WAL)](https://issues.apache.org/jira/browse/SPARK-3129). In Spark 1.1 and earlier, some buffered (received but not yet processed) data can be lost during driver restarts. To prevent this Spark 1.2 adds an optional WAL, which buffers received data into a fault-tolerant file system (e.g. HDFS). See the [streaming programming guide](/docs/1.2.0/streaming-programming-guide.html) for more details. 

### MLLib
Spark 1.2 previews a new set of machine learning API’s in a package called spark.ml that [supports learning pipelines](https://issues.apache.org/jira/browse/SPARK-3530), where multiple algorithms are run in sequence with varying parameters. This type of pipeline is common in practical machine learning deployments. The new ML package uses Spark’s SchemaRDD to represent [ML datasets](https://issues.apache.org/jira/browse/SPARK-3573), providing direct interoperability with Spark SQL. In addition to the new API, Spark 1.2 extends decision trees with two tree ensemble methods: [random forests](https://issues.apache.org/jira/browse/SPARK-1545) and [gradient-boosted trees](https://issues.apache.org/jira/browse/SPARK-1547), among the most successful tree-based models for classification and regression. Finally, MLlib's Python implementation receives a major update in 1.2 to simplify the process of adding Python APIs, along with better Python API coverage.

### Spark SQL
In this release Spark SQL adds a [new API for external data sources](https://issues.apache.org/jira/browse/SPARK-3247). This API supports mounting external data sources as temporary tables, with support for optimizations such as predicate pushdown. Spark’s [Parquet](https://issues.apache.org/jira/browse/SPARK-4413) and JSON bindings have been re-written to use this API and we expect a variety of community projects to integrate with other systems and formats during the 1.2 lifecycle.

Hive integration has been improved with support for the [fixed-precision decimal type](https://issues.apache.org/jira/browse/SPARK-3929) and [Hive 0.13](https://issues.apache.org/jira/browse/SPARK-2706). Spark SQL also adds [dynamically partitioned inserts](https://issues.apache.org/jira/browse/SPARK-3007), a popular Hive feature. An internal re-architecting around caching improves the performance and semantics of [caching SchemaRDD](https://issues.apache.org/jira/browse/SPARK-3212) instances and adds support for [statistics-based partition pruning](https://issues.apache.org/jira/browse/SPARK-2961) for cached data.

### GraphX
In 1.2 GraphX graduates from an alpha component and adds a stable API. This means applications written against GraphX are guaranteed to work with future Spark versions without code changes. A new core API, aggregateMessages, is introduced to replace the now deprecated mapReduceTriplet API. The new aggregateMessages API features a more imperative programming model and improves performance. Some early test users found 20% - 1X performance improvement by switching to the new API.

In addition, Spark now supports [graph checkpointing](https://issues.apache.org/jira/browse/SPARK-3623) and [lineage truncation](https://issues.apache.org/jira/browse/SPARK-4672) which are necessary to support large numbers of iterations in production jobs. Finally, a handful of performance improvements have been added for [PageRank](https://issues.apache.org/jira/browse/SPARK-3427) and [graph loading](https://issues.apache.org/jira/browse/SPARK-4646).

### Other Notes
 * PySpark’s sort operator now supports external spilling for large datasets.
 * PySpark now supports broadcast variables [larger than 2GB](https://issues.apache.org/jira/browse/SPARK-3721) and performs [external spilling during sorts](https://issues.apache.org/jira/browse/SPARK-3073).
 * Spark adds a [job-level progress page in the Spark UI](https://issues.apache.org/jira/browse/SPARK-4145), a [stable API for progress reporting](https://issues.apache.org/jira/browse/SPARK-2321), and [dynamic updating of output metrics](https://issues.apache.org/jira/browse/SPARK-3179) as jobs complete.
 * Spark now has support for [reading binary files](https://issues.apache.org/jira/browse/SPARK-2759) for images and other binary formats.

### Upgrading to Spark 1.2

Spark 1.2 is binary compatible with Spark 1.0 and 1.1, so no code changes are necessary. This excludes APIs marked explicitly as unstable. Spark changes default configuration in a handful of cases for improved performance. Users who want to preserve identical configurations to Spark 1.1 can roll back these changes.

1. `spark.shuffle.blockTransferService` has been changed from `nio` to `netty`
2. `spark.shuffle.manager` has been changed from `hash` to `sort`
3. In PySpark, the default batch size has been changed to 0, which means the batch size is chosen based on the size of object.  Pre-1.2 behavior can be restored using `SparkContext([... args... ], batchSize=1024)`.
4. Spark SQL has changed the following defaults:
 * `spark.sql.parquet.cacheMetadata`: `false` -> `true`
 * `spark.sql.parquet.compression.codec`: `snappy` -> `gzip`
 * `spark.sql.hive.convertMetastoreParquet`: `false` -> `true`
 * `spark.sql.inMemoryColumnarStorage.compressed`: `false` -> `true`
 * `spark.sql.inMemoryColumnarStorage.batchSize`: `1000` -> `10000`
 * `spark.sql.autoBroadcastJoinThreshold`: `10000` -> `10485760` (10 MB)

#### Known Issues
A few smaller bugs did not make the release window. They will be fixed in Spark 1.2.1:

 * Netty shuffle does not respect secured port configuration. Work around - revert to nio shuffle: [SPARK-4837](https://issues.apache.org/jira/browse/SPARK-4837)
 * java.io.FileNotFound exceptions when creating EXTERNAL hive tables. Work around - set hive.stats.autogather = false. [SPARK-4892](https://issues.apache.org/jira/browse/SPARK-4892).
 * Exception PySpark zip function on textfile inputs: [SPARK-4841](https://issues.apache.org/jira/browse/SPARK-4841)
 * MetricsServlet not properly initialized: [SPARK-4595](https://issues.apache.org/jira/browse/SPARK-4841)

### Credits
 * Aaron Davidson -- Improvements in Core; bug fixes in Core and Shuffle; improvement in Core and Shuffle
 * Aaron Staple -- Improvements in Core, MLlib, and Streaming; new features in PySpark; bug fixes in SQL
 * Adam Pingel -- Improvement in Core
 * Ahir Reddy -- Improvements in Core
 * Akshat Aranya -- Bug fixes in Core
 * Alex Liu -- Bug fixes in SQL
 * Alexander Ulanov -- New features in MLlib
 * Allan Douglas R. De Oliveira -- Improvements in Core
 * Anand Avati -- Improvement in Core
 * Anant Asthana -- Improvement in Core, MLlib, and SQL
 * Andrew Ash -- Documentation and bug fixes in Core
 * Andrew Bullen -- Bug fixes in MLlib
 * Andrew Or -- Improvements in Core and YARN; bug fixes in Windows, Core, and YARN; improvement in Core and YARN
 * Andy Konwinski -- Documentation in Core
 * Aniket Bhatnagar -- Bug fixes in Core and Streaming
 * Ankur Dave -- Improvements and bug fixes in GraphX
 * Arun Ahuja -- Documentation in Core
 * Benoy Antony -- Bug fixes in Web UI and YARN
 * Bertrand Bossy -- Bug fixes in Core
 * Bill Bejeck -- Bug fixes in Core
 * Brenden Matthews -- Bug fixes in Mesos
 * Burak Yavuz -- New features in MLlib
 * Chao Chen -- Improvements and documentation in Core
 * Cheng Hao -- Test, improvements, new features, bug fixes, and improvement in SQL
 * Cheng Lian -- Improvements in Core and SQL; test in SQL; new features in SQL; bug fixes in Core and SQL; documentation in Core
 * Chester Chen -- Bug fixes in YARN
 * Chip Senkbeil -- New features in Core
 * Chirag Aggarwal -- Bug fixes in SQL
 * Chris Cope -- Bug fixes in YARN
 * Christoph Sawade -- Improvements in MLlib and PySpark
 * Cody Koeninger -- Improvements in SQL
 * Colin Patrick Mccabe -- Improvements in Core
 * DB Tsai -- Improvements and improvement in MLlib
 * Dale Richardson -- Improvements in Core
 * Dan McClary -- New features in SQL
 * Dan Osipov -- New features in EC2
 * Daoyuan Wang -- Improvements in Core and SQL; new features in SQL; bug fixes in Core and SQL; documentation in Core
 * Davies Liu -- Improvements in Core, SQL, MLlib, and PySpark; new features in Core, Streaming, PySpark, and MLlib, and PySpark; bug fixes in Streaming, Core, SQL, MLlib, and PySpark; documentation in Core
 * Derek Ma -- Bug fixes in Core and Streaming
 * DoingDone9 -- Bug fixes in SQL
 * Egor Pahomov -- Bug fixes in Core
 * Eric Eijkelenboom -- Bug fixes in Core
 * Eric Liang -- Bug fixes in Core and SQL
 * Erik Erlandson -- Improvements and improvement in Core
 * Eugen Cepoi -- Improvements in Core
 * Fairiz Azizi -- Improvements in Core
 * Felix Maximilian Moller -- Documentation in Core
 * Gankun Luo -- Bug fixes in SQL
 * Grega Kespret -- Documentation in Core
 * GuoQiang Li -- Improvements in Core and MLlib; bug fixes in Core, Web UI, MLlib, and PySpark; improvement in YARN
 * Hari Shreedharan -- Bug fixes and improvement in Streaming
 * Henry Cook -- Documentation in Core
 * Holden Karau -- Documentation in Core; bug fixes in PySpark
 * Hong Shen -- Improvements in Core
 * Hossein Falaki -- Bug fixes in Web UI
 * Ian Hummel -- Improvements in Core
 * Jacky Li -- Bug fixes in Core
 * Jakub Dubovsky -- Bug fixes in Core
 * Jascha Swisher -- Bug fixes in Core
 * Jay Vyas -- Documentation in Core
 * Jeremy Freeman -- New features in Streaming and MLlib; bug fixes in Core and PySpark
 * Jey Kottalam -- Bug fixes in Core
 * Jie Huang -- Documentation and bug fixes in Core
 * Jim Carroll -- Improvements and bug fixes in SQL
 * Jim Lim -- Improvements in Core; bug fixes in YARN
 * Jongyoul Lee -- Bug fixes in Core and Mesos
 * Joseph Bradley -- Improvements in MLlib
 * Joseph E. Gonzalez -- Documentation in Core; bug fixes in GraphX and MLlib
 * Joseph K. Bradley -- Improvements in Core and MLlib; new features in MLlib and SQL; bug fixes in MLlib; documentation in Core and MLlib
 * Josh Rosen -- Improvements in Java API, Core, Web UI, and Shuffle; new features in Java API, Core, and Web UI; bug fixes in Core, PySpark, and Streaming; documentation in Core
 * Kai Sasaki -- Bug fixes in Core
 * Kay Ousterhout -- Improvements in Core and Web UI; bug fixes in Core and Web UI
 * Ken Takagiwa -- Documentation in Core
 * Kenichi Maehashi -- Improvements in Core
 * Kevin Mader -- Improvements in Java API and Core
 * Kousuke Saruta -- Improvements in Project Infra, Core, PySpark, YARN, SQL, and Web UI; bug fixes in Core, PySpark, MLlib, YARN, SQL, and Web UI; documentation in Core
 * Larry Xiao -- Improvements and bug fixes in GraphX
 * Li Zhihui -- Improvements in Core
 * Liang-Chi Hsieh -- Improvements in Core; bug fixes in Core and SQL
 * Lianhui Wang -- Bug fixes in GraphX
 * Lijie Xu -- Bug fixes in Core and GraphX
 * Liquan Pei -- Documentation in Core; new features in MLlib and PySpark
 * Liu Hao -- Bug fixes in Core
 * Lu Lu -- Improvements in GraphX
 * Madhu Siddalingaiah -- Documentation in Core
 * Manish Amde -- Improvements and new features in MLlib
 * Marcelo Vanzin -- Test in YARN; improvement in Core and YARN; new features in Core; bug fixes in Core and YARN; improvements in Core
 * Mario Pastorelli -- Documentation in Core
 * Mark G. Whitney -- Documentation in YARN
 * Mark Hamstra -- Bug fixes in Core
 * Mark Mims -- Improvements in Web UI
 * Martin Weindel -- Documentation in Core and Mesos
 * Masayoshi TSUZUKI -- Improvements in Windows, Core, and PySpark; bug fixes in Windows, Core, and PySpark
 * Matei Zaharia -- Improvement in Core and SQL; bug fixes in Core and SQL
 * Matthew Cheah -- Bug fixes in Core
 * Matthew Farrellee -- Improvements in Core; new features in PySpark; bug fixes in Core and PySpark
 * Matthew Rocklin -- Bug fixes in Core
 * Matthew Taylor -- Bug fixes in SQL
 * Michael Armbrust -- Improvements in SQL; new features in SQL; bug fixes in Core, PySpark, and SQL; documentation in Core
 * Michael Griffiths -- Bug fixes in PySpark
 * Michelangelo D'Agostino -- Improvements in MLlib and PySpark
 * Mike Timper -- Bug fixes in SQL
 * Min Shen -- Bug fixes in YARN
 * Mingfei Shi -- Bug fixes in Core
 * Mubarak Seyed -- Improvements in Streaming
 * NamelessAnalyst -- Improvements in GraphX
 * Nan Zhu -- Bug fixes and Improvements in Core
 * Nathan Artz -- Documentation in Core
 * Nathan Howell -- Bug fixes in SQL
 * Nicholas Chammas -- Improvement in Core; improvements in Project Infra, Core, and EC2; bug fixes in Project Infra, EC2, and SQL; documentation in Core
 * Niklas Wilcke -- Improvements in MLlib; bug fixes in Core
 * Nishkam Ravi -- Bug fixes in Core
 * Oded Zimerman -- Bug fixes in GraphX
 * Patrick Wendell -- Improvements in Core; bug fixes in Project Infra, Core, and Mesos
 * Prashant Sharma -- Improvements in Core; bug fixes in Streaming and Core; improvement in Core, YARN, and Streaming
 * Praveen Seluka - New feature in Core
 * Qiping Li -- Improvements and new features in MLlib
 * RJ Nowling -- Improvements in MLlib; bug fixes in GraphX; documentation in Core
 * Ravindra Pesala -- Improvements, new features, and bug fixes in SQL
 * Raymond Liu -- Improvement in Core and Shuffle
 * Renat Yusupov -- Bug fixes in SQL
 * Reno Zhang -- Improvements in YARN
 * Reynold Xin -- Improvements in Core, Shuffle, EC2, and SQL; new features in Project Infra, Core, and EC2; bug fixes in Core and SQL; improvement in Core, Shuffle, and SQL
 * Reza Zadeh -- Improvements in Core; new features in MLlib; documentation in Core
 * Rob O'Dwyer -- Improvements in PySpark
 * Rong Gu -- Improvements in Core
 * Rui Li -- New features in Java API
 * Saisai Shao -- Improvements in Streaming; bug fixes in Streaming and Shuffle
 * Sandy Ryza -- Improvements in Core, MLlib, and YARN; new features in Core; bug fixes in Core and SQL
 * Santiago M. Mola -- Documentation in Core
 * Sean Owen -- Improvement in Streaming; improvements in Core and Streaming; new features in Core; bug fixes in Java API, Core, MLlib, and Streaming; documentation in Core
 * Shane Knapp -- Bug fixes in Core
 * Shiti Saxena -- Improvement in Core
 * Shivaram Venkataraman -- Improvements in Core; bug fixes in Core and EC2
 * Shixiong Zhu -- Test in Core; improvements in Core and Web UI; bug fixes in Core, Web UI, and YARN; documentation in Streaming and Core
 * Bai Shou -- Improvements and bug fixes in SQL
 * Shuo Xiang -- New features and bug fixes in MLlib
 * Su Yan -- Bug fixes in Core
 * Sung Chung -- Improvements in MLlib
 * Surong Quan -- Improvements in Streaming
 * Takuya UESHIN -- Test in SQL; documentation in Core; bug fixes in Core and SQL; improvements in SQL
 * Tal Sliwowicz -- Bug fixes in Core
 * Tathagata Das -- Improvements in Core and Streaming; bug fixes in Streaming and Core; improvement in Streaming
 * Ted Yu -- Bug fixes and improvement in Core
 * Thomas Graves -- Bug fixes in Core and YARN
 * Tianshuo Deng -- Bug fixes in Core and Shuffle
 * Timothy Chen -- Bug fixes in Mesos
 * Tingjun Xu -- Bug fixes in YARN
 * Tomohiko K. -- Bug fixes in Core and PySpark; improvement in PySpark
 * Uncle Gen -- Improvements in GraphX
 * Uri Laserson -- Improvements in PySpark
 * Varadharajan Mukundan -- Improvements in Core
 * Venkata Ramana Gollamudi -- New features and bug fixes in SQL
 * Victor Tso -- Bug fixes in Core
 * Vida Ha -- Improvements in SQL; bug fixes in EC2
 * Viper Kun -- Documentation in Core
 * Wang Fei -- Test in SQL; improvements in Core and SQL; bug fixes in Core and SQL; documentation in Core
 * Wang Tao -- Improvements in Core, YARN, and SQL; bug fixes in Core and YARN
 * Ward Viaene -- Bug fixes in PySpark
 * Wenchen Fan -- Bug fixes in SQL
 * William Benton -- Improvements and bug fixes in SQL
 * Xiangrui Meng -- Improvements in Core, PySpark, MLlib, SQL, Java API, and Web UI; documentation in Core; new features in SQL, MLlib, and PySpark; bug fixes in Core, MLlib, and PySpark; improvement in PySpark, MLlib, and SQL
 * Xinyun Huang -- Improvements in SQL
 * Yadong Qi -- Test in Core; improvements and bug fixes in Streaming
 * Yanbo Liang -- New features in MLlib
 * Yantang Zhai -- Improvements in Core; bug fixes in Core, Web UI, and SQL
 * Yash Datta -- Improvements in SQL
 * Ye Xianjin -- Improvements in Core
 * Yin Huai -- Documentation in Core; bug fixes in SQL
 * Zdenek Farana -- Bug fixes in SQL
 * Zhan Zhang -- Build fixes in SQL
 * Zhang, Liye -- Improvements and bug fixes in Core

_Thanks to everyone who contributed!_
