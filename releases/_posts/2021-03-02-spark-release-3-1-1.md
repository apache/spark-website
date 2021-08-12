---
layout: post
title: Spark Release 3.1.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Apache Spark 3.1.1 is the second release of the 3.x line. This release adds Python type annotations and Python dependency management support as part of Project Zen. Other major updates include improved ANSI SQL compliance support, history server support in structured streaming, the general availability (GA) of Kubernetes and node decommissioning in Kubernetes and Standalone. In addition, this release continues to focus on usability, stability, and polish while resolving around 1500 tickets.

To download Apache Spark 3.1.1, visit the [downloads](https://spark.apache.org/downloads.html) page. You can consult JIRA for the [detailed changes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315420&version=12349541). We have curated a list of high level changes here, grouped by major modules.

* This will become a table of contents (this text will be scraped).
{:toc}


### Core and Spark SQL

**Highlight**

- Unify create table SQL syntax ([SPARK-31257](https://issues.apache.org/jira/browse/SPARK-31257))
- Shuffled hash join improvement ([SPARK-32461](https://issues.apache.org/jira/browse/SPARK-32461))
- Experimental node decommissioning for Kubernates and Standalone ([SPARK-20624](https://issues.apache.org/jira/browse/SPARK-20624))
- Enhanced subexpression elimination ([SPARK-33092](https://issues.apache.org/jira/browse/SPARK-33092), [SPARK-33337](https://issues.apache.org/jira/browse/SPARK-33337), [SPARK-33427](https://issues.apache.org/jira/browse/SPARK-33427), [SPARK-33540](https://issues.apache.org/jira/browse/SPARK-33540))
- Kubernetes GA ([SPARK-33005](https://issues.apache.org/jira/browse/SPARK-33005))
- Use Apache Hadoop 3.2.0 by default ([SPARK-32058](https://issues.apache.org/jira/browse/SPARK-32058), [SPARK-32841](https://issues.apache.org/jira/browse/SPARK-32841))

**ANSI SQL Compatibility Enhancements**

- Support char/varchar data type ([SPARK-33480](https://issues.apache.org/jira/browse/SPARK-33480))
- ANSI mode: runtime errors instead of returning null ([SPARK-33275](https://issues.apache.org/jira/browse/SPARK-33275))
- ANSI mode: new explicit cast syntax rules ([SPARK-33354](https://issues.apache.org/jira/browse/SPARK-33354))
- Add SQL standard command SET TIME ZONE ([SPARK-32272](https://issues.apache.org/jira/browse/SPARK-32272))
- Unify create table SQL syntax ([SPARK-31257](https://issues.apache.org/jira/browse/SPARK-31257))
- Unify temp view and permanent view behaviors ([SPARK-33138](https://issues.apache.org/jira/browse/SPARK-33138))
- Support column list in INSERT statement ([SPARK-32976](https://issues.apache.org/jira/browse/SPARK-32976))
- Support ANSI nested bracketed comments ([SPARK-28880](https://issues.apache.org/jira/browse/SPARK-28880))

**Performance Enhancements**

- Host-local shuffle data reading without shuffle service ([SPARK-32077](https://issues.apache.org/jira/browse/SPARK-32077))
- Remove redundant sorts before repartition nodes ([SPARK-32276](https://issues.apache.org/jira/browse/SPARK-32276))
- Partially push down predicates ([SPARK-32302](https://issues.apache.org/jira/browse/SPARK-32302), [SPARK-32352](https://issues.apache.org/jira/browse/SPARK-32352))
- Push down filters through expand ([SPARK-33302](https://issues.apache.org/jira/browse/SPARK-33302))
- Push more possible predicates through Join via CNF conversion ([SPARK-31705](https://issues.apache.org/jira/browse/SPARK-31705))
- Remove shuffle by preserving output partitioning of broadcast hash join ([SPARK-31869](https://issues.apache.org/jira/browse/SPARK-31869))
- Remove shuffle by improving reordering join keys ([SPARK-32282](https://issues.apache.org/jira/browse/SPARK-32282))
- Remove shuffle by normalizing output partitioning and sortorder ([SPARK-33399](https://issues.apache.org/jira/browse/SPARK-33399))
- Shuffled hash join improvement ([SPARK-32461](https://issues.apache.org/jira/browse/SPARK-32461))
  - Preserve shuffled hash join build side partitioning ([SPARK-32330](https://issues.apache.org/jira/browse/SPARK-32330))
  - Preserve hash join (BHJ and SHJ) stream side ordering ([SPARK-32383](https://issues.apache.org/jira/browse/SPARK-32383))
  - Coalesce bucketed tables for shuffled hash join ([SPARK-32286](https://issues.apache.org/jira/browse/SPARK-32286))
  - Add code-gen for shuffled hash join ([SPARK-32421](https://issues.apache.org/jira/browse/SPARK-32421))
  - Support full outer join in shuffled hash join ([SPARK-32399](https://issues.apache.org/jira/browse/SPARK-32399))
- Support subexpression elimination in project with whole-stage-codegen ([SPARK-33092](https://issues.apache.org/jira/browse/SPARK-33092))
- Support subexpression elimination in conditional expressions ([SPARK-33337](https://issues.apache.org/jira/browse/SPARK-33337))
- Support subexpression elimination for interpreted expression evaluation ([SPARK-33427](https://issues.apache.org/jira/browse/SPARK-33427))
- Support subexpression elimination for interpreted predicate ([SPARK-33540](https://issues.apache.org/jira/browse/SPARK-33540))
- Other optimizer rules
  - Rule ExtractSingleColumnNullAwareAntiJoin ([SPARK-32290](https://issues.apache.org/jira/browse/SPARK-32290))
  - Rule EliminateNullAwareAntiJoin ([SPARK-32573](https://issues.apache.org/jira/browse/SPARK-32573))
  - Rule EliminateAggregateFilter ([SPARK-32540](https://issues.apache.org/jira/browse/SPARK-32540))
  - Rule UnwrapCastInBinaryComparison ([SPARK-32858](https://issues.apache.org/jira/browse/SPARK-32858))
  - Rule DisableUnnecessaryBucketedScan ([SPARK-32859](https://issues.apache.org/jira/browse/SPARK-32859))
  - Rule CoalesceBucketsInJoin ([SPARK-31350](https://issues.apache.org/jira/browse/SPARK-31350))
  - Prune unnecessary nested fields from generate without project ([SPARK-29721](https://issues.apache.org/jira/browse/SPARK-29721))
  - Prune unnecessary nested fields from aggregate and expand ([SPARK-27217](https://issues.apache.org/jira/browse/SPARK-27217))
  - Prune unnecessary nested fields from repartition-by-expression and join ([SPARK-31736](https://issues.apache.org/jira/browse/SPARK-31736))
  - Prune unnecessary nested fields over cosmetic variations ([SPARK-32163](https://issues.apache.org/jira/browse/SPARK-32163))
  - Prune unnecessary nested fields from window and sort ([SPARK-32059](https://issues.apache.org/jira/browse/SPARK-32059))
  - Optimize size of CreateArray/CreateMap to be the size of its children ([SPARK-33544](https://issues.apache.org/jira/browse/SPARK-33544))

**Extensibility Enhancements**

- Stage Level Resource configuration and Scheduling ([SPARK-27495](https://issues.apache.org/jira/browse/SPARK-27495))
  - Expose RDD APIs for Stage Level Scheduling ([SPARK-29150](https://issues.apache.org/jira/browse/SPARK-29150))
  - Merge resource profiles within a stage ([SPARK-29153](https://issues.apache.org/jira/browse/SPARK-29153))
  - Stage level scheduling support for Kubernetes ([SPARK-33288](https://issues.apache.org/jira/browse/SPARK-33288))
  - Add UI support for stage level scheduling ([SPARK-29303](https://issues.apache.org/jira/browse/SPARK-29303))
- Remote storage for persisting shuffle data ([SPARK-25299](https://issues.apache.org/jira/browse/SPARK-25299))
  - Shuffle writer metadata APIs ([SPARK-31798](https://issues.apache.org/jira/browse/SPARK-31798))
- Allow to use a custom shuffle manager with external shuffle service ([SPARK-33037](https://issues.apache.org/jira/browse/SPARK-33037))
- Add SupportsPartitions APIs on DataSourceV2 ([SPARK-31694](https://issues.apache.org/jira/browse/SPARK-31694))
- Add SupportsMetadataColumns API on DataSourceV2 ([SPARK-31255](https://issues.apache.org/jira/browse/SPARK-31255))
- Make SQL cache serialization pluggable ([SPARK-32274](https://issues.apache.org/jira/browse/SPARK-32274))
- Introduce the "purge" option in TableCatalog.dropTable for v2 catalog ([SPARK-33364](https://issues.apache.org/jira/browse/SPARK-33364))

**Connector Enhancements**

- Hive Metastore partition filter pushdown improvement ([SPARK-33537](https://issues.apache.org/jira/browse/SPARK-33537))
  - Support contains, starts-with and ends-with filters ([SPARK-33458](https://issues.apache.org/jira/browse/SPARK-33458))
  - Support filter by date type ([SPARK-33477](https://issues.apache.org/jira/browse/SPARK-33477))
  - Support filter by not-equals ([SPARK-33582](https://issues.apache.org/jira/browse/SPARK-33582))
- Parquet
  - Allow complex type in map’s key type in Parquet ([SPARK-32639](https://issues.apache.org/jira/browse/SPARK-32639))
  - Allow saving/loading INT96 in Parquet without rebasing ([SPARK-33160](https://issues.apache.org/jira/browse/SPARK-33160))
- ORC
  - Nested column predicate pushdown for ORC ([SPARK-25557](https://issues.apache.org/jira/browse/SPARK-25557))
  - Upgrade Apache ORC to 1.5.12 ([SPARK-33050](https://issues.apache.org/jira/browse/SPARK-33050))
- CSV
  - Leverage SQL text data source during CSV schema inference ([SPARK-32270](https://issues.apache.org/jira/browse/SPARK-32270))
- JSON
  - Support filters pushdown in JSON datasource ([SPARK-30648](https://issues.apache.org/jira/browse/SPARK-30648))
- JDBC
  - Implement catalog APIs for JDBC ([SPARK-32375](https://issues.apache.org/jira/browse/SPARK-32375), [SPARK-32579](https://issues.apache.org/jira/browse/SPARK-32579), [SPARK-32402](https://issues.apache.org/jira/browse/SPARK-32402), [SPARK-33130](https://issues.apache.org/jira/browse/SPARK-33130))
  - Create JDBC authentication provider developer API ([SPARK-32001](https://issues.apache.org/jira/browse/SPARK-32001))
  - Add JDBC connection provider disable possibility ([SPARK-32047](https://issues.apache.org/jira/browse/SPARK-32047))
- Avro
  - Support filters pushdown in Avro datasource ([SPARK-32346](https://issues.apache.org/jira/browse/SPARK-32346))

**Feature Enhancements**

- Node Decommissioning ([SPARK-20624](https://issues.apache.org/jira/browse/SPARK-20624))
  - Basic framework ([SPARK-20628](https://issues.apache.org/jira/browse/SPARK-20628))
  - Migrate RDD blocks during decommission([SPARK-20732](https://issues.apache.org/jira/browse/SPARK-20732))
  - Graceful decommissioning as part of dynamic scaling ([SPARK-31198](https://issues.apache.org/jira/browse/SPARK-31198))
  - Migrate shuffle blocks during decommission ([SPARK-20629](https://issues.apache.org/jira/browse/SPARK-20629))
  - Only exit executor when tasks and block migration are finished ([SPARK-31197](https://issues.apache.org/jira/browse/SPARK-31197))
  - Support fallback storage during decommission ([SPARK-33545](https://issues.apache.org/jira/browse/SPARK-33545))
- New built-in functions
  - json_array_length ([SPARK-31008](https://issues.apache.org/jira/browse/SPARK-31008))
  - json_object_keys ([SPARK-31009](https://issues.apache.org/jira/browse/SPARK-31009))
  - current_catalog ([SPARK-30352](https://issues.apache.org/jira/browse/SPARK-30352))
  - timestamp_seconds, timestamp_millis, timestamp_micros ([SPARK-31710](https://issues.apache.org/jira/browse/SPARK-31710))
  - width_bucket ([SPARK-21117](https://issues.apache.org/jira/browse/SPARK-21117))
  - regexp_extract_all ([SPARK-24884](https://issues.apache.org/jira/browse/SPARK-24884))
  - nth_value ([SPARK-27951](https://issues.apache.org/jira/browse/SPARK-27951))
  - raise_error ([SPARK-32793](https://issues.apache.org/jira/browse/SPARK-32793))
  - unix_seconds, unix_millis and unix_micros ([SPARK-33627](https://issues.apache.org/jira/browse/SPARK-33627))
  - date_from_unix_date and unix_date ([SPARK-33646](https://issues.apache.org/jira/browse/SPARK-33646))
  - current_timezone ([SPARK-33469](https://issues.apache.org/jira/browse/SPARK-33469))
- EXPLAIN command enhancement ([SPARK-32337](https://issues.apache.org/jira/browse/SPARK-32337), [SPARK-31325](https://issues.apache.org/jira/browse/SPARK-31325))
- Provide a option to disable user supplied Hints ([SPARK-31875](https://issues.apache.org/jira/browse/SPARK-31875))
- Support Hive style REPLACE COLUMNS syntax ([SPARK-30613](https://issues.apache.org/jira/browse/SPARK-30613))
- Support 'LIKE ANY' and 'LIKE ALL' operators ([SPARK-30724](https://issues.apache.org/jira/browse/SPARK-30724))
- Support unlimited MATCHED and NOT MATCHED in MERGE INTO ([SPARK-32030](https://issues.apache.org/jira/browse/SPARK-32030))
- Support 'F'-suffixed float literals ([SPARK-32207](https://issues.apache.org/jira/browse/SPARK-32207))
- Support RESET syntax to reset single configuration ([SPARK-32406](https://issues.apache.org/jira/browse/SPARK-32406))
- Support filter expression allows simultaneous use of DISTINCT ([SPARK-30276](https://issues.apache.org/jira/browse/SPARK-30276))
- Support alter table add/drop partition command for DSv2 ([SPARK-32512](https://issues.apache.org/jira/browse/SPARK-32512))
- Support NOT IN subqueries inside nested OR conditions ([SPARK-25154](https://issues.apache.org/jira/browse/SPARK-25154))
- Support REFRESH FUNCTION command ([SPARK-31999](https://issues.apache.org/jira/browse/SPARK-31999))
- Add 'sameSemantics' and 'sementicHash' methods in Dataset ([SPARK-30791](https://issues.apache.org/jira/browse/SPARK-30791))
- Support composed type of case class in UDF ([SPARK-31826](https://issues.apache.org/jira/browse/SPARK-31826))
- Support enumeration in encoders ([SPARK-32585](https://issues.apache.org/jira/browse/SPARK-32585))
- Support nested field APIs withField and dropFields ([SPARK-31317](https://issues.apache.org/jira/browse/SPARK-31317), [SPARK-32511](https://issues.apache.org/jira/browse/SPARK-32511))
- Support to fill nulls for missing columns in unionByName ([SPARK-29358](https://issues.apache.org/jira/browse/SPARK-29358))
- Support DataFrameReader.table to take the specified options ([SPARK-32592](https://issues.apache.org/jira/browse/SPARK-32592), [SPARK-32844](https://issues.apache.org/jira/browse/SPARK-32844))
- Support HDFS location in `spark.sql.hive.metastore.jars` ([SPARK-32852](https://issues.apache.org/jira/browse/SPARK-32852))
- Support --archives option natively ([SPARK-33530](https://issues.apache.org/jira/browse/SPARK-33530), [SPARK-33615](https://issues.apache.org/jira/browse/SPARK-33615))
- Enhance ExecutorPlugin API to include methods for task start and end events ([SPARK-33088](https://issues.apache.org/jira/browse/SPARK-33088))

**Other Notable Changes**

- Provide Search Function in Spark docs site ([SPARK-33166](https://issues.apache.org/jira/browse/SPARK-33166))
- Use Apache Hadoop 3.2.0 by default ([SPARK-32058](https://issues.apache.org/jira/browse/SPARK-32058), [SPARK-32841](https://issues.apache.org/jira/browse/SPARK-32841))
- Upgrade Apache Arrow to 2.0.0 ([SPARK-33213](https://issues.apache.org/jira/browse/SPARK-33213))
- Kubernetes GA ([SPARK-33005](https://issues.apache.org/jira/browse/SPARK-33005))
  - Adds support for Kubernetes NFS volume mounts ([SPARK-31394](https://issues.apache.org/jira/browse/SPARK-31394))
  - Support dynamic PVC creation/deletion ([SPARK-32971](https://issues.apache.org/jira/browse/SPARK-32971), [SPARK-32997](https://issues.apache.org/jira/browse/SPARK-32997))
  - Respect environment variables and configurations for Python executables ([SPARK-33748](https://issues.apache.org/jira/browse/SPARK-33748))
  - Support Python dependency ([SPARK-27936](https://issues.apache.org/jira/browse/SPARK-33748))
  - Make pod allocation executor timeouts configurable and allow scheduling with pending pods ([SPARK-33231](https://issues.apache.org/jira/browse/SPARK-33231), [SPARK-33262](https://issues.apache.org/jira/browse/SPARK-33262))
  - Respect executor idle timeout conf in ExecutorPodsAllocator ([SPARK-33099](https://issues.apache.org/jira/browse/SPARK-33099))
  - Support JDBC Kerberos with keytab ([SPARK-12312](https://issues.apache.org/jira/browse/SPARK-12312))
- Enable Java 8 time API in thrift server ([SPARK-31910](https://issues.apache.org/jira/browse/SPARK-31910))
- Enable Java 8 time API in UDFs ([SPARK-32154](https://issues.apache.org/jira/browse/SPARK-32154))
- Overflow check for aggregate sum with decimals ([SPARK-28067](https://issues.apache.org/jira/browse/SPARK-28067))
- Fix commit collision in dynamic partition overwrite mode ([SPARK-27194](https://issues.apache.org/jira/browse/SPARK-27194), [SPARK-29302](https://issues.apache.org/jira/browse/SPARK-29302))
- Removed references to slave, blacklist and whitelist ([SPARK-32004](https://issues.apache.org/jira/browse/SPARK-32004), [SPARK-32036](https://issues.apache.org/jira/browse/SPARK-32036), [SPARK-32037](https://issues.apache.org/jira/browse/SPARK-32037))
- Remove task result size check for shuffle map stage ([SPARK-32470](https://issues.apache.org/jira/browse/SPARK-32470))
- Generalize ExecutorSource to expose user-given file system schemes ([SPARK-33476](https://issues.apache.org/jira/browse/SPARK-33476))
- Add StorageLevel.DISK_ONLY_3 ([SPARK-32517](https://issues.apache.org/jira/browse/SPARK-32517))
- Expose executor memory metrics in the web UI for executors ([SPARK-23432](https://issues.apache.org/jira/browse/SPARK-23432))
- Expose executor memory metrics at the stage level, in the Stages tab ([SPARK-26341](https://issues.apache.org/jira/browse/SPARK-26341))
- Fix explicitly set of `spark.ui.port` in YARN cluster mode ([SPARK-29465](https://issues.apache.org/jira/browse/SPARK-29465))
- Add `spark.submit.waitForCompletion` configuration to control spark-submit exit in Standalone cluster mode ([SPARK-31486](https://issues.apache.org/jira/browse/SPARK-31486))
- Do not propagate Hadoop’s classpath for Spark distribution with built-in Hadoop ([SPARK-31960](https://issues.apache.org/jira/browse/SPARK-31960))
- Fix jobs disappear intermittently in SHS under high load ([SPARK-33841](https://issues.apache.org/jira/browse/SPARK-33841))
- Redact sensitive attributes of application log in SHS ([SPARK-33504](https://issues.apache.org/jira/browse/SPARK-33504))
- Set up yarn.Client to print direct links to driver stdout/stderr ([SPARK-33185](https://issues.apache.org/jira/browse/SPARK-33185))
- Fix memory leak when fail to store pieces of broadcast ([SPARK-32715](https://issues.apache.org/jira/browse/SPARK-32715))
- Make BlockManagerMaster driver heartbeat timeout configurable ([SPARK-34278](https://issues.apache.org/jira/browse/SPARK-34278))
- Unify and complete cache behaviors ([SPARK-33507](https://issues.apache.org/jira/browse/SPARK-33507))

**Changes of behavior**

Please read the migration guides for each component: [Spark Core](https://spark.apache.org/docs/3.1.1/core-migration-guide.html) and [Spark SQL](https://spark.apache.org/docs/3.1.1/sql-migration-guide.html).

*Programming guides: [Spark RDD Programming Guide](https://spark.apache.org/docs/3.1.1/rdd-programming-guide.html) and [Spark SQL, DataFrames and Datasets Guide](https://spark.apache.org/docs/3.1.1/sql-programming-guide.html).*


### PySpark

**Project Zen**

- Project Zen: Improving Python usability ([SPARK-32082](https://issues.apache.org/jira/browse/SPARK-32082))
- PySpark type hints support ([SPARK-32681](https://issues.apache.org/jira/browse/SPARK-32681))
- Redesign PySpark documentation ([SPARK-31851](https://issues.apache.org/jira/browse/SPARK-31851))
- Migrate to NumPy documentation style ([SPARK-32085](https://issues.apache.org/jira/browse/SPARK-32085))
- Installation option for PyPI Users ([SPARK-32017](https://issues.apache.org/jira/browse/SPARK-32017))
- Un-deprecate inferring DataFrame schema from list of dict ([SPARK-32686](https://issues.apache.org/jira/browse/SPARK-32686))
- Simplify the exception message from Python UDFs ([SPARK-33407](https://issues.apache.org/jira/browse/SPARK-33407))

**Other Notable Changes**

- Stage Level Scheduling APIs ([SPARK-29641](https://issues.apache.org/jira/browse/SPARK-29641))
- Deduplicate deterministic PythonUDF calls ([SPARK-33303](https://issues.apache.org/jira/browse/SPARK-33303))
- Support higher order functions in PySpark functions([SPARK-30681](https://issues.apache.org/jira/browse/SPARK-30681))
- Support data source v2x write APIs ([SPARK-29157](https://issues.apache.org/jira/browse/SPARK-29157))
- Support percentile_approx in PySpark functions([SPARK-30569](https://issues.apache.org/jira/browse/SPARK-30569))
- Support inputFiles in PySpark DataFrame ([SPARK-31763](https://issues.apache.org/jira/browse/SPARK-31763))
- Support withField in PySpark Column ([SPARK-32835](https://issues.apache.org/jira/browse/SPARK-32835))
- Support dropFields in PySpark Column ([SPARK-32511](https://issues.apache.org/jira/browse/SPARK-32511))
- Support nth_value in PySpark functions ([SPARK-33020](https://issues.apache.org/jira/browse/SPARK-33020))
- Support acosh, asinh and atanh ([SPARK-33563](https://issues.apache.org/jira/browse/SPARK-33563))
- Support getCheckpointDir method in PySpark SparkContext ([SPARK-33017](https://issues.apache.org/jira/browse/SPARK-33017))
- Support to fill nulls for missing columns in unionByName ([SPARK-32798](https://issues.apache.org/jira/browse/SPARK-32798))
- Update cloudpickle to v1.5.0 ([SPARK-32094](https://issues.apache.org/jira/browse/SPARK-32094))
- Add MapType support for PySpark with Arrow ([SPARK-24554](https://issues.apache.org/jira/browse/SPARK-33748))
- DataStreamReader.table and DataStreamWriter.toTable ([SPARK-33836](https://issues.apache.org/jira/browse/SPARK-33836))

**Changes of behavior**

Please read the migration guides for [PySpark](https://spark.apache.org/docs/3.1.1/api/python/migration_guide/index.html).

*Programming guides: [PySpark Getting Started](https://spark.apache.org/docs/3.1.1/api/python/getting_started/index.html) and [PySpark User Guide](https://spark.apache.org/docs/3.1.1/api/python/user_guide/index.html).*


### Structured Streaming

**Performance Enhancements**

- Cache fetched list of files beyond maxFilesPerTrigger as unread file ([SPARK-30866](https://issues.apache.org/jira/browse/SPARK-30866))
- Streamline the logic on file stream source and sink metadata log ([SPARK-30462](https://issues.apache.org/jira/browse/SPARK-30462))
- Avoid reading compact metadata log twice if the query restarts from compact batch ([SPARK-30900](https://issues.apache.org/jira/browse/SPARK-30900))

**Feature Enhancements**

- Add DataStreamReader.table API ([SPARK-32885](https://issues.apache.org/jira/browse/SPARK-32885))
- Add DataStreamWriter.toTable API ([SPARK-32896](https://issues.apache.org/jira/browse/SPARK-32896))
- Left semi stream-stream join ([SPARK-32862](https://issues.apache.org/jira/browse/SPARK-32862))
- Full outer stream-stream join ([SPARK-32863](https://issues.apache.org/jira/browse/SPARK-32863))
- Provide a new option to have retention on output files ([SPARK-27188](https://issues.apache.org/jira/browse/SPARK-27188))
- Add Spark Structured Streaming History Server Support ([SPARK-31953](https://issues.apache.org/jira/browse/SPARK-31953))
- Introduce State schema validation among query restart ([SPARK-27237](https://issues.apache.org/jira/browse/SPARK-27237))

**Other Notable Changes**

- Introduce schema validation for streaming state store ([SPARK-31894](https://issues.apache.org/jira/browse/SPARK-31894))
- Support to use a different compression codec in state store ([SPARK-33263](https://issues.apache.org/jira/browse/SPARK-33263))
- Kafka connector infinite wait because metadata never updated ([SPARK-28367](https://issues.apache.org/jira/browse/SPARK-28367))
- Upgrade Kafka to 2.6.0 ([SPARK-32568](https://issues.apache.org/jira/browse/SPARK-32568))
- Pagination support for Structured Streaming UI pages ([SPARK-31642](https://issues.apache.org/jira/browse/SPARK-31642), [SPARK-30119](https://issues.apache.org/jira/browse/SPARK-30119))
- State information in Structured Streaming UI ([SPARK-33223](https://issues.apache.org/jira/browse/SPARK-33223))
- Watermark gap information in Structured Streaming UI ([SPARK-33224](https://issues.apache.org/jira/browse/SPARK-33224))
- Expose state custom metrics information on SS UI ([SPARK-33287](https://issues.apache.org/jira/browse/SPARK-33287))
- Add a new metric regarding number of rows later than watermark ([SPARK-24634](https://issues.apache.org/jira/browse/SPARK-24634))

**Changes of behavior**

Please read the migration guides for [Structured Streaming](https://spark.apache.org/docs/3.1.1/ss-migration-guide.html).

*Programming guides: [Structured Streaming Programming Guide](https://spark.apache.org/docs/3.1.1/structured-streaming-programming-guide.html).*


### MLlib

**Highlight**

- LinearSVC blockify input vectors ([SPARK-30642](https://issues.apache.org/jira/browse/SPARK-30642))
- LogisticRegression blockify input vectors ([SPARK-30659](https://issues.apache.org/jira/browse/SPARK-30659))
- LinearRegression blockify input vectors ([SPARK-30660](https://issues.apache.org/jira/browse/SPARK-30660))
- AFT blockify input vectors ([SPARK-31656](https://issues.apache.org/jira/browse/SPARK-31656))
- Add support for association rules in ML ([SPARK-19939](https://issues.apache.org/jira/browse/SPARK-19939))
- Add training summary for LinearSVCModel ([SPARK-20249](https://issues.apache.org/jira/browse/SPARK-20249))
- Add summary to RandomForestClassificationModel ([SPARK-23631](https://issues.apache.org/jira/browse/SPARK-23631))
- Add training summary to FMClassificationModel ([SPARK-32140](https://issues.apache.org/jira/browse/SPARK-32140))
- Add summary to MultilayerPerceptronClassificationModel ([SPARK-32449](https://issues.apache.org/jira/browse/SPARK-32449))
- Add FMClassifier to SparkR ([SPARK-30820](https://issues.apache.org/jira/browse/SPARK-30820))
- Add SparkR LinearRegression wrapper ([SPARK-30818](https://issues.apache.org/jira/browse/SPARK-30818))
- Add FMRegressor wrapper to SparkR ([SPARK-30819](https://issues.apache.org/jira/browse/SPARK-30819))
- Add SparkR wrapper for vector_to_array ([SPARK-33040](https://issues.apache.org/jira/browse/SPARK-33040))
- adaptively blockify instances - LinearSVC ([SPARK-32907](https://issues.apache.org/jira/browse/SPARK-32907))
- make CrossValidator/TrainValidateSplit/OneVsRest Reader/Writer support Python backend estimator/evaluator ([SPARK-33520](https://issues.apache.org/jira/browse/SPARK-33520))
- Improve performance of ML ALS recommendForAll by GEMV ([SPARK-33518](https://issues.apache.org/jira/browse/SPARK-33520))
- Add UnivariateFeatureSelector ([SPARK-34080](https://issues.apache.org/jira/browse/SPARK-34080))

**Other Notable Changes**

- GMM compute summary and update distributions in one job ([SPARK-31032](https://issues.apache.org/jira/browse/SPARK-31032))
- Remove ChiSqSelector dependency on mllib.ChiSqSelectorModel ([SPARK-31077](https://issues.apache.org/jira/browse/SPARK-31077))
- Flatten the result dataframe of tests in testChiSquare ([SPARK-31301](https://issues.apache.org/jira/browse/SPARK-31301))
- MinHash keyDistance optimization ([SPARK-31436](https://issues.apache.org/jira/browse/SPARK-31436))
- KMeans optimization based on triangle-inequality ([SPARK-31007](https://issues.apache.org/jira/browse/SPARK-31007))
- Add weight support in ClusteringEvaluator ([SPARK-31734](https://issues.apache.org/jira/browse/SPARK-31734))
- Add getMetrics in Evaluators ([SPARK-31768](https://issues.apache.org/jira/browse/SPARK-31768))
- Add instance weight support in LinearRegressionSummary ([SPARK-31944](https://issues.apache.org/jira/browse/SPARK-31944))
- Add user-specified fold column to CrossValidator ([SPARK-31777](https://issues.apache.org/jira/browse/SPARK-31777))
- ML params default value parity in feature and tuning ([SPARK-32310](https://issues.apache.org/jira/browse/SPARK-32310))
- Fix double caching in KMeans/BiKMeans ([SPARK-32676](https://issues.apache.org/jira/browse/SPARK-32676))
- aft transform optimization ([SPARK-33111](https://issues.apache.org/jira/browse/SPARK-33111))
- FeatureHasher transform optimization ([SPARK-32974](https://issues.apache.org/jira/browse/SPARK-32974))
- Add array_to_vector function for dataframe column ([SPARK-33556](https://issues.apache.org/jira/browse/SPARK-33556))
- ML params default value parity in classification, regression, clustering and fpm ([SPARK-32310](https://issues.apache.org/jira/browse/SPARK-32310))
- Summary.totalIterations greater than maxIters ([SPARK-31925](https://issues.apache.org/jira/browse/SPARK-31925))
- tree models prediction optimization ([SPARK-32298](https://issues.apache.org/jira/browse/SPARK-32298))

**Changes of behavior**

Please read the migration guides for [MLlib](https://spark.apache.org/docs/3.1.1/ml-migration-guide.html).

*Programming guide: [Machine Learning Library (MLlib) Guide](https://spark.apache.org/docs/3.1.1/ml-guide.html).*


### SparkR

- Add SparkR interface for higher order functions ([SPARK-30682](https://issues.apache.org/jira/browse/SPARK-30682))
- Support to fill nulls for missing columns in unionByName ([SPARK-32798](https://issues.apache.org/jira/browse/SPARK-32798))
- Support withColumn in SparkR functions ([SPARK-32946](https://issues.apache.org/jira/browse/SPARK-32946))
- Support timestamp_seconds in SparkR functions ([SPARK-32949](https://issues.apache.org/jira/browse/SPARK-32949))
- Support nth_value in SparkR functions ([SPARK-33030](https://issues.apache.org/jira/browse/SPARK-33030))
- Minimum Arrow version bumped up to 1.0.0 ([SPARK-32452](https://issues.apache.org/jira/browse/SPARK-32452))
- Support array_to_vector in SparkR functions ([SPARK-33622](https://issues.apache.org/jira/browse/SPARK-33622))
- Support acosh, asinh and atanh ([SPARK-33563](https://issues.apache.org/jira/browse/SPARK-33563))
- Support from_avro and to_avro ([SPARK-33304](https://issues.apache.org/jira/browse/SPARK-33304))

**Changes of behavior**

Please read the [migration guide](https://spark.apache.org/docs/3.1.1/sparkr-migration-guide.html) for details.

*Programming guide: [SparkR (R on Spark)](https://spark.apache.org/docs/3.1.1/sparkr.html).*


### GraphX

*Programming guide: [GraphX Programming Guide](https://spark.apache.org/docs/3.1.1/graphx-programming-guide.html).*


### Deprecations and Removals

- Drop Python 2.7, 3.4 and 3.5 ([SPARK-32138](https://issues.apache.org/jira/browse/SPARK-32138))
- Drop R &lt; 3.5 support ([SPARK-32073](https://issues.apache.org/jira/browse/SPARK-32073))
- Remove hive-1.2 distribution ([SPARK-32981](https://issues.apache.org/jira/browse/SPARK-32981))
- Remove references to org.spark-project.hive ([SPARK-20202](https://issues.apache.org/jira/browse/SPARK-20202))
- Deprecate support of multiple workers on the same host in Standalone ([SPARK-31018](https://issues.apache.org/jira/browse/SPARK-31018))


## Known Issues

- [[SPARK-33392](https://issues.apache.org/jira/browse/SPARK-34543)] Respect case sensitivity in V1 ALTER TABLE .. SET LOCATION
- [[SPARK-34531](https://issues.apache.org/jira/browse/SPARK-34531)] Remove Experimental API tag in PrometheusServlet
- [[SPARK-34515](https://issues.apache.org/jira/browse/SPARK-34515)] Fix NPE if InSet contains null value during getPartitionsByFilter
- [[SPARK-34497](https://issues.apache.org/jira/browse/SPARK-34497)] JDBC connection provider is not removing kerberos credentials from JVM security context
- [[SPARK-34490](https://issues.apache.org/jira/browse/SPARK-34490)] table maybe resolved as a view if the table is dropped
- [[SPARK-34473](https://issues.apache.org/jira/browse/SPARK-34473)] avoid NPE in DataFrameReader.schema(StructType)
- [[SPARK-34436](https://issues.apache.org/jira/browse/SPARK-34436)] DPP support LIKE ANY/ALL

## Credits

Last but not least, this release would not have been possible without the following contributors: Abhishek Dixit, Adam Binford, Ajith S, Akshat Bordia, Alessandro Patti, Alex Favaro, Ali Afroozeh, Ali Smesseim, Allison Wang, Ankit Srivastava, Anton Okolnychyi, Antonin Delpeuch, Artsiom Yudovin, Arwin Tio, Attila Zsolt Piros, Baohe Zhang, Bo Yang, Bo Zhang, Brandon Jiang, Bruce Robbins, Bryan Cutler, CC Highman, Chandni Singh, Chao Sun, Chen Zhang, Cheng Su, Chuliang Xiao, DB Tsai, Dale Clarke, Daniel Himmelstein, Daniel Moore, David Toneian, Denis Pyshev, Devesh Agrawal, Dilip Biswal, Dmitry Sabanin, Dongjoon Hyun, Du Ripeng, Emilian Bold, Eren Avsarogullari, Eric Lemmon, Eric Wu, Erik Krogen, Fabian Höring, Farhan Khan, Farooq Qaiser, Fei Wang, Fokko Driesprong, Frank Yin, Fuwang Hu, Gabor Somogyi, Gengliang Wang, Gera Shegalov, German Schiavon Matteo, Goki Mori, Guangxin Wang, Gustavo Martin Morcuende, Herman Van Hovell, Holden Karau, Huang Yi, Haejoon Lee, Huaxin Gao, Hyukjin Kwon, Izek Greenfield, Jackey Lee, Jacob Kim, Jalpan Randeri, Jatin Puri, Jiaan Geng, Jinxin Tang, Josh Soref, Jonathan Lafleche, Jungtaek Lim, Karen Feng, Karol Chmist, Kaxil Naik, Kazuaki Ishizaki, Ke Jia, Keiji Yoshida, Kent Yao, Kevin Su, Kevin Wang, Koert Kuipers, Kousuke Saruta, Kyle Bendickson, Lantao Jin, Leanken Lin, Liang Zhang, Liang-Chi Hsieh, Linhong Liu, Lipeng Zhu, Lu Lu, Luca Canali, Maciej Szymkiewicz, Manu Zhang, Marcelo Vanzin, Maryann Xue, Matthew Cheah, Maxim Gekk, Michael Chirico, Michael Munday, Michał Wieleba, Min Shen, Nan Zhu, Nicholas Chammas, Nicholas Marcott, Nik Vanderhoof, Onur Satici, Pablo Langa, Pascal Gillet, Paul Reidy, Pavithra Ramachandran, Pedro Rossi, Peter Toth, Philipse Guo, Piotr Grzegorski, Prakhar Jain, Prashant Sharma, Qianyang Yu, Qilong Su, Rajat Ahuja, Rakesh Raushan, Rameshkrishnan Muthusamy, Raphael Auv, Richard Penney, Robert (Bobby) Evans, Rohit Mishra,Ruifeng Zheng, Ryan Blue, Ryotaro Tsuzuki, Samir Khan, Samuel Souza, Sandeep Katta, Sander Goos, Saurabh Chawla, Sean Owen, Seongjin Cho, Shane Knapp, Shanyu Zhao, Shaoyun Chen, Shixiong Zhu, Shruti Gumma, Srinivas Rishindra Pothireddi, Stavros Kontopoulos, StefanXiepj, Stijn De Haes, Stuart White, Sudharshann D, Sunitha Kambhampati, Takeshi Yamamuro, Takuya UESHIN, Tanel Kiis, Tathagata Das, Terry Kim, Thomas Graves, Tianshi Zhu, Tom Howland, Tom Van Bussel, Udbhav Agrawal, Uncle Gen, Utkarsh Agarwal, Venkata Krishnan Sowrirajan, Vlad Glinsky, Warren Zhu, Weichen Xu, Wenchen Fan, William Hyun, Wing Yew Poon, Xianyin Xin, Xiao Li, Xiduo You, Xingbo Jiang, Xinrong Meng, Xinyi Yu, Xuedong Luan, Yang Jie, Yaroslav Tkachenko, Ye Zhou, Yi Wu, Yi Zhu, Yu Zhong, Yuanjian Li, Yuexin Zhang, Yuming Wang, Yuning Zhang, Zhen Li, Zhenhua Wang, Zhicheng Jin, Zirui Xu, Zuo Dao, akiyamaneko, artiship, cristichircu, dzlab, huangtianhua, liucht-inspur, manubatham20, waitinfuture, wang-zhun, yzjg
