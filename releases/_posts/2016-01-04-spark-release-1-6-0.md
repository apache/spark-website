---
layout: post
title: Spark Release 1.6.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Apache Spark 1.6.0 is the seventh release on the 1.x line. This release includes contributions from 248+ contributors! To download Spark 1.6.0 visit the [downloads](http://spark.apache.org/downloads.html) page.

You can consult JIRA for the [detailed changes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12333083&projectId=12315420). We have curated a list of high level changes here:

* This will become a table of contents (this text will be scraped).
{:toc}


### Spark Core/SQL

- **API Updates**
  - [SPARK-9999&nbsp;](https://issues.apache.org/jira/browse/SPARK-9999) **Dataset API** - A new Spark API, similar to RDDs, that allows users to work with custom objects and lambda functions while still gaining the benefits of the Spark SQL execution engine.
  - [SPARK-10810](https://issues.apache.org/jira/browse/SPARK-10810) **Session Management** - Different users can share a cluster while having different configuration and temporary tables.
  - [SPARK-11197](https://issues.apache.org/jira/browse/SPARK-11197) **SQL Queries on Files**  - Concise syntax for running SQL queries over files of any supported format without registering a table.
  - [SPARK-11745](https://issues.apache.org/jira/browse/SPARK-11745) **Reading non-standard JSON files**  - Added options to read non-standard JSON files (e.g. single-quotes, unquoted attributes)
  - [SPARK-10412](https://issues.apache.org/jira/browse/SPARK-10412) **Per-operator Metrics for SQL Execution** - Display statistics on a per-operator basis for memory usage and spilled data size.
  - [SPARK-11329](https://issues.apache.org/jira/browse/SPARK-11329) **Star (*) expansion for StructTypes** - Makes it easier to nest and unnest arbitrary numbers of columns
  - [SPARK-4849&nbsp;](https://issues.apache.org/jira/browse/SPARK-4849) **Advanced Layout of Cached Data** - storing partitioning and ordering schemes in In-memory table scan, and adding distributeBy and localSort to DF API
  - [SPARK-11778&nbsp;](https://issues.apache.org/jira/browse/SPARK-11778) - DataFrameReader.table supports specifying database name. For example, sqlContext.read.table("dbName.tableName") can be used to create a DataFrame from a table called "tableName" in the database "dbName".
  - [SPARK-10947&nbsp;](https://issues.apache.org/jira/browse/SPARK-10947) - With schema inference from JSON into a Dataframe, users can set primitivesAsString to true (in data source options) to infer all primitive value types as Strings. The default value of primitivesAsString is false.

- **Performance**
  - [SPARK-10000](https://issues.apache.org/jira/browse/SPARK-10000) **Unified Memory Management**  - Shared memory for execution and caching instead of exclusive division of the regions.
  - [SPARK-11787](https://issues.apache.org/jira/browse/SPARK-11787) **Parquet Performance** - Improve Parquet scan performance when using flat schemas.
  - [SPARK-9241&nbsp;](https://issues.apache.org/jira/browse/SPARK-9241) **Improved query planner for queries having distinct aggregations** - Query plans of distinct aggregations are more robust when distinct columns have high cardinality. 
  - [SPARK-9858&nbsp;](https://issues.apache.org/jira/browse/SPARK-9858) **Adaptive query execution** - Initial support for automatically selecting the number of reducers for joins and aggregations.
  - [SPARK-10978](https://issues.apache.org/jira/browse/SPARK-10978) **Avoiding double filters in Data Source API** - When implementing a data source with filter pushdown, developers can now tell Spark SQL to avoid double evaluating a pushed-down filter.
  - [SPARK-11111](https://issues.apache.org/jira/browse/SPARK-11111) **Fast null-safe joins** - Joins using null-safe equality (`<=>`) will now execute using SortMergeJoin instead of computing a cartisian product.
  - [SPARK-10917](https://issues.apache.org/jira/browse/SPARK-10917), [SPARK-11149](https://issues.apache.org/jira/browse/SPARK-11149) **In-memory Columnar Cache Performance** - Significant (up to 14x) speed up when caching data that contains complex types in DataFrames or SQL.
  - [SPARK-11389](https://issues.apache.org/jira/browse/SPARK-11389) **SQL Execution Using Off-Heap Memory** - Support for configuring query execution to occur using off-heap memory to avoid GC overhead


### Spark Streaming

- **API Updates** 
    - [SPARK-2629&nbsp;](https://issues.apache.org/jira/browse/SPARK-2629) **New improved state management** - `mapWithState` - a DStream transformation for stateful stream processing, supercedes `updateStateByKey` in functionality and performance.
    - [SPARK-11198](https://issues.apache.org/jira/browse/SPARK-11198) **Kinesis record deaggregation** - Kinesis streams have been upgraded to use KCL 1.4.0 and supports transparent deaggregation of KPL-aggregated records.
    - [SPARK-10891](https://issues.apache.org/jira/browse/SPARK-10891) **Kinesis message handler function** - Allows arbitrary function to be applied to a Kinesis record in the Kinesis receiver before to customize what data is to be stored in memory.
    - [SPARK-6328&nbsp;](https://issues.apache.org/jira/browse/SPARK-6328) **Python Streaming Listener API** - Get streaming statistics (scheduling delays, batch processing times, etc.) in streaming.


- **UI Improvements**
    - Made failures visible in the streaming tab, in the timelines, batch list, and batch details page.
    - Made output operations visible in the streaming tab as progress bars. 

### MLlib
 - **New algorithms/models**
   - [SPARK-8518&nbsp;](https://issues.apache.org/jira/browse/SPARK-8518)  **Survival analysis** - Log-linear model for survival analysis
   - [SPARK-9834&nbsp;](https://issues.apache.org/jira/browse/SPARK-9834)  **Normal equation for least squares** - Normal equation solver, providing R-like model summary statistics
   - [SPARK-3147&nbsp;](https://issues.apache.org/jira/browse/SPARK-3147)  **Online hypothesis testing** - A/B testing in the Spark Streaming framework
   - [SPARK-9930&nbsp;](https://issues.apache.org/jira/browse/SPARK-9930)  **New feature transformers** - ChiSqSelector, QuantileDiscretizer, SQL transformer
   - [SPARK-6517&nbsp;](https://issues.apache.org/jira/browse/SPARK-6517)  **Bisecting K-Means clustering** - Fast top-down clustering variant of K-Means

 - **API improvements**
   - **ML Pipelines**
     - [SPARK-6725&nbsp;](https://issues.apache.org/jira/browse/SPARK-6725)  **Pipeline persistence** - Save/load for ML Pipelines, with partial coverage of spark.ml algorithms
     - [SPARK-5565&nbsp;](https://issues.apache.org/jira/browse/SPARK-5565)  **LDA in ML Pipelines** - API for Latent Dirichlet Allocation in ML Pipelines
   - **R API**
     - [SPARK-9836&nbsp;](https://issues.apache.org/jira/browse/SPARK-9836)  **R-like statistics for GLMs** - (Partial) R-like stats for ordinary least squares via summary(model)
     - [SPARK-9681&nbsp;](https://issues.apache.org/jira/browse/SPARK-9681)  **Feature interactions in R formula** - Interaction operator ":" in R formula
   - **Python API** - Many improvements to Python API to approach feature parity

- **Misc improvements**
   - [SPARK-7685&nbsp;](https://issues.apache.org/jira/browse/SPARK-7685), [SPARK-9642&nbsp;](https://issues.apache.org/jira/browse/SPARK-9642)  **Instance weights for GLMs** - Logistic and Linear Regression can take instance weights
   - [SPARK-10384](https://issues.apache.org/jira/browse/SPARK-10384), [SPARK-10385](https://issues.apache.org/jira/browse/SPARK-10385)  **Univariate and bivariate statistics in DataFrames** - Variance, stddev, correlations, etc.
   - [SPARK-10117](https://issues.apache.org/jira/browse/SPARK-10117)  **LIBSVM data source** - LIBSVM as a SQL data source
- **Documentation improvements**
   - [SPARK-7751&nbsp;](https://issues.apache.org/jira/browse/SPARK-7751)  **@since versions** - Documentation includes initial version when classes and methods were added
   - [SPARK-11337](https://issues.apache.org/jira/browse/SPARK-11337)  **Testable example code** - Automated testing for code in user guide examples


## Deprecations
* In spark.mllib.clustering.KMeans, the "runs" parameter has been deprecated.
* In spark.ml.classification.LogisticRegressionModel and spark.ml.regression.LinearRegressionModel, the "weights" field has been deprecated, in favor of the new name "coefficients."  This helps disambiguate from instance (row) weights given to algorithms.

## Changes of behavior

- **MLlib**
    - `spark.mllib.tree.GradientBoostedTrees` `validationTol` has changed semantics in 1.6. Previously, it was a threshold for absolute change in error. Now, it resembles the behavior of `GradientDescent` `convergenceTol`: For large errors, it uses relative error (relative to the previous error); for small errors (< 0.01), it uses absolute error.
    - `spark.ml.feature.RegexTokenizer`: Previously, it did not convert strings to lowercase before tokenizing. Now, it converts to lowercase by default, with an option not to. This matches the behavior of the simpler Tokenizer transformer.

- **SQL**
    - The flag (spark.sql.tungsten.enabled) that turns off Tungsten mode and code generation has been removed. Tungsten mode and code generation are always enabled ([SPARK-11644](https://issues.apache.org/jira/browse/SPARK-11644)).
    - Spark SQL's partition discovery has been changed to only discover partition directories that are children of the given path. (i.e. if `path="/my/data/x=1"` then `x=1` will no longer be considered a partition but only children of `x=1`.) This behavior can be overridden by manually specifying the `basePath` that partitioning discovery should start with ([SPARK-11678](https://issues.apache.org/jira/browse/SPARK-11678)).
    - For a UDF, if it has primitive type input argument (a non-nullable input argument), when the value of this argument is null, this UDF will return null ([SPARK-11725](https://issues.apache.org/jira/browse/SPARK-11725)).
    - When casting a value of an integral type to timestamp (e.g. casting a long value to timestamp), the value is treated as being in seconds instead of milliseconds ([SPARK-11724](https://issues.apache.org/jira/browse/SPARK-11724)).
    - With the improved query planner for queries having distinct aggregations ([SPARK-9241](https://issues.apache.org/jira/browse/SPARK-9241)), the plan of a query having a single distinct aggregation has been changed to a more robust version. To switch back to the plan generated by Spark 1.5's planner, please set `spark.sql.specializeSingleDistinctAggPlanning` to `true` ([SPARK-12077](https://issues.apache.org/jira/browse/SPARK-12077)).
    - getBoolean, getByte, getShort, getInt, getLong, getFloat and getDouble of a Row will throw a NullPointerException if the value at the given ordinal is a null ([SPARK-11553](https://issues.apache.org/jira/browse/SPARK-11553)).
    - variance is the alias of var_samp instead of var_pop ([SPARK-11490](https://issues.apache.org/jira/browse/SPARK-11490)).
    - The semantic of casting a String type value to a Boolean type value has been changed ([SPARK-10442](https://issues.apache.org/jira/browse/SPARK-10442)). Casting any one of "t", "true", "y", "yes", and "1" will return true. Casting any of "f", "false", "n", "no", and "0" will return false. For other String literals, casting them to a Boolean type value will return null.
    - Aggregate function first and last will not ignore null values by default ([SPARK-9740](https://issues.apache.org/jira/browse/SPARK-9740)). To make them ignore null values, users can set the second argument of first and last to true. For example, first(col, true) will return the first non-null value of the column col.

## Known issues
* [SPARK-12546](https://issues.apache.org/jira/browse/SPARK-12546) Save DataFrame/table as Parquet with dynamic partitions may cause OOM; this can be worked around by decreasing the memory used by both Spark and Parquet using `spark.memory.fraction` (for example, 0.4) and `parquet.memory.pool.ratio` (for example, 0.3, in Hadoop configuration, e.g. setting it in `core-site.xml`).

## Credits
Last but not least, this release would not have been possible without the following contributors: Adam Lewandowski, Adam Roberts, Adrian Zhuang, Ahir Reddy, Akash Mishra, Alex Angelini, Alex Bozarth, Alexander Slesarenko, Alexander Ulanov, Alexey Grishchenko, Alok Singh, Anderson De Andrade, Andrew Or, Andrew Ray, Ankur Dave, Artem Aliev, Ashwin Shankar, Ashwin Swaroop, Asoka Diggs, Avrohom Katz, Bartlomiej Alberski, Ben Fradet, Bertrand Dechoux, Bharat Lal, Bhargav Mangipudi, Bill Chambers, Bin Wang, Bo Meng, Brennon York, Bryan Cutler, Burak Yavuz, Calvin Jia, Carson Wang, Carsten Blank, Charles Yeh, Cheng Hao, Cheng Lian, Chris Bannister, Chris Kang, Chris Snow, Christian Kadner, Christian Kurz, Chuan Shao, Cody Koeninger, DB Tsai, Daniel Imfeld, Daniel Jalova, Daoyuan Wang, David Tolpin, Davies Liu, Deming Zhu, Dennis Huo, Derek Dagit, Dilip Biswal, Dmitry Vasilets, Dominik Dahlem, Edoardo Vacchi, Ehsan M.Kermani, Eric Liang, Erick Tryzelaar, Erik Shilts, Eugen Cepoi, Evan Chen, Ewan Leith, Fazlan Nazeem, Fei Wang, Felix Bechstein, Felix Cheung, Feynman Liang, Forest Fang, Frank Rosner, Gabor Liptak, Gaurav Kumar, Glenn Weidner, Greg Lee, Hari Shreedharan, Herman Van Hovell, Holden Karau, Hossein Falaki, Huang Zhaowei, Huaxin Gao, Hurshal Patel, Hyukjin Kwon, Ilya Ganelin, Imran Rashid, Iulian Dragos, Jacek Laskowski, Jacek Lewandowski, Jacker Hu, Jackie MaKing, Jaehong Choi, Jakob Odersky, Jason White, Jayant Shekar, Jean Lyn, Jean-Baptiste Onofre, Jeff Zhang, Jeffrey Naisbitt, Jeroen Schot, JiGao FuJia Li, Jian Feng Zhang, Jie Hu, Jie Huang, Jihong MA, Joseph K. Bradley, Josh Rosen, Josiah Samuel, Jungtaek Lim, Kai Jiang, Kai Jiang, Kai Sasaki, Kai Xin Xiao Lei, Kay Ousterhout, Kent Yao, Kevin Cox, Kevin Yu, Koert Kuipers, Kousuke Saruta, Lex Yu, Liang-Chi Hsieh, Lianhui Wang, Luc Bourlier, Luciano Resende, Lukasz Piepiora, Luvsandondov Lkhamsuren, Maciej Szymkiewicz, Madhusudanan Kandasamy, Mahmoud Lababidi, Manoj Kumar, Marcelo Vanzin, Marius Van Niekerk, Mark Grover, Mark Hamstra, Matei Zaharia, Matt Hagen, Matt Massie, Matthew Cheah, Meihua Wu, Michael Armbrust, Michael Gummelt, Mike Dusenberry, Mikhail Bautin, Mingyu Kim, Monica Liu, Mortada Mehyar, Nakul Jindal, Nan ZhuNarine Kokhlikyan, Nathan Howell, Naveen Kumar Minchu, Navis Ryu, Neelesh Srinivas Salian, Nicholas Chammas, Nick Buroojy, Nick Evans, Nick Pritchard, Nishkam Ravi, Nithin Asokan, Nitin Goyal, Noel Smith, Nong Li, Oscar D. Lara Yejas, Pat Shields, Patrick Wendell, Pete Robbins, Philipp Hoffmann, Prashant Sharma, Pravin Gadakh, R. H., Ram Sriharsha, Rekha Joshi, Rerngvit Yanggratoke, Reynold Xin, Reza Zadeh, Rick Hillegas, Rishabh Bhardwaj, Robin East, Rohit Agarwal, Roy Gao, Ryan Williams, Sachin Aggarwal, Saisai Shao, Sean Owen, Sean Paradiso, Sem Mulder, Sephiroth Lin, Seth Hendrickson, Shagun Sodhani, Shimizu Yoshihiro, Shivaram Venkataraman, Shixiong Zhu, Somil Deshmukh, Srinivasa Reddy Vundela, Stephen De Gennaro, Stephen Hellberg, Stephen Hopper, Stephen Samuel, Steve Loughran, Su Yan, Sun Rui, Suresh Thalamati, Takahashi Hiroshi, Takeshi Yamamuro, Tarek Auel, Tathagata Das, Ted Yu, Teng Qiu, Thomas Graves, Tijo Thomas, Timothy Chen, Timothy Hunter, Tingjun Xu, Todd Wan, Tom Graves, Travis Hegner, Trystan Leftwich, Uncle Gen, Vikas Nelamangala, Vinod KC, Vladimir Vladimirov, Vyacheslav Baranov, Wang Tao, Weiqiang Zhuang, Wenchen Fan, Wenjian Huang, Wieland Hoffmann, Wojciech Indyk, Xiangrui Meng, Xiao LiXin Ren, Xin Wu, Xiu Guo, Xusen Yin, Yadong Qi, Yanbo Liang, Yangping Wu, Yash Datta, Yijie Shen, Yin Huai, Yongjia Wang, Yu Gao, Yu ISHIKAWA, Yuhao Yang, Yuming Wang, Yves Raimond, Zee Chen, Zhenhua Wang, Zhichao Li, Zhongshuai Pei, Zhuo Liu
