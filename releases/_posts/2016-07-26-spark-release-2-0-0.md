---
layout: post
title: Spark Release 2.0.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Apache Spark 2.0.0 is the first release on the 2.x line. The major updates are API usability, SQL 2003 support, performance improvements, structured streaming, R UDF support, as well as operational improvements. In addition, this release includes over 2500 patches from over 300 contributors.

To download Apache Spark 2.0.0, visit the [downloads](http://spark.apache.org/downloads.html) page. You can consult JIRA for the [detailed changes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315420&version=12329449). We have curated a list of high level changes here, grouped by major modules.

* This will become a table of contents (this text will be scraped).
{:toc}


### API Stability

Apache Spark 2.0.0 is the first release in the 2.X major line. Spark is guaranteeing stability of its non-experimental APIs for all 2.X releases. Although the APIs have stayed largely similar to 1.X, Spark 2.0.0 does have API breaking changes. They are documented in the [Removals, Behavior Changes and Deprecations](#removals-behavior-changes-and-deprecations) section.


### Core and Spark SQL

#### Programming APIs

One of the largest changes in Spark 2.0 is the new updated APIs:

 - Unifying DataFrame and Dataset: In Scala and Java, DataFrame and Dataset have been unified, i.e. DataFrame is just a type alias for Dataset of Row. In Python and R, given the lack of type safety, DataFrame is the main programming interface.
 - SparkSession: new entry point that replaces the old SQLContext and HiveContext for DataFrame and Dataset APIs. SQLContext and HiveContext are kept for backward compatibility.
 - A new, streamlined configuration API for SparkSession
 - Simpler, more performant accumulator API
 - A new, improved Aggregator API for typed aggregation in Datasets


#### SQL

Spark 2.0 substantially improved SQL functionalities with SQL2003 support. Spark SQL can now run all 99 TPC-DS queries. More prominently, we have improved:

 - A native SQL parser that supports both ANSI-SQL as well as Hive QL
 - Native DDL command implementations
 - Subquery support, including
   - Uncorrelated Scalar Subqueries
   - Correlated Scalar Subqueries
   - NOT IN predicate Subqueries (in WHERE/HAVING clauses)
   - IN predicate subqueries (in WHERE/HAVING clauses)
   - (NOT) EXISTS predicate subqueries (in WHERE/HAVING clauses)
 - View canonicalization support

In addition, when building without Hive support, Spark SQL should have almost all the functionality as when building with Hive support, with the exception of Hive connectivity, Hive UDFs, and script transforms.


#### New Features

 - Native CSV data source, based on Databricks' [spark-csv module](https://github.com/databricks/spark-csv)
 - Off-heap memory management for both caching and runtime execution
 - Hive style bucketing support
 - Approximate summary statistics using sketches, including approximate quantile, Bloom filter, and count-min sketch.


#### Performance and Runtime

 - Substantial (2 - 10X) performance speedups for common operators in SQL and DataFrames via a new technique called whole stage code generation.
 - Improved Parquet scan throughput through vectorization
 - Improved ORC performance
 - Many improvements in the Catalyst query optimizer for common workloads
 - Improved window function performance via native implementations for all window functions
 - Automatic file coalescing for native data sources


### MLlib
The DataFrame-based API is now the primary API. The RDD-based API is entering maintenance mode. See the MLlib guide for details

####  New features

- ML persistence: The DataFrames-based API provides near-complete support for saving and loading ML models and Pipelines in Scala, Java, Python, and R.  See this blog post for details.  (SPARK-6725, SPARK-11939, SPARK-14311)
- MLlib in R: SparkR now offers MLlib APIs for generalized linear models, naive Bayes, k-means clustering, and survival regression.  See this talk to learn more.
- Python: PySpark now offers many more MLlib algorithms, including LDA, Gaussian Mixture Model, Generalized Linear Regression, and more.
- Algorithms added to DataFrames-based API: Bisecting K-Means clustering, Gaussian Mixture Model, MaxAbsScaler feature transformer.

This talk lists many of these new features.

#### Speed/scaling
Vectors and Matrices stored in DataFrames now use much more efficient serialization, reducing overhead in calling MLlib algorithms. (SPARK-14850)


### SparkR

The largest improvement to SparkR in Spark 2.0 is user-defined functions. There are three user-defined functions: dapply, gapply, and lapply. The first two can be used to do partition-based UDFs using dapply and gapply, e.g. partitioned model learning. The latter can be used to do hyper-parameter tuning.

In addition, there are a number of new features:

- Improved algorithm coverage for machine learning in R, including naive Bayes, k-means clustering, and survival regression.
- Generalized linear models support more families and link functions.
- Save and load for all ML models.
- More DataFrame functionality: Window functions API, reader, writer support for JDBC, CSV, SparkSession


### Streaming

Spark 2.0 ships the initial experimental release for Structured Streaming, a high level streaming API built on top of Spark SQL and the Catalyst optimizer. Structured Streaming enables users to program against streaming sources and sinks using the same DataFrame/Dataset API as in static data sources, leveraging the Catalyst optimizer to automatically incrementalize the query plans.

For the DStream API, the most prominent update is the new experimental support for Kafka 0.10.


### Dependency and Packaging Improvements

There are a variety of changes to Spark's operations and packaging process:

 - Spark 2.0 no longer requires a fat assembly jar for production deployment.
 - Akka dependency has been removed, and as a result, user applications can program against any versions of Akka.
 - Kryo version is bumped to 3.0.
 - The default build is now using Scala 2.11 rather than Scala 2.10.


### Removals, Behavior Changes and Deprecations

#### Removals
The following features have been removed in Spark 2.0:

- Bagel
- Support for Hadoop 2.1 and earlier
- The ability to configure closure serializer
- HTTPBroadcast
- TTL-based metadata cleaning
- Semi-private class org.apache.spark.Logging. We suggest you use slf4j directly.
- SparkContext.metricsSystem
- Block-oriented integration with Tachyon (subsumed by file system integration)
- Methods deprecated in Spark 1.x
- Methods on Python DataFrame that returned RDDs (map, flatMap, mapPartitions, etc). They are still available in dataframe.rdd field, e.g. dataframe.rdd.map.
- Less frequently used streaming connectors, including Twitter, Akka, MQTT, ZeroMQ
- Hash-based shuffle manager
- History serving functionality from standalone Master
- For Java and Scala, DataFrame no longer exists as a class. As a result, data sources would need to be updated.
- Spark EC2 script has been fully moved to an [external repository hosted by the UC Berkeley AMPLab](https://github.com/amplab/spark-ec2)

#### Behavior Changes
The following changes might require updating existing applications that depend on the old behavior or API.

- The default build is now using Scala 2.11 rather than Scala 2.10.
- In SQL, floating literals are now parsed as decimal data type rather than double data type.
- Kryo version is bumped to 3.0.
- Java RDD’s flatMap and mapPartitions functions used to require functions returning Java Iterable. They have been updated to require functions returning Java iterator so the functions do not need to materialize all the data.
- Java RDD’s countByKey and countAprroxDistinctByKey now returns a map from K to java.lang.Long, rather than to java.lang.Object.
- When writing Parquet files, the summary files are not written by default. To re-enable it, users must set “parquet.enable.summary-metadata” to true.
- The DataFrame-based API (spark.ml) now depends upon local linear algebra in spark.ml.linalg, rather than in spark.mllib.linalg.  This removes the last dependencies of spark.ml.* on spark.mllib.*. (SPARK-13944) See the MLlib migration guide for a full list of API changes.


For a more complete list, please see [SPARK-11806](https://issues.apache.org/jira/browse/SPARK-11806) for deprecations and removals.

#### Deprecations
The following features have been deprecated in Spark 2.0, and might be removed in future versions of Spark 2.x:

- Fine-grained mode in Apache Mesos
- Support for Java 7
- Support for Python 2.6


### Known Issues

- Lead and Lag's behaviors have been changed to ignoring nulls from respecting nulls (1.6's behaviors). In 2.0.1, the behavioral changes will be fixed in 2.0.1 (SPARK-16721).
- Lead and Lag functions using constant input values does not return the default value when the offset row does not exist (SPARK-16633).


### Credits
Last but not least, this release would not have been possible without the following contributors: Aaron Tokhy, Abhinav Gupta, Abou Haydar Elias, Adam Budde, Adam Roberts, Ahmed Kamal, Ahmed Mahran, Alex Bozarth, Alexander Ulanov, Allen, Anatoliy Plastinin, Andrew, Andrew Ash, Andrew Or, Andrew Ray, Anthony Truchet, Anton Okolnychyi, Antonio Murgia, Antonio Murgia, Arun Allamsetty, Azeem Jiva, Ben McCann, BenFradet, Bertrand Bossy, Bill Chambers, Bjorn Jonsson, Bo Meng, Bo Meng, Brandon Bradley, Brian O'Neill, BrianLondon, Bryan Cutler, Burak Köse, Burak Yavuz, Carson Wang, Cazen, Cedar Pan, Charles Allen, Cheng Hao, Cheng Lian, Claes Redestad, CodingCat, Cody Koeninger, DB Tsai, DLucky, Daniel Jalova, Daoyuan Wang, Darek Blasiak, David Tolpin, Davies Liu, Devaraj K, Dhruve Ashar, Dilip Biswal, Dmitry Erastov, Dominik Jastrzębski, Dongjoon Hyun, Earthson Lu, Egor Pakhomov, Ehsan M.Kermani, Ergin Seyfe, Eric Liang, Ernest, Felix Cheung, Felix Cheung, Feynman Liang, Fokko Driesprong, Fonso Li, Franklyn D'souza, François Garillot, Fred Reiss, Gabriele Nizzoli, Gary King, GayathriMurali, Gio Borje, Grace, Greg Michalopoulos, Grzegorz Chilkiewicz, Guillaume Poulin, Gábor Lipták, Hemant Bhanawat, Herman van Hovell, Herman van Hövell tot Westerflier, Hiroshi Inoue, Holden Karau, Hossein, Huaxin Gao, Hyukjin Kwon, Imran Rashid, Imran Younus, Ioana Delaney, Iulian Dragos, Jacek Laskowski, Jacek Lewandowski, Jakob Odersky, James Lohse, James Thomas, Jason Lee, Jason Moore, Jason White, Jean Lyn, Jean-Baptiste Onofré, Jeff L, Jeff Zhang, Jeremy Derr, JeremyNixon, Jia Li, Jo Voordeckers, Joan, Jon Maurer, Joseph K. Bradley, Josh Howes, Josh Rosen, Joshi, Juarez Bochi, Julien Baley, Junyang, Junyang Qian, Jurriaan Pruis, Kai Jiang, KaiXinXiaoLei, Kay Ousterhout, Kazuaki Ishizaki, Kevin Yu, Koert Kuipers, Kousuke Saruta, Koyo Yoshida, Krishna Kalyan, Krishna Kalyan, Lewuathe, Liang-Chi Hsieh, Lianhui Wang, Lin Zhao, Lining Sun, Liu Xiang, Liwei Lin, Liwei Lin, Liye, Luc Bourlier, Luciano Resende, Lukasz, Maciej Brynski, Malte, Marcelo Vanzin, Marcin Tustin, Mark Grover, Mark Yang, Martin Menestret, Masayoshi TSUZUKI, Matei Zaharia, Mathieu Longtin, Matthew Wise, Miao Wang, Michael Allman, Michael Armbrust, Michael Gummelt, Michel Lemay, Mike Dusenberry, Mortada Mehyar, Nakul Jindal, Nam Pham, Narine Kokhlikyan, NarineK, Neelesh Srinivas Salian, Nezih Yigitbasi, Nicholas Chammas, Nicholas Tietz, Nick Pentreath, Nilanjan Raychaudhuri, Nirman Narang, Nishkam Ravi, Nong, Nong Li, Oleg Danilov, Oliver Pierson, Oscar D. Lara Yejas, Parth Brahmbhatt, Patrick Wendell, Pete Robbins, Peter Ableda, Pierre Borckmans, Prajwal Tuladhar, Prashant Sharma, Pravin Gadakh, QiangCai, Qifan Pu, Raafat Akkad, Rahul Tanwani, Rajesh Balamohan, Rekha Joshi, Reynold Xin, Richard W. Eggert II, Robert Dodier, Robert Kruszewski, Robin East, Ruifeng Zheng, Ryan Blue, Sachin Aggarwal, Saisai Shao, Sameer Agarwal, Sandeep Singh, Sanket, Sasaki Toru, Sean Owen, Sean Zhong, Sebastien Rainville, Sebastián Ramírez, Sela, Sergiusz Urbaniak, Seth Hendrickson, Shally Sangal, Sheamus K. Parkes, Shi Jinkui, Shivaram Venkataraman, Shixiong Zhu, Shuai Lin, Shubhanshu Mishra, Sin Wu, Sital Kedia, Stavros Kontopoulos, Stephan Kessler, Steve Loughran, Subhobrata Dey, Subroto Sanyal, Sumedh Mungee, Sun Rui, Sunitha Kambhampati, Suresh Thalamati, Takahashi Hiroshi, Takeshi YAMAMURO, Takuya Kuwahara, Takuya UESHIN, Tathagata Das, Ted Yu, Tejas Patil, Terence Yim, Thomas Graves, Timothy Chen, Timothy Hunter, Tom Graves, Tom Magrino, Tommy YU, Travis Crawford, Tristan Reid, Victor Chima, Vijay Kiran, Villu Ruusmann, Wang Fei, Wayne Song, Wei Mao, WeichenXu, Weiqing Yang, Wenchen Fan, Wesley Tang, Wilson Wu, Wojciech Jurczyk, Xiangrui Meng, Xiao Li, Xin Ren, Xin Wu, Xinh Huynh, Xiu Guo, Xusen Yin, Yadong Qi, Yanbo Liang, Yang Bo., Yash Datta, Yin Huai, Yonathan Randolph, Yong Gang Cao, Yong Tang, Yu ISHIKAWA, Yucai Yu, Yuhao Yang, Yury Liavitski, Zhang, Zheng RuiFeng, Zheng Tan, dding3, depend, echo2mei, fwang1, guoxu1231, huangzhaowei, hushan, jayadevanmurali, junhao, kaklakariada, mcheah, meiyoula, movelikeriver, nfraison, oraviv, peng.zhang, petermaxlee, prabs, pshearer, rotems, sandy, seddonm1, sharkd, thomastechs, wangfei, wangyang, wujian, yzhou2001, zero323, zhonghaihua, zhuol, zlpmichelle, Örjan Lundberg, Łukasz Gieroń
