---
layout: post
title: Spark Release 3.5.7
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.5.7 is the seventh maintenance release containing security and correctness fixes. This release is based on the branch-3.5 maintenance branch of Spark. We strongly recommend all 3.5 users to upgrade to this stable release.

### Notable changes

- [[SPARK-52721]](https://issues.apache.org/jira/browse/SPARK-52721): Wrong message parameter for CANNOT_PARSE_DATATYPE
- [[SPARK-52749]](https://issues.apache.org/jira/browse/SPARK-52749): Replace preview1 to dev1 in its PyPI package name
- [[SPARK-53518]](https://issues.apache.org/jira/browse/SPARK-53518): catalogString of User Defined Type should not be truncated
- [[SPARK-46941]](https://issues.apache.org/jira/browse/SPARK-46941): Can't insert window group limit node for top-k computation if contains SizeBasedWindowFunction
- [[SPARK-49872]](https://issues.apache.org/jira/browse/SPARK-49872): Spark History UI -- StreamConstraintsException: String length (20054016) exceeds the maximum length (20000000)
- [[SPARK-52023]](https://issues.apache.org/jira/browse/SPARK-52023): udaf returning Option can cause data corruption and crashes
- [[SPARK-52032]](https://issues.apache.org/jira/browse/SPARK-52032): ORC filter pushdown causes incorrect results with eqNullSafe (<=>) in DataFrame filter
- [[SPARK-52240]](https://issues.apache.org/jira/browse/SPARK-52240): VectorizedDeltaLengthByteArrayReader throws ParquetDecodingException: Failed to read X bytes
- [[SPARK-52339]](https://issues.apache.org/jira/browse/SPARK-52339): Relations may appear equal even though they are different
- [[SPARK-52516]](https://issues.apache.org/jira/browse/SPARK-52516): Memory Leak with coalesce foreachpartitions and v2 datasources
- [[SPARK-52611]](https://issues.apache.org/jira/browse/SPARK-52611): Fix SQLConf version for excludeSubqueryRefsFromRemoveRedundantAliases configuration
- [[SPARK-52684]](https://issues.apache.org/jira/browse/SPARK-52684): Make CACHE TABLE Commands atomic while encounting execution errors
- [[SPARK-52737]](https://issues.apache.org/jira/browse/SPARK-52737): SHS performance regression when visiting homepage
- [[SPARK-52776]](https://issues.apache.org/jira/browse/SPARK-52776): ProcfsMetricsGetter splits the comm field if it contains space characters
- [[SPARK-52791]](https://issues.apache.org/jira/browse/SPARK-52791): Inferring a UDT errors when first element is null
- [[SPARK-52809]](https://issues.apache.org/jira/browse/SPARK-52809): Don't hold reader and iterator references for all partitions in task completion listeners for metric update
- [[SPARK-52873]](https://issues.apache.org/jira/browse/SPARK-52873): Hint causes semi join results to vary
- [[SPARK-53054]](https://issues.apache.org/jira/browse/SPARK-53054): The Scala Spark Connect DataFrameReader does not use the correct default format
- [[SPARK-53094]](https://issues.apache.org/jira/browse/SPARK-53094): Cube-related data quality problem
- [[SPARK-53155]](https://issues.apache.org/jira/browse/SPARK-53155): Global lower agggregation should not be removed
- [[SPARK-53435]](https://issues.apache.org/jira/browse/SPARK-53435): race condition in CachedRDDBuilder
- [[SPARK-53560]](https://issues.apache.org/jira/browse/SPARK-53560): Crash looping when retrying uncommitted batch in Kafka source and AvailableNow trigger
- [[SPARK-53581]](https://issues.apache.org/jira/browse/SPARK-53581): Potential thread-safety issue for mapTaskIds.add() in IndexShuffleBlockResolver

### Dependency changes

While being a maintenance release we did still upgrade some dependencies in this release they are:
- [[SPARK-52635]](https://issues.apache.org/jira/browse/SPARK-52635): Upgrade ORC to 1.9.7
- [[SPARK-53532]](https://issues.apache.org/jira/browse/SPARK-53532): Upgrade Jetty to 9.4.58.v20250814

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.5.7).

We would like to acknowledge all community members for contributing patches to this release.

