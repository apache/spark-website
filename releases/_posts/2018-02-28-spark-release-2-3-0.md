---
layout: post
title: Spark Release 2.3.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---


Apache Spark 2.3.0 is the fourth release in the 2.x line. This release adds support for Continuous Processing in Structured Streaming along with a brand new Kubernetes Scheduler backend. Other major updates include the new DataSource and Structured Streaming v2 APIs, and a number of PySpark performance enhancements. In addition, this release continues to focus on usability, stability, and polish while resolving around 1400 tickets.

To download Apache Spark 2.3.0, visit the <a href="{{site.baseurl}}/downloads.html">downloads</a> page. You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.3.0). We have curated a list of high level changes here, grouped by major modules.

* This will become a table of contents (this text will be scraped).
{:toc}


### Core, PySpark and Spark SQL

 - **Major features**
   - **Spark on Kubernetes**: [[SPARK-18278](https://issues.apache.org/jira/browse/SPARK-18278)] A new kubernetes scheduler backend that supports native submission of spark jobs to a cluster managed by kubernetes. Note that this support is currently experimental and behavioral changes around configurations, container images and entrypoints should be expected.
   - **Vectorized ORC Reader**: [[SPARK-16060](https://issues.apache.org/jira/browse/SPARK-16060)] Adds support for new ORC reader that substantially improves the ORC scan throughput through vectorization (2-5x). To enable the reader, users can set `spark.sql.orc.impl` to `native`.
   - **Spark History Server V2**: [[SPARK-18085](https://issues.apache.org/jira/browse/SPARK-18085)] A new spark history server (SHS) backend that provides better scalability for large scale applications with a more efficient event storage mechanism.
   - **Data source API V2**: [[SPARK-15689](https://issues.apache.org/jira/browse/SPARK-15689)][[SPARK-22386](https://issues.apache.org/jira/browse/SPARK-22386)] An experimental API for plugging in new data sources in Spark. The new API attempts to address several limitations of the V1 API and aims to facilitate development of high performant, easy-to-maintain, and extensible external data sources. Note that this API is still undergoing active development and breaking changes should be expected.
   - **PySpark Performance Enhancements**: [[SPARK-22216](https://issues.apache.org/jira/browse/SPARK-22216)][[SPARK-21187](https://issues.apache.org/jira/browse/SPARK-21187)] Significant improvements in python performance and interoperability by fast data serialization and vectorized execution.

 - **Performance and stability**
    - [[SPARK-21975](https://issues.apache.org/jira/browse/SPARK-21975)] Histogram support in cost-based optimizer
    - [[SPARK-20331](https://issues.apache.org/jira/browse/SPARK-20331)] Better support for predicate pushdown for Hive partition pruning 
    - [[SPARK-19112](https://issues.apache.org/jira/browse/SPARK-19112)] Support for ZStandard compression codec
    - [[SPARK-21113](https://issues.apache.org/jira/browse/SPARK-21113)] Support for read ahead input stream to amortize disk I/O cost in the spill reader
    - [[SPARK-22510](https://issues.apache.org/jira/browse/SPARK-22510)][[SPARK-22692](https://issues.apache.org/jira/browse/SPARK-22692)][[SPARK-21871](https://issues.apache.org/jira/browse/SPARK-21871)] Further stabilize the codegen framework to avoid hitting the `64KB` JVM bytecode limit on the Java method and Java compiler constant pool limit
    - [[SPARK-23207](https://issues.apache.org/jira/browse/SPARK-23207)] Fixed a long standing bug in Spark where consecutive shuffle+repartition on a DataFrame could lead to incorrect answers in certain surgical cases
    - [[SPARK-22062](https://issues.apache.org/jira/browse/SPARK-22062)][[SPARK-17788](https://issues.apache.org/jira/browse/SPARK-17788)][[SPARK-21907](https://issues.apache.org/jira/browse/SPARK-21907)] Fix various causes of OOMs 
    - [[SPARK-22489](https://issues.apache.org/jira/browse/SPARK-22489)][[SPARK-22916](https://issues.apache.org/jira/browse/SPARK-22916)][[SPARK-22895](https://issues.apache.org/jira/browse/SPARK-22895)][[SPARK-20758](https://issues.apache.org/jira/browse/SPARK-20758)][[SPARK-22266](https://issues.apache.org/jira/browse/SPARK-22266)][[SPARK-19122](https://issues.apache.org/jira/browse/SPARK-19122)][[SPARK-22662](https://issues.apache.org/jira/browse/SPARK-22662)][[SPARK-21652](https://issues.apache.org/jira/browse/SPARK-21652)] Enhancements in rule-based optimizer and planner

 - **Other notable changes**
    - [[SPARK-20236](https://issues.apache.org/jira/browse/SPARK-20236)] Support Hive style dynamic partition overwrite semantics.
    - [[SPARK-4131](https://issues.apache.org/jira/browse/SPARK-4131)] Support `INSERT OVERWRITE DIRECTORY` to directly write data into the filesystem from a query
    - [[SPARK-19285](https://issues.apache.org/jira/browse/SPARK-19285)][[SPARK-22945](https://issues.apache.org/jira/browse/SPARK-22945)][[SPARK-21499](https://issues.apache.org/jira/browse/SPARK-21499)][[SPARK-20586](https://issues.apache.org/jira/browse/SPARK-20586)][[SPARK-20416](https://issues.apache.org/jira/browse/SPARK-20416)][[SPARK-20668](https://issues.apache.org/jira/browse/SPARK-20668)] UDF enhancements
    - [[SPARK-20463](https://issues.apache.org/jira/browse/SPARK-20463)][[SPARK-19951](https://issues.apache.org/jira/browse/SPARK-19951)][[SPARK-22934](https://issues.apache.org/jira/browse/SPARK-22934)][[SPARK-21055](https://issues.apache.org/jira/browse/SPARK-21055)][[SPARK-17729](https://issues.apache.org/jira/browse/SPARK-17729)][[SPARK-20962](https://issues.apache.org/jira/browse/SPARK-20962)][[SPARK-20963](https://issues.apache.org/jira/browse/SPARK-20963)][[SPARK-20841](https://issues.apache.org/jira/browse/SPARK-20841)][[SPARK-17642](https://issues.apache.org/jira/browse/SPARK-17642)][[SPARK-22475](https://issues.apache.org/jira/browse/SPARK-22475)][[SPARK-22934](https://issues.apache.org/jira/browse/SPARK-22934)] Improved ANSI SQL compliance and Hive compatibility
    - [[SPARK-20746](https://issues.apache.org/jira/browse/SPARK-20746)] More comprehensive SQL built-in functions
    - [[SPARK-21485](https://issues.apache.org/jira/browse/SPARK-21485)] Spark SQL documentation generation for built-in functions
    - [[SPARK-19810](https://issues.apache.org/jira/browse/SPARK-19810)] Remove support for Scala `2.10`
    - [[SPARK-22324](https://issues.apache.org/jira/browse/SPARK-22324)] Upgrade Arrow to `0.8.0` and Netty to `4.1.17`

*Programming guides: <a href="{{site.baseurl}}/docs/2.3.0/rdd-programming-guide.html">Spark RDD Programming Guide</a> and <a href="{{site.baseurl}}/docs/2.3.0/sql-programming-guide.html">Spark SQL, DataFrames and Datasets Guide</a>.*


### Structured Streaming

 - **Continuous Processing**
   - A new execution engine that can execute streaming queries with sub-millisecond end-to-end latency by changing only a single line of user code. To learn more see the programming guide.
 - **Stream-Stream Joins**
   - Ability to join two streams of data, buffering rows until matching tuples arrive in the other stream. Predicates can be used against event time columns to bound the amount of state that needs to be retained.
 - **Streaming API V2**
   - An experimental API for plugging in new source and sinks that works for batch, micro-batch, and continuous execution. Note this API is still undergoing active development and breaking changes should be expected.

*Programming guide: <a href="{{site.baseurl}}/docs/2.3.0/structured-streaming-programming-guide.html">Structured Streaming Programming Guide</a>.*

### MLlib

 - **Highlights**
   - ML Prediction now works with Structured Streaming, using updated APIs. Details below.

 - **New/Improved APIs**
   - [[SPARK-21866](https://issues.apache.org/jira/browse/SPARK-21866)]: Built-in support for reading images into a DataFrame (Scala/Java/Python)
   - [[SPARK-19634](https://issues.apache.org/jira/browse/SPARK-19634)]: DataFrame functions for descriptive summary statistics over vector columns (Scala/Java)
   - [[SPARK-14516](https://issues.apache.org/jira/browse/SPARK-14516)]: `ClusteringEvaluator` for tuning clustering algorithms, supporting Cosine silhouette and squared Euclidean silhouette metrics (Scala/Java/Python)
   - [[SPARK-3181](https://issues.apache.org/jira/browse/SPARK-3181)]: Robust linear regression with Huber loss (Scala/Java/Python)
   - [[SPARK-13969](https://issues.apache.org/jira/browse/SPARK-13969)]: `FeatureHasher` transformer (Scala/Java/Python)
   - Multiple column support for several feature transformers:
     + [[SPARK-13030](https://issues.apache.org/jira/browse/SPARK-13030)]: `OneHotEncoderEstimator` (Scala/Java/Python)
     + [[SPARK-22397](https://issues.apache.org/jira/browse/SPARK-22397)]: `QuantileDiscretizer` (Scala/Java)
     + [[SPARK-20542](https://issues.apache.org/jira/browse/SPARK-20542)]: `Bucketizer` (Scala/Java/Python)
   - [[SPARK-21633](https://issues.apache.org/jira/browse/SPARK-21633)] and [SPARK-21542](https://issues.apache.org/jira/browse/SPARK-21542)]: Improved support for custom pipeline components in Python.

 - **New Features**
   - [[SPARK-21087](https://issues.apache.org/jira/browse/SPARK-21087)]: `CrossValidator` and `TrainValidationSplit` can collect all models when fitting (Scala/Java).  This allows you to inspect or save all fitted models.
   - [[SPARK-19357](https://issues.apache.org/jira/browse/SPARK-19357)]: Meta-algorithms `CrossValidator`, `TrainValidationSplit, `OneVsRest` support a parallelism Param for fitting multiple sub-models in parallel Spark jobs
   - [[SPARK-17139](https://issues.apache.org/jira/browse/SPARK-17139)]: Model summary for multinomial logistic regression (Scala/Java/Python)
   - [[SPARK-18710](https://issues.apache.org/jira/browse/SPARK-18710)]: Add offset in GLM
   - [[SPARK-20199](https://issues.apache.org/jira/browse/SPARK-20199)]: Added `featureSubsetStrategy` Param to `GBTClassifier` and `GBTRegressor`.  Using this to subsample features can significantly improve training speed; this option has been a key strength of `xgboost`.

 - **Other Notable Changes**
   - [[SPARK-22156](https://issues.apache.org/jira/browse/SPARK-22156)] Fixed `Word2Vec` learning rate scaling with `num` iterations.  The new learning rate is set to match the original `Word2Vec` C code and should give better results from training.
   - [[SPARK-22289](https://issues.apache.org/jira/browse/SPARK-22289)] Add `JSON` support for Matrix parameters (This fixed a bug for ML persistence with `LogisticRegressionModel` when using bounds on coefficients.)
   - [[SPARK-22700](https://issues.apache.org/jira/browse/SPARK-22700)] `Bucketizer.transform` incorrectly drops row containing `NaN`.  When Param `handleInvalid` was set to “skip,” `Bucketizer` would drop a row with a valid value in the input column if another (irrelevant) column had a `NaN` value.
   - [[SPARK-22446](https://issues.apache.org/jira/browse/SPARK-22446)] Catalyst optimizer sometimes caused `StringIndexerModel` to throw an incorrect “Unseen label” exception when `handleInvalid` was set to “error.”  This could happen for filtered data, due to predicate push-down, causing errors even after invalid rows had already been filtered from the input dataset.
   - [[SPARK-21681](https://issues.apache.org/jira/browse/SPARK-21681)] Fixed an edge case bug in multinomial logistic regression that resulted in incorrect coefficients when some features had zero variance.
   - Major optimizations:
     + [[SPARK-22707](https://issues.apache.org/jira/browse/SPARK-22707)] Reduced memory consumption for `CrossValidator`
     + [[SPARK-22949](https://issues.apache.org/jira/browse/SPARK-22949)] Reduced memory consumption for `TrainValidationSplit`
     + [[SPARK-21690](https://issues.apache.org/jira/browse/SPARK-21690)] `Imputer` should train using a single pass over the data
     + [[SPARK-14371](https://issues.apache.org/jira/browse/SPARK-14371)] `OnlineLDAOptimizer` avoids collecting statistics to the driver for each mini-batch.

*Programming guide: <a href="{{site.baseurl}}/docs/2.3.0/ml-guide.html">Machine Learning Library (MLlib) Guide</a>.*

### SparkR

The main focus of SparkR in the 2.3.0 release was towards improving the stability of UDFs and adding several new SparkR wrappers around existing APIs:

 - **Major features**
   -  Improved function parity between SQL and R
   - [[SPARK-22933](https://issues.apache.org/jira/browse/SPARK-22933)]: Structured Streaming APIs for `withWatermark`, `trigger`, `partitionBy` and stream-stream joins
   - [[SPARK-21266](https://issues.apache.org/jira/browse/SPARK-21266)]: SparkR UDF with DDL-formatted schema support
   - [[SPARK-20726](https://issues.apache.org/jira/browse/SPARK-20726)][[SPARK-22924](https://issues.apache.org/jira/browse/SPARK-22924)][[SPARK-22843](https://issues.apache.org/jira/browse/SPARK-22843)] Several new Dataframe API Wrappers
   - [[SPARK-15767](https://issues.apache.org/jira/browse/SPARK-15767)][[SPARK-21622](https://issues.apache.org/jira/browse/SPARK-21622)][[SPARK-20917](https://issues.apache.org/jira/browse/SPARK-20917)][[SPARK-20307](https://issues.apache.org/jira/browse/SPARK-20307)][[SPARK-20906](https://issues.apache.org/jira/browse/SPARK-20906)] Several new SparkML API Wrappers

*Programming guide: <a href="{{site.baseurl}}/docs/2.3.0/sparkr.html">SparkR (R on Spark)</a>.*

### GraphX

 - **Optimizations**
   - [[SPARK-5484](https://issues.apache.org/jira/browse/SPARK-5484)] Pregel now checkpoints periodically to avoid `StackOverflowErrors`
   - [[SPARK-21491](https://issues.apache.org/jira/browse/SPARK-21491)] Small performance improvement in several places

*Programming guide: <a href="{{site.baseurl}}/docs/2.3.0/graphx-programming-guide.html">GraphX Programming Guide</a>.*

### Deprecations

 - **Python**
   - [[SPARK-23122](https://issues.apache.org/jira/browse/SPARK-23122)] Deprecate `register*` for UDFs in `SQLContext` and `Catalog` in PySpark
 - **MLlib**
   - [[SPARK-13030](https://issues.apache.org/jira/browse/SPARK-13030)] `OneHotEncoder` has been deprecated and will be removed in 3.0. It has been replaced by the new `OneHotEncoderEstimator`. Note that `OneHotEncoderEstimator` will be renamed to `OneHotEncoder` in 3.0 (but `OneHotEncoderEstimator` will be kept as an alias).

### Changes of behavior

 - **SparkSQL**
   - [[SPARK-22036](https://issues.apache.org/jira/browse/SPARK-22036)]: By default arithmetic operations between decimals return a rounded value if an exact representation is not possible (instead of returning `NULL` in the prior versions)
   - [[SPARK-22937](https://issues.apache.org/jira/browse/SPARK-22937)]: When all inputs are binary, SQL `elt()` returns an output as binary. Otherwise, it returns as a string. In the prior versions, it always returns as a string despite of input types.
   - [[SPARK-22895](https://issues.apache.org/jira/browse/SPARK-22895)]: The Join/Filter's deterministic predicates that are after the first non-deterministic predicates are also pushed down/through the child operators, if possible. In the prior versions, these filters were not eligible for predicate pushdown.
   - [[SPARK-22771](https://issues.apache.org/jira/browse/SPARK-22771)]: When all inputs are binary, `functions.concat()` returns an output as binary. Otherwise, it returns as a string. In the prior versions, it always returns as a string despite of input types.
   - [[SPARK-22489](https://issues.apache.org/jira/browse/SPARK-22489)]: When either of the join sides is broadcastable, we prefer to broadcasting the table that is explicitly specified in a broadcast hint.
   - [[SPARK-22165](https://issues.apache.org/jira/browse/SPARK-22165)]: Partition column inference previously found incorrect common type for different inferred types, for example, previously it ended up with `double` type as the common type for `double` type and `date` type. Now it finds the correct common type for such conflicts. For details, see the <a href="{{site.baseurl}}/docs/2.3.0/sql-programming-guide.html#migration-guide">migration guide</a>.
   - [[SPARK-22100](https://issues.apache.org/jira/browse/SPARK-22100)]: The `percentile_approx` function previously accepted `numeric` type input and outputted `double` type results. Now it supports `date` type, `timestamp` type and `numeric` types as input types. The result type is also changed to be the same as the input type, which is more reasonable for percentiles.
   - [[SPARK-21610](https://issues.apache.org/jira/browse/SPARK-21610)]: the queries from raw JSON/CSV files are disallowed when the referenced columns only include the internal corrupt record column (named `_corrupt_record` by default). Instead, you can cache or save the parsed results and then send the same query. 
   - [[SPARK-23421](https://issues.apache.org/jira/browse/SPARK-23421)]: Since Spark 2.2.1 and 2.3.0, the schema is always inferred at runtime when the data source tables have the columns that exist in both partition schema and data schema. The inferred schema does not have the partitioned columns. When reading the table, Spark respects the partition values of these overlapping columns instead of the values stored in the data source files. In 2.2.0 and 2.1.x release, the inferred schema is partitioned but the data of the table is invisible to users (i.e., the result set is empty).

 - **PySpark**
   - [[SPARK-19732](https://issues.apache.org/jira/browse/SPARK-19732)]: `na.fill()` or `fillna` also accepts boolean and replaces nulls with booleans. In prior Spark versions, PySpark just ignores it and returns the original Dataset/DataFrame.  
   - [[SPARK-22395](https://issues.apache.org/jira/browse/SPARK-22395)]: Pandas `0.19.2` or upper is required for using Pandas related functionalities, such as `toPandas`, `createDataFrame` from Pandas DataFrame, etc.
   - [[SPARK-22395](https://issues.apache.org/jira/browse/SPARK-22395)]: The behavior of timestamp values for Pandas related functionalities was changed to respect session timezone, which is ignored in the prior versions.
   - [[SPARK-23328](https://issues.apache.org/jira/browse/SPARK-23328)]: `df.replace` does not allow to omit `value` when `to_replace` is not a dictionary. Previously, `value` could be omitted in the other cases and had `None` by default, which is counter-intuitive and error prone.

 - **MLlib**
   - **Breaking API Changes**: The class and trait hierarchy for logistic regression model summaries was changed to be cleaner and better accommodate the addition of the multi-class summary. This is a breaking change for user code that casts a `LogisticRegressionTrainingSummary` to a `BinaryLogisticRegressionTrainingSummary`. Users should instead use the `model.binarySummary` method. See [[SPARK-17139](https://issues.apache.org/jira/browse/SPARK-17139)] for more detail (note this is an `@Experimental` API). This does not affect the Python summary method, which will still work correctly for both multinomial and binary cases.
   - [[SPARK-21806](https://issues.apache.org/jira/browse/SPARK-21806)]: `BinaryClassificationMetrics.pr()`: first point (0.0, 1.0) is misleading and has been replaced by (0.0, p) where precision p matches the lowest recall point.
   - [[SPARK-16957](https://issues.apache.org/jira/browse/SPARK-16957)]: Decision trees now use weighted midpoints when choosing split values.  This may change results from model training.
   - [[SPARK-14657](https://issues.apache.org/jira/browse/SPARK-14657)]: `RFormula` without an intercept now outputs the reference category when encoding string terms, in order to match native R behavior.  This may change results from model training.
   - [[SPARK-21027](https://issues.apache.org/jira/browse/SPARK-21027)]: The default parallelism used in `OneVsRest` is now set to 1 (i.e. serial). In 2.2 and earlier versions, the level of parallelism was set to the default threadpool size in Scala.  This may change performance.
   - [[SPARK-21523](https://issues.apache.org/jira/browse/SPARK-21523)]: Upgraded Breeze to `0.13.2`.  This included an important bug fix in strong Wolfe line search for L-BFGS.
   - [[SPARK-15526](https://issues.apache.org/jira/browse/SPARK-15526)]: The JPMML dependency is now shaded.
   - Also see the “Bug fixes” section for behavior changes resulting from fixing bugs.


### Known Issues

   - [[SPARK-23523](https://issues.apache.org/jira/browse/SPARK-23523)][SQL] Incorrect result caused by the rule `OptimizeMetadataOnlyQuery`
   - [[SPARK-23406](https://issues.apache.org/jira/browse/SPARK-23406)] Bugs in stream-stream self-joins

### Credits
Last but not least, this release would not have been possible without the following contributors:
ALeksander Eskilson, Adrian Ionescu, Ajay Saini, Ala Luszczak, Albert Jang, Alberto Rodriguez De Lema, Alex Mikhailau, Alexander Istomin, Anderson Osagie, Andrea Zito, Andrew Ash, Andrew Korzhuev, Andrew Ray, Anirudh Ramanathan, Anton Okolnychyi, Arman Yazdani, Armin Braun, Arseniy Tashoyan, Arthur Rand, Atallah Hezbor, Attila Zsolt Piros, Ayush Singh, Bago Amirbekian, Ben Barnard, Bo Meng, Bo Xu, Bogdan Raducanu, Brad Kaiser, Bravo Zhang, Bruce Robbins, Bruce Xu, Bryan Cutler, Burak Yavuz, Carson Wang, Chang Chen, Charles Chen, Cheng Wang, Chenjun Zou, Chenzhao Guo, Chetan Khatri, Chie Hayashida, Chin Han Yu, Chunsheng Ji, Corey Woodfield, Daniel Li, Daniel Van Der Ende, Devaraj K, Dhruve Ashar, Dilip Biswal, Dmitry Parfenchik, Donghui Xu, Dongjoon Hyun, Eren Avsarogullari, Eric Vandenberg, Erik LaBianca, Eyal Farago, Favio Vazquez, Felix Cheung, Feng Liu, Feng Zhu, Fernando Pereira, Fokko Driesprong, Gabor Somogyi, Gene Pang, Gera Shegalov, German Schiavon, Glen Takahashi, Greg Owen, Grzegorz Slowikowski, Guilherme Berger, Guillaume Dardelet, Guo Xiao Long, He Qiao, Henry Robinson, Herman Van Hovell, Hideaki Tanaka, Holden Karau, Huang Tengfei, Huaxin Gao, Hyukjin Kwon, Ilya Matiach, Imran Rashid, Iurii Antykhovych, Ivan Sadikov, Jacek Laskowski, JackYangzg, Jakub Dubovsky, Jakub Nowacki, James Thompson, Jan Vrsovsky, Jane Wang, Jannik Arndt, Jason Taaffe, Jeff Zhang, Jen-Ming Chung, Jia Li, Jia-Xuan Liu, Jin Xing, Jinhua Fu, Jirka Kremser, Joachim Hereth, John Compitello, John Lee, John O'Leary, Jorge Machado, Jose Torres, Joseph K. Bradley, Josh Rosen, Juliusz Sompolski, Kalvin Chau, Kazuaki Ishizaki, Kent Yao, Kento NOZAWA, Kevin Yu, Kirby Linvill, Kohki Nishio, Kousuke Saruta, Kris Mok, Krishna Pandey, Kyle Kelley, Li Jin, Li Yichao, Li Yuanjian, Liang-Chi Hsieh, Lijia Liu, Liu Shaohui, Liu Xian, Liyun Zhang, Louis Lyu, Lubo Zhang, Luca Canali, Maciej Brynski, Maciej Szymkiewicz, Madhukara Phatak, Mahmut CAVDAR, Marcelo Vanzin, Marco Gaido, Marcos P, Marcos P. Sanchez, Mark Petruska, Maryann Xue, Masha Basmanova, Miao Wang, Michael Allman, Michael Armbrust, Michael Gummelt, Michael Mior, Michael Patterson, Michael Styles, Michal Senkyr, Mikhail Sveshnikov, Min Shen, Ming Jiang, Mingjie Tang, Mridul Muralidharan, Nan Zhu, Nathan Kronenfeld, Neil Alexander McQuarrie, Ngone51, Nicholas Chammas, Nick Pentreath, Ohad Raviv, Oleg Danilov, Onur Satici, PJ Fanning, Parth Gandhi, Patrick Woody, Paul Mackles, Peng Meng, Peng Xiao, Pengcheng Liu, Peter Szalai, Pralabh Kumar, Prashant Sharma, Rekha Joshi, Remis Haroon, Reynold Xin, Reza Safi, Riccardo Corbella, Rishabh Bhardwaj, Robert Kruszewski, Ron Hu, Ruben Berenguel Montoro, Ruben Janssen, Rui Zha, Rui Zhan, Ruifeng Zheng, Russell Spitzer, Ryan Blue, Sahil Takiar, Saisai Shao, Sameer Agarwal, Sandor Murakozi, Sanket Chintapalli, Santiago Saavedra, Sathiya Kumar, Sean Owen, Sergei Lebedev, Sergey Serebryakov, Sergey Zhemzhitsky, Seth Hendrickson, Shane Jarvie, Shashwat Anand, Shintaro Murakami, Shivaram Venkataraman, Shixiong Zhu, Shuangshuang Wang, Sid Murching, Sital Kedia, Soonmok Kwon, Srinivasa Reddy Vundela, Stavros Kontopoulos, Steve Loughran, Steven Rand, Sujith, Sujith Jay Nair, Sumedh Wale, Sunitha Kambhampati, Suresh Thalamati, Susan X. Huynh, Takeshi Yamamuro, Takuya UESHIN, Tathagata Das, Tejas Patil, Teng Peng, Thomas Graves, Tim Van Wassenhove, Travis Hegner, Tristan Stevens, Tucker Beck, Valeriy Avanesov, Vinitha Gankidi, Vinod KC, Wang Gengliang, Wayne Zhang, Weichen Xu, Wenchen Fan, Wieland Hoffmann, Wil Selwood, Wing Yew Poon, Xiang Gao, Xianjin YE, Xianyang Liu, Xiao Li, Xiaochen Ouyang, Xiaofeng Lin, Xiaokai Zhao, Xiayun Sun, Xin Lu, Xin Ren, Xingbo Jiang, Yan Facai (Yan Fa Cai), Yan Kit Li, Yanbo Liang, Yash Sharma, Yinan Li, Yong Tang, Youngbin Kim, Yuanjian Li, Yucai Yu, Yuhai Cen, Yuhao Yang, Yuming Wang, Yuval Itzchakov, Zhan Zhang, Zhang A Peng, Zhaokun Liu, Zheng RuiFeng, Zhenhua Wang, Zuo Tingbing, brandonJY, caneGuy, cxzl25, djvulee, eatoncys, heary-cao, ho3rexqj, lizhaoch, maclockard, neoremind, peay, shaofei007, wangjiaochun, zenglinxi0615