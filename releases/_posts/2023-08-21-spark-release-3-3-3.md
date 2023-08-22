---
layout: post
title: Spark Release 3.3.3
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.3.3 is a maintenance release containing stability fixes. This release is based on the branch-3.3 maintenance branch of Spark. We strongly recommend all 3.3 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-37829]](https://issues.apache.org/jira/browse/SPARK-37829): An outer-join using joinWith on DataFrames returns Rows with null fields instead of null values
  - [[SPARK-39399]](https://issues.apache.org/jira/browse/SPARK-39399): proxy-user not working for Spark on k8s in cluster deploy mode
  - [[SPARK-39696]](https://issues.apache.org/jira/browse/SPARK-39696): Uncaught exception in thread executor-heartbeater java.util.ConcurrentModificationException: mutation occurred during iteration
  - [[SPARK-41741]](https://issues.apache.org/jira/browse/SPARK-41741): ParquetFilters StringStartsWith push down matching string do not use UTF-8
  - [[SPARK-41952]](https://issues.apache.org/jira/browse/SPARK-41952): Fix Parquet zstd off-heap memory leak as a workaround for PARQUET-2160
  - [[SPARK-42286]](https://issues.apache.org/jira/browse/SPARK-42286): Fix internal error for valid CASE WHEN expression with CAST when inserting into a table
  - [[SPARK-42473]](https://issues.apache.org/jira/browse/SPARK-42473): An explicit cast will be needed when INSERT OVERWRITE SELECT UNION ALL
  - [[SPARK-42937]](https://issues.apache.org/jira/browse/SPARK-42937): Join with subquery in condition can fail with wholestage codegen and adaptive execution disabled
  - [[SPARK-43050]](https://issues.apache.org/jira/browse/SPARK-43050): Fix construct aggregate expressions by replacing grouping functions
  - [[SPARK-43113]](https://issues.apache.org/jira/browse/SPARK-43113): Codegen error when full outer join's bound condition has multiple references to the same stream-side column
  - [[SPARK-43240]](https://issues.apache.org/jira/browse/SPARK-43240): df.describe() method may- return wrong result if the last RDD is RDD[UnsafeRow]
  - [[SPARK-43541]](https://issues.apache.org/jira/browse/SPARK-43541): Incorrect column resolution on FULL OUTER JOIN with USING
  - [[SPARK-43718]](https://issues.apache.org/jira/browse/SPARK-43718): References to a specific side's key in a USING join can have wrong nullability
  - [[SPARK-44040]](https://issues.apache.org/jira/browse/SPARK-44040): Fix compute stats when AggregateExec node above QueryStageExec
  - [[SPARK-44251]](https://issues.apache.org/jira/browse/SPARK-44251): Potential for incorrect results or NPE when full outer USING join has null key value

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.3.3).

We would like to acknowledge all community members for contributing patches to this release.
