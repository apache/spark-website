---
layout: post
title: Spark Release 3.0.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.0.1 is a maintenance release containing stability fixes. This release is based on the branch-3.0 maintenance branch of Spark. We strongly recommend all 3.0 users to upgrade to this stable release.

### Notable changes
  - [[SPARK-26905]](https://issues.apache.org/jira/browse/SPARK-26905): Revisit reserved/non-reserved keywords based on the ANSI SQL standard
  - [[SPARK-31220]](https://issues.apache.org/jira/browse/SPARK-31220): repartition obeys spark.sql.adaptive.coalescePartitions.initialPartitionNum when spark.sql.adaptive.enabled
  - [[SPARK-31703]](https://issues.apache.org/jira/browse/SPARK-31703): Changes made by SPARK-26985 break reading parquet files correctly in BigEndian architectures (AIX + LinuxPPC64)
  - [[SPARK-31915]](https://issues.apache.org/jira/browse/SPARK-31915): Resolve the grouping column properly per the case sensitivity in grouped and cogrouped pandas UDFs
  - [[SPARK-31923]](https://issues.apache.org/jira/browse/SPARK-31923): Event log cannot be generated when some internal accumulators use unexpected types
  - [[SPARK-31935]](https://issues.apache.org/jira/browse/SPARK-31935): Hadoop file system config should be effective in data source options 
  - [[SPARK-31968]](https://issues.apache.org/jira/browse/SPARK-31968): write.partitionBy() creates duplicate subdirectories when user provides duplicate columns
  - [[SPARK-31983]](https://issues.apache.org/jira/browse/SPARK-31983): Tables of structured streaming tab show wrong result for duration column
  - [[SPARK-32003]](https://issues.apache.org/jira/browse/SPARK-32003): Shuffle files for lost executor are not unregistered if fetch failure occurs after executor is lost
  - [[SPARK-32038]](https://issues.apache.org/jira/browse/SPARK-32038): Regression in handling NaN values in COUNT(DISTINCT)
  - [[SPARK-32073]](https://issues.apache.org/jira/browse/SPARK-32073): Drop R < 3.5 support
  - [[SPARK-32092]](https://issues.apache.org/jira/browse/SPARK-32092): CrossvalidatorModel does not save all submodels (it saves only 3)
  - [[SPARK-32136]](https://issues.apache.org/jira/browse/SPARK-32136): Spark producing incorrect groupBy results when key is a struct with nullable properties
  - [[SPARK-32148]](https://issues.apache.org/jira/browse/SPARK-32148): LEFT JOIN generating non-deterministic and unexpected result (regression in Spark 3.0)
  - [[SPARK-32220]](https://issues.apache.org/jira/browse/SPARK-32220): Cartesian Product Hint cause data error
  - [[SPARK-32310]](https://issues.apache.org/jira/browse/SPARK-32310): ML params default value parity
  - [[SPARK-32339]](https://issues.apache.org/jira/browse/SPARK-32339): Improve MLlib BLAS native acceleration docs
  - [[SPARK-32424]](https://issues.apache.org/jira/browse/SPARK-32424): Fix silent data change for timestamp parsing if overflow happens
  - [[SPARK-32451]](https://issues.apache.org/jira/browse/SPARK-32451): Support Apache Arrow 1.0.0 in SparkR
  - [[SPARK-32456]](https://issues.apache.org/jira/browse/SPARK-32456): Check the Distinct by assuming it as Aggregate for Structured Streaming
  - [[SPARK-32608]](https://issues.apache.org/jira/browse/SPARK-32608): Script Transform DELIMIT value should be formatted
  - [[SPARK-32646]](https://issues.apache.org/jira/browse/SPARK-32646): ORC predicate pushdown should work with case-insensitive analysis
  - [[SPARK-32676]](https://issues.apache.org/jira/browse/SPARK-32676): Fix double caching in KMeans/BiKMeans


### Known issues
  - [[SPARK-31511]](https://issues.apache.org/jira/browse/SPARK-31511): Make BytesToBytesMap iterator() thread-safe
  - [[SPARK-32779]](https://issues.apache.org/jira/browse/SPARK-32779): Spark/Hive3 interaction potentially causes deadlock
  - [[SPARK-32788]](https://issues.apache.org/jira/browse/SPARK-32788): non-partitioned table scan should not have partition filter
  - [[SPARK-32810]](https://issues.apache.org/jira/browse/SPARK-32810): CSV/JSON data sources should avoid globbing paths when inferring schema

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.0.1).

We would like to acknowledge all community members for contributing patches to this release.
