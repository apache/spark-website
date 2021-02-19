---
layout: post
title: Spark Release 3.0.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.0.2 is a maintenance release containing stability fixes. This release is based on the branch-3.0 maintenance branch of Spark. We strongly recommend all 3.0 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-31511]](https://issues.apache.org/jira/browse/SPARK-31511): Make BytesToBytesMap iterator() thread-safe
  - [[SPARK-32635]](https://issues.apache.org/jira/browse/SPARK-32635): When pyspark.sql.functions.lit() function is used with dataframe cache, it returns wrong result
  - [[SPARK-32753]](https://issues.apache.org/jira/browse/SPARK-32753): Deduplicating and repartitioning the same column create duplicate rows with AQE
  - [[SPARK-32764]](https://issues.apache.org/jira/browse/SPARK-32764): compare of -0.0 < 0.0 return true
  - [[SPARK-32840]](https://issues.apache.org/jira/browse/SPARK-32840): Invalid interval value can happen to be just adhesive with the unit
  - [[SPARK-32908]](https://issues.apache.org/jira/browse/SPARK-32908): percentile_approx() returns incorrect results
  - [[SPARK-33019]](https://issues.apache.org/jira/browse/SPARK-33019): Use spark.hadoop.mapreduce.fileoutputcommitter.algorithm.version=1 by default
  - [[SPARK-33183]](https://issues.apache.org/jira/browse/SPARK-33183): Bug in optimizer rule EliminateSorts
  - [[SPARK-33260]](https://issues.apache.org/jira/browse/SPARK-33260): SortExec produces incorrect results if sortOrder is a Stream
  - [[SPARK-33290]](https://issues.apache.org/jira/browse/SPARK-33290): SPARK-33507 REFRESH TABLE should invalidate cache even though the table itself may not be cached
  - [[SPARK-33358]](https://issues.apache.org/jira/browse/SPARK-33358): Spark SQL CLI command processing loop can't exit while one comand fail
  - [[SPARK-33404]](https://issues.apache.org/jira/browse/SPARK-33404): "date_trunc" expression returns incorrect results
  - [[SPARK-33435]](https://issues.apache.org/jira/browse/SPARK-33435): SPARK-33507 DSv2: REFRESH TABLE should invalidate caches
  - [[SPARK-33591]](https://issues.apache.org/jira/browse/SPARK-33591): NULL is recognized as the "null" string in partition specs
  - [[SPARK-33593]](https://issues.apache.org/jira/browse/SPARK-33593): Vector reader got incorrect data with binary partition value
  - [[SPARK-33726]](https://issues.apache.org/jira/browse/SPARK-33726): Duplicate field names causes wrong answers during aggregation
  - [[SPARK-33819]](https://issues.apache.org/jira/browse/SPARK-33819): SingleFileEventLogFileReader/RollingEventLogFilesFileReader should be `package private`
  - [[SPARK-33950]](https://issues.apache.org/jira/browse/SPARK-33950): ALTER TABLE .. DROP PARTITION doesn't refresh cache
  - [[SPARK-34011]](https://issues.apache.org/jira/browse/SPARK-34011): ALTER TABLE .. RENAME TO PARTITION doesn't refresh cache
  - [[SPARK-34027]](https://issues.apache.org/jira/browse/SPARK-34027): ALTER TABLE .. RECOVER PARTITIONS doesn't refresh cache
  - [[SPARK-34055]](https://issues.apache.org/jira/browse/SPARK-34055): ALTER TABLE .. ADD PARTITION doesn't refresh cache
  - [[SPARK-34187]](https://issues.apache.org/jira/browse/SPARK-34187): Use available offset range obtained during polling when checking offset validation
  - [[SPARK-34212]](https://issues.apache.org/jira/browse/SPARK-34212): For parquet table, after changing the precision and scale of decimal type in hive, spark reads incorrect value
  - [[SPARK-34213]](https://issues.apache.org/jira/browse/SPARK-34213): LOAD DATA doesn't refresh v1 table cache
  - [[SPARK-34229]](https://issues.apache.org/jira/browse/SPARK-34229): Avro should read decimal values with the file schema
  - [[SPARK-34262]](https://issues.apache.org/jira/browse/SPARK-34262): ALTER TABLE .. SET LOCATION doesn't refresh v1 table cache

### Dependency Changes

While being a maintence release we did still upgrade some dependencies in this release they are:

  - [[SPARK-32691]](https://issues.apache.org/jira/browse/SPARK-32691): Bump commons-crypto to v1.1.0
  - [[SPARK-33831]](https://issues.apache.org/jira/browse/SPARK-33831): Update Jetty to 9.4.34
  - [[SPARK-33725]](https://issues.apache.org/jira/browse/SPARK-33725): Upgrade snappy-java to 1.1.8.2
  - [[SPARK-33405]](https://issues.apache.org/jira/browse/SPARK-33405): Upgrade commons-compress to 1.20

### Known issues
  - [[SPARK-34449]](https://issues.apache.org/jira/browse/SPARK-34449): Upgrade Jetty to 9.4.36

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.0.2).

We would like to acknowledge all community members for contributing patches to this release.
