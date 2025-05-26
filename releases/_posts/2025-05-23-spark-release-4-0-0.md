---
layout: post
title: Spark Release 4.0.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Apache Spark 4.0.0 marks a significant milestone as the inaugural release in the 4.x series, embodying the collective effort of the vibrant open-source community. This release is a testament to tremendous collaboration, resolving over 5100 tickets with contributions from more than 390 individuals.

Spark Connect continues its rapid advancement, delivering substantial improvements:
- A new lightweight Python client ([pyspark-client](https://pypi.org/project/pyspark-client)) at just 1.5 MB.
- An additional release tarball with Spark Connect enabled by default.
- Full API compatibility for the Java client.
- A new spark.api.mode configuration to easily turn on/off Spark Connect for your applications.
- Greatly expanded API coverage.
- ML on Spark Connect.
- A new client implementation for [Swift](https://github.com/apache/spark-connect-swift).

Spark SQL is significantly enriched with powerful new features designed to boost expressiveness and versatility for SQL workloads, such as VARIANT data type support, SQL user-defined functions, session variables, pipe syntax, and string collation.

PySpark sees continuous dedication to both its functional breadth and the overall developer experience, bringing a native plotting API, a new Python Data Source API, support for Python UDTFs, and unified profiling for PySpark UDFs, alongside numerous other enhancements.

Structured Streaming evolves with key additions that provide greater control and ease of debugging, notably the introduction of the Arbitrary State API v2 for more flexible state management and the State Data Source for easier debugging.

To download Apache Spark 4.0.0, please visit the [downloads](https://spark.apache.org/downloads.html) page. For [detailed changes](https://issues.apache.org/jira/projects/SPARK/versions/12353359), you can consult JIRA. We have also curated a list of high-level changes here, grouped by major modules.


* This will become a table of contents (this text will be scraped).
{:toc}


### Core and Spark SQL Highlights

- [[SPARK-45314]](https://issues.apache.org/jira/browse/SPARK-45314) Drop Scala 2.12 and make Scala 2.13 the default
- [[SPARK-45315]](https://issues.apache.org/jira/browse/SPARK-45315) Drop JDK 8/11 and make JDK 17 the default
- [[SPARK-45923]](https://issues.apache.org/jira/browse/SPARK-45923) Spark Kubernetes Operator
- [[SPARK-45869]](https://issues.apache.org/jira/browse/SPARK-45869) Revisit and improve Spark Standalone Cluster
- [[SPARK-42849]](https://issues.apache.org/jira/browse/SPARK-42849) Session Variables
- [[SPARK-44444]](https://issues.apache.org/jira/browse/SPARK-44444) Use ANSI SQL mode by default
- [[SPARK-46057]](https://issues.apache.org/jira/browse/SPARK-46057) Support SQL user-defined functions
- [[SPARK-45827]](https://issues.apache.org/jira/browse/SPARK-45827) Add VARIANT data type
- [[SPARK-49555]](https://issues.apache.org/jira/browse/SPARK-49555) SQL Pipe syntax
- [[SPARK-46830]](https://issues.apache.org/jira/browse/SPARK-46830) String Collation support
- [[SPARK-44265]](https://issues.apache.org/jira/browse/SPARK-44265) Built-in XML data source support


### Spark Core

- [[SPARK-49524]](https://issues.apache.org/jira/browse/SPARK-49524) Improve K8s support
- [[SPARK-47240]](https://issues.apache.org/jira/browse/SPARK-47240) SPIP: Structured Logging Framework for Apache Spark
- [[SPARK-44893]](https://issues.apache.org/jira/browse/SPARK-44893) `ThreadInfo` improvements for monitoring APIs
- [[SPARK-46861]](https://issues.apache.org/jira/browse/SPARK-46861) Avoid Deadlock in DAGScheduler
- [[SPARK-47764]](https://issues.apache.org/jira/browse/SPARK-47764) Cleanup shuffle dependencies based on `ShuffleCleanupMode`
- [[SPARK-49459]](https://issues.apache.org/jira/browse/SPARK-49459) Support CRC32C for Shuffle Checksum
- [[SPARK-46383]](https://issues.apache.org/jira/browse/SPARK-46383) Reduce Driver Heap Usage by shortening `TaskInfo.accumulables()` lifespan
- [[SPARK-45527]](https://issues.apache.org/jira/browse/SPARK-45527) Use fraction-based resource calculation
- [[SPARK-47172]](https://issues.apache.org/jira/browse/SPARK-47172) Add AES-GCM as an optional AES cipher mode for RPC encryption
- [[SPARK-47448]](https://issues.apache.org/jira/browse/SPARK-47448) Enable `spark.shuffle.service.removeShuffle` by default
- [[SPARK-47674]](https://issues.apache.org/jira/browse/SPARK-47674) Enable `spark.metrics.appStatusSource.enabled` by default
- [[SPARK-48063]](https://issues.apache.org/jira/browse/SPARK-48063) Enable `spark.stage.ignoreDecommissionFetchFailure` by default
- [[SPARK-48268]](https://issues.apache.org/jira/browse/SPARK-48268) Add `spark.checkpoint.dir` config
- [[SPARK-48292]](https://issues.apache.org/jira/browse/SPARK-48292) Revert SPARK-39195 (OutputCommitCoordinator) to fix duplication issues
- [[SPARK-48518]](https://issues.apache.org/jira/browse/SPARK-48518) Make LZF compression run in parallel
- [[SPARK-46132]](https://issues.apache.org/jira/browse/SPARK-46132) Support key password for JKS keys for RPC SSL
- [[SPARK-46456]](https://issues.apache.org/jira/browse/SPARK-46456) Add `spark.ui.jettyStopTimeout` to set Jetty server stop timeout
- [[SPARK-46256]](https://issues.apache.org/jira/browse/SPARK-46256) Parallel Compression Support for ZSTD
- [[SPARK-45544]](https://issues.apache.org/jira/browse/SPARK-45544) Integrate SSL support into `TransportContext`
- [[SPARK-45351]](https://issues.apache.org/jira/browse/SPARK-45351) Change `spark.shuffle.service.db.backend` default value to `ROCKSDB`
- [[SPARK-44741]](https://issues.apache.org/jira/browse/SPARK-44741) Support regex-based `MetricFilter` in `StatsdSink`
- [[SPARK-43987]](https://issues.apache.org/jira/browse/SPARK-43987) Separate `finalizeShuffleMerge` Processing to Dedicated Thread Pools
- [[SPARK-45439]](https://issues.apache.org/jira/browse/SPARK-45439) Reduce memory usage of `LiveStageMetrics.accumIdsToMetricType`


### Spark SQL

#### Features

- [[SPARK-50541]](https://issues.apache.org/jira/browse/SPARK-50541) Describe Table As JSON
- [[SPARK-48031]](https://issues.apache.org/jira/browse/SPARK-48031) Support view schema evolution
- [[SPARK-50883]](https://issues.apache.org/jira/browse/SPARK-50883) Support altering multiple columns in the same command
- [[SPARK-47627]](https://issues.apache.org/jira/browse/SPARK-47627) Add `SQL MERGE` syntax to enable schema evolution
- [[SPARK-47430]](https://issues.apache.org/jira/browse/SPARK-47430) Support `GROUP BY` for `MapType`
- [[SPARK-49093]](https://issues.apache.org/jira/browse/SPARK-49093) `GROUP BY` with MapType nested inside complex type
- [[SPARK-49098]](https://issues.apache.org/jira/browse/SPARK-49098) Add write options for `INSERT`
- [[SPARK-49451]](https://issues.apache.org/jira/browse/SPARK-49451) Allow duplicate keys in `parse_json`
- [[SPARK-46536]](https://issues.apache.org/jira/browse/SPARK-46536) Support `GROUP BY calendar_interval_type`
- [[SPARK-46908]](https://issues.apache.org/jira/browse/SPARK-46908) Support star clause in `WHERE` clause
- [[SPARK-36680]](https://issues.apache.org/jira/browse/SPARK-36680) Support dynamic table options via `WITH OPTIONS` syntax
- [[SPARK-35553]](https://issues.apache.org/jira/browse/SPARK-35553) Improve correlated subqueries
- [[SPARK-47492]](https://issues.apache.org/jira/browse/SPARK-47492) Widen whitespace rules in lexer to allow Unicode
- [[SPARK-46246]](https://issues.apache.org/jira/browse/SPARK-46246) `EXECUTE IMMEDIATE`SQL support
- [[SPARK-46207]](https://issues.apache.org/jira/browse/SPARK-46207) Support `MergeInto` in DataFrameWriterV2
- [[SPARK-50129]](https://issues.apache.org/jira/browse/SPARK-50129) Add DataFrame APIs for subqueries
- [[SPARK-50075]](https://issues.apache.org/jira/browse/SPARK-50075) DataFrame APIs for table-valued functions


#### Functions

- [[SPARK-52016]](https://issues.apache.org/jira/browse/SPARK-52016) New built-in functions in Spark 4.0
- [[SPARK-44001]](https://issues.apache.org/jira/browse/SPARK-44001) Add option to allow unwrapping protobuf well-known wrapper types
- [[SPARK-43427]](https://issues.apache.org/jira/browse/SPARK-43427) spark protobuf: allow upcasting unsigned integer types
- [[SPARK-44983]](https://issues.apache.org/jira/browse/SPARK-44983) Convert `binary` to `string` by `to_char` for the formats: hex, base64, utf-8
- [[SPARK-44868]](https://issues.apache.org/jira/browse/SPARK-44868) Convert `datetime` to `string` by `to_char`/`to_varchar`
- [[SPARK-45796]](https://issues.apache.org/jira/browse/SPARK-45796) Support `MODE() WITHIN GROUP (ORDER BY col)`
- [[SPARK-48658]](https://issues.apache.org/jira/browse/SPARK-48658) Encode/Decode functions report coding errors instead of mojibake
- [[SPARK-45034]](https://issues.apache.org/jira/browse/SPARK-45034) Support deterministic mode function
- [[SPARK-44778]](https://issues.apache.org/jira/browse/SPARK-44778) Add the alias `TIMEDIFF` for `TIMESTAMPDIFF`
- [[SPARK-47497]](https://issues.apache.org/jira/browse/SPARK-47497) Make `to_csv` support arrays/maps/binary as pretty strings
- [[SPARK-44840]](https://issues.apache.org/jira/browse/SPARK-44840) Make `array_insert()` 1-based for negative indexes

#### Query optimization

- [[SPARK-46946]](https://issues.apache.org/jira/browse/SPARK-46946) Supporting broadcast of multiple filtering keys in `DynamicPruning`
- [[SPARK-48445]](https://issues.apache.org/jira/browse/SPARK-48445) Don’t inline UDFs with expansive children
- [[SPARK-41413]](https://issues.apache.org/jira/browse/SPARK-41413) Avoid shuffle in Storage-Partitioned Join when partition keys mismatch, but expressions are compatible
- [[SPARK-46941]](https://issues.apache.org/jira/browse/SPARK-46941) Prevent insertion of window group limit node with `SizeBasedWindowFunction`
- [[SPARK-46707]](https://issues.apache.org/jira/browse/SPARK-46707) Add throwable field to expressions to improve predicate pushdown
- [[SPARK-47511]](https://issues.apache.org/jira/browse/SPARK-47511) Canonicalize `WITH` expressions by reassigning IDs
- [[SPARK-46502]](https://issues.apache.org/jira/browse/SPARK-46502) Support timestamp types in `UnwrapCastInBinaryComparison`
- [[SPARK-46069]](https://issues.apache.org/jira/browse/SPARK-46069) Support unwrap timestamp type to date type
- [[SPARK-46219]](https://issues.apache.org/jira/browse/SPARK-46219) Unwrap cast in join predicates
- [[SPARK-45606]](https://issues.apache.org/jira/browse/SPARK-45606) Release restrictions on multi-layer runtime filter
- [[SPARK-45909]](https://issues.apache.org/jira/browse/SPARK-45909) Remove `NumericType` cast if it can safely up-cast in `IsNotNull`

#### Query execution

- [[SPARK-45592]](https://issues.apache.org/jira/browse/SPARK-45592) Correctness issue in AQE with `InMemoryTableScanExec`
- [[SPARK-50258]](https://issues.apache.org/jira/browse/SPARK-50258) Fix output column order changed issue after AQE
- [[SPARK-46693]](https://issues.apache.org/jira/browse/SPARK-46693) Inject `LocalLimitExec` when matching `OffsetAndLimit` or `LimitAndOffset`
- [[SPARK-48873]](https://issues.apache.org/jira/browse/SPARK-48873) Use `UnsafeRow` in JSON parser
- [[SPARK-41471]](https://issues.apache.org/jira/browse/SPARK-41471) Reduce Spark shuffle when only one side of a join is `KeyGroupedPartitioning`
- [[SPARK-45452]](https://issues.apache.org/jira/browse/SPARK-45452) Improve `InMemoryFileIndex` to use` FileSystem.listFiles` API
- [[SPARK-48649]](https://issues.apache.org/jira/browse/SPARK-48649) Add `ignoreInvalidPartitionPaths` configs for skipping invalid partition paths
- [[SPARK-45882]](https://issues.apache.org/jira/browse/SPARK-45882) `BroadcastHashJoinExec` propagate partitioning should respect CoalescedHashPartitioning


### Spark Connectors

#### Data Source V2 framework

- [[SPARK-45784]](https://issues.apache.org/jira/browse/SPARK-45784) Introduce clustering mechanism to Spark
- [[SPARK-50820]](https://issues.apache.org/jira/browse/SPARK-50820) DSv2: Conditional nullification of metadata columns in DML
- [[SPARK-51938]](https://issues.apache.org/jira/browse/SPARK-51938) Improve Storage Partition Join
- [[SPARK-50700]](https://issues.apache.org/jira/browse/SPARK-50700) `spark.sql.catalog.spark_catalog` supports builtin magic value
- [[SPARK-48781]](https://issues.apache.org/jira/browse/SPARK-48781) Add Catalog APIs for loading stored procedures
- [[SPARK-49246]](https://issues.apache.org/jira/browse/SPARK-49246) `TableCatalog#loadTable` should indicate if it's for writing
- [[SPARK-45965]](https://issues.apache.org/jira/browse/SPARK-45965) Move DSv2 partitioning expressions into functions.partitioning
- [[SPARK-46272]](https://issues.apache.org/jira/browse/SPARK-46272) Support CTAS using DSv2 sources
- [[SPARK-46043]](https://issues.apache.org/jira/browse/SPARK-46043) Support create table using DSv2 sources
- [[SPARK-48668]](https://issues.apache.org/jira/browse/SPARK-48668) Support `ALTER NAMESPACE ... UNSET PROPERTIES` in v2
- [[SPARK-46442]](https://issues.apache.org/jira/browse/SPARK-46442) DS V2 supports push down `PERCENTILE_CONT` and `PERCENTILE_DISC`
- [[SPARK-49078]](https://issues.apache.org/jira/browse/SPARK-49078) Support show columns syntax in v2 table

#### Hive Catalog

- [[SPARK-45328]](https://issues.apache.org/jira/browse/SPARK-45328) Remove Hive support prior to 2.0.0
- [[SPARK-47101]](https://issues.apache.org/jira/browse/SPARK-47101) Allow comma in top-level column names and relax HiveExternalCatalog schema check
- [[SPARK-45265]](https://issues.apache.org/jira/browse/SPARK-45265) Support Hive 4.0 metastore

#### XML

- [[SPARK-44265]](https://issues.apache.org/jira/browse/SPARK-44265) Built-in XML data source support

#### CSV

- [[SPARK-46862]](https://issues.apache.org/jira/browse/SPARK-46862) Disable CSV column pruning in multi-line mode
- [[SPARK-46890]](https://issues.apache.org/jira/browse/SPARK-46890) Fix CSV parsing bug with default values and column pruning
- [[SPARK-50616]](https://issues.apache.org/jira/browse/SPARK-50616) Add File Extension Option to CSV DataSource Writer
- [[SPARK-49125]](https://issues.apache.org/jira/browse/SPARK-49125) Allow duplicated column names in CSV writing
- [[SPARK-49016]](https://issues.apache.org/jira/browse/SPARK-49016) Restore behavior for queries from raw CSV files
- [[SPARK-48807]](https://issues.apache.org/jira/browse/SPARK-48807) Binary support for CSV datasource
- [[SPARK-48602]](https://issues.apache.org/jira/browse/SPARK-48602) Make csv generator support different output style via spark.sql.binaryOutputStyle

#### ORC

- [[SPARK-46648]](https://issues.apache.org/jira/browse/SPARK-46648) Use zstd as the default ORC compression
- [[SPARK-47456]](https://issues.apache.org/jira/browse/SPARK-47456) Support ORC Brotli codec
- [[SPARK-41858]](https://issues.apache.org/jira/browse/SPARK-41858) Fix ORC reader perf regression due to DEFAULT value feature

#### Avro

- [[SPARK-47739]](https://issues.apache.org/jira/browse/SPARK-47739) Register logical Avro type
- [[SPARK-49082]](https://issues.apache.org/jira/browse/SPARK-49082) Widening type promotions in `AvroDeserializer`
- [[SPARK-46633]](https://issues.apache.org/jira/browse/SPARK-46633) Fix Avro reader to handle zero-length blocks
- [[SPARK-50350]](https://issues.apache.org/jira/browse/SPARK-50350) Avro: add new function `schema_of_avro` (Scala side)
- [[SPARK-46930]](https://issues.apache.org/jira/browse/SPARK-46930) Add support for custom prefix for Union type fields in Avro
- [[SPARK-46746]](https://issues.apache.org/jira/browse/SPARK-46746) Attach codec extension to Avro datasource files
- [[SPARK-46759]](https://issues.apache.org/jira/browse/SPARK-46759) Support compression level for xz and zstandard in Avro
- [[SPARK-46766]](https://issues.apache.org/jira/browse/SPARK-46766) Add ZSTD Buffer Pool support for Avro datasource
- [[SPARK-43380]](https://issues.apache.org/jira/browse/SPARK-43380) Fix Avro data type conversion issues without causing performance regression
- [[SPARK-48545]](https://issues.apache.org/jira/browse/SPARK-48545) Create `to_avro` and `from_avro` SQL functions
- [[SPARK-46990]](https://issues.apache.org/jira/browse/SPARK-46990) Fix loading empty Avro files (infinite loop)

#### JDBC

- [[SPARK-47361]](https://issues.apache.org/jira/browse/SPARK-47361) Improve JDBC data sources
- [[SPARK-44977]](https://issues.apache.org/jira/browse/SPARK-44977) Upgrade Derby to 10.16.1.1
- [[SPARK-47044]](https://issues.apache.org/jira/browse/SPARK-47044) Add executed query for JDBC external datasources to explain output
- [[SPARK-45139]](https://issues.apache.org/jira/browse/SPARK-45139) Add `DatabricksDialect` to handle SQL type conversion

#### Other notable Spark Connectors changes

- [[SPARK-45905]](https://issues.apache.org/jira/browse/SPARK-45905) Least common type between decimal types should retain integral digits first
- [[SPARK-45786]](https://issues.apache.org/jira/browse/SPARK-45786) Fix inaccurate Decimal multiplication and division results
- [[SPARK-50705]](https://issues.apache.org/jira/browse/SPARK-50705) Make `QueryPlan` lock‑free
- [[SPARK-46743]](https://issues.apache.org/jira/browse/SPARK-46743) Fix corner-case with `COUNT` + constant folding subquery
- [[SPARK-47509]](https://issues.apache.org/jira/browse/SPARK-47509) Block subquery expressions in lambda/higher-order functions for correctness
- [[SPARK-48498]](https://issues.apache.org/jira/browse/SPARK-48498) Always do char padding in predicates
- [[SPARK-45915]](https://issues.apache.org/jira/browse/SPARK-45915) Treat decimal(x, 0) the same as IntegralType in PromoteStrings
- [[SPARK-46220]](https://issues.apache.org/jira/browse/SPARK-46220) Restrict charsets in decode()
- [[SPARK-45816]](https://issues.apache.org/jira/browse/SPARK-45816) Return `NULL` when overflowing during casting from timestamp to integers
- [[SPARK-45586]](https://issues.apache.org/jira/browse/SPARK-45586) Reduce compiler latency for plans with large expression trees
- [[SPARK-45507]](https://issues.apache.org/jira/browse/SPARK-45507) Correctness fix for nested correlated scalar subqueries with `COUNT` aggregates
- [[SPARK-44550]](https://issues.apache.org/jira/browse/SPARK-44550) Enable correctness fixes for null `IN` (empty list) under ANSI
- [[SPARK-47911]](https://issues.apache.org/jira/browse/SPARK-47911) Introduces a universal `BinaryFormatter` to make binary output consistent


### PySpark Highlights

- [[SPARK-49530]](https://issues.apache.org/jira/browse/SPARK-49530) Introducing PySpark Plotting API
- [[SPARK-47540]](https://issues.apache.org/jira/browse/SPARK-47540) SPIP: Pure Python Package (Spark Connect)
- [[SPARK-50132]](https://issues.apache.org/jira/browse/SPARK-50132) Add DataFrame API for Lateral Joins
- [[SPARK-45981]](https://issues.apache.org/jira/browse/SPARK-45981) Improve Python language test coverage
- [[SPARK-46858]](https://issues.apache.org/jira/browse/SPARK-46858) Upgrade Pandas to 2
- [[SPARK-46910]](https://issues.apache.org/jira/browse/SPARK-46910) Eliminate JDK Requirement in PySpark Installation
- [[SPARK-47274]](https://issues.apache.org/jira/browse/SPARK-47274) Provide more useful context for DataFrame API errors
- [[SPARK-44076]](https://issues.apache.org/jira/browse/SPARK-44076) SPIP: Python Data Source API
- [[SPARK-43797]](https://issues.apache.org/jira/browse/SPARK-43797) Python User-defined Table Functions
- [[SPARK-46685]](https://issues.apache.org/jira/browse/SPARK-46685) PySpark UDF Unified Profiling

#### DataFrame APIs and Features

- [[SPARK-51079]](https://issues.apache.org/jira/browse/SPARK-51079) Support large variable types in pandas UDF, `createDataFrame` and `toPandas` with Arrow
- [[SPARK-50718]](https://issues.apache.org/jira/browse/SPARK-50718) Support `addArtifact(s)` for PySpark
- [[SPARK-50778]](https://issues.apache.org/jira/browse/SPARK-50778) Add `metadataColumn` to PySpark DataFrame
- [[SPARK-50719]](https://issues.apache.org/jira/browse/SPARK-50719) Support `interruptOperation` for PySpark
- [[SPARK-50790]](https://issues.apache.org/jira/browse/SPARK-50790) Implement `parse_json` in PySpark
- [[SPARK-49306]](https://issues.apache.org/jira/browse/SPARK-49306) Create SQL function aliases for `zeroifnull` and `nullifzero`
- [[SPARK-50132]](https://issues.apache.org/jira/browse/SPARK-50132) Add DataFrame API for Lateral Joins
- [[SPARK-43295]](https://issues.apache.org/jira/browse/SPARK-43295) Support string type columns for `DataFrameGroupBy.sum`
- [[SPARK-45575]](https://issues.apache.org/jira/browse/SPARK-45575) Support time travel options for `df.read` API
- [[SPARK-45755]](https://issues.apache.org/jira/browse/SPARK-45755) Improve `Dataset.isEmpty()` by applying global limit 1
  - Improves performance of isEmpty() by pushing down a global limit of 1.
- [[SPARK-48761]](https://issues.apache.org/jira/browse/SPARK-48761) Introduce `clusterBy` DataFrameWriter API for Scala
- [[SPARK-45929]](https://issues.apache.org/jira/browse/SPARK-45929) Support `groupingSets` operation in DataFrame API
  - Extends `groupingSets(...)` to DataFrame/DS-level APIs.
- [[SPARK-40178]](https://issues.apache.org/jira/browse/SPARK-40178) Support coalesce hints with ease for PySpark and R

#### Pandas API on Spark

- [[SPARK-46931]](https://issues.apache.org/jira/browse/SPARK-46931) Implement `{Frame, Series}.to_hdf`
- [[SPARK-46936]](https://issues.apache.org/jira/browse/SPARK-46936) Implement `Frame.to_feather`
- [[SPARK-46955]](https://issues.apache.org/jira/browse/SPARK-46955) Implement `Frame.to_stata`
- [[SPARK-46976]](https://issues.apache.org/jira/browse/SPARK-46976) Implement `DataFrameGroupBy.corr`
- [[SPARK-49344]](https://issues.apache.org/jira/browse/SPARK-49344) Support `json_normalize` for Pandas API on Spark
- [[SPARK-45552]](https://issues.apache.org/jira/browse/SPARK-45552) Introduce flexible parameters to `assertDataFrameEqual`
- [[SPARK-47824]](https://issues.apache.org/jira/browse/SPARK-47824) Fix nondeterminism in pyspark.pandas.series.asof
- [[SPARK-46926]](https://issues.apache.org/jira/browse/SPARK-46926) Add `convert_dtypes`, `infer_objects`, `set_axis` in fallback list
- [[SPARK-48295]](https://issues.apache.org/jira/browse/SPARK-48295) Turn on `compute.ops_on_diff_frames` by default
- [[SPARK-48336]](https://issues.apache.org/jira/browse/SPARK-48336) Implement `ps.sql` in Spark Connect
- [[SPARK-45267]](https://issues.apache.org/jira/browse/SPARK-45267) Change the default value for `numeric_only`
- [[SPARK-42619]](https://issues.apache.org/jira/browse/SPARK-42619) Add show_counts parameter for `DataFrame.info`
- [[SPARK-42620]](https://issues.apache.org/jira/browse/SPARK-42620) Add inclusive parameter for `(DataFrame|Series).between_time`
- [[SPARK-42621]](https://issues.apache.org/jira/browse/SPARK-42621) Add inclusive parameter for `pd.date_range`
- [[SPARK-45553]](https://issues.apache.org/jira/browse/SPARK-45553) Deprecate `assertPandasOnSparkEqual`
- [[SPARK-45718]](https://issues.apache.org/jira/browse/SPARK-45718) Remove remaining deprecated Pandas features from Spark 3.4.0
- [[SPARK-45550]](https://issues.apache.org/jira/browse/SPARK-45550) Remove deprecated APIs from Pandas API on Spark
- [[SPARK-45634]](https://issues.apache.org/jira/browse/SPARK-45634) Remove `DataFrame.get_dtype_counts` from Pandas API on Spark
- [[SPARK-45165]](https://issues.apache.org/jira/browse/SPARK-45165) Remove `inplace` parameter from CategoricalIndex APIs
- [[SPARK-45177]](https://issues.apache.org/jira/browse/SPARK-45177) Remove `col_space `parameter from `to_latex`
- [[SPARK-45164]](https://issues.apache.org/jira/browse/SPARK-45164) Remove deprecated Index APIs
- [[SPARK-45180]](https://issues.apache.org/jira/browse/SPARK-45180) Remove boolean inputs for inclusive parameter from `Series.between`
- [[SPARK-43709]](https://issues.apache.org/jira/browse/SPARK-43709) Remove closed parameter from `ps.date_range` & enable test
- [[SPARK-43453]](https://issues.apache.org/jira/browse/SPARK-43453) Ignore the names of` MultiIndex` when `axis=1` for `concat`
- [[SPARK-43433]](https://issues.apache.org/jira/browse/SPARK-43433) Match `GroupBy.nth` behavior to the latest Pandas

#### Other notable PySpark changes

- [[SPARK-50357]](https://issues.apache.org/jira/browse/SPARK-50357) Support `Interrupt(Tag|All)` APIs for PySpark
- [[SPARK-50392]](https://issues.apache.org/jira/browse/SPARK-50392) DataFrame conversion to table argument in Spark Classic
- [[SPARK-50752]](https://issues.apache.org/jira/browse/SPARK-50752) Introduce configs for tuning Python UDF without Arrow
- [[SPARK-47366]](https://issues.apache.org/jira/browse/SPARK-47366) Add VariantVal for PySpark
- [[SPARK-47683]](https://issues.apache.org/jira/browse/SPARK-47683) Decouple PySpark core API to pyspark.core package
- [[SPARK-47565]](https://issues.apache.org/jira/browse/SPARK-47565) Improve PySpark worker pool crash resilience
- [[SPARK-47933]](https://issues.apache.org/jira/browse/SPARK-47933) Parent Column class for Spark Connect and Spark Classic
- [[SPARK-50499]](https://issues.apache.org/jira/browse/SPARK-50499) Expose metrics from `BasePythonRunner`
- [[SPARK-50220]](https://issues.apache.org/jira/browse/SPARK-50220) Support `listagg` in PySpark
- [[SPARK-46910]](https://issues.apache.org/jira/browse/SPARK-46910) Eliminate JDK Requirement in PySpark Installation
- [[SPARK-46522]](https://issues.apache.org/jira/browse/SPARK-46522) Block Python data source registration with name conflicts
- [[SPARK-48996]](https://issues.apache.org/jira/browse/SPARK-48996) Allow bare Python literals in Column.and / or
- [[SPARK-48762]](https://issues.apache.org/jira/browse/SPARK-48762) Introduce `clusterBy` DataFrameWriter API for Python
- [[SPARK-49009]](https://issues.apache.org/jira/browse/SPARK-49009) Make Column APIs accept Python Enums
- [[SPARK-45891]](https://issues.apache.org/jira/browse/SPARK-45891) Add interval types in Variant Spec
- [[SPARK-48710]](https://issues.apache.org/jira/browse/SPARK-48710) Use NumPy 2.0-compatible types
- [[SPARK-48714]](https://issues.apache.org/jira/browse/SPARK-48714) Implement `DataFrame.mergeInto` in PySpark
- [[SPARK-48798]](https://issues.apache.org/jira/browse/SPARK-48798) Introduce `spark.profile.render` for SparkSession-based profiling
- [[SPARK-47346]](https://issues.apache.org/jira/browse/SPARK-47346) Make daemon mode configurable for Python planner workers
- [[SPARK-47366]](https://issues.apache.org/jira/browse/SPARK-47366) Add `parse_json` alias in PySpark/dataframe
- [[SPARK-48247]](https://issues.apache.org/jira/browse/SPARK-48247) Use all `dict` pairs in `MapType` schema inference
- [[SPARK-48340]](https://issues.apache.org/jira/browse/SPARK-48340) Support `TimestampNTZ` schema inference with `prefer_timestamp_ntz`
- [[SPARK-48220]](https://issues.apache.org/jira/browse/SPARK-48220) Allow passing PyArrow Table to `createDataFrame()`
- [[SPARK-48482]](https://issues.apache.org/jira/browse/SPARK-48482) `dropDuplicates`, `dropDuplicatesWithinWatermark` accept `var-args`
- [[SPARK-48508]](https://issues.apache.org/jira/browse/SPARK-48508) Client Side RPC optimization for Spark Connect
- [[SPARK-50311]](https://issues.apache.org/jira/browse/SPARK-50311) (`add`|`remove`|`get`|`clear`)Tag(s) APIs
- [[SPARK-50238]](https://issues.apache.org/jira/browse/SPARK-50238) Add Variant Support in PySpark UDFs/UDTFs/UDAFs
- [[SPARK-50446]](https://issues.apache.org/jira/browse/SPARK-50446) Concurrent level in Arrow-optimized Python UDF
- [[SPARK-50310]](https://issues.apache.org/jira/browse/SPARK-50310) Add a flag to disable DataFrameQueryContext
- [[SPARK-50471]](https://issues.apache.org/jira/browse/SPARK-50471) Support Arrow-based Python Data Source Writer
- [[SPARK-49899]](https://issues.apache.org/jira/browse/SPARK-49899) Support `deleteIfExists` for `TransformWithStateInPandas`
- [[SPARK-45597]](https://issues.apache.org/jira/browse/SPARK-45597) Support creating table using a Python data source in SQL (DSv2 exec)
- [[SPARK-46424]](https://issues.apache.org/jira/browse/SPARK-46424) Support Python metrics in Python Data Source
- [[SPARK-45525]](https://issues.apache.org/jira/browse/SPARK-45525) Support for Python data source write using DSv2
- [[SPARK-41666]](https://issues.apache.org/jira/browse/SPARK-41666) Support parameterized SQL by `sql()`
- [[SPARK-45768]](https://issues.apache.org/jira/browse/SPARK-45768) Make `faulthandler` a runtime configuration for Python execution in SQL
- [[SPARK-45555]](https://issues.apache.org/jira/browse/SPARK-45555) Includes a debuggable object for failed assertion
- [[SPARK-45600]](https://issues.apache.org/jira/browse/SPARK-45600) Make Python data source registration session level
- [[SPARK-46048]](https://issues.apache.org/jira/browse/SPARK-46048) Support DataFrame.groupingSets in PySpark
- [[SPARK-46103]](https://issues.apache.org/jira/browse/SPARK-46103) Enhancing PySpark documentation
- [[SPARK-40559]](https://issues.apache.org/jira/browse/SPARK-40559) Add applyInArrow to groupBy and cogroup
- [[SPARK-45420]](https://issues.apache.org/jira/browse/SPARK-45420) Add `DataType.fromDDL` into PySpark
- [[SPARK-45554]](https://issues.apache.org/jira/browse/SPARK-45554) Introduce flexible parameter to a`ssertSchemaEqual`
- [[SPARK-44918]](https://issues.apache.org/jira/browse/SPARK-44918) Support named arguments in scalar Python/Pandas UDFs
- [[SPARK-45017]](https://issues.apache.org/jira/browse/SPARK-45017) Add `CalendarIntervalType` to PySpark
- [[SPARK-44952]](https://issues.apache.org/jira/browse/SPARK-44952) Support named arguments in aggregate Pandas UDFs
- [[SPARK-44665]](https://issues.apache.org/jira/browse/SPARK-44665) Add support for pandas DataFrame `assertDataFrameEqual`
- [[SPARK-44705]](https://issues.apache.org/jira/browse/SPARK-44705) Make PythonRunner single-threaded
- [[SPARK-45673]](https://issues.apache.org/jira/browse/SPARK-45673) Enhancing clarity and usability of PySpark error messages


### Structured Streaming Highlights

- [[SPARK-46815]](https://issues.apache.org/jira/browse/SPARK-46815) Structured Streaming - Arbitrary State API v2
- [[SPARK-45511]](https://issues.apache.org/jira/browse/SPARK-45511) SPIP: State Data Source - Reader
- [[SPARK-46962]](https://issues.apache.org/jira/browse/SPARK-46962) Implement python worker to run python streaming data source

#### Other notable Streaming changes

- [[SPARK-44865]](https://issues.apache.org/jira/browse/SPARK-44865) Make StreamingRelationV2 support metadata column
- [[SPARK-45080]](https://issues.apache.org/jira/browse/SPARK-45080) Explicitly call out support for columnar in DSv2 streaming data sources
- [[SPARK-45178]](https://issues.apache.org/jira/browse/SPARK-45178) Fallback to execute a single batch for Trigger.AvailableNow with unsupported sources
- [[SPARK-45415]](https://issues.apache.org/jira/browse/SPARK-45415) Allow selective disabling of "fallocate" in RocksDB statestore
- [[SPARK-45503]](https://issues.apache.org/jira/browse/SPARK-45503) Add Conf to Set RocksDB Compression
- [[SPARK-45511]](https://issues.apache.org/jira/browse/SPARK-45511) State Data Source - Reader
- [[SPARK-45558]](https://issues.apache.org/jira/browse/SPARK-45558) Introduce a metadata file for streaming stateful operator
- [[SPARK-45794]](https://issues.apache.org/jira/browse/SPARK-45794) Introduce state metadata source to query the streaming state metadata information
- [[SPARK-45815]](https://issues.apache.org/jira/browse/SPARK-45815) Provide an interface for other Streaming sources to add \_metadata columns
- [[SPARK-45845]](https://issues.apache.org/jira/browse/SPARK-45845) Add number of evicted state rows to streaming UI
- [[SPARK-46641]](https://issues.apache.org/jira/browse/SPARK-46641) Add `maxBytesPerTrigger` threshold
- [[SPARK-46816]](https://issues.apache.org/jira/browse/SPARK-46816) Add base support for new arbitrary state management operator (multiple state variables/column families)
- [[SPARK-46865]](https://issues.apache.org/jira/browse/SPARK-46865) Add Batch Support for TransformWithState Operator
- [[SPARK-46906]](https://issues.apache.org/jira/browse/SPARK-46906) Add a check for stateful operator change for streaming
- [[SPARK-46961]](https://issues.apache.org/jira/browse/SPARK-46961) Use `ProcessorContext` to store and retrieve handle
- [[SPARK-46962]](https://issues.apache.org/jira/browse/SPARK-46962) Add interface for Python streaming data source & worker
- [[SPARK-47107]](https://issues.apache.org/jira/browse/SPARK-47107) Partition reader for Python streaming data sources
- [[SPARK-47273]](https://issues.apache.org/jira/browse/SPARK-47273) Python data stream writer interface
- [[SPARK-47553]](https://issues.apache.org/jira/browse/SPARK-47553) Add Java support for `transformWithState` operator APIs
- [[SPARK-47653]](https://issues.apache.org/jira/browse/SPARK-47653) Add support for negative numeric types and range scan key encoder
- [[SPARK-47733]](https://issues.apache.org/jira/browse/SPARK-47733) Add custom metrics for transformWithState operator part of query progress
- [[SPARK-47960]](https://issues.apache.org/jira/browse/SPARK-47960) Allow chaining other stateful operators after transformWithState
- [[SPARK-48447]](https://issues.apache.org/jira/browse/SPARK-48447) Check `StateStoreProvider` class before constructor
- [[SPARK-48569]](https://issues.apache.org/jira/browse/SPARK-48569) Handle edge cases in `query.name` for streaming queries
- [[SPARK-48589]](https://issues.apache.org/jira/browse/SPARK-48589) Add `snapshotStartBatchId` / `snapshotPartitionId` for state data source (see SQL)
- [[SPARK-48589]](https://issues.apache.org/jira/browse/SPARK-48589) Add snapshotStartBatchId / snapshotPartitionId options to state data source
- [[SPARK-48726]](https://issues.apache.org/jira/browse/SPARK-48726) Create StateSchemaV3 file for `TransformWithStateExec`
- [[SPARK-48742]](https://issues.apache.org/jira/browse/SPARK-48742) Virtual Column Family for RocksDB (arbitrary stateful API v2)
- [[SPARK-48755]](https://issues.apache.org/jira/browse/SPARK-48755) `transformWithState` pyspark base implementation and `ValueState` support
- [[SPARK-48772]](https://issues.apache.org/jira/browse/SPARK-48772) State Data Source Change Feed Reader Mode
- [[SPARK-48836]](https://issues.apache.org/jira/browse/SPARK-48836) Integrate SQL schema with state schema/metadata for TWS operator
- [[SPARK-48849]](https://issues.apache.org/jira/browse/SPARK-48849) Create OperatorStateMetadataV2 for `TransformWithStateExec` operator
- [[SPARK-48931]](https://issues.apache.org/jira/browse/SPARK-48931) Reduce Cloud Store List API cost for state-store maintenance
- [[SPARK-49021]](https://issues.apache.org/jira/browse/SPARK-49021) Add support for reading `transformWithState` value state variables with state data source reader
- [[SPARK-49048]](https://issues.apache.org/jira/browse/SPARK-49048) Add support for reading operator metadata at given batch id
- [[SPARK-49191]](https://issues.apache.org/jira/browse/SPARK-49191) Read `transformWithState` map state with state data source
- [[SPARK-49259]](https://issues.apache.org/jira/browse/SPARK-49259) Size-based partition creation during Kafka read
- [[SPARK-49411]](https://issues.apache.org/jira/browse/SPARK-49411) Communicate State Store Checkpoint ID
- [[SPARK-49463]](https://issues.apache.org/jira/browse/SPARK-49463) ListState support in `TransformWithStateInPandas`
- [[SPARK-49467]](https://issues.apache.org/jira/browse/SPARK-49467) Add state data source reader for list state
- [[SPARK-49513]](https://issues.apache.org/jira/browse/SPARK-49513) Add timer support in `transformWithStateInPandas`
- [[SPARK-49630]](https://issues.apache.org/jira/browse/SPARK-49630) Add flatten option for collection types in state data source reader
- [[SPARK-49656]](https://issues.apache.org/jira/browse/SPARK-49656) Support state variables with value state collection types
- [[SPARK-49676]](https://issues.apache.org/jira/browse/SPARK-49676) Chaining of operators in `transformWithStateInPandas`
- [[SPARK-49699]](https://issues.apache.org/jira/browse/SPARK-49699) Disable `PruneFilters` for streaming workloads
- [[SPARK-49744]](https://issues.apache.org/jira/browse/SPARK-49744) TTL support for ListState in `TransformWithStateInPandas`
- [[SPARK-49745]](https://issues.apache.org/jira/browse/SPARK-49745) Read registered timers in `transformWithState`
- [[SPARK-49802]](https://issues.apache.org/jira/browse/SPARK-49802) Add support for read change feed for map/list types
- [[SPARK-49846]](https://issues.apache.org/jira/browse/SPARK-49846) Add `numUpdatedStateRows`/`numRemovedStateRows` metrics
- [[SPARK-49883]](https://issues.apache.org/jira/browse/SPARK-49883) State Store Checkpoint Structure V2 Integration with RocksDB and RocksDBFileManager
- [[SPARK-50017]](https://issues.apache.org/jira/browse/SPARK-50017) Support Avro encoding for `TransformWithState` operator
- [[SPARK-50035]](https://issues.apache.org/jira/browse/SPARK-50035) Explicit `handleExpiredTimer` function in the stateful processor
- [[SPARK-50128]](https://issues.apache.org/jira/browse/SPARK-50128) Add handle APIs using implicit encoders
- [[SPARK-50152]](https://issues.apache.org/jira/browse/SPARK-50152) Support handleInitialState with state data source reader
- [[SPARK-50194]](https://issues.apache.org/jira/browse/SPARK-50194) Integration of New Timer API and Initial State API
- [[SPARK-50378]](https://issues.apache.org/jira/browse/SPARK-50378) Add custom metric for time spent populating initial state
- [[SPARK-50428]](https://issues.apache.org/jira/browse/SPARK-50428) Support `TransformWithStateInPandas` in batch queries
- [[SPARK-50573]](https://issues.apache.org/jira/browse/SPARK-50573) Adding State Schema ID to State Rows for schema evolution
- [[SPARK-50714]](https://issues.apache.org/jira/browse/SPARK-50714) Enable schema evolution for `TransformWithState` with Avro encoding


### Spark ML Highlights

- [[SPARK-48463]](https://issues.apache.org/jira/browse/SPARK-48463) Make various ML transformers support nested input columns
- [[SPARK-48463]](https://issues.apache.org/jira/browse/SPARK-48463) Make `StringIndexer` support nested input columns
- [[SPARK-45757]](https://issues.apache.org/jira/browse/SPARK-45757) Avoid re-computation of NNZ in Binarizer
- [[SPARK-45397]](https://issues.apache.org/jira/browse/SPARK-45397) Add array assembler feature transformer
- [[SPARK-45547]](https://issues.apache.org/jira/browse/SPARK-45547) Validate Vectors with built-in function

### Spark UX Highlights

- [[SPARK-44893]](https://issues.apache.org/jira/browse/SPARK-44893) `ThreadInfo` improvements for monitoring APIs
- [[SPARK-45595]](https://issues.apache.org/jira/browse/SPARK-45595) Expose `SQLSTATE` in error message
- [[SPARK-45022]](https://issues.apache.org/jira/browse/SPARK-45022) Provide context for dataset API errors
- [[SPARK-45771]](https://issues.apache.org/jira/browse/SPARK-45771) Enable `spark.eventLog.rolling.enabled` by default

#### Other notable Spark UX changes

- [[SPARK-41685]](https://issues.apache.org/jira/browse/SPARK-41685) Support Protobuf serializer for the KVStore in History server
- [[SPARK-44770]](https://issues.apache.org/jira/browse/SPARK-44770) Add a `displayOrder` variable to `WebUITab` to specify the order in which tabs appear
- [[SPARK-44801]](https://issues.apache.org/jira/browse/SPARK-44801) Capture analyzing failed queries in Listener and UI
- [[SPARK-44838]](https://issues.apache.org/jira/browse/SPARK-44838) `raise_error` improvement
- [[SPARK-44863]](https://issues.apache.org/jira/browse/SPARK-44863) Add a button to download thread dump as a txt in Spark UI
- [[SPARK-44895]](https://issues.apache.org/jira/browse/SPARK-44895) Add 'daemon', 'priority' for `ThreadStackTrace`
- [[SPARK-45022]](https://issues.apache.org/jira/browse/SPARK-45022) Provide context for dataset API errors
- [[SPARK-45151]](https://issues.apache.org/jira/browse/SPARK-45151) Task Level Thread Dump Support
- [[SPARK-45207]](https://issues.apache.org/jira/browse/SPARK-45207) Implement Error Enrichment for Scala Client
- [[SPARK-45209]](https://issues.apache.org/jira/browse/SPARK-45209) FlameGraph Support For Executor Thread Dump Page
- [[SPARK-45240]](https://issues.apache.org/jira/browse/SPARK-45240) Implement Error Enrichment for Python Client
- [[SPARK-45248]](https://issues.apache.org/jira/browse/SPARK-45248) Set the timeout for spark UI server
- [[SPARK-45274]](https://issues.apache.org/jira/browse/SPARK-45274) Implementation of a new DAG drawing approach for job/stage/plan graphics
- [[SPARK-45312]](https://issues.apache.org/jira/browse/SPARK-45312) Support toggle display/hide plan svg on execution page
- [[SPARK-45439]](https://issues.apache.org/jira/browse/SPARK-45439) Reduce memory usage of `LiveStageMetrics.accumIdsToMetricType`
- [[SPARK-45462]](https://issues.apache.org/jira/browse/SPARK-45462) Show Duration in ApplicationPage
- [[SPARK-45480]](https://issues.apache.org/jira/browse/SPARK-45480) Selectable Spark Plan Node on UI
- [[SPARK-45491]](https://issues.apache.org/jira/browse/SPARK-45491) Add missing SQLSTATES
- [[SPARK-45500]](https://issues.apache.org/jira/browse/SPARK-45500) Show the number of abnormally completed drivers in MasterPage
- [[SPARK-45516]](https://issues.apache.org/jira/browse/SPARK-45516) Include `QueryContext` in `SparkThrowable` proto message
- [[SPARK-45581]](https://issues.apache.org/jira/browse/SPARK-45581) Make `SQLSTATE` mandatory
- [[SPARK-45595]](https://issues.apache.org/jira/browse/SPARK-45595) Expose `SQLSTATE` in error message
- [[SPARK-45609]](https://issues.apache.org/jira/browse/SPARK-45609) Include `SqlState` in `SparkThrowable` proto message
- [[SPARK-45641]](https://issues.apache.org/jira/browse/SPARK-45641) Display the application start time on AllJobsPage
- [[SPARK-45771]](https://issues.apache.org/jira/browse/SPARK-45771) Enable `spark.eventLog.rolling.enabled` by default
- [[SPARK-45774]](https://issues.apache.org/jira/browse/SPARK-45774) Support `spark.master.ui.historyServerUrl` in ApplicationPage
- [[SPARK-45955]](https://issues.apache.org/jira/browse/SPARK-45955) Collapse Support for Flamegraph and thread dump details
- [[SPARK-46003]](https://issues.apache.org/jira/browse/SPARK-46003) Create a `ui-test` module with Jest to test UI JavaScript code
- [[SPARK-46094]](https://issues.apache.org/jira/browse/SPARK-46094) Support Executor JVM Profiling
- [[SPARK-46399]](https://issues.apache.org/jira/browse/SPARK-46399) Add exit status to the Application End event for the use of Spark Listener
- [[SPARK-46886]](https://issues.apache.org/jira/browse/SPARK-46886) Enable `spark.ui.prometheus.enabled` by default
- [[SPARK-46893]](https://issues.apache.org/jira/browse/SPARK-46893) Remove inline scripts from UI descriptions
- [[SPARK-46903]](https://issues.apache.org/jira/browse/SPARK-46903) Support Spark History Server Log UI
- [[SPARK-46922]](https://issues.apache.org/jira/browse/SPARK-46922) Do not wrap runtime user-facing errors
- [[SPARK-46933]](https://issues.apache.org/jira/browse/SPARK-46933) Add query execution time metric to connectors using JDBCRDD
- [[SPARK-47253]](https://issues.apache.org/jira/browse/SPARK-47253) Allow LiveEventBus to stop without draining the event queue
- [[SPARK-47894]](https://issues.apache.org/jira/browse/SPARK-47894) Add Environment page to Master UI
- [[SPARK-48459]](https://issues.apache.org/jira/browse/SPARK-48459) Implement `DataFrameQueryContext` in Spark Connect
- [[SPARK-48597]](https://issues.apache.org/jira/browse/SPARK-48597) Introduce marker for `isStreaming` in text representation of logical plan
- [[SPARK-48628]](https://issues.apache.org/jira/browse/SPARK-48628) Add task peak on/off heap memory metrics
- [[SPARK-48716]](https://issues.apache.org/jira/browse/SPARK-48716) Add `jobGroupId` to `SparkListenerSQLExecutionStart`
- [[SPARK-49128]](https://issues.apache.org/jira/browse/SPARK-49128) Support custom History Server UI title
- [[SPARK-49206]](https://issues.apache.org/jira/browse/SPARK-49206) Add Environment Variables table to Master EnvironmentPage
- [[SPARK-49241]](https://issues.apache.org/jira/browse/SPARK-49241) Add OpenTelemetryPush Sink with opentelemetry profile
- [[SPARK-49445]](https://issues.apache.org/jira/browse/SPARK-49445) Support show tooltip in the progress bar of UI
- [[SPARK-50049]](https://issues.apache.org/jira/browse/SPARK-50049) Support custom driver metrics in writing to v2 table
- [[SPARK-50315]](https://issues.apache.org/jira/browse/SPARK-50315) Support custom metrics for V1Fallback writes
- [[SPARK-50915]](https://issues.apache.org/jira/browse/SPARK-50915) Add `getCondition` and deprecate `getErrorClass` in PySparkException
- [[SPARK-51021]](https://issues.apache.org/jira/browse/SPARK-51021) Add log throttler


### Spark Connect Highlights

- [[SPARK-49248]](https://issues.apache.org/jira/browse/SPARK-49248) Scala Client Parity with existing Dataset/DataFrame API
- [[SPARK-48918]](https://issues.apache.org/jira/browse/SPARK-48918) Create a unified SQL Scala interface shared by regular SQL and Connect
- [[SPARK-50812]](https://issues.apache.org/jira/browse/SPARK-50812) Support pyspark.ml on Connect
- [[SPARK-47908]](https://issues.apache.org/jira/browse/SPARK-47908) Parent classes for Spark Connect and Spark Classic
- [[SPARK-50605]](https://issues.apache.org/jira/browse/SPARK-50605) Add spark.api.mode for better compatibility with Spark Classic


#### Other Spark Connect changes and improvements

- [[SPARK-41065]](https://issues.apache.org/jira/browse/SPARK-41065) Implement `DataFrame.freqItems` and `DataFrame.stat.freqItems`
- [[SPARK-41066]](https://issues.apache.org/jira/browse/SPARK-41066) Implement `DataFrame.sampleBy` and `DataFrame.stat.sampleBy`
- [[SPARK-41067]](https://issues.apache.org/jira/browse/SPARK-41067) Implement `DataFrame.stat.cov`
- [[SPARK-41068]](https://issues.apache.org/jira/browse/SPARK-41068) Implement `DataFrame.stat.corr`
- [[SPARK-41069]](https://issues.apache.org/jira/browse/SPARK-41069) Implement `DataFrame.approxQuantile` and `DataFrame.stat.approxQuantile`
- [[SPARK-41292]](https://issues.apache.org/jira/browse/SPARK-41292) Implement `Window` functions
- [[SPARK-41333]](https://issues.apache.org/jira/browse/SPARK-41333) Implement `GroupedData.{min, max, avg, sum}`
- [[SPARK-41364]](https://issues.apache.org/jira/browse/SPARK-41364) Implement broadcast function
- [[SPARK-41383]](https://issues.apache.org/jira/browse/SPARK-41383) Implement `rollup`, `cube`, and `pivot`
- [[SPARK-41434]](https://issues.apache.org/jira/browse/SPARK-41434) Initial LambdaFunction implementation
- [[SPARK-41440]](https://issues.apache.org/jira/browse/SPARK-41440) Implement `DataFrame.randomSplit`
- [[SPARK-41464]](https://issues.apache.org/jira/browse/SPARK-41464) Implement `DataFrame.to`
- [[SPARK-41473]](https://issues.apache.org/jira/browse/SPARK-41473) Implement `format_number` function
- [[SPARK-41503]](https://issues.apache.org/jira/browse/SPARK-41503) Implement Partition Transformation Functions
- [[SPARK-41529]](https://issues.apache.org/jira/browse/SPARK-41529) Implement `SparkSession.stop`
- [[SPARK-41629]](https://issues.apache.org/jira/browse/SPARK-41629) Support for Protocol Extensions in Relation and Expression
- [[SPARK-41663]](https://issues.apache.org/jira/browse/SPARK-41663) Implement the rest of Lambda functions
- [[SPARK-41673]](https://issues.apache.org/jira/browse/SPARK-41673) Implement `Column.astype`
- [[SPARK-41707]](https://issues.apache.org/jira/browse/SPARK-41707) Implement Catalog API in Spark Connect
- [[SPARK-41710]](https://issues.apache.org/jira/browse/SPARK-41710) Implement `Column.between`
- [[SPARK-41722]](https://issues.apache.org/jira/browse/SPARK-41722) Implement 3 missing time window functions
- [[SPARK-41723]](https://issues.apache.org/jira/browse/SPARK-41723) Implement sequence function
- [[SPARK-41724]](https://issues.apache.org/jira/browse/SPARK-41724) Implement `call_udf` function
- [[SPARK-41728]](https://issues.apache.org/jira/browse/SPARK-41728) Implement `unwrap_udt` function
- [[SPARK-41731]](https://issues.apache.org/jira/browse/SPARK-41731) Implement the column accessor (`getItem`, `getField`, `getitem`, etc.)
- [[SPARK-41740]](https://issues.apache.org/jira/browse/SPARK-41740) Implement `Column.name`
- [[SPARK-41767]](https://issues.apache.org/jira/browse/SPARK-41767) Implement `Column.{withField, dropFields}`
- [[SPARK-41785]](https://issues.apache.org/jira/browse/SPARK-41785) Implement `GroupedData.mean`
- [[SPARK-41803]](https://issues.apache.org/jira/browse/SPARK-41803) Add missing function `log(arg1, arg2)`
- [[SPARK-41811]](https://issues.apache.org/jira/browse/SPARK-41811) Implement `SQLStringFormatter` with `WithRelations`
- [[SPARK-42664]](https://issues.apache.org/jira/browse/SPARK-42664) Support `bloomFilter` function for `DataFrameStatFunction`s
- [[SPARK-43662]](https://issues.apache.org/jira/browse/SPARK-43662) Support `merge_asof` in Spark Connect
- [[SPARK-43704]](https://issues.apache.org/jira/browse/SPARK-43704) Support `MultiIndex` for `to_series()` in Spark Connect
- [[SPARK-44736]](https://issues.apache.org/jira/browse/SPARK-44736) Add `Dataset.explode` to Spark Connect Scala Client
- [[SPARK-44740]](https://issues.apache.org/jira/browse/SPARK-44740) Support specifying `session_id` in `SPARK_REMOTE` connection string
- [[SPARK-44747]](https://issues.apache.org/jira/browse/SPARK-44747) Add missing `SparkSession.Builder` methods
- [[SPARK-44761]](https://issues.apache.org/jira/browse/SPARK-44761) Support `DataStreamWriter.foreachBatch(VoidFunction2)`
- [[SPARK-44788]](https://issues.apache.org/jira/browse/SPARK-44788) Add `from_xml` and `schema_of_xml` to pyspark, Spark Connect, and SQL functions
- [[SPARK-44807]](https://issues.apache.org/jira/browse/SPARK-44807) Add `Dataset.metadataColumn` to Scala Client
- [[SPARK-44877]](https://issues.apache.org/jira/browse/SPARK-44877) Support python protobuf functions for Spark Connect
- [[SPARK-45000]](https://issues.apache.org/jira/browse/SPARK-45000) Implement `DataFrame.foreach`
- [[SPARK-45001]](https://issues.apache.org/jira/browse/SPARK-45001) Implement `DataFrame.foreachPartition`
- [[SPARK-45091]](https://issues.apache.org/jira/browse/SPARK-45091) Function `floor`/`round`/`bround` now accept Column type scale
- [[SPARK-45121]](https://issues.apache.org/jira/browse/SPARK-45121) Support `Series.empty` for Spark Connect
- [[SPARK-45137]](https://issues.apache.org/jira/browse/SPARK-45137) Support map/array parameters in parameterized sql()
- [[SPARK-45143]](https://issues.apache.org/jira/browse/SPARK-45143) Make PySpark compatible with PyArrow 13.0.0
- [[SPARK-45190]](https://issues.apache.org/jira/browse/SPARK-45190) Make `from_xml` support `StructType` schema
- [[SPARK-45235]](https://issues.apache.org/jira/browse/SPARK-45235) Support `map and array` parameters by sql()
- [[SPARK-45485]](https://issues.apache.org/jira/browse/SPARK-45485) User agent improvements: Use `SPARK_CONNECT_USER_AGENT` env variable and include environment specific attributes
- [[SPARK-45506]](https://issues.apache.org/jira/browse/SPARK-45506) Add ivy URI support to SparkcConnect `addArtifact`
- [[SPARK-45619]](https://issues.apache.org/jira/browse/SPARK-45619) Apply the observed metrics to Observation object
- [[SPARK-45733]](https://issues.apache.org/jira/browse/SPARK-45733) Support multiple retry policies
- [[SPARK-45851]](https://issues.apache.org/jira/browse/SPARK-45851) Support multiple policies in scala client
- [[SPARK-46039]](https://issues.apache.org/jira/browse/SPARK-46039) Upgrade `grpcio\*` to 1.59.3 for Python 3.12
- [[SPARK-46048]](https://issues.apache.org/jira/browse/SPARK-46048) Support `DataFrame.groupingSets` in Python Spark Connect
- [[SPARK-46085]](https://issues.apache.org/jira/browse/SPARK-46085) `Dataset.groupingSets` in Scala Spark Connect client
- [[SPARK-46202]](https://issues.apache.org/jira/browse/SPARK-46202) Expose new `ArtifactManager` APIs to support custom target directories
- [[SPARK-46229]](https://issues.apache.org/jira/browse/SPARK-46229) Add `applyInArrow` to `groupBy` and `cogroup` in Spark Connect
- [[SPARK-46255]](https://issues.apache.org/jira/browse/SPARK-46255) Support complex type -> string conversion
- [[SPARK-46620]](https://issues.apache.org/jira/browse/SPARK-46620) Introduce a basic fallback mechanism for frame methods
- [[SPARK-46812]](https://issues.apache.org/jira/browse/SPARK-46812) Make `mapInPandas`/`mapInArrow` support `ResourceProfile`
- [[SPARK-46919]](https://issues.apache.org/jira/browse/SPARK-46919) Upgrade grpcio\* and grpc-java to 1.62.x
- [[SPARK-47014]](https://issues.apache.org/jira/browse/SPARK-47014) Implement methods `dumpPerfProfile` and `dumpMemoryProfiles` of SparkSession
- [[SPARK-47069]](https://issues.apache.org/jira/browse/SPARK-47069) Introduce `spark.profile.show`/`.dump` for SparkSession-based profiling
- [[SPARK-47081]](https://issues.apache.org/jira/browse/SPARK-47081) Support Query Execution Progress
- [[SPARK-47137]](https://issues.apache.org/jira/browse/SPARK-47137) Add `getAll` to `spark.conf` for feature parity with Scala
- [[SPARK-47233]](https://issues.apache.org/jira/browse/SPARK-47233) Client & Server logic for client-side streaming query listener
- [[SPARK-47276]](https://issues.apache.org/jira/browse/SPARK-47276) Introduce `spark.profile.clear` for SparkSession-based profiling
- [[SPARK-47367]](https://issues.apache.org/jira/browse/SPARK-47367) Support Python data sources with Spark Connect
- [[SPARK-47543]](https://issues.apache.org/jira/browse/SPARK-47543) Infer `dict` as `MapType` from Pandas DataFrame (via new config)
- [[SPARK-47545]](https://issues.apache.org/jira/browse/SPARK-47545) `Dataset.observe` for Scala Connect
- [[SPARK-47694]](https://issues.apache.org/jira/browse/SPARK-47694) Make max message size configurable on the client side
- [[SPARK-47712]](https://issues.apache.org/jira/browse/SPARK-47712) Allow connect plugins to create and process Datasets
- [[SPARK-47812]](https://issues.apache.org/jira/browse/SPARK-47812) Support Serialization of `SparkSession` for `ForEachBatch` worker
- [[SPARK-47818]](https://issues.apache.org/jira/browse/SPARK-47818) Introduce plan cache in SparkConnectPlanner to improve performance of Analyze requests
- [[SPARK-47845]](https://issues.apache.org/jira/browse/SPARK-47845) Support Column type in split function for Scala and Python
- [[SPARK-47909]](https://issues.apache.org/jira/browse/SPARK-47909) Parent DataFrame class for Spark Connect and Spark Classic
- [[SPARK-48008]](https://issues.apache.org/jira/browse/SPARK-48008) Support UDAFs in Spark Connect
- [[SPARK-48048]](https://issues.apache.org/jira/browse/SPARK-48048) Added client side listener support for Scala
- [[SPARK-48112]](https://issues.apache.org/jira/browse/SPARK-48112) Expose session in `SparkConnectPlanner` to plugins
- [[SPARK-48113]](https://issues.apache.org/jira/browse/SPARK-48113) Allow Plugins to integrate with Spark Connect
- [[SPARK-48258]](https://issues.apache.org/jira/browse/SPARK-48258) `Checkpoint` and `localCheckpoint` in Spark Connect
- [[SPARK-48510]](https://issues.apache.org/jira/browse/SPARK-48510) Support UDAF `toColumn` API in Spark Connect
- [[SPARK-48555]](https://issues.apache.org/jira/browse/SPARK-48555) Support using Columns as parameters for several functions (`array_remove`, `array_position`, etc.)
- [[SPARK-48638]](https://issues.apache.org/jira/browse/SPARK-48638) Add `ExecutionInfo` support for DataFrame
- [[SPARK-48794]](https://issues.apache.org/jira/browse/SPARK-48794) `DataFrame.mergeInto` support for Spark Connect (Scala & Python)
- [[SPARK-48960]](https://issues.apache.org/jira/browse/SPARK-48960) Makes spark‑shell work with Spark Connect (`–remote` support)
- [[SPARK-49027]](https://issues.apache.org/jira/browse/SPARK-49027) Share Column API between Classic and Connect
- [[SPARK-49028]](https://issues.apache.org/jira/browse/SPARK-49028) Create a shared SparkSession
- [[SPARK-49029]](https://issues.apache.org/jira/browse/SPARK-49029) Create shared Dataset interface
- [[SPARK-49185]](https://issues.apache.org/jira/browse/SPARK-49185) Reimplement kde plot with Spark SQL
- [[SPARK-49201]](https://issues.apache.org/jira/browse/SPARK-49201) Reimplement hist plot with Spark SQL
- [[SPARK-49249]](https://issues.apache.org/jira/browse/SPARK-49249) Add `addArtifac`t API to the Spark SQL Core
- [[SPARK-49273]](https://issues.apache.org/jira/browse/SPARK-49273) Origin support for Spark Connect Scala client
- [[SPARK-49282]](https://issues.apache.org/jira/browse/SPARK-49282) Create a shared `SparkSessionBuilder` interface
- [[SPARK-49284]](https://issues.apache.org/jira/browse/SPARK-49284) Create a shared Catalog interface
- [[SPARK-49413]](https://issues.apache.org/jira/browse/SPARK-49413) Create a shared `RuntimeConfig` interface
- [[SPARK-49416]](https://issues.apache.org/jira/browse/SPARK-49416) Add shared `DataStreamReader` interface
- [[SPARK-49417]](https://issues.apache.org/jira/browse/SPARK-49417) Add shared `StreamingQueryManager` interface
- [[SPARK-49419]](https://issues.apache.org/jira/browse/SPARK-49419) Create shared DataFrameStatFunctions
- [[SPARK-49429]](https://issues.apache.org/jira/browse/SPARK-49429) Add shared `DataStreamWriter` interface
- [[SPARK-49526]](https://issues.apache.org/jira/browse/SPARK-49526) Support Windows-style paths in ArtifactManager
- [[SPARK-49530]](https://issues.apache.org/jira/browse/SPARK-49530) Support kde/density plots
- [[SPARK-49531]](https://issues.apache.org/jira/browse/SPARK-49531) Support line plot with plotly backend
- [[SPARK-49626]](https://issues.apache.org/jira/browse/SPARK-49626) Support horizontal/vertical bar plots
- [[SPARK-49907]](https://issues.apache.org/jira/browse/SPARK-49907) Support spark.ml on Connect
- [[SPARK-49948]](https://issues.apache.org/jira/browse/SPARK-49948) Add "precision" parameter to pandas on Spark box plot
- [[SPARK-50050]](https://issues.apache.org/jira/browse/SPARK-50050) Make lit accept str/bool numpy ndarray
- [[SPARK-50054]](https://issues.apache.org/jira/browse/SPARK-50054) Support histogram plots
- [[SPARK-50063]](https://issues.apache.org/jira/browse/SPARK-50063) Add support for Variant in the Spark Connect Scala client
- [[SPARK-50298]](https://issues.apache.org/jira/browse/SPARK-50298) Implement `verifySchema` parameter of `createDataFrame`
- [[SPARK-50306]](https://issues.apache.org/jira/browse/SPARK-50306) Support Python 3.13 in Spark Connect
- [[SPARK-50544]](https://issues.apache.org/jira/browse/SPARK-50544) Implement `StructType.toDDL`
- [[SPARK-50710]](https://issues.apache.org/jira/browse/SPARK-50710) Add support for optional client reconnection to sessions after release
- [[SPARK-50828]](https://issues.apache.org/jira/browse/SPARK-50828) Deprecate `pyspark.ml.connect`
- [[SPARK-46465]](https://issues.apache.org/jira/browse/SPARK-46465) Add `Column.isNaN` in PySpark
- [[SPARK-44753]](https://issues.apache.org/jira/browse/SPARK-44753) XML: pyspark SQL XML reader/writer


### Build and Others

- [[SPARK-44442]](https://issues.apache.org/jira/browse/SPARK-44442) Drop mesos support
- [[SPARK-43831]](https://issues.apache.org/jira/browse/SPARK-43831) Build and Run Spark on Java 21
- [[SPARK-47993]](https://issues.apache.org/jira/browse/SPARK-47993) Drop Python 3.8 support
- [[SPARK-49347]](https://issues.apache.org/jira/browse/SPARK-49347) Deprecate SparkR
- [[SPARK-47923]](https://issues.apache.org/jira/browse/SPARK-47923) Upgrade minimum version of arrow R package to 10.0.0
- [[SPARK-45179]](https://issues.apache.org/jira/browse/SPARK-45179) Upgrade the minimum version of NumPy to 1.21
- [[SPARK-50657]](https://issues.apache.org/jira/browse/SPARK-50657) Upgrade the minimum version of pyarrow to 11.0.0
- [[SPARK-50952]](https://issues.apache.org/jira/browse/SPARK-50952) Include jjwt-related libraries with jjwt-provided profile
- [[SPARK-49964]](https://issues.apache.org/jira/browse/SPARK-49964) Remove ws-rs-api package
- [[SPARK-50383]](https://issues.apache.org/jira/browse/SPARK-50383) Support Virtual Threads in REST Submission API
- [[SPARK-50811]](https://issues.apache.org/jira/browse/SPARK-50811) Support enabling JVM profiler on driver
- [[SPARK-45269]](https://issues.apache.org/jira/browse/SPARK-45269) Use Java 21-jre in K8s Dockerfile
- [[SPARK-45284]](https://issues.apache.org/jira/browse/SPARK-45284) Update SparkR minimum SystemRequirements to Java 17
- [[SPARK-49801]](https://issues.apache.org/jira/browse/SPARK-49801) Upgrade Pandas to 2.2.3
- [[SPARK-44956]](https://issues.apache.org/jira/browse/SPARK-44956) Upgrade Jekyll to 4.3.2 & Webrick to 1.8.1

#### Version upgrade of Java and Scala libraries

| Library Name | Version Change |
| :------------------------------- | :------------------ |
| activation | 1.1.1 -> REMOVED |
| aircompressor | 0.27 -> 2.0.2 |
| algebra | 2.0.1 -> 2.8.0 |
| aliyun-sdk-oss | 3.13.0 -> 3.13.2 |
| antlr4-runtime | 4.9.3 -> 4.13.1 |
| aopalliance-repackaged | 2.6.1 -> 3.0.6 |
| arrow-format | 12.0.1 -> 18.1.0 |
| arrow-memory-core | 12.0.1 -> 18.1.0 |
| arrow-memory-netty | 12.0.1 -> 18.1.0 |
| arrow-memory-netty-buffer-patch | -> 18.1.0 (NEW) |
| arrow-vector | 12.0.1 -> 18.1.0 |
| audience-annotations | 0.5.0 -> 0.12.0 |
| avro | 1.11.4 -> 1.12.0 |
| avro-ipc | 1.11.4 -> 1.12.0 |
| avro-mapred | 1.11.4 -> 1.12.0 |
| aws-java-sdk-bundle | 1.12.262 -> REMOVED |
| bcprov-jdk18on | -> 1.80 (NEW) |
| bonecp | 0.8.0.RELEASE -> REMOVED |
| bundle | -> 2.25.53 (NEW) |
| cats-kernel | 2.1.1 -> 2.8.0 |
| checker-qual | -> 3.43.0 (NEW) |
| chill | 0.10.0 -> 0.10.0 |
| commons-cli | 1.5.0 -> 1.9.0 |
| commons-codec | 1.16.1 -> 1.17.2 |
| commons-compress | 1.23.0 -> 1.27.1 |
| commons-io | 2.16.1 -> 2.18.0 |
| commons-lang3 | 3.12.0 -> 3.17.0 |
| commons-text | 1.10.0 -> 1.13.0 |
| curator-client | 2.13.0 -> 5.7.1 |
| curator-framework | 2.13.0 -> 5.7.1 |
| curator-recipes | 2.13.0 -> 5.7.1 |
| datasketches-java | 3.3.0 -> 6.1.1 |
| datasketches-memory | 2.1.0 -> 3.0.2 |
| derby | 10.14.2.0 -> 10.16.1.1 |
| derbyshared | -> 10.16.1.1 (NEW) |
| derbytools | -> 10.16.1.1 (NEW) |
| error_prone_annotations | -> 2.36.0 (NEW) |
| esdk-obs-java | -> 3.20.4.2 (NEW) |
| failureaccess | -> 1.0.2 (NEW) |
| flatbuffers-java | 1.12.0 -> 24.3.25 |
| gcs-connector | hadoop3-2.2.14 -> hadoop3-2.2.26 |
| gson | 2.2.4 -> 2.11.0 |
| guava | 14.0.1 -> 33.4.0-jre |
| hadoop-aliyun | 3.3.4 -> 3.4.1 |
| hadoop-annotations | 3.3.4 -> 3.4.1 |
| hadoop-aws | 3.3.4 -> 3.4.1 |
| hadoop-azure | 3.3.4 -> 3.4.1 |
| hadoop-azure-datalake | 3.3.4 -> 3.4.1 |
| hadoop-client-api | 3.3.4 -> 3.4.1 |
| hadoop-client-runtime | 3.3.4 -> 3.4.1 |
| hadoop-cloud-storage | 3.3.4 -> 3.4.1 |
| hadoop-huaweicloud | -> 3.4.1 (NEW) |
| hadoop-openstack | 3.3.4 -> REMOVED |
| hadoop-shaded-guava | 1.1.1 -> 1.3.0 |
| hadoop-yarn-server-web-proxy | 3.3.4 -> REMOVED |
| hive-beeline | 2.3.9 -> 2.3.10 |
| hive-cli | 2.3.9 -> 2.3.10 |
| hive-common | 2.3.9 -> 2.3.10 |
| hive-exec | 2.3.9 -> 2.3.10 |
| hive-jdbc | 2.3.9 -> 2.3.10 |
| hive-llap-common | 2.3.9 -> REMOVED |
| hive-metastore | 2.3.9 -> 2.3.10 |
| hive-serde | 2.3.9 -> 2.3.10 |
| hive-service-rpc | 3.1.3 -> 4.0.0 |
| hive-shims | 2.3.9 -> 2.3.10 |
| hive-shims-0.23 | 2.3.9 -> 2.3.10 |
| hive-shims-common | 2.3.9 -> 2.3.10 |
| hive-shims-scheduler | 2.3.9 -> 2.3.10 |
| hk2-api | 2.6.1 -> 3.0.6 |
| hk2-locator | 2.6.1 -> 3.0.6 |
| hk2-utils | 2.6.1 -> 3.0.6 |
| icu4j | -> 76.1 (NEW) |
| istack-commons-runtime | 3.0.8 -> 4.1.2 |
| ivy | 2.5.1 -> 2.5.3 |
| j2objc-annotations | -> 3.0.0 (NEW) |
| jackson-annotations | 2.15.2 -> 2.18.2 |
| jackson-core | 2.15.2 -> 2.18.2 |
| jackson-core-asl | 1.9.13 -> REMOVED |
| jackson-databind | 2.15.2 -> 2.18.2 |
| jackson-dataformat-cbor | 2.15.2 -> 2.18.2 |
| jackson-dataformat-yaml | 2.15.2 -> 2.18.2 |
| jackson-datatype-jsr310 | 2.15.2 -> 2.18.2 |
| jackson-mapper-asl | 1.9.13 -> REMOVED |
| jackson-module-scala | 2.15.2 -> 2.18.2 |
| jakarta.activation-api | -> 2.1.3 (NEW) |
| jakarta.annotation-api | 1.3.5 -> 2.1.1 |
| jakarta.inject | 2.6.1 -> REMOVED |
| jakarta.inject-api | -> 2.0.1 (NEW) |
| jakarta.servlet-api | 4.0.3 -> 5.0.0 |
| jakarta.validation-api | 2.0.2 -> 3.0.2 |
| jakarta.ws.rs-api | 2.1.6 -> 3.0.0 |
| jakarta.xml.bind-api | 2.3.2 -> 4.0.2 |
| java-diff-utils | -> 4.15 (NEW) |
| java-xmlbuilder | -> 1.2 (NEW) |
| javassist | 3.29.2-GA -> 3.30.2-GA |
| javax.servlet-api | 4.0.1 -> REMOVED |
| jaxb-api | 2.2.11 -> REMOVED |
| jaxb-core | -> 4.0.5 (NEW) |
| jaxb-runtime | 2.3.2 -> 4.0.5 |
| jcl-over-slf4j | 2.0.7 -> 2.0.16 |
| jersey-client | 2.40 -> 3.0.16 |
| jersey-common | 2.40 -> 3.0.16 |
| jersey-container-servlet | 2.40 -> 3.0.16 |
| jersey-container-servlet-core | 2.40 -> 3.0.16 |
| jersey-hk2 | 2.40 -> 3.0.16 |
| jersey-server | 2.40 -> 3.0.16 |
| jettison | 1.1 -> 1.5.4 |
| jetty-util | 9.4.56.v20240826 -> 11.0.24 |
| jetty-util-ajax | 9.4.56.v20240826 -> 11.0.24 |
| jjwt-api | -> 0.12.6 (NEW) |
| jjwt-impl | -> 0.12.6 (NEW) |
| jjwt-jackson | -> 0.12.6 (NEW) |
| jline | 2.14.6 -> 3.27.1 |
| joda-time | 2.12.5 -> 2.13.0 |
| json4s-ast | 3.7.0-M11 -> 4.0.7 |
| json4s-core | 3.7.0-M11 -> 4.0.7 |
| json4s-jackson | 3.7.0-M11 -> 4.0.7 |
| json4s-jackson-core | -> 4.0.7 (NEW) |
| json4s-scalap | 3.7.0-M11 -> 4.0.7 |
| jul-to-slf4j | 2.0.7 -> 2.0.16 |
| kryo-shaded | 4.0.2 -> 4.0.3 |
| kubernetes-client | 6.7.2 -> 7.1.0 |
| kubernetes-client-api | 6.7.2 -> 7.1.0 |
| kubernetes-httpclient-okhttp | 6.7.2 -> REMOVED |
| kubernetes-httpclient-vertx | -> 7.1.0 (NEW) |
| kubernetes-model-admissionregistration | 6.7.2 -> 7.1.0 |
| kubernetes-model-apiextensions | 6.7.2 -> 7.1.0 |
| kubernetes-model-apps | 6.7.2 -> 7.1.0 |
| kubernetes-model-autoscaling | 6.7.2 -> 7.1.0 |
| kubernetes-model-batch | 6.7.2 -> 7.1.0 |
| kubernetes-model-certificates | 6.7.2 -> 7.1.0 |
| kubernetes-model-common | 6.7.2 -> 7.1.0 |
| kubernetes-model-coordination | 6.7.2 -> 7.1.0 |
| kubernetes-model-core | 6.7.2 -> 7.1.0 |
| kubernetes-model-discovery | 6.7.2 -> 7.1.0 |
| kubernetes-model-events | 6.7.2 -> 7.1.0 |
| kubernetes-model-extensions | 6.7.2 -> 7.1.0 |
| kubernetes-model-flowcontrol | 6.7.2 -> 7.1.0 |
| kubernetes-model-gatewayapi | 6.7.2 -> 7.1.0 |
| kubernetes-model-metrics | 6.7.2 -> 7.1.0 |
| kubernetes-model-networking | 6.7.2 -> 7.1.0 |
| kubernetes-model-node | 6.7.2 -> 7.1.0 |
| kubernetes-model-policy | 6.7.2 -> 7.1.0 |
| kubernetes-model-rbac | 6.7.2 -> 7.1.0 |
| kubernetes-model-resource | 6.7.2 -> 7.1.0 |
| kubernetes-model-scheduling | 6.7.2 -> 7.1.0 |
| kubernetes-model-storageclass | 6.7.2 -> 7.1.0 |
| libthrift | 0.12.0 -> 0.16.0 |
| listenablefuture | -> 9999.0-empty-to-avoid-conflict-with-guava (NEW) |
| log4j-1.2-api | 2.20.0 -> 2.24.3 |
| log4j-api | 2.20.0 -> 2.24.3 |
| log4j-core | 2.20.0 -> 2.24.3 |
| log4j-layout-template-json | -> 2.24.3 (NEW) |
| log4j-slf4j2-impl | 2.20.0 -> 2.24.3 |
| logging-interceptor | 3.12.12 -> REMOVED |
| mesos | 1.4.3 -> REMOVED |
| metrics-core | 4.2.19 -> 4.2.30 |
| metrics-graphite | 4.2.19 -> 4.2.30 |
| metrics-jmx | 4.2.19 -> 4.2.30 |
| metrics-json | 4.2.19 -> 4.2.30 |
| metrics-jvm | 4.2.19 -> 4.2.30 |
| netty-all | 4.1.96.Final -> 4.1.118.Final |
| netty-buffer | 4.1.96.Final -> 4.1.118.Final |
| netty-codec | 4.1.96.Final -> 4.1.118.Final |
| netty-codec-dns | -> 4.1.118.Final (NEW) |
| netty-codec-http | 4.1.96.Final -> 4.1.118.Final |
| netty-codec-http2 | 4.1.96.Final -> 4.1.118.Final |
| netty-codec-socks | 4.1.96.Final -> 4.1.118.Final |
| netty-common | 4.1.96.Final -> 4.1.118.Final |
| netty-handler | 4.1.96.Final -> 4.1.118.Final |
| netty-handler-proxy | 4.1.96.Final -> 4.1.118.Final |
| netty-resolver | 4.1.96.Final -> 4.1.118.Final |
| netty-resolver-dns | -> 4.1.118.Final (NEW) |
| netty-tcnative-boringssl-static | -> 2.0.70.Final (NEW) |
| netty-tcnative-classes | -> 2.0.70.Final (NEW) |
| netty-transport | 4.1.96.Final -> 4.1.118.Final |
| netty-transport-classes-epoll | 4.1.96.Final -> 4.1.118.Final |
| netty-transport-classes-kqueue | 4.1.96.Final -> 4.1.118.Final |
| netty-transport-native-epoll | 4.1.96.Final -> 4.1.118.Final |
| netty-transport-native-kqueue | 4.1.96.Final -> 4.1.118.Final |
| netty-transport-native-unix-common | 4.1.96.Final -> 4.1.118.Final |
| orc-core | 1.9.6 -> 2.1.2 |
| orc-format | -> 1.1.0 (NEW) |
| orc-mapreduce | 1.9.6 -> 2.1.2 |
| orc-shims | 1.9.6 -> 2.1.2 |
| parquet-column | 1.13.1 -> 1.15.2 |
| parquet-common | 1.13.1 -> 1.15.2 |
| parquet-encoding | 1.13.1 -> 1.15.2 |
| parquet-format-structures | 1.13.1 -> 1.15.2 |
| parquet-hadoop | 1.13.1 -> 1.15.2 |
| parquet-jackson | 1.13.1 -> 1.15.2 |
| pickle | 1.3 -> 1.5 |
| py4j | 0.10.9.7 -> 0.10.9.9 |
| rocksdbjni | 8.3.2 -> 9.8.4 |
| RoaringBitmap | 0.9.45 -> 1.3.0 |
| scala-collection-compat | 2.7.0 -> 2.7.0 |
| scala-compiler | 2.12.18 -> 2.13.16 |
| scala-library | 2.12.18 -> 2.13.16 |
| scala-parallel-collections | -> 1.2.0 (NEW) |
| scala-parser-combinators | 2.3.0 -> 2.4.0 |
| scala-reflect | 2.12.18 -> 2.13.16 |
| scala-xml | 2.1.0 -> 2.3.0 |
| shims | 0.9.45 -> REMOVED |
| slf4j-api | 2.0.7 -> 2.0.16 |
| snakeyaml | 2.0 -> 2.3 |
| snakeyaml-engine | 2.6 -> 2.9 |
| snappy-java | 1.1.10.5 -> 1.1.10.7 |
| spire | 0.17.0 -> 0.18.0 |
| spire-macros | 0.17.0 -> 0.18.0 |
| spire-platform | 0.17.0 -> 0.18.0 |
| spire-util | 0.17.0 -> 0.18.0 |
| stream | 2.9.6 -> 2.9.8 |
| threeten-extra | 1.7.1 -> 1.8.0 |
| tink | 1.9.0 -> 1.16.0 |
| transaction-api | 1.1 -> REMOVED |
| vertx-auth-common | -> 4.5.12 (NEW) |
| vertx-core | -> 4.5.12 (NEW) |
| vertx-web-client | -> 4.5.12 (NEW) |
| vertx-web-common | -> 4.5.12 (NEW) |
| wildfly-openssl | 1.0.7.Final -> 2.2.5.Final |
| xbean-asm9-shaded | 4.23 -> 4.26 |
| xmlschema-core | -> 2.3.1 (NEW) |
| xz | 1.9 -> 1.10 |
| zjsonpatch | 0.3.0 -> 7.1.0 |
| zookeeper | 3.6.3 -> 3.9.3 |
| zookeeper-jute | 3.6.3 -> 3.9.3 |
| zstd-jni | 1.5.5-4 -> 1.5.6-9 |


### Credits

Last but not least, this release would not have been possible without the following contributors:
Aleksei Shishkin, Adam Binford, Aiden Dong, Albert Ziegler, Alden Lau, Aleksandar Tomic, Alessandro Bellina, Alex Khakhlyuk, Alice Sayutina, Allison Wang, Amanda Liu, Amy Tsai, Andrej Gobeljić, Andrew Xue, Andrey Gubichev, Andy Lam, Anish Shrigondekar, Ankur Dave, Anthony Wainer, Anton Lykov, Anton Okolnychyi, Arzav Jain, Attila Zsolt Piros, Avery Qi, Babatunde Micheal Okutubo, Bhuwan Sahni, Bill Schneider, BingKun Pan, Binjie Yang, Biruk Tesfaye, Bjørn Jørgensen, Bo Gao, Bo Xiong, Bo Zhang, Bobby Wang, Bowen Liang, Bruce Robbins, Burak Yavuz, Carter Fendley, Chaerim Yeo, Changgyoo Park, Chao Sun, Chaoqin Li, Cheng Pan, Chenghao Lyu, Chenhao Li, Chenyu Zheng, Chirag Singh, Chloe He, Chris Nauroth, Chris Twiner, Christos Stavrakakis, Cosmin Dumitru, Costas Zarifis, Cuong Nguyen, Daniel Tenedorio, David Cashman, David Milicevic, Davin Tjong, Deepayan Patra, Dejan Krakovic, Dereck Li, Desmond Cheong, Dmitry Zhyhimont, Dmytro Tsyliuryk, Dongjoon Hyun, Dušan Tišma, Eduard Tudenhoefner, Emil Ejbyfeldt, Enrico Minack, Enrique Rebollo, Eren Avsarogullari, Eric Blanco, Eric Marnadi, Eric Maynard, Evan Wu, Fanyue Xia, Fokko Driesprong, Frank Wong, Fredrik Klauss, Gabor Roczei, Gabriel Dahia, Garland Zhang, Gene Pang, Gengliang Wang, Giambattista Bloisi, Gideon P, Gideon Potok, Guihua Wen, Gurpreet Singh, Haejoon Lee, Haiyang Sun, Hannah Amundson, Hanzhong Yuan, Haoyu Qi, Haoyu Weng, Harsh Motwani, Harsh Panchal, Harunobu Daikoku, Hasnain Lakhani, Hayssam Saleh, Helin Jin, Herman Van Hovell, Himadri Pal, HiuFung Kwok, Holden Karau, Huanli Wang, Huaxin Gao, Hubert Kaczmarczyk, Huw Campbell, Hyukjin Kwon, Ian Cook, Ismaël Mejía, Ivan Jevtic, Ivan Mitic, Ivan Sadikov, Izek Greenfield, Jack Chen, Jackie Zhang, Jacob Zheng, Jared Wang, Jason Li, Jean-Francois Desjeans Gauthier, Jerry Peng, Jerry Zhou, Jia Fan, Jiaan Geng, Jiaheng Tang, Jiale Tan, Jiashen Cao, Jiayi Liu, Jim Baugh, Jing Zhan, Jinhai Chen, Johan Lasperas, Jonathan Albrecht, Josh Rosen, Jovan Markovic, Jovan Pavlovic, João Correia, Julek Sompolski, Juliusz Sompolski, Junbo Wang, Junfan Zhang, Jungtaek Lim, Junqing Li, Junyu Chen, Justontheway, Kaashif Hymabaccus, Kaifei Yi, Karim Ramadan, Kaz, Kazuyuki Tanimura, Kelvin Jiang, Kent Yao, Kevin Nacios, Khalid Mammadov, Kivinsae Fang, Knight Chess, Kousuke Saruta, Kris Mok, Kun Wan, Lantao Jin, Liang-Chi Hsieh, Lingkai Kong, Linhong Liu, Liu Cao, Livia Zhu, Longfei Jiang, Luca Canali, Lucy Yao, Maciej Szymkiewicz, Mahesh Kumar Behera, Maksim Konstantinov, Mark Andreev, Mark Jarvin, Marko Ilić, Marko Nikacevic, Martin Grund, Maryann Xue, Mathew Jacob, Matt Braymer-Hayes, Max Gekk, Mayur Bhosale, Menelaos Karavelas, Mengran Lan, Mete Can Akar, Michael Chen, Michael Zhang, Michał Kimborowicz, Mihailo Aleksic, Mihailo Milosevic, Mihailo Timotic, Mikhail Nikoliukin, Milan Cupac, Milan Dankovic, Milan Stefanovic, Min Zhao, Mingkang Li, Mingliang Zhu, Momcilo Mrkaic, Motoyuki Kimura, Mridul Muralidharan, Nebojsa Savic, Neil Ramaswamy, Nemanja Boric, Nemanja Petrovic, Nicholas Chammas, Nicholas Jiang, Nick Young, Nicolas Fraison, Nikhil Sheoran, Nikola Mandic, Niranjan Jayakar, Ole Sasse, Oleksiy Dyagilev, Pablo Langa, Paddy Xu, Parth Chandra, Parth Upadhyay, Patrick Marx, Paul Staab, Petar Vasiljevic, Peter Kaszt, Peter Toth, Phil Dakin, Phil Walker, Ping Xu, Prashanth Menon, Prathit Malik, Qi Tan, Qi Zhu, Qiang Yang, Qingbo Jiao, Raghu Angadi, Rameshkrishnan Muthusamy, Rastko Sapic, Ravi Jain, Raza Jafri, Reza Safi, Richard Chen, Riya Verma, Rob Reeves, Robert (Bobby) Evans, Robert Dillitz, Ron Serruya, Rui Wang, Ruifeng Zheng, Russell Spitzer, Ruzel Ibragimov, Saidatt Sinai Amonkar, Saksham Garg, Sakthi, Sakthi Vel, Sander Goos, Sandip Agarwala, Scott Schenkein, Sean Owen, Sebastian Hillig, Serge Rielau, Shaofeng Li, Shaoyun Chen, Shu Wang, Shuiahu Xie, Shujing Yang, Shuyan Zhang, Shuyou Dong, Siying Dong, Stefan Bukorovic, Stefan Kandic, Steve Loughran, Steve Weis, Stevo Mitric, Subham Singhal, Sumeet Varma, Sunan Xiang, Supun Nakandala, Szehon Ho, Szilard Miko, Takawa Akirayo, Takuya Ueshin, Tanel Kiis, Tao Li, Ted Jenks, Tengfei Huang, Terry Kim, Terry Wang, Thang Long VU, Thomas Hart, Tianhan Hu, Tigran Manasyan, Tim Lee, Tinglong Liao, Tom Sisso, Tom Van Bussel, Tong Wei, Tuan Pham, Uros Bojanic, Uros Stankovic, Utkarsh Agarwal, Vadim Patsalo, Valentin, Venkata Sai Akhil Gudesa, Viktor Lučić, Vinod KC, Vitalii Li, Vlad Rozov, Vladan Vasić, Vladimir Golubev, Vsevolod Stepanov, Wan Kun, Warren Zhu, Wei Guo, Wei Liu, Weichen Xu, Weitao Wen, Wenchen Fan, Willi Raschkowski, William Hyun, Wonseok Yang, Xi Chen, Xi Liang, Xi Lyu, Xianyang Liu, Xiaodong Huan, Xiaoguang Sun, Xiaoping Huang, Xiduo You, Xingbo Jiang, Xinrong Meng, Xinyi Yu, Xinyu Zou, Yanan Xin, Yang Jie, Yannis Sismanis, Yanxiang Cui, Yaohua Zhao, Yi Wu, Yi Zhu, Yifei Wei, Yifeng Hua, Yihong He, Yongyuan Liang, Yousof Hosny, Yu Xu, Yuanjian Li, Yuchen Liu, Yuchuan Huang, Yuming Wang, Zachary Steudel, Zamil Majdy, Zerui Bao, Zeyu Chen, Zhang Liang, Zhen Li, Zhen Wang, Zhihong Yu, Zhiming She, Zhipeng Mao, Zhou JIANG, Zhou Yifan, Zhyhimont Dmitry, Ziqi Liu, Zongze Li, advancedxy, alex35736, antban, camilesing, chenyu, dengziming, dev-lpq, hongshaoyang, huangsheng, huangzhir, jjayadeep06, junyuc25, laglangyue, morvenhuang, rorueda, xin-aurora, xleoken, xunxunmimi5577, yabola, zekai-li