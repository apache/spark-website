---
layout: post
title: Spark Release 3.5.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.5.1 is the last maintenance release containing security and correctness fixes. This release is based on the branch-3.5 maintenance branch of Spark. We strongly recommend all 3.5 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-45187]](https://issues.apache.org/jira/browse/SPARK-45187): Fix WorkerPage to use the same pattern for `logPage` urls
  - [[SPARK-45553]](https://issues.apache.org/jira/browse/SPARK-45553): Deprecate assertPandasOnSparkEqual
  - [[SPARK-45652]](https://issues.apache.org/jira/browse/SPARK-45652): SPJ: Handle empty input partitions after dynamic filtering
  - [[SPARK-46012]](https://issues.apache.org/jira/browse/SPARK-46012): EventLogFileReader should not read rolling logs if appStatus is missing
  - [[SPARK-46029]](https://issues.apache.org/jira/browse/SPARK-46029): Escape the single quote, _ and % for DS V2 pushdown
  - [[SPARK-46369]](https://issues.apache.org/jira/browse/SPARK-46369): Remove `kill` link from RELAUNCHING drivers in MasterPage
  - [[SPARK-46704]](https://issues.apache.org/jira/browse/SPARK-46704): Fix `MasterPage` to sort `Running Drivers` table by `Duration` column correctly
  - [[SPARK-46817]](https://issues.apache.org/jira/browse/SPARK-46817): Fix `spark-daemon.sh` usage by adding `decommission` command
  - [[SPARK-46888]](https://issues.apache.org/jira/browse/SPARK-46888): Fix `Master` to reject worker kill request if decommission is disabled
  - [[SPARK-39910]](https://issues.apache.org/jira/browse/SPARK-39910): DataFrameReader API cannot read files from hadoop archives (.har)
  - [[SPARK-40154]](https://issues.apache.org/jira/browse/SPARK-40154): PySpark: DataFrame.cache docstring gives wrong storage level
  - [[SPARK-43393]](https://issues.apache.org/jira/browse/SPARK-43393): Sequence expression can overflow
  - [[SPARK-44683]](https://issues.apache.org/jira/browse/SPARK-44683): Logging level isn't passed to RocksDB state store provider correctly
  - [[SPARK-44805]](https://issues.apache.org/jira/browse/SPARK-44805): Data lost after union using spark.sql.parquet.enableNestedColumnVectorizedReader=true
  - [[SPARK-44840]](https://issues.apache.org/jira/browse/SPARK-44840): array_insert() give wrong results for ngative index
  - [[SPARK-44910]](https://issues.apache.org/jira/browse/SPARK-44910): Encoders.bean does not support superclasses with generic type arguments
  - [[SPARK-44973]](https://issues.apache.org/jira/browse/SPARK-44973): Fix ArrayIndexOutOfBoundsException in conv()
  - [[SPARK-45014]](https://issues.apache.org/jira/browse/SPARK-45014): Clean up fileserver when cleaning up files, jars and archives in SparkContext
  - [[SPARK-45057]](https://issues.apache.org/jira/browse/SPARK-45057): Deadlock caused by rdd replication level of 2
  - [[SPARK-45072]](https://issues.apache.org/jira/browse/SPARK-45072): Fix Outerscopes for same cell evaluation
  - [[SPARK-45075]](https://issues.apache.org/jira/browse/SPARK-45075): Alter table with invalid default value will not report error
  - [[SPARK-45078]](https://issues.apache.org/jira/browse/SPARK-45078): The ArrayInsert function should make explicit casting when element type not equals derived component type
  - [[SPARK-45081]](https://issues.apache.org/jira/browse/SPARK-45081): Encoders.bean does no longer work with read-only properties
  - [[SPARK-45106]](https://issues.apache.org/jira/browse/SPARK-45106): percentile_cont gets internal error when user input fails runtime replacement's input type check
  - [[SPARK-45117]](https://issues.apache.org/jira/browse/SPARK-45117): Implement missing otherCopyArgs for the MultiCommutativeOp expression
  - [[SPARK-45124]](https://issues.apache.org/jira/browse/SPARK-45124): Do not use local user ID for Local Relations
  - [[SPARK-45132]](https://issues.apache.org/jira/browse/SPARK-45132): Fix IDENTIFIER clause for functions
  - [[SPARK-45171]](https://issues.apache.org/jira/browse/SPARK-45171): GenerateExec fails to initialize non-deterministic expressions before use
  - [[SPARK-45182]](https://issues.apache.org/jira/browse/SPARK-45182): Ignore task completion from old stage after retrying indeterminate stages
  - [[SPARK-45205]](https://issues.apache.org/jira/browse/SPARK-45205): Since version 3.2.0, Spark SQL has taken longer to execute "show paritions",probably because of changes introduced by SPARK-35278
  - [[SPARK-45227]](https://issues.apache.org/jira/browse/SPARK-45227): Fix a subtle thread-safety issue with CoarseGrainedExecutorBackend where an executor process randomly gets stuck
  - [[SPARK-45291]](https://issues.apache.org/jira/browse/SPARK-45291): Use unknown query execution id instead of no such app when id is invalid
  - [[SPARK-45311]](https://issues.apache.org/jira/browse/SPARK-45311): Encoder fails on many "NoSuchElementException: None.get" since 3.4.x, search for an encoder for a generic type, and since 3.5.x isn't "an expression encoder"
  - [[SPARK-45346]](https://issues.apache.org/jira/browse/SPARK-45346): Parquet schema inference should respect case sensitive flag when merging schema
  - [[SPARK-45371]](https://issues.apache.org/jira/browse/SPARK-45371): FIx shading problem in Spark Connect
  - [[SPARK-45383]](https://issues.apache.org/jira/browse/SPARK-45383): Missing case for RelationTimeTravel in CheckAnalysis
  - [[SPARK-45389]](https://issues.apache.org/jira/browse/SPARK-45389): Correct MetaException matching rule on getting partition metadata
  - [[SPARK-45424]](https://issues.apache.org/jira/browse/SPARK-45424): Regression in CSV schema inference when timestamps do not match specified timestampFormat
  - [[SPARK-45430]](https://issues.apache.org/jira/browse/SPARK-45430): FramelessOffsetWindowFunctionFrame fails when ignore nulls and offset > # of rows
  - [[SPARK-45433]](https://issues.apache.org/jira/browse/SPARK-45433): CSV/JSON schema inference when timestamps do not match specified timestampFormat with only one row on each partition report error
  - [[SPARK-45449]](https://issues.apache.org/jira/browse/SPARK-45449): Cache Invalidation Issue with JDBC Table
  - [[SPARK-45484]](https://issues.apache.org/jira/browse/SPARK-45484): Fix the bug that uses incorrect parquet compression codec lz4raw
  - [[SPARK-45498]](https://issues.apache.org/jira/browse/SPARK-45498): Followup: Ignore task completion from old stage after retrying indeterminate stages
  - [[SPARK-45508]](https://issues.apache.org/jira/browse/SPARK-45508): Add "--add-opens=java.base/jdk.internal.ref=ALL-UNNAMED" so Platform can access cleaner on Java 9+
  - [[SPARK-45543]](https://issues.apache.org/jira/browse/SPARK-45543): InferWindowGroupLimit causes bug if the other window functions haven't the same window frame as the rank-like functions
  - [[SPARK-45561]](https://issues.apache.org/jira/browse/SPARK-45561): Convert TINYINT catalyst properly in MySQL Dialect
  - [[SPARK-45580]](https://issues.apache.org/jira/browse/SPARK-45580): Subquery changes the output schema of the outer query
  - [[SPARK-45584]](https://issues.apache.org/jira/browse/SPARK-45584): Execution fails when there are subqueries in TakeOrderedAndProjectExec
  - [[SPARK-45592]](https://issues.apache.org/jira/browse/SPARK-45592): AQE and InMemoryTableScanExec correctness bug
  - [[SPARK-45604]](https://issues.apache.org/jira/browse/SPARK-45604): Converting timestamp_ntz to array<timestamp_ntz> can cause NPE or SEGFAULT on parquet vectorized reader
  - [[SPARK-45616]](https://issues.apache.org/jira/browse/SPARK-45616): Usages of ParVector are unsafe because it does not propagate ThreadLocals or SparkSession
  - [[SPARK-45631]](https://issues.apache.org/jira/browse/SPARK-45631): Broken backward compatibility in PySpark: StreamingQueryListener due to the addition of onQueryIdle
  - [[SPARK-45670]](https://issues.apache.org/jira/browse/SPARK-45670): SparkSubmit does not support --total-executor-cores when deploying on K8s
  - [[SPARK-45678]](https://issues.apache.org/jira/browse/SPARK-45678): Cover BufferReleasingInputStream.available under tryOrFetchFailedException
  - [[SPARK-45786]](https://issues.apache.org/jira/browse/SPARK-45786): Inaccurate Decimal multiplication and division results
  - [[SPARK-45814]](https://issues.apache.org/jira/browse/SPARK-45814): ArrowConverters.createEmptyArrowBatch may cause memory leak
  - [[SPARK-45896]](https://issues.apache.org/jira/browse/SPARK-45896): Expression encoding fails for Seq/Map of `Option[Seq/Date/Timestamp/BigDecimal]`
  - [[SPARK-45920]](https://issues.apache.org/jira/browse/SPARK-45920): group by ordinal should be idempotent
  - [[SPARK-46006]](https://issues.apache.org/jira/browse/SPARK-46006): YarnAllocator miss clean targetNumExecutorsPerResourceProfileId after YarnSchedulerBackend call stop
  - [[SPARK-46016]](https://issues.apache.org/jira/browse/SPARK-46016): Fix pandas API support list properly
  - [[SPARK-46062]](https://issues.apache.org/jira/browse/SPARK-46062): CTE reference node does not inherit the flag `isStreaming` from CTE definition node
  - [[SPARK-46064]](https://issues.apache.org/jira/browse/SPARK-46064): EliminateEventTimeWatermark does not consider the fact that isStreaming flag can change for current child during resolution
  - [[SPARK-46092]](https://issues.apache.org/jira/browse/SPARK-46092): Overflow in Parquet row group filter creation causes incorrect results
  - [[SPARK-46189]](https://issues.apache.org/jira/browse/SPARK-46189): Various Pandas functions fail in interpreted mode
  - [[SPARK-46239]](https://issues.apache.org/jira/browse/SPARK-46239): Hide Jetty info
  - [[SPARK-46274]](https://issues.apache.org/jira/browse/SPARK-46274): Range operator computeStats() proper long conversions
  - [[SPARK-46275]](https://issues.apache.org/jira/browse/SPARK-46275): Protobuf: Permissive mode should return null rather than struct with null fields
  - [[SPARK-46330]](https://issues.apache.org/jira/browse/SPARK-46330): Loading of Spark UI blocks for a long time when HybridStore enabled
  - [[SPARK-46339]](https://issues.apache.org/jira/browse/SPARK-46339): Directory with number name should not be treated as metadata log
  - [[SPARK-46388]](https://issues.apache.org/jira/browse/SPARK-46388): HiveAnalysis misses pattern guard `query.resolved`
  - [[SPARK-46396]](https://issues.apache.org/jira/browse/SPARK-46396): LegacyFastTimestampFormatter.parseOptional should not throw exception
  - [[SPARK-46443]](https://issues.apache.org/jira/browse/SPARK-46443): Decimal precision and scale should decided by JDBC dialect.
  - [[SPARK-46453]](https://issues.apache.org/jira/browse/SPARK-46453): SessionHolder doesn't throw exceptions from internalError()
  - [[SPARK-46466]](https://issues.apache.org/jira/browse/SPARK-46466): vectorized parquet reader should never do rebase for timestamp ntz
  - [[SPARK-46480]](https://issues.apache.org/jira/browse/SPARK-46480): Fix NPE when table cache task attempt
  - [[SPARK-46535]](https://issues.apache.org/jira/browse/SPARK-46535): NPE when describe extended a column without col stats
  - [[SPARK-46562]](https://issues.apache.org/jira/browse/SPARK-46562): Remove retrieval of `keytabFile` from `UserGroupInformation` in `HiveAuthFactory`
  - [[SPARK-46590]](https://issues.apache.org/jira/browse/SPARK-46590): Coalesce partiton assert error after skew join optimization
  - [[SPARK-46598]](https://issues.apache.org/jira/browse/SPARK-46598): OrcColumnarBatchReader should respect the memory mode when creating column vectors for the missing column
  - [[SPARK-46602]](https://issues.apache.org/jira/browse/SPARK-46602): CREATE VIEW IF NOT EXISTS should never throw `TABLE_OR_VIEW_ALREADY_EXISTS` exception
  - [[SPARK-46609]](https://issues.apache.org/jira/browse/SPARK-46609): avoid exponential explosion in PartitioningPreservingUnaryExecNode
  - [[SPARK-46640]](https://issues.apache.org/jira/browse/SPARK-46640): RemoveRedundantAliases does not account for SubqueryExpression when removing aliases
  - [[SPARK-46663]](https://issues.apache.org/jira/browse/SPARK-46663): Disable memory profiler for pandas UDFs with iterators
  - [[SPARK-46676]](https://issues.apache.org/jira/browse/SPARK-46676): dropDuplicatesWithinWatermark throws error on canonicalizing plan
  - [[SPARK-46684]](https://issues.apache.org/jira/browse/SPARK-46684): CoGroup.applyInPandas/Arrow should pass arguments properly
  - [[SPARK-46700]](https://issues.apache.org/jira/browse/SPARK-46700): count the last spilling for the shuffle disk spilling bytes metric
  - [[SPARK-46747]](https://issues.apache.org/jira/browse/SPARK-46747): Too Many Shared Locks due to PostgresDialect.getTableExistsQuery - LIMIT 1
  - [[SPARK-46763]](https://issues.apache.org/jira/browse/SPARK-46763): ReplaceDeduplicateWithAggregate fails when non-grouping keys have duplicate attributes
  - [[SPARK-46769]](https://issues.apache.org/jira/browse/SPARK-46769): Refine timestamp related schema inference
  - [[SPARK-46779]](https://issues.apache.org/jira/browse/SPARK-46779): Grouping by subquery with a cached relation can fail
  - [[SPARK-46786]](https://issues.apache.org/jira/browse/SPARK-46786): Fix MountVolumesFeatureStep to use ReadWriteOncePod instead of ReadWriteOnce
  - [[SPARK-46794]](https://issues.apache.org/jira/browse/SPARK-46794): Incorrect results due to inferred predicate from checkpoint with subquery
  - [[SPARK-46796]](https://issues.apache.org/jira/browse/SPARK-46796): RocksDB versionID Mismatch in SST files
  - [[SPARK-46855]](https://issues.apache.org/jira/browse/SPARK-46855): Add `sketch` to the dependencies of the `catalyst` module in `module.py`
  - [[SPARK-46861]](https://issues.apache.org/jira/browse/SPARK-46861): Avoid Deadlock in DAGScheduler
  - [[SPARK-46862]](https://issues.apache.org/jira/browse/SPARK-46862): Incorrect count() of a dataframe loaded from CSV datasource
  - [[SPARK-46945]](https://issues.apache.org/jira/browse/SPARK-46945): Add `spark.kubernetes.legacy.useReadWriteOnceAccessMode` for old K8s clusters
  - [[SPARK-47019]](https://issues.apache.org/jira/browse/SPARK-47019): AQE dynamic cache partitioning causes SortMergeJoin to result in data loss
  - [[SPARK-45360]](https://issues.apache.org/jira/browse/SPARK-45360): Initialize spark session builder configuration from SPARK_REMOTE
  - [[SPARK-45706]](https://issues.apache.org/jira/browse/SPARK-45706): Makes entire Binder build fails fast during setting up
  - [[SPARK-46732]](https://issues.apache.org/jira/browse/SPARK-46732): Propagate JobArtifactSet to broadcast execution thread
  - [[SPARK-44833]](https://issues.apache.org/jira/browse/SPARK-44833): Spark Connect reattach when initial ExecutePlan didn't reach server doing too eager Reattach
  - [[SPARK-44835]](https://issues.apache.org/jira/browse/SPARK-44835): SparkConnect ReattachExecute could raise before ExecutePlan even attaches.
  - [[SPARK-45050]](https://issues.apache.org/jira/browse/SPARK-45050): Improve error message for UNKNOWN io.grpc.StatusRuntimeException
  - [[SPARK-45071]](https://issues.apache.org/jira/browse/SPARK-45071): Optimize the processing speed of `BinaryArithmetic#dataType` when processing multi-column data
  - [[SPARK-45250]](https://issues.apache.org/jira/browse/SPARK-45250): Support stage level task resource profile for yarn cluster when dynamic allocation disabled
  - [[SPARK-45386]](https://issues.apache.org/jira/browse/SPARK-45386): Correctness issue when persisting using StorageLevel.NONE
  - [[SPARK-45419]](https://issues.apache.org/jira/browse/SPARK-45419): Avoid reusing rocksdb sst files in a dfferent rocksdb instance by removing file version map entry of larger versions
  - [[SPARK-45495]](https://issues.apache.org/jira/browse/SPARK-45495): Support stage level task resource profile for k8s cluster when dynamic allocation disabled
  - [[SPARK-45538]](https://issues.apache.org/jira/browse/SPARK-45538): pyspark connect overwrite_partitions bug
  - [[SPARK-45770]](https://issues.apache.org/jira/browse/SPARK-45770): Fix column resolution in DataFrame.drop
  - [[SPARK-45882]](https://issues.apache.org/jira/browse/SPARK-45882): BroadcastHashJoinExec propagate partitioning should respect CoalescedHashPartitioning
  - [[SPARK-45974]](https://issues.apache.org/jira/browse/SPARK-45974): Add scan.filterAttributes non-empty judgment for RowLevelOperationRuntimeGroupFiltering
  - [[SPARK-46170]](https://issues.apache.org/jira/browse/SPARK-46170): Support inject adaptive query post planner strategy rules in SparkSessionExtensions
  - [[SPARK-46380]](https://issues.apache.org/jira/browse/SPARK-46380): Replacing current time prior to inline table eval
  - [[SPARK-46600]](https://issues.apache.org/jira/browse/SPARK-46600): Move shared code between SqlConf and SqlApiConf to another object
  - [[SPARK-46610]](https://issues.apache.org/jira/browse/SPARK-46610): Create table should throw exception when no value for a key in options
  - [[SPARK-45189]](https://issues.apache.org/jira/browse/SPARK-45189): Creating UnresolvedRelation from TableIdentifier should include the catalog field
  - [[SPARK-46182]](https://issues.apache.org/jira/browse/SPARK-46182): Shuffle data lost on decommissioned executor caused by race condition between lastTaskRunningTime and lastShuffleMigrationTime
  - [[SPARK-46547]](https://issues.apache.org/jira/browse/SPARK-46547): Fix deadlock issue between maintenance thread and streaming agg physical operators
  - [[SPARK-46628]](https://issues.apache.org/jira/browse/SPARK-46628): Use SPDX short identifier in `licenses` name

### Dependency Changes

While being a maintenance release we did still upgrade some dependencies in this release they are:

  - [[SPARK-47023]](https://issues.apache.org/jira/browse/SPARK-47023): Upgrade `aircompressor` to 0.26
  - [[SPARK-45883]](https://issues.apache.org/jira/browse/SPARK-47023): Upgrade ORC to 1.9.2

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.5.1).

We would like to acknowledge all community members for contributing patches to this release.
