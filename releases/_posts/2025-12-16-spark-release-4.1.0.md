---
layout: post
title: Spark Release 4.1.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Apache Spark 4.1.0 is the second release in the 4.x series. With significant contributions from the open-source community, this release addressed over 1,800 Jira tickets with contributions from more than 230 individuals.

This release continues the Spark 4.x momentum and focuses on higher-level data engineering, lower-latency streaming, faster and easier PySpark, and a more capable SQL surface.

This release adds Spark Declarative Pipelines (SDP): A new declarative framework where you define datasets and queries, and Spark handles the execution graph, dependency ordering, parallelism, checkpoints, and retries.

This release supports Structured Streaming Real-Time Mode (RTM): First official support for Structured Streaming queries running in real-time mode for continuous, sub-second latency processing. For stateless tasks, latency can even drop to single-digit milliseconds.

PySpark UDFs and Data Sources have been improved: New Arrow-native UDF and UDTF decorators for efficient PyArrow execution without Pandas conversion overhead, plus Python Data Source filter pushdown to reduce data movement.

Spark ML on Connect is GA for the Python client, with smarter model caching and memory management. Spark 4.1 also improves stability for large workloads with zstd-compressed protobuf plans, chunked Arrow result streaming, and enhanced support for large local relations.

SQL Scripting is GA and enabled by default, with improved error handling and cleaner declarations. VARIANT is GA with shredding for faster reads on semi-structured data, plus recursive CTE support and new approximate data sketches (KLL and Theta).

