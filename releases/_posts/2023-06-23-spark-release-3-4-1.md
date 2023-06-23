---
layout: post
title: Spark Release 3.4.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.4.1 is a maintenance release containing stability fixes. This release is based on the branch-3.4 maintenance branch of Spark. We strongly recommend all 3.4 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-32559]](https://issues.apache.org/jira/browse/SPARK-32559): Fix the trim logic did't handle ASCII control characters correctly
  - [[SPARK-37829]](https://issues.apache.org/jira/browse/SPARK-37829): Dataframe.joinWith outer-join should return a null value for unmatched row
  - [[SPARK-42078]](https://issues.apache.org/jira/browse/SPARK-42078): Add `CapturedException` to utils
  - [[SPARK-42290]](https://issues.apache.org/jira/browse/SPARK-42290): Fix the OOM error can't be reported when AQE on
  - [[SPARK-42421]](https://issues.apache.org/jira/browse/SPARK-42421): Use the utils to get the switch for dynamic allocation used in local checkpoint
  - [[SPARK-42475]](https://issues.apache.org/jira/browse/SPARK-42475): Fix PySpark connect Quickstart binder link
  - [[SPARK-42826]](https://issues.apache.org/jira/browse/SPARK-42826): Update migration notes for pandas API on Spark
  - [[SPARK-43043]](https://issues.apache.org/jira/browse/SPARK-43043): Improve the performance of MapOutputTracker.updateMapOutput
  - [[SPARK-43050]](https://issues.apache.org/jira/browse/SPARK-43050): Fix construct aggregate expressions by replacing grouping functions
  - [[SPARK-43067]](https://issues.apache.org/jira/browse/SPARK-43067): Correct the location of error class resource file in Kafka connector
  - [[SPARK-43069]](https://issues.apache.org/jira/browse/SPARK-43069): Use `sbt-eclipse` instead of `sbteclipse-plugin`
  - [[SPARK-43071]](https://issues.apache.org/jira/browse/SPARK-43071): Support SELECT DEFAULT with ORDER BY, LIMIT, OFFSET for INSERT source relation
  - [[SPARK-43072]](https://issues.apache.org/jira/browse/SPARK-43072): Include TIMESTAMP_NTZ type in ANSI Compliance doc
  - [[SPARK-43075]](https://issues.apache.org/jira/browse/SPARK-43075): Change `gRPC` to `grpcio` when it is not installed.
  - [[SPARK-43083]](https://issues.apache.org/jira/browse/SPARK-43083): Mark `*StateStoreSuite` as `ExtendedSQLTest`
  - [[SPARK-43085]](https://issues.apache.org/jira/browse/SPARK-43085): Support column DEFAULT assignment for multi-part table names
  - [[SPARK-43098]](https://issues.apache.org/jira/browse/SPARK-43098): Fix correctness COUNT bug when scalar subquery has group by clause
  - [[SPARK-43113]](https://issues.apache.org/jira/browse/SPARK-43113): Evaluate stream-side variables when generating code for a bound condition
  - [[SPARK-43125]](https://issues.apache.org/jira/browse/SPARK-43125): Fix Connect Server Can't Handle Exception With Null Message
  - [[SPARK-43126]](https://issues.apache.org/jira/browse/SPARK-43126): Mark two Hive UDF expressions as stateful
  - [[SPARK-43139]](https://issues.apache.org/jira/browse/SPARK-43139): Fix incorrect column names in sql-ref-syntax-dml-insert-table.md
  - [[SPARK-43141]](https://issues.apache.org/jira/browse/SPARK-43141): Ignore generated Java files in checkstyle
  - [[SPARK-43156]](https://issues.apache.org/jira/browse/SPARK-43156): Fix `COUNT(*) is null` bug in correlated scalar subquery
  - [[SPARK-43157]](https://issues.apache.org/jira/browse/SPARK-43157): Clone InMemoryRelation cached plan to prevent cloned plan from referencing same objects
  - [[SPARK-43158]](https://issues.apache.org/jira/browse/SPARK-43158): Set upperbound of pandas version for Binder integration
  - [[SPARK-43249]](https://issues.apache.org/jira/browse/SPARK-43249): Fix missing stats for SQL Command
  - [[SPARK-43281]](https://issues.apache.org/jira/browse/SPARK-43281): Fix concurrent writer does not update file metrics
  - [[SPARK-43284]](https://issues.apache.org/jira/browse/SPARK-43284): Switch back to url-encoded strings
  - [[SPARK-43293]](https://issues.apache.org/jira/browse/SPARK-43293): `__qualified_access_only` should be ignored in normal columns
  - [[SPARK-43313]](https://issues.apache.org/jira/browse/SPARK-43313): Adding missing column DEFAULT values for MERGE INSERT actions
  - [[SPARK-43336]](https://issues.apache.org/jira/browse/SPARK-43336): Casting between Timestamp and TimestampNTZ requires timezone
  - [[SPARK-43337]](https://issues.apache.org/jira/browse/SPARK-43337): Asc/desc arrow icons for sorting column does not get displayed in the table column
  - [[SPARK-43340]](https://issues.apache.org/jira/browse/SPARK-43340): Handle missing stack-trace field in eventlogs
  - [[SPARK-43342]](https://issues.apache.org/jira/browse/SPARK-43342): Revert SPARK-39006 Show a directional error message for executor PVC dynamic allocation failure
  - [[SPARK-43374]](https://issues.apache.org/jira/browse/SPARK-43374): Move protobuf-java to BSD 3-clause group and update the license copy
  - [[SPARK-43378]](https://issues.apache.org/jira/browse/SPARK-43378): Properly close stream objects in deserializeFromChunkedBuffer
  - [[SPARK-43395]](https://issues.apache.org/jira/browse/SPARK-43395): Exclude macOS tar extended metadata in make-distribution.sh
  - [[SPARK-43398]](https://issues.apache.org/jira/browse/SPARK-43398): Executor timeout should be max of idle shuffle and rdd timeout
  - [[SPARK-43404]](https://issues.apache.org/jira/browse/SPARK-43404): Skip reusing sst file for same version of RocksDB state store to avoid id mismatch error
  - [[SPARK-43414]](https://issues.apache.org/jira/browse/SPARK-43414): Fix flakiness in Kafka RDD suites due to port binding configuration issue
  - [[SPARK-43425]](https://issues.apache.org/jira/browse/SPARK-43425): Add `TimestampNTZType` to `ColumnarBatchRow`
  - [[SPARK-43441]](https://issues.apache.org/jira/browse/SPARK-43441): `makeDotNode` should not fail when DeterministicLevel is absent
  - [[SPARK-43450]](https://issues.apache.org/jira/browse/SPARK-43450): Add more `_metadata` filter test cases
  - [[SPARK-43471]](https://issues.apache.org/jira/browse/SPARK-43471): Handle missing hadoopProperties and metricsProperties
  - [[SPARK-43483]](https://issues.apache.org/jira/browse/SPARK-43483): Adds SQL references for OFFSET clause
  - [[SPARK-43510]](https://issues.apache.org/jira/browse/SPARK-43510): Fix YarnAllocator internal state when adding running executor after processing completed containers
  - [[SPARK-43517]](https://issues.apache.org/jira/browse/SPARK-43517): Add a migration guide for namedtuple monkey patch
  - [[SPARK-43522]](https://issues.apache.org/jira/browse/SPARK-43522): Fix creating struct column name with index of array
  - [[SPARK-43527]](https://issues.apache.org/jira/browse/SPARK-43527): Fix `catalog.listCatalogs` in PySpark
  - [[SPARK-43541]](https://issues.apache.org/jira/browse/SPARK-43541): Propagate all `Project` tags in resolving of expressions and missing columns
  - [[SPARK-43547]](https://issues.apache.org/jira/browse/SPARK-43547): Update "Supported Pandas API" page to point out the proper pandas docs
  - [[SPARK-43587]](https://issues.apache.org/jira/browse/SPARK-43587): Run `HealthTrackerIntegrationSuite` in a dedicated JVM
  - [[SPARK-43589]](https://issues.apache.org/jira/browse/SPARK-43589): Fix `cannotBroadcastTableOverMaxTableBytesError` to use `bytesToString`
  - [[SPARK-43718]](https://issues.apache.org/jira/browse/SPARK-43718): Set nullable correctly for keys in USING joins
  - [[SPARK-43719]](https://issues.apache.org/jira/browse/SPARK-43719): Handle `missing row.excludedInStages` field
  - [[SPARK-43751]](https://issues.apache.org/jira/browse/SPARK-43751): Document `unbase64` behavior change
  - [[SPARK-43758]](https://issues.apache.org/jira/browse/SPARK-43758): Update Hadoop 2 dependency manifest
  - [[SPARK-43759]](https://issues.apache.org/jira/browse/SPARK-43759): Expose TimestampNTZType in pyspark.sql.types
  - [[SPARK-43760]](https://issues.apache.org/jira/browse/SPARK-43760): Nullability of scalar subquery results
  - [[SPARK-43802]](https://issues.apache.org/jira/browse/SPARK-43802): Fix codegen for unhex and unbase64 with failOnError=true
  - [[SPARK-43894]](https://issues.apache.org/jira/browse/SPARK-43894): Fix bug in df.cache()
  - [[SPARK-43956]](https://issues.apache.org/jira/browse/SPARK-43956): Fix the bug doesn't display column's sql for Percentile[Cont|Disc]
  - [[SPARK-43973]](https://issues.apache.org/jira/browse/SPARK-43973): Structured Streaming UI should display failed queries correctly
  - [[SPARK-43976]](https://issues.apache.org/jira/browse/SPARK-43976): Handle the case where modifiedConfigs doesn't exist in event logs
  - [[SPARK-44018]](https://issues.apache.org/jira/browse/SPARK-44018): Improve the hashCode and toString for some DS V2 Expression
  - [[SPARK-44038]](https://issues.apache.org/jira/browse/SPARK-44038): Update YuniKorn docs with v1.3
  - [[SPARK-44040]](https://issues.apache.org/jira/browse/SPARK-44040): Fix compute stats when AggregateExec node above QueryStageExec


### Dependency Changes

While being a maintenance release we did still upgrade some dependencies in this release they are:

  - [[SPARK-43758]](https://issues.apache.org/jira/browse/SPARK-43758): Upgrade snappy-java to 1.1.10.0
  - [[SPARK-44070]](https://issues.apache.org/jira/browse/SPARK-44070): Upgrade snappy-java to 1.1.10.1
  - [[SPARK-43949]](https://issues.apache.org/jira/browse/SPARK-43949): Upgrade cloudpickle to 2.2.1
  - [[SPARK-44053]](https://issues.apache.org/jira/browse/SPARK-44053): Update ORC to 1.8.4

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.4.1).

We would like to acknowledge all community members for contributing patches to this release.

