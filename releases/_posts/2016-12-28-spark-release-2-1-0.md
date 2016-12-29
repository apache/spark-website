---
layout: post
title: Spark Release 2.1.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---


Apache Spark 2.1.0 is the second release on the 2.x line. This release makes significant strides in the production readiness of Structured Streaming, with added support for <a href="{{site.baseurl}}/docs/2.1.0/structured-streaming-programming-guide.html#handling-late-data-and-watermarking">event time watermarks</a> and <a href="{{site.baseurl}}/docs/2.1.0/structured-streaming-kafka-integration.html">Kafka 0.10 support</a>. In addition, this release focuses more on usability, stability, and polish, resolving over 1200 tickets.


To download Apache Spark 2.1.0, visit the <a href="{{site.baseurl}}/download.html">downloads</a> page. You can consult JIRA for the [detailed changes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315420&version=12335644). We have curated a list of high level changes here, grouped by major modules.


* This will become a table of contents (this text will be scraped).
{:toc}


### Core and Spark SQL

 - **API updates**
   - SPARK-17864: Data type APIs are stable APIs. 
   - SPARK-18351: from_json and to_json for parsing JSON for string columns
   - SPARK-16700: When creating a DataFrame in PySpark, Python dictionaries can be used as values of a StructType.
 - **Performance and stability**
   - SPARK-17861: Scalable Partition Handling. Hive metastore stores all table partition metadata by default for Spark tables stored with Hive’s storage formats as well as tables stored with Spark’s native formats. This change reduces first query latency over partitioned tables and allows for the use of DDL commands to manipulate partitions for tables stored with Spark’s native formats. <a href="{{site.baseurl}}/docs/2.1.0/sql-programming-guide.html#upgrading-from-spark-sql-20-to-21">Users can migrate tables stored with Spark's native formats created by previous versions by using the MSCK command</a>.
   - SPARK-16523: Speeds up group-by aggregate performance by adding a fast aggregation cache that is backed by a row-based hashmap.
 - **Other notable changes**
   - SPARK-9876: parquet-mr upgraded to 1.8.1

*Programming guides: <a href="{{site.baseurl}}/docs/2.1.0/programming-guide.html">Spark Programming Guide</a> and <a href="{{site.baseurl}}/docs/2.1.0/sql-programming-guide.html">Spark SQL, DataFrames and Datasets Guide</a>.*


### Structured Streaming

 - **API updates**
   - SPARK-17346: <a href="{{site.baseurl}}/docs/2.1.0/structured-streaming-kafka-integration.html">Kafka 0.10 support in Structured Streaming</a>
   - SPARK-17731: Metrics for Structured Streaming
   - SPARK-17829: Stable format for offset log
   - SPARK-18124: Observed delay based Event Time Watermarks
   - SPARK-18192: Support all file formats in structured streaming
   - SPARK-18516: Separate instantaneous state from progress performance statistics
 - **Stability**
   - SPARK-17267: Long running structured streaming requirements

*Programming guide: <a href="{{site.baseurl}}/docs/2.1.0/structured-streaming-programming-guide.html">Structured Streaming Programming Guide</a>.*


### MLlib

 - **API updates**
   - SPARK-5992: Locality Sensitive Hashing
   - SPARK-7159: Multiclass Logistic Regression in DataFrame-based API
   - SPARK-16000: ML persistence: Make model loading backwards-compatible with Spark 1.x with saved models using spark.mllib.linalg.Vector columns in DataFrame-based API
 - **Performance and stability**
   - SPARK-17748: Faster, more stable LinearRegression for < 4096 features
   - SPARK-16719: RandomForest: communicate fewer trees on each iteration

*Programming guide: <a href="{{site.baseurl}}/docs/2.1.0/ml-guide.html">Machine Learning Library (MLlib) Guide</a>.*


### SparkR

The main focus of SparkR in the 2.1.0 release was adding extensive support for ML algorithms, which include:

 - New ML algorithms in SparkR including LDA, Gaussian Mixture Models, ALS, Random Forest, Gradient Boosted Trees, and more
 - Support for multinomial logistic regression providing similar functionality as the glmnet R package
 - Enable installing third party packages on workers using `spark.addFile` (<a href="https://issues.apache.org/jira/browse/SPARK-17577">SPARK-17577</a>).
 - Standalone installable package built with the Apache Spark release. We will be submitting this to CRAN soon.

*Programming guide: <a href="{{site.baseurl}}/docs/2.1.0/sparkr.html">SparkR (R on Spark)</a>.*

### GraphX

 - SPARK-11496: Personalized pagerank

*Programming guide: <a href="{{site.baseurl}}/docs/2.1.0/graphx-programming-guide.html">GraphX Programming Guide</a>.*


### Deprecations

 - **MLlib**
   - SPARK-18592: Deprecate unnecessary Param setter methods in tree and ensemble models


### Changes of behavior


 - **Core and SQL**
   - SPARK-18360: The default table path of tables in the default database will be under the location of the default database instead of always depending on the warehouse location setting.
   - SPARK-18377: spark.sql.warehouse.dir is a static configuration now. Users need to set it before the start of the first SparkSession and its value is shared by sessions in the same application.
   - SPARK-14393: Values generated by non-deterministic functions will not change after coalesce or union.
   - SPARK-18076: Fix default Locale used in DateFormat, NumberFormat to Locale.US
   - SPARK-16216: CSV and JSON data sources write timestamp and date values in <a href="https://www.w3.org/TR/NOTE-datetime">ISO 8601 formatted string</a>. Two options, timestampFormat and dateFormat, are added to these two data sources to let users control the format of timestamp and date value in string representation, respectively. Please refer to the API doc of <a href="{{site.baseurl}}/docs/2.1.0/api/scala/index.html#org.apache.spark.sql.DataFrameReader">DataFrameReader</a> and <a href="{{site.baseurl}}/docs/2.1.0/api/scala/index.html#org.apache.spark.sql.DataFrameWriter">DataFrameWriter</a> for more details about these two configurations. 
   - SPARK-17427: Function SIZE returns -1 when its input parameter is null.
   - SPARK-16498: LazyBinaryColumnarSerDe is fixed as the the SerDe for RCFile. 
   - SPARK-16552: If a user does not specify the schema to a table and relies on schema inference, the inferred schema will be stored in the metastore. The schema will be not inferred again when this table is used.
 - **Structured Streaming**
   - SPARK-18516: Separate instantaneous state from progress performance statistics
 - **MLlib**
   - SPARK-17870: ChiSquareSelector now accounts for degrees of freedom by using pValue rather than raw statistic to select the top features.



### Known Issues

 - SPARK-17647: In SQL LIKE clause, wildcard characters '%' and '_' right after backslashes are always escaped.
 - SPARK-18908: If a StreamExecution fails to start, users need to check stderr for the error.