To download Apache Spark 4.1.0, please visit the [downloads](https://spark.apache.org/downloads.html) page. For [detailed changes](https://issues.apache.org/jira/projects/SPARK/versions/12355581), you can consult JIRA. We have also curated a list of high-level changes here, grouped by major components.

* This will become a table of contents (this text will be scraped).
{:toc}


### Highlights
- **[[SPARK-51727]](https://issues.apache.org/jira/browse/SPARK-51727)** SPIP: **Declarative Pipelines**, a new component to define and run data pipelines
- **[[SPARK-54499]](https://issues.apache.org/jira/browse/SPARK-54499)** Enable SQL Scripting by default (SQL Scripting GA)
- **[[SPARK-54454]](https://issues.apache.org/jira/browse/SPARK-54454)** Enable VARIANT type by default (VARIANT type GA)
- **[[SPARK-53736]](https://issues.apache.org/jira/browse/SPARK-53736)** SPIP: Real-time Mode in Structured Streaming (Scala stateless support)
- **[[SPARK-53484]](https://issues.apache.org/jira/browse/SPARK-53484)** SPIP: JDBC Driver for Spark Connect
- **[[SPARK-52214]](https://issues.apache.org/jira/browse/SPARK-52214)** Python Arrow UDF
- **[[SPARK-52979]](https://issues.apache.org/jira/browse/SPARK-52979)** Python Arrow UDTF
- **[[SPARK-51756]](https://issues.apache.org/jira/browse/SPARK-51756)** Checksum-based shuffle stage full retry to avoid incorrect results
- **[[SPARK-44167]](https://issues.apache.org/jira/browse/SPARK-44167)** SPIP: Stored Procedures API for Catalogs
- **[[SPARK-51236]](https://issues.apache.org/jira/browse/SPARK-51236)** ML Connect improvements
- **[[SPARK-54357]](https://issues.apache.org/jira/browse/SPARK-54357)** Improve SparkConnect usability and performance

---

### SQL Foundation
- [[SPARK-54499]](https://issues.apache.org/jira/browse/SPARK-54499) Enable SQL scripting by default (SQL scripting GA)
    - [[SPARK-53621]](https://issues.apache.org/jira/browse/SPARK-53621) Add support for CONTINUE HANDLER
    - [[SPARK-52998]](https://issues.apache.org/jira/browse/SPARK-52998) Multiple variables inside DECLARE
    - [[SPARK-52345]](https://issues.apache.org/jira/browse/SPARK-52345) Fix NULL behavior in scripting conditions
- [[SPARK-54454]](https://issues.apache.org/jira/browse/SPARK-54454) Enable VARIANT type by default (VARIANT type GA)
    - [[SPARK-51298]](https://issues.apache.org/jira/browse/SPARK-51298) Support variant in CSV scan
    - [[SPARK-51503]](https://issues.apache.org/jira/browse/SPARK-51503) Support variant in XML scan
    - [[SPARK-53659]](https://issues.apache.org/jira/browse/SPARK-53659) Infer Variant shredding schema in parquet writer
    - [[SPARK-54306]](https://issues.apache.org/jira/browse/SPARK-54306) Annotate Variant type on Parquet Write
    - [[SPARK-54410]](https://issues.apache.org/jira/browse/SPARK-54410) Add read support for Parquet Variant logical type
    - [[SPARK-52494]](https://issues.apache.org/jira/browse/SPARK-52494) Support colon-sign operator syntax to access Variant fields
- [[SPARK-44167]](https://issues.apache.org/jira/browse/SPARK-44167) SPIP: Stored Procedures API for Catalogs
- [[SPARK-53573]](https://issues.apache.org/jira/browse/SPARK-53573) Allow query parameter markers everywhere via pre-parser
- [[SPARK-24497]](https://issues.apache.org/jira/browse/SPARK-24497) Recursive CTE support
- [[SPARK-52545]](https://issues.apache.org/jira/browse/SPARK-52545) Standardize double-quote escaping to follow SQL specification
- [[SPARK-52338]](https://issues.apache.org/jira/browse/SPARK-52338) Support for inheriting default collation from schema to View
- [[SPARK-52219]](https://issues.apache.org/jira/browse/SPARK-52219) Schema level collation support for tables
- [[SPARK-53444]](https://issues.apache.org/jira/browse/SPARK-53444) Rework EXECUTE IMMEDIATE
- [[SPARK-52782]](https://issues.apache.org/jira/browse/SPARK-52782) Return NULL from +/- on datetime with NULL
- [[SPARK-52828]](https://issues.apache.org/jira/browse/SPARK-52828) Make hashing for collated strings collation agnostic
- [[SPARK-53348]](https://issues.apache.org/jira/browse/SPARK-53348) Always persist ANSI value when creating a view or assume it when querying

#### Built-in Functions (77 new functions)
- [[SPARK-52588]](https://issues.apache.org/jira/browse/SPARK-52588) Approx_top_k: accumulate and estimate
- [[SPARK-52515]](https://issues.apache.org/jira/browse/SPARK-52515) Add approx_top_k function
- [[SPARK-54199]](https://issues.apache.org/jira/browse/SPARK-54199)[[SPARK-53991]](https://issues.apache.org/jira/browse/SPARK-53991) new KLL quantiles sketch functions
- [[SPARK-52407]](https://issues.apache.org/jira/browse/SPARK-52407) Add support for Theta Sketch
- [[SPARK-53877]](https://issues.apache.org/jira/browse/SPARK-53877) Introduce BITMAP_AND_AGG function
- [[SPARK-52798]](https://issues.apache.org/jira/browse/SPARK-52798) Add function approx_top_k_combine
- [[SPARK-53947]](https://issues.apache.org/jira/browse/SPARK-53947) Count null in approx_top_k
- [[SPARK-52233]](https://issues.apache.org/jira/browse/SPARK-52233) Fix map_zip_with for Floating Point Types
- [[SPARK-52866]](https://issues.apache.org/jira/browse/SPARK-52866) Add support for try_to_date
- [[SPARK-53654]](https://issues.apache.org/jira/browse/SPARK-53654) Support seed in function uuid

---

### Query API
- [[SPARK-53779]](https://issues.apache.org/jira/browse/SPARK-53779) Implement transform in column API
- [[SPARK-50131]](https://issues.apache.org/jira/browse/SPARK-50131) Add IN Subquery DataFrame API
- [[SPARK-53402]](https://issues.apache.org/jira/browse/SPARK-53402) Support Direct Passthrough Partitioning Dataset API
- [[SPARK-51877]](https://issues.apache.org/jira/browse/SPARK-51877) Add functions 'chr', 'random' and 'uuid'
- [[SPARK-53544]](https://issues.apache.org/jira/browse/SPARK-53544) Support complex types in PySpark observations
- [[SPARK-53654]](https://issues.apache.org/jira/browse/SPARK-53654) Support seed parameter in uuid function
- [[SPARK-52433]](https://issues.apache.org/jira/browse/SPARK-52433) Unify string coercion in createDataFrame
- [[SPARK-52694]](https://issues.apache.org/jira/browse/SPARK-52694) Add o.a.s.sql.Encoders#udtAPI
- [[SPARK-52601]](https://issues.apache.org/jira/browse/SPARK-52601) Support primitive types in TransformingEncoder
- [[SPARK-52592]](https://issues.apache.org/jira/browse/SPARK-52592) Support creating a ps.Series from another ps.Series
- [[SPARK-53645]](https://issues.apache.org/jira/browse/SPARK-53645) Add skipna parameter to ps.DataFrame.any()
- [[SPARK-53295]](https://issues.apache.org/jira/browse/SPARK-53295) Enable ANSI mode by default for Pandas API on Spark
- [[SPARK-52570]](https://issues.apache.org/jira/browse/SPARK-52570) Enable divide-by-zero for numeric rmod with ANSI enabled
- [[SPARK-53696]](https://issues.apache.org/jira/browse/SPARK-53696) Default to bytes for BinaryType in PySpark

---

### Connectors

#### Data Source V2 framework
- [[SPARK-54309]](https://issues.apache.org/jira/browse/SPARK-54309) Metrics for DML Operations
- [[SPARK-54274]](https://issues.apache.org/jira/browse/SPARK-54274) Support MERGE INTO Schema Evolution
- [[SPARK-51207]](https://issues.apache.org/jira/browse/SPARK-51207) Table Constraints
- [[SPARK-52187]](https://issues.apache.org/jira/browse/SPARK-52187) Introduce Join pushdown for DSv2
- [[SPARK-52109]](https://issues.apache.org/jira/browse/SPARK-52109) Add listTableSummaries API to Data Source V2 Table Catalog API
- [[SPARK-52551]](https://issues.apache.org/jira/browse/SPARK-52551) Add a new v2 Predicate BOOLEAN_EXPRESSION
- [[SPARK-54022]](https://issues.apache.org/jira/browse/SPARK-54022) Make DSv2 table resolution aware of cached tables
- [[SPARK-53924]](https://issues.apache.org/jira/browse/SPARK-53924) Reload DSv2 tables in views created using plans on each access
- [[SPARK-53074]](https://issues.apache.org/jira/browse/SPARK-53074) Avoid partial clustering in SPJ to meet a child's required distribution
- [[SPARK-54157]](https://issues.apache.org/jira/browse/SPARK-54157) Fix refresh of DSv2 tables in Dataset

#### File Sources
- [[SPARK-52482]](https://issues.apache.org/jira/browse/SPARK-52482) ZStandard support for file source reader
- [[SPARK-52582]](https://issues.apache.org/jira/browse/SPARK-52582) Improve the memory usage of XML parser
- [[SPARK-54220]](https://issues.apache.org/jira/browse/SPARK-54220) NullType/VOID/UNKNOWN Type Support in Parquet
- [[SPARK-47618]](https://issues.apache.org/jira/browse/SPARK-47618) Use Magic Committer for all S3 buckets by default
- [[SPARK-52917]](https://issues.apache.org/jira/browse/SPARK-52917) Read support to enable round-trip for binary in xml format
- [[SPARK-53633]](https://issues.apache.org/jira/browse/SPARK-53633) Reuse InputStream in vectorized Parquet reader
- [[SPARK-53535]](https://issues.apache.org/jira/browse/SPARK-53535) Fix missing structs always being assumed as nulls

#### JDBC and Hive
- [[SPARK-53095]](https://issues.apache.org/jira/browse/SPARK-53095) Support of Hive Metastore 4.1
- [[SPARK-53450]](https://issues.apache.org/jira/browse/SPARK-53450) Fix unexpected null fill after converting hive table scan to logical relation
- [[SPARK-52823]](https://issues.apache.org/jira/browse/SPARK-52823) Support Join pushdown for Oracle connector
- [[SPARK-52906]](https://issues.apache.org/jira/browse/SPARK-52906) Support Join pushdown for Postgres connector
- [[SPARK-52929]](https://issues.apache.org/jira/browse/SPARK-52929) Support MySQL and SQLServer connector for DSv2 Join pushdown

#### Python Data Source
- [[SPARK-51919]](https://issues.apache.org/jira/browse/SPARK-51919) Allow overwriting statically registered Python Data Source
- [[SPARK-51271]](https://issues.apache.org/jira/browse/SPARK-51271) Add filter pushdown API to Python Data Sources
- [[SPARK-53030]](https://issues.apache.org/jira/browse/SPARK-53030) Support Arrow writer for streaming Python data sources

---

### UDF (User Defined Functions)
- [[SPARK-52214]](https://issues.apache.org/jira/browse/SPARK-52214) Python Arrow UDF
- [[SPARK-52979]](https://issues.apache.org/jira/browse/SPARK-52979) Python Arrow UDTF
- [[SPARK-53592]](https://issues.apache.org/jira/browse/SPARK-53592) Make @udf support vectorized UDF
- [[SPARK-49547]](https://issues.apache.org/jira/browse/SPARK-49547) Add iterator of RecordBatch API to applyInArrow
- [[SPARK-51619]](https://issues.apache.org/jira/browse/SPARK-51619) Support UDT input / output in Arrow-optimized Python UDF
- [[SPARK-52959]](https://issues.apache.org/jira/browse/SPARK-52959) Support UDT in Arrow-optimized Python UDTF
- [[SPARK-52934]](https://issues.apache.org/jira/browse/SPARK-52934) Allow yielding scalar values with Arrow-optimized Python UDTF
- [[SPARK-52821]](https://issues.apache.org/jira/browse/SPARK-52821) Add int→DecimalType pyspark udf return type coercion
- [[SPARK-53614]](https://issues.apache.org/jira/browse/SPARK-53614) Add Iterator[pandas.DataFrame] support to applyInPandas
- [[SPARK-54226]](https://issues.apache.org/jira/browse/SPARK-54226) Extend Arrow compression to Pandas UDF
- [[SPARK-51814]](https://issues.apache.org/jira/browse/SPARK-51814) Introduce new row based transformWithState Python API
- [[SPARK-54153]](https://issues.apache.org/jira/browse/SPARK-54153) Support python profiler for iterator based UDFs

---

### Streaming
- [[SPARK-53736]](https://issues.apache.org/jira/browse/SPARK-53736) Real-time Mode in Structured Streaming (Scala stateless support)
- [[SPARK-52171]](https://issues.apache.org/jira/browse/SPARK-52171)[[SPARK-51779]](https://issues.apache.org/jira/browse/SPARK-51779) Stream-stream join support with virtual column families including support with state data source reader

#### State Store
- [[SPARK-51745]](https://issues.apache.org/jira/browse/SPARK-51745) Revamped lock management with RocksDB state store provider
- [[SPARK-53001]](https://issues.apache.org/jira/browse/SPARK-53001) Integrate RocksDB Memory Usage with the Unified Memory Manager
- [[SPARK-51358]](https://issues.apache.org/jira/browse/SPARK-51358) Snapshot lag detection with RocksDB state store provider
- [[SPARK-51972]](https://issues.apache.org/jira/browse/SPARK-51972) File level checksum verification with RocksDB state store provider
- [[SPARK-53332]](https://issues.apache.org/jira/browse/SPARK-53332)[[SPARK-53333]](https://issues.apache.org/jira/browse/SPARK-53333) State data source support with state checkpoint format v2
- [[SPARK-54121]](https://issues.apache.org/jira/browse/SPARK-54121) Automatic Snapshot Repair for State store
- [[SPARK-51097]](https://issues.apache.org/jira/browse/SPARK-51097) Re-introduce RocksDB state store's last uploaded snapshot version instance metrics 
- [[SPARK-51940]](https://issues.apache.org/jira/browse/SPARK-51940) Add interface for managing streaming checkpoint metadata
- [[SPARK-54106]](https://issues.apache.org/jira/browse/SPARK-54106) Recheckin State store row checksum implementation
- [[SPARK-53794]](https://issues.apache.org/jira/browse/SPARK-53794) Add option to limit deletions per maintenance operation associated with rocksdb state provider
- [[SPARK-51823]](https://issues.apache.org/jira/browse/SPARK-51823) Add config to not persist state store on executors
- [[SPARK-52008]](https://issues.apache.org/jira/browse/SPARK-52008) Throwing an error if State Stores do not commit at the end of a batch when ForeachBatch is used
- [[SPARK-52968]](https://issues.apache.org/jira/browse/SPARK-52968) Emit additional state store metrics
- [[SPARK-52989]](https://issues.apache.org/jira/browse/SPARK-52989) Add explicit close() API to State Store iterators
- [[SPARK-54063]](https://issues.apache.org/jira/browse/SPARK-54063) Trigger snapshot for next batch when upload lag

#### Other notable changes
- [[SPARK-53942]](https://issues.apache.org/jira/browse/SPARK-53942) Support changing shuffle partitions in stateless streaming workloads
- [[SPARK-53941]](https://issues.apache.org/jira/browse/SPARK-53941) Support AQE in stateless streaming workloads
- [[SPARK-53103]](https://issues.apache.org/jira/browse/SPARK-53103) Throw an error if state directory is not empty when query starts
- [[SPARK-51981]](https://issues.apache.org/jira/browse/SPARK-51981) Add JobTags to queryStartedEvent

---

### Spark Connect Framework
- [[SPARK-53484]](https://issues.apache.org/jira/browse/SPARK-53484) JDBC Driver for Spark Connect
- [[SPARK-51236]](https://issues.apache.org/jira/browse/SPARK-51236) ML Connect improvements
- [[SPARK-54357]](https://issues.apache.org/jira/browse/SPARK-54357) Improve SparkConnect usability and performance

#### API coverage
- [[SPARK-51827]](https://issues.apache.org/jira/browse/SPARK-51827) transformWithState
- [[SPARK-52448]](https://issues.apache.org/jira/browse/SPARK-52448) Add simplified Struct Expression.Literal

#### Other notable changes
- [[SPARK-53808]](https://issues.apache.org/jira/browse/SPARK-53808) Allow to pass optional JVM args to spark-connect-scala-client
- [[SPARK-52723]](https://issues.apache.org/jira/browse/SPARK-52723) Server side column name validation
- [[SPARK-52397]](https://issues.apache.org/jira/browse/SPARK-52397) Idempotent ExecutePlan: the second ExecutePlan with same operationId and plan reattaches
- [[SPARK-51774]](https://issues.apache.org/jira/browse/SPARK-51774) Add GRPC Status code to Python Connect GRPC Exception 
- [[SPARK-53455]](https://issues.apache.org/jira/browse/SPARK-53455) Add CloneSession RPC
- [[SPARK-53507]](https://issues.apache.org/jira/browse/SPARK-53507) Add breaking change info to errors

---

### Performance and stability

#### Query Optimizer and Execution
- [[SPARK-52956]](https://issues.apache.org/jira/browse/SPARK-52956) Preserve alias metadata when collapsing projects
- [[SPARK-53155]](https://issues.apache.org/jira/browse/SPARK-53155) Global lower aggregation should not be replaced with a project
- [[SPARK-53124]](https://issues.apache.org/jira/browse/SPARK-53124) Prune unnecessary fields from JsonTuple
- [[SPARK-53399]](https://issues.apache.org/jira/browse/SPARK-53399) Merge Python UDFs
- [[SPARK-51831]](https://issues.apache.org/jira/browse/SPARK-51831) Column pruning with existsJoin for Datasource V2
- [[SPARK-53762]](https://issues.apache.org/jira/browse/SPARK-53762) Add date and time conversions simplifier rule to optimizer
- [[SPARK-51559]](https://issues.apache.org/jira/browse/SPARK-51559) Make max broadcast table size configurable
- [[SPARK-52777]](https://issues.apache.org/jira/browse/SPARK-52777) Add shuffle cleanup mode configuration for Spark SQL
- [[SPARK-52873]](https://issues.apache.org/jira/browse/SPARK-52873) Further restrict when SHJ semi/anti join can ignore duplicate keys on the build side
- [[SPARK-54354]](https://issues.apache.org/jira/browse/SPARK-54354) Fix Spark hanging when there's not enough JVM heap memory for broadcast hashed relation

#### Stability
- [[SPARK-51756]](https://issues.apache.org/jira/browse/SPARK-51756) checksum-based shuffle stage full retry to avoid incorrect results
- [[SPARK-52395]](https://issues.apache.org/jira/browse/SPARK-52395) Fast fail when shuffle fetch failure happens
- [[SPARK-52924]](https://issues.apache.org/jira/browse/SPARK-52924) Support ZSTD_strategy for compression
- [[SPARK-49386]](https://issues.apache.org/jira/browse/SPARK-49386) Add memory based thresholds for shuffle spill
- [[SPARK-52174]](https://issues.apache.org/jira/browse/SPARK-52174) Enable spark.checkpoint.compress by default
- [[SPARK-47547]](https://issues.apache.org/jira/browse/SPARK-47547) Add BloomFilter V2 and use it as default
- [[SPARK-53999]](https://issues.apache.org/jira/browse/SPARK-53999) Native KQueue Transport support on BSD/MacOS
- [[SPARK-54009]](https://issues.apache.org/jira/browse/SPARK-54009) Support spark.io.mode.default
- [[SPARK-54023]](https://issues.apache.org/jira/browse/SPARK-54023) Support AUTO IO Mode
- [[SPARK-54032]](https://issues.apache.org/jira/browse/SPARK-54032) Prefer to use native Netty transports by default
- [[SPARK-53562]](https://issues.apache.org/jira/browse/SPARK-53562) Limit Arrow batch sizes in applyInArrow and applyInPandas

#### Python Performance
- [[SPARK-51127]](https://issues.apache.org/jira/browse/SPARK-51127) Kill the Python worker on idle timeout
- [[SPARK-54134]](https://issues.apache.org/jira/browse/SPARK-54134) Optimize Arrow memory usage
- [[SPARK-51688]](https://issues.apache.org/jira/browse/SPARK-51688) Use Unix Domain Socket between Python and JVM communication
- [[SPARK-52971]](https://issues.apache.org/jira/browse/SPARK-52971) Limit idle Python worker queue size
- [[SPARK-54344]](https://issues.apache.org/jira/browse/SPARK-54344) Kill the worker if flush fails in daemon.py
- [[SPARK-52877]](https://issues.apache.org/jira/browse/SPARK-52877) Improve Python UDF Arrow Serializer Performance

---

### Infrastructure

#### Build and Scala/Python Upgrades
- [[SPARK-53585]](https://issues.apache.org/jira/browse/SPARK-53585) Upgrade Scala to 2.13.17
- [[SPARK-52561]](https://issues.apache.org/jira/browse/SPARK-52561) Upgrade minimum Python version to 3.10
- [[SPARK-51169]](https://issues.apache.org/jira/browse/SPARK-51169) Add Python 3.14 support in Spark Classic
- [[SPARK-52703]](https://issues.apache.org/jira/browse/SPARK-52703) Upgrade minimum Python version for Pandas API to 3.10
- [[SPARK-52928]](https://issues.apache.org/jira/browse/SPARK-52928) Upgrade minimum PyArrow version to 15.0.0
- [[SPARK-52844]](https://issues.apache.org/jira/browse/SPARK-52844) Update numpy to 1.22
- [[SPARK-54269]](https://issues.apache.org/jira/browse/SPARK-54269) Upgrade cloudpickle to 3.1.2 for Python 3.14
- [[SPARK-54287]](https://issues.apache.org/jira/browse/SPARK-54287) Add Python 3.14 support in pyspark-client and pyspark-connect
- [[SPARK-52904]](https://issues.apache.org/jira/browse/SPARK-52904) Enable convertToArrowArraySafely by default

#### Observability
- [[SPARK-52502]](https://issues.apache.org/jira/browse/SPARK-52502) Thread count overview
- [[SPARK-52487]](https://issues.apache.org/jira/browse/SPARK-52487) Add Stage Submitted Time and Duration to StagePage Detail
- [[SPARK-51651]](https://issues.apache.org/jira/browse/SPARK-51651) Link the root execution id for current execution if any
- [[SPARK-51686]](https://issues.apache.org/jira/browse/SPARK-51686) Link the execution IDs of sub-executions for current execution if any
- [[SPARK-51629]](https://issues.apache.org/jira/browse/SPARK-51629) Add a download link on the ExecutionPage for svg/dot/txt format plans
- [[SPARK-51452]](https://issues.apache.org/jira/browse/SPARK-51452) Improve Thread dump table search
- [[SPARK-51467]](https://issues.apache.org/jira/browse/SPARK-51467) Make tables of the environment page filterable
- [[SPARK-51509]](https://issues.apache.org/jira/browse/SPARK-51509) Make Spark Master Environment page support filters
- [[SPARK-52458]](https://issues.apache.org/jira/browse/SPARK-52458) Support spark.eventLog.excludedPatterns
- [[SPARK-52456]](https://issues.apache.org/jira/browse/SPARK-52456) Lower the minimum limit of spark.eventLog.rolling.maxFileSize
- [[SPARK-52914]](https://issues.apache.org/jira/browse/SPARK-52914) Support On-Demand Log Loading for rolling logs in History Server
- [[SPARK-53631]](https://issues.apache.org/jira/browse/SPARK-53631) Optimize memory and perf on SHS bootstrap

#### Debug-ability
- [[SPARK-53975]](https://issues.apache.org/jira/browse/SPARK-53975) Add Python worker logging support
- [[SPARK-54340]](https://issues.apache.org/jira/browse/SPARK-54340) Add a script to enable viztracer on daemon/workers for python udf
- [[SPARK-52579]](https://issues.apache.org/jira/browse/SPARK-52579) Add periodic traceback dump for Python workers
- [[SPARK-53976]](https://issues.apache.org/jira/browse/SPARK-53976) Support logging in Pandas/Arrow UDFs
- [[SPARK-53977]](https://issues.apache.org/jira/browse/SPARK-53977) Support logging in UDTFs
- [[SPARK-53978]](https://issues.apache.org/jira/browse/SPARK-53978) Support logging in driver-side workers
- [[SPARK-53857]](https://issues.apache.org/jira/browse/SPARK-53857) Enable messageTemplate propagation to SparkThrowable
- [[SPARK-52426]](https://issues.apache.org/jira/browse/SPARK-52426) Support redirecting stdout/stderr to logging system
- [[SPARK-53157]](https://issues.apache.org/jira/browse/SPARK-53157) Decouple driver and executor heartbeat intervals
- [[SPARK-47404]](https://issues.apache.org/jira/browse/SPARK-47404) Add configurable size limits for ANTLR DFA cache

---

### Deployment
- [[SPARK-53944]](https://issues.apache.org/jira/browse/SPARK-53944) Support spark.kubernetes.executor.useDriverPodIP
- [[SPARK-53335]](https://issues.apache.org/jira/browse/SPARK-53335) Support spark.kubernetes.driver.annotateExitException
- [[SPARK-54312]](https://issues.apache.org/jira/browse/SPARK-54312) Avoid repeatedly scheduling tasks for SendHeartbeat/WorkDirClean in standalone worker
- [[SPARK-48547]](https://issues.apache.org/jira/browse/SPARK-48547) Add opt-in flag to have SparkSubmit automatically call System.exit after user code main method exits

---

### Version upgrade of Java and Scala libraries

| Library Name | Version Change |
| :------------------------------- | :------------------ |
| analyticsaccelerator-s3 | -> 1.3.0 (NEW) |
| annotations | 17.0.0 -> REMOVED |
| arpack | 3.0.3 -> 3.0.4 |
| arrow-compression | -> 18.3.0 (NEW) |
| arrow-format | 18.1.0 -> 18.3.0 |
| arrow-memory-core | 18.1.0 -> 18.3.0 |
| arrow-memory-netty | 18.1.0 -> 18.3.0 |
| arrow-memory-netty-buffer-patch | 18.1.0 -> 18.3.0 |
| arrow-vector | 18.1.0 -> 18.3.0 |
| avro | 1.12.0 -> 1.12.1 |
| avro-ipc | 1.12.0 -> 1.12.1 |
| avro-mapred | 1.12.0 -> 1.12.1 |
| bcprov-jdk18on | 1.80 -> REMOVED |
| blas | 3.0.3 -> 3.0.4 |
| bundle | 2.25.53 -> 2.29.52 |
| checker-qual | 3.43.0 -> REMOVED |
| commons-cli | 1.9.0 -> 1.10.0 |
| commons-codec | 1.17.2 -> 1.19.0 |
| commons-collections | 3.2.2 -> REMOVED |
| commons-collections4 | 4.4 -> 4.5.0 |
| commons-compress | 1.27.1 -> 1.28.0 |
| commons-io | 2.18.0 -> 2.21.0 |
| commons-lang3 | 3.17.0 -> 3.19.0 |
| commons-text | 1.13.0 -> 1.14.0 |
| curator-client | 5.7.1 -> 5.9.0 |
| curator-framework | 5.7.1 -> 5.9.0 |
| curator-recipes | 5.7.1 -> 5.9.0 |
| datasketches-java | 6.1.1 -> 6.2.0 |
| error_prone_annotations | 2.36.0 -> REMOVED |
| failureaccess | 1.0.2 -> 1.0.3 |
| flatbuffers-java | 24.3.25 -> 25.2.10 |
| gcs-connector | hadoop3-2.2.26 -> hadoop3-2.2.28 |
| guava | 33.4.0-jre -> 33.4.8-jre |
| hadoop-aliyun | 3.4.1 -> 3.4.2 |
| hadoop-annotations | 3.4.1 -> 3.4.2 |
| hadoop-aws | 3.4.1 -> 3.4.2 |
| hadoop-azure | 3.4.1 -> 3.4.2 |
| hadoop-azure-datalake | 3.4.1 -> 3.4.2 |
| hadoop-client-api | 3.4.1 -> 3.4.2 |
| hadoop-client-runtime | 3.4.1 -> 3.4.2 |
| hadoop-cloud-storage | 3.4.1 -> 3.4.2 |
| hadoop-huaweicloud | 3.4.1 -> 3.4.2 |
| hadoop-shaded-guava | 1.3.0 -> 1.4.0 |
| icu4j | 76.1 -> 77.1 |
| j2objc-annotations | 3.0.0 -> REMOVED |
| jackson-annotations | 2.18.2 -> 2.20 |
| jackson-core | 2.18.2 -> 2.20.0 |
| jackson-core-asl | 1.9.13 -> REMOVED |
| jackson-databind | 2.18.2 -> 2.20.0 |
| jackson-dataformat-cbor | 2.18.2 -> 2.20.0 |
| jackson-dataformat-yaml | 2.18.2 -> 2.20.0 |
| jackson-datatype-jsr310 | 2.18.2 -> 2.20.0 |
| jackson-mapper-asl | 1.9.13 -> REMOVED |
| jackson-module-scala | 2.18.2 -> 2.20.0 |
| java-diff-utils | 4.15 -> 4.16 |
| jcl-over-slf4j | 2.0.16 -> 2.0.17 |
| jetty-util | 11.0.24 -> 11.0.26 |
| jetty-util-ajax | 11.0.24 -> 11.0.26 |
| jline | 3.27.1 -> 3.29.0 |
| joda-time | 2.13.0 -> 2.14.0 |
| jodd-core | 3.5.2 -> REMOVED |
| jts-core | -> 1.20.0 (NEW) |
| jul-to-slf4j | 2.0.16 -> 2.0.17 |
| kubernetes-client | 7.1.0 -> 7.4.0 |
| kubernetes-client-api | 7.1.0 -> 7.4.0 |
| kubernetes-httpclient-vertx | 7.1.0 -> 7.4.0 |
| kubernetes-model-admissionregistration | 7.1.0 -> 7.4.0 |
| kubernetes-model-apiextensions | 7.1.0 -> 7.4.0 |
| kubernetes-model-apps | 7.1.0 -> 7.4.0 |
| kubernetes-model-autoscaling | 7.1.0 -> 7.4.0 |
| kubernetes-model-batch | 7.1.0 -> 7.4.0 |
| kubernetes-model-certificates | 7.1.0 -> 7.4.0 |
| kubernetes-model-common | 7.1.0 -> 7.4.0 |
| kubernetes-model-coordination | 7.1.0 -> 7.4.0 |
| kubernetes-model-core | 7.1.0 -> 7.4.0 |
| kubernetes-model-discovery | 7.1.0 -> 7.4.0 |
| kubernetes-model-events | 7.1.0 -> 7.4.0 |
| kubernetes-model-extensions | 7.1.0 -> 7.4.0 |
| kubernetes-model-flowcontrol | 7.1.0 -> 7.4.0 |
| kubernetes-model-gatewayapi | 7.1.0 -> 7.4.0 |
| kubernetes-model-metrics | 7.1.0 -> 7.4.0 |
| kubernetes-model-networking | 7.1.0 -> 7.4.0 |
| kubernetes-model-node | 7.1.0 -> 7.4.0 |
| kubernetes-model-policy | 7.1.0 -> 7.4.0 |
| kubernetes-model-rbac | 7.1.0 -> 7.4.0 |
| kubernetes-model-resource | 7.1.0 -> 7.4.0 |
| kubernetes-model-scheduling | 7.1.0 -> 7.4.0 |
| kubernetes-model-storageclass | 7.1.0 -> 7.4.0 |
| lapack | 3.0.3 -> 3.0.4 |
| listenablefuture | 9999.0-empty-to-avoid-conflict-with-guava -> REMOVED |
| metrics-core | 4.2.30 -> 4.2.37 |
| metrics-graphite | 4.2.30 -> 4.2.37 |
| metrics-jmx | 4.2.30 -> 4.2.37 |
| metrics-json | 4.2.30 -> 4.2.37 |
| metrics-jvm | 4.2.30 -> 4.2.37 |
| netty-all | 4.1.118.Final -> 4.2.7.Final |
| netty-buffer | 4.1.118.Final -> 4.2.7.Final |
| netty-codec | 4.1.118.Final -> 4.2.7.Final |
| netty-codec-base | -> 4.2.7.Final (NEW) |
| netty-codec-classes-quic | -> 4.2.7.Final (NEW) |
| netty-codec-compression | -> 4.2.7.Final (NEW) |
| netty-codec-dns | 4.1.118.Final -> 4.2.7.Final |
| netty-codec-http | 4.1.118.Final -> 4.2.7.Final |
| netty-codec-http2 | 4.1.118.Final -> 4.2.7.Final |
| netty-codec-http3 | -> 4.2.7.Final (NEW) |
| netty-codec-marshalling | -> 4.2.7.Final (NEW) |
| netty-codec-native-quic | -> 4.2.7.Final (NEW) |
| netty-codec-protobuf | -> 4.2.7.Final (NEW) |
| netty-codec-socks | 4.1.118.Final -> 4.2.7.Final |
| netty-common | 4.1.118.Final -> 4.2.7.Final |
| netty-handler | 4.1.118.Final -> 4.2.7.Final |
| netty-handler-proxy | 4.1.118.Final -> 4.2.7.Final |
| netty-resolver | 4.1.118.Final -> 4.2.7.Final |
| netty-resolver-dns | 4.1.118.Final -> 4.2.7.Final |
| netty-tcnative-boringssl-static | 2.0.70.Final -> 2.0.74.Final |
| netty-tcnative-classes | 2.0.70.Final -> 2.0.74.Final |
| netty-transport | 4.1.118.Final -> 4.2.7.Final |
| netty-transport-classes-epoll | 4.1.118.Final -> 4.2.7.Final |
| netty-transport-classes-io_uring | -> 4.2.7.Final (NEW) |
| netty-transport-classes-kqueue | 4.1.118.Final -> 4.2.7.Final |
| netty-transport-native-epoll | 4.1.118.Final -> 4.2.7.Final |
| netty-transport-native-io_uring | -> 4.2.7.Final (NEW) |
| netty-transport-native-kqueue | 4.1.118.Final -> 4.2.7.Final |
| netty-transport-native-unix-common | 4.1.118.Final -> 4.2.7.Final |
| objenesis | 3.3 -> 3.4 |
| orc-core | 2.1.3 -> 2.2.1 |
| orc-mapreduce | 2.1.3 -> 2.2.1 |
| orc-shims | 2.1.3 -> 2.2.1 |
| paranamer | 2.8 -> 2.8.3 |
| parquet-column | 1.15.2 -> 1.16.0 |
| parquet-common | 1.15.2 -> 1.16.0 |
| parquet-encoding | 1.15.2 -> 1.16.0 |
| parquet-format-structures | 1.15.2 -> 1.16.0 |
| parquet-hadoop | 1.15.2 -> 1.16.0 |
| parquet-jackson | 1.15.2 -> 1.16.0 |
| scala-collection-compat | 2.7.0 -> REMOVED |
| scala-compiler | 2.13.16 -> 2.13.17 |
| scala-library | 2.13.16 -> 2.13.17 |
| scala-reflect | 2.13.16 -> 2.13.17 |
| scala-xml | 2.3.0 -> 2.4.0 |
| slf4j-api | 2.0.16 -> 2.0.17 |
| snakeyaml | 2.3 -> 2.4 |
| snakeyaml-engine | 2.9 -> 2.10 |
| snappy-java | 1.1.10.7 -> 1.1.10.8 |
| vertx-auth-common | 4.5.12 -> 4.5.14 |
| vertx-core | 4.5.12 -> 4.5.14 |
| vertx-web-client | 4.5.12 -> 4.5.14 |
| vertx-web-common | 4.5.12 -> 4.5.14 |
| xbean-asm9-shaded | 4.26 -> 4.28 |
| zjsonpatch | 7.1.0 -> 7.4.0 |
| zookeeper | 3.9.3 -> 3.9.4 |
| zookeeper-jute | 3.9.3 -> 3.9.4 |
| zstd-jni | 1.5.6-9 -> 1.5.7-6 |

---

### Credits

Last but not least, this release would not have been possible without the following contributors:
aakash-db (Aakash Japi), AbinayaJayaprakasam, ala (Ala Luszczak), aldenlau-db (Alden Lau), alekjarmov (Alek Jarmov), allisonwang-db (Allison Wang), amoghantarkar (Amogh Antarkar), andyl-db, AngersZhuuuu (Angerszhuuuu), AnishMahto, anishshri-db (Anish), anoopj (Anoop Johnson), antban (DS), anton5798 (Anton Lykov), aokolnychyi (Anton Okolnychyi), ashrithb (Ashrith Bandla), asl3 (Amanda Liu), atongpu, attilapiros (Attila Zsolt Piros), austinrwarner (Austin Warner), AveryQi115 (Avery), beliefer (Jiaan Geng), benrobby, bersprockets (Bruce Robbins), bjornjorgensen (Bjørn Jørgensen), bogao007 (Bo Gao), brkyvz (Burak Yavuz), calilisantos (Calili Santos), carlotran4 (Carlo Tran), cashmand (David Cashman), cboumalh (Chris Boumalhab), changgyoopark-db, chenhao-db, Chhida, chirag-s-db (Chirag Singh), cloud-fan (Wenchen Fan), cnauroth (Chris Nauroth), cookiedough77, craiuconstantintiberiu (Constantin-Tiberiu Craiu), cravani (Chiran Ravani), cty123 (cty), cxzl25, cyb70289 (Yibo Cai), davidm-db (David Milicevic), dengziming (dengziming), DenineLu (Deninelu), dillitz (Robert Dillitz), djspiewak (Daniel Spiewak), dongjoon-hyun (Dongjoon Hyun), drexler-sky, dtenedor (Daniel Tenedorio), dusantism-db (Dušan Tišma), dylanwong250, eason-yuchen-liu (Yuchen Liu), eejbyfeldt (Emil Ejbyfeldt), efaracci018, Emma-82, EnricoMi (Enrico Minack), EricGao888 (Eric Gao), ericm-db (Eric Marnadi), eschcam (Cameron), EugeneYushin (Eugen), fanyue-xia (Chloe Xia), fartzy (Mike Artz), fe2s (Oleksii Diagiliev), ForVic (Victor Sunderland), francesco-camaione (Francesco Camaione), fusheng9399 (fusheng), ganeshashree (Ganesha Shreedhara), gaogaotiantian (Tian Gao), gemelen (Denis Pyshev), gene-db (Gene Pang), gengliangwang (Gengliang Wang), gerashegalov (Gera Shegalov), gjxdxh (Lingkai Kong), grundprinzip (Martin Grund), haoyangeng-db, harshmotw-db (Harsh Motwani), HeartSaVioR (Jungtaek Lim), HendrikHuebner (Hendrik Hübner), heyihong (Yihong He), huangxiaopingRD (huangxiaoping), huanliwang-db (Huanli Wang), huaxingao (Huaxin Gao), hvanhovell (Herman van Hovell), HyukjinKwon (Hyukjin Kwon), ignitz (Yuri Niitsuma), ilicmarkodb (Marko Ilić), imarkowitz (Ian Markowitz), ishnagy (Ish Nagy), itholic (Haejoon Lee), ivoson (Tengfei Huang), jaceklaskowski (Jacek Laskowski), jackierwzhang, jackylee-ch (jackylee), james-willis (James Willis), jayantdb (Jayant Sharma), jerrypeng (Boyang Jerry Peng), JiaqiWang18 (Jacky Wang), jiateoh (Jason Teoh), JiexingLi, Jimvin (Jim Halfpenny), jingz-db (Jing Zhan), jinkachy (chenhongyu), jiwen624 (Eric Yang), jonathan-albrecht-ibm (Jonathan Albrecht), jonmio (Jon Mio), jonnycomes (Jonny Comes), jorenham (Joren Hammudoglu), JoshRosen (Josh Rosen), juliuszsompolski (Juliusz Sompolski), karuppayya (Karuppayya), kelvinjian-db (Kelvin Jiang), kepler62f, khakhlyuk (Alex Khakhlyuk), Kimahriman (Adam Binford), kirisakow (Kiril Isakov), ksbeyer, Last-remote11 (Sung Dong Kim), liuzqt (Ziqi Liu), liviazhu (Livia Zhu), liviazhu-db, longvu-db (Thang Long Vu), LucaCanali (Luca Canali), LuciferYang (YangJie), ManosGEM (Manolis Gemeliaris), manuzhang (Manu Zhang), max2718281 (Maxime Xu), MaxGekk (Maxim Gekk), mbrukman (Misha Brukman), micheal-o (Babatunde Micheal Okutubo), mihailoale-db (Mihailo Aleksic), mihailom-db, mihailotim-db (Mihailo Timotic), mikhailnik-db (Mikhail NIkoliukin), miland-db (Milan Dankovic), milastdbx (Milan Stefanovic), milosstojanovic (Milos Stojanovic), morvenhuang, mzhang (Matt Zhang), nagaarjun-p (Nagaarjun P), Ngone51 (wuyi), nija-at (Niranjan), niklasmohrin (Niklas Mohrin), nikola-jovicevic-db, Nishanth28, Pajaraja (Pavle Martinovic), pan3793 (Cheng Pan), panbingkun (panbingkun), pasar6987, PetarVasiljevic-DB, peter-toth (Peter Toth), petern48 (Peter Nguyen), peterpashkin, PHILO-HE, pjfanning (PJ Fanning), pranavdev022 (Pranav Dev), prathit06 (Prathit malik), qiyuandong-db (Qiyuan Dong), richardc-db, robreeves (Rob Reeves), RocMarshal (Yuepeng Pan), Rolfdv (Rolf de Vries), sandip-db (Sandip Agarwala), sarutak (Kousuke Saruta), SCHJonathan (Jonathan Chang), senthh, shardulm94 (Shardul Mahadik), shujingyang-db (Shujing Yang), sigmod (Yingyi Bu), siying (Siying Dong), srielau (Serge Rielau), sririshindra (Rishi), sryza (Sandy Ryza), stefankandic (Stefan Kandic), steveloughran (Steve Loughran), steven-aerts (Steven Aerts), stevomitric (Stevo Mitric), summaryzb (summaryzb), sunchao (Chao Sun), Surbhi-Vijay, szehon-ho (Szehon Ho), TeodorDjelic (Teodor Djelic), the-sakthi (Sakthi), thejdeep (Thejdeep Gudivada), timarmstrong (Tim Armstrong), tomscut (litao), TongWei1105 (TongWei), trsigg (Tynan Sigg), ueshin (Takuya UESHIN), uros-db (Uros Bojanic), uros7251brick, urosstan-db (Uros Stankovic), vanja-vujovic-db, vicennial (Venkata Sai Akhil Gudesa), viirya (Liang-Chi Hsieh), viktorluc-db (Viktor Lučić), VindhyaG, vinodkc (Vinod KC), vladimirg-db (Vladimir Golubev), vrmorusu (Vamshidhar Morusu), vrozov (Vlad Rozov), WangGuangxin, wangyum (Yuming Wang), wankunde (wankun), wayneguow (Wei Guo), wecharyu (Wechar Yu), WeichenXu123 (WeichenXu), wengh (Haoyu Weng), wForget (Zhen Wang), williamhyun (William Hyun), WweiL (Wei Liu), xi-db (Xi Lyu), xianzhe-databricks (Xianzhe Ma), xiaonanyang-db (Xiaonan Yang), xinrong-meng (Xinrong Meng), xu20160924 (John Xu), xupefei (Paddy Xu), xuyu-co, yaooqinn (Kent Yao), yeshengm (Yesheng Ma), yhuang-db (Yuchuan Huang), Yicong-Huang (Yicong Huang), yuexing (Yue), yumingxuanguo-db (Yumingxuan Guo), zecookiez (Zeyu Chen), zeruibao (Zerui Bao), zhengruifeng (Ruifeng Zheng), zhipengmao-db (Zhipeng Mao), zhixingheyi-tian, zhztheplayer (Hongze Zhang), zifeif2 (Zifei Feng), ZiyaZa (Ziya Mukhtarov), zml1206 (Mingliang Zhu)
