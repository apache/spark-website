---
layout: post
title: Spark Release 3.2.3
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.2.3 is a maintenance release containing stability fixes. This release is based on the branch-3.2 maintenance branch of Spark. We strongly recommend all 3.2 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-38697]](https://issues.apache.org/jira/browse/SPARK-38697): Extend SparkSessionExtensions to inject rules into AQE Optimizer
  - [[SPARK-39200]](https://issues.apache.org/jira/browse/SPARK-39200): Stream is corrupted Exception while fetching the blocks from fallback storage system
  - [[SPARK-8731]](https://issues.apache.org/jira/browse/SPARK-8731): Beeline doesn't work with -e option when started in background
  - [[SPARK-32380]](https://issues.apache.org/jira/browse/SPARK-32380): sparksql cannot access hive table while data in hbase
  - [[SPARK-35542]](https://issues.apache.org/jira/browse/SPARK-35542): Bucketizer created for multiple columns with parameters splitsArray,  inputCols and outputCols can not be loaded after saving it.
  - [[SPARK-39184]](https://issues.apache.org/jira/browse/SPARK-39184): ArrayIndexOutOfBoundsException for some date/time sequences in some time-zones
  - [[SPARK-39647]](https://issues.apache.org/jira/browse/SPARK-39647): Block push fails with java.lang.IllegalArgumentException: Active local dirs list has not been updated by any executor registration even when the NodeManager hasn't been restarted
  - [[SPARK-39775]](https://issues.apache.org/jira/browse/SPARK-39775): Regression due to AVRO-2035
  - [[SPARK-39833]](https://issues.apache.org/jira/browse/SPARK-39833): Filtered parquet data frame count() and show() produce inconsistent results when spark.sql.parquet.filterPushdown is true
  - [[SPARK-39835]](https://issues.apache.org/jira/browse/SPARK-39835): Fix EliminateSorts remove global sort below the local sort
  - [[SPARK-39839]](https://issues.apache.org/jira/browse/SPARK-39839): Handle special case of null variable-length Decimal with non-zero offsetAndSize in UnsafeRow structural integrity check
  - [[SPARK-39847]](https://issues.apache.org/jira/browse/SPARK-39847): Race condition related to interruption of task threads while they are in RocksDBLoader.loadLibrary()
  - [[SPARK-39867]](https://issues.apache.org/jira/browse/SPARK-39867): Global limit should not inherit OrderPreservingUnaryNode
  - [[SPARK-39887]](https://issues.apache.org/jira/browse/SPARK-39887): Expression transform error
  - [[SPARK-39900]](https://issues.apache.org/jira/browse/SPARK-39900): Issue with querying dataframe produced by 'binaryFile' format using 'not' operator
  - [[SPARK-39932]](https://issues.apache.org/jira/browse/SPARK-39932): WindowExec should clear the final partition buffer
  - [[SPARK-39952]](https://issues.apache.org/jira/browse/SPARK-39952): SaveIntoDataSourceCommand should recache result relation
  - [[SPARK-39962]](https://issues.apache.org/jira/browse/SPARK-39962): Global aggregation against pandas aggregate UDF does not take the column order into account
  - [[SPARK-39965]](https://issues.apache.org/jira/browse/SPARK-39965): Skip PVC cleanup when driver doesn't own PVCs
  - [[SPARK-39972]](https://issues.apache.org/jira/browse/SPARK-39972): Revert the test case of SPARK-39962 in branch-3.2 and branch-3.1
  - [[SPARK-40002]](https://issues.apache.org/jira/browse/SPARK-40002): Limit improperly pushed down through window using ntile function
  - [[SPARK-40065]](https://issues.apache.org/jira/browse/SPARK-40065): Executor ConfigMap is not mounted if profile is not default
  - [[SPARK-40079]](https://issues.apache.org/jira/browse/SPARK-40079): Add Imputer inputCols validation for empty input case
  - [[SPARK-40089]](https://issues.apache.org/jira/browse/SPARK-40089): Sorting of at least Decimal(20, 2) fails for some values near the max.
  - [[SPARK-40117]](https://issues.apache.org/jira/browse/SPARK-40117): Convert condition to java in DataFrameWriterV2.overwrite
  - [[SPARK-40121]](https://issues.apache.org/jira/browse/SPARK-40121): Initialize projection used for Python UDF
  - [[SPARK-40124]](https://issues.apache.org/jira/browse/SPARK-40124): Update TPCDS v1.4 q32 for Plan Stability tests
  - [[SPARK-40149]](https://issues.apache.org/jira/browse/SPARK-40149): Star expansion after outer join asymmetrically includes joining key
  - [[SPARK-40169]](https://issues.apache.org/jira/browse/SPARK-40169): Fix the issue with Parquet column index and predicate pushdown in Data source V1
  - [[SPARK-40212]](https://issues.apache.org/jira/browse/SPARK-40212): SparkSQL castPartValue does not properly handle byte & short
  - [[SPARK-40218]](https://issues.apache.org/jira/browse/SPARK-40218): GROUPING SETS should preserve the grouping columns
  - [[SPARK-40270]](https://issues.apache.org/jira/browse/SPARK-40270): Make compute.max_rows as None working in DataFrame.style
  - [[SPARK-40280]](https://issues.apache.org/jira/browse/SPARK-40280): Failure to create parquet predicate push down for ints and longs on some valid files
  - [[SPARK-40315]](https://issues.apache.org/jira/browse/SPARK-40315): Non-deterministic hashCode() calculations for ArrayBasedMapData on equal objects
  - [[SPARK-40407]](https://issues.apache.org/jira/browse/SPARK-40407): Repartition of DataFrame can result in severe data skew in some special case
  - [[SPARK-40459]](https://issues.apache.org/jira/browse/SPARK-40459): recoverDiskStore should not stop by existing recomputed files
  - [[SPARK-40470]](https://issues.apache.org/jira/browse/SPARK-40470): arrays_zip output unexpected alias column names when using GetMapValue and GetArrayStructFields
  - [[SPARK-40493]](https://issues.apache.org/jira/browse/SPARK-40493): Revert "[SPARK-33861][SQL] Simplify conditional in predicate"
  - [[SPARK-40562]](https://issues.apache.org/jira/browse/SPARK-40562): Add spark.sql.legacy.groupingIdWithAppendedUserGroupBy
  - [[SPARK-40583]](https://issues.apache.org/jira/browse/SPARK-40583): Documentation error in "Integration with Cloud Infrastructures"
  - [[SPARK-40588]](https://issues.apache.org/jira/browse/SPARK-40588): Sorting issue with partitioned-writing and AQE turned on
  - [[SPARK-40612]](https://issues.apache.org/jira/browse/SPARK-40612): On Kubernetes for long running app Spark using an invalid principal to renew the delegation token
  - [[SPARK-40636]](https://issues.apache.org/jira/browse/SPARK-40636): Fix wrong remained shuffles log in BlockManagerDecommissioner
  - [[SPARK-40660]](https://issues.apache.org/jira/browse/SPARK-40660): Switch to XORShiftRandom to distribute elements
  - [[SPARK-40829]](https://issues.apache.org/jira/browse/SPARK-40829): STORED AS serde in CREATE TABLE LIKE view does not work
  - [[SPARK-40851]](https://issues.apache.org/jira/browse/SPARK-40851): TimestampFormatter behavior changed when using the latest Java 8/11/17
  - [[SPARK-40869]](https://issues.apache.org/jira/browse/SPARK-40869): KubernetesConf.getResourceNamePrefix creates invalid name prefixes
  - [[SPARK-40874]](https://issues.apache.org/jira/browse/SPARK-40874): Fix broadcasts in Python UDFs when encryption is enabled
  - [[SPARK-40902]](https://issues.apache.org/jira/browse/SPARK-40902): Quick submission of drivers in tests to mesos scheduler results in dropping drivers
  - [[SPARK-40963]](https://issues.apache.org/jira/browse/SPARK-40963): ExtractGenerator sets incorrect nullability in new Project
  - [[SPARK-41035]](https://issues.apache.org/jira/browse/SPARK-41035): Incorrect results or NPE when a literal is reused across distinct aggregations
  - [[SPARK-41091]](https://issues.apache.org/jira/browse/SPARK-41091): Fix Docker release tool for branch-3.2
  - [[SPARK-41188]](https://issues.apache.org/jira/browse/SPARK-41188): Set executorEnv OMP_NUM_THREADS to be spark.task.cpus by default for spark executor JVM processes
  - [[SPARK-38034]](https://issues.apache.org/jira/browse/SPARK-38034): Optimize time complexity and extend applicable cases for TransposeWindow
  - [[SPARK-39831]](https://issues.apache.org/jira/browse/SPARK-39831): R dependencies installation start to fail after devtools_2.4.4 was released
  - [[SPARK-39879]](https://issues.apache.org/jira/browse/SPARK-39879): Reduce local-cluster memory configuration in BroadcastJoinSuite* and HiveSparkSubmitSuite
  - [[SPARK-40022]](https://issues.apache.org/jira/browse/SPARK-40022): YarnClusterSuite should not ABORTED when there is no Python3 environment
  - [[SPARK-40241]](https://issues.apache.org/jira/browse/SPARK-40241): Correct the link of GenericUDTF
  - [[SPARK-40490]](https://issues.apache.org/jira/browse/SPARK-40490): `YarnShuffleIntegrationSuite` no longer verifies `registeredExecFile` reload after SPARK-17321
  - [[SPARK-40574]](https://issues.apache.org/jira/browse/SPARK-40574): Add PURGE to DROP TABLE doc
  - [[SPARK-40172]](https://issues.apache.org/jira/browse/SPARK-40172): Temporarily disable flaky test cases in ImageFileFormatSuite
  - [[SPARK-40461]](https://issues.apache.org/jira/browse/SPARK-40461): Set upperbound for pyzmq 24.0.0 for Python linter
  - [[SPARK-40213]](https://issues.apache.org/jira/browse/SPARK-40213): Incorrect ASCII value for Latin-1 Supplement characters
  - [[SPARK-40292]](https://issues.apache.org/jira/browse/SPARK-40292): arrays_zip output unexpected alias column names
  - [[SPARK-40043]](https://issues.apache.org/jira/browse/SPARK-40043): Document DataStreamWriter.toTable and DataStreamReader.table
  - [[SPARK-40983]](https://issues.apache.org/jira/browse/SPARK-40983): Remove Hadoop requirements for zstd mention in Parquet compression codec

### Dependency Changes

While being a maintence release we did still upgrade some dependencies in this release they are:

  - [[SPARK-40801]](https://issues.apache.org/jira/browse/SPARK-40801): Upgrade Apache Commons Text to 1.10

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.2.3).

We would like to acknowledge all community members for contributing patches to this release.