### Credits
Last but not least, this release would not have been possible without the following contributors:
ALeksander Eskilson, Aaditya Ramesh, Adam Roberts, Adrian Petrescu, Ahmed Mahran, Alex Bozarth, Alexander Shorin, Alexander Ulanov, Andrew Duffy, Andrew Mills, Andrew Ray, Angus Gerry, Anthony Truchet, Anton Okolnychyi, Artur Sukhenko, Bartek Wisniewski, Bijay Pathak, Bill Chambers, Bjarne Fruergaard, Brian Cho, Bryan Cutler, Burak Yavuz, Cen Yu Hai, Charles Allen, Cheng Lian, Chie Hayashida, Christian Kadner, Clark Fitzgerald, Cody Koeninger, Daniel Darabos, Daoyuan Wang, David Navas, Davies Liu, Denny Lee, Devaraj K, Dhruve Ashar, Dilip Biswal, Ding Ding, Dmitriy Sokolov, Dongjoon Hyun, Drew Robb, Ekasit Kijsipongse, Eren Avsarogullari, Ergin Seyfe, Eric Liang, Erik O'Shaughnessy, Eyal Farago, Felix Cheung, Ferdinand Xu, Fred Reiss, Fu Xing, Gabriel Huang, Gaetan Semet, Gang Wu, Gayathri Murali, Gu Huiqin Alice, Guoqiang Li, Gurvinder Singh, Hao Ren, Herman Van Hovell, Hiroshi Inoue, Holden Karau, Hossein Falaki, Huang Zhaowei, Huaxin Gao, Hyukjin Kwon, Imran Rashid, Jacek Laskowski, Jagadeesan A S, Jakob Odersky, Jason White, Jeff Zhang, Jianfei Wang, Jiang Xingbo, Jie Huang, Jie Xiong, Jisoo Kim, John Muller, Jose Hiram Soltren, Joseph K. Bradley, Josh Rosen, Jun Kim, Junyang Qian, Justin Pihony, Kapil Singh, Kay Ousterhout, Kazuaki Ishizaki, Kevin Grealish, Kevin McHale, Kishor Patil, Koert Kuipers, Kousuke Saruta, Krishna Kalyan, Liang Ke, Liang-Chi Hsieh, Lianhui Wang, Linbo Jin, Liwei Lin, Luciano Resende, Maciej Brynski, Maciej Szymkiewicz, Mahmoud Rawas, Manoj Kumar, Marcelo Vanzin, Mariusz Strzelecki, Mark Grover, Maxime Rihouey, Miao Wang, Michael Allman, Michael Armbrust, Michael Gummelt, Michal Senkyr, Michal Wesolowski, Mikael Staldal, Mike Ihbe, Mitesh Patel, Nan Zhu, Nattavut Sutyanyong, Nic Eggert, Nicholas Chammas, Nick Lavers, Nick Pentreath, Nicolas Fraison, Noritaka Sekiyama, Peng Meng, Peng, Meng, Pete Robbins, Peter Ableda, Peter Lee, Philipp Hoffmann, Prashant Sharma, Prince J Wesley, Priyanka Garg, Qian Huang, Qifan Pu, Rajesh Balamohan, Reynold Xin, Robert Kruszewski, Russell Spitzer, Ryan Blue, Saisai Shao, Sameer Agarwal, Sami Jaktholm, Sandeep Purohit, Sandeep Singh, Satendra Kumar, Sean Owen, Sean Zhong, Seth Hendrickson, Sharkd Tu, Shen Hong, Shivansh Srivastava, Shivaram Venkataraman, Shixiong Zhu, Shuai Lin, Shubham Chopra, Sital Kedia, Song Jun, Srinath Shankar, Stavros Kontopoulos, Stefan Schulze, Steve Loughran, Suman Somasundar, Sun Dapeng, Sun Rui, Sunitha Kambhampati, Suresh Thalamati, Susan X. Huynh, Sylvain Zimmer, Takeshi YAMAMURO, Takuya UESHIN, Tao LI, Tao Lin, Tao Wang, Tarun Kumar, Tathagata Das, Tejas Patil, Thomas Graves, Timothy Chen, Timothy Hunter, Tom Graves, Tom Magrino, Tommy YU, Tyson Condie, Uncle Gen, Vinayak Joshi, Vincent Xie, Wang Fei, Wang Lei, Wang Tao, Wayne Zhang, Weichen Xu, Weiluo (David) Ren, Weiqing Yang, Wenchen Fan, Wesley Tang, William Benton, Wojciech Szymanski, Xiangrui Meng, Xianyang Liu, Xiao Li, Xin Ren, Xin Wu, Xing SHI, Xusen Yin, Yadong Qi, Yanbo Liang, Yang Wang, Yangyang Liu, Yin Huai, Yu Peng, Yucai Yu, Yuhao Yang, Yuming Wang, Yun Ni, Yves Raimond, Zhan Zhang, Zheng RuiFeng, Zhenhua Wang, pkch, tone-zhang, yimuxi