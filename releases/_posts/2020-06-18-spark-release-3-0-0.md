---
layout: post
title: Spark Release 3.0.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Apache Spark 3.0.0 is the first release of the 3.x line. The vote passed on the 10th of June, 2020. This release is based on git tag `v3.0.0` which includes all commits up to June 10. Apache Spark 3.0 builds on many of the innovations from Spark 2.x, bringing new ideas as well as continuing long-term projects that have been in development. With the help of tremendous contributions from the open-source community, this release resolved more than 3400 tickets as the result of contributions from over 440 contributors.

This year is Spark's 10-year anniversary as an open source project. Since its initial release in 2010, Spark has grown to be one of the most active open source projects. Nowadays, Spark is the de facto unified engine for big data processing, data science, machine learning and data analytics workloads.

Spark SQL is the top active component in this release. 46% of the resolved tickets are for Spark SQL. These enhancements benefit all the higher-level libraries, including structured streaming and MLlib, and higher level APIs, including SQL and DataFrames. Various related optimizations are added in this release. In TPC-DS 30TB benchmark, Spark 3.0 is roughly two times faster than Spark 2.4.

Python is now the most widely used language on Spark. PySpark has more than 5 million monthly downloads on PyPI, the Python Package Index. This release improves its functionalities and usability, including the pandas UDF API redesign with Python type hints, new pandas UDF types, and more Pythonic error handling.

Here are the feature highlights in Spark 3.0: adaptive query execution; dynamic partition pruning; ANSI SQL compliance; significant improvements in pandas APIs; new UI for structured streaming; up to 40x speedups for calling R user-defined functions; accelerator-aware scheduler; and SQL reference documentation.

To download Apache Spark 3.0.0, visit the [downloads](https://spark.apache.org/downloads.html) page. You can consult JIRA for the [detailed changes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315420&version=12339177). We have curated a list of high level changes here, grouped by major modules.

* This will become a table of contents (this text will be scraped).
{:toc}


### Core, Spark SQL, Structured Streaming

**Highlight**

  - [Project Hydrogen] Accelerator-aware Scheduler ([SPARK-24615](https://issues.apache.org/jira/browse/SPARK-24615))
  - Adaptive Query Execution ([SPARK-31412](https://issues.apache.org/jira/browse/SPARK-31412))
  - Dynamic Partition Pruning ([SPARK-11150](https://issues.apache.org/jira/browse/SPARK-11150))
  - Redesigned pandas UDF API with type hints ([SPARK-28264](https://issues.apache.org/jira/browse/SPARK-28264))
  - Structured Streaming UI ([SPARK-29543](https://issues.apache.org/jira/browse/SPARK-29543))
  - Catalog plugin API ([SPARK-31121](https://issues.apache.org/jira/browse/SPARK-31121))
  - Java 11 support ([SPARK-24417](https://issues.apache.org/jira/browse/SPARK-24417))
  - Hadoop 3 support ([SPARK-23534](https://issues.apache.org/jira/browse/SPARK-23534))
  - Better ANSI SQL compatibility

**Performance Enhancements**

  - Adaptive Query Execution ([SPARK-31412](https://issues.apache.org/jira/browse/SPARK-31412))
    - Basic framework ([SPARK-23128](https://issues.apache.org/jira/browse/SPARK-23128))
    - Post shuffle partition number adjustment ([SPARK-28177](https://issues.apache.org/jira/browse/SPARK-28177))
    - Dynamic subquery reuse ([SPARK-28753](https://issues.apache.org/jira/browse/SPARK-28753))
    - Local shuffle reader ([SPARK-28560](https://issues.apache.org/jira/browse/SPARK-28560))
    - Skew join optimization ([SPARK-29544](https://issues.apache.org/jira/browse/SPARK-29544))
    - Optimize reading contiguous shuffle blocks ([SPARK-9853](https://issues.apache.org/jira/browse/SPARK-9853))
  - Dynamic Partition Pruning ([SPARK-11150](https://issues.apache.org/jira/browse/SPARK-11150))
  - Other optimizer rules
    - Rule TransposeWindow ([SPARK-20636](https://issues.apache.org/jira/browse/SPARK-20636))
    - Rule ReuseSubquery ([SPARK-27279](https://issues.apache.org/jira/browse/SPARK-27279))
    - Rule PushDownLeftSemiAntiJoin ([SPARK-19712](https://issues.apache.org/jira/browse/SPARK-19712))
    - Rule PushLeftSemiLeftAntiThroughJoin ([SPARK-19712](https://issues.apache.org/jira/browse/SPARK-19712))
    - Rule ReplaceNullWithFalse ([SPARK-25860](https://issues.apache.org/jira/browse/SPARK-25860))
    - Rule Eliminate sorts without limit in the subquery of Join/Aggregation ([SPARK-29343](https://issues.apache.org/jira/browse/SPARK-29343))
    - Rule PruneHiveTablePartitions ([SPARK-15616](https://issues.apache.org/jira/browse/SPARK-15616))
    - Pruning unnecessary nested fields from Generate ([SPARK-27707](https://issues.apache.org/jira/browse/SPARK-27707))
    - Rule RewriteNonCorrelatedExists ([SPARK-29800](https://issues.apache.org/jira/browse/SPARK-29800))
  - Minimize table cache synchronization costs ([SPARK-26917](https://issues.apache.org/jira/browse/SPARK-26917), [SPARK-26617](https://issues.apache.org/jira/browse/SPARK-26617), [SPARK-26548](https://issues.apache.org/jira/browse/SPARK-26548))
  - Split aggregation code into small functions ([SPARK-21870](https://issues.apache.org/jira/browse/SPARK-21870))
  - Add batching in INSERT and ALTER TABLE ADD PARTITION command ([SPARK-29938](https://issues.apache.org/jira/browse/SPARK-29938))
  - Allows Aggregator to be registered as a UDAF ([SPARK-27296](https://issues.apache.org/jira/browse/SPARK-27296))

**SQL Compatibility Enhancements**

  - Switch to Proleptic Gregorian calendar ([SPARK-26651](https://issues.apache.org/jira/browse/SPARK-26651))
  - Build Spark’s own datetime pattern definition ([SPARK-31408](https://issues.apache.org/jira/browse/SPARK-31408))
  - Introduce ANSI store assignment policy for table insertion ([SPARK-28495](https://issues.apache.org/jira/browse/SPARK-28495))
  - Follow ANSI store assignment rule in table insertion by default ([SPARK-28885](https://issues.apache.org/jira/browse/SPARK-28885))
  - Add a SQLConf `spark.sql.ansi.enabled` ([SPARK-28989](https://issues.apache.org/jira/browse/SPARK-28989))
  - Support ANSI SQL filter clause for aggregate expression ([SPARK-27986](https://issues.apache.org/jira/browse/SPARK-27986))
  - Support ANSI SQL OVERLAY function ([SPARK-28077](https://issues.apache.org/jira/browse/SPARK-28077))
  - Support ANSI nested bracketed comments ([SPARK-28880](https://issues.apache.org/jira/browse/SPARK-28880))
  - Throw exception on overflow for integers ([SPARK-26218](https://issues.apache.org/jira/browse/SPARK-26218))
  - Overflow check for interval arithmetic operations ([SPARK-30341](https://issues.apache.org/jira/browse/SPARK-30341))
  - Throw Exception when invalid string is cast to numeric type ([SPARK-30292](https://issues.apache.org/jira/browse/SPARK-30292))
  - Make interval multiply and divide's overflow behavior consistent with other operations ([SPARK-30919](https://issues.apache.org/jira/browse/SPARK-30919))
  - Add ANSI type aliases for char and decimal ([SPARK-29941](https://issues.apache.org/jira/browse/SPARK-29941))
  - SQL Parser defines ANSI compliant reserved keywords ([SPARK-26215](https://issues.apache.org/jira/browse/SPARK-26215))
  - Forbid reserved keywords as identifiers when ANSI mode is on ([SPARK-26976](https://issues.apache.org/jira/browse/SPARK-26976))
  - Support ANSI SQL: LIKE ... ESCAPE syntax ([SPARK-28083](https://issues.apache.org/jira/browse/SPARK-28083))
  - Support ANSI SQL Boolean-Predicate syntax ([SPARK-27924](https://issues.apache.org/jira/browse/SPARK-27924))
  - Better support for correlated subquery processing ([SPARK-18455](https://issues.apache.org/jira/browse/SPARK-18455))

**PySpark Enhancements**

  - Redesigned pandas UDFs with type hints ([SPARK-28264](https://issues.apache.org/jira/browse/SPARK-28264))
  - Allow Pandas UDF to take an iterator of pd.DataFrames ([SPARK-26412](https://issues.apache.org/jira/browse/SPARK-26412))
  - Support StructType as arguments and return types for Scalar Pandas UDF ([SPARK-27240](https://issues.apache.org/jira/browse/SPARK-27240) )
  - Support Dataframe Cogroup via Pandas UDFs ([SPARK-27463](https://issues.apache.org/jira/browse/SPARK-27463))
  - Add mapInPandas to allow an iterator of DataFrames ([SPARK-28198](https://issues.apache.org/jira/browse/SPARK-28198))
  - Certain SQL functions should take column names as well ([SPARK-26979](https://issues.apache.org/jira/browse/SPARK-26979))
  - Make PySpark SQL exceptions more Pythonic ([SPARK-31849](https://issues.apache.org/jira/browse/SPARK-31849))

**Extensibility Enhancements**

  - Catalog plugin API ([SPARK-31121](https://issues.apache.org/jira/browse/SPARK-31121))
  - Data source V2 API refactoring ([SPARK-25390](https://issues.apache.org/jira/browse/SPARK-25390))
  - Hive 3.0 and 3.1 metastore support ([SPARK-27970](https://issues.apache.org/jira/browse/SPARK-27970), [SPARK-24360](https://issues.apache.org/jira/browse/SPARK-24360))
  - Extend Spark plugin interface to driver ([SPARK-29396](https://issues.apache.org/jira/browse/SPARK-29396))
  - Extend Spark metrics system with user-defined metrics using executor plugins ([SPARK-28091](https://issues.apache.org/jira/browse/SPARK-28091))
  - Developer APIs for extended Columnar Processing Support ([SPARK-27396](https://issues.apache.org/jira/browse/SPARK-27396))
  - Built-in source migration using DSV2: parquet, ORC, CSV, JSON, Kafka, Text, Avro ([SPARK-27589](https://issues.apache.org/jira/browse/SPARK-27589))
  - Allow FunctionInjection in SparkExtensions ([SPARK-25560](https://issues.apache.org/jira/browse/SPARK-25560))

**Connector Enhancements**

  - Support High Performance S3A committers ([SPARK-23977](https://issues.apache.org/jira/browse/SPARK-23977))
  - Column pruning through nondeterministic expressions ([SPARK-29768](https://issues.apache.org/jira/browse/SPARK-29768))
  - Support `spark.sql.statistics.fallBackToHdfs` in data source tables ([SPARK-25474](https://issues.apache.org/jira/browse/SPARK-25474))
  - Allow partition pruning with subquery filters on file source ([SPARK-26893](https://issues.apache.org/jira/browse/SPARK-26893))
  - Avoid pushdown of subqueries in data source filters ([SPARK-25482](https://issues.apache.org/jira/browse/SPARK-25482))
  - Recursive data loading from file sources ([SPARK-27990](https://issues.apache.org/jira/browse/SPARK-27990))
  - Parquet/ORC
    - Pushdown of disjunctive predicates ([SPARK-27699](https://issues.apache.org/jira/browse/SPARK-27699))
    - Generalize Nested Column Pruning ([SPARK-25603](https://issues.apache.org/jira/browse/SPARK-25603)) and turned on by default ([SPARK-29805](https://issues.apache.org/jira/browse/SPARK-29805))
    - Parquet Only
      - Parquet predicate pushdown for nested fields ([SPARK-17636](https://issues.apache.org/jira/browse/SPARK-17636))
    - ORC Only
      - Support merge schema for ORC ([SPARK-11412](https://issues.apache.org/jira/browse/SPARK-11412))
      - Nested schema pruning for ORC ([SPARK-27034](https://issues.apache.org/jira/browse/SPARK-27034))
      - Predicate conversion complexity reduction for ORC ([SPARK-27105](https://issues.apache.org/jira/browse/SPARK-27105), [SPARK-28108](https://issues.apache.org/jira/browse/SPARK-28108))
      - Upgrade Apache ORC to 1.5.9 ([SPARK-30695](https://issues.apache.org/jira/browse/SPARK-30695))
  - CSV
    - Support filters pushdown in CSV datasource ([SPARK-30323](https://issues.apache.org/jira/browse/SPARK-30323))
  - Hive Serde
    - No schema inference when reading Hive serde table with native data source ([SPARK-27119](https://issues.apache.org/jira/browse/SPARK-27119))
    - Hive CTAS commands should use data source if it is convertible ([SPARK-25271](https://issues.apache.org/jira/browse/SPARK-25271))
    - Use native data source to optimize inserting partitioned Hive table ([SPARK-28573](https://issues.apache.org/jira/browse/SPARK-28573))
  - Kafka
    - Add support for Kafka headers ([SPARK-23539](https://issues.apache.org/jira/browse/SPARK-23539))
    - Add Kafka delegation token support ([SPARK-25501](https://issues.apache.org/jira/browse/SPARK-25501))
    - Introduce new option to Kafka source: offset by timestamp (starting/ending) ([SPARK-26848](https://issues.apache.org/jira/browse/SPARK-26848))
    - Support the "minPartitions" option in Kafka batch source and streaming source v1 ([SPARK-30656](https://issues.apache.org/jira/browse/SPARK-30656))
    - Upgrade Kafka to 2.4.1 ([SPARK-31126](https://issues.apache.org/jira/browse/SPARK-31126))
  - New built-in data sources
    - New build-in binary file data sources ([SPARK-25348](https://issues.apache.org/jira/browse/SPARK-25348))
    - New no-op batch data sources ([SPARK-26550](https://issues.apache.org/jira/browse/SPARK-26550)) and no-op streaming sink ([SPARK-26649](https://issues.apache.org/jira/browse/SPARK-26649))

**Feature Enhancements**

  - [Hydrogen] Accelerator-aware Scheduler ([SPARK-24615](https://issues.apache.org/jira/browse/SPARK-24615))
  - Introduce a complete set of Join Hints ([SPARK-27225](https://issues.apache.org/jira/browse/SPARK-27225))
  - Add PARTITION BY hint for SQL queries ([SPARK-28746](https://issues.apache.org/jira/browse/SPARK-28746))
  - Metadata Handling in Thrift Server ([SPARK-28426](https://issues.apache.org/jira/browse/SPARK-28426))
  - Add higher order functions to scala API ([SPARK-27297](https://issues.apache.org/jira/browse/SPARK-27297))
  - Support simple all gather in barrier task context ([SPARK-30667](https://issues.apache.org/jira/browse/SPARK-30667))
  - Hive UDFs supports the UDT type ([SPARK-28158](https://issues.apache.org/jira/browse/SPARK-28158))
  - Support DELETE/UPDATE/MERGE Operators in Catalyst ([SPARK-28351](https://issues.apache.org/jira/browse/SPARK-28351), [SPARK-28892](https://issues.apache.org/jira/browse/SPARK-28892), [SPARK-28893](https://issues.apache.org/jira/browse/SPARK-28893))
  - Implement DataFrame.tail ([SPARK-30185](https://issues.apache.org/jira/browse/SPARK-30185))
  - New built-in functions
    - sinh, cosh, tanh, asinh, acosh, atanh ([SPARK-28133](https://issues.apache.org/jira/browse/SPARK-28133))
    - any, every, some ([SPARK-19851](https://issues.apache.org/jira/browse/SPARK-19851))
    - bit_and, bit_or ([SPARK-27879](https://issues.apache.org/jira/browse/SPARK-27879))
    - bit_count ([SPARK-29491](https://issues.apache.org/jira/browse/SPARK-29491))
    - bit_xor ([SPARK-29545](https://issues.apache.org/jira/browse/SPARK-29545))
    - bool_and, bool_or ([SPARK-30184](https://issues.apache.org/jira/browse/SPARK-30184))
    - count_if ([SPARK-27425](https://issues.apache.org/jira/browse/SPARK-27425))
    - date_part ([SPARK-28690](https://issues.apache.org/jira/browse/SPARK-28690))
    - extract ([SPARK-23903](https://issues.apache.org/jira/browse/SPARK-23903))
    - forall ([SPARK-27905](https://issues.apache.org/jira/browse/SPARK-27905))
    - from_csv ([SPARK-25393](https://issues.apache.org/jira/browse/SPARK-25393))
    - make_date ([SPARK-28432](https://issues.apache.org/jira/browse/SPARK-28432))
    - make_interval ([SPARK-29393](https://issues.apache.org/jira/browse/SPARK-29393))
    - make_timestamp ([SPARK-28459](https://issues.apache.org/jira/browse/SPARK-28459))
    - map_entries ([SPARK-23935](https://issues.apache.org/jira/browse/SPARK-23935))
    - map_filter ([SPARK-23937](https://issues.apache.org/jira/browse/SPARK-23937))
    - map_zip_with ([SPARK-23938](https://issues.apache.org/jira/browse/SPARK-23938))
    - max_by, min_by ([SPARK-27653](https://issues.apache.org/jira/browse/SPARK-27653))
    - schema_of_csv ([SPARK-25672](https://issues.apache.org/jira/browse/SPARK-25672))
    - to_csv ([SPARK-25638](https://issues.apache.org/jira/browse/SPARK-25638))
    - transform_keys ([SPARK-23939](https://issues.apache.org/jira/browse/SPARK-23939))
    - transform_values ([SPARK-23940](https://issues.apache.org/jira/browse/SPARK-23940))
    - typeof ([SPARK-29961](https://issues.apache.org/jira/browse/SPARK-29961))
    - version ([SPARK-29554](https://issues.apache.org/jira/browse/SPARK-29554))
    - xxhash64 ([SPARK-27099](https://issues.apache.org/jira/browse/SPARK-27099))
  - Improvements on the existing built-in functions
    - built-in date-time functions/operations improvement ([SPARK-31415](https://issues.apache.org/jira/browse/SPARK-31415))
    - Support FAILFAST mode for from_json ([SPARK-25243](https://issues.apache.org/jira/browse/SPARK-25243))
    - array_sort adds a new comparator parameter ([SPARK-29020](https://issues.apache.org/jira/browse/SPARK-29020))
    - filter can now take the index as input as well as the element ([SPARK-28962](https://issues.apache.org/jira/browse/SPARK-28962))

**Monitoring and Debuggability Enhancements**

  - New Structured Streaming UI ([SPARK-29543](https://issues.apache.org/jira/browse/SPARK-29543))
  - SHS: Allow event logs for running streaming apps to be rolled over ([SPARK-28594](https://issues.apache.org/jira/browse/SPARK-28594))
  - JDBC tab in SHS ([SPARK-29724](https://issues.apache.org/jira/browse/SPARK-29724), [SPARK-29726](https://issues.apache.org/jira/browse/SPARK-29726))
  - Add an API that allows a user to define and observe arbitrary metrics on batch and streaming queries ([SPARK-29345](https://issues.apache.org/jira/browse/SPARK-29345))
  - Instrumentation for tracking per-query planning time ([SPARK-26129](https://issues.apache.org/jira/browse/SPARK-26129))
  - Put the basic shuffle metrics in the SQL exchange operator ([SPARK-26139](https://issues.apache.org/jira/browse/SPARK-26139))
  - SQL statement is shown in SQL Tab instead of callsite ([SPARK-27045](https://issues.apache.org/jira/browse/SPARK-27045))
  - Add tooltip to SparkUI ([SPARK-29449](https://issues.apache.org/jira/browse/SPARK-29449))
  - Improve the concurrent performance of History Server ([SPARK-29043](https://issues.apache.org/jira/browse/SPARK-29043))
  - EXPLAIN FORMATTED command ([SPARK-27395](https://issues.apache.org/jira/browse/SPARK-27395))
  - Support Dumping truncated plans and generated code to a file ([SPARK-26023](https://issues.apache.org/jira/browse/SPARK-26023))
  - Enhance describe framework to describe the output of a query ([SPARK-26982](https://issues.apache.org/jira/browse/SPARK-26982))
  - Add SHOW VIEWS command ([SPARK-31113](https://issues.apache.org/jira/browse/SPARK-31113))
  - Improve the error messages of SQL parser ([SPARK-27901](https://issues.apache.org/jira/browse/SPARK-27901))
  - Support Prometheus monitoring natively ([SPARK-29429](https://issues.apache.org/jira/browse/SPARK-29429))
  - Add executor memory metrics to heartbeat and expose in executors REST API ([SPARK-23429](https://issues.apache.org/jira/browse/SPARK-23429))
  - Add Executor metrics and memory usage instrumentation to the metrics system ([SPARK-27189](https://issues.apache.org/jira/browse/SPARK-27189))

**Documentation and Test Coverage Enhancements**

  - Build a SQL Reference ([SPARK-28588](https://issues.apache.org/jira/browse/SPARK-28588))
  - Build a user guide for WebUI ([SPARK-28372](https://issues.apache.org/jira/browse/SPARK-28372))
  - Build a page for SQL configuration documentation ([SPARK-30510](https://issues.apache.org/jira/browse/SPARK-30510))
  - Add version information for Spark configuration ([SPARK-30839](https://issues.apache.org/jira/browse/SPARK-30839))
  - Port regression tests from PostgreSQL ([SPARK-27763](https://issues.apache.org/jira/browse/SPARK-27763))
  - Thrift-server test coverage ([SPARK-28608](https://issues.apache.org/jira/browse/SPARK-28608))
  - Test coverage of UDFs (python UDF, pandas UDF, scala UDF)  ([SPARK-27921](https://issues.apache.org/jira/browse/SPARK-27921))

**Native Spark App in Kubernetes**

  - Support user-specified driver and executor pod templates ([SPARK-24434](https://issues.apache.org/jira/browse/SPARK-24434))
  - Allow dynamic allocation without an external shuffle service ([SPARK-27963](https://issues.apache.org/jira/browse/SPARK-27963))
  - More responsive dynamic allocation with K8S ([SPARK-28487](https://issues.apache.org/jira/browse/SPARK-28487))
  - Kerberos Support for Spark on K8S ([SPARK-23257](https://issues.apache.org/jira/browse/SPARK-23257))
  - Kerberos Support in Kubernetes resource manager (Client Mode) ([SPARK-25815](https://issues.apache.org/jira/browse/SPARK-25815))
  - Support client dependencies with a Hadoop Compatible File System ([SPARK-23153](https://issues.apache.org/jira/browse/SPARK-23153))
  - Add configurable auth secret source in k8s backend ([SPARK-26239](https://issues.apache.org/jira/browse/SPARK-26239))
  - Support subpath mounting with Kubernetes ([SPARK-25960](https://issues.apache.org/jira/browse/SPARK-25960))
  - Make Python 3 the default in PySpark Bindings for K8S ([SPARK-24516](https://issues.apache.org/jira/browse/SPARK-24516))

**Other Notable Changes**

  - Java 11 support ([SPARK-24417](https://issues.apache.org/jira/browse/SPARK-24417))
  - Hadoop 3 support ([SPARK-23534](https://issues.apache.org/jira/browse/SPARK-23534))
  - Built-in Hive execution upgrade from 1.2.1 to 2.3.7  ([SPARK-23710](https://issues.apache.org/jira/browse/SPARK-23710), [SPARK-28723](https://issues.apache.org/jira/browse/SPARK-28723), [SPARK-31381](https://issues.apache.org/jira/browse/SPARK-31381))
  - Use Apache Hive 2.3 dependency by default ([SPARK-30034](https://issues.apache.org/jira/browse/SPARK-30034))
  - GA Scala 2.12 and remove 2.11 ([SPARK-26132](https://issues.apache.org/jira/browse/SPARK-26132))
  - Improve logic for timing out executors in dynamic allocation ([SPARK-20286](https://issues.apache.org/jira/browse/SPARK-20286))
  - Disk-persisted RDD blocks served by shuffle service, and ignored for Dynamic Allocation ([SPARK-27677](https://issues.apache.org/jira/browse/SPARK-27677))
  - Acquire new executors to avoid hang because of blacklisting ([SPARK-22148](https://issues.apache.org/jira/browse/SPARK-22148))
  - Allow sharing Netty's memory pool allocators ([SPARK-24920](https://issues.apache.org/jira/browse/SPARK-24920))
  - Fix deadlock between TaskMemoryManager and UnsafeExternalSorter$SpillableIterator ([SPARK-27338](https://issues.apache.org/jira/browse/SPARK-27338))
  - Introduce AdmissionControl APIs for StructuredStreaming ([SPARK-30669](https://issues.apache.org/jira/browse/SPARK-30669))
  - Spark History Main page performance improvement ([SPARK-25973](https://issues.apache.org/jira/browse/SPARK-25973))
  - Speed up and slim down metric aggregation in SQL listener ([SPARK-29562](https://issues.apache.org/jira/browse/SPARK-29562))
  - Avoid the network when shuffle blocks are fetched from the same host ([SPARK-27651](https://issues.apache.org/jira/browse/SPARK-27651))
  - Improve file listing for DistributedFileSystem ([SPARK-27801](https://issues.apache.org/jira/browse/SPARK-27801))
  - Remove Support for hadoop 2.6 ([SPARK-25016](https://issues.apache.org/jira/browse/SPARK-25016))

**Changes of behavior**

Please read the migration guides for each component: [Spark Core](https://spark.apache.org/docs/3.0.0/core-migration-guide.html), [Spark SQL](https://spark.apache.org/docs/3.0.0/sql-migration-guide.html), [Structured Streaming](https://spark.apache.org/docs/3.0.0/ss-migration-guide.html) and [PySpark](https://spark.apache.org/docs/3.0.0/pyspark-migration-guide.html).

A few other behavior changes that are missed in the migration guide:

  - In Spark 3.0, the deprecated class `org.apache.spark.sql.streaming.ProcessingTime` has been removed. Use `org.apache.spark.sql.streaming.Trigger.ProcessingTime` instead. Likewise, `org.apache.spark.sql.execution.streaming.continuous.ContinuousTrigger` has been removed in favor of `Trigger.Continuous`, and `org.apache.spark.sql.execution.streaming.OneTimeTrigger` has been hidden in favor of `Trigger.Once`. ([SPARK-28199](https://issues.apache.org/jira/browse/SPARK-28199))
  - Due to the upgrade of Scala 2.12, `DataStreamWriter.foreachBatch` is not source compatible for Scala program. You need to update your Scala source code to disambiguate between Scala function and  Java lambda. ([SPARK-26132](https://issues.apache.org/jira/browse/SPARK-26132))

*Programming guides: [Spark RDD Programming Guide](https://spark.apache.org/docs/3.0.0/rdd-programming-guide.html) and [Spark SQL, DataFrames and Datasets Guide](https://spark.apache.org/docs/3.0.0/sql-programming-guide.html) and [Structured Streaming Programming Guide](https://spark.apache.org/docs/3.0.0/structured-streaming-programming-guide.html).*


### MLlib

**Highlight**

  - Multiple columns support was added to Binarizer ([SPARK-23578](https://issues.apache.org/jira/browse/SPARK-23578)), StringIndexer ([SPARK-11215](https://issues.apache.org/jira/browse/SPARK-11215)), StopWordsRemover ([SPARK-29808](https://issues.apache.org/jira/browse/SPARK-29808)) and PySpark QuantileDiscretizer ([SPARK-22796](https://issues.apache.org/jira/browse/SPARK-22796))
  - Support Tree-Based Feature Transformation([SPARK-13677](https://issues.apache.org/jira/browse/SPARK-13677))
  - Two new evaluators MultilabelClassificationEvaluator ([SPARK-16692](https://issues.apache.org/jira/browse/SPARK-16692)) and RankingEvaluator ([SPARK-28045](https://issues.apache.org/jira/browse/SPARK-28045)) were added
  - Sample weights support was added in DecisionTreeClassifier/Regressor ([SPARK-19591](https://issues.apache.org/jira/browse/SPARK-19591)), RandomForestClassifier/Regressor ([SPARK-9478](https://issues.apache.org/jira/browse/SPARK-9478)), GBTClassifier/Regressor ([SPARK-9612](https://issues.apache.org/jira/browse/SPARK-9612)), RegressionEvaluator ([SPARK-24102](https://issues.apache.org/jira/browse/SPARK-24102)), BinaryClassificationEvaluator ([SPARK-24103](https://issues.apache.org/jira/browse/SPARK-24103)), BisectingKMeans ([SPARK-30351](https://issues.apache.org/jira/browse/SPARK-30351)), KMeans ([SPARK-29967](https://issues.apache.org/jira/browse/SPARK-29967)) and GaussianMixture ([SPARK-30102](https://issues.apache.org/jira/browse/SPARK-30102))
  - R API for PowerIterationClustering was added ([SPARK-19827](https://issues.apache.org/jira/browse/SPARK-19827))
  - Added Spark ML listener for tracking ML pipeline status ([SPARK-23674](https://issues.apache.org/jira/browse/SPARK-23674))
  - Fit with validation set was added to Gradient Boosted Trees in Python ([SPARK-24333](https://issues.apache.org/jira/browse/SPARK-24333))
  - [RobustScaler](https://github.com/huaxingao/spark/blob/e00a5a751bcd769ed92ff26a84c702b176cf1671/docs/ml-features.html#robustscaler) transformer was added ([SPARK-28399](https://issues.apache.org/jira/browse/SPARK-28399))
  - [Factorization Machines](https://github.com/huaxingao/spark/blob/e00a5a751bcd769ed92ff26a84c702b176cf1671/docs/ml-classification-regression.html#factorization-machines) classifier and regressor were added ([SPARK-29224](https://issues.apache.org/jira/browse/SPARK-29224))
  - Gaussian Naive Bayes ([SPARK-16872](https://issues.apache.org/jira/browse/SPARK-16872)) and Complement Naive Bayes ([SPARK-29942](https://issues.apache.org/jira/browse/SPARK-29942)) were added
  - ML function parity between Scala and Python ([SPARK-28958](https://issues.apache.org/jira/browse/SPARK-28958))
  - predictRaw is made public in all the Classification models. predictProbability is made public in all the Classification models except LinearSVCModel ([SPARK-30358](https://issues.apache.org/jira/browse/SPARK-30358))

**Changes of behavior**

Please read the [migration guide](https://spark.apache.org/docs/3.0.0/ml-migration-guide.html) for details.

A few other behavior changes that are missed in the migration guide:

  - In Spark 3.0, a multiclass logistic regression in Pyspark will now (correctly) return LogisticRegressionSummary, not the subclass BinaryLogisticRegressionSummary. The additional methods exposed by BinaryLogisticRegressionSummary would not work in this case anyway. ([SPARK-31681](https://issues.apache.org/jira/browse/SPARK-31681))
  - In Spark 3.0, pyspark.ml.param.shared.Has* mixins do not provide any set*(self, value) setter methods anymore, use the respective self.set(self.*, value) instead. See SPARK-29093 for details. ([SPARK-29093](https://issues.apache.org/jira/browse/SPARK-29093))

*Programming guide: [Machine Learning Library (MLlib) Guide](https://spark.apache.org/docs/3.0.0/ml-guide.html).*


### SparkR

  - Arrow optimization in SparkR's interoperability ([SPARK-26759](https://issues.apache.org/jira/browse/SPARK-26759))
    - Performance enhancement via vectorized R gapply(), dapply(), createDataFrame, collect()
  - "eager execution" for R shell, IDE ([SPARK-24572](https://issues.apache.org/jira/browse/SPARK-24572))
  - R API for Power Iteration Clustering ([SPARK-19827](https://issues.apache.org/jira/browse/SPARK-19827))

**Changes of behavior**

Please read the [migration guide](https://spark.apache.org/docs/3.0.0/sparkr-migration-guide.html) for details.

*Programming guide: [SparkR (R on Spark)](https://spark.apache.org/docs/3.0.0/sparkr.html).*


### GraphX

*Programming guide: [GraphX Programming Guide](https://spark.apache.org/docs/3.0.0/graphx-programming-guide.html).*


### Deprecations

  - Deprecate Python 2 support ([SPARK-27884](https://issues.apache.org/jira/browse/SPARK-27884))
  - Deprecate R &lt; 3.4 support ([SPARK-26014](https://issues.apache.org/jira/browse/SPARK-26014))
  - Deprecate UserDefinedAggregateFunction ([Spark-30423](https://issues.apache.org/jira/browse/SPARK-30423))


### Known Issues

  - Streaming queries with `dropDuplicates` operator may not be able to restart with the checkpoint written by Spark 2.x. ([SPARK-31990](https://issues.apache.org/jira/browse/SPARK-31990))
  - In Web UI, the job list page may hang for more than 40 seconds. ([SPARK-31967](https://issues.apache.org/jira/browse/SPARK-31967))
  - Set `io.netty.tryReflectionSetAccessible` for Arrow on JDK9+ ([SPARK-29923](https://issues.apache.org/jira/browse/SPARK-29923))
  - With AWS SDK upgrade to 1.11.655, we strongly encourage the users that use S3N file system (open-source NativeS3FileSystem that is based on jets3t library) on Hadoop 2.7.3 to upgrade to use AWS Signature V4 and set the bucket endpoint or migrate to S3A (“s3a://” prefix) - jets3t library uses AWS v2 by default and s3.amazonaws.com as an endpoint. Otherwise, the 403 Forbidden error may be thrown in the following cases:
    - If a user accesses an S3 path that contains “+” characters and uses the legacy S3N file system, e.g. s3n://bucket/path/+file.
    - If a user has configured AWS V2 signature to sign requests to S3 with S3N file system.

    Note that if you use S3AFileSystem, e.g. (“s3a://bucket/path”) to access S3 in S3Select or SQS connectors, then everything will work as expected. ([SPARK-30968](https://issues.apache.org/jira/browse/SPARK-30968))

  - Parsing day of year using pattern letter 'D' returns the wrong result if the year field is missing. This can happen in SQL functions like `to_timestamp` which parses datetime string to datetime values using a pattern string. ([SPARK-31939](https://issues.apache.org/jira/browse/SPARK-31939))
  - Join/Window/Aggregate inside subqueries may lead to wrong results if the keys have values -0.0 and 0.0. ([SPARK-31958](https://issues.apache.org/jira/browse/SPARK-31958))
  - A window query may fail with ambiguous self-join error unexpectedly. ([SPARK-31956](https://issues.apache.org/jira/browse/SPARK-31956))


### Credits

Last but not least, this release would not have been possible without the following contributors: Aaruna Godthi, Adam Binford, Adi Muraru, Adrian Tanase, Ajith S, Akshat Bordia, Ala Luszczak, Aleksandr Kashkirov, Alessandro Bellina, Alex Hagerman, Ali Afroozeh, Ali Smesseim, Alon Doron, Aman Omer, Anastasios Zouzias, Anca Sarb, Andre Sa De Mello, Andrew Crosby, Andy Grove, Andy Zhang, Ankit Raj Boudh, Ankur Gupta, Anton Kirillov, Anton Okolnychyi, Anton Yanchenko, Artem Kalchenko, Artem Kupchinskiy, Artsiom Yudovin, Arun Mahadevan, Arun Pandian, Asaf Levy, Attila Zsolt Piros, Bago Amirbekian, Baohe Zhang, Bartosz Konieczny, Behroz Sikander, Ben Ryves, Bo Hai, Bogdan Ghit, Boris Boutkov, Boris Shminke, Branden Smith, Brandon Krieger, Brian Scannell, Brooke Wenig, Bruce Robbins, Bryan Cutler, Burak Yavuz, Carson Wang, Chaerim Yeo, Chakravarthi, Chandni Singh, Chandu Kavar, Chaoqun Li, Chen Hao, Cheng Lian, Chenxiao Mao, Chitral Verma, Chris Martin, Chris Zhao, Christian Clauss, Christian Stuart, Cody Koeninger, Colin Ma, Cong Du, DB Tsai, Dang Minh Dung, Daoyuan Wang, Darcy Shen, Darren Tirto, Dave DeCaprio, David Lewis, David Lindelof, David Navas, David Toneian, David Vogelbacher, David Vrba, David Yang, Deepyaman Datta, Devaraj K, Dhruve Ashar, Dianjun Ma, Dilip Biswal, Dima Kamalov, Dongdong Hong, Dongjoon Hyun, Dooyoung Hwang, Douglas R Colkitt, Drew Robb, Dylan Guedes, Edgar Rodriguez, Edwina Lu, Emil Sandsto, Enrico Minack, Eren Avsarogullari, Eric Chang, Eric Liang, Eric Meisel, Eric Wu, Erik Christiansen, Erik Erlandson, Eyal Zituny, Fei Wang, Felix Cheung, Fokko Driesprong, Fuwang Hu, Gabbi Merz, Gabor Somogyi, Gengliang Wang, German Schiavon Matteo, Giovanni Lanzani, Greg Senia, Guangxin Wang, Guilherme Souza, Guy Khazma, Haiyang Yu, Helen Yu, Hemanth Meka, Henrique Goulart, Henry D, Herman Van Hovell, Hirobe Keiichi, Holden Karau, Hossein Falaki, Huaxin Gao, Huon Wilson, Hyukjin Kwon, Icysandwich, Ievgen Prokhorenko, Igor Calabria, Ilan Filonenko, Ilya Matiach, Imran Rashid, Ivan Gozali, Ivan Vergiliev, Izek Greenfield, Jacek Laskowski, Jackey Lee, Jagadesh Kiran, Jalpan Randeri, James Lamb, Jamison Bennett, Jash Gala, Jatin Puri, Javier Fuentes, Jeff Evans, Jenny, Jesse Cai, Jiaan Geng, Jiafu Zhang, Jiajia Li, Jian Tang, Jiaqi Li, Jiaxin Shan, Jing Chen He, Joan Fontanals, Jobit Mathew, Joel Genter, John Ayad, John Bauer, John Zhuge, Jorge Machado, Jose Luis Pedrosa, Jose Torres, Joseph K. Bradley, Josh Rosen, Jules Damji, Julien Peloton, Juliusz Sompolski, Jungtaek Lim, Junjie Chen, Justin Uang, Kang Zhou, Karthikeyan Singaravelan, Karuppayya Rajendran, Kazuaki Ishizaki, Ke Jia, Keiji Yoshida, Keith Sun, Kengo Seki, Kent Yao, Ketan Kunde, Kevin Yu, Koert Kuipers, Kousuke Saruta, Kris Mok, Lantao Jin, Lee Dongjin, Lee Moon Soo, Li Hao, Li Jin, Liang Chen, Liang Li, Liang Zhang, Liang-Chi Hsieh, Lijia Liu, Lingang Deng, Lipeng Zhu, Liu Xiao, Liu, Linhong, Liwen Sun, Luca Canali, MJ Tang, Maciej Szymkiewicz, Manu Zhang, Marcelo Vanzin, Marco Gaido, Marek Simunek, Mark Pavey, Martin Junghanns, Martin Loncaric, Maryann Xue, Masahiro Kazama, Matt Hawes, Matt Molek, Matt Stillwell, Matthew Cheah, Maxim Gekk, Maxim Kolesnikov, Mellacheruvu Sandeep, Michael Allman, Michael Chirico, Michael Styles, Michal Senkyr, Mick Jermsurawong, Mike Kaplinskiy, Mingcong Han, Mukul Murthy, Nagaram Prasad Addepally, Nandor Kollar, Neal Song, Neo Chien, Nicholas Chammas, Nicholas Marion, Nick Karpov, Nicola Bova, Nicolas Fraison, Nihar Sheth, Nik Vanderhoof, Nikita Gorbachevsky, Nikita Konda, Ninad Ingole, Niranjan Artal, Nishchal Venkataramana, Norman Maurer, Ohad Raviv, Oleg Kuznetsov, Oleksii Kachaiev, Oleksii Shkarupin, Oliver Urs Lenz, Onur Satici, Owen O'Malley, Ozan Cicekci, Pablo Langa Blanco, Parker Hegstrom, Parth Chandra, Parth Gandhi, Patrick Brown, Patrick Cording, Patrick Pisciuneri, Pavithra Ramachandran, Peng Bo, Pengcheng Liu, Petar Petrov, Peter G. Horvath, Peter Parente, Peter Toth, Philipse Guo, Prakhar Jain, Pralabh Kumar, Praneet Sharma, Prashant Sharma, Qi Shao, Qianyang Yu, Rafael Renaudin, Rahij Ramsharan, Rahul Mahadev, Rakesh Raushan, Rekha Joshi, Reynold Xin, Reza Safi, Rob Russo, Rob Vesse, Robert (Bobby) Evans, Rong Ma, Ross Lodge, Ruben Fiszel, Ruifeng Zheng, Ruilei Ma, Russell Spitzer, Ryan Blue, Ryne Yang, Sahil Takiar, Saisai Shao, Sam Tran, Samuel L. Setegne, Sandeep Katta, Sangram Gaikwad, Sanket Chintapalli, Sanket Reddy, Sarth Frey, Saurabh Chawla, Sean Owen, Sergey Zhemzhitsky, Seth Fitzsimmons, Shahid, Shahin Shakeri, Shane Knapp, Shanyu Zhao, Shaochen Shi, Sharanabasappa G Keriwaddi, Sharif Ahmad, Shiv Prashant Sood, Shivakumar Sondur, Shixiong Zhu, Shuheng Dai, Shuming Li, Simeon Simeonov, Song Jun, Stan Zhai, Stavros Kontopoulos, Stefaan Lippens, Steve Loughran, Steven Aerts, Steven Rand, Sujith Chacko, Sun Ke, Sunitha Kambhampati, Szilard Nemeth, Tae-kyeom, Kim, Takanobu Asanuma, Takeshi Yamamuro, Takuya UESHIN, Tarush Grover, Tathagata Das, Terry Kim, Thomas D'Silva, Thomas Graves, Tianshi Zhu, Tiantian Han, Tibor Csogor, Tin Hang To, Ting Yang, Tingbing Zuo, Tom Van Bussel, Tomoko Komiyama, Tony Zhang, TopGunViper, Udbhav Agrawal, Uncle Gen, Vaclav Kosar, Venkata Krishnan Sowrirajan, Viktor Tarasenko, Vinod KC, Vinoo Ganesh, Vladimir Kuriatkov, Wang Shuo, Wayne Zhang, Wei Zhang, Weichen Xu, Weiqiang Zhuang, Weiyi Huang, Wenchen Fan, Wenjie Wu, Wesley Hoffman, William Hyun, William Montaz, William Wong, Wing Yew Poon, Woudy Gao, Wu, Xiaochang, XU Duo, Xian Liu, Xiangrui Meng, Xianjin YE, Xianyang Liu, Xianyin Xin, Xiao Li, Xiaoyuan Ding, Ximo Guanter, Xingbo Jiang, Xingcan Cui, Xinglong Wang, Xinrong Meng, XiuLi Wei, Xuedong Luan, Xuesen Liang, Xuewen Cao, Yadong Song, Yan Ma, Yanbo Liang, Yang Jie, Yanlin Wang, Yesheng Ma, Yi Wu, Yi Zhu, Yifei Huang, Yiheng Wang, Yijie Fan, Yin Huai, Yishuang Lu, Yizhong Zhang, Yogesh Garg, Yongjin Zhou, Yongqiang Chai, Younggyu Chun, Yuanjian Li, Yucai Yu, Yuchen Huo, Yuexin Zhang, Yuhao Yang, Yuli Fiterman, Yuming Wang, Yun Zou, Zebing Lin, Zhenhua Wang, Zhou Jiang, Zhu, Lipeng, codeborui, cxzl25, dengziming, deshanxiao, eatoncys, hehuiyuan, highmoutain, huangtianhua, liucht-inspur, mob-ai, nooberfsh, roland1982, teeyog, tools4origins, triplesheep, ulysses-you, wackxu, wangjiaochun, wangshisan, wenfang6, wenxuanguan
