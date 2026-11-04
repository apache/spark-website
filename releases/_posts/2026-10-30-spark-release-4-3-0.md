---
layout: post
title: Spark Release 4.3.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Apache Spark 4.3.0 is the fourth release of the Spark 4.x line. With significant contributions from the open-source community, this release addressed over 1,100 Jira tickets with contributions from more than 210 individuals.

This release brings stateful processing to Structured Streaming Real-Time Mode, adds history-preserving SCD Type 2 Auto CDC to Spark Declarative Pipelines, and makes Spark faster to iterate with on small data. It also marks the start of a quarterly feature-release cadence.

Real-Time Mode now supports stateful queries: streaming aggregation, `dropDuplicates`, and `transformWithState` run with end-to-end latency on the order of 100 milliseconds using the familiar Structured Streaming APIs. Underneath, Spark gains native concurrent stage scheduling and pipelined shuffles, so producer and consumer stages can run at the same time.

Auto CDC adds Slowly Changing Dimension (SCD) Type 2 through Python, SQL, and Spark Connect, so pipelines can track how records change over time instead of overwriting the latest value.

Work toward faster queries in local laptop mode reduces fixed execution overhead on small data, with opt-in shuffle-free single-task execution for small queries and opt-in Arrow-native Dataset caching.

Spark Connect adds REST endpoints for inspecting sessions and operations, operation IDs for end-to-end request attribution, and a more complete JDBC driver. SQL adds `JSON_TABLE` and functions for transforming `VARIANT` values, ANSI `UNNEST`, SQL `ASOF JOIN`, and a preview of nanosecond-precision timestamps.

