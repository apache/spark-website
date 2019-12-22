---
layout: post
title: Spark Release 1.1.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.1.0 is the first minor release on the 1.X line. This release brings operational and performance improvements in Spark core along with significant extensions to Spark’s newest libraries: MLlib and Spark SQL. It also builds out Spark’s Python support and adds new components to the Spark Streaming module. Spark 1.1 represents the work of 171 contributors, the most to ever contribute to a Spark release!

To download Spark 1.1 visit the <a href="{{site.baseurl}}/downloads.html">downloads</a> page.

### Performance and Usability Improvements
Across the board, Spark 1.1 adds features for improved stability and performance, particularly for large-scale workloads. Spark now performs [disk spilling for skewed blocks](https://issues.apache.org/jira/browse/SPARK-1777) during cache operations, guarding against memory overflows if a single RDD partition is large. Disk spilling during aggregations, introduced in Spark 1.0, has been [ported to PySpark](https://issues.apache.org/jira/browse/SPARK-2538). This release introduces a [new shuffle implementation](https://issues.apache.org/jira/browse/SPARK-2045) optimized for very large scale shuffles. This “sort-based shuffle” will be become the default in the next release, and is now available to users. For jobs with large numbers of reducers, we recommend turning this on. This release also adds several usability improvements for monitoring the performance of long running or complex jobs. Among the changes are better [named accumulators](https://issues.apache.org/jira/browse/SPARK-2380) that display in Spark’s UI, [dynamic updating of metrics](https://issues.apache.org/jira/browse/SPARK-2099) for progress tasks, and [reporting of input metrics](https://issues.apache.org/jira/browse/SPARK-1683) for tasks that read input data.

### Spark SQL
Spark SQL adds a number of new features and performance improvements in this release. A [JDBC/ODBC server](http://spark.apache.org/docs/1.1.0/sql-programming-guide.html#running-the-thrift-jdbc-server) allows users to connect to SparkSQL from many different applications and provides shared access to cached tables. A new module provides [support for loading JSON data](http://spark.apache.org/docs/1.1.0/sql-programming-guide.html#json-datasets) directly into Spark’s SchemaRDD format, including automatic schema inference. Spark SQL introduces [dynamic bytecode generation](http://spark.apache.org/docs/1.1.0/sql-programming-guide.html#other-configuration-options) in this release, a technique which significantly speeds up execution for queries that perform complex expression evaluation.  This release also adds support for registering Python, Scala, and Java lambda functions as UDFs, which can then be called directly in SQL. Spark 1.1 adds a [public types API to allow users to create SchemaRDD’s from custom data sources](http://spark.apache.org/docs/1.1.0/sql-programming-guide.html#programmatically-specifying-the-schema). Finally, many optimizations have been added to the native Parquet support as well as throughout the engine.

### MLlib
MLlib adds several new algorithms and optimizations in this release. 1.1 introduces a [new library of statistical packages](https://issues.apache.org/jira/browse/SPARK-2359) which provides exploratory analytic functions. These include stratified sampling, correlations, chi-squared tests and support for creating random datasets. This release adds utilities for feature extraction ([Word2Vec](https://issues.apache.org/jira/browse/SPARK-2510) and [TF-IDF](https://issues.apache.org/jira/browse/SPARK-2511)) and feature transformation ([normalization and standard scaling](https://issues.apache.org/jira/browse/SPARK-2272)). Also new are support for [nonnegative matrix factorization](https://issues.apache.org/jira/browse/SPARK-1553) and [SVD via Lanczos](https://issues.apache.org/jira/browse/SPARK-1782). The decision tree algorithm has been [added in Python and Java](https://issues.apache.org/jira/browse/SPARK-2478). A tree aggregation primitive has been added to help optimize many existing algorithms. Performance improves across the board in MLlib 1.1, with improvements of around 2-3X for many algorithms and up to 5X for large scale decision tree problems. 

### GraphX and Spark Streaming
Spark streaming adds a new data source [Amazon Kinesis](https://issues.apache.org/jira/browse/SPARK-1981). For the Apache Flume, a new mode is supported which [pulls data from Flume](https://issues.apache.org/jira/browse/SPARK-1729), simplifying deployment and providing high availability. The first of a set of [streaming machine learning algorithms](https://issues.apache.org/jira/browse/SPARK-2438) is introduced with streaming linear regression. Finally, [rate limiting](https://issues.apache.org/jira/browse/SPARK-1341) has been added for streaming inputs. GraphX adds [custom storage levels for vertices and edges](https://issues.apache.org/jira/browse/SPARK-1991) along with [improved numerical precision](https://issues.apache.org/jira/browse/SPARK-2748) across the board. Finally, GraphX adds a new label propagation algorithm.

### Other Notable Improvements
- PySpark now allows [reading](https://issues.apache.org/jira/browse/SPARK-1416) and [writing](https://issues.apache.org/jira/browse/SPARK-2024) arbitrary Hadoop InputFormats, including SequenceFiles, HBase, Cassandra, Avro, and other data sources
- Stage resubmissions are now [handled gracefully](https://issues.apache.org/jira/browse/SPARK-2298) in the Spark UI
- Spark supports [tight firewall rules](https://issues.apache.org/jira/browse/SPARK-2157) for all network ports
- An [overflow bug](https://issues.apache.org/jira/browse/SPARK-3190) in GraphX has been fix that affects graphs with more than 4 billion vertices

### Upgrade Notes
Spark 1.1.0 is backwards compatible with Spark 1.0.X. Some configuration option defaults have changed which might be relevant to existing users:

 * The default value of `spark.io.compression.codec` is now `snappy` for improved memory usage. Old behavior can be restored by switching to `lzf`.
 * The default value of `spark.broadcast.factory` is now `org.apache.spark.broadcast.TorrentBroadcastFactory` for improved efficiency of broadcasts. Old behavior can be restored by switching to `org.apache.spark.broadcast.HttpBroadcastFactory`. 
 * PySpark now performs external spilling during aggregations. Old behavior can be restored by setting `spark.shuffle.spill` to `false`.
 * PySpark uses a new heuristic for determining the parallelism of shuffle operations. Old behavior can be restored by setting `spark.default.parallelism` to the number of cores in the cluster.

### Full Set of Resolved Issues
 * Spark Core: [http://s.apache.org/spark-1.1-core](http://s.apache.org/spark-1.1-core)
 * Spark SQL: [http://s.apache.org/spark-1.1-sql](http://s.apache.org/spark-1.1-sql)
 * Spark Streaming: [http://s.apache.org/spark-1.1-streaming](http://s.apache.org/spark-1.1-streaming)
 * MLlib: [http://s.apache.org/spark-1.1-mllib](http://s.apache.org/spark-1.1-mllib)
 * PySpark: [http://s.apache.org/spark-1.1-pyspark](http://s.apache.org/spark-1.1-pyspark)
 * All issues: [http://s.apache.org/spark-1.1-all](http://s.apache.org/spark-1.1-all)

### Contributors:
 * Aaron Davidson -- PySpark optimizations, fixes and optimizations in Spark core
 * Aaron Staple -- fixes in Spark core Spark SQL
 * Ahir Reddy -- Spark SQL fix
 * Albert Chu -- config fix
 * Alexander Ulanov -- Multiclass evaluation metrics in MLlib
 * Alex Liu -- bug fix
 * Ali Ghodsi -- doc fix
 * Allan Douglas R. de Oliveira -- EC2 script enhancements and coGroup fix
 * Ameet Talwalkar -- MLlib docs
 * Anand Avati -- build and SQL fixes
 * Anant -- Python and doc fixes
 * Anatoli Fomenko -- MLlib doc fix
 * Andrew Ash -- doc improvements and bug fixes
 * Andrew Xia -- external sorting feature
 * Andrew Or -- external spilling feature, bug fixes, and optimizations
 * Andrew Schumacher -- Parquet support in Spark SQL
 * Ankit Bhardwaj -- bug fix
 * Ankur Dave -- GraphX optimizations and improvements
 * Ariel Rabkin -- documentation fix
 * Arkadiusz Komarzewski -- doc fix
 * Artjom Metrio -- example fix
 * Baishuo -- bug fixes in Spark SQL
 * Basit Mustafa -- EC2 script fix
 * Bernardo Gomez Palacio -- build fix and YARN fix
 * Brock Noland -- build improvement
 * Bruno Paulin -- emptyRDD in Java
 * Burak -- documentation and code fixes
 * Carl Max -- code clean-up
 * Cesar Arevalo -- typo fix
 * Chandan Kumar -- bug fix and doc fix
 * Chen Chao -- examples and code clean-up
 * Cheng Hao -- optimizations and fixes in Spark SQL
 * Cheng Lian -- JDBC server in Spark SQL (lead), several optimizations and fixes in Spark SQL
 * Chia-Yung Su -- bug fix in Spark SQL
 * Chris Cope -- code clean-up
 * Chris Fregly -- AWS Kinesis support for Spark Streaming
 * Christian Tzolov -- Pivotal support in build
 * Clement Mathieu -- doc fix
 * Colin McCabe -- build fix
 * Daehan Kim -- example fix
 * Daniel Darabos -- bug fixes and UI enhancements
 * Daoyuan Wang -- SQL fixes
 * David Lemieux -- bug fix
 * Davies Liu -- PySpark fixes and spilling 
 * DB Tsai -- online summaries in MLlib and other MLlib features
 * Derek Ma -- bug fix
 * Doris Xin -- MLlib stats library and several fixes
 * Erik Selin -- bug fix
 * Fireflyc -- bug fix
 * Gabriel Nizzoli -- bug fix in Spark Streaming
 * Gang Bai -- MLlib fix
 * Gera Shegalov -- bug fix
 * Gil Vernik -- OpenStack Swift documentation
 * Guancheng Chen -- doc fix
 * Guillaume Ballet -- build fix
 * GuoQiang Li -- bug fixes in Spark core and MLlib
 * Guo Wei -- bug fix in Spark SQL
 * Haoyuan Li -- Tachyon fix
 * Hari Shreeharan -- Flume polling source for Spark Streaming
 * Henry Cook -- Edits to SQL Docs
 * Henry Saputra -- logging and doc fixes
 * Hossein Falaki -- optimization fix
 * Ian O Connel -- SQL fix
 * Issac Buenrostro -- throttling in Spark Streaming
 * Jacek Laskowski -- code clean-up
 * James Z.M. Gao -- build fix
 * Jean-Martin Archer -- EC2 script improvement
 * Jeff Thompson -- typo fix
 * Jeremy Freeman -- Streaming MLlib algorithms and Python stat counter
 * Jerry Shao -- shuffle improvement and bug fixes
 * Jiang -- doc fix
 * Jon Sondag -- MLlib fix
 * Joseph Bradley -- decision tree Python API and other MLlib features
 * Joseph Gonzalez -- GraphX benchmark and partitioning features
 * Josh Rosen -- Python optimizations and fixes, Spark core and ec2 fixes
 * Joy Yoj -- streaming fix
 * Jyotiska NK -- doc fix
 * Kalpit Shah -- build fix
 * Kan Zhang -- fixes in core and Python, enhancements to PySpark
 * Kay Ousterhout -- metrics for input data, code clean-up and enhancements
 * K Ballou -- doc fixes
 * Ken Takagiwa -- bug fix
 * Koert Kuipers -- kryo config option
 * Kousuke Saruta -- stability fixes in Spark core
 * Larry Xiao -- GraphX bug fix
 * Lars Albertsson -- Spark Streaming bug fix
 * Liang-Chi Hsieh -- optimization
 * Lijie Xu -- logging fix
 * Li Pu -- MLlib contributions
 * Liquan Pei -- Word2Vec in MLlib
 * Lu Luorta -- graphX fix
 * Luogan Kun -- SQL test fix
 * Ly Lai -- bug fix in Spark SQL
 * Madhu Siddalingaiah -- external sorting feature
 * Manish Amde -- Multiclass support for decision trees
 * Manuel Laflamme -- streaming fix
 * Marcelo Vanzin -- fixes and improvements in YARN code
 * Mark Hamstra -- bug fix for Mesos
 * Mark Wagner -- bug fix
 * Masayoshi Tsuzuki -- bug fix
 * Matei Zaharia -- bug and doc fixes, sort based shuffle (lead) and external sorting
 * Matt Forbes -- typo fix
 * Matthew Farrelle - bug fixes
 * Michael Armbrust -- feature and perf enhancements to Spark SQL (lead)
 * Michael Giannakopoulos -- MLlib improvements and docs
 * Naftali Harris -- bug fix
 * Nan Zhu -- bug fix and doc fixes
 * Nevelle Li -- UI and MLlib bug fixes
 * Nicholas Chammas -- EC2 fixes, code cleanup, and project infrastructure
 * Nick Pentreath -- SequenceFile support for PySpark
 * Oleg Danilov -- bug fix
 * Ori Kremer -- bug fix
 * Patrick Wendell -- named accumulators feature and 1.1 release manager
 * Peng Zhang -- MLlib fix
 * Peter MacKinnon -- build fix
 * Piotr Szul -- PySpark fix
 * Prashant Sharma -- work on build and MIMA tool, bug fixes in repl
 * Prudhvi Krishna -- bug fix
 * Punya Biswal -- subtractByKey in Java
 * Qipinglgp -- test fix
 * Qiuzhuang Lian -- test fix
 * Rahul Singhal -- YARN and metrics improvements
 * Ravikanth Nawada -- bug fix
 * Raymond Liu -- bug fixes
 * Reynold Xin -- several bug fixes, refactorings and optimizations, netty network module
 * Reza Zadeh -- bug and doc fixes in MLlib
 * Rishi Verma -- doc fix
 * RJ Nowling -- code clean-up
 * Rui Li -- bug fixes
 * Sameer Agarwal -- bug fix
 * Sandy Ryza -- performance improvements, spark configs, and YARN fixes
 * Sarah Gerweck -- bug fix
 * Sean Owen -- bug fixes and build fixes in core and MLlib
 * Sebastien Rainville -- bug fix
 * Shixiong Zhu -- code clean-up
 * Shuo Xiang -- MLlib improvement
 * Stephen Boesch -- bug and doc fix
 * Syed Hashmi -- PySpark feature and bug fix
 * Takayu Ueshin -- nullability fixes and other improvements in Spark SQL
 * Tathagata Das -- rolling logs and bug fixes in spark core, fixes and oversight of Spark Streaming
 * Tatiana Borisova -- bug fix
 * Ted Malaska -- Flume improvement for streaming
 * Teng Qiu -- bug fixes in SQL and parquet
 * Timothy Hunter -- bug fix in repl
 * Tom Graves -- YARN support (lead)
 * Tor Myklebust -- ALS improvements in MLlib
 * U Jing -- SQL fix
 * Uri Laserson -- bug fix
 * Vadim Chekan -- bug fix in streaming
 * Varakhedi Sujeet -- EC2 fix
 * Vida Ha -- EC2 fixes
 * Vlad -- doc fix
 * Wangfei Shi -- bug and build fixes
 * Wang Lianhui -- bug fixes
 * Wang Tao -- bug fix
 * Wenchen Fan -- memory leak fix
 * William Benton -- bug fixes in core and SQL, improvements in Spark SQL
 * Woshilaiceshide -- bug fix
 * Xiangrui Meng -- several additions to MLlib (lead)
 * Xi Lui -- UDF improvement in Spark SQL
 * Ximo Guanter Gonzalbez -- SQL DSL support for aggregations
 * Yadid Ayzenberg -- doc fixes
 * Yadong Qi -- code clean-up
 * Yanjie Gao -- Spark SQL enhancement
 * Yantangz Hai -- bug fix
 * Ye Xianjin -- bug fix
 * Yijie Shen -- bug fix
 * Yin Huai -- several additions to Spark SQL, lead on JSON support and types API.
 * Yi Tian -- SQL fix
 * Zhang Liye -- bug fix
 * Zhen Peng -- bug fixes
 * Zhihui Li -- bug fix and scheduler feature
 * Zichuan Ye -- EC2 fix
 * Zohn Zhao -- bug fix
 * Zongheng Yang -- SQL configurations and other improvements

_Thanks to everyone who contributed!_
