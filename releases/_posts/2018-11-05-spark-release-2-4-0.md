---
layout: post
title: Spark Release 2.4.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---


Apache Spark 2.4.0 is the fifth release in the 2.x line. This release adds Barrier Execution Mode for better integration with deep learning frameworks, introduces 30+ built-in and higher-order functions to deal with complex data type easier, improves the K8s integration, along with experimental Scala 2.12 support. Other major updates include the built-in Avro data source, Image data source, flexible streaming sinks, elimination of the 2GB block size limitation during transfer, Pandas UDF improvements. In addition, this release continues to focus on usability, stability, and polish while resolving around 1100 tickets.

To download Apache Spark 2.4.0, visit the <a href="{{site.baseurl}}/downloads.html">downloads</a> page. You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.4.0). We have curated a list of high level changes here, grouped by major modules.

* This will become a table of contents (this text will be scraped).
{:toc}


### Core and Spark SQL

 - **Major features**
   - **Barrier Execution Mode**: [[SPARK-24374](https://issues.apache.org/jira/browse/SPARK-24374)] Support Barrier Execution Mode in the scheduler, to better integrate with deep learning frameworks.
   - **Scala 2.12 Support**: [[SPARK-14220](https://issues.apache.org/jira/browse/SPARK-14220)] Add experimental Scala 2.12 support. Now you can build Spark with Scala 2.12 and write Spark applications in Scala 2.12.
   - **Higher-order functions**: [[SPARK-23899](https://issues.apache.org/jira/browse/SPARK-23899)] Add a lof of new built-in functions, including high-order functions, to deal with complex data types easier.
   - **Built-in Avro data source**: [[SPARK-24768](https://issues.apache.org/jira/browse/SPARK-24768)] Inline Spark-Avro package with logical type support, better performance and usability.

 - **API**
   - [[SPARK-24035](https://issues.apache.org/jira/browse/SPARK-24035)] SQL syntax for Pivot
   - [[SPARK-24940](https://issues.apache.org/jira/browse/SPARK-24940)] Coalesce and Repartition Hint for SQL Queries
   - [[SPARK-19602](https://issues.apache.org/jira/browse/SPARK-19602)] Support column resolution of fully qualified column name
   - [[SPARK-21274](https://issues.apache.org/jira/browse/SPARK-21274)] Implement EXCEPT ALL and INTERSECT ALL

 - **Performance and stability**
   - [[SPARK-16406](https://issues.apache.org/jira/browse/SPARK-16406)] Reference resolution for large number of columns should be faster
   - [[SPARK-23486](https://issues.apache.org/jira/browse/SPARK-23486)] Cache the function name from the external catalog for lookupFunctions
   - [[SPARK-23803](https://issues.apache.org/jira/browse/SPARK-23803)] Support Bucket Pruning
   - [[SPARK-24802](https://issues.apache.org/jira/browse/SPARK-24802)] Optimization Rule Exclusion
   - [[SPARK-4502](https://issues.apache.org/jira/browse/SPARK-4502)] Nested schema pruning for Parquet tables
   - [[SPARK-24296](https://issues.apache.org/jira/browse/SPARK-24296)] Support replicating blocks larger than 2 GB
   - [[SPARK-24307](https://issues.apache.org/jira/browse/SPARK-24307)] Support sending messages over 2GB from memory
   - [[SPARK-23243](https://issues.apache.org/jira/browse/SPARK-23243)] Shuffle+Repartition on an RDD could lead to incorrect answers
   - [[SPARK-25181](https://issues.apache.org/jira/browse/SPARK-25181)] Limited the size of BlockManager master and slave thread pools, lowering memory overhead when networking is slow

 - **Connectors**
   - [[SPARK-23972](https://issues.apache.org/jira/browse/SPARK-23972)] Update Parquet from 1.8.2 to 1.10.0
   - [[SPARK-25419](https://issues.apache.org/jira/browse/SPARK-25419)] Parquet predicate pushdown improvement
   - [[SPARK-23456](https://issues.apache.org/jira/browse/SPARK-23456)] Native ORC reader is on by default
   - [[SPARK-22279](https://issues.apache.org/jira/browse/SPARK-22279)] Use native ORC reader to read Hive serde tables by default
   - [[SPARK-21783](https://issues.apache.org/jira/browse/SPARK-21783)] Turn on ORC filter push-down by default
   - [[SPARK-24959](https://issues.apache.org/jira/browse/SPARK-24959)] Speed up count() for JSON and CSV
   - [[SPARK-24244](https://issues.apache.org/jira/browse/SPARK-24244)] Parsing only required columns to the CSV parser
   - [[SPARK-23786](https://issues.apache.org/jira/browse/SPARK-23786)] CSV schema validation - column names are not checked
   - [[SPARK-24423](https://issues.apache.org/jira/browse/SPARK-24423)] Option query for specifying the query to read from JDBC
   - [[SPARK-22814](https://issues.apache.org/jira/browse/SPARK-22814)] Support Date/Timestamp in JDBC partition column
   - [[SPARK-24771](https://issues.apache.org/jira/browse/SPARK-24771)] Update Avro from 1.7.7 to 1.8

 - **Kubernetes Scheduler Backend**
   - [[SPARK-23984](https://issues.apache.org/jira/browse/SPARK-23984)] PySpark bindings for K8S
   - [[SPARK-24433](https://issues.apache.org/jira/browse/SPARK-24433)] R bindings for K8S
   - [[SPARK-23146](https://issues.apache.org/jira/browse/SPARK-23146)] Support client mode for Kubernetes cluster backend
   - [[SPARK-23529](https://issues.apache.org/jira/browse/SPARK-23529)] Support for mounting K8S volumes

 - **PySpark**
   - [[SPARK-24215](https://issues.apache.org/jira/browse/SPARK-24215)] Implement eager evaluation for DataFrame APIs
   - [[SPARK-22274](https://issues.apache.org/jira/browse/SPARK-22274)] User-defined aggregation functions with pandas UDF
   - [[SPARK-22239](https://issues.apache.org/jira/browse/SPARK-22239)] User-defined window functions with pandas UDF
   - [[SPARK-24396](https://issues.apache.org/jira/browse/SPARK-24396)] Add Structured Streaming ForeachWriter for Python
   - [[SPARK-23874](https://issues.apache.org/jira/browse/SPARK-23874)] Upgrade Apache Arrow to 0.10.0
   - [[SPARK-25004](https://issues.apache.org/jira/browse/SPARK-25004)] Add spark.executor.pyspark.memory limit
   - [[SPARK-23030](https://issues.apache.org/jira/browse/SPARK-23030)] Use Arrow stream format for creating from and collecting Pandas DataFrames
   - [[SPARK-24624](https://issues.apache.org/jira/browse/SPARK-24624)] Support mixture of Python UDF and Scalar Pandas UDF

 - **Other notable changes**
   - [[SPARK-24596](https://issues.apache.org/jira/browse/SPARK-24596)] Non-cascading Cache Invalidation
   - [[SPARK-23880](https://issues.apache.org/jira/browse/SPARK-23880)] Do not trigger any job for caching data
   - [[SPARK-23510](https://issues.apache.org/jira/browse/SPARK-23510)] Support Hive 2.2 and Hive 2.3 metastore
   - [[SPARK-23711](https://issues.apache.org/jira/browse/SPARK-23711)] Add fallback generator for UnsafeProjection
   - [[SPARK-24626](https://issues.apache.org/jira/browse/SPARK-24626)] Parallelize location size calculation in Analyze Table command

*Programming guides: <a href="{{site.baseurl}}/docs/2.4.0/rdd-programming-guide.html">Spark RDD Programming Guide</a> and <a href="{{site.baseurl}}/docs/2.4.0/sql-programming-guide.html">Spark SQL, DataFrames and Datasets Guide</a>.*


### Structured Streaming

 - **Major features**
   - [[SPARK-24565](https://issues.apache.org/jira/browse/SPARK-24565)] Exposed the output rows of each microbatch as a DataFrame using foreachBatch (Python, Scala, and Java)
   - [[SPARK-24396](https://issues.apache.org/jira/browse/SPARK-24396)] Added Python API for foreach and ForeachWriter
   - [[SPARK-25005](https://issues.apache.org/jira/browse/SPARK-25005)] Support “kafka.isolation.level” to read only committed records from Kafka topics that are written using a transactional producer.

 - **Other notable changes**
   - [[SPARK-24662](https://issues.apache.org/jira/browse/SPARK-24662)] Support the LIMIT operator for streams in Append or Complete mode
   - [[SPARK-24763](https://issues.apache.org/jira/browse/SPARK-24763)] Remove redundant key data from value in streaming aggregation
   - [[SPARK-24156](https://issues.apache.org/jira/browse/SPARK-24156)] Faster generation of output results and/or state cleanup with stateful operations (mapGroupsWithState, stream-stream join, streaming aggregation, streaming dropDuplicates) when there is no data in the input stream.
   - [[SPARK-24730](https://issues.apache.org/jira/browse/SPARK-24730)] Support for choosing either the min or max watermark when there are multiple input streams in a query
   - [[SPARK-25399](https://issues.apache.org/jira/browse/SPARK-25399)] Fixed a bug where reusing execution threads from continuous processing for microbatch streaming can result in a correctness issue
   - [[SPARK-18057](https://issues.apache.org/jira/browse/SPARK-18057)] Upgraded Kafka client version from 0.10.0.1 to 2.0.0

*Programming guide: <a href="{{site.baseurl}}/docs/2.4.0/structured-streaming-programming-guide.html">Structured Streaming Programming Guide</a>.*


### MLlib

 - **Major features**
   - [[SPARK-22666](https://issues.apache.org/jira/browse/SPARK-22666)] Spark datasource for image format

 - **Other notable changes**
   - [[SPARK-22119](https://issues.apache.org/jira/browse/SPARK-22119)] Add cosine distance measure to KMeans/BisectingKMeans/Clustering evaluator
   - [[SPARK-10697](https://issues.apache.org/jira/browse/SPARK-10697)] Lift Calculation in Association Rule mining
   - [[SPARK-14682](https://issues.apache.org/jira/browse/SPARK-14682)] Provide evaluateEachIteration method or equivalent for spark.ml GBTs
   - [[SPARK-7132](https://issues.apache.org/jira/browse/SPARK-7132)] Add fit with validation set to spark.ml GBT
   - [[SPARK-15784](https://issues.apache.org/jira/browse/SPARK-15784)] Add Power Iteration Clustering to spark.ml
   - [[SPARK-15064](https://issues.apache.org/jira/browse/SPARK-15064)] Locale support in StopWordsRemover
   - [[SPARK-21741](https://issues.apache.org/jira/browse/SPARK-21741)] Python API for DataFrame-based multivariate summarizer
   - [[SPARK-21898](https://issues.apache.org/jira/browse/SPARK-21898)] Feature parity for KolmogorovSmirnovTest in MLlib
   - [[SPARK-10884](https://issues.apache.org/jira/browse/SPARK-10884)] Support prediction on single instance for regression and classification related models
   - [[SPARK-23783](https://issues.apache.org/jira/browse/SPARK-23783)] Add new generic export trait for ML pipelines
   - [[SPARK-11239](https://issues.apache.org/jira/browse/SPARK-11239)] PMML export for ML linear regression

*Programming guide: <a href="{{site.baseurl}}/docs/2.4.0/ml-guide.html">Machine Learning Library (MLlib) Guide</a>.*


### SparkR

 - **Major features**
   - [[SPARK-25393](https://issues.apache.org/jira/browse/SPARK-25393)] Adding new function from_csv()
   - [[SPARK-21291](https://issues.apache.org/jira/browse/SPARK-21291)] add R partitionBy API in DataFrame
   - [[SPARK-25007](https://issues.apache.org/jira/browse/SPARK-25007)] Add array_intersect/array_except/array_union/shuffle to SparkR
   - [[SPARK-25234](https://issues.apache.org/jira/browse/SPARK-25234)] avoid integer overflow in parallelize
   - [[SPARK-25117](https://issues.apache.org/jira/browse/SPARK-25117)] Add EXCEPT ALL and INTERSECT ALL support in R
   - [[SPARK-24537](https://issues.apache.org/jira/browse/SPARK-24537)] Add array_remove / array_zip / map_from_arrays / array_distinct
   - [[SPARK-24187](https://issues.apache.org/jira/browse/SPARK-24187)] Add array_join function to SparkR
   - [[SPARK-24331](https://issues.apache.org/jira/browse/SPARK-24331)] Adding arrays_overlap, array_repeat, map_entries to SparkR
   - [[SPARK-24198](https://issues.apache.org/jira/browse/SPARK-24198)] Adding slice function to SparkR
   - [[SPARK-24197](https://issues.apache.org/jira/browse/SPARK-24197)] Adding array_sort function to SparkR
   - [[SPARK-24185](https://issues.apache.org/jira/browse/SPARK-24185)] add flatten function to SparkR
   - [[SPARK-24069](https://issues.apache.org/jira/browse/SPARK-24069)] Add array_min / array_max functions
   - [[SPARK-24054](https://issues.apache.org/jira/browse/SPARK-24054)] Add array_position function / element_at functions
   - [[SPARK-23770](https://issues.apache.org/jira/browse/SPARK-23770)] Add repartitionByRange API in SparkR

*Programming guide: <a href="{{site.baseurl}}/docs/2.4.0/sparkr.html">SparkR (R on Spark)</a>.*


### GraphX

 - **Major features**
   - [[SPARK-25268](https://issues.apache.org/jira/browse/SPARK-25268)] run Parallel Personalized PageRank throws serialization Exception

*Programming guide: <a href="{{site.baseurl}}/docs/2.4.0/graphx-programming-guide.html">GraphX Programming Guide</a>.*


### Deprecations

 - **MLlib**
   - [[SPARK-23451](https://issues.apache.org/jira/browse/SPARK-23451)] Deprecate KMeans computeCost
   - [[SPARK-25345](https://issues.apache.org/jira/browse/SPARK-25345)] Deprecate readImages APIs from ImageSchema


### Changes of behavior

 - **Spark Core**
   - [[SPARK-25088](https://issues.apache.org/jira/browse/SPARK-25088)] Rest Server default & doc updates

 - **Spark SQL**
   - [[SPARK-23549](https://issues.apache.org/jira/browse/SPARK-23549)] Cast to timestamp when comparing timestamp with date
   - [[SPARK-24324](https://issues.apache.org/jira/browse/SPARK-24324)] Pandas Grouped Map UDF should assign result columns by name
   - [[SPARK-23425](https://issues.apache.org/jira/browse/SPARK-23425)] load data for hdfs file path with wildcard usage is not working properly
   - [[SPARK-23173](https://issues.apache.org/jira/browse/SPARK-23173)] from_json can produce nulls for fields which are marked as non-nullable
   - [[SPARK-24966](https://issues.apache.org/jira/browse/SPARK-24966)] Implement precedence rules for set operations
   - [[SPARK-25708](https://issues.apache.org/jira/browse/SPARK-25708)] HAVING without GROUP BY should be global aggregate


### Known Issues

  - [[SPARK-25271](https://issues.apache.org/jira/browse/SPARK-25271)] CTAS with Hive parquet tables should leverage native parquet source
  - [[SPARK-24935](https://issues.apache.org/jira/browse/SPARK-24935)] Problem with Executing Hive UDAF's from Spark 2.2 Onwards
  - [[SPARK-25879](https://issues.apache.org/jira/browse/SPARK-25879)] Schema pruning fails when a nested field and top level field are selected
  - [[SPARK-25906](https://issues.apache.org/jira/browse/SPARK-25906)] spark-shell cannot handle `-i` option correctly
  - [[SPARK-25921](https://issues.apache.org/jira/browse/SPARK-25921)] Python worker reuse causes Barrier tasks to run without BarrierTaskContext
  - [[SPARK-25918](https://issues.apache.org/jira/browse/SPARK-25918)] LOAD DATA LOCAL INPATH should handle a relative path


### Credits
Last but not least, this release would not have been possible without the following contributors:
Achuth17, Adam Bradbury, Adamyuanyuan, Adelbert Chang, Ala Luszczak, Aleksandr Koriagin, Alessandro Bellina, Alessandro Solimando, Andrew Korzhuev, Anton Okolnychyi, Antonio Murgia, Arseniy Tashoyan, Artem Rudoy, Arun Mahadevan, Asher Saban, Bago Amirbekian, Benjamin Peterson, Bo Meng, Bogdan Raducanu, Bounkong Khamphousone, Brandon Krieger, Brian Lindblom, Bruce Robbins, Bryan Cutler, Cheng Lian, Chongguang LIU, Chris Horn, Chris Martin, Cody Koeninger, DB Tsai, Daniel Sakuma, Daniel Van Der Ende, Darcy Shen, David Vogelbacher, Devaraj K, Dhruve Ashar, Dilip Biswal, Dongjoon Hyun, DylanGuedes, Efim Poberezkin, Eric Chang, Eric Liang, Erik Erlandson, Eyal Farago, Fangshi Li, Felix Cheung, Feng Liu, Fernando Pereira, Florent Pepin, Fokko Driesprong, Gabor Somogyi, Gengliang Wang, Ger Van Rossum, Gera Shegalov, Goun Na, Hao Ren, Henry Robinson, Herman Van Hovell, Hieu Huynh, Holden Karau, Huang Tengfei, Huaxin Gao, Hyukjin Kwon, Ilan Filonenko, Imran Rashid, Jacek Laskowski, Jake Charland, James Thompson, James Yu, Jaroslav Chladek, Jeff Zhang, JiahuiJiang, Jim Kleckner, Joey Krabacher, John Zhuge, Jongyoul Lee, Jooseong Kim, Jose Torres, Joseph Bradley, Joseph K. Bradley, Josh Rosen, Julien Cuquemelle, Juliusz Sompolski, Jungtaek Lim, KaiXinXIaoLei, Kallman, Steven, Karthik Palaniappan, Kaya Kupferschmidt, Kazuaki Ishizaki, Kelley Robinson, Kent Yao, Kevin Yu, KevinZwx, Koert Kuipers, Kousuke Saruta, Kris Mok, LantaoJin, Lee Dongjin, Lemonjing, Li Jin, Liang-Chi Hsieh, Lu WANG, LucaCanali, Marcelo Vanzin, Marco Gaido, Marek Novotny, Mario Molina, Mark Petruska, Maryann Xue, Mathieu St-Louis, Matthew Cheah, Matthew Tovbin, Mauro Palsgraaf, Maxim Gekk, Michael (Stu) Stewart, Michael Allman, Michael Chirico, Michael Mior, Michal Switakowski, Mihaly Toth, Miklos C, Miles Yucht, Misha Dmitriev, Mukul Murthy, Mykhailo Shtelma, Neal Song, Ngone51, Nihar Sheth, Nolan Emirot, Norman Maurer, Onur Satici, Patrick McGloin, Patrick Pisciuneri, Paul Mackles, Peter Toth, Prashant Sharma, Rao Fu, Ray Burgemeestre, Rekha Joshi, Reynold Xin, Reza Safi, Ricardo Martinelli De Oliveira, Rob Vesse, Robert Kruszewski, Rong Tang, Ryan Blue, Sahil Takiar, Saisai Shao, Sandeep Singh, Sandor Murakozi, Sanket Chintapalli, Santiago Saavedra, Sean Owen, Sean Suchter, Sebastian Arzt, Shane Knapp, Shixiong Zhu, Soham Aurangabadkar, Stacy Kerkela, Stan Zhai, Stavros Kontopoulos, Steve Loughran, Sunitha Kambhampati, Takeshi Yamamuro, Takuya UESHIN, Tathagata Das, Ted Yu, Teng Peng, Thiruvasakan Paramasivan, Thomas Graves, Tom Saleeba, Vayda, Oleksandr: IT (PRG), Vinod KC, Vladimir Kuriatkov, Wang Gengliang, Weichen Xu, Wenbo Zhao, Wenchen Fan, William Sheu, XD-DENG, Xiangrui Meng, Xianjin YE, Xianyang Liu, Xiao Li, Xiaogang Tu, Xiayun Sun, Xingbo Jiang, Yacine Mazari, Yash Sharma, Ye Zhou, Yinan Li, Yogesh Garg, Yuanbo Liu, Yuanjian Li, Yuchen Huo, Yuexin Zhang, Yuming Wang, Yuval Itzchakov, Zhan Zhang, Zhang Le, Zheng RuiFeng, Zoltan C. Toth