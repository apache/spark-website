---
layout: post
title: Spark Release 2.2.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---


Apache Spark 2.2.0 is the third release on the 2.x line. This release removes the experimental tag from Structured Streaming. In addition, this release focuses more on usability, stability, and polish, resolving over 1100 tickets.


To download Apache Spark 2.2.0, visit the <a href="{{site.baseurl}}/downloads.html">downloads</a> page. You can consult JIRA for the [detailed changes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315420&version=12338275). We have curated a list of high level changes here, grouped by major modules.


* This will become a table of contents (this text will be scraped).
{:toc}


### Core and Spark SQL

 - **API updates**
   - SPARK-19107: Support creating hive table with DataFrameWriter and Catalog
   - SPARK-13721: Add support for LATERAL VIEW OUTER explode()
   - SPARK-18885: Unify CREATE TABLE syntax for data source and hive serde tables
   - SPARK-16475: Added Broadcast Hints BROADCAST, BROADCASTJOIN, and MAPJOIN,  for SQL Queries
   - SPARK-18350: Support session local timezone
   - SPARK-19261: Support ALTER TABLE table_name ADD COLUMNS
   - SPARK-20420: Add events to the external catalog
   - SPARK-18127: Add hooks and extension points to Spark
   - SPARK-20576: Support generic hint function in Dataset/DataFrame
   - SPARK-17203: Data source options should always be case insensitive
   - SPARK-19139: AES-based authentication mechanism for Spark
 - **Performance and stability**
   - **Cost-Based Optimizer**
     - SPARK-17075 SPARK-17076 SPARK-19020 SPARK-17077 SPARK-19350: Cardinality estimation for filter, join, aggregate, project and limit/sample operators
     - SPARK-17080: Cost-based join re-ordering
     - SPARK-17626: TPC-DS performance improvements using star-schema heuristics
   - SPARK-17949: Introduce a JVM object based aggregate operator
   - SPARK-18186: Partial aggregation support of HiveUDAFFunction
   - SPARK-18362 SPARK-19918: File listing/IO improvements for CSV and JSON
   - SPARK-18775: Limit the max number of records written per file
   - SPARK-18761: Uncancellable / unkillable tasks shouldn’t starve jobs of resources
   - SPARK-15352: Topology aware block replication
 - **Other notable changes**
   - SPARK-18352: Support for parsing multi-line JSON files
   - SPARK-19610: Support for parsing multi-line CSV files
   - SPARK-21079: Analyze Table Command on partitioned tables
   - SPARK-18703: Drop Staging Directories and Data Files after completion of Insertion/CTAS against Hive-serde Tables
   - SPARK-18209: More robust view canonicalization without full SQL expansion
   - SPARK-13446: [SPARK-18112] Support reading data from Hive metastore 2.0/2.1
   - SPARK-18191: Port RDD API to use commit protocol
   - SPARK-8425:Add blacklist mechanism for task scheduling
   - SPARK-19464: Remove support for Hadoop 2.5 and earlier
   - SPARK-19493: Remove Java 7 support

*Programming guides: <a href="{{site.baseurl}}/docs/2.2.0/programming-guide.html">Spark Programming Guide</a> and <a href="{{site.baseurl}}/docs/2.2.0/sql-programming-guide.html">Spark SQL, DataFrames and Datasets Guide</a>.*


### Structured Streaming

 - **General Availablity**
   - SPARK-20844: The Structured Streaming APIs are now GA and is no longer labeled experimental
 - **Kafka Improvements**
   - SPARK-19719: Support for reading and writing data in streaming or batch to/from Apache Kafka
   - SPARK-19968: Cached producer for lower latency kafka to kafka streams.
 - **API updates**
   - SPARK-19067: Support for complex stateful processing and timeouts using [flat]MapGroupsWithState
   - SPARK-19876: Support for one time triggers
 - **Other notable changes**
   - SPARK-20979: Rate source for testing and benchmarks

*Programming guide: <a href="{{site.baseurl}}/docs/2.2.0/structured-streaming-programming-guide.html">Structured Streaming Programming Guide</a>.*

### MLlib

 - **New algorithms in DataFrame-based API**
   - SPARK-14709: LinearSVC (Linear SVM Classifier) (Scala/Java/Python/R)
   - SPARK-19635: ChiSquare test in DataFrame-based API (Scala/Java/Python)
   - SPARK-19636: Correlation in DataFrame-based API (Scala/Java/Python)
   - SPARK-13568: Imputer feature transformer for imputing missing values (Scala/Java/Python)
   - SPARK-18929: Add Tweedie distribution for GLMs (Scala/Java/Python/R)
   - SPARK-14503: FPGrowth frequent pattern mining and AssociationRules (Scala/Java/Python/R)
 - **Existing algorithms added to Python and R APIs**
   - SPARK-18239: Gradient Boosted Trees ®
   - SPARK-18821: Bisecting K-Means ®
   - SPARK-18080: Locality Sensitive Hashing (LSH) (Python)
   - SPARK-6227: Distributed PCA and SVD for PySpark (in RDD-based API)
 - **Major bug fixes**
   - SPARK-19110: DistributedLDAModel.logPrior correctness fix
   - SPARK-17975: EMLDAOptimizer fails with ClassCastException (caused by GraphX checkpointing bug)
   - SPARK-18715: Fix wrong AIC calculation in Binomial GLM
   - SPARK-16473: BisectingKMeans failing during training with “java.util.NoSuchElementException: key not found” for certain inputs
   - SPARK-19348: pyspark.ml.Pipeline gets corrupted under multi-threaded use
   - SPARK-20047: Box-constrained Logistic Regression

*Programming guide: <a href="{{site.baseurl}}/docs/2.2.0/ml-guide.html">Machine Learning Library (MLlib) Guide</a>.*

### SparkR

The main focus of SparkR in the 2.2.0 release was adding extensive support for existing Spark SQL features:

 - **Major features**
   - SPARK-19654: Structured Streaming API for R
   - SPARK-20159: Support complete Catalog API in R
   - SPARK-19795: column functions to_json, from_json
   - SPARK-19399: Coalesce on DataFrame and coalesce on column
   - SPARK-20020: Support DataFrame checkpointing
   - SPARK-18285: Multi-column approxQuantile in R

*Programming guide: <a href="{{site.baseurl}}/docs/2.2.0/sparkr.html">SparkR (R on Spark)</a>.*

### GraphX

 - **Bug fixes**
   - SPARK-18847: PageRank gives incorrect results for graphs with sinks
   - SPARK-14804: Graph vertexRDD/EdgeRDD checkpoint results ClassCastException
 - **Optimizations**
   - SPARK-18845: PageRank initial value improvement for faster convergence
   - SPARK-5484: Pregel should checkpoint periodically to avoid StackOverflowError

*Programming guide: <a href="{{site.baseurl}}/docs/2.2.0/graphx-programming-guide.html">GraphX Programming Guide</a>.*

### Deprecations

 - **MLlib**
   - SPARK-18613: spark.ml LDA classes should not expose spark.mllib in APIs.  In spark.ml.LDAModel, deprecated `oldLocalModel` and `getModel`.
 - **SparkR**
   - SPARK-20195: deprecate createExternalTable

### Changes of behavior

 - **MLlib**
   - SPARK-19787: DeveloperApi ALS.train() uses default regParam value 0.1 instead of 1.0, in order to match regular ALS API’s default regParam setting.
 - **SparkR**
   - SPARK-19291: This added log-likelihood for SparkR Gaussian Mixture Models, but doing so introduced a SparkR model persistence incompatibility: Gaussian Mixture Models saved from SparkR 2.1 may not be loaded into SparkR 2.2.  We plan to put in place backwards compatibility guarantees for SparkR in the future.


### Known Issues

- None


### Credits
Last but not least, this release would not have been possible without the following contributors:
ALeksander Eskilson, Aaditya Ramesh, Adam Roberts, Adrian Petrescu, Ahmed Mahran, Alex Bozarth, Alexander Shorin, Alexander Ulanov, Andrew Duffy, Andrew Mills, Andrew Ray, Angus Gerry, Anthony Truchet, Anton Okolnychyi, Artur Sukhenko, Bartek Wisniewski, Bijay Pathak, Bill Chambers, Bjarne Fruergaard, Brian Cho, Bryan Cutler, Burak Yavuz, Cen Yu Hai, Charles Allen, Cheng Lian, Chie Hayashida, Christian Kadner, Clark Fitzgerald, Cody Koeninger, Daniel Darabos, Daoyuan Wang, David Navas, Davies Liu, Denny Lee, Devaraj K, Dhruve Ashar, Dilip Biswal, Ding Ding, Dmitriy Sokolov, Dongjoon Hyun, Drew Robb, Ekasit Kijsipongse, Eren Avsarogullari, Ergin Seyfe, Eric Liang, Erik O'Shaughnessy, Eyal Farago, Felix Cheung, Ferdinand Xu, Fred Reiss, Fu Xing, Gabriel Huang, Gaetan Semet, Gang Wu, Gayathri Murali, Gu Huiqin Alice, Guoqiang Li, Gurvinder Singh, Hao Ren, Herman Van Hovell, Hiroshi Inoue, Holden Karau, Hossein Falaki, Huang Zhaowei, Huaxin Gao, Hyukjin Kwon, Imran Rashid, Jacek Laskowski, Jagadeesan A S, Jakob Odersky, Jason White, Jeff Zhang, Jianfei Wang, Jiang Xingbo, Jie Huang, Jie Xiong, Jisoo Kim, John Muller, Jose Hiram Soltren, Joseph K. Bradley, Josh Rosen, Jun Kim, Junyang Qian, Justin Pihony, Kapil Singh, Kay Ousterhout, Kazuaki Ishizaki, Kevin Grealish, Kevin McHale, Kishor Patil, Koert Kuipers, Kousuke Saruta, Krishna Kalyan, Liang Ke, Liang-Chi Hsieh, Lianhui Wang, Linbo Jin, Liwei Lin, Luciano Resende, Maciej Brynski, Maciej Szymkiewicz, Mahmoud Rawas, Manoj Kumar, Marcelo Vanzin, Mariusz Strzelecki, Mark Grover, Maxime Rihouey, Miao Wang, Michael Allman, Michael Armbrust, Michael Gummelt, Michal Senkyr, Michal Wesolowski, Mikael Staldal, Mike Ihbe, Mitesh Patel, Nan Zhu, Nattavut Sutyanyong, Nic Eggert, Nicholas Chammas, Nick Lavers, Nick Pentreath, Nicolas Fraison, Noritaka Sekiyama, Peng Meng, Peng, Meng, Pete Robbins, Peter Ableda, Peter Lee, Philipp Hoffmann, Prashant Sharma, Prince J Wesley, Priyanka Garg, Qian Huang, Qifan Pu, Rajesh Balamohan, Reynold Xin, Robert Kruszewski, Russell Spitzer, Ryan Blue, Saisai Shao, Sameer Agarwal, Sami Jaktholm, Sandeep Purohit, Sandeep Singh, Satendra Kumar, Sean Owen, Sean Zhong, Seth Hendrickson, Sharkd Tu, Shen Hong, Shivansh Srivastava, Shivaram Venkataraman, Shixiong Zhu, Shuai Lin, Shubham Chopra, Sital Kedia, Song Jun, Srinath Shankar, Stavros Kontopoulos, Stefan Schulze, Steve Loughran, Suman Somasundar, Sun Dapeng, Sun Rui, Sunitha Kambhampati, Suresh Thalamati, Susan X. Huynh, Sylvain Zimmer, Takeshi YAMAMURO, Takuya UESHIN, Tao LI, Tao Lin, Tao Wang, Tarun Kumar, Tathagata Das, Tejas Patil, Thomas Graves, Timothy Chen, Timothy Hunter, Tom Graves, Tom Magrino, Tommy YU, Tyson Condie, Uncle Gen, Vinayak Joshi, Vincent Xie, Wang Fei, Wang Lei, Wang Tao, Wayne Zhang, Weichen Xu, Weiluo (David) Ren, Weiqing Yang, Wenchen Fan, Wesley Tang, William Benton, Wojciech Szymanski, Xiangrui Meng, Xianyang Liu, Xiao Li, Xin Ren, Xin Wu, Xing SHI, Xusen Yin, Yadong Qi, Yanbo Liang, Yang Wang, Yangyang Liu, Yin Huai, Yu Peng, Yucai Yu, Yuhao Yang, Yuming Wang, Yun Ni, Yves Raimond, Zhan Zhang, Zheng RuiFeng, Zhenhua Wang, pkch, tone-zhang, yimuxi