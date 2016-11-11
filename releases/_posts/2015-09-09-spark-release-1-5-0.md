---
layout: post
title: Spark Release 1.5.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.5.0 is the sixth release on the 1.x line. This release represents 1400+ patches from 230+ contributors and 80+ institutions. To download Spark 1.5.0 visit the <a href="{{site.baseurl}}/downloads.html">downloads</a> page.

You can consult JIRA for the [detailed changes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315420&version=12332078). We have curated a list of high level changes here:

* This will become a table of contents (this text will be scraped).
{:toc}

### APIs: RDD, DataFrame and SQL

* Consistent resolution of column names (see Behavior Changes section)
* [SPARK-3947](https://issues.apache.org/jira/browse/SPARK-3947): New experimental user-defined aggregate function (UDAF) interface
* [SPARK-8300](https://issues.apache.org/jira/browse/SPARK-8300): DataFrame hint for broadcast joins
* [SPARK-8668](https://issues.apache.org/jira/browse/SPARK-8668): expr function for turning a SQL expression into a DataFrame column
* [SPARK-9076](https://issues.apache.org/jira/browse/SPARK-9076):  Improved support for NaN values
  * NaN functions: isnan, nanvl
  * dropna/fillna also fill/drop NaN values in addition to NULL values
  * Equality test on NaN = NaN returns true
  * NaN is greater than all other values
  * In aggregation, NaN values go into one group
* [SPARK-8828](https://issues.apache.org/jira/browse/SPARK-8828): Sum function returns null when all input values are nulls
* Data types
  * [SPARK-8943](https://issues.apache.org/jira/browse/SPARK-8943): CalendarIntervalType for time intervals
  * [SPARK-7937](https://issues.apache.org/jira/browse/SPARK-7937): Support ordering on StructType
  * [SPARK-8866](https://issues.apache.org/jira/browse/SPARK-8866): TimestampType’s precision is reduced to 1 microseconds (1us)
* [SPARK-8159](https://issues.apache.org/jira/browse/SPARK-8159): Added ~100 functions, including __date/time__, __string__, __math__.
* [SPARK-8947](https://issues.apache.org/jira/browse/SPARK-8947): Improved type coercion and error reporting in plan analysis phase (i.e. most errors should be reported in analysis time, rather than execution time)
* [SPARK-1855](https://issues.apache.org/jira/browse/SPARK-1855): Memory and local disk only checkpointing support


### Backend Execution: DataFrame and SQL

* __Code generation on by default__ for almost all DataFrame/SQL functions
* __Improved aggregation__ execution in DataFrame/SQL
  * Cache friendly in-memory hash map layout
  * Fallback to external-sort-based aggregation when memory is exhausted
  * Code generation on by default for aggregations
* __Improved join__ execution in DataFrame/SQL
  * Prefer (external) sort-merge join over hash join in shuffle joins (for left/right outer and inner joins), i.e. join data size is now bounded by disk rather than memory
  * Support using (external) sort-merge join method for left/right outer joins
  * Support for broadcast outer join
* __Improved sort__ execution in DataFrame/SQL
  * Cache-friendly in-memory layout for sorting
  * Fallback to external sorting when data exceeds memory size
  * Code generated comparator for fast comparisons
* __Native memory management & representation__
  * Compact binary in-memory data representation, leading to lower memory usage
  * Execution memory is explicitly accounted for, without relying on JVM GC, leading to less GC and more robust memory management
* [SPARK-8638](https://issues.apache.org/jira/browse/SPARK-8638): __Improved performance & memory usage in window functions__
* __Metrics instrumentation, reporting, and visualization__
  * [SPARK-8856](https://issues.apache.org/jira/browse/SPARK-8856): Plan visualization for DataFrame/SQL
  * [SPARK-8735](https://issues.apache.org/jira/browse/SPARK-8735): Expose metrics for runtime memory usage in web UI
  * [SPARK-4598](https://issues.apache.org/jira/browse/SPARK-4598): Pagination for jobs with large number of tasks in web UI


### Integrations: Data Sources, Hive, Hadoop, Mesos and Cluster Management

* __Mesos__
  * [SPARK-6284](https://issues.apache.org/jira/browse/SPARK-6284): Support framework authentication and Mesos roles
  * [SPARK-6287](https://issues.apache.org/jira/browse/SPARK-6287): Dynamic allocation in Mesos coarse-grained mode
  * [SPARK-6707](https://issues.apache.org/jira/browse/SPARK-6707): User specified constraints on Mesos slave attributes
* __YARN__
  * [SPARK-4352](https://issues.apache.org/jira/browse/SPARK-4352): Dynamic allocation in YARN works with preferred locations
* __Standalone Cluster Manager__
  * [SPARK-4751](https://issues.apache.org/jira/browse/SPARK-4751): Dynamic resource allocation support
* [SPARK-6906](https://issues.apache.org/jira/browse/SPARK-6906): Improved __Hive and metastore support__
  * [SPARK-8131](https://issues.apache.org/jira/browse/SPARK-8131): Improved Hive database support
  * Upgraded Hive dependency Hive 1.2
  * Support connecting to Hive 0.13, 0.14, 1.0/0.14.1, 1.1, 1.2 metastore
  * Support partition pruning pushdown into the metastore (off by default; config flag spark.sql.hive.metastorePartitionPruning)
  * Support persisting data in Hive compatible format in metastore
* [SPARK-9381](https://issues.apache.org/jira/browse/SPARK-9381): Support data partitioning for __JSON__ data sources
* [SPARK-5463](https://issues.apache.org/jira/browse/SPARK-5463): __Parquet__ improvements
  * Upgrade to Parquet 1.7
  * Speedup metadata discovery and schema merging
  * Predicate pushdown on by default
  * [SPARK-6774](https://issues.apache.org/jira/browse/SPARK-6774): Support for reading non-standard legacy Parquet files generated by various libraries/systems by fully implementing all backwards-compatibility rules defined in parquet-format spec
  * [SPARK-4176](https://issues.apache.org/jira/browse/SPARK-4176): Support for writing decimal values with precision greater than 18
* __ORC__ improvements (various bug fixes)
* [SPARK-8890](https://issues.apache.org/jira/browse/SPARK-8890): Faster and more robust __dynamic partition insert__
* [SPARK-9486](https://issues.apache.org/jira/browse/SPARK-9486): DataSourceRegister interface for external data sources to specify short names


### R Language

* [SPARK-6797](https://issues.apache.org/jira/browse/SPARK-6797): Support for __YARN cluster mode in R__
* [SPARK-6805](https://issues.apache.org/jira/browse/SPARK-6805): __GLMs with R formula__, binomial/Gaussian families, and elastic-net regularization
* [SPARK-8742](https://issues.apache.org/jira/browse/SPARK-8742): Improved error messages for R
* [SPARK-9315](https://issues.apache.org/jira/browse/SPARK-9315): Aliases to make DataFrame functions more R-like


### Machine Learning and Advanced Analytics

* [SPARK-8521](https://issues.apache.org/jira/browse/SPARK-8521): __New Feature transformers__:  CountVectorizer, Discrete Cosine transformation, MinMaxScaler, NGram, PCA, RFormula, StopWordsRemover, and VectorSlicer.
* __New Estimators in Pipeline API__: [SPARK-8600](https://issues.apache.org/jira/browse/SPARK-8600) naive Bayes, [SPARK-7879](https://issues.apache.org/jira/browse/SPARK-7879) k-means, and [SPARK-8671](https://issues.apache.org/jira/browse/SPARK-8671) isotonic regression.
* __New Algorithms__: [SPARK-9471](https://issues.apache.org/jira/browse/SPARK-9471) multilayer perceptron classifier, [SPARK-6487](https://issues.apache.org/jira/browse/SPARK-6487) PrefixSpan for sequential pattern mining, [SPARK-8559](https://issues.apache.org/jira/browse/SPARK-8559) association rule generation, [SPARK-8598](https://issues.apache.org/jira/browse/SPARK-8598) 1-sample Kolmogorov-Smirnov test, etc.
* __Improvements to existing algorithms__
  * [__LDA__](https://issues.apache.org/jira/browse/SPARK-5572): online LDA performance, asymmetric doc concentration, perplexity, log-likelihood, top topics/documents, save/load, etc.
  * __Trees and ensembles__: class probabilities, feature importance for random forests, thresholds for classification, checkpointing for GBTs, etc.
  * [__Pregel-API__](https://issues.apache.org/jira/browse/SPARK-9436): more efficient Pregel API implementation for GraphX.
  * [__GMM__](https://issues.apache.org/jira/browse/SPARK-5016): distribute matrix inversions.
* __Model summary__ for [linear](https://issues.apache.org/jira/browse/SPARK-8539) and [logistic regression](https://issues.apache.org/jira/browse/SPARK-9112).
* __Python API__: [distributed matrices](https://issues.apache.org/jira/browse/SPARK-5572), [streaming k-means](https://issues.apache.org/jira/browse/SPARK-5572) and [linear models](https://issues.apache.org/jira/browse/SPARK-5572), [LDA](https://issues.apache.org/jira/browse/SPARK-5572), [power iteration clustering](https://issues.apache.org/jira/browse/SPARK-5572), etc.
* __Tuning and evaluation__: [train-validation split](https://issues.apache.org/jira/browse/SPARK-8484) and [multiclass classification evaluator](https://issues.apache.org/jira/browse/SPARK-7690).
* __Documentation__: document the release version of public API methods

### Spark Streaming

* [SPARK-7398](https://issues.apache.org/jira/browse/SPARK-7398): __Backpressure__: Automatic and dynamic rate controlling in Spark Streaming for handling bursty input streams. This allows a streaming pipeline to dynamically adapt to changes in ingestion rates and computation loads. This works with receivers, as well as, the Direct Kafka approach.
* __Python API for streaming sources__
  * [SPARK-8389](https://issues.apache.org/jira/browse/SPARK-8389): Kafka offsets of Direct Kafka streams available through Python API
  * [SPARK-8564](https://issues.apache.org/jira/browse/SPARK-8564): Kinesis Python API
  * [SPARK-8378](https://issues.apache.org/jira/browse/SPARK-8378): Flume Python API
  * [SPARK-5155](https://issues.apache.org/jira/browse/SPARK-5155): MQTT Python API
* [SPARK-3258](https://issues.apache.org/jira/browse/SPARK-3258): __Python API for streaming machine learning algorithms__: K-Means, linear regression, and logistic regression
* [SPARK-9215](https://issues.apache.org/jira/browse/SPARK-9215): __Improved reliability of Kinesis streams__ : No need for enabling write ahead logs for saving and recovering received data across driver failures
* __Direct Kafka API graduated__: Not experimental any more.
* [SPARK-8701](https://issues.apache.org/jira/browse/SPARK-8701): __Input metadata in UI__: Kafka offsets, and input files are visible in the batch details UI
* [SPARK-8882](https://issues.apache.org/jira/browse/SPARK-8882): Better load balancing and scheduling of receivers across cluster
* [SPARK-4072](https://issues.apache.org/jira/browse/SPARK-4072): Include streaming storage in web UI


### Deprecations, Removals, Configs, and Behavior Changes

#### Spark Core
* DAGScheduler’s local task execution mode has been removed
* Default driver and executor memory increased from 512m to 1g
* Default setting of JVM’s MaxPermSize increased from 128m to 256m
* Default logging level of spark-shell changed from INFO to WARN
* NIO-based ConnectionManager is deprecated, and will be removed in 1.6

#### Spark SQL & DataFrames
* Optimized execution using manually managed memory (Tungsten) is now enabled by default, along with code generation for expression evaluation. These features can both be disabled by setting spark.sql.tungsten.enabled to false.
* Parquet schema merging is no longer enabled by default. It can be re-enabled by setting spark.sql.parquet.mergeSchema to true.
* Resolution of strings to columns in Python now supports using dots (.) to qualify the column or access nested values. For example df['table.column.nestedField']. However, this means that if your column name contains any dots you must now escape them using backticks (e.g., ```table.`column.with.dots`.nested```).
* In-memory columnar storage partition pruning is on by default. It can be disabled by setting spark.sql.inMemoryColumnarStorage.partitionPruning to false.
* Unlimited precision decimal columns are no longer supported, instead Spark SQL enforces a maximum precision of 38. When inferring schema from BigDecimal objects, a precision of (38, 18) is now used. When no precision is specified in DDL then the default remains Decimal(10, 0).
* Timestamps are now processed at a precision of 1us, rather than 100ns.
* Sum function returns null when all input values are nulls (null before 1.4, 0 in 1.4).
* In the sql dialect, floating point numbers are now parsed as decimal. HiveQL parsing remains unchanged.
* The canonical name of SQL/DataFrame functions are now lower case (e.g. sum vs SUM).
* It has been determined that using the DirectOutputCommitter when speculation is enabled is unsafe and thus this output committer will not be used by parquet when speculation is on, independent of configuration.
* JSON data source will not automatically load new files that are created by other applications (i.e. files that are not inserted to the dataset through Spark SQL). For a JSON persistent table (i.e. the metadata of the table is stored in Hive Metastore), users can use REFRESH TABLE SQL command or HiveContext's refreshTable method to include those new files to the table. For a DataFrame representing a JSON dataset, users need to recreate the DataFrame and the new DataFrame will include new files.

#### Spark Streaming
* New experimental backpressure feature can be enabled by setting the configuration spark.streaming.backpressure.enabled to true.
* Write Ahead Log does not need to be abled for Kinesis streams. The updated Kinesis receiver keeps track of Kinesis sequence numbers received in each batch, and uses that information re-read the necessary data while recovering from failures.
* The number of times the receivers are relaunched on failure are not limited by the max Spark task attempts. The system will always try to relaunch receivers after failures until the StreamingContext is stopped.
* Improved load balancing of receivers across the executors, even after relaunching.
* Enabling checkpointing when using queueStream throws exception as queueStream cannot be checkpointed. However, we found this to break certain existing apps. So this change will be reverted in Spark 1.5.1.

#### MLlib

In the spark.mllib package, there are no breaking API changes but some behavior changes:

* [SPARK-9005](https://issues.apache.org/jira/browse/SPARK-9005): RegressionMetrics.explainedVariance returns the average regression sum of squares.
* [SPARK-8600](https://issues.apache.org/jira/browse/SPARK-8600): NaiveBayesModel.labels become sorted.
* [SPARK-3382](https://issues.apache.org/jira/browse/SPARK-3382): GradientDescent has a default convergence tolerance 1e-3, and hence iterations might end earlier than 1.4.

In the experimental spark.ml package, there exists one breaking API change and one behavior change:

* [SPARK-9268](https://issues.apache.org/jira/browse/SPARK-9268): Java's varargs support is removed from Params.setDefault due to a Scala compiler bug.
* [SPARK-10097](https://issues.apache.org/jira/browse/SPARK-10097): Evaluator.isLargerBetter is added to indicate metric ordering. Metrics like RMSE no longer flip signs as in 1.4.


### Known Issues

The following issues are known in 1.5.0, and will be fixed in 1.5.1 release.

#### SQL/DataFrame

* [SPARK-10301](https://issues.apache.org/jira/browse/SPARK-10301): Reading parquet files with different schema (schema merging) for nested structs can return the wrong answer
* [SPARK-10466](https://issues.apache.org/jira/browse/SPARK-10466): AssertionError when spilling data during sort-based shuffle with data spill
* [SPARK-10441](https://issues.apache.org/jira/browse/SPARK-10441): Timestamp data type cannot be written out as JSON
* [SPARK-10495](https://issues.apache.org/jira/browse/SPARK-10495): Date values saved to JSON are stored as strings representing the number of days from epoch (1970-01-01 00:00:00 UTC) instead of strings in the format of "yyyy-mm-dd".
* [SPARK-10403](https://issues.apache.org/jira/browse/SPARK-10403): Tungsten mode does not work with tungsten-sort shuffle manager (which is off by default)
* [SPARK-10422](https://issues.apache.org/jira/browse/SPARK-10422): In-memory cache of string type with dictionary encoding is broken
* [SPARK-10434](https://issues.apache.org/jira/browse/SPARK-10434) Parquet files with null elements in arrays written by Spark 1.5.0 cannot be read by earlier versions of Spark

#### Streaming
* [SPARK-10224](https://issues.apache.org/jira/browse/SPARK-10224) Small chance of data loss when StreamingContext is stopped gracefully


### Credits

We would like to thank the following organizations for testing the release candidates with their workloads: Mesosphere, Typesafe, Tencent, Palantir, Cloudera, Hortonworks, Huawei, Shopify, Netflix, Intel, Yahoo, Kixer, UC Berkeley and Databricks.

Last but not least, this release would not have been possible without the following contributors: Aaron Davidson, Adam Roberts, Ai He, Akshat Aranya, Alex Shkurenko, Alex Slusarenko, Alexander Ulanov, Alok Singh, Amey Chaugule, Andrew Or, Andrew Ray, Animesh Baranawal, Ankur Chauhan, Ankur Dave, Ben Fradet, Bert Greevenbosch, Bimal Tandel, Brennan Ashton, Brennon York, Brian Lockwood, Bryan Cutler, Burak Yavuz, Calvin Jia, Carl Anders Duvel, Carson Wang, Chen Xu, Cheng Hao, Cheng Lian, Cheolsoo Park, Chris Freeman, Christian Kadner, Cody Koeninger, Damian Guy, Daniel Darabos, Daniel Emaasit, Daoyuan Wang, Dariusz Kobylarz, David Arroyo Cazorla, Davies Liu, DB Tsai, Dennis Huo, Deron Eriksson, Devaraj K, Dibyendu Bhattacharya, Dong Wang, Emiliano Leporati, Eric Liang, Favio Vazquez, Felix Cheung, Feynman Liang, Forest Fang, Francois Garillot, Gen Tang, George Dittmar, Guo Wei, GuoQiang Li, Han JU, Hao Zhu, Hari Shreedharan, Herman Van Hovell, Holden Karau, Hossein Falaki, Huang Zhaowei, Hyukjin Kwon, Ilya Ganelin, Imran Rashid, Iulian Dragos, Jacek Lewandowski, Jacky Li, Jan Prach, Jean Lyn, Jeff Zhang, Jiajin Zhang, Jie Huang, Jihong MA, Jonathan Alter, Jose Cambronero, Joseph Batchik, Joseph Gonzalez, Joseph K. Bradley, Josh Rosen, Judy Nash, Juhong Park, Kai Sasaki, Kai Zeng, KaiXinXiaoLei, Kan Zhang, Kashif Rasul, Kay Ousterhout, Keiji Yoshida, Kenichi Maehashi, Keuntae Park, Kevin Conor, Konstantin Shaposhnikov, Kousuke Saruta, Kun Xu, Lars Francke, Leah McGuire, lee19, Liang-Chi Hsieh, Lianhui Wang, Luca Martinetti, Luciano Resende, Manoj Kumar, Marcelo Vanzin, Mark Smith, Martin Zapletal, Matei Zaharia, Mateusz Buskiewicz, Matt Massie, Matthew Brandyberry, Meethu Mathew, Meihua Wu, Michael Allman, Michael Armbrust, Michael Davies, Michael Sannella, Michael Vogiatzis, Michel Lemay, Mike Dusenberry, Min Zhou, Mingfei Shi, mosessky, Moussa Taifi, Mridul Muralidharan, NamelessAnalyst, Namit Katariya, Nan Zhu, Nathan Howell, Navis Ryu, Neelesh Srinivas Salian, Nicholas Chammas, Nicholas Hwang, Nilanjan Raychaudhuri, Niranjan Padmanabhan, Nishkam Ravi, Nishkam Ravi, Noel Smith, Oleksiy Dyagilev, Oleksiy Dyagilev, Paavo Parkkinen, Patrick Baier, Patrick Wendell, Pawel Kozikowski, Pedro Rodriguez, Perinkulam I. Ganesh, Piotr Migdal, Prabeesh K, Pradeep Chhetri, Prayag Chandran, Punya Biswal, Qian Huang, Radek Ostrowski, Rahul Palamuttam, Ram Sriharsha, Rekha Joshi, Rekha Joshi, Rene Treffer, Reynold Xin, Roger Menezes, Rohit Agarwal, Rosstin Murphy, Rowan Chattaway, Ryan Williams, Saisai Shao, Sameer Abhyankar, Sandy Ryza, Santiago M. Mola, Scott Taylor, Sean Owen, Sephiroth Lin, Seth Hendrickson, Sheng Li, Shilei Qian, Shivaram Venkataraman, Shixiong Zhu, Shuo Bai, Shuo Xiang, Simon Hafner, Spiro Michaylov, Stan Zhai, Stefano Parmesan, Steve Lindemann, Steve Loughran, Steven She, Su Yan, Sudhakar Thota, Sun Rui, Takeshi YAMAMURO, Takuya Ueshin, Tao Li, Tarek Auel, Tathagata Das, Ted Blackman, Ted Yu, Thomas Omans, Thomas Szymanski, Tien-Dung Le, Tijo Thomas, Tim Ellison, Timothy Chen, Tom Graves, Tom White, Tomohiko K., Vincent D. Warmerdam, Vinod K C, Vinod KC, Vladimir Vladimirov, Vyacheslav Baranov, Wang Tao, Wang Wei, Weizhong Lin, Wenchen Fan, Wisely Chen, Xiangrui Meng, Xu Tingjun, Xusen Yin, Yadong Qi, Yanbo Liang, Yash Datta, Yijie Shen, Yin Huai, Yong Tang, Yu ISHIKAWA, Yuhao Yang, Yuming Wang, Yuri Saito, Yuu ISHIKAWA, Zc He, Zhang, Liye, Zhichao Li, Zhongshuai Pei, Zoltan Zvara, and a few unknown contributors (please indicate your email and name in your git commit to show up here).
