---
layout: post
title: Spark Release 3.4.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.4.2 is a maintenance release containing security and correctness fixes. This release is based on the branch-3.4 maintenance branch of Spark. We strongly recommend all 3.4 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-42784]](https://issues.apache.org/jira/browse/SPARK-42784): should still create subDir when the number of subDir in merge dir is less than conf
  - [[SPARK-43203]](https://issues.apache.org/jira/browse/SPARK-43203): Fix DROP table behavior in session catalog
  - [[SPARK-43393]](https://issues.apache.org/jira/browse/SPARK-43393): Address sequence expression overflow bug
  - [[SPARK-44040]](https://issues.apache.org/jira/browse/SPARK-44040): Fix compute stats when AggregateExec node above QueryStageExec
  - [[SPARK-44079]](https://issues.apache.org/jira/browse/SPARK-44079): Fix `ArrayIndexOutOfBoundsException` when parse array as struct using PERMISSIVE mode with corrupt record
  - [[SPARK-44134]](https://issues.apache.org/jira/browse/SPARK-44134): Fix setting resources (GPU/FPGA) to 0 when they are set in spark-defaults.conf
  - [[SPARK-44136]](https://issues.apache.org/jira/browse/SPARK-44136): Fixed an issue that StateManager may get materialized in executor instead of driver in FlatMapGroupsWithStateExec
  - [[SPARK-44142]](https://issues.apache.org/jira/browse/SPARK-44142): Replace type with tpe in utility to convert python types to spark types
  - [[SPARK-44180]](https://issues.apache.org/jira/browse/SPARK-44180): DistributionAndOrderingUtils should apply ResolveTimeZone
  - [[SPARK-44206]](https://issues.apache.org/jira/browse/SPARK-44206): DataSet.selectExpr scope Session.active
  - [[SPARK-44215]](https://issues.apache.org/jira/browse/SPARK-44215): If num chunks are 0, then server should throw a RuntimeException
  - [[SPARK-44241]](https://issues.apache.org/jira/browse/SPARK-44241): Mistakenly set io.connectionTimeout/connectionCreationTimeout to zero or negative will cause incessant executor cons/destructions
  - [[SPARK-44251]](https://issues.apache.org/jira/browse/SPARK-44251): Set nullable correctly on coalesced join key in full outer USING join
  - [[SPARK-44313]](https://issues.apache.org/jira/browse/SPARK-44313): Fix generated column expression validation when there is a char/varchar column in the schema
  - [[SPARK-44391]](https://issues.apache.org/jira/browse/SPARK-44391): Check the number of argument types in `InvokeLike`
  - [[SPARK-44464]](https://issues.apache.org/jira/browse/SPARK-44464): Fix applyInPandasWithStatePythonRunner to output rows that have Null as first column value
  - [[SPARK-44479]](https://issues.apache.org/jira/browse/SPARK-44479): Fix protobuf conversion from an empty struct type
  - [[SPARK-44547]](https://issues.apache.org/jira/browse/SPARK-44547): Ignore fallback storage for cached RDD migration
  - [[SPARK-44581]](https://issues.apache.org/jira/browse/SPARK-44581): Fix the bug that ShutdownHookManager gets wrong UGI from SecurityManager of ApplicationMaster
  - [[SPARK-44588]](https://issues.apache.org/jira/browse/SPARK-44588): Fix double encryption issue for migrated shuffle blocks
  - [[SPARK-44630]](https://issues.apache.org/jira/browse/SPARK-44630): Revert "[SPARK-43043] Improve the performance of MapOutputTracker.updateMapOutput"
  - [[SPARK-44634]](https://issues.apache.org/jira/browse/SPARK-44634): Encoders.bean does no longer support nested beans with type arguments
  - [[SPARK-44641]](https://issues.apache.org/jira/browse/SPARK-44641): Incorrect result in certain scenarios when SPJ is not triggered
  - [[SPARK-44653]](https://issues.apache.org/jira/browse/SPARK-44653): Non-trivial DataFrame unions should not break caching
  - [[SPARK-44657]](https://issues.apache.org/jira/browse/SPARK-44657): Fix incorrect limit handling in ArrowBatchWithSchemaIterator and config parsing of CONNECT_GRPC_ARROW_MAX_BATCH_SIZE
  - [[SPARK-44805]](https://issues.apache.org/jira/browse/SPARK-44805): getBytes/getShorts/getInts/etc. should work in a column vector that has a dictionary
  - [[SPARK-44840]](https://issues.apache.org/jira/browse/SPARK-44840): Make `array_insert()` 1-based for negative indexes
  - [[SPARK-44846]](https://issues.apache.org/jira/browse/SPARK-44846): Convert the lower redundant Aggregate to Project in RemoveRedundantAggregates
  - [[SPARK-44854]](https://issues.apache.org/jira/browse/SPARK-44854): Python timedelta to DayTimeIntervalType edge case bug
  - [[SPARK-44857]](https://issues.apache.org/jira/browse/SPARK-44857): Fix `getBaseURI` error in Spark Worker LogPage UI buttons
  - [[SPARK-44859]](https://issues.apache.org/jira/browse/SPARK-44859): Fix incorrect property name in structured streaming doc
  - [[SPARK-44871]](https://issues.apache.org/jira/browse/SPARK-44871): Fix percentile_disc behaviour
  - [[SPARK-44910]](https://issues.apache.org/jira/browse/SPARK-44910): Encoders.bean does not support superclasses with generic type arguments
  - [[SPARK-44920]](https://issues.apache.org/jira/browse/SPARK-44920): Use await() instead of awaitUninterruptibly() in TransportClientFactory.createClient()
  - [[SPARK-44925]](https://issues.apache.org/jira/browse/SPARK-44925): K8s default service token file should not be materialized into token
  - [[SPARK-44935]](https://issues.apache.org/jira/browse/SPARK-44935): Fix `RELEASE` file to have the correct information in Docker images if exists
  - [[SPARK-44937]](https://issues.apache.org/jira/browse/SPARK-44937): Mark connection as timedOut in TransportClient.close
  - [[SPARK-44940]](https://issues.apache.org/jira/browse/SPARK-44940): Improve performance of JSON parsing when "spark.sql.json.enablePartialResults" is enabled
  - [[SPARK-44973]](https://issues.apache.org/jira/browse/SPARK-44973): Fix `ArrayIndexOutOfBoundsException` in `conv()`
  - [[SPARK-44990]](https://issues.apache.org/jira/browse/SPARK-44990): Reduce the frequency of get `spark.sql.legacy.nullValueWrittenAsQuotedEmptyStringCsv`
  - [[SPARK-45054]](https://issues.apache.org/jira/browse/SPARK-45054): HiveExternalCatalog.listPartitions should restore partition statistics
  - [[SPARK-45057]](https://issues.apache.org/jira/browse/SPARK-45057): Avoid acquire read lock when keepReadLock is false
  - [[SPARK-45071]](https://issues.apache.org/jira/browse/SPARK-45071): Optimize the processing speed of `BinaryArithmetic#dataType` when processing multi-column data
  - [[SPARK-45075]](https://issues.apache.org/jira/browse/SPARK-45075): Fix alter table with invalid default value will not report error
  - [[SPARK-45078]](https://issues.apache.org/jira/browse/SPARK-45078): Fix `array_insert` ImplicitCastInputTypes not work
  - [[SPARK-45079]](https://issues.apache.org/jira/browse/SPARK-45079): Fix an internal error from `percentile_approx()`on `NULL` accuracy
  - [[SPARK-45081]](https://issues.apache.org/jira/browse/SPARK-45081): Encoders.bean does no longer work with read-only properties
  - [[SPARK-45100]](https://issues.apache.org/jira/browse/SPARK-45100): Fix an internal error from `reflect()`on `NULL` class and method
  - [[SPARK-45109]](https://issues.apache.org/jira/browse/SPARK-45109): Fix log function in Connect
  - [[SPARK-45187]](https://issues.apache.org/jira/browse/SPARK-45187): Fix `WorkerPage` to use the same pattern for `logPage` urls
  - [[SPARK-45227]](https://issues.apache.org/jira/browse/SPARK-45227): Fix a subtle thread-safety issue with CoarseGrainedExecutorBackend
  - [[SPARK-45282]](https://issues.apache.org/jira/browse/SPARK-45282): Correctness issue in AQE with InMemoryTableScanExec
  - [[SPARK-45389]](https://issues.apache.org/jira/browse/SPARK-45389): Correct MetaException matching rule on getting partition metadata
  - [[SPARK-45430]](https://issues.apache.org/jira/browse/SPARK-45430): Fix for FramelessOffsetWindowFunction when IGNORE NULLS and offset > rowCount
  - [[SPARK-45433]](https://issues.apache.org/jira/browse/SPARK-45433): Fix CSV/JSON schema inference when timestamps do not match specified timestampFormat
  - [[SPARK-45473]](https://issues.apache.org/jira/browse/SPARK-45473): Fix incorrect error message for RoundBase
  - [[SPARK-45508]](https://issues.apache.org/jira/browse/SPARK-45508): Add "--add-opens=java.base/jdk.internal.ref=ALL-UNNAMED" so Platform can access Cleaner on Java 9+
  - [[SPARK-45592]](https://issues.apache.org/jira/browse/SPARK-45592): Correctness issue in AQE with InMemoryTableScanExec
  - [[SPARK-45604]](https://issues.apache.org/jira/browse/SPARK-45604): Add LogicalType checking on INT64 -> DateTime conversion on Parquet Vectorized Reader
  - [[SPARK-45652]](https://issues.apache.org/jira/browse/SPARK-45652): SPJ: Handle empty input partitions after dynamic filtering
  - [[SPARK-45670]](https://issues.apache.org/jira/browse/SPARK-45670): SparkSubmit does not support `--total-executor-cores` when deploying on K8s
  - [[SPARK-45678]](https://issues.apache.org/jira/browse/SPARK-45678): Cover BufferReleasingInputStream.available/reset under tryOrFetchFailedException
  - [[SPARK-45749]](https://issues.apache.org/jira/browse/SPARK-45749): Fix `Spark History Server` to sort `Duration` column properly
  - [[SPARK-45786]](https://issues.apache.org/jira/browse/SPARK-45786): Fix inaccurate Decimal multiplication and division results
  - [[SPARK-45814]](https://issues.apache.org/jira/browse/SPARK-45814): Make ArrowConverters.createEmptyArrowBatch call close() to avoid memory leak
  - [[SPARK-45882]](https://issues.apache.org/jira/browse/SPARK-45882): BroadcastHashJoinExec propagate partitioning should respect CoalescedHashPartitioning
  - [[SPARK-45896]](https://issues.apache.org/jira/browse/SPARK-45896): Construct `ValidateExternalType` with the correct expected type
  - [[SPARK-45920]](https://issues.apache.org/jira/browse/SPARK-45920): group by ordinal should be idempotent
  - [[SPARK-46006]](https://issues.apache.org/jira/browse/SPARK-46006): YarnAllocator miss clean targetNumExecutorsPerResourceProfileId after YarnSchedulerBackend call stop
  - [[SPARK-46012]](https://issues.apache.org/jira/browse/SPARK-46012): EventLogFileReader should not read rolling logs if app status file is missing
  - [[SPARK-46062]](https://issues.apache.org/jira/browse/SPARK-46062): Sync the isStreaming flag between CTE definition and reference
  - [[SPARK-46064]](https://issues.apache.org/jira/browse/SPARK-46064): Move out EliminateEventTimeWatermark to the analyzer and change to only take effect on resolved child

### Dependency Changes

While being a maintenance release we did still upgrade some dependencies in this release they are:

  - [[SPARK-44415]](https://issues.apache.org/jira/browse/SPARK-44415): Upgrade snappy-java to 1.1.10.2
  - [[SPARK-44513]](https://issues.apache.org/jira/browse/SPARK-44513): Upgrade snappy-java to 1.1.10.3
  - [[SPARK-45103]](https://issues.apache.org/jira/browse/SPARK-45103): Update ORC to 1.8.5
  - [[SPARK-45884]](https://issues.apache.org/jira/browse/SPARK-45884): Update ORC to 1.8.6

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.4.2).

We would like to acknowledge all community members for contributing patches to this release.



