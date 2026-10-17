---
layout: post
title: Spark Release 4.2.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Apache Spark 4.2.0 is the third release of the Spark 4.x line. With significant contributions from the open-source community, this release addressed over 1,700 Jira tickets with contributions from more than 250 individuals.

This release expands Spark's data types and SQL surface, deepens Data Source V2, and continues to make PySpark faster and Spark Connect more capable.

This release adds native geospatial support: new `GEOMETRY` and `GEOGRAPHY` types with `ST_*` functions, WKB/WKT and Parquet read/write, and an SRID registry — enabled by default.

This release introduces Change Data Capture (CDC): a new SQL `CHANGES` clause plus DataFrame, PySpark, and Spark Connect APIs to read row-level changes in batch and streaming, and Auto CDC in Spark Declarative Pipelines for declarative SCD Type 1 upserts.

Arrow-optimized Python UDFs and Arrow-based PySpark IPC are now enabled by default, bringing faster, lower-overhead Python execution to every PySpark user.

Data Source V2 gains transaction management, schema evolution for `INSERT`, richer operation metrics, and enhanced partition-stats filtering, and SQL adds a path-based name-resolution model (`SET PATH`, qualified names, `CURRENT_PATH()`) and metric views for semantic modeling.

To download Apache Spark 4.2.0, please visit the [downloads](https://spark.apache.org/downloads.html) page. For [detailed changes](https://issues.apache.org/jira/projects/SPARK/versions/12356380), you can consult JIRA.

* This will become a table of contents (this text will be scraped).
{:toc}

### Highlights
- **[[SPARK-51658]](https://issues.apache.org/jira/browse/SPARK-51658)** SPIP: Geospatial types — new `GEOMETRY` and `GEOGRAPHY` data types with `ST_*` functions, WKB/WKT and Parquet I/O, and a full SRID registry, enabled by default
- **[[SPARK-55668]](https://issues.apache.org/jira/browse/SPARK-55668)**, **[[SPARK-56249]](https://issues.apache.org/jira/browse/SPARK-56249)** Change Data Capture — a SQL `CHANGES` clause plus DataFrame/PySpark/Connect APIs to read row-level changes in batch and streaming, and Auto CDC (declarative SCD Type 1) in Spark Declarative Pipelines
- **[[SPARK-54555]](https://issues.apache.org/jira/browse/SPARK-54555)** Enable Arrow-optimized Python UDFs and Arrow-based PySpark IPC by default
- **[[SPARK-56395]](https://issues.apache.org/jira/browse/SPARK-56395)** SPIP: NEAREST BY top-K ranking join, a new join primitive for nearest-neighbor queries
- **[[SPARK-55855]](https://issues.apache.org/jira/browse/SPARK-55855)** Data Source V2 transaction management, letting connectors commit multiple operations atomically
- **[[SPARK-54806]](https://issues.apache.org/jira/browse/SPARK-54806)** SQL path-based name resolution — `SET PATH`, qualified built-in/session names, and `CURRENT_PATH()`
- **[[SPARK-54119]](https://issues.apache.org/jira/browse/SPARK-54119)** Metric views — declarative semantic modeling with a `CREATE VIEW ... WITH METRICS` surface
- **[[SPARK-55760]](https://issues.apache.org/jira/browse/SPARK-55760)** A modernized Spark Web UI with dark mode and searchable, zoomable, side-by-side SQL plan visualization
- **[[SPARK-51167]](https://issues.apache.org/jira/browse/SPARK-51167)** Build and run Spark on Java 25

---

### SQL Foundation
- [[SPARK-56395]](https://issues.apache.org/jira/browse/SPARK-56395) NEAREST BY top-K ranking join, with catalyst support and a DataFrame API
- [[SPARK-55855]](https://issues.apache.org/jira/browse/SPARK-55855) Data Source V2 transaction management
- [[SPARK-31561]](https://issues.apache.org/jira/browse/SPARK-31561) Add QUALIFY clause
- [[SPARK-55978]](https://issues.apache.org/jira/browse/SPARK-55978) Add TABLESAMPLE SYSTEM block sampling with DSv2 pushdown
- [[SPARK-54971]](https://issues.apache.org/jira/browse/SPARK-54971) Add WITH SCHEMA EVOLUTION syntax for SQL INSERT
- [[SPARK-56550]](https://issues.apache.org/jira/browse/SPARK-56550) Support source with fewer columns/fields in INSERT INTO ... WITH SCHEMA EVOLUTION
- [[SPARK-56001]](https://issues.apache.org/jira/browse/SPARK-56001) Add INSERT INTO ... REPLACE ON/USING syntax
- [[SPARK-54803]](https://issues.apache.org/jira/browse/SPARK-54803) Support BY NAME with INSERT INTO ... REPLACE WHERE
- [[SPARK-55995]](https://issues.apache.org/jira/browse/SPARK-55995) Support TIMESTAMP WITH LOCAL TIME ZONE in SQL syntax
- [[SPARK-56152]](https://issues.apache.org/jira/browse/SPARK-56152) Enable implicit cast from STRING to TIME type
- [[SPARK-54292]](https://issues.apache.org/jira/browse/SPARK-54292) Support aggregate functions and GROUP BY in `|>` SELECT pipe operators
- [[SPARK-51518]](https://issues.apache.org/jira/browse/SPARK-51518) Support `|` as an alternative to `|>` for the SQL pipe operator token
- [[SPARK-55356]](https://issues.apache.org/jira/browse/SPARK-55356) Support alias for PIVOT clause
- [[SPARK-55019]](https://issues.apache.org/jira/browse/SPARK-55019) Allow DROP TABLE to drop VIEW
- [[SPARK-54759]](https://issues.apache.org/jira/browse/SPARK-54759) SQL scripting Cursor support
- [[SPARK-56883]](https://issues.apache.org/jira/browse/SPARK-56883) Support DESCRIBE FUNCTION for SQL UDFs
- [[SPARK-55528]](https://issues.apache.org/jira/browse/SPARK-55528) Add default collation support for SQL UDFs
- [[SPARK-54972]](https://issues.apache.org/jira/browse/SPARK-54972) Improve NOT IN subqueries with non-nullable columns
- [[SPARK-55716]](https://issues.apache.org/jira/browse/SPARK-55716) Support NOT NULL constraint enforcement for V1 file source table inserts

#### Built-in Functions
- [[SPARK-56594]](https://issues.apache.org/jira/browse/SPARK-56594) Add time_bucket scalar function
- [[SPARK-55256]](https://issues.apache.org/jira/browse/SPARK-55256) Support IGNORE NULLS / RESPECT NULLS for array_agg and collect_list
- [[SPARK-55533]](https://issues.apache.org/jira/browse/SPARK-55533) Support IGNORE NULLS / RESPECT NULLS for collect_set

#### Collation
- [[SPARK-54870]](https://issues.apache.org/jira/browse/SPARK-54870) Collation support for char/varchar and CTAS/RTAS
- [[SPARK-49543]](https://issues.apache.org/jira/browse/SPARK-49543) Add SHOW COLLATIONS command

#### Data Source V2 catalog and DDL
- [[SPARK-52729]](https://issues.apache.org/jira/browse/SPARK-52729) Add MetadataOnlyTable and CREATE/ALTER VIEW support for DS v2 catalogs
- [[SPARK-54760]](https://issues.apache.org/jira/browse/SPARK-54760) DelegatingCatalogExtension as session catalog supports both V1 and V2 functions
- [[SPARK-33902]](https://issues.apache.org/jira/browse/SPARK-33902) Support CREATE TABLE LIKE for V2
- [[SPARK-39660]](https://issues.apache.org/jira/browse/SPARK-39660) Support v2 DESCRIBE TABLE .. PARTITION
- [[SPARK-56655]](https://issues.apache.org/jira/browse/SPARK-56655) Implement the remaining v2 view DDL and inspection commands
- [[SPARK-56678]](https://issues.apache.org/jira/browse/SPARK-56678) Use structured Catalog/Namespace/Table rows in DESCRIBE TABLE EXTENDED for v2 tables and views
- [[SPARK-43752]](https://issues.apache.org/jira/browse/SPARK-43752) Support column DEFAULT values in V2 write commands
- [[SPARK-54682]](https://issues.apache.org/jira/browse/SPARK-54682) Support showing parameter details in DESCRIBE PROCEDURE for V2 procedures
- [[SPARK-54834]](https://issues.apache.org/jira/browse/SPARK-54834) Add SimpleProcedure and SimpleFunction interfaces to provide a BoundProcedure directly without custom bind logic
- [[SPARK-56524]](https://issues.apache.org/jira/browse/SPARK-56524) Add operation metrics (numUpdatedRows, numCopiedRows) for UPDATE queries in DSv2
- [[SPARK-56551]](https://issues.apache.org/jira/browse/SPARK-56551) Add operation metrics (numDeletedRows, numCopiedRows) for DELETE queries in DSv2
- [[SPARK-56680]](https://issues.apache.org/jira/browse/SPARK-56680) DSv2 INSERT and insert-only MERGE metrics

#### Metric views ([[SPARK-54119]](https://issues.apache.org/jira/browse/SPARK-54119))
- [[SPARK-54405]](https://issues.apache.org/jira/browse/SPARK-54405) CREATE command and SELECT query resolution for metric views
- [[SPARK-54403]](https://issues.apache.org/jira/browse/SPARK-54403) Add YAML serde infrastructure for metric views

#### Search path support ([[SPARK-54806]](https://issues.apache.org/jira/browse/SPARK-54806))
- [[SPARK-56501]](https://issues.apache.org/jira/browse/SPARK-56501) SET PATH syntax
- [[SPARK-54807]](https://issues.apache.org/jira/browse/SPARK-54807) Allow qualified names for built-in and session functions
- [[SPARK-56489]](https://issues.apache.org/jira/browse/SPARK-56489) Add CURRENT_PATH() builtin expression and keywords
- [[SPARK-54808]](https://issues.apache.org/jira/browse/SPARK-54808) Qualified session view
- [[SPARK-56520]](https://issues.apache.org/jira/browse/SPARK-56520) Persist SQL PATH in views and SQL functions, expose in DESCRIBE
- [[SPARK-56605]](https://issues.apache.org/jira/browse/SPARK-56605) Wire resolution engine to use SQL PATH for table, function, and variable lookup

#### Notable fixes
- [[SPARK-54852]](https://issues.apache.org/jira/browse/SPARK-54852) Fix NOT IN subquery returning incorrect results on collated tables
- [[SPARK-55647]](https://issues.apache.org/jira/browse/SPARK-55647) Fix ConstantPropagation incorrectly substituting attributes under non-binary-stable collations, which could produce wrong results
- [[SPARK-54918]](https://issues.apache.org/jira/browse/SPARK-54918) Normalize floating-point values (-0.0/NaN) in array set operations (array_distinct/union/intersect/except, arrays_overlap)
- [[SPARK-57298]](https://issues.apache.org/jira/browse/SPARK-57298) collect_set now dedupes float/double NaN and -0.0 per Spark equality semantics
- [[SPARK-54750]](https://issues.apache.org/jira/browse/SPARK-54750) Fix ROUND returning NULL instead of the correct value for certain Decimal inputs
- [[SPARK-55631]](https://issues.apache.org/jira/browse/SPARK-55631) ALTER TABLE now invalidates the cache for DSv2 tables
- [[SPARK-56414]](https://issues.apache.org/jira/browse/SPARK-56414) Per-write options now take precedence over session config in file source writes

### Geospatial types ([[SPARK-51658]](https://issues.apache.org/jira/browse/SPARK-51658))
- [[SPARK-56771]](https://issues.apache.org/jira/browse/SPARK-56771) Enable geospatial support by default
- [[SPARK-55261]](https://issues.apache.org/jira/browse/SPARK-55261) Parquet read support for Geo types
- [[SPARK-55260]](https://issues.apache.org/jira/browse/SPARK-55260) Parquet write support for Geo types
- [[SPARK-55339]](https://issues.apache.org/jira/browse/SPARK-55339) WKT writer support for Geo objects
- [[SPARK-55449]](https://issues.apache.org/jira/browse/SPARK-55449) Enable WKB parsing and writing for Geography
- [[SPARK-55295]](https://issues.apache.org/jira/browse/SPARK-55295) Extend ST_GeomFromWKB to take an optional SRID value
- [[SPARK-56682]](https://issues.apache.org/jira/browse/SPARK-56682) Extend ST_AsBinary to take optional endianness
- [[SPARK-55539]](https://issues.apache.org/jira/browse/SPARK-55539) Allow casting from GeographyType to GeometryType
- [[SPARK-55790]](https://issues.apache.org/jira/browse/SPARK-55790) Build a complete SRS registry using PROJ 9.7.1 data
- [[SPARK-55530]](https://issues.apache.org/jira/browse/SPARK-55530) Support Geo result sets in Hive and Thrift server

### Change Data Capture ([[SPARK-55668]](https://issues.apache.org/jira/browse/SPARK-55668))
- [[SPARK-55948]](https://issues.apache.org/jira/browse/SPARK-55948) Add DSv2 CDC connector API, analyzer resolution, and SQL CHANGES clause
- [[SPARK-55949]](https://issues.apache.org/jira/browse/SPARK-55949) Add DataFrame API and Spark Connect support for CDC queries
- [[SPARK-55950]](https://issues.apache.org/jira/browse/SPARK-55950) Add PySpark support for CDC changes() API
- [[SPARK-55952]](https://issues.apache.org/jira/browse/SPARK-55952) Add ResolveChangelogTable analyzer rule for batch CDC post-processing
- [[SPARK-56686]](https://issues.apache.org/jira/browse/SPARK-56686) Support streaming row-level CDC post-processing
- [[SPARK-56687]](https://issues.apache.org/jira/browse/SPARK-56687) Support netChanges for DSv2 CDC streaming reads

#### Auto CDC in Declarative Pipelines ([[SPARK-56249]](https://issues.apache.org/jira/browse/SPARK-56249))
- [[SPARK-56651]](https://issues.apache.org/jira/browse/SPARK-56651) Add Python APIs for Auto CDC SCD Type 1
- [[SPARK-56650]](https://issues.apache.org/jira/browse/SPARK-56650) Add Auto CDC Spark Connect APIs
- [[SPARK-56957]](https://issues.apache.org/jira/browse/SPARK-56957) Introduce and integrate the SCD Type 1 streaming write (Scd1MergeStreamingWrite)
- [[SPARK-57080]](https://issues.apache.org/jira/browse/SPARK-57080) Register Auto CDC flows from PipelinesHandler

#### DSv2 partition-stats filtering ([[SPARK-55596]](https://issues.apache.org/jira/browse/SPARK-55596))
- [[SPARK-56190]](https://issues.apache.org/jira/browse/SPARK-56190) Support nested partition columns for DSv2 PartitionPredicate
- [[SPARK-56521]](https://issues.apache.org/jira/browse/SPARK-56521) Support PartitionPredicate in runtime filters
- [[SPARK-56346]](https://issues.apache.org/jira/browse/SPARK-56346) Use PartitionPredicate in DSv2 metadata-only DELETE

#### Schema evolution in DSv2 INSERTs ([[SPARK-55689]](https://issues.apache.org/jira/browse/SPARK-55689))
- [[SPARK-55690]](https://issues.apache.org/jira/browse/SPARK-55690) Schema evolution in DSv2 AppendData, OverwriteByExpression, and OverwritePartitionsDynamic

### Query API
- [[SPARK-54555]](https://issues.apache.org/jira/browse/SPARK-54555) Enable Arrow-optimized Python UDFs and Arrow-based PySpark IPC by default
- [[SPARK-56221]](https://issues.apache.org/jira/browse/SPARK-56221) Feature parity between spark.catalog.* and DDL commands
- [[SPARK-56518]](https://issues.apache.org/jira/browse/SPARK-56518) Add current_path to PySpark functions
- [[SPARK-55702]](https://issues.apache.org/jira/browse/SPARK-55702) Support filter predicate in window aggregate functions
- [[SPARK-54720]](https://issues.apache.org/jira/browse/SPARK-54720) Add SparkSession.emptyDataFrame with a schema
- [[SPARK-55055]](https://issues.apache.org/jira/browse/SPARK-55055) Support SparkSession.Builder.create for PySpark Classic
- [[SPARK-54337]](https://issues.apache.org/jira/browse/SPARK-54337) Add support for PyCapsule (Arrow C data interface) to PySpark
- [[SPARK-54532]](https://issues.apache.org/jira/browse/SPARK-54532) Add SQLSTATE support for PySparkException
- [[SPARK-55610]](https://issues.apache.org/jira/browse/SPARK-55610) Add getExecutorInfos to StatusTracker in Python
- [[SPARK-54731]](https://issues.apache.org/jira/browse/SPARK-54731) Support BinaryType in the reverse expression via byte-level reversal
- [[SPARK-56614]](https://issues.apache.org/jira/browse/SPARK-56614) Add config for strict DataFrame column resolution

#### Vector and sketch functions
- [[SPARK-54713]](https://issues.apache.org/jira/browse/SPARK-54713) Add vector similarity/distance function expressions
- [[SPARK-55030]](https://issues.apache.org/jira/browse/SPARK-55030) Add vector norm/normalize function expressions
- [[SPARK-55031]](https://issues.apache.org/jira/browse/SPARK-55031) Add vector avg/sum aggregation function expressions
- [[SPARK-55322]](https://issues.apache.org/jira/browse/SPARK-55322) MaxBy and MinBy overload with K elements
- [[SPARK-54179]](https://issues.apache.org/jira/browse/SPARK-54179) Add native support for Apache Tuple Sketches
- [[SPARK-55558]](https://issues.apache.org/jira/browse/SPARK-55558) Add support for Tuple/Theta set operations
- [[SPARK-55279]](https://issues.apache.org/jira/browse/SPARK-55279) Add sketch_funcs and Datasketch grouping for SQL functions

#### Arrow and pandas grouped aggregation UDFs
- [[SPARK-53615]](https://issues.apache.org/jira/browse/SPARK-53615) Introduce iterator API for Arrow grouped aggregation UDF
- [[SPARK-53616]](https://issues.apache.org/jira/browse/SPARK-53616) Introduce iterator API for pandas grouped aggregation UDF
- [[SPARK-54617]](https://issues.apache.org/jira/browse/SPARK-54617) Enable Arrow grouped iterator aggregate UDF registration for SQL
- [[SPARK-54722]](https://issues.apache.org/jira/browse/SPARK-54722) Register pandas grouped iterator aggregate UDF for SQL usage
- [[SPARK-55788]](https://issues.apache.org/jira/browse/SPARK-55788) Support ExtensionDType for integers in Pandas UDF

#### Pandas API on Spark
- [[SPARK-46165]](https://issues.apache.org/jira/browse/SPARK-46165) Support axis=1 in DataFrame.all
- [[SPARK-46166]](https://issues.apache.org/jira/browse/SPARK-46166) Support axis=1 in DataFrame.any
- [[SPARK-46167]](https://issues.apache.org/jira/browse/SPARK-46167) Add axis argument to DataFrame.rank
- [[SPARK-46168]](https://issues.apache.org/jira/browse/SPARK-46168) Add axis argument to idxmax
- [[SPARK-55662]](https://issues.apache.org/jira/browse/SPARK-55662) Support axis=1 in DataFrame.idxmin
- [[SPARK-46162]](https://issues.apache.org/jira/browse/SPARK-46162) Implement nunique with axis=1
- [[SPARK-46163]](https://issues.apache.org/jira/browse/SPARK-46163) Add filter_func and errors parameters to DataFrame.update
- [[SPARK-37711]](https://issues.apache.org/jira/browse/SPARK-37711) Reduce pandas describe() job count from O(N) to O(1)
- [[SPARK-50111]](https://issues.apache.org/jira/browse/SPARK-50111) Add subplots and layout support for pie charts in the Plotly backend of pandas-on-Spark DataFrames

#### Notable fixes
- [[SPARK-54962]](https://issues.apache.org/jira/browse/SPARK-54962) Fix nullable integer handling in Pandas UDF that silently lost precision on large values

### Connectors

#### File Sources
- [[SPARK-56045]](https://issues.apache.org/jira/browse/SPARK-56045) Add flag for ignoring Parquet UNKNOWN type annotation and revert to old behavior
- [[SPARK-56588]](https://issues.apache.org/jira/browse/SPARK-56588) Fix PathOutputCommitProtocol dynamic partition overwrite so INSERT OVERWRITE replaces rather than appends partitions

#### JDBC
- [[SPARK-57040]](https://issues.apache.org/jira/browse/SPARK-57040) JDBC connector supports pushing down TABLESAMPLE SYSTEM
- [[SPARK-56251]](https://issues.apache.org/jira/browse/SPARK-56251) Add default fetchSize for Postgres to avoid loading all data in memory
- [[SPARK-57364]](https://issues.apache.org/jira/browse/SPARK-57364) Fix Oracle TRUNC pushdown to map Spark truncation formats to Oracle equivalents

#### TIME type across file formats
- [[SPARK-54451]](https://issues.apache.org/jira/browse/SPARK-54451) JSON serde support for the TIME type, including from_json/to_json
- [[SPARK-54461]](https://issues.apache.org/jira/browse/SPARK-54461) XML serde support for the TIME type, including from_xml/to_xml
- [[SPARK-54463]](https://issues.apache.org/jira/browse/SPARK-54463) CSV serde support for the TIME type, including from_csv/to_csv
- [[SPARK-54472]](https://issues.apache.org/jira/browse/SPARK-54472) ORC read and write support for the TIME type
- [[SPARK-54473]](https://issues.apache.org/jira/browse/SPARK-54473) Avro read and write support for the TIME type
- [[SPARK-54442]](https://issues.apache.org/jira/browse/SPARK-54442) Add numeric conversion functions for TIME type

### UDF (User Defined Functions)
- [[SPARK-55046]](https://issues.apache.org/jira/browse/SPARK-55046) PySpark: add a UDF processing time metric

### Streaming
- [[SPARK-56384]](https://issues.apache.org/jira/browse/SPARK-56384) Support stream-stream non-outer join in Update mode
- [[SPARK-55628]](https://issues.apache.org/jira/browse/SPARK-55628) Integrate stream-stream join state format V4
- [[SPARK-55304]](https://issues.apache.org/jira/browse/SPARK-55304) Support Admission Control and Trigger.AvailableNow in Python data source streaming reader
- [[SPARK-54660]](https://issues.apache.org/jira/browse/SPARK-54660) Add Real-time Mode (RTM) trigger support to PySpark

#### Streaming source and sink naming
- [[SPARK-54909]](https://issues.apache.org/jira/browse/SPARK-54909) Enabling addition, removal and reordering of streaming sources: `DataStreamReader.name()` and `IDENTIFIED BY` syntax to give streaming sources stable identifying names, so sources can be added, removed, and reordered without breaking checkpoints
- [[SPARK-56719]](https://issues.apache.org/jira/browse/SPARK-56719) Add `.name()` to enable streaming sink naming, with a V3 commit log that persists the sink name

#### State Store
- [[SPARK-54121]](https://issues.apache.org/jira/browse/SPARK-54121) Automatic snapshot repair for the state store
- [[SPARK-54106]](https://issues.apache.org/jira/browse/SPARK-54106) Add state store row checksum for corruption detection
- [[SPARK-54063]](https://issues.apache.org/jira/browse/SPARK-54063) Trigger a state-store snapshot on commit for the next batch when snapshot upload lags, for both RocksDB and HDFS providers
- [[SPARK-55058]](https://issues.apache.org/jira/browse/SPARK-55058) Throw an error on inconsistent streaming checkpoint metadata

#### Notable fixes
- [[SPARK-54390]](https://issues.apache.org/jira/browse/SPARK-54390) Fix JSON offset deserialization in StreamingQueryListenerBus so Spark Connect streaming listeners no longer silently mis-deserialize JSON-based offsets

### Spark Connect Framework
- [[SPARK-55606]](https://issues.apache.org/jira/browse/SPARK-55606) Server-side implementation of the GetStatus API for execution status monitoring
- [[SPARK-55691]](https://issues.apache.org/jira/browse/SPARK-55691) Add GetStatus client support
- [[SPARK-57601]](https://issues.apache.org/jira/browse/SPARK-57601) Make the Spark Connect tab available in the History Server
- [[SPARK-55326]](https://issues.apache.org/jira/browse/SPARK-55326) Release the remote session on process exit when SPARK_CONNECT_RELEASE_SESSION_ON_EXIT is set
- [[SPARK-55047]](https://issues.apache.org/jira/browse/SPARK-55047) Add client-side limit for local relation size
- [[SPARK-54314]](https://issues.apache.org/jira/browse/SPARK-54314) Optionally transmit client-side code locations with actions for server-side logging and telemetry
- [[SPARK-55887]](https://issues.apache.org/jira/browse/SPARK-55887) Optimize head()/take()/tail() to avoid full table scans
- [[SPARK-56007]](https://issues.apache.org/jira/browse/SPARK-56007) Fix ArrowDeserializer to use positional binding so the Scala client handles duplicate column names correctly

#### RDD API compatibility ([[SPARK-55227]](https://issues.apache.org/jira/browse/SPARK-55227))
- [[SPARK-55228]](https://issues.apache.org/jira/browse/SPARK-55228) Implement Dataset.zipWithIndex in the Scala API
- [[SPARK-55229]](https://issues.apache.org/jira/browse/SPARK-55229) Implement DataFrame.zipWithIndex in PySpark
- [[SPARK-55090]](https://issues.apache.org/jira/browse/SPARK-55090) Implement DataFrame.toJSON in the Python client
- [[SPARK-56253]](https://issues.apache.org/jira/browse/SPARK-56253) Make spark.read.json accept DataFrame input
- [[SPARK-56254]](https://issues.apache.org/jira/browse/SPARK-56254) Make spark.read.xml accept DataFrame input
- [[SPARK-56255]](https://issues.apache.org/jira/browse/SPARK-56255) Make spark.read.csv accept DataFrame input
- [[SPARK-56256]](https://issues.apache.org/jira/browse/SPARK-56256) Add emptyDataFrame API to SparkSession

### Performance and stability

#### Query Optimizer and Execution
- [[SPARK-40193]](https://issues.apache.org/jira/browse/SPARK-40193) Merge subplans with different filter conditions
- [[SPARK-44571]](https://issues.apache.org/jira/browse/SPARK-44571) Extend subplan merging to non-grouping aggregate subplans, reducing redundant scans
- [[SPARK-56034]](https://issues.apache.org/jira/browse/SPARK-56034) Push Join down through Union when the right side is broadcastable
- [[SPARK-56315]](https://issues.apache.org/jira/browse/SPARK-56315) Pre-aggregate before Expand to reduce data amplification for multiple COUNT(DISTINCT)
- [[SPARK-56467]](https://issues.apache.org/jira/browse/SPARK-56467) Route scalar subquery partition filters into DSv2 runtime filtering
- [[SPARK-56032]](https://issues.apache.org/jira/browse/SPARK-56032) Support subexpression elimination in FilterExec whole-stage codegen
- [[SPARK-56482]](https://issues.apache.org/jira/browse/SPARK-56482) Enable whole-stage codegen fusion for UnionExec
- [[SPARK-53652]](https://issues.apache.org/jira/browse/SPARK-53652) Codegen for MergeRowExec
- [[SPARK-55959]](https://issues.apache.org/jira/browse/SPARK-55959) Optimize map key lookup for GetMapValue and ElementAt
- [[SPARK-56546]](https://issues.apache.org/jira/browse/SPARK-56546) Block-chunked segment-tree window frame for non-invertible sliding aggregates
- [[SPARK-44065]](https://issues.apache.org/jira/browse/SPARK-44065) Optimize BroadcastHashJoin skew in OptimizeSkewedJoin
- [[SPARK-55551]](https://issues.apache.org/jira/browse/SPARK-55551) Improve BroadcastHashJoinExec output partitioning
- [[SPARK-56663]](https://issues.apache.org/jira/browse/SPARK-56663) Restore the fast path for date_trunc at MINUTE/HOUR/DAY granularity
- [[SPARK-54754]](https://issues.apache.org/jira/browse/SPARK-54754) Reuse the ORC TypeDescription in OrcSerializer, roughly halving serialization time for maps, arrays, and structs

#### Vectorized data loading ([[SPARK-55722]](https://issues.apache.org/jira/browse/SPARK-55722))
- [[SPARK-55517]](https://issues.apache.org/jira/browse/SPARK-55517) A series of optimizations to the vectorized Parquet reader (readBytes/readShorts/readBinary, unsigned longs, boolean and null runs) using direct array access and batch buffer reads

#### Python Performance
- [[SPARK-54300]](https://issues.apache.org/jira/browse/SPARK-54300) Optimize Py4J calls in df.toPandas, createDataFrame, DataFrame, toArrow, and schema inference
- [[SPARK-56350]](https://issues.apache.org/jira/browse/SPARK-56350) Skip ColumnarToRow for Arrow-backed input to Python UDFs
- [[SPARK-54392]](https://issues.apache.org/jira/browse/SPARK-54392) Optimize JVM-Python communication for transformWithState initial state

#### Stability
- [[SPARK-55064]](https://issues.apache.org/jira/browse/SPARK-55064) Support query-level indeterminate shuffle retry
- [[SPARK-54556]](https://issues.apache.org/jira/browse/SPARK-54556) Roll back and fully retry succeeding shuffle map stages when a shuffle checksum mismatch is detected, instead of consuming inconsistent data
- [[SPARK-55999]](https://issues.apache.org/jira/browse/SPARK-55999) Enable forceSnapshotUploadOnLag by default
- [[SPARK-56298]](https://issues.apache.org/jira/browse/SPARK-56298) Enable spark.master.rest.virtualThread.enabled by default
- [[SPARK-56410]](https://issues.apache.org/jira/browse/SPARK-56410) Add bounded k-way merge in UnsafeExternalSorter to reduce OOM risk
- [[SPARK-54116]](https://issues.apache.org/jira/browse/SPARK-54116) Add off-heap mode support for LongHashedRelation in shuffled hash join
- [[SPARK-56302]](https://issues.apache.org/jira/browse/SPARK-56302) Free task result memory eagerly during serialization on the executor
- [[SPARK-56279]](https://issues.apache.org/jira/browse/SPARK-56279) Enable zero-copy sendfile for FileRegion in native Netty transports
- [[SPARK-55035]](https://issues.apache.org/jira/browse/SPARK-55035) Perform shuffle cleanup in child executions
- [[SPARK-53469]](https://issues.apache.org/jira/browse/SPARK-53469) Ability to cleanup shuffle in Thrift server
- [[SPARK-56509]](https://issues.apache.org/jira/browse/SPARK-56509) SparkSQL last-attempt metrics
- [[SPARK-55051]](https://issues.apache.org/jira/browse/SPARK-55051) Byte-string configs now accept KiB, MiB, GiB, TiB, and PiB units

#### Security
- [[SPARK-57066]](https://issues.apache.org/jira/browse/SPARK-57066) Use constant-time comparison for authentication secrets to prevent timing attacks
- [[SPARK-57889]](https://issues.apache.org/jira/browse/SPARK-57889) Authorize StreamRequest consistently with ChunkFetchRequest in the transport layer
- [[SPARK-57882]](https://issues.apache.org/jira/browse/SPARK-57882) Enforce AuthV2 metadata authorization on GetPrimaryKeys and GetCrossReference operations
- [[SPARK-57920]](https://issues.apache.org/jira/browse/SPARK-57920) Create temporary files with owner-only permissions
- [[SPARK-57098]](https://issues.apache.org/jira/browse/SPARK-57098) Redact environment and Java options in the standalone Worker UI JSON endpoint
- [[SPARK-57262]](https://issues.apache.org/jira/browse/SPARK-57262) Redact job descriptions per spark.sql.redaction.string.regex on the jobs and SQL execution pages

### Infrastructure

#### Build and Scala/Java Upgrades
- [[SPARK-51167]](https://issues.apache.org/jira/browse/SPARK-51167) Build and run Spark on Java 25, including the K8s image moving to the `25-jre` base and Java 25 support in SparkR

#### Spark Web UI Modernization ([[SPARK-55760]](https://issues.apache.org/jira/browse/SPARK-55760))
- [[SPARK-55766]](https://issues.apache.org/jira/browse/SPARK-55766) Support dark mode with a Bootstrap 5 theme toggle
- [[SPARK-56792]](https://issues.apache.org/jira/browse/SPARK-56792) Support pan and zoom for SQL plan visualization
- [[SPARK-56799]](https://issues.apache.org/jira/browse/SPARK-56799) Search and highlight nodes in SQL plan visualization
- [[SPARK-55877]](https://issues.apache.org/jira/browse/SPARK-55877) Side-by-side Initial vs Final plan comparison for AQE queries
- [[SPARK-55785]](https://issues.apache.org/jira/browse/SPARK-55785) Compact SQL plan visualization with a detail side panel
- [[SPARK-55878]](https://issues.apache.org/jira/browse/SPARK-55878) Add a Job Timeline to the SQL execution detail page
- [[SPARK-55875]](https://issues.apache.org/jira/browse/SPARK-55875) Switch SQL tab query listing to client-side, sortable, paginated DataTables
- [[SPARK-55835]](https://issues.apache.org/jira/browse/SPARK-55835) Highlight non-default Spark configuration values on the Environment page
- [[SPARK-55839]](https://issues.apache.org/jira/browse/SPARK-55839) Add an export-config button to the Environment page
- [[SPARK-56048]](https://issues.apache.org/jira/browse/SPARK-56048) Add copy-plan-text and share-link buttons to the SQL execution page

#### Observability
- [[SPARK-55008]](https://issues.apache.org/jira/browse/SPARK-55008) Display Query ID in the Spark UI
- [[SPARK-54877]](https://issues.apache.org/jira/browse/SPARK-54877) Add spark.ui.showErrorStacks config to disable displaying stack traces on the UI error page

#### Spark History Server scalability ([[SPARK-56287]](https://issues.apache.org/jira/browse/SPARK-56287))
- [[SPARK-55793]](https://issues.apache.org/jira/browse/SPARK-55793) Add multiple log-directory support to the SHS
- [[SPARK-56234]](https://issues.apache.org/jira/browse/SPARK-56234) Support disabling log-directory scanning by path pattern in the SHS
- [[SPARK-56278]](https://issues.apache.org/jira/browse/SPARK-56278) Populate accurate metadata immediately during on-demand loading in the SHS

### Deployment

#### Kubernetes
- [[SPARK-54173]](https://issues.apache.org/jira/browse/SPARK-54173) Add support for the Deployment API on K8s
- [[SPARK-54553]](https://issues.apache.org/jira/browse/SPARK-54553) Support spark.kubernetes.scheduler.volcano.podGroupTemplateJson
- [[SPARK-55653]](https://issues.apache.org/jira/browse/SPARK-55653) Support NetworkPolicy for Spark executor pods

#### Support heterogeneous K8s executor management ([[SPARK-55555]](https://issues.apache.org/jira/browse/SPARK-55555))
- [[SPARK-55432]](https://issues.apache.org/jira/browse/SPARK-55432) Support built-in K8s ExecutorResizePlugin
- [[SPARK-56693]](https://issues.apache.org/jira/browse/SPARK-56693) Support built-in K8s ExecutorPVCResizePlugin
- [[SPARK-55639]](https://issues.apache.org/jira/browse/SPARK-55639) Support recovery-mode K8s executors
- [[SPARK-55496]](https://issues.apache.org/jira/browse/SPARK-55496) Support re-use of scaled PVCs
- [[SPARK-55327]](https://issues.apache.org/jira/browse/SPARK-55327) Reduce Spark docker image sizes

#### K8s Resource Manager API ([[SPARK-56603]](https://issues.apache.org/jira/browse/SPARK-56603))
- [[SPARK-56600]](https://issues.apache.org/jira/browse/SPARK-56600) Promote the Kubernetes resource-manager API (SparkPod, KubernetesConf/Utils, driver spec and builder) to Stable, with Java-friendly factory methods and getters

#### Reduce K8s control plane overhead ([[SPARK-55400]](https://issues.apache.org/jira/browse/SPARK-55400))
- [[SPARK-55370]](https://issues.apache.org/jira/browse/SPARK-55370) Use the `patch` API instead of `edit` across executor annotation, decommissioning, and diagnostics paths
- [[SPARK-56793]](https://issues.apache.org/jira/browse/SPARK-56793) Avoid cluster-wide LIST in executor pods polling

#### Other
- [[SPARK-55831]](https://issues.apache.org/jira/browse/SPARK-55831) Support spark.yarn.am.defaultJavaOptions
- [[SPARK-56528]](https://issues.apache.org/jira/browse/SPARK-56528) Make Jetty SniHostCheck configurable via spark.ui.jetty.sniHostCheckEnabled
- [[SPARK-57589]](https://issues.apache.org/jira/browse/SPARK-57589) Support spark.ui.contentSecurityPolicy.enabled to add a Content-Security-Policy header to the Spark UI
- [[SPARK-57580]](https://issues.apache.org/jira/browse/SPARK-57580) Redact credentials embedded in JDBC URLs
- [[SPARK-57767]](https://issues.apache.org/jira/browse/SPARK-57767) Drop support for R 3.x

### Version upgrade of Java and Scala libraries

| Library Name | Version Change |
| :------------------------------- | :------------------ |
| HdrHistogram | -> 2.1.12 (NEW) |
| RoaringBitmap | 1.3.0 -> 1.6.10 |
| aircompressor | 2.0.2 -> 2.0.3 |
| aliyun-java-core | -> 0.2.11-beta (NEW) |
| aliyun-sdk-oss | 3.13.2 -> 3.18.1 |
| analyticsaccelerator-s3 | 1.3.0 -> 1.3.1 |
| arpack | 3.0.4 -> 3.2.0 |
| arrow-compression | 18.3.0 -> 19.0.0 |
| arrow-format | 18.3.0 -> 19.0.0 |
| arrow-memory-core | 18.3.0 -> 19.0.0 |
| arrow-memory-netty | 18.3.0 -> 19.0.0 |
| arrow-memory-netty-buffer-patch | 18.3.0 -> 19.0.0 |
| arrow-vector | 18.3.0 -> 19.0.0 |
| blas | 3.0.4 -> 3.2.0 |
| bundle | 2.29.52 -> 2.35.4 |
| commons-cli | 1.10.0 -> 1.11.0 |
| commons-codec | 1.19.0 -> 1.22.0 |
| commons-io | 2.21.0 -> 2.22.0 |
| commons-lang3 | 3.19.0 -> 3.20.0 |
| commons-text | 1.14.0 -> 1.15.0 |
| compress-lzf | 1.1.2 -> 1.2.0 |
| dom4j | -> 2.1.4 (NEW) |
| gcs-connector | hadoop3-2.2.28 -> REMOVED |
| gson | 2.11.0 -> 2.13.2 |
| guava | 33.4.8-jre -> 33.6.0-jre |
| hadoop-aliyun | 3.4.2 -> 3.5.0 |
| hadoop-annotations | 3.4.2 -> 3.5.0 |
| hadoop-aws | 3.4.2 -> 3.5.0 |
| hadoop-azure | 3.4.2 -> 3.5.0 |
| hadoop-azure-datalake | 3.4.2 -> 3.5.0 |
| hadoop-client-api | 3.4.2 -> 3.5.0 |
| hadoop-client-runtime | 3.4.2 -> 3.5.0 |
| hadoop-cloud-storage | 3.4.2 -> 3.5.0 |
| hadoop-gcp | -> 3.5.0 (NEW) |
| hadoop-huaweicloud | 3.4.2 -> 3.5.0 |
| hadoop-shaded-guava | 1.4.0 -> 1.5.0 |
| icu4j | 77.1 -> 78.3 |
| jackson-annotations | 2.20 -> 2.21 |
| jackson-core | 2.20.0 -> 2.21.2 |
| jackson-databind | 2.20.0 -> 2.21.2 |
| jackson-dataformat-cbor | 2.20.0 -> 2.21.2 |
| jackson-dataformat-yaml | 2.20.0 -> 2.21.2 |
| jackson-datatype-jsr310 | 2.20.0 -> 2.21.2 |
| jackson-module-scala_2.13 | 2.20.0 -> 2.21.2 |
| jakarta.activation-api | 2.1.3 -> 2.1.4 |
| jakarta.servlet-api | 5.0.0 -> 6.0.0 |
| jakarta.ws.rs-api | 3.0.0 -> 3.1.0 |
| jakarta.xml.bind-api | 4.0.2 -> 4.0.5 |
| java-trace-api | -> 0.2.11-beta (NEW) |
| jaxb-core | 4.0.5 -> 4.0.6 |
| jaxb-runtime | 4.0.5 -> 4.0.6 |
| jdom2 | 2.0.6 -> 2.0.6.1 |
| jersey-client | 3.0.18 -> 3.1.11 |
| jersey-common | 3.0.18 -> 3.1.11 |
| jersey-container-servlet | 3.0.18 -> 3.1.11 |
| jersey-container-servlet-core | 3.0.18 -> 3.1.11 |
| jersey-hk2 | 3.0.18 -> 3.1.11 |
| jersey-server | 3.0.18 -> 3.1.11 |
| jetty-util | 11.0.26 -> REMOVED |
| jetty-util-ajax | 11.0.26 -> REMOVED |
| jjwt-api | 0.12.6 -> 0.13.0 |
| jjwt-impl | 0.12.6 -> 0.13.0 |
| jjwt-jackson | 0.12.6 -> 0.13.0 |
| joda-time | 2.14.0 -> 2.14.1 |
| kubernetes-client | 7.4.0 -> 7.6.1 |
| kubernetes-client-api | 7.4.0 -> 7.6.1 |
| kubernetes-httpclient-vertx | 7.4.0 -> 7.6.1 |
| kubernetes-model-admissionregistration | 7.4.0 -> 7.6.1 |
| kubernetes-model-apiextensions | 7.4.0 -> 7.6.1 |
| kubernetes-model-apps | 7.4.0 -> 7.6.1 |
| kubernetes-model-autoscaling | 7.4.0 -> 7.6.1 |
| kubernetes-model-batch | 7.4.0 -> 7.6.1 |
| kubernetes-model-certificates | 7.4.0 -> 7.6.1 |
| kubernetes-model-common | 7.4.0 -> 7.6.1 |
| kubernetes-model-coordination | 7.4.0 -> 7.6.1 |
| kubernetes-model-core | 7.4.0 -> 7.6.1 |
| kubernetes-model-discovery | 7.4.0 -> 7.6.1 |
| kubernetes-model-events | 7.4.0 -> 7.6.1 |
| kubernetes-model-extensions | 7.4.0 -> 7.6.1 |
| kubernetes-model-flowcontrol | 7.4.0 -> 7.6.1 |
| kubernetes-model-gatewayapi | 7.4.0 -> 7.6.1 |
| kubernetes-model-metrics | 7.4.0 -> 7.6.1 |
| kubernetes-model-networking | 7.4.0 -> 7.6.1 |
| kubernetes-model-node | 7.4.0 -> 7.6.1 |
| kubernetes-model-policy | 7.4.0 -> 7.6.1 |
| kubernetes-model-rbac | 7.4.0 -> 7.6.1 |
| kubernetes-model-resource | 7.4.0 -> 7.6.1 |
| kubernetes-model-scheduling | 7.4.0 -> 7.6.1 |
| kubernetes-model-storageclass | 7.4.0 -> 7.6.1 |
| lapack | 3.0.4 -> 3.2.0 |
| log4j-1.2-api | 2.24.3 -> 2.25.4 |
| log4j-api | 2.24.3 -> 2.25.4 |
| log4j-core | 2.24.3 -> 2.25.4 |
| log4j-layout-template-json | 2.24.3 -> 2.25.4 |
| log4j-slf4j2-impl | 2.24.3 -> 2.25.4 |
| lz4-java | 1.8.0 -> 1.11.0 |
| netty-all | 4.2.7.Final -> 4.2.13.Final |
| netty-buffer | 4.2.7.Final -> 4.2.13.Final |
| netty-codec | 4.2.7.Final -> 4.2.13.Final |
| netty-codec-base | 4.2.7.Final -> 4.2.13.Final |
| netty-codec-classes-quic | 4.2.7.Final -> REMOVED |
| netty-codec-compression | 4.2.7.Final -> 4.2.13.Final |
| netty-codec-dns | 4.2.7.Final -> 4.2.13.Final |
| netty-codec-http | 4.2.7.Final -> 4.2.13.Final |
| netty-codec-http2 | 4.2.7.Final -> 4.2.13.Final |
| netty-codec-http3 | 4.2.7.Final -> REMOVED |
| netty-codec-marshalling | 4.2.7.Final -> REMOVED |
| netty-codec-native-quic | 4.2.7.Final -> REMOVED |
| netty-codec-protobuf | 4.2.7.Final -> REMOVED |
| netty-codec-socks | 4.2.7.Final -> 4.2.13.Final |
| netty-common | 4.2.7.Final -> 4.2.13.Final |
| netty-handler | 4.2.7.Final -> 4.2.13.Final |
| netty-handler-proxy | 4.2.7.Final -> 4.2.13.Final |
| netty-resolver | 4.2.7.Final -> 4.2.13.Final |
| netty-resolver-dns | 4.2.7.Final -> 4.2.13.Final |
| netty-tcnative-boringssl-static | 2.0.74.Final -> 2.0.76.Final |
| netty-tcnative-classes | 2.0.74.Final -> 2.0.76.Final |
| netty-transport | 4.2.7.Final -> 4.2.13.Final |
| netty-transport-classes-epoll | 4.2.7.Final -> 4.2.13.Final |
| netty-transport-classes-io_uring | 4.2.7.Final -> REMOVED |
| netty-transport-classes-kqueue | 4.2.7.Final -> 4.2.13.Final |
| netty-transport-native-epoll | 4.2.7.Final -> 4.2.13.Final |
| netty-transport-native-io_uring | 4.2.7.Final -> REMOVED |
| netty-transport-native-kqueue | 4.2.7.Final -> 4.2.13.Final |
| netty-transport-native-unix-common | 4.2.7.Final -> 4.2.13.Final |
| objenesis | 3.4 -> 3.5 |
| opentelemetry-api | -> 1.49.0 (NEW) |
| opentelemetry-context | -> 1.49.0 (NEW) |
| orc-core | 2.2.1 -> 2.3.0 |
| orc-mapreduce | 2.2.1 -> 2.3.0 |
| orc-shims | 2.2.1 -> 2.3.0 |
| parquet-column | 1.16.0 -> 1.17.0 |
| parquet-common | 1.16.0 -> 1.17.0 |
| parquet-encoding | 1.16.0 -> 1.17.0 |
| parquet-format-structures | 1.16.0 -> 1.17.0 |
| parquet-hadoop | 1.16.0 -> 1.17.0 |
| parquet-jackson | 1.16.0 -> 1.17.0 |
| reactive-streams | -> 1.0.3 (NEW) |
| scala-compiler | 2.13.17 -> 2.13.18 |
| scala-library | 2.13.17 -> 2.13.18 |
| scala-reflect | 2.13.17 -> 2.13.18 |
| snakeyaml | 2.4 -> 2.5 |
| snakeyaml-engine | 2.10 -> 3.0.1 |
| tink | 1.16.0 -> 1.20.0 |
| vertx-auth-common | 4.5.14 -> 4.5.26 |
| vertx-core | 4.5.14 -> 4.5.26 |
| vertx-uri-template | -> 4.5.26 (NEW) |
| vertx-web-client | 4.5.14 -> 4.5.26 |
| vertx-web-common | 4.5.14 -> 4.5.26 |
| volcano-client | -> 7.6.1 (NEW) |
| volcano-model | -> 7.6.1 (NEW) |
| xbean-asm9-shaded | 4.28 -> 4.30 |
| xz | 1.10 -> 1.12 |
| zjsonpatch | 7.4.0 -> 7.6.1 |
| zookeeper | 3.9.4 -> 3.9.5 |
| zookeeper-jute | 3.9.4 -> 3.9.5 |
| zstd-jni | 1.5.7-6 -> 1.5.7-7 |

---

### Credits

Last but not least, this release would not have been possible without the following contributors:
AbinayaJayaprakasam, Adam Binford, Adithya Ajith, Aditya Nambiar, Akash Nayar, Akira Ajisaka, Albert Sugranyes, Aleksandr Chernousov, Alex Khakhlyuk, Alexis Schlomer, Allison Wang, Amanda Liu, Anastasiia Terenteva, Andreas Chatzistergiou, Andreas Neumann, Angerszhuuuu, AnishMahto, Anshul Baliga, antban, Anton Lykov, Anton Okolnychyi, Antonio Blanco, Anupam Yadav, ashrithb, Asif Hussain Shahid, Attila Zsolt Piros, beliefer, Biruk Tesfaye, Bjørn Jørgensen, Bo Zhang, Bobby Wang, Boyang Jerry Peng, BRIJ RAJ KISHORE, Brooks Walls, Burak Yavuz, cafri.sun, Celeste Horgan, Chang chen, Chao Sun, Chen Wang, Cheng Pan, Chenhao Li, Chirag Singh, Chris Boumalhab, ChuckLin2025, cloud-fan, cty123, cuiyanxiang, cxzl25, Daniel Tenedorio, David Milicevic, David Roberts, David Tagatac, David Young, DB Tsai, Dejan Krakovic, DenineLu, Devin Petersohn, DhruvArya, Dilip Biswal, Dmytro Fedoriaka, donaldchai, Dongjoon Hyun, Dylan Wong, Eddie Bkheet, Emilie Faracci, Eren Avsarogullari, Eric Marnadi, Eric Yang, EugenYushin, Fangchen Li, fanyue-xia, Felipe Fujiy Pessoto, Felix, Filip Darmanovic, Filip Davidovic, Fu Chen, Ganesha S, gaoyajun02, Garland Zhang, Gengliang Wang, Gera Shegalov, Gurpreet Nanda, Haiyang Sun, haoyangeng-db, Harsh Motwani, Helios He, Herman van Hövell, Holden Karau, holyvolcano, Hongze Zhang, huangxiaoping, huanliwang-db, Huaxin Gao, Hyukjin Kwon, ibenchhida, Ivan Sadikov, Iván Morales, Jacek Laskowski, Jacky Wang, Jahnavi Nelavelli, jameswillis, Jarek Potiuk, jbharadw-oai, Jerry Peng, Jerry Zheng, Jessie Luo, Jia Teoh, Jim Halfpenny, Jitesh Soni, Jiwon Park, Johan Lasperas, John Xu, John Zhuge, Jon Mio, Joon Ro, judy, Juliusz Sompolski, Jungtaek Lim, Junyu Chen, Karthik Prabhakar, Karuppayya Rajendran, Kavpreet Grewal, Kazuyuki Tanimura, Ke Jia, Kelvin Jiang, Kent Yao, kepler62f, Kiyeon Jeon, Kousuke Saruta, Kris Mok, Kristin Cowalcijk, Leon Windheuser, lepan, Liang-Chi Hsieh, Linhong Liu, Livia Zhu, Luca Canali, manuzhang, Marcin Wojtyczka, Marco Gaido, mariaselvam.nishanth, Mark Jarvin, Mark Molinaro, Marko Ilić, Marko Sisovic, Martin Grund, Matt Zhang, Maxim Gekk, micheal-o, Mihailo Aleksic, Mihailo Timotic, Mikhail Nikoliukin, Milan Dankovic, Naveen Kumar Puppala, Nicholas Chammas, Nicholas Chew, Nikolina Vraneš, nyaapa, Pablo Langa, Parth Chandra, pavle-martinovic_data, Petar Nikić, Peter Toth, pranavdev022, Pratham Manja, Puneet Dixit, Qiegang Long, qindongliang, Rahul Sharma, Richard Chen, rishav23, RishbhaJain, Rito Takeuchi, Robert Dillitz, Roy Huang, ruanwenjun, Ruifeng Zheng, sahilkumarsingh, Sandro Sp, Sandy Ryza, Serge Rielau, Shilong Duan, Shrirang Mhalgi, Shuai Lu, Shubhambhusate, Shujing Yang, Simola Nayak, Siying Dong, st-tran, Stanley Yao, Stefan Kandic, Stefan Savić, Stevo Mitric, susheel-aroskar, Sven Weber, sychen, Szehon Ho, Takuya Ueshin, tangrizzly, Tengfei Huang, Thang Long Vu, Tian Gao, Tim Lee, TongWei, tugce-applied, Uros Bojanic, Uros Stankovic, Victor Sunderland, VINDHYA G BHAT, vinodkc, Vlad Rozov, Vladan Vasić, Vladimir Golubev, Wei Liu, Weichen Xu, Wenchen Fan, wforget, WHJian, Wojciech Szlachta, Xi Lyu, Xiang Li, Xianming Lei, xianzhe-databricks, Xiaonan Yang, Xiaoxuan Li, xihuan_mstr, Xin Huang, Xingbo Jiang, Xinyi Yu, yamayuki-hub, Yan Yan, Yang Jie, Yash Botadra, yhuang-db, Yi Wu, Yicong Huang, Yihong He, You Zhou, Yuchen Liu, Yuheng Chang, Yuming Wang, yyanyy, Zequn Lin, Zero Qu, zeruibao, zhidongqu-db, Zifei Feng, Zikang Han, Ziqi Liu, Ziya Mukhtarov, zml1206, Zoey Han, zouxxyy
