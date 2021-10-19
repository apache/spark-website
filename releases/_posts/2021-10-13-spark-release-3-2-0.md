---
layout: post
title: Spark Release 3.2.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
_edit_last: '4'
_wpas_done_all: '1'
---

Apache Spark 3.2.0 is the third release of the 3.x line. With tremendous contribution from the open-source community, this release managed to resolve in excess of 1,700 Jira tickets.

In this release, Spark supports the Pandas API layer on Spark. Pandas users can scale out their applications on Spark with one line code change. Other major updates include RocksDB StateStore support, session window support, push-based shuffle support, ANSI SQL INTERVAL types, enabling Adaptive Query Execution (AQE) by default, and ANSI SQL mode GA.

To download Apache Spark 3.2.0, visit the [downloads](https://spark.apache.org/downloads.html) page. You can consult JIRA for the [detailed changes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315420&version=12349407). We have curated a list of high level changes here, grouped by major modules.

* This will become a table of contents (this text will be scraped).
{:toc}

### Highlights

* Support Pandas API layer on PySpark ([SPARK-34849](https://issues.apache.org/jira/browse/SPARK-34849))
* Enable adaptive query execution by default ([SPARK-33679](https://issues.apache.org/jira/browse/SPARK-33679))
* Support push-based shuffle to improve shuffle efficiency ([SPARK-30602](https://issues.apache.org/jira/browse/SPARK-30602))
* Add RocksDB StateStore implementation ([SPARK-34198](https://issues.apache.org/jira/browse/SPARK-34198))
* EventTime based sessionization (session window) ([SPARK-10816](https://issues.apache.org/jira/browse/SPARK-10816))
* ANSI SQL mode GA ([SPARK-35030](https://issues.apache.org/jira/browse/SPARK-35030))
* Support for ANSI SQL INTERVAL types ([SPARK-27790](https://issues.apache.org/jira/browse/SPARK-27790))
* Query compilation latency reduction ([SPARK-35042](https://issues.apache.org/jira/browse/SPARK-35042), [SPARK-35103](https://issues.apache.org/jira/browse/SPARK-35103), [SPARK-34989](https://issues.apache.org/jira/browse/SPARK-34989))
* Support Scala 2.13 ([SPARK-34218](https://issues.apache.org/jira/browse/SPARK-34218))


### Core and Spark SQL

**ANSI SQL Compatibility Enhancements**

* Support for ANSI SQL INTERVAL types ([SPARK-27790](https://issues.apache.org/jira/browse/SPARK-27790))
* New type coercion syntax rules in ANSI mode ([SPARK-34246](https://issues.apache.org/jira/browse/SPARK-34246))
* Support LATERAL subqueries ([SPARK-34382](https://issues.apache.org/jira/browse/SPARK-34382))
* ANSI mode: IntegralDivide throws an exception on overflow ([SPARK-35152](https://issues.apache.org/jira/browse/SPARK-35152))
* ANSI mode: Check for overflow in Average ([SPARK-35955](https://issues.apache.org/jira/browse/SPARK-35955))
* Block count(table.*) to follow ANSI standard and other SQL engines ([SPARK-34199](https://issues.apache.org/jira/browse/SPARK-34199))
* Support (IGNORE | RESPECT) NULLS for LEAD/LAG/NTH_VALUE/FIRST_VALUE/LAST_VALUE ([SPARK-30789](https://issues.apache.org/jira/browse/SPARK-30789))

**Performance**

* Query compilation latency
  * Support traversal pruning in transform/resolve functions and their call sites ([SPARK-35042](https://issues.apache.org/jira/browse/SPARK-35042))
  * Improve the performance of mapChildren and withNewChildren methods ([SPARK-34989](https://issues.apache.org/jira/browse/SPARK-34989))
  * Improve the performance of type coercion rules ([SPARK-35103](https://issues.apache.org/jira/browse/SPARK-35103))
* Query optimization
  * Remove redundant aggregates in the Optimizer ([SPARK-33122](https://issues.apache.org/jira/browse/SPARK-33122))
  * Push down limit through Project with Join ([SPARK-34622](https://issues.apache.org/jira/browse/SPARK-34622))
  * Push down limit for LEFT SEMI and LEFT ANTI join ([SPARK-36404](https://issues.apache.org/jira/browse/SPARK-36404), [SPARK-34514](https://issues.apache.org/jira/browse/SPARK-34514))
  * Push down limit through WINDOW when partition spec is empty ([SPARK-34575](https://issues.apache.org/jira/browse/SPARK-34575))
  * Use a relative cost comparison function in the CBO ([SPARK-34922](https://issues.apache.org/jira/browse/SPARK-34922))
  * Cardinality estimation of union, sort, and range operator ([SPARK-33411](https://issues.apache.org/jira/browse/SPARK-33411))
  * Only push down LeftSemi/LeftAnti over Aggregate if join can be planned as broadcast join ([SPARK-34081](https://issues.apache.org/jira/browse/SPARK-34081))
  * UnwrapCastInBinaryComparison support In/InSet predicate ([SPARK-35316](https://issues.apache.org/jira/browse/SPARK-35316))
  * Subexpression elimination enhancements ([SPARK-35448](https://issues.apache.org/jira/browse/SPARK-35448))
  * Keep necessary stats after partition pruning ([SPARK-34119](https://issues.apache.org/jira/browse/SPARK-34119))
  * Decouple bucket filter pruning and bucket table scan ([SPARK-32985](https://issues.apache.org/jira/browse/SPARK-32985))
* Query execution
  * Adaptive query execution
    * Enable adaptive query execution by default ([SPARK-33679](https://issues.apache.org/jira/browse/SPARK-33679))
    * Support Dynamic Partition Pruning (DPP) in AQE when the join is broadcast hash join at the beginning or there is no reused broadcast exchange ([SPARK-34168](https://issues.apache.org/jira/browse/SPARK-34168), [SPARK-35710](https://issues.apache.org/jira/browse/SPARK-35710))
    * Optimize skew join before coalescing shuffle partitions ([SPARK-35447](https://issues.apache.org/jira/browse/SPARK-35447))
    * Support AQE side shuffled hash join formula using rule ([SPARK-35282](https://issues.apache.org/jira/browse/SPARK-35282))
    * Support AQE side broadcast hash join threshold ([SPARK-35264](https://issues.apache.org/jira/browse/SPARK-35264))
    * Allow custom plugin for AQE cost evaluator ([SPARK-35794](https://issues.apache.org/jira/browse/SPARK-35794))
  * Enable Zstandard buffer pool by default ([SPARK-34340](https://issues.apache.org/jira/browse/SPARK-34340), [SPARK-34390](https://issues.apache.org/jira/browse/SPARK-34390))
  * Add code-gen for all join types of sort-merge join ([SPARK-34705](https://issues.apache.org/jira/browse/SPARK-34705))
  * Whole plan exchange and subquery reuse ([SPARK-29375](https://issues.apache.org/jira/browse/SPARK-29375))
  * Broadcast nested loop join improvement ([SPARK-34706](https://issues.apache.org/jira/browse/SPARK-34706))
  * Allow concurrent writers for writing dynamic partitions and bucket table ([SPARK-26164](https://issues.apache.org/jira/browse/SPARK-26164))
  * Improve performance of processing FETCH_PRIOR in Spark Thrift server ([SPARK-33655](https://issues.apache.org/jira/browse/SPARK-33655))

**Connector Enhancements**

* Parquet
  * Upgrade Apache Parquet used to version 1.12.1 ([SPARK-36726](https://issues.apache.org/jira/browse/SPARK-36726))
  * Support column index in Parquet vectorized reader ([SPARK-34289](https://issues.apache.org/jira/browse/SPARK-34289))
  * Add new parquet data source options to control datetime rebasing in read ([SPARK-34377](https://issues.apache.org/jira/browse/SPARK-34377))
  * Read parquet unsigned types that are stored as int32 physical type in parquet ([SPARK-34817](https://issues.apache.org/jira/browse/SPARK-34817))
  * Read Parquet unsigned int64 logical type that stored as signed int64 physical type to decimal(20, 0) ([SPARK-34786](https://issues.apache.org/jira/browse/SPARK-34786))
  * Handle column index when using vectorized Parquet reader ([SPARK-34859](https://issues.apache.org/jira/browse/SPARK-34859))
  * Improve Parquet In filter pushdown ([SPARK-32792](https://issues.apache.org/jira/browse/SPARK-32792))
* ORC
  * Upgrade Apache ORC used to version 1.6.11 ([SPARK-36482](https://issues.apache.org/jira/browse/SPARK-36482))
  * Support Apache ORC forced positional evolution ([SPARK-32864](https://issues.apache.org/jira/browse/SPARK-32864))
  * Support nested column in ORC vectorized reader ([SPARK-34862](https://issues.apache.org/jira/browse/SPARK-34862))
  * Support ZSTD, LZ4 compression in ORC data source ([SPARK-33978](https://issues.apache.org/jira/browse/SPARK-33978), [SPARK-35612](https://issues.apache.org/jira/browse/SPARK-35612))
  * Set the list of read columns in the task configuration to reduce reading of ORC data ([SPARK-35783](https://issues.apache.org/jira/browse/SPARK-35783))
* Avro
  * Upgrade Apache Avro used to version 1.10.2 ([SPARK-34778](https://issues.apache.org/jira/browse/SPARK-34778))
  * Supporting Avro schema evolution for partitioned Hive tables with "avro.schema.literal" ([SPARK-26836](https://issues.apache.org/jira/browse/SPARK-26836))
  * Add new Avro datasource options to control datetime rebasing in read ([SPARK-34404](https://issues.apache.org/jira/browse/SPARK-34404))
  * Adding support for user provided schema url in Avro ([SPARK-34416](https://issues.apache.org/jira/browse/SPARK-34416))
  * Add support for positional Catalyst-to-Avro schema matching ([SPARK-34365](https://issues.apache.org/jira/browse/SPARK-34365))
* JSON
  * Upgrade Jackson used to version 2.12.3 ([SPARK-35550](https://issues.apache.org/jira/browse/SPARK-35550))
  * Allow JSON data sources to write non-ASCII characters as codepoints ([SPARK-35047](https://issues.apache.org/jira/browse/SPARK-35047))
* CSV
  * Upgrade univocity-parsers to 2.9.1 ([SPARK-33940](https://issues.apache.org/jira/browse/SPARK-33940))
* JDBC
  * Map JDBC SQL TIME type to TimestampType with time portion fixed regardless of timezone ([SPARK-34357](https://issues.apache.org/jira/browse/SPARK-34357))
  * Calculate more precise partition stride in JDBCRelation ([SPARK-34843](https://issues.apache.org/jira/browse/SPARK-34843))
  * Support refreshKrb5Config option in JDBC data sources ([SPARK-35226](https://issues.apache.org/jira/browse/SPARK-35226))
* Hive Metastore support filter by NOT IN ([SPARK-34538](https://issues.apache.org/jira/browse/SPARK-34538))

**Kubernetes Enhancements**

* Upgrade Kubernetes client to 5.4.1 ([SPARK-35660](https://issues.apache.org/jira/browse/SPARK-35660))
* Support spark.kubernetes.executor.disableConfigMap ([SPARK-34316](https://issues.apache.org/jira/browse/SPARK-34316))
* Support remote template files ([SPARK-34783](https://issues.apache.org/jira/browse/SPARK-34783))
* Introducing a limit for pending PODs ([SPARK-36052](https://issues.apache.org/jira/browse/SPARK-36052))
* Support shuffle data recovery on the reused PVCs ([SPARK-35593](https://issues.apache.org/jira/browse/SPARK-35593))
* Support early driver service clean-up during app termination ([SPARK-35131](https://issues.apache.org/jira/browse/SPARK-35131))
* Add config for driver readiness timeout before executors start ([SPARK-32975](https://issues.apache.org/jira/browse/SPARK-32975))
* Support driver-owned on-demand PVC ([SPARK-35182](https://issues.apache.org/jira/browse/SPARK-35182))
* Maximum decommissioning time & allow decommissioning for excludes ([SPARK-34104](https://issues.apache.org/jira/browse/SPARK-34104))
* Support submit to k8s only with token ([SPARK-33720](https://issues.apache.org/jira/browse/SPARK-33720))
* Add a developer API for custom feature steps ([SPARK-33261](https://issues.apache.org/jira/browse/SPARK-33261))

**Data Source V2 API**

* Aggregate pushdown APIs ([SPARK-34952](https://issues.apache.org/jira/browse/SPARK-34952))
* FunctionCatalog API ([SPARK-27658](https://issues.apache.org/jira/browse/SPARK-27658))
* DataSourceV2 Function Catalog implementation ([SPARK-35260](https://issues.apache.org/jira/browse/SPARK-35260))
* Add API to request distribution and ordering on write ([SPARK-33779](https://issues.apache.org/jira/browse/SPARK-33779))
* Add interfaces to pass the required sorting and clustering for writes ([SPARK-23889](https://issues.apache.org/jira/browse/SPARK-23889))
* Support metrics from Datasource v2 scan ([SPARK-34338](https://issues.apache.org/jira/browse/SPARK-34338))
* Support metrics at writing path ([SPARK-36030](https://issues.apache.org/jira/browse/SPARK-36030))
* Support partitioning with a static number on the required distribution and ordering on write ([SPARK-34255](https://issues.apache.org/jira/browse/SPARK-34255))
* Support Dynamic filtering ([SPARK-35779](https://issues.apache.org/jira/browse/SPARK-35779))
* Support LocalScan ([SPARK-35535](https://issues.apache.org/jira/browse/SPARK-35535))
* MERGE ... UPDATE/INSERT * should do by-name resolution ([SPARK-34720](https://issues.apache.org/jira/browse/SPARK-34720))

**Feature Enhancements**

* Subquery improvements
  * Improve correlated subqueries ([SPARK-35553](https://issues.apache.org/jira/browse/SPARK-35553))
  * Allow non-aggregated single row correlated scalar subquery ([SPARK-28379](https://issues.apache.org/jira/browse/SPARK-28379))
  * Only allow a subset of correlated equality predicates when a subquery is aggregated ([SPARK-35080](https://issues.apache.org/jira/browse/SPARK-35080))
  * Resolve star expressions in subqueries using outer query plans ([SPARK-35618](https://issues.apache.org/jira/browse/SPARK-35618))
* New built-in functions
  * current_user ([SPARK-21957](https://issues.apache.org/jira/browse/SPARK-21957))
  * product ([SPARK-33678](https://issues.apache.org/jira/browse/SPARK-33678))
  * regexp_like,regexp ([SPARK-33597](https://issues.apache.org/jira/browse/SPARK-33597), [SPARK-34376](https://issues.apache.org/jira/browse/SPARK-34376))
  * try_cast ([SPARK-34881](https://issues.apache.org/jira/browse/SPARK-34881))
  * try_add ([SPARK-35162](https://issues.apache.org/jira/browse/SPARK-35162))
  * try_divide ([SPARK-35162](https://issues.apache.org/jira/browse/SPARK-35162))
  * bit_get ([SPARK-33245](https://issues.apache.org/jira/browse/SPARK-33245))
* Use Apache Hadoop 3.3.1 by default ([SPARK-29250](https://issues.apache.org/jira/browse/SPARK-29250))
* Make user-defined type (UDT) API public ([SPARK-7768](https://issues.apache.org/jira/browse/SPARK-7768))
* Add checksum for shuffle blocks ([SPARK-35275](https://issues.apache.org/jira/browse/SPARK-35275))
* Enable spark.storage.replication.proactive by default ([SPARK-33870](https://issues.apache.org/jira/browse/SPARK-33870))
* Add table function registry ([SPARK-34678](https://issues.apache.org/jira/browse/SPARK-34678))
* Support Fallback Storage Cleanup during stopping SparkContext ([SPARK-34142](https://issues.apache.org/jira/browse/SPARK-34142))
* Support Java enums from Scala Dataset API ([SPARK-23862](https://issues.apache.org/jira/browse/SPARK-23862))
* ADD JAR with ivy coordinates should be compatible with Hive transitive behavior ([SPARK-34506](https://issues.apache.org/jira/browse/SPARK-34506))
* Support ADD ARCHIVE and LIST ARCHIVES commands ([SPARK-34603](https://issues.apache.org/jira/browse/SPARK-34603))
* Support multiple paths for ADD FILE/JAR/ARCHIVE commands ([SPARK-35105](https://issues.apache.org/jira/browse/SPARK-35105))
* Support archive files as resources for CREATE FUNCTION USING syntax ([SPARK-35236](https://issues.apache.org/jira/browse/SPARK-35236))
* Loading SparkSessionExtensions from ServiceLoader ([SPARK-35380](https://issues.apache.org/jira/browse/SPARK-35380))
* Add sentences function to functions.{scala,py} ([SPARK-35418](https://issues.apache.org/jira/browse/SPARK-35418))
* Extend the function of decode so as consistent with mainstream databases ([SPARK-33527](https://issues.apache.org/jira/browse/SPARK-33527))
* Apply spark.sql.hive.metastorePartitionPruning for non-Hive tables that uses Hive metastore for partition management ([SPARK-36128](https://issues.apache.org/jira/browse/SPARK-36128))
* Support creating tables with null column ([SPARK-36241](https://issues.apache.org/jira/browse/SPARK-36241))
* Avoid inlining non-deterministic With-CTEs ([SPARK-36447](https://issues.apache.org/jira/browse/SPARK-36447))
* Support analyzing all tables in a specific database ([SPARK-33687](https://issues.apache.org/jira/browse/SPARK-33687))
* Standardize exception messages in Spark ([SPARK-33539](https://issues.apache.org/jira/browse/SPARK-33539))

**Other Notable Changes**

* Monitoring
  * New metrics to ExternalShuffleService ([SPARK-35258](https://issues.apache.org/jira/browse/SPARK-35258))
  * Add new stage-level REST APIs and parameters ([SPARK-26399](https://issues.apache.org/jira/browse/SPARK-26399))
  * Support task and executor Metrics Distributions in the REST API ([SPARK-34488](https://issues.apache.org/jira/browse/SPARK-34488))
  * Add fallback metrics for hash aggregate ([SPARK-35529](https://issues.apache.org/jira/browse/SPARK-35529), [SPARK-34237](https://issues.apache.org/jira/browse/SPARK-34237))
  * Propagate reason for exec loss to Web UI ([SPARK-34764](https://issues.apache.org/jira/browse/SPARK-34764))
* Add count_distinct as an option to Dataset#summary ([SPARK-34165](https://issues.apache.org/jira/browse/SPARK-34165))
* Introduce SQLSTATE and ERRORCODE to SQL Exception ([SPARK-34920](https://issues.apache.org/jira/browse/SPARK-34920))
* Implement ScriptTransform in sql/core ([SPARK-31936](https://issues.apache.org/jira/browse/SPARK-31936))
* Keep dependants cached while refreshing v1 tables ([SPARK-34138](https://issues.apache.org/jira/browse/SPARK-34138))
* Make BlockManagerMaster driver heartbeat timeout configurable ([SPARK-34278](https://issues.apache.org/jira/browse/SPARK-34278))
* io.file.buffer.size set by spark.buffer.size will override by loading hive-site.xml accidentally may cause perf regression ([SPARK-34346](https://issues.apache.org/jira/browse/SPARK-34346))
* Support remote scheduler pool files ([SPARK-35083](https://issues.apache.org/jira/browse/SPARK-35083))
* Make shuffle service name configurable on client-side and allow for classpath-based config override on the server side ([SPARK-34828](https://issues.apache.org/jira/browse/SPARK-34828))
* ExecutorMetricsPoller should keep stage entry in stageTCMP until a heartbeat occurs ([SPARK-34779](https://issues.apache.org/jira/browse/SPARK-34779))
* Replace if with filter clause in RewriteDistinctAggregates ([SPARK-34882](https://issues.apache.org/jira/browse/SPARK-34882))
* CREATE TABLE LIKE should respect the reserved table properties ([SPARK-34935](https://issues.apache.org/jira/browse/SPARK-34935))
* Fix nested column pruning for extracting case-insensitive struct field from array of struct ([SPARK-34963](https://issues.apache.org/jira/browse/SPARK-34963))
* Ship ivySettings file to the Driver in YARN cluster mode ([SPARK-34472](https://issues.apache.org/jira/browse/SPARK-34472))
* Resolve duplicated common columns from USING/NATURAL JOIN ([SPARK-34527](https://issues.apache.org/jira/browse/SPARK-34527))
* Invoke should find the method with correct number of parameters ([SPARK-35278](https://issues.apache.org/jira/browse/SPARK-35278))
* Don't optimize out grouping expressions from aggregate expressions without aggregate function ([SPARK-34581](https://issues.apache.org/jira/browse/SPARK-34581))
* Support resolving missing attributes for distribute/cluster by/repartition hint ([SPARK-35331](https://issues.apache.org/jira/browse/SPARK-35331))
* Improve s3a magic committer support by inferring missing configs ([SPARK-35383](https://issues.apache.org/jira/browse/SPARK-35383))
* Avoid file rename failure caused by destination directory not exist ([SPARK-35106](https://issues.apache.org/jira/browse/SPARK-35106))
* BlockManagerMasterEndpoint should not ignore index-only shuffle file during updating ([SPARK-35589](https://issues.apache.org/jira/browse/SPARK-35589))
* Redact the sensitive info in the result of Set command ([SPARK-35576](https://issues.apache.org/jira/browse/SPARK-35576))
* Update state schema to be able to accept long length JSON([SPARK-35602](https://issues.apache.org/jira/browse/SPARK-35602))
* Consider making the ':' in STRUCT data type definition optional ([SPARK-35706](https://issues.apache.org/jira/browse/SPARK-35706))
* View should not capture configs used in RelationConversions ([SPARK-35792](https://issues.apache.org/jira/browse/SPARK-35792))
* Append new nested struct fields rather than sort for unionByName with null filling ([SPARK-35290](https://issues.apache.org/jira/browse/SPARK-35290))
* Use Void as the type name of NullType ([SPARK-36224](https://issues.apache.org/jira/browse/SPARK-36224))

### Structured Streaming

**Major feature**

* Add RocksDB StateStore implementation ([SPARK-34198](https://issues.apache.org/jira/browse/SPARK-34198))
* EventTime based sessionization (session window) ([SPARK-10816](https://issues.apache.org/jira/browse/SPARK-10816))
* Upgrade Kafka client to 2.8.0 ([SPARK-33913](https://issues.apache.org/jira/browse/SPARK-33913))

**Other Notable Changes**

* Support user-defined initial state with flatMapGroupsWithState in Structured Streaming ([SPARK-35896](https://issues.apache.org/jira/browse/SPARK-35896))
* Support initial state for flatMapGroupsWithState in batch mode ([SPARK-36132](https://issues.apache.org/jira/browse/SPARK-36132))
* Introduce the strategy on mismatched offset for start offset timestamp on Kafka data source ([SPARK-35611](https://issues.apache.org/jira/browse/SPARK-35611))
* Introduce a new Option in Kafka source to specify a minimum number of records to read per trigger ([SPARK-35312](https://issues.apache.org/jira/browse/SPARK-35312))
* Include more granular metrics for stateful operators in StreamingQueryProgress ([SPARK-35896](https://issues.apache.org/jira/browse/SPARK-35896))
* Expose source metrics via progress report and add Kafka use-case to report delay ([SPARK-34854](https://issues.apache.org/jira/browse/SPARK-34854))
* Add config for ignoring metadata directory of FileStreamSink ([SPARK-35565](https://issues.apache.org/jira/browse/SPARK-35565))
* Add latest offsets to source progress ([SPARK-33955](https://issues.apache.org/jira/browse/SPARK-33955))

### PySpark

**Project Zen**

* Pandas API on Spark ([SPARK-34849](https://issues.apache.org/jira/browse/SPARK-34849))
  * Enable mypy for pandas-on-Spark ([SPARK-34941](https://issues.apache.org/jira/browse/SPARK-34941))
  * Implement CategoricalDtype support ([SPARK-35997](https://issues.apache.org/jira/browse/SPARK-35997), [SPARK-36185](https://issues.apache.org/jira/browse/SPARK-36185))
  * Complete the basic operations of Series and Index ([SPARK-36103](https://issues.apache.org/jira/browse/SPARK-36103), [SPARK-36104](https://issues.apache.org/jira/browse/SPARK-36104), [SPARK-36192](https://issues.apache.org/jira/browse/SPARK-36192))
  * Match behaviors to pandas 1.3 ([SPARK-36367](https://issues.apache.org/jira/browse/SPARK-36367))
  * Match behaviours on Series with NaN to pandas ’([SPARK-36031](https://issues.apache.org/jira/browse/SPARK-36031), [SPARK-36310](https://issues.apache.org/jira/browse/SPARK-36310))
  * Implement unary operator 'invert' of integral Series and Index ([SPARK-36003](https://issues.apache.org/jira/browse/SPARK-36003))
  * Implement CategoricalIndex.map and DatetimeIndex.map ([SPARK-36470](https://issues.apache.org/jira/browse/SPARK-36470))
  * Implement Index.map ([SPARK-36469](https://issues.apache.org/jira/browse/SPARK-36469))
* faulthandler support for Python worker crashed ([SPARK-36062](https://issues.apache.org/jira/browse/SPARK-36062))
* Use Snake naming rule across the function APIs ([SPARK-34306](https://issues.apache.org/jira/browse/SPARK-34306))
* Enable spark.sql.execution.pyspark.udf.simplifiedTraceback.enabled by default ([SPARK-35419](https://issues.apache.org/jira/browse/SPARK-35419))
* Support to infer nested dict as a struct when creating a DataFrame ([SPARK-35929](https://issues.apache.org/jira/browse/SPARK-35929))

**Other Notable Changes**

* Enable pinned thread mode by default ([SPARK-35303](https://issues.apache.org/jira/browse/SPARK-35303))
* Add NullType support for Arrow executions ([SPARK-33489](https://issues.apache.org/jira/browse/SPARK-33489))
* Add Arrow self_destruct support to toPandas ([SPARK-32953](https://issues.apache.org/jira/browse/SPARK-32953))
* Add thread target wrapper API for PySpark pin thread mode ([SPARK-35498](https://issues.apache.org/jira/browse/SPARK-35498))

### MLlib

**Performance improvements**

* BucketedRandomProjectionLSH transform optimization ([SPARK-34220](https://issues.apache.org/jira/browse/SPARK-34220))
* w2v findSynonyms optimization ([SPARK-34189](https://issues.apache.org/jira/browse/SPARK-34189))
* optimize sparse GEMM by skipping bound checking ([SPARK-35707](https://issues.apache.org/jira/browse/SPARK-35707))
* Improve performance of ML ALS recommendForAll by GEMV ([SPARK-33518](https://issues.apache.org/jira/browse/SPARK-33518))

**Model training improvements**

* Refactor Logistic Aggregator - support virtual centering ([SPARK-34797](https://issues.apache.org/jira/browse/SPARK-34797))
* Binary Logistic Regression with intercept support centering ([SPARK-34858](https://issues.apache.org/jira/browse/SPARK-34858), [SPARK-34448](https://issues.apache.org/jira/browse/SPARK-34448))
* Multinomial Logistic Regression with intercept support centering ([SPARK-34860](https://issues.apache.org/jira/browse/SPARK-34860))

**BLAS improvements**

* Replace fully com.github.fommil.netlib by dev.ludovic.netlib:2.0 ([SPARK-35295](https://issues.apache.org/jira/browse/SPARK-35295))
* Add a vectorized BLAS implementation ([SPARK-33882](https://issues.apache.org/jira/browse/SPARK-33882))
* Accelerate fallback BLAS with dev.ludovic.netlib ([SPARK-35150](https://issues.apache.org/jira/browse/SPARK-35150))


**Other Notable Changes**

* OVR transform fix potential column conflict ([SPARK-34356](https://issues.apache.org/jira/browse/SPARK-34356))

_Programming guide: [Machine Learning Library (MLlib) Guide](https://spark.apache.org/docs/3.2.0/ml-guide.html)._

### SparkR

* Use keyserver.ubuntu.com as a keyserver for CRAN ([SPARK-35885](https://issues.apache.org/jira/browse/SPARK-35885))

_Programming guide: [SparkR (R on Spark)](https://spark.apache.org/docs/3.2.0/sparkr.html)._


### GraphX

* Allow to turn off the normalization applied by static PageRank utilities ([SPARK-35357](https://issues.apache.org/jira/browse/SPARK-35357))

_Programming guide: [GraphX Programming Guide](https://spark.apache.org/docs/3.2.0/graphx-programming-guide.html)._

### Deprecations and Removals

* Deprecate spark.launcher.childConectionTimeout ([SPARK-33717](https://issues.apache.org/jira/browse/SPARK-33717))
* deprecate GROUP BY ... GROUPING SETS (...) and promote GROUP BY GROUPING SETS (...)  ([SPARK-34932](https://issues.apache.org/jira/browse/SPARK-34932))
* Deprecate Python 3.6 in Spark documentation ([SPARK-35939](https://issues.apache.org/jira/browse/SPARK-35939))
* Deprecate ps.broadcast API ([SPARK-35810](https://issues.apache.org/jira/browse/SPARK-35810))
* Deprecate the num_files argument ([SPARK-35807](https://issues.apache.org/jira/browse/SPARK-35807))
* Deprecate DataFrame.to_spark_io ([SPARK-35811](https://issues.apache.org/jira/browse/SPARK-35811))


### Known Issues

* Support fetching shuffle blocks in batch with i/o encryption ([SPARK-34827](https://issues.apache.org/jira/browse/SPARK-34827))
* Fail to load Snappy codec for sequence file I/O ([SPARK-36681](https://issues.apache.org/jira/browse/SPARK-36681))
* Can not insert into hive bucket table if table is created with an uppercase schema ([SPARK-35531](https://issues.apache.org/jira/browse/SPARK-35531))
* Reading Hive view without explicit column names fails in Spark ([SPARK-36905](https://issues.apache.org/jira/browse/SPARK-36905))
* Job cancellation causes py4j errors on Jupyter due to pinned thread mode ([SPARK-37004](https://issues.apache.org/jira/browse/SPARK-37004))
* Driver mistakenly reports removed executors as alive in UI ([SPARK-35011](https://issues.apache.org/jira/browse/SPARK-35011))

### Credits

Last but not least, this release would not have been possible without the following contributors: Adam Binford, Ali Afroozeh, Alkis Polyzotis, Allison Wang, Almog Tavor, Amandeep Sharma, Ammar Al-Batool, Andrew Liu, Andy Grove, Ankur Dave, Anton Okolnychyi, Ashray Jain, Attila Zsolt Piros, Ayushi Agarwal, Baohe Zhang, Bo Zhang, Bruce Robbins, Byungsoo Oh, Carlos Peña, Cary Lee, Chandni Singh, Chao Sun, ChaoJun Zhang, Chendi Xue, Cheng Pan, Cheng Su, Chongguang LIU, Chris Thomas, Chris Wu, Daoyuan Wang, David Christle, David Li, David McWhorter, Denis Pyshev, Dereck Li, Dhruv Kumar, Dhruvil Dave, Dingyu Xu, Dominik Gehl, Dongdong Hong, Dongjoon Hyun, Dooyoung Hwang, Duc Hoa Nguyen, Emil Ejbyfeldt, Enzo Bonnal, Erik Krogen, Eugene Koifman, Fabian A.J. Thiele, Fokko Driesprong, Fu Chen, Gabor Somogyi, Gabriele Nizzoli, Gengliang Wang, Gera Shegalov, Gidon Gershinsky, Guangxin Wang, Haejoon Lee, Haiyang Sun, Han, Harsh Panchal, He Qi, Hector Zhang, Holden Karau, Hopefulnick, Huaxin Gao, Hyukjin Kwon, Ionut Boicu, Ismaël Mejía, Ivan Sadikov, Jarek Potiuk, Jason Yarbrough, Jiaan Geng, Jie Hu, Jose Torres, Josh Rosen, Josh Soref, Julien Lafaye, Jungtaek Lim, Kaifei Yi, Kamil Breguła, Karen Feng, Karuppayya Rajendran, Kazuyuki Tanimura, Ke Jia, Keerthan Vasist, Kent Yao, Kevin Pis, Kevin Su, Koert Kuipers, Kousuke Saruta, Kun Wan, Kunlun Huang, Leanken Lin, Lei Peng, Leona Yoda, Li Zhang, Liang-Chi Hsieh, Lidiya Nixon, Linhong Liu, Lipeng Zhu, Luca Canali, Ludovic Henry, Luka Sturtewagen, Lukas Rytz, Luran He, Maciej Szymkiewicz, Marios Meimaris, Maryann Xue, Matthew Powers, Max Gekk, Maya Anderson, Michael Chen, Michael Zhang, Min Shen, Minchu Yang, Mohanad Elsafty, Nicholas Marion, Ohad Raviv, Pablo Langa, Pawel Ptaszynski, Peter Toth, Phillip Henry, Prakhar Jain, Qi Liu, Qi Zhu, Qilong SU, Qingbo Jiao, Quang-Huy Nguyen, Rahul Mahadev, Raza Jafri, Richard Chen, Richard Penney, Rongchuan Jin, Rui Zeng, Ruifeng Zheng, Ryan Blue, Sajith Ariyarathna, Samuel Moseley, Sanket Reddy, Satish Gopalani, Saurabh Chawla, Sean Owen, Serge Rielau, Shahid K I, Shaoyun Chen, Shardul Mahadik, Shiqi Sun, Shixiong Zhu, Steve Loughran, Steven Aerts, Sumeet Gajjar, Swinky Mann, Takeshi Yamamuro, Takuya UESHIN, Tanel Kiis, Tathagata Das, Tengfei Huang, Terry Kim, Tianhan Hu, Tianhua Huang, Tim Armstrong, Tobias Hermann, Tom Van Bussel, Tomas Pereira De Vasconcelos, Twoentartian, Vasily Kolpakov, Venkata Krishnan Sowrirajan, Venkata Sai Akhil Gudesa, Venki Korukanti, Viettel DGD, Vinod KC, Vlad Glinsky, Walid Gara, Wan Kun, Weichen Xu, Wenchen Fan, William Hyun, Xiao Li, Xiduo You, Xingbo Jiang, Xinrong Meng, XiuLi Wei, Xuedong Luan, Yajun Gao, Yang He, Yang Jie, Yazhi Wang, Ye Zhou, Yi Wu, Yi Zhu, Yijia Cui, Yikun Jiang, Yingyi Bu, Yu Zhong, Yuanjian Li, Yuchen Huo, Yuming Wang, Yuto Akutsu, Zebing Lin, Zhang Xingchao, Zhichao Zhang

