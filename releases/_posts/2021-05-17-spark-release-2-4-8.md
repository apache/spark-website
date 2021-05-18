---
layout: post
title: Spark Release 2.4.8
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.4.8 is a maintenance release containing stability, correctness, and security fixes. This release is based on the branch-2.4 maintenance branch of Spark. We strongly recommend all 2.4 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-21492]](https://issues.apache.org/jira/browse/SPARK-21492): Fix memory leak in SortMergeJoin
  - [[SPARK-25271]](https://issues.apache.org/jira/browse/SPARK-25271): Creating parquet table with all the column null throws exception
  - [[SPARK-26625]](https://issues.apache.org/jira/browse/SPARK-26625): spark.redaction.regex should include oauthToken
  - [[SPARK-26645]](https://issues.apache.org/jira/browse/SPARK-26645): CSV infer schema bug infers decimal(9,-1)
  - [[SPARK-27575]](https://issues.apache.org/jira/browse/SPARK-27575): Spark overwrites existing value of spark.yarn.dist.* instead of merging value
  - [[SPARK-27872]](https://issues.apache.org/jira/browse/SPARK-27872): Driver and executors use a different service account breaking pull secrets
  - [[SPARK-29574]](https://issues.apache.org/jira/browse/SPARK-27872): spark with user provided hadoop doesn't work on kubernetes
  - [[SPARK-30201]](https://issues.apache.org/jira/browse/SPARK-30201): HiveOutputWriter standardOI should use ObjectInspectorCopyOption.DEFAULT
  - [[SPARK-32635]](https://issues.apache.org/jira/browse/SPARK-32635): When pyspark.sql.functions.lit() function is used with dataframe cache, it returns wrong result
  - [[SPARK-32708]](https://issues.apache.org/jira/browse/SPARK-32708): Query optimization fails to reuse exchange with DataSourceV2
  - [[SPARK-32715]](https://issues.apache.org/jira/browse/SPARK-32715): Broadcast block pieces may memory leak
  - [[SPARK-32738]](https://issues.apache.org/jira/browse/SPARK-32738): thread safe endpoints may hang due to fatal error
  - [[SPARK-32794]](https://issues.apache.org/jira/browse/SPARK-32794): Rare corner case error in micro-batch engine with some stateful queries + no-data-batches + V1 streaming sources
  - [[SPARK-32815]](https://issues.apache.org/jira/browse/SPARK-32815): Fix LibSVM data source loading error on file paths with glob metacharacters
  - [[SPARK-32836]](https://issues.apache.org/jira/browse/SPARK-32836): Fix DataStreamReaderWriterSuite to check writer options correctly
  - [[SPARK-32872]](https://issues.apache.org/jira/browse/SPARK-32872): BytesToBytesMap at MAX_CAPACITY exceeds growth threshold
  - [[SPARK-32900]](https://issues.apache.org/jira/browse/SPARK-32900): UnsafeExternalSorter.SpillableIterator cannot spill when there are NULLs in the input and radix sorting is used.
  - [[SPARK-32901]](https://issues.apache.org/jira/browse/SPARK-32901): UnsafeExternalSorter may cause a SparkOutOfMemoryError to be thrown while spilling
  - [[SPARK-32908]](https://issues.apache.org/jira/browse/SPARK-32908): percentile_approx() returns incorrect results
  - [[SPARK-32999]](https://issues.apache.org/jira/browse/SPARK-32999): TreeNode.nodeName should not throw malformed class name error
  - [[SPARK-33094]](https://issues.apache.org/jira/browse/SPARK-33094): ORC format does not propagate Hadoop config from DS options to underlying HDFS file system
  - [[SPARK-33101]](https://issues.apache.org/jira/browse/SPARK-33101): LibSVM format does not propagate Hadoop config from DS options to underlying HDFS file system
  - [[SPARK-33131]](https://issues.apache.org/jira/browse/SPARK-33131): Fix grouping sets with having clause can not resolve qualified col name
  - [[SPARK-33136]](https://issues.apache.org/jira/browse/SPARK-33136): Handling nullability for complex types is broken during resolution of V2 write command
  - [[SPARK-33183]](https://issues.apache.org/jira/browse/SPARK-33183): Bug in optimizer rule EliminateSorts
  - [[SPARK-33230]](https://issues.apache.org/jira/browse/SPARK-33230): FileOutputWriter jobs have duplicate JobIDs if launched in same second
  - [[SPARK-33268]](https://issues.apache.org/jira/browse/SPARK-33268): Fix bugs for casting data from/to PythonUserDefinedType
  - [[SPARK-33277]](https://issues.apache.org/jira/browse/SPARK-33277): Python/Pandas UDF right after off-heap vectorized reader could cause executor crash.
  - [[SPARK-33292]](https://issues.apache.org/jira/browse/SPARK-33292): Make Literal ArrayBasedMapData string representation disambiguous
  - [[SPARK-33338]](https://issues.apache.org/jira/browse/SPARK-33338): GROUP BY using literal map should not fail
  - [[SPARK-33339]](https://issues.apache.org/jira/browse/SPARK-33339): Pyspark application will hang due to non Exception
  - [[SPARK-33372]](https://issues.apache.org/jira/browse/SPARK-33372): Fix InSet bucket pruning
  - [[SPARK-33472]](https://issues.apache.org/jira/browse/SPARK-33472): IllegalArgumentException when applying RemoveRedundantSorts before EnsureRequirements
  - [[SPARK-33588]](https://issues.apache.org/jira/browse/SPARK-33588): Partition spec in SHOW TABLE EXTENDED doesn't respect `spark.sql.caseSensitive`
  - [[SPARK-33593]](https://issues.apache.org/jira/browse/SPARK-33593): Vector reader got incorrect data with binary partition value
  - [[SPARK-33726]](https://issues.apache.org/jira/browse/SPARK-33726): Duplicate field names causes wrong answers during aggregation
  - [[SPARK-33733]](https://issues.apache.org/jira/browse/SPARK-33733): PullOutNondeterministic should check and collect deterministic field
  - [[SPARK-33756]](https://issues.apache.org/jira/browse/SPARK-33756): BytesToBytesMap's iterator hasNext method should be idempotent.
  - [[SPARK-34125]](https://issues.apache.org/jira/browse/SPARK-34125): Make EventLoggingListener.codecMap thread-safe
  - [[SPARK-34187]](https://issues.apache.org/jira/browse/SPARK-34187): Use available offset range obtained during polling when checking offset validation
  - [[SPARK-34212]](https://issues.apache.org/jira/browse/SPARK-34212): For parquet table, after changing the precision and scale of decimal type in hive, spark reads incorrect value
  - [[SPARK-34229]](https://issues.apache.org/jira/browse/SPARK-34229): Avro should read decimal values with the file schema
  - [[SPARK-34260]](https://issues.apache.org/jira/browse/SPARK-34260): UnresolvedException when creating temp view twice
  - [[SPARK-34273]](https://issues.apache.org/jira/browse/SPARK-34273): Do not reregister BlockManager when SparkContext is stopped
  - [[SPARK-34318]](https://issues.apache.org/jira/browse/SPARK-34318): Dataset.colRegex should work with column names and qualifiers which contain newlines
  - [[SPARK-34327]](https://issues.apache.org/jira/browse/SPARK-34327): Omit inlining passwords during build process.
  - [[SPARK-34596]](https://issues.apache.org/jira/browse/SPARK-34596): NewInstance.doGenCode should not throw malformed class name error
  - [[SPARK-34607]](https://issues.apache.org/jira/browse/SPARK-34607): NewInstance.resolved should not throw malformed class name error
  - [[SPARK-34724]](https://issues.apache.org/jira/browse/SPARK-34724): Fix Interpreted evaluation by using getClass.getMethod instead of getDeclaredMethod
  - [[SPARK-34726]](https://issues.apache.org/jira/browse/SPARK-34726): Fix collectToPython timeouts
  - [[SPARK-34776]](https://issues.apache.org/jira/browse/SPARK-34776): Catalyst error on on certain struct operation (Couldn't find _gen_alias_)
  - [[SPARK-34811]](https://issues.apache.org/jira/browse/SPARK-34811): Redact fs.s3a.access.key like secret and token
  - [[SPARK-34855]](https://issues.apache.org/jira/browse/SPARK-34855): SparkContext - avoid using local lazy val
  - [[SPARK-34876]](https://issues.apache.org/jira/browse/SPARK-34876): Non-nullable aggregates can return NULL in a correlated subquery
  - [[SPARK-34909]](https://issues.apache.org/jira/browse/SPARK-34909): conv() does not convert negative inputs to unsigned correctly
  - [[SPARK-34939]](https://issues.apache.org/jira/browse/SPARK-34939): Throw fetch failure exception when unable to deserialize broadcasted map statuses
  - [[SPARK-34963]](https://issues.apache.org/jira/browse/SPARK-34963): Nested column pruning fails to extract case-insensitive struct field from array
  - [[SPARK-35080]](https://issues.apache.org/jira/browse/SPARK-35080): Correlated subqueries with equality predicates can return wrong results
  - [[SPARK-35278]](https://issues.apache.org/jira/browse/SPARK-35278): Invoke should find the method with correct number of parameters
  - [[SPARK-35288]](https://issues.apache.org/jira/browse/SPARK-35288): StaticInvoke should find the method without exact argument classes match

### Dependency Changes
  - [[SPARK-30228]](https://issues.apache.org/jira/browse/SPARK-30228): Update zstd-jni to 1.4.4-3
  - [[SPARK-33831]](https://issues.apache.org/jira/browse/SPARK-33831): Update Jetty to 9.4.34
  - [[SPARK-33333]](https://issues.apache.org/jira/browse/SPARK-33333): Upgrade Jetty to 9.4.28.v20200408
  - [[SPARK-33405]](https://issues.apache.org/jira/browse/SPARK-33405): Upgrade commons-compress to 1.20
  - [[SPARK-33725]](https://issues.apache.org/jira/browse/SPARK-33725): Upgrade snappy-java to 1.1.8.2
  - [[SPARK-34449]](https://issues.apache.org/jira/browse/SPARK-34449): Upgrade Jetty to fix CVE-2020-27218
  - [[SPARK-34988]](https://issues.apache.org/jira/browse/SPARK-34988): Upgrade Jetty for CVE-2021-28165

### Known issues

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.4.8).

We would like to acknowledge all community members for contributing patches to this release.