To download Apache Spark 4.3.0, please visit the [downloads](https://spark.apache.org/downloads.html) page. You can consult JIRA for the [detailed changes](https://issues.apache.org/jira/issues/?jql=project%20%3D%20SPARK%20AND%20fixVersion%20%3D%204.3.0).

* This will become a table of contents (this text will be scraped).
{:toc}

### Highlights
- **[[SPARK-58635]](https://issues.apache.org/jira/browse/SPARK-58635)**, **[[SPARK-57228]](https://issues.apache.org/jira/browse/SPARK-57228)**, **[[SPARK-58508]](https://issues.apache.org/jira/browse/SPARK-58508)** Stateful Real-Time Mode — streaming aggregation, `dropDuplicates`, and `transformWithState` with end-to-end latency on the order of 100 milliseconds, built on native concurrent stage scheduling and pipelined shuffles
- **[[SPARK-58321]](https://issues.apache.org/jira/browse/SPARK-58321)**, **[[SPARK-58247]](https://issues.apache.org/jira/browse/SPARK-58247)**, **[[SPARK-58261]](https://issues.apache.org/jira/browse/SPARK-58261)** SCD Type 2 in Auto CDC — preserve the history of every record through Python, SQL, and Spark Connect
- **[[SPARK-57851]](https://issues.apache.org/jira/browse/SPARK-57851)**, **[[SPARK-57268]](https://issues.apache.org/jira/browse/SPARK-57268)** Faster queries on small data — opt-in shuffle-free single-task execution for small queries and Arrow-native Dataset caching for faster iteration on small data
- **[[SPARK-57941]](https://issues.apache.org/jira/browse/SPARK-57941)**, **[[SPARK-58547]](https://issues.apache.org/jira/browse/SPARK-58547)** Spark Connect REST endpoints to list and inspect sessions and operations, with operation IDs for end-to-end request attribution
- **[[SPARK-58366]](https://issues.apache.org/jira/browse/SPARK-58366)**, **[[SPARK-57804]](https://issues.apache.org/jira/browse/SPARK-57804)** `JSON_TABLE` and `VARIANT` transformation functions (`variant_set`, `variant_insert`, `variant_delete`, ...) to process nested documents natively in SQL
- **[[SPARK-58092]](https://issues.apache.org/jira/browse/SPARK-58092)** SQL `ASOF JOIN` for point-in-time matching of events to the information available at the time
- **[[SPARK-56876]](https://issues.apache.org/jira/browse/SPARK-56876)** Nanosecond-precision timestamps `TIMESTAMP_NTZ(p)` / `TIMESTAMP_LTZ(p)` (preview)

---

### SQL Foundation
- [[SPARK-58366]](https://issues.apache.org/jira/browse/SPARK-58366) Support the `JSON_TABLE` table-valued function
- [[SPARK-58419]](https://issues.apache.org/jira/browse/SPARK-58419) Support ANSI SQL `UNNEST` in the `FROM` clause
- [[SPARK-57421]](https://issues.apache.org/jira/browse/SPARK-57421) Support `@`-syntax version time travel on table names
- [[SPARK-58012]](https://issues.apache.org/jira/browse/SPARK-58012) Support `@`-syntax timestamp time travel on table names
- [[SPARK-52719]](https://issues.apache.org/jira/browse/SPARK-52719) Support scalar UDFs in table-valued function arguments
- [[SPARK-54831]](https://issues.apache.org/jira/browse/SPARK-54831) Support `COMMENT ON COLUMN` for table columns
- [[SPARK-58065]](https://issues.apache.org/jira/browse/SPARK-58065) Support column lists for `INSERT ... REPLACE WHERE`
- [[SPARK-57681]](https://issues.apache.org/jira/browse/SPARK-57681) Support dynamic table options for `UPDATE`
- [[SPARK-58007]](https://issues.apache.org/jira/browse/SPARK-58007) Support dynamic table options for `MERGE`
- [[SPARK-58008]](https://issues.apache.org/jira/browse/SPARK-58008) Support dynamic table options for `DELETE`
- [[SPARK-57993]](https://issues.apache.org/jira/browse/SPARK-57993) Support an advisory partition size in the `REBALANCE` hint
- [[SPARK-53840]](https://issues.apache.org/jira/browse/SPARK-53840) Add `AS JSON` output for `SHOW TABLES` and `SHOW TABLE EXTENDED`
- [[SPARK-54710]](https://issues.apache.org/jira/browse/SPARK-54710) Add `AS JSON` output for `SHOW PARTITIONS`
- [[SPARK-58260]](https://issues.apache.org/jira/browse/SPARK-58260) Add a config to render Hive DDL in `SHOW CREATE TABLE` for Hive tables
- [[SPARK-58052]](https://issues.apache.org/jira/browse/SPARK-58052) Throw overflow errors for `ceil` and `floor` in ANSI mode
- [[SPARK-57775]](https://issues.apache.org/jira/browse/SPARK-57775) Return one row for `GROUP BY GROUPING SETS (())` over empty input
- [[SPARK-57194]](https://issues.apache.org/jira/browse/SPARK-57194) Add the `preOperatorOptimizationRules` extension point to the Optimizer
- [[SPARK-56147]](https://issues.apache.org/jira/browse/SPARK-56147) Use a parser-based SQL statement splitter in the `spark-sql` CLI
- [[SPARK-57518]](https://issues.apache.org/jira/browse/SPARK-57518) Make Thrift server JDBC metadata operations DataSource V2 catalog-aware (opt-in via `spark.sql.thriftServer.catalogMetadata.enabled`)
- **SQL support for ASOF join** ([[SPARK-58092]](https://issues.apache.org/jira/browse/SPARK-58092))
  - [[SPARK-58122]](https://issues.apache.org/jira/browse/SPARK-58122) Add SQL `ASOF JOIN ... MATCH_CONDITION` syntax, enabled with `spark.sql.join.asofJoin.enabled` (off by default)
  - [[SPARK-58124]](https://issues.apache.org/jira/browse/SPARK-58124) Sort-merge physical execution for SQL `ASOF JOIN`
- **Add BIN BY relation operator for aligning range-typed rows to fixed bin boundaries** ([[SPARK-57133]](https://issues.apache.org/jira/browse/SPARK-57133))
  - [[SPARK-57440]](https://issues.apache.org/jira/browse/SPARK-57440) `BIN BY` is available behind `spark.sql.binByRelationOperator.enabled` (off by default)
  - [[SPARK-58003]](https://issues.apache.org/jira/browse/SPARK-58003) Physical execution for `BIN BY`
  - [[SPARK-58064]](https://issues.apache.org/jira/browse/SPARK-58064) Filter pushdown for `BIN BY`
  - [[SPARK-58138]](https://issues.apache.org/jira/browse/SPARK-58138) Preserve child output partitioning through `BIN BY`

#### Built-in Functions
- [[SPARK-56820]](https://issues.apache.org/jira/browse/SPARK-56820) Add the `counter_diff` window function for converting cumulative counters to deltas
- [[SPARK-57253]](https://issues.apache.org/jira/browse/SPARK-57253) Add the `jaro_winkler_similarity` function
- [[SPARK-58399]](https://issues.apache.org/jira/browse/SPARK-58399) Add the `collect_union` aggregate function
- [[SPARK-58295]](https://issues.apache.org/jira/browse/SPARK-58295) Add the `to_base32` and `from_base32` functions

#### VARIANT manipulation
- [[SPARK-57804]](https://issues.apache.org/jira/browse/SPARK-57804) Add the `variant_set` expression, plus `try_variant_set` ([[SPARK-58221]](https://issues.apache.org/jira/browse/SPARK-58221))
- [[SPARK-57641]](https://issues.apache.org/jira/browse/SPARK-57641) Add the `variant_insert` expression, plus `try_variant_insert` ([[SPARK-58035]](https://issues.apache.org/jira/browse/SPARK-58035))
- [[SPARK-57417]](https://issues.apache.org/jira/browse/SPARK-57417) Add the `variant_delete` expression
- [[SPARK-58061]](https://issues.apache.org/jira/browse/SPARK-58061) Add the `variant_array_append` expression, plus `try_variant_array_append` ([[SPARK-58222]](https://issues.apache.org/jira/browse/SPARK-58222))
- [[SPARK-58062]](https://issues.apache.org/jira/browse/SPARK-58062) Add the `variant_strip_nulls` expression

#### TIME type
- [[SPARK-57551]](https://issues.apache.org/jira/browse/SPARK-57551) Extend `TIME` precision to nanoseconds (`TIME(p)` with `p` up to 9)
- [[SPARK-57558]](https://issues.apache.org/jira/browse/SPARK-57558) Add the `LOCALTIME` datetime value function
- [[SPARK-57618]](https://issues.apache.org/jira/browse/SPARK-57618) Support casting between `TIME(p)` and `TIMESTAMP_NTZ(q)` / `TIMESTAMP_LTZ(q)` ([[SPARK-57660]](https://issues.apache.org/jira/browse/SPARK-57660))
- [[SPARK-57572]](https://issues.apache.org/jira/browse/SPARK-57572) Infer `TIME` during CSV and JSON schema inference, and in XML ([[SPARK-57634]](https://issues.apache.org/jira/browse/SPARK-57634))
- [[SPARK-57555]](https://issues.apache.org/jira/browse/SPARK-57555) Support `TIME` in the built-in JDBC data source and the Protobuf connector ([[SPARK-57573]](https://issues.apache.org/jira/browse/SPARK-57573))
- [[SPARK-57571]](https://issues.apache.org/jira/browse/SPARK-57571) `TIME` predicate pushdown to ORC, and Parquet/ORC aggregate pushdown ([[SPARK-57568]](https://issues.apache.org/jira/browse/SPARK-57568))
- [[SPARK-57557]](https://issues.apache.org/jira/browse/SPARK-57557) Support `TIME` in quantile aggregates, `approx_top_k` ([[SPARK-57848]](https://issues.apache.org/jira/browse/SPARK-57848)), and `to_char`/`to_varchar` ([[SPARK-57575]](https://issues.apache.org/jira/browse/SPARK-57575))

#### Nanosecond-precision timestamps (preview)
- [[SPARK-56876]](https://issues.apache.org/jira/browse/SPARK-56876) Add the `TIMESTAMP_NTZ(p)` and `TIMESTAMP_LTZ(p)` types with precision `p` from 7 through 9, as a preview enabled with `spark.sql.timestampNanosTypes.enabled` (off by default)
- [[SPARK-56965]](https://issues.apache.org/jira/browse/SPARK-56965) SQL parser support for `TIMESTAMP_NTZ(p)` and `TIMESTAMP_LTZ(p)`
- [[SPARK-57293]](https://issues.apache.org/jira/browse/SPARK-57293) Casts between nanosecond- and microsecond-precision timestamps, and to and from `DATE`, `TIME`, and strings
- [[SPARK-57454]](https://issues.apache.org/jira/browse/SPARK-57454) Type coercion and widening rules for nanosecond-precision timestamps
- [[SPARK-57526]](https://issues.apache.org/jira/browse/SPARK-57526) Add the `timestamp_nanos` and `unix_nanos` ([[SPARK-57527]](https://issues.apache.org/jira/browse/SPARK-57527)) functions, and the precision argument in `current_timestamp(p)` ([[SPARK-57837]](https://issues.apache.org/jira/browse/SPARK-57837))
- [[SPARK-57816]](https://issues.apache.org/jira/browse/SPARK-57816) Datetime functions (`date_format`, `date_trunc`, `EXTRACT`, `hour`/`minute`/`second`, `unix_*`) over nanosecond-precision timestamps
- [[SPARK-57501]](https://issues.apache.org/jira/browse/SPARK-57501) ANSI interval arithmetic and timestamp subtraction for nanosecond-precision timestamps
- [[SPARK-57102]](https://issues.apache.org/jira/browse/SPARK-57102) Parquet support, including the vectorized reader ([[SPARK-57828]](https://issues.apache.org/jira/browse/SPARK-57828)) and predicate pushdown ([[SPARK-57822]](https://issues.apache.org/jira/browse/SPARK-57822))
- [[SPARK-57455]](https://issues.apache.org/jira/browse/SPARK-57455) ORC, JSON, CSV, XML, Avro, and JDBC data source support for nanosecond-precision timestamps
- [[SPARK-57160]](https://issues.apache.org/jira/browse/SPARK-57160) Arrow and Spark Connect support for nanosecond-precision timestamp types and literals

#### Notable fixes
- [[SPARK-60304]](https://issues.apache.org/jira/browse/SPARK-60304) Fix subplan merging losing a shared lower filter or a reused filter attribute ([[SPARK-60084]](https://issues.apache.org/jira/browse/SPARK-60084)), which could produce wrong results
- [[SPARK-57956]](https://issues.apache.org/jira/browse/SPARK-57956) Fix AQE incorrectly eliminating a global `LIMIT` over a non-materialized query stage
- [[SPARK-60508]](https://issues.apache.org/jira/browse/SPARK-60508) Fix wrong results from `semanticEquals` of higher-order functions capturing lambda variables
- [[SPARK-58384]](https://issues.apache.org/jira/browse/SPARK-58384) Preserve null semantics in `OptimizeJoinCondition`
- [[SPARK-58481]](https://issues.apache.org/jira/browse/SPARK-58481) Fix `IN (subquery)` returning wrong results when the subquery output contains NULLs
- [[SPARK-59434]](https://issues.apache.org/jira/browse/SPARK-59434) Do not push non-deterministic predicates into CTE definitions
- [[SPARK-58959]](https://issues.apache.org/jira/browse/SPARK-58959) Fix `PIVOT` with duplicate values corrupting the aggregation buffer
- [[SPARK-58816]](https://issues.apache.org/jira/browse/SPARK-58816) Fix `INSERT` with a column list to resolve structs inside arrays and maps positionally
- [[SPARK-57727]](https://issues.apache.org/jira/browse/SPARK-57727) Fix incorrect query results from constraint inference substituting attributes with non-binary-stable collations
- [[SPARK-58204]](https://issues.apache.org/jira/browse/SPARK-58204) Fix expressions that held unprotected mutable state (regex, `translate`, `format_number`, JSON/CSV/XML ([[SPARK-58205]](https://issues.apache.org/jira/browse/SPARK-58205)), `ApplyFunctionExpression` ([[SPARK-58578]](https://issues.apache.org/jira/browse/SPARK-58578)), and Hive `GenericUDF` ([[SPARK-58792]](https://issues.apache.org/jira/browse/SPARK-58792))), which could corrupt results under concurrent evaluation

### Query API
- [[SPARK-55886]](https://issues.apache.org/jira/browse/SPARK-55886) Add `DataFrame.zip` for merging column-projected DataFrames
- [[SPARK-57284]](https://issues.apache.org/jira/browse/SPARK-57284) Add Scala and Python bindings for vector functions
- [[SPARK-46776]](https://issues.apache.org/jira/browse/SPARK-46776) Support `pa.ChunkedArray` columns in `createDataFrame` from pandas
- [[SPARK-57190]](https://issues.apache.org/jira/browse/SPARK-57190) Fix the API inconsistency of the 4-argument `regexp_replace`
- [[SPARK-57860]](https://issues.apache.org/jira/browse/SPARK-57860) Make the storage level of MLlib intermediate datasets configurable for KMeans and ALS
- [[SPARK-34591]](https://issues.apache.org/jira/browse/SPARK-34591) Add decision tree pruning as a parameter

#### Pandas API on Spark
- [[SPARK-40336]](https://issues.apache.org/jira/browse/SPARK-40336) Implement `DataFrameGroupBy.cov`
- [[SPARK-40337]](https://issues.apache.org/jira/browse/SPARK-40337) Implement `SeriesGroupBy.describe`
- [[SPARK-40340]](https://issues.apache.org/jira/browse/SPARK-40340) Implement `Rolling.sem` and `Expanding.sem`
- [[SPARK-40341]](https://issues.apache.org/jira/browse/SPARK-40341) Implement `Rolling.median` and `Expanding.median`
- [[SPARK-40373]](https://issues.apache.org/jira/browse/SPARK-40373) Implement `ps.show_versions`
- [[SPARK-46158]](https://issues.apache.org/jira/browse/SPARK-46158) Support axis columns in `DataFrame.xs`

### Connectors

#### Data Source V2 framework
- [[SPARK-57644]](https://issues.apache.org/jira/browse/SPARK-57644) Support generated column values on V2 table writes
- [[SPARK-55347]](https://issues.apache.org/jira/browse/SPARK-55347) Pass generated column expressions to DSv2 connectors
- [[SPARK-58523]](https://issues.apache.org/jira/browse/SPARK-58523) Add a Catalyst runtime filtering interface for DSv2 scans
- [[SPARK-55617]](https://issues.apache.org/jira/browse/SPARK-55617) Push down `variant_get` filters to DSv2 sources
- [[SPARK-56660]](https://issues.apache.org/jira/browse/SPARK-56660) Decompose struct equality into field predicates for data source pushdown

#### Reading from archives (opt-in)
- [[SPARK-57135]](https://issues.apache.org/jira/browse/SPARK-57135) Read CSV files inside tar archives, with schema inference ([[SPARK-57321]](https://issues.apache.org/jira/browse/SPARK-57321))
- [[SPARK-57419]](https://issues.apache.org/jira/browse/SPARK-57419) Read and infer JSON schema from tar archives
- [[SPARK-57479]](https://issues.apache.org/jira/browse/SPARK-57479) Read and infer XML schema from tar archives
- [[SPARK-57478]](https://issues.apache.org/jira/browse/SPARK-57478) Read text files from tar archives
- [[SPARK-57481]](https://issues.apache.org/jira/browse/SPARK-57481) Read and infer Avro schema from tar archives
- [[SPARK-57590]](https://issues.apache.org/jira/browse/SPARK-57590) Read and infer Parquet schema from archives
- [[SPARK-57591]](https://issues.apache.org/jira/browse/SPARK-57591) Read and infer ORC schema from archives
- [[SPARK-57705]](https://issues.apache.org/jira/browse/SPARK-57705) Read CSV, JSON, text, and XML files from zip archives
- [[SPARK-58246]](https://issues.apache.org/jira/browse/SPARK-58246) Read files from 7z archives
- [[SPARK-58382]](https://issues.apache.org/jira/browse/SPARK-58382) Support archives in the `binaryFile` source via the `wholeFile` option
- [[SPARK-58609]](https://issues.apache.org/jira/browse/SPARK-58609) Add the `archivePathFilter` option to select entries inside archives

#### File Sources
- [[SPARK-57354]](https://issues.apache.org/jira/browse/SPARK-57354) Add the `ignoredPathSegmentRegex` data source option and config
- [[SPARK-57678]](https://issues.apache.org/jira/browse/SPARK-57678) Add the `explodeEmbeddedArray` JSON option for streaming scans of embedded arrays
- [[SPARK-57802]](https://issues.apache.org/jira/browse/SPARK-57802) Make XML schema inference incremental, aligning with CSV

#### JDBC, Hive, and Kafka
- [[SPARK-52825]](https://issues.apache.org/jira/browse/SPARK-52825) Register existing JDBC dialects for additional URL prefixes
- [[SPARK-59330]](https://issues.apache.org/jira/browse/SPARK-59330) Add an option to defer Hive `InputFormat` and `OutputFormat` class initialization
- [[SPARK-59328]](https://issues.apache.org/jira/browse/SPARK-59328) Add an option to reject specified Kafka options in the Kafka data source

#### Notable fixes
- [[SPARK-58112]](https://issues.apache.org/jira/browse/SPARK-58112) Keep nondeterministic filters out of DSv2 Catalyst and V2 filter pushdown ([[SPARK-58207]](https://issues.apache.org/jira/browse/SPARK-58207)), so Spark evaluates them after the scan
- [[SPARK-59108]](https://issues.apache.org/jira/browse/SPARK-59108) Fix Avro positional field matching under column pruning

### UDF (User Defined Functions)
- [[SPARK-55206]](https://issues.apache.org/jira/browse/SPARK-55206) Experimental transpilation of simple Python UDFs to Catalyst expressions (e.g. `len()` to `length` ([[SPARK-55214]](https://issues.apache.org/jira/browse/SPARK-55214))), enabled with `spark.sql.experimental.optimizer.transpilePyUDFs`
- [[SPARK-56413]](https://issues.apache.org/jira/browse/SPARK-56413) Add a gRPC UDF execution protocol and logical/physical planning nodes ([[SPARK-56661]](https://issues.apache.org/jira/browse/SPARK-56661)) as groundwork for language-agnostic UDFs
- [[SPARK-57271]](https://issues.apache.org/jira/browse/SPARK-57271) Optionally print local variables in Python UDF tracebacks
- [[SPARK-57593]](https://issues.apache.org/jira/browse/SPARK-57593) Bound pickled Python UDF input batches by size, with instrumentation
- [[SPARK-58601]](https://issues.apache.org/jira/browse/SPARK-58601) Require `mapInPandas` functions to return a strict iterator

### Streaming
- [[SPARK-58724]](https://issues.apache.org/jira/browse/SPARK-58724) Incremental state cleanup for streaming `dropDuplicates`

#### Real-Time Mode
- [[SPARK-58508]](https://issues.apache.org/jira/browse/SPARK-58508) Support stateful queries in Real-Time Mode, including `dropDuplicates`, by running them on pipelined shuffles
- [[SPARK-58635]](https://issues.apache.org/jira/browse/SPARK-58635) Support streaming aggregation in Real-Time Mode
- [[SPARK-57228]](https://issues.apache.org/jira/browse/SPARK-57228) Support Scala/Java `transformWithState` in Real-Time Mode
- [[SPARK-57281]](https://issues.apache.org/jira/browse/SPARK-57281) Remove the `@Experimental` annotation from Real-Time Mode
- [[SPARK-58131]](https://issues.apache.org/jira/browse/SPARK-58131) Support async progress tracking in Real-Time Mode
- [[SPARK-58185]](https://issues.apache.org/jira/browse/SPARK-58185) Add `PipelinedShuffleDependency`, letting consumers read while producers are still running, and route each shuffle to a shuffle manager by dependency type
- [[SPARK-58263]](https://issues.apache.org/jira/browse/SPARK-58263) Natively schedule pipelined stage groups concurrently in the DAGScheduler, with group-atomic failure and fail-fast admission when task slots are insufficient ([[SPARK-58398]](https://issues.apache.org/jira/browse/SPARK-58398)), decoupled from the `MapOutputTracker` ([[SPARK-58454]](https://issues.apache.org/jira/browse/SPARK-58454))
- [[SPARK-57141]](https://issues.apache.org/jira/browse/SPARK-57141) Add `StreamingShuffleManager`, the built-in pipelined shuffle implementation, with a Netty-based wire protocol ([[SPARK-56674]](https://issues.apache.org/jira/browse/SPARK-56674))

#### Notable fixes
- [[SPARK-59315]](https://issues.apache.org/jira/browse/SPARK-59315) Fix the correctness of `dropDuplicates` with a watermark after query restart

### Spark Connect Framework
- [[SPARK-57941]](https://issues.apache.org/jira/browse/SPARK-57941) Expose Spark Connect sessions and operations via a REST API
- [[SPARK-57021]](https://issues.apache.org/jira/browse/SPARK-57021) Add a `SQLContext` wrapper for Spark Connect
- [[SPARK-57787]](https://issues.apache.org/jira/browse/SPARK-57787) Reuse a persistent local Spark Connect server across runs for faster local PySpark startup (opt-in via `SPARK_LOCAL_CONNECT_REUSE=1`)
- [[SPARK-58159]](https://issues.apache.org/jira/browse/SPARK-58159) Support the `with` statement for Spark Connect sessions
- [[SPARK-58547]](https://issues.apache.org/jira/browse/SPARK-58547) Expose operation IDs for end-to-end request attribution
- [[SPARK-57247]](https://issues.apache.org/jira/browse/SPARK-57247) Support `DataFrame.zip` in Spark Connect
- [[SPARK-58251]](https://issues.apache.org/jira/browse/SPARK-58251) Size estimates for nearly all Spark ML models (feature transformers, tree, clustering, ALS, LDA, FPGrowth, and tuning models), with fixes for pipeline overcounting ([[SPARK-58281]](https://issues.apache.org/jira/browse/SPARK-58281)), for better Spark Connect ML model cache management
- [[SPARK-44462]](https://issues.apache.org/jira/browse/SPARK-44462) Fix the session passed to `foreachBatch` in Spark Connect

#### JDBC driver
- [[SPARK-57380]](https://issues.apache.org/jira/browse/SPARK-57380) Support complex types (`ARRAY`, `MAP`, `STRUCT`) in the Connect JDBC driver
- [[SPARK-57627]](https://issues.apache.org/jira/browse/SPARK-57627) Support primary key, foreign key, and SQL type metadata in `DatabaseMetaData`
- [[SPARK-57274]](https://issues.apache.org/jira/browse/SPARK-57274) Support fetch/type accessors and `getMoreResults` for `SparkConnectStatement`
- [[SPARK-57933]](https://issues.apache.org/jira/browse/SPARK-57933) Map Spark Connect client failures to `SQLException`, and connection errors by SQLSTATE class `08` ([[SPARK-58619]](https://issues.apache.org/jira/browse/SPARK-58619))

### Performance and stability
- **Add bulk read+convert paths for type-converting Parquet vector updaters** ([[SPARK-56800]](https://issues.apache.org/jira/browse/SPARK-56800))
  - [[SPARK-56791]](https://issues.apache.org/jira/browse/SPARK-56791) Bulk read-and-convert paths in the vectorized Parquet reader for widening (INT32 to Long/Double, FLOAT to Double), INT64 `DECIMAL` narrowing, and `DATE` to `TIMESTAMP_NTZ` conversions
- [[SPARK-56893]](https://issues.apache.org/jira/browse/SPARK-56893) Faster vectorized Parquet decoding: dictionary decoding fast paths, bulk `DELTA_BINARY_PACKED` ([[SPARK-56892]](https://issues.apache.org/jira/browse/SPARK-56892)) and timestamp/date ([[SPARK-56896]](https://issues.apache.org/jira/browse/SPARK-56896)) reads, and lower-allocation RLE decoding ([[SPARK-56895]](https://issues.apache.org/jira/browse/SPARK-56895))
- [[SPARK-56894]](https://issues.apache.org/jira/browse/SPARK-56894) Add a vectorized Parquet `BYTE_STREAM_SPLIT` reader

#### Faster queries on small data
- [[SPARK-57851]](https://issues.apache.org/jira/browse/SPARK-57851) Opt-in shuffle-free single-task execution for eligible small, single-partition query fragments (`spark.sql.optimizer.singleTaskExecution.enabled`), covering scans, aggregations, distinct, windows, sorts, and limits
- [[SPARK-57268]](https://issues.apache.org/jira/browse/SPARK-57268) Opt-in Arrow-native in-memory Dataset caching with compression and column statistics (`spark.sql.cache.serializer=org.apache.spark.sql.execution.columnar.ArrowCachedBatchSerializer`)

#### Query Optimizer and Execution
- [[SPARK-58210]](https://issues.apache.org/jira/browse/SPARK-58210) Enable `ReplaceHashWithSortAgg` and combining adjacent aggregations ([[SPARK-43317]](https://issues.apache.org/jira/browse/SPARK-43317)) by default
- [[SPARK-56805]](https://issues.apache.org/jira/browse/SPARK-56805) Enable whole-stage codegen for `Union` by default
- [[SPARK-37019]](https://issues.apache.org/jira/browse/SPARK-37019) Add codegen support for array higher-order functions
- [[SPARK-40259]](https://issues.apache.org/jira/browse/SPARK-40259) Merge equivalent DataSource V2 scans in subplan merging
- [[SPARK-56887]](https://issues.apache.org/jira/browse/SPARK-56887) Add a dedicated sort-merge physical operator for AS-OF joins
- [[SPARK-56903]](https://issues.apache.org/jira/browse/SPARK-56903) Opt-in (`spark.sql.shuffle.spreadNullJoinKeys.enabled`) spreading of NULL outer join keys, and left anti join keys ([[SPARK-57282]](https://issues.apache.org/jira/browse/SPARK-57282)), across shuffle partitions to avoid skew
- [[SPARK-57370]](https://issues.apache.org/jira/browse/SPARK-57370) Add a JDK (`javac`) compiler backend for whole-stage codegen
- [[SPARK-58066]](https://issues.apache.org/jira/browse/SPARK-58066) Hoist streamed-side predicates in outer, anti, and existence joins
- [[SPARK-58084]](https://issues.apache.org/jira/browse/SPARK-58084) Support converting sort merge join to shuffled hash join in the AQE physical plan
- [[SPARK-58099]](https://issues.apache.org/jira/browse/SPARK-58099) Remove the redundant local sort left below the shuffle added by skew join optimization
- [[SPARK-58233]](https://issues.apache.org/jira/browse/SPARK-58233) Push down local sorts to reduce redundant sorts within a stage
- [[SPARK-58405]](https://issues.apache.org/jira/browse/SPARK-58405) Pull up project aliases through windows to eliminate redundant shuffles and sorts
- [[SPARK-54593]](https://issues.apache.org/jira/browse/SPARK-54593) Enable dynamic partition pruning for materialized filtering sides
- [[SPARK-58265]](https://issues.apache.org/jira/browse/SPARK-58265) Reuse projected broadcast values for dynamic partition pruning
- [[SPARK-58272]](https://issues.apache.org/jira/browse/SPARK-58272) Enable runtime Bloom filters for materialized cached inputs
- [[SPARK-58089]](https://issues.apache.org/jira/browse/SPARK-58089) Push variant extractions through Aggregate, Sort, and Join
- [[SPARK-57022]](https://issues.apache.org/jira/browse/SPARK-57022) Nested column pruning for `transform` over arrays of structs and through array-returning functions ([[SPARK-57176]](https://issues.apache.org/jira/browse/SPARK-57176))
- [[SPARK-57043]](https://issues.apache.org/jira/browse/SPARK-57043) Collapse grouped `SUM(COUNT(1))` rollups
- [[SPARK-57220]](https://issues.apache.org/jira/browse/SPARK-57220) Extend the segment-tree window frame to shrinking frames and to `first`/`last` ([[SPARK-57424]](https://issues.apache.org/jira/browse/SPARK-57424))
- [[SPARK-57937]](https://issues.apache.org/jira/browse/SPARK-57937) Improve decimal division performance by dividing at the result scale
- [[SPARK-56769]](https://issues.apache.org/jira/browse/SPARK-56769) Add a fast path for `date_trunc` at WEEK/MONTH/QUARTER/YEAR granularity
- [[SPARK-57905]](https://issues.apache.org/jira/browse/SPARK-57905) Reduce the size of generated whole-stage codegen, e.g. for null-guarded row writes and `regexp_extract` ([[SPARK-57258]](https://issues.apache.org/jira/browse/SPARK-57258))
- [[SPARK-57688]](https://issues.apache.org/jira/browse/SPARK-57688) Add `spark.sql.execution.bypassPartialAggregation` to skip partial aggregation

#### Python Performance
- [[SPARK-56642]](https://issues.apache.org/jira/browse/SPARK-56642) Add pipelined JVM-Python UDF data transfer, with an optional Unix Domain Socket mode
- [[SPARK-58230]](https://issues.apache.org/jira/browse/SPARK-58230) Batch pandas-on-Spark column projections
- [[SPARK-58249]](https://issues.apache.org/jira/browse/SPARK-58249) Use native Spark functions for NumPy math ufuncs, bitwise shifts ([[SPARK-58464]](https://issues.apache.org/jira/browse/SPARK-58464)), `rint` ([[SPARK-58469]](https://issues.apache.org/jira/browse/SPARK-58469)), `trunc` ([[SPARK-58470]](https://issues.apache.org/jira/browse/SPARK-58470)), and inverse hyperbolic functions ([[SPARK-58234]](https://issues.apache.org/jira/browse/SPARK-58234)) in pandas API on Spark

#### Stability
- [[SPARK-57723]](https://issues.apache.org/jira/browse/SPARK-57723) Enable `spark.rdd.compress` by default, as in PySpark
- [[SPARK-58107]](https://issues.apache.org/jira/browse/SPARK-58107) Detect and repair non-deterministic local checkpoints via RDD-block content checksums
- [[SPARK-57491]](https://issues.apache.org/jira/browse/SPARK-57491) Prevent and detect stale push-based shuffle data from duplicate map task attempts
- [[SPARK-58848]](https://issues.apache.org/jira/browse/SPARK-58848) Prevent unbounded shuffle reader connection waits
- [[SPARK-58004]](https://issues.apache.org/jira/browse/SPARK-58004) Add a hard fan-in bound to AQE shuffle partition coalescing

#### Security
- [[SPARK-58054]](https://issues.apache.org/jira/browse/SPARK-58054) Enable `spark.ui.contentSecurityPolicy.enabled` by default
- [[SPARK-57904]](https://issues.apache.org/jira/browse/SPARK-57904) Change the default of `spark.ui.xXssProtection` to `0`
- [[SPARK-59319]](https://issues.apache.org/jira/browse/SPARK-59319) Add an opt-in restricted SQL execution mode
- [[SPARK-57448]](https://issues.apache.org/jira/browse/SPARK-57448) Support `spark.sql.reflect.allowList` to restrict the methods invoked by `reflect`/`java_method`
- [[SPARK-57441]](https://issues.apache.org/jira/browse/SPARK-57441) Disallow setting JVM system properties in Spark Thrift Server sessions, including via `set:hiveconf` ([[SPARK-57480]](https://issues.apache.org/jira/browse/SPARK-57480))
- [[SPARK-54293]](https://issues.apache.org/jira/browse/SPARK-54293) Make the `ThriftHttpCLIService` SNI host check configurable
- [[SPARK-58370]](https://issues.apache.org/jira/browse/SPARK-58370) Check table write privileges when the write target is also read in the same statement
- [[SPARK-59329]](https://issues.apache.org/jira/browse/SPARK-59329) Add an allowlist of URI schemes for the Avro `schemaUrl` option
- [[SPARK-57453]](https://issues.apache.org/jira/browse/SPARK-57453) Support `spark.master.rest.allowedAppResourcePatterns` to restrict application resources submitted through the Master REST server, and limit its request body size ([[SPARK-58049]](https://issues.apache.org/jira/browse/SPARK-58049))
- [[SPARK-58056]](https://issues.apache.org/jira/browse/SPARK-58056) Make `NettyStreamManager` serve only files under the registered directory
- [[SPARK-58153]](https://issues.apache.org/jira/browse/SPARK-58153) Reject JAR entries escaping the extraction directory in `RPackageUtils`
- [[SPARK-59508]](https://issues.apache.org/jira/browse/SPARK-59508) Harden Python client safety with a restricted unpickle serializer
- [[SPARK-59320]](https://issues.apache.org/jira/browse/SPARK-59320) Optionally require an expiration claim in `JWSFilter`

### Declarative Pipelines
- [[SPARK-58321]](https://issues.apache.org/jira/browse/SPARK-58321) Support SCD Type 2 in Auto CDC end to end: each key's history is kept as versioned rows bounded by `__START_AT` and `__END_AT` (the target table must be in a catalog supporting DSv2 row-level operations, e.g. Apache Iceberg)
- [[SPARK-58247]](https://issues.apache.org/jira/browse/SPARK-58247) Support SCD Type 2 in the Auto CDC Python and Spark Connect APIs (`stored_as_scd_type=2`, `track_history_column_list`)
- [[SPARK-58261]](https://issues.apache.org/jira/browse/SPARK-58261) Support SCD Type 2 syntax (`STORED AS SCD TYPE 2`, `TRACK HISTORY ON`) in SQL `AUTO CDC`
- [[SPARK-57402]](https://issues.apache.org/jira/browse/SPARK-57402) Add SQL `AUTO CDC` flows (`CREATE FLOW ... AS AUTO CDC INTO`), with clauses accepted in any order ([[SPARK-58271]](https://issues.apache.org/jira/browse/SPARK-58271))
- [[SPARK-58319]](https://issues.apache.org/jira/browse/SPARK-58319) Derive the SCD Type 2 target table schema, and validate reserved columns ([[SPARK-57251]](https://issues.apache.org/jira/browse/SPARK-57251)), track-history columns ([[SPARK-58313]](https://issues.apache.org/jira/browse/SPARK-58313)), and sequencing types ([[SPARK-58391]](https://issues.apache.org/jira/browse/SPARK-58391)) when an Auto CDC flow is defined
- [[SPARK-58418]](https://issues.apache.org/jira/browse/SPARK-58418) Reconcile SCD Type 2 micro-batches that are narrower than an evolved target schema
- [[SPARK-57594]](https://issues.apache.org/jira/browse/SPARK-57594) Support `spark_confs` in `create_auto_cdc_flow`

### Infrastructure

#### Build and Python Upgrades
- [[SPARK-56889]](https://issues.apache.org/jira/browse/SPARK-56889) Drop Python 3.10 support
- [[SPARK-56928]](https://issues.apache.org/jira/browse/SPARK-56928) Increase the minimum NumPy version to 1.23.2
- [[SPARK-57877]](https://issues.apache.org/jira/browse/SPARK-57877) Support the `DirectByteBuffer` cleaner on Java 26

#### Observability
- [[SPARK-55876]](https://issues.apache.org/jira/browse/SPARK-55876) Add a query statistics summary bar to the SQL tab
- [[SPARK-57987]](https://issues.apache.org/jira/browse/SPARK-57987) Expose modified configs and node descriptions in the SQL REST API
- [[SPARK-58468]](https://issues.apache.org/jira/browse/SPARK-58468) Support on-demand loading for single event logs in the Spark History Server

### Deployment

#### Kubernetes
- [[SPARK-57351]](https://issues.apache.org/jira/browse/SPARK-57351) Enable `spark.kubernetes.executor.useDriverPodIP` by default
- [[SPARK-57493]](https://issues.apache.org/jira/browse/SPARK-57493) Set `allowPrivilegeEscalation` to false for driver and executor containers by default
- [[SPARK-57546]](https://issues.apache.org/jira/browse/SPARK-57546) Spark Docker images now use `eclipse-temurin` on Ubuntu 26.04 with Python 3.14 by default
- [[SPARK-57700]](https://issues.apache.org/jira/browse/SPARK-57700) Support opt-in `jemalloc` in Spark Docker images
- [[SPARK-58113]](https://issues.apache.org/jira/browse/SPARK-58113) Support `publishNotReadyAddresses` in the driver service
- [[SPARK-58926]](https://issues.apache.org/jira/browse/SPARK-58926) Set the driver pod's `SPARK_USER` from `--proxy-user`
- [[SPARK-59798]](https://issues.apache.org/jira/browse/SPARK-59798) Support `spark.executor.extraLibraryPath` for K8s executors

#### Other
- [[SPARK-38954]](https://issues.apache.org/jira/browse/SPARK-38954) Support delegation token renewal and distribution without Kerberos
- [[SPARK-57387]](https://issues.apache.org/jira/browse/SPARK-57387) Make the executor JVM option `-XX:OnOutOfMemoryError` configurable on YARN
- [[SPARK-58192]](https://issues.apache.org/jira/browse/SPARK-58192) Support fractional `spark.task.cpus`

---

### Credits

Last but not least, this release would not have been possible without the following contributors:
Aaron Congo, Abdelrahman Gamal, AbhinavBattu, Adam Binford, adith-os, Adithya Ajith, Akira Ajisaka, Akshat Shenoi, Albert Sugranyes, Alek Jarmov, Aleksandar Trajkovic, Aleksandr Efimov, Andreas Chatzistergiou, Andreas Neumann, Andy Grove, Andy Lam, Angerszhuuuu, Anish Mahto, Anshul Baliga, anshulbhide, Anton Okolnychyi, Anupam Yadav, Anurag Kumar Dwivedi, Anurag Mantripragada, art000109, Ashutosh Jindal, Attila Zsolt Piros, Avery Qi, Ayush Bilala, Ben Hollis, Bobby Wang, Bojana Zecevic, Boyang Jerry Peng, BRIJ RAJ KISHORE, Calvin Qin, Chao Sun, Charlie Chen, Chen Wang, Cheng Pan, Chenhao Li, Chester, ChuckLin2025, cxzl25, Daniel Lunin, Daniel Tenedorio, Daniil Filippov, David Dallakyan, David Milicevic, DB Tsai, Deepak Jain, deepinsight coder, Dejan Krakovic, Devin Petersohn, Dhruv Patel, Dilip Biswal, Diveyam Mishra, Dongjoon Hyun, DongjunHwang, EJ Song, Emil Ejbyfeldt, Eric Marnadi, Eric Yang, eunsang, Fabian Paul, Fangchen Li, Ganesha Shreedhara, gaoyajun02, gaurav kumar pandey, Gengliang Wang, Gurpreet Nanda, Gurpreet Singh Multani, Haiyang Sun, Haoyan Geng, Holden Karau, huangxiaoping, Huaxin Gao, Hyukjin Kwon, Ilya Vasilyev, Ismaël Mejía, Israel Obukonise, Ivan Leventsov, Iván Morales, Jahnavi Nelavelli, James Willis, James Xu, Jarek Potiuk, jbharadw-oai, Jiwon Park, Joel Robin P, Jon Mio, Jonathan Albrecht, Jonathan Dayton, Jonathan Gao, Jorge Molina, Jubin Soni, Juliusz Sompolski, Jungtaek Lim, Junlong Li, Kavpreet Grewal, Kent Yao, Kousuke Saruta, Lavan Vivekanandasarma, Leon Windheuser, Liang-Chi Hsieh, Linhong Liu, Livia Zhu, Manu Zhang, Mao Li, Marcus Lin, Mark Jarvin, Marko Ilić, Matt Zhang, Matthew B, Matthew Hawkes_ONS, Matthis Gördel, Maxim Gekk, Michael Kincaid, Michael Mitchell, Mihailo Aleksic, Mihailo Timotic, Mikhail Nikoliukin, Milan Dankovic, Milan Stefanovic, Minh Vu, Mohamed Gallab, Monica G, Naveen Kumar Puppala, NaVis, Nguyễn Mạnh hà, Nicholas Chammas, Nikolaus Schuetz, Nikolina Vraneš, Noufal Rijal, Oleks V, otterc, Pablo Langa, Parth Chandra, Petar Nikić, Peter Toth, Pranav Chintareddy, Pranav Dev, Pratham Manja, Puneet Dixit, Qiegang Long, Qing Fu, Rajesh Vakkalagadda, Rakesh Raushan, rdtr, Rishav Sinha, Rito Takeuchi, Rob Reeves, Robert Kruszewski, Roy Huang, Ruifeng Zheng, Sagar Mittal, Sepuri Sai Krishna, Serge Rielau, Shivadarshan Devadiga, Shrirang Mhalgi, Simon Maling, Sotirios Kougiouris, Spenser Sun, Spyros Pavlatos, SreeramaYeshwanthGowd, Stanley Yao, Stefan Kandic, Stefan Savic, Steve Vaughan, Stevo Mitric, StormSpirit, Sudhanva Huruli, Sven Weber, Szehon Ho, Takuya UESHIN, Tengfei Huang, Thang Long Vu, Tian Gao, tonghuaroot (童话), TongWei, Trisha Jain, Uros Bojanic, Vaibhav Garg, Venkata Krishnan Sowrirajan, Vinod KC, Vitalii Li, Vladimir Golubev, Weichen Xu, Wenchen Fan, Will Gan, Xiao Li, Xiaoxuan Li, Xiduo You, xuanyulu, Yahya Kisana, Yan Yan, Yang Jie, Yash Bapat, Yash Botadra, ycli12, Yi Hu, Yicong Huang, Yiping Deng, You Zhou, Yuchen Liu, yueqingshu, Yuming Wang, Zahed M, Zero Qu, Zerui Bao, Zhen Wang, Zikang Han, Ziqi Liu, Ziya Mukhtarov
