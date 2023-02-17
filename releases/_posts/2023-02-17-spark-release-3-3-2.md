---
layout: post
title: Spark Release 3.3.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.3.2 is a maintenance release containing stability fixes. This release is based on the branch-3.3 maintenance branch of Spark. We strongly recommend all 3.3 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-38697]](https://issues.apache.org/jira/browse/SPARK-38697): Extend SparkSessionExtensions to inject rules into AQE Optimizer
  - [[SPARK-40872]](https://issues.apache.org/jira/browse/SPARK-40872): Fallback to original shuffle block when a push-merged shuffle chunk is zero-size
  - [[SPARK-41388]](https://issues.apache.org/jira/browse/SPARK-41388): getReusablePVCs should ignore recently created PVCs in the previous batch
  - [[SPARK-42071]](https://issues.apache.org/jira/browse/SPARK-42071): Register scala.math.Ordering$Reverse to KyroSerializer
  - [[SPARK-32380]](https://issues.apache.org/jira/browse/SPARK-32380): sparksql cannot access hive table while data in hbase
  - [[SPARK-39404]](https://issues.apache.org/jira/browse/SPARK-39404): Unable to query _metadata in streaming if getBatch returns multiple logical nodes in the DataFrame
  - [[SPARK-40493]](https://issues.apache.org/jira/browse/SPARK-40493): Revert "[SPARK-33861][SQL] Simplify conditional in predicate"
  - [[SPARK-40588]](https://issues.apache.org/jira/browse/SPARK-40588): Sorting issue with partitioned-writing and AQE turned on
  - [[SPARK-40817]](https://issues.apache.org/jira/browse/SPARK-40817): Remote spark.jars URIs ignored for Spark on Kubernetes in cluster mode
  - [[SPARK-40819]](https://issues.apache.org/jira/browse/SPARK-40819): Parquet INT64 (TIMESTAMP(NANOS,true)) now throwing Illegal Parquet type instead of automatically converting to LongType
  - [[SPARK-40829]](https://issues.apache.org/jira/browse/SPARK-40829): STORED AS serde in CREATE TABLE LIKE view does not work
  - [[SPARK-40851]](https://issues.apache.org/jira/browse/SPARK-40851): TimestampFormatter behavior changed when using the latest Java 8/11/17
  - [[SPARK-40869]](https://issues.apache.org/jira/browse/SPARK-40869): KubernetesConf.getResourceNamePrefix creates invalid name prefixes
  - [[SPARK-40874]](https://issues.apache.org/jira/browse/SPARK-40874): Fix broadcasts in Python UDFs when encryption is enabled
  - [[SPARK-40902]](https://issues.apache.org/jira/browse/SPARK-40902): Quick submission of drivers in tests to mesos scheduler results in dropping drivers
  - [[SPARK-40918]](https://issues.apache.org/jira/browse/SPARK-40918): Mismatch between ParquetFileFormat and FileSourceScanExec in # columns for WSCG.isTooManyFields when using _metadata
  - [[SPARK-40924]](https://issues.apache.org/jira/browse/SPARK-40924): Unhex function works incorrectly when input has uneven number of symbols
  - [[SPARK-40932]](https://issues.apache.org/jira/browse/SPARK-40932): Barrier: messages for allGather will be overridden by the following barrier APIs
  - [[SPARK-40963]](https://issues.apache.org/jira/browse/SPARK-40963): ExtractGenerator sets incorrect nullability in new Project
  - [[SPARK-40987]](https://issues.apache.org/jira/browse/SPARK-40987): Avoid creating a directory when deleting a block, causing DAGScheduler to not work
  - [[SPARK-41035]](https://issues.apache.org/jira/browse/SPARK-41035): Incorrect results or NPE when a literal is reused across distinct aggregations
  - [[SPARK-41118]](https://issues.apache.org/jira/browse/SPARK-41118): to_number/try_to_number throws NullPointerException when format is null
  - [[SPARK-41144]](https://issues.apache.org/jira/browse/SPARK-41144): UnresolvedHint should not cause query failure
  - [[SPARK-41151]](https://issues.apache.org/jira/browse/SPARK-41151): Keep built-in file _metadata column nullable value consistent
  - [[SPARK-41154]](https://issues.apache.org/jira/browse/SPARK-41154): Incorrect relation caching for queries with time travel spec
  - [[SPARK-41162]](https://issues.apache.org/jira/browse/SPARK-41162): Anti-join must not be pushed below aggregation with ambiguous predicates
  - [[SPARK-41187]](https://issues.apache.org/jira/browse/SPARK-41187): [Core] LiveExecutor MemoryLeak in AppStatusListener when ExecutorLost happen
  - [[SPARK-41188]](https://issues.apache.org/jira/browse/SPARK-41188): Set executorEnv OMP_NUM_THREADS to be spark.task.cpus by default for spark executor JVM processes
  - [[SPARK-41254]](https://issues.apache.org/jira/browse/SPARK-41254): YarnAllocator.rpIdToYarnResource map is not properly updated
  - [[SPARK-41327]](https://issues.apache.org/jira/browse/SPARK-41327): Fix SparkStatusTracker.getExecutorInfos by switch On/OffHeapStorageMemory info
  - [[SPARK-41339]](https://issues.apache.org/jira/browse/SPARK-41339): RocksDB state store WriteBatch doesn't clean up native memory
  - [[SPARK-41350]](https://issues.apache.org/jira/browse/SPARK-41350): allow simple name access of using join hidden columns after subquery alias
  - [[SPARK-41365]](https://issues.apache.org/jira/browse/SPARK-41365): Stages UI page fails to load for proxy in some yarn versions
  - [[SPARK-41375]](https://issues.apache.org/jira/browse/SPARK-41375): Avoid empty latest KafkaSourceOffset:
  - [[SPARK-41376]](https://issues.apache.org/jira/browse/SPARK-41376): Executor netty direct memory check should respect spark.shuffle.io.preferDirectBufs
  - [[SPARK-41379]](https://issues.apache.org/jira/browse/SPARK-41379): Inconsistency of spark session in DataFrame in user function for foreachBatch sink in PySpark
  - [[SPARK-41385]](https://issues.apache.org/jira/browse/SPARK-41385): Replace deprecated `.newInstance()` in K8s module
  - [[SPARK-41395]](https://issues.apache.org/jira/browse/SPARK-41395): InterpretedMutableProjection can corrupt unsafe buffer when used with decimal data
  - [[SPARK-41448]](https://issues.apache.org/jira/browse/SPARK-41448): Make consistent MR job IDs in FileBatchWriter and FileFormatWriter
  - [[SPARK-41458]](https://issues.apache.org/jira/browse/SPARK-41458): Correctly transform the SPI services for Yarn Shuffle Service
  - [[SPARK-41468]](https://issues.apache.org/jira/browse/SPARK-41468): Fix PlanExpression handling in EquivalentExpressions
  - [[SPARK-41522]](https://issues.apache.org/jira/browse/SPARK-41522): GA dependencies test faild
  - [[SPARK-41535]](https://issues.apache.org/jira/browse/SPARK-41535): InterpretedUnsafeProjection and InterpretedMutableProjection can corrupt unsafe buffer when used with calendar interval data
  - [[SPARK-41554]](https://issues.apache.org/jira/browse/SPARK-41554): Decimal.changePrecision produces ArrayIndexOutOfBoundsException
  - [[SPARK-41668]](https://issues.apache.org/jira/browse/SPARK-41668): DECODE function returns wrong results when passed NULL
  - [[SPARK-41732]](https://issues.apache.org/jira/browse/SPARK-41732): Session window: analysis rule "SessionWindowing" does not apply tree-pattern based pruning
  - [[SPARK-41989]](https://issues.apache.org/jira/browse/SPARK-41989): PYARROW_IGNORE_TIMEZONE warning can break application logging setup
  - [[SPARK-42084]](https://issues.apache.org/jira/browse/SPARK-42084): Avoid leaking the qualified-access-only restriction
  - [[SPARK-42090]](https://issues.apache.org/jira/browse/SPARK-42090): Introduce sasl retry count in RetryingBlockTransferor
  - [[SPARK-42134]](https://issues.apache.org/jira/browse/SPARK-42134): Fix getPartitionFiltersAndDataFilters() to handle filters without referenced attributes
  - [[SPARK-42157]](https://issues.apache.org/jira/browse/SPARK-42157): `spark.scheduler.mode=FAIR` should provide FAIR scheduler
  - [[SPARK-42176]](https://issues.apache.org/jira/browse/SPARK-42176): Cast boolean to timestamp fails with ClassCastException
  - [[SPARK-42188]](https://issues.apache.org/jira/browse/SPARK-42188): Force SBT protobuf version to match Maven on branch 3.2 and 3.3
  - [[SPARK-42201]](https://issues.apache.org/jira/browse/SPARK-42201): `build/sbt` should allow SBT_OPTS to override JVM memory setting
  - [[SPARK-42222]](https://issues.apache.org/jira/browse/SPARK-42222): Spark 3.3 Backport: SPARK-41344 Reading V2 datasource masks underlying error
  - [[SPARK-42259]](https://issues.apache.org/jira/browse/SPARK-42259): ResolveGroupingAnalytics should take care of Python UDAF
  - [[SPARK-42344]](https://issues.apache.org/jira/browse/SPARK-42344): The default size of the CONFIG_MAP_MAXSIZE should not be greater than 1048576
  - [[SPARK-42346]](https://issues.apache.org/jira/browse/SPARK-42346): distinct(count colname) with UNION ALL causes query analyzer bug
  - [[SPARK-38277]](https://issues.apache.org/jira/browse/SPARK-38277): Clear write batch after RocksDB state store's commit
  - [[SPARK-40913]](https://issues.apache.org/jira/browse/SPARK-40913): Pin `pytest==7.1.3`
  - [[SPARK-41089]](https://issues.apache.org/jira/browse/SPARK-41089): Relocate Netty native arm64 libs
  - [[SPARK-41360]](https://issues.apache.org/jira/browse/SPARK-41360): Avoid BlockManager re-registration if the executor has been lost
  - [[SPARK-41476]](https://issues.apache.org/jira/browse/SPARK-41476): Prevent `README.md` from triggering CIs
  - [[SPARK-41541]](https://issues.apache.org/jira/browse/SPARK-41541): Fix wrong child call in SQLShuffleWriteMetricsReporter.decRecordsWritten()
  - [[SPARK-41962]](https://issues.apache.org/jira/browse/SPARK-41962): Update the import order of scala package in class SpecificParquetRecordReaderBase
  - [[SPARK-42230]](https://issues.apache.org/jira/browse/SPARK-42230): Improve `lint` job by skipping PySpark and SparkR docs if unchanged
  - [[SPARK-41863]](https://issues.apache.org/jira/browse/SPARK-41863): Skip `flake8` tests if the command is not available
  - [[SPARK-41864]](https://issues.apache.org/jira/browse/SPARK-41864): Fix mypy linter errors
  - [[SPARK-42110]](https://issues.apache.org/jira/browse/SPARK-42110): Reduce the number of repetition in ParquetDeltaEncodingSuite.`random data test`
  - [[SPARK-41415]](https://issues.apache.org/jira/browse/SPARK-41415): SASL Request Retries
  - [[SPARK-41538]](https://issues.apache.org/jira/browse/SPARK-41538): Metadata column should be appended at the end of project list
  - [[SPARK-40983]](https://issues.apache.org/jira/browse/SPARK-40983): Remove Hadoop requirements for zstd mention in Parquet compression codec
  - [[SPARK-41185]](https://issues.apache.org/jira/browse/SPARK-41185): Remove ARM limitation for YuniKorn from docs

  - [[SPARK-35542]](https://issues.apache.org/jira/browse/SPARK-35542): Fix: Bucketizer created for multiple columns with parameters splitsArray, inputCols and outputCols can not be loaded after saving it
  - [[SPARK-36057]](https://issues.apache.org/jira/browse/SPARK-36057): SPIP: Support Customized Kubernetes Schedulers
  - [[SPARK-38034]](https://issues.apache.org/jira/browse/SPARK-38034): Optimize TransposeWindow rule
  - [[SPARK-38404]](https://issues.apache.org/jira/browse/SPARK-38404): Improve CTE resolution when a nested CTE references an outer CTE
  - [[SPARK-38614]](https://issues.apache.org/jira/browse/SPARK-38614): Don't push down limit through window that's using percent_rank
  - [[SPARK-38717]](https://issues.apache.org/jira/browse/SPARK-38717): Handle Hive's bucket spec case preserving behaviour
  - [[SPARK-38796]](https://issues.apache.org/jira/browse/SPARK-38796): Update to_number and try_to_number functions to allow PR with positive numbers
  - [[SPARK-39184]](https://issues.apache.org/jira/browse/SPARK-39184): Handle undersized result array in date and timestamp sequences
  - [[SPARK-39200]](https://issues.apache.org/jira/browse/SPARK-39200): Make Fallback Storage readFully on content
  - [[SPARK-39340]](https://issues.apache.org/jira/browse/SPARK-39340): DS v2 agg pushdown should allow dots in the name of top-level columns
  - [[SPARK-39355]](https://issues.apache.org/jira/browse/SPARK-39355): Single column uses quoted to construct UnresolvedAttribute
  - [[SPARK-39419]](https://issues.apache.org/jira/browse/SPARK-39419): Fix ArraySort to throw an exception when the comparator returns null
  - [[SPARK-39447]](https://issues.apache.org/jira/browse/SPARK-39447): Avoid AssertionError in AdaptiveSparkPlanExec.doExecuteBroadcast
  - [[SPARK-39476]](https://issues.apache.org/jira/browse/SPARK-39476): Disable Unwrap cast optimize when casting from Long to Float/ Double or from Integer to Float
  - [[SPARK-39548]](https://issues.apache.org/jira/browse/SPARK-39548): CreateView Command with a window clause query hit a wrong window definition not found issue
  - [[SPARK-39570]](https://issues.apache.org/jira/browse/SPARK-39570): Inline table should allow expressions with alias
  - [[SPARK-39614]](https://issues.apache.org/jira/browse/SPARK-39614): K8s pod name follows DNS Subdomain Names rule
  - [[SPARK-39633]](https://issues.apache.org/jira/browse/SPARK-39633): Support timestamp in seconds for TimeTravel using Dataframe options
  - [[SPARK-39647]](https://issues.apache.org/jira/browse/SPARK-39647): Register the executor with ESS before registering the BlockManager
  - [[SPARK-39650]](https://issues.apache.org/jira/browse/SPARK-39650): Fix incorrect value schema in streaming deduplication with backward compatibility
  - [[SPARK-39656]](https://issues.apache.org/jira/browse/SPARK-39656): Fix wrong namespace in DescribeNamespaceExec
  - [[SPARK-39657]](https://issues.apache.org/jira/browse/SPARK-39657): YARN AM client should call the non-static setTokensConf method
  - [[SPARK-39672]](https://issues.apache.org/jira/browse/SPARK-39672): Fix removing project before filter with correlated subquery
  - [[SPARK-39758]](https://issues.apache.org/jira/browse/SPARK-39758): Fix NPE from the regexp functions on invalid patterns
  - [[SPARK-39775]](https://issues.apache.org/jira/browse/SPARK-39775): Disable validate default values when parsing Avro schemas
  - [[SPARK-39806]](https://issues.apache.org/jira/browse/SPARK-39806): Accessing _metadata on partitioned table can crash a query
  - [[SPARK-39833]](https://issues.apache.org/jira/browse/SPARK-39833): Disable Parquet column index in DSv1 to fix a correctness issue in the case of overlapping partition and data columns
  - [[SPARK-39835]](https://issues.apache.org/jira/browse/SPARK-39835): Fix EliminateSorts remove global sort below the local sort
  - [[SPARK-39839]](https://issues.apache.org/jira/browse/SPARK-39839): Handle special case of null variable-length Decimal with non-zero offsetAndSize in UnsafeRow structural integrity check
  - [[SPARK-39847]](https://issues.apache.org/jira/browse/SPARK-39847): Fix race condition in RocksDBLoader.loadLibrary() if caller thread is interrupted
  - [[SPARK-39857]](https://issues.apache.org/jira/browse/SPARK-39857): V2ExpressionBuilder uses the wrong LiteralValue data type for In predicate
  - [[SPARK-39867]](https://issues.apache.org/jira/browse/SPARK-39867): Global limit should not inherit OrderPreservingUnaryNode
  - [[SPARK-39887]](https://issues.apache.org/jira/browse/SPARK-39887): RemoveRedundantAliases should keep aliases that make the output of projection nodes unique
  - [[SPARK-39896]](https://issues.apache.org/jira/browse/SPARK-39896): UnwrapCastInBinaryComparison should work when the literal of In/InSet downcast failed
  - [[SPARK-39900]](https://issues.apache.org/jira/browse/SPARK-39900): Address partial or negated condition in binary format's predicate pushdown
  - [[SPARK-39911]](https://issues.apache.org/jira/browse/SPARK-39911): Optimize global Sort to RepartitionByExpression
  - [[SPARK-39915]](https://issues.apache.org/jira/browse/SPARK-39915): Dataset.repartition(N) may not create N partitions Non-AQE part
  - [[SPARK-39915]](https://issues.apache.org/jira/browse/SPARK-39915): Ensure the output partitioning is user-specified in AQE
  - [[SPARK-39932]](https://issues.apache.org/jira/browse/SPARK-39932): WindowExec should clear the final partition buffer
  - [[SPARK-39951]](https://issues.apache.org/jira/browse/SPARK-39951): Update Parquet V2 columnar check for nested fields
  - [[SPARK-39952]](https://issues.apache.org/jira/browse/SPARK-39952): SaveIntoDataSourceCommand should recache result relation
  - [[SPARK-39962]](https://issues.apache.org/jira/browse/SPARK-39962): Apply projection when group attributes are empty
  - [[SPARK-39976]](https://issues.apache.org/jira/browse/SPARK-39976): ArrayIntersect should handle null in left expression correctly
  - [[SPARK-40002]](https://issues.apache.org/jira/browse/SPARK-40002): Don't push down limit through window using ntile
  - [[SPARK-40065]](https://issues.apache.org/jira/browse/SPARK-40065): Mount ConfigMap on executors with non-default profile as well
  - [[SPARK-40079]](https://issues.apache.org/jira/browse/SPARK-40079): Add Imputer inputCols validation for empty input case
  - [[SPARK-40089]](https://issues.apache.org/jira/browse/SPARK-40089): Fix sorting for some Decimal types
  - [[SPARK-40117]](https://issues.apache.org/jira/browse/SPARK-40117): Convert condition to java in DataFrameWriterV2.overwrite
  - [[SPARK-40121]](https://issues.apache.org/jira/browse/SPARK-40121): Initialize projection used for Python UDF
  - [[SPARK-40132]](https://issues.apache.org/jira/browse/SPARK-40132): Restore rawPredictionCol to MultilayerPerceptronClassifier.setParams
  - [[SPARK-40149]](https://issues.apache.org/jira/browse/SPARK-40149): Propagate metadata columns through Project
  - [[SPARK-40152]](https://issues.apache.org/jira/browse/SPARK-40152): Fix split_part codegen compilation issue
  - [[SPARK-40169]](https://issues.apache.org/jira/browse/SPARK-40169): Don't pushdown Parquet filters with no reference to data schema
  - [[SPARK-40212]](https://issues.apache.org/jira/browse/SPARK-40212): SparkSQL castPartValue does not properly handle byte, short, or float
  - [[SPARK-40213]](https://issues.apache.org/jira/browse/SPARK-40213): Support ASCII value conversion for Latin-1 characters
  - [[SPARK-40218]](https://issues.apache.org/jira/browse/SPARK-40218): GROUPING SETS should preserve the grouping columns
  - [[SPARK-40228]](https://issues.apache.org/jira/browse/SPARK-40228): Do not simplify multiLike if child is not a cheap expression
  - [[SPARK-40247]](https://issues.apache.org/jira/browse/SPARK-40247): Fix BitSet equality check
  - [[SPARK-40280]](https://issues.apache.org/jira/browse/SPARK-40280): Add support for parquet push down for annotated int and long
  - [[SPARK-40297]](https://issues.apache.org/jira/browse/SPARK-40297): CTE outer reference nested in CTE main body cannot be resolved
  - [[SPARK-40362]](https://issues.apache.org/jira/browse/SPARK-40362): Fix BinaryComparison canonicalization
  - [[SPARK-40380]](https://issues.apache.org/jira/browse/SPARK-40380): Fix constant-folding of InvokeLike to avoid non-serializable literal embedded in the plan
  - [[SPARK-40385]](https://issues.apache.org/jira/browse/SPARK-40385): Fix interpreted path for companion object constructor
  - [[SPARK-40389]](https://issues.apache.org/jira/browse/SPARK-40389): Decimals can't upcast as integral types if the cast can overflow
  - [[SPARK-40468]](https://issues.apache.org/jira/browse/SPARK-40468): Fix column pruning in CSV when _corrupt_record is selected
  - [[SPARK-40508]](https://issues.apache.org/jira/browse/SPARK-40508): Treat unknown partitioning as UnknownPartitioning
  - [[SPARK-40535]](https://issues.apache.org/jira/browse/SPARK-40535): Fix bug the buffer of AggregatingAccumulator will not be created if the input rows is empty
  - [[SPARK-40562]](https://issues.apache.org/jira/browse/SPARK-40562): Add `spark.sql.legacy.groupingIdWithAppendedUserGroupBy`
  - [[SPARK-40612]](https://issues.apache.org/jira/browse/SPARK-40612): Fixing the principal used for delegation token renewal on non-YARN resource managers
  - [[SPARK-40660]](https://issues.apache.org/jira/browse/SPARK-40660): Switch to XORShiftRandom to distribute elements
  - [[SPARK-40703]](https://issues.apache.org/jira/browse/SPARK-40703): Introduce shuffle on SinglePartition to improve parallelism

### Dependency Changes

While being a maintenance release we did still upgrade some dependencies in this release they are:

  - [[SPARK-40801]](https://issues.apache.org/jira/browse/SPARK-40801): Upgrade Apache Commons Text to 1.10
  - [[SPARK-40886]](https://issues.apache.org/jira/browse/SPARK-40886): Bump Jackson Databind 2.13.4.2
  - [[SPARK-41030]](https://issues.apache.org/jira/browse/SPARK-41030): Upgrade Apache Ivy to 2.5.1
  - [[SPARK-41031]](https://issues.apache.org/jira/browse/SPARK-41031): Upgrade `org.tukaani:xz` to 1.9
  - [[SPARK-41202]](https://issues.apache.org/jira/browse/SPARK-41202): Update ORC to 1.7.7
  - [[SPARK-41686]](https://issues.apache.org/jira/browse/SPARK-41686): Upgrade Apache Ivy to 2.5.1
  - [[SPARK-42179]](https://issues.apache.org/jira/browse/SPARK-42179): Upgrade ORC to 1.7.8


You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.3.2).

We would like to acknowledge all community members for contributing patches to this release.
