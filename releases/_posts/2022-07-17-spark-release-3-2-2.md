---
layout: post
title: Spark Release 3.2.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.2.2 is a maintenance release containing stability fixes. This release is based on the branch-3.2 maintenance branch of Spark. We strongly recommend all 3.2 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-37290]](https://issues.apache.org/jira/browse/SPARK-37290): Exponential planning time in case of non-deterministic function
  - [[SPARK-37544]](https://issues.apache.org/jira/browse/SPARK-37544): sequence over dates with month interval is producing incorrect results
  - [[SPARK-37643]](https://issues.apache.org/jira/browse/SPARK-37643): When charVarcharAsString is true, char datatype partition table query incorrect
  - [[SPARK-37670]](https://issues.apache.org/jira/browse/SPARK-37670): Support predicate pushdown and column pruning for de-duped CTEs
  - [[SPARK-37675]](https://issues.apache.org/jira/browse/SPARK-37675): Prevent overwriting of push shuffle merged files once the shuffle is finalized
  - [[SPARK-37793]](https://issues.apache.org/jira/browse/SPARK-37793): Invalid LocalMergedBlockData cause task hang
  - [[SPARK-37865]](https://issues.apache.org/jira/browse/SPARK-37865): Spark should not dedup the groupingExpressions when the first child of Union has duplicate columns
  - [[SPARK-37963]](https://issues.apache.org/jira/browse/SPARK-37963): Need to update Partition URI after renaming table in InMemoryCatalog
  - [[SPARK-37995]](https://issues.apache.org/jira/browse/SPARK-37995): TPCDS 1TB q72 fails when spark.sql.optimizer.dynamicPartitionPruning.reuseBroadcastOnly is false
  - [[SPARK-38018]](https://issues.apache.org/jira/browse/SPARK-38018): Fix ColumnVectorUtils.populate to handle CalendarIntervalType correctly
  - [[SPARK-38019]](https://issues.apache.org/jira/browse/SPARK-38019): ExecutorMonitor.timedOutExecutors should be deterministic
  - [[SPARK-38023]](https://issues.apache.org/jira/browse/SPARK-38023): ExecutorMonitor.onExecutorRemoved should handle ExecutorDecommission as finished
  - [[SPARK-38030]](https://issues.apache.org/jira/browse/SPARK-38030): Query with cast containing non-nullable columns fails with AQE on Spark 3.1.1
  - [[SPARK-38042]](https://issues.apache.org/jira/browse/SPARK-38042): Encoder cannot be found when a tuple component is a type alias for an Array
  - [[SPARK-38056]](https://issues.apache.org/jira/browse/SPARK-38056): Structured streaming not working in history server when using LevelDB
  - [[SPARK-38073]](https://issues.apache.org/jira/browse/SPARK-38073): Update atexit function to avoid issues with late binding
  - [[SPARK-38075]](https://issues.apache.org/jira/browse/SPARK-38075): Hive script transform with order by and limit will return fake rows
  - [[SPARK-38120]](https://issues.apache.org/jira/browse/SPARK-38120): HiveExternalCatalog.listPartitions is failing when partition column name is upper case and dot in partition value
  - [[SPARK-38178]](https://issues.apache.org/jira/browse/SPARK-38178): Correct the logic to measure the memory usage of RocksDB
  - [[SPARK-38180]](https://issues.apache.org/jira/browse/SPARK-38180): Allow safe up-cast expressions in correlated equality predicates
  - [[SPARK-38185]](https://issues.apache.org/jira/browse/SPARK-38185): Fix data incorrect if aggregate function is empty
  - [[SPARK-38204]](https://issues.apache.org/jira/browse/SPARK-38204): All state operators are at a risk of inconsistency between state partitioning and operator partitioning
  - [[SPARK-38221]](https://issues.apache.org/jira/browse/SPARK-38221): Group by a stream of complex expressions fails
  - [[SPARK-38236]](https://issues.apache.org/jira/browse/SPARK-38236): Absolute file paths specified in create/alter table are treated as relative
  - [[SPARK-38271]](https://issues.apache.org/jira/browse/SPARK-38271): PoissonSampler may output more rows than MaxRows
  - [[SPARK-38273]](https://issues.apache.org/jira/browse/SPARK-38273): decodeUnsafeRows's iterators should close underlying input streams
  - [[SPARK-38285]](https://issues.apache.org/jira/browse/SPARK-38285): ClassCastException: GenericArrayData cannot be cast to InternalRow
  - [[SPARK-38286]](https://issues.apache.org/jira/browse/SPARK-38286): Union's maxRows and maxRowsPerPartition may overflow
  - [[SPARK-38304]](https://issues.apache.org/jira/browse/SPARK-38304): Elt() should return null if index is null under ANSI mode
  - [[SPARK-38309]](https://issues.apache.org/jira/browse/SPARK-38309): SHS has incorrect percentiles for shuffle read bytes and shuffle total blocks metrics
  - [[SPARK-38320]](https://issues.apache.org/jira/browse/SPARK-38320): (flat)MapGroupsWithState can timeout groups which just received inputs in the same microbatch
  - [[SPARK-38325]](https://issues.apache.org/jira/browse/SPARK-38325): ANSI mode: avoid potential runtime error in HashJoin.extractKeyExprAt()
  - [[SPARK-38333]](https://issues.apache.org/jira/browse/SPARK-38333): DPP cause DataSourceScanExec java.lang.NullPointerException
  - [[SPARK-38347]](https://issues.apache.org/jira/browse/SPARK-38347): Nullability propagation in transformUpWithNewOutput
  - [[SPARK-38363]](https://issues.apache.org/jira/browse/SPARK-38363): Avoid runtime error in Dataset.summary() when ANSI mode is on
  - [[SPARK-38379]](https://issues.apache.org/jira/browse/SPARK-38379): Fix Kubernetes Client mode when mounting persistent volume with storage class
  - [[SPARK-38407]](https://issues.apache.org/jira/browse/SPARK-38407): ANSI Cast: loosen the limitation of casting non-null complex types
  - [[SPARK-38411]](https://issues.apache.org/jira/browse/SPARK-38411): Use UTF-8 when doMergeApplicationListingInternal reads event logs
  - [[SPARK-38412]](https://issues.apache.org/jira/browse/SPARK-38412): `from` and `to` is swapped in the StateSchemaCompatibilityChecker
  - [[SPARK-38446]](https://issues.apache.org/jira/browse/SPARK-38446): Deadlock between ExecutorClassLoader and FileDownloadCallback caused by Log4j
  - [[SPARK-38528]](https://issues.apache.org/jira/browse/SPARK-38528): NullPointerException when selecting a generator in a Stream of aggregate expressions
  - [[SPARK-38542]](https://issues.apache.org/jira/browse/SPARK-38542): UnsafeHashedRelation should serialize numKeys out
  - [[SPARK-38570]](https://issues.apache.org/jira/browse/SPARK-38570): Incorrect DynamicPartitionPruning caused by Literal
  - [[SPARK-38579]](https://issues.apache.org/jira/browse/SPARK-38579): Requesting Restful API can cause NullPointerException
  - [[SPARK-38587]](https://issues.apache.org/jira/browse/SPARK-38587): Validating new location for rename command should use formatted names
  - [[SPARK-38614]](https://issues.apache.org/jira/browse/SPARK-38614): Don't push down limit through window that's using percent_rank
  - [[SPARK-38631]](https://issues.apache.org/jira/browse/SPARK-38631): Arbitrary shell command injection via Utils.unpack()
  - [[SPARK-38652]](https://issues.apache.org/jira/browse/SPARK-38652): uploadFileUri should preserve file scheme
  - [[SPARK-38655]](https://issues.apache.org/jira/browse/SPARK-38655): OffsetWindowFunctionFrameBase cannot find the offset row whose input is not null
  - [[SPARK-38677]](https://issues.apache.org/jira/browse/SPARK-38677): pyspark hangs in local mode running rdd map operation
  - [[SPARK-38684]](https://issues.apache.org/jira/browse/SPARK-38684): Stream-stream outer join has a possible correctness issue due to weakly read consistent on outer iterators
  - [[SPARK-38787]](https://issues.apache.org/jira/browse/SPARK-38787): Possible correctness issue on stream-stream join when handling edge case
  - [[SPARK-38809]](https://issues.apache.org/jira/browse/SPARK-38809): Implement option to skip null values in symmetric hash impl of stream-stream joins
  - [[SPARK-38868]](https://issues.apache.org/jira/browse/SPARK-38868): `assert_true` fails unconditionnaly after `left_outer` joins
  - [[SPARK-38916]](https://issues.apache.org/jira/browse/SPARK-38916): Tasks not killed caused by race conditions between killTask() and launchTask()
  - [[SPARK-38922]](https://issues.apache.org/jira/browse/SPARK-38922): TaskLocation.apply throw NullPointerException
  - [[SPARK-38931]](https://issues.apache.org/jira/browse/SPARK-38931): RocksDB File manager would not create initial dfs directory with unknown number of keys on 1st empty checkpoint
  - [[SPARK-38936]](https://issues.apache.org/jira/browse/SPARK-38936): Script transform feed thread should have name
  - [[SPARK-38955]](https://issues.apache.org/jira/browse/SPARK-38955): Disable lineSep option in 'from_csv' and 'schema_of_csv'
  - [[SPARK-38977]](https://issues.apache.org/jira/browse/SPARK-38977): Fix schema pruning with correlated subqueries
  - [[SPARK-38990]](https://issues.apache.org/jira/browse/SPARK-38990): date_trunc and trunc both fail with format from column in inline table
  - [[SPARK-38992]](https://issues.apache.org/jira/browse/SPARK-38992): Avoid using bash -c in ShellBasedGroupsMappingProvider
  - [[SPARK-39030]](https://issues.apache.org/jira/browse/SPARK-39030): Rename sum to avoid shading the builtin Python function
  - [[SPARK-39061]](https://issues.apache.org/jira/browse/SPARK-39061): Incorrect results or NPE when using Inline function against an array of dynamically created structs
  - [[SPARK-39083]](https://issues.apache.org/jira/browse/SPARK-39083): Fix FsHistoryProvider race condition between update and clean app data
  - [[SPARK-39084]](https://issues.apache.org/jira/browse/SPARK-39084): df.rdd.isEmpty() results in unexpected executor failure and JVM crash
  - [[SPARK-39104]](https://issues.apache.org/jira/browse/SPARK-39104): Null Pointer Exeption on unpersist call
  - [[SPARK-39107]](https://issues.apache.org/jira/browse/SPARK-39107): Silent change in regexp_replace's handling of empty strings
  - [[SPARK-39174]](https://issues.apache.org/jira/browse/SPARK-39174): Catalogs loading swallows missing classname for ClassNotFoundException
  - [[SPARK-39259]](https://issues.apache.org/jira/browse/SPARK-39259): Timestamps returned by now() and equivalent functions are not consistent in subqueries
  - [[SPARK-39283]](https://issues.apache.org/jira/browse/SPARK-39283): Spark tasks stuck forever due to deadlock between TaskMemoryManager and UnsafeExternalSorter
  - [[SPARK-39293]](https://issues.apache.org/jira/browse/SPARK-39293): The accumulator of ArrayAggregate should copy the intermediate result if string, struct, array, or map
  - [[SPARK-39340]](https://issues.apache.org/jira/browse/SPARK-39340): DS v2 agg pushdown should allow dots in the name of top-level columns
  - [[SPARK-39376]](https://issues.apache.org/jira/browse/SPARK-39376): Do not output duplicated columns in star expansion of subquery alias of NATURAL/USING JOIN
  - [[SPARK-39393]](https://issues.apache.org/jira/browse/SPARK-39393): Parquet data source only supports push-down predicate filters for non-repeated primitive types
  - [[SPARK-39419]](https://issues.apache.org/jira/browse/SPARK-39419): When the comparator of ArraySort returns null, it should fail.
  - [[SPARK-39422]](https://issues.apache.org/jira/browse/SPARK-39422): SHOW CREATE TABLE should suggest 'AS SERDE' for Hive tables with unsupported serde configurations
  - [[SPARK-39447]](https://issues.apache.org/jira/browse/SPARK-39447): Only non-broadcast query stage can propagate empty relation
  - [[SPARK-39476]](https://issues.apache.org/jira/browse/SPARK-39476): Disable Unwrap cast optimize when casting from Long to Float/ Double or from Integer to Float
  - [[SPARK-39496]](https://issues.apache.org/jira/browse/SPARK-39496): Inline eval path cannot handle null structs
  - [[SPARK-39505]](https://issues.apache.org/jira/browse/SPARK-39505): Escape log content rendered in UI
  - [[SPARK-39543]](https://issues.apache.org/jira/browse/SPARK-39543): The option of DataFrameWriterV2 should be passed to storage properties if fallback to v1
  - [[SPARK-39548]](https://issues.apache.org/jira/browse/SPARK-39548): CreateView Command with a window clause query hit a wrong window definition not found issue
  - [[SPARK-39570]](https://issues.apache.org/jira/browse/SPARK-39570): inline table should allow expressions with alias
  - [[SPARK-39575]](https://issues.apache.org/jira/browse/SPARK-39575): ByteBuffer forget to rewind after get in AvroDeserializer
  - [[SPARK-39650]](https://issues.apache.org/jira/browse/SPARK-39650): Streaming Deduplication should not check the schema of "value"
  - [[SPARK-39672]](https://issues.apache.org/jira/browse/SPARK-39672): NotExists subquery failed with conflicting attributes
  - [[SPARK-39758]](https://issues.apache.org/jira/browse/SPARK-39758): NPE on invalid patterns from the regexp functions

### Dependency Changes

While being a maintence release we did still upgrade some dependencies in this release they are:

  - [[SPARK-36808]](https://issues.apache.org/jira/browse/SPARK-36808): Upgrade Kafka to 2.8.1
  - [[SPARK-37934]](https://issues.apache.org/jira/browse/SPARK-37934): Upgrade Jetty version to 9.4.44
  - [[SPARK-38563]](https://issues.apache.org/jira/browse/SPARK-38563): Upgrade Py4J to 0.10.9.5
  - [[SPARK-37977]](https://issues.apache.org/jira/browse/SPARK-37977): Upgrade ORC to 1.6.13
  - [[SPARK-38905]](https://issues.apache.org/jira/browse/SPARK-38905): Upgrade ORC to 1.6.14
  - [[SPARK-39183]](https://issues.apache.org/jira/browse/SPARK-39183): Upgrade Apache Xerces Java to 2.12.2

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.2.2).

We would like to acknowledge all community members for contributing patches to this release.
