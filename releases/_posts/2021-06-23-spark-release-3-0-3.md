---
layout: post
title: Spark Release 3.0.3
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.0.3 is a maintenance release containing stability fixes. This release is based on the branch-3.0 maintenance branch of Spark. We strongly recommend all 3.0 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-34421]](https://issues.apache.org/jira/browse/SPARK-34421): Custom functions can't be used in temporary views with CTEs
  - [[SPARK-34545]](https://issues.apache.org/jira/browse/SPARK-34545): PySpark Python UDF return inconsistent results when applying 2 UDFs with different return type to 2 columns together
  - [[SPARK-34719]](https://issues.apache.org/jira/browse/SPARK-34719): Fail if the view query has duplicated column names
  - [[SPARK-35463]](https://issues.apache.org/jira/browse/SPARK-35463): Skip checking checksum on a system doesn't have `shasum`
  - [[SPARK-32924]](https://issues.apache.org/jira/browse/SPARK-32924): Web UI sort on duration is wrong
  - [[SPARK-33482]](https://issues.apache.org/jira/browse/SPARK-33482): V2 Datasources that extend FileScan preclude exchange reuse
  - [[SPARK-33504]](https://issues.apache.org/jira/browse/SPARK-33504): The application log in the Spark history server contains sensitive attributes such as password that should be redated instead of plain text
  - [[SPARK-34424]](https://issues.apache.org/jira/browse/SPARK-34424): HiveOrcHadoopFsRelationSuite fails with seed 610710213676
  - [[SPARK-34556]](https://issues.apache.org/jira/browse/SPARK-34556): Checking duplicate static partition columns doesn't respect case sensitive conf
  - [[SPARK-34596]](https://issues.apache.org/jira/browse/SPARK-34596): NewInstance.doGenCode should not throw malformed class name error
  - [[SPARK-34763]](https://issues.apache.org/jira/browse/SPARK-34763): col(), $"<name>" and df("name") should handle quoted column names properly
  - [[SPARK-34794]](https://issues.apache.org/jira/browse/SPARK-34794): Nested higher-order functions broken in DSL
  - [[SPARK-34798]](https://issues.apache.org/jira/browse/SPARK-34798): Fix incorrect join condition
  - [[SPARK-34876]](https://issues.apache.org/jira/browse/SPARK-34876): Non-nullable aggregates can return NULL in a correlated subquery
  - [[SPARK-34897]](https://issues.apache.org/jira/browse/SPARK-34897): Support reconcile schemas based on index after nested column pruning
  - [[SPARK-34909]](https://issues.apache.org/jira/browse/SPARK-34909): conv() does not convert negative inputs to unsigned correctly
  - [[SPARK-34922]](https://issues.apache.org/jira/browse/SPARK-34922): Use better CBO cost function
  - [[SPARK-34963]](https://issues.apache.org/jira/browse/SPARK-34963): Nested column pruning fails to extract case-insensitive struct field from array
  - [[SPARK-34970]](https://issues.apache.org/jira/browse/SPARK-34970): Redact map-type options in the output of explain()
  - [[SPARK-35080]](https://issues.apache.org/jira/browse/SPARK-35080): Correlated subqueries with equality predicates can return wrong results
  - [[SPARK-35096]](https://issues.apache.org/jira/browse/SPARK-35096): foreachBatch throws ArrayIndexOutOfBoundsException if schema is case Insensitive
  - [[SPARK-35106]](https://issues.apache.org/jira/browse/SPARK-35106): HadoopMapReduceCommitProtocol performs bad rename when dynamic partition overwrite is used
  - [[SPARK-35227]](https://issues.apache.org/jira/browse/SPARK-35227): Replace Bintray with the new repository service for the spark-packages resolver in SparkSubmit
  - [[SPARK-35296]](https://issues.apache.org/jira/browse/SPARK-35296): Dataset.observe fails with an assertion
  - [[SPARK-35482]](https://issues.apache.org/jira/browse/SPARK-35482): case sensitive block manager port key should be used in BasicExecutorFeatureStep
  - [[SPARK-35493]](https://issues.apache.org/jira/browse/SPARK-35493): spark.blockManager.port does not work for driver pod
  - [[SPARK-35659]](https://issues.apache.org/jira/browse/SPARK-35659): Avoid write null to StateStore
  - [[SPARK-35673]](https://issues.apache.org/jira/browse/SPARK-35673): Spark fails on unrecognized hint in subquery
  - [[SPARK-35679]](https://issues.apache.org/jira/browse/SPARK-35679): Overflow on converting valid Timestamp to Microseconds
  - [[SPARK-34697]](https://issues.apache.org/jira/browse/SPARK-34697): Allow DESCRIBE FUNCTION and SHOW FUNCTIONS explain about || (string concatenation operator)
  - [[SPARK-34772]](https://issues.apache.org/jira/browse/SPARK-34772): RebaseDateTime loadRebaseRecords should use Spark classloader instead of context
  - [[SPARK-35127]](https://issues.apache.org/jira/browse/SPARK-35127): When we switch between different stage-detail pages, the entry item in the newly-opened page may be blank
  - [[SPARK-35168]](https://issues.apache.org/jira/browse/SPARK-35168): mapred.reduce.tasks should be shuffle.partitions not adaptive.coalescePartitions.initialPartitionNum
  - [[SPARK-35566]](https://issues.apache.org/jira/browse/SPARK-35566): Fix number of output rows for StateStoreRestoreExec
  - [[SPARK-35714]](https://issues.apache.org/jira/browse/SPARK-35714): Bug fix for deadlock during the executor shutdown
  - [[SPARK-34534]](https://issues.apache.org/jira/browse/SPARK-34534): New protocol FetchShuffleBlocks in OneForOneBlockFetcher lead to data loss or correctness
  - [[SPARK-34939]](https://issues.apache.org/jira/browse/SPARK-34939): Throw fetch failure exception when unable to deserialize broadcasted map statuses

### Dependency Changes

While being a maintence release we did still upgrade some dependencies in this release they are:
  - [[SPARK-35210]](https://issues.apache.org/jira/browse/SPARK-35210): Upgrade Jetty to 9.4.40 to fix ERR_CONNECTION_RESET issue

### Known issues
  - [[SPARK-34529]](https://issues.apache.org/jira/browse/SPARK-34529): spark.read.csv is throwing exception ,"lineSep' can contain only 1 character" when parsing windows line feed (CR LF)

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.0.3).

We would like to acknowledge all community members for contributing patches to this release.
