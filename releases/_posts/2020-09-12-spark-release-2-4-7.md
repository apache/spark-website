---
layout: post
title: Spark Release 2.4.7
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.4.7 is a maintenance release containing stability, correctness, and security fixes. This release is based on the branch-2.4 maintenance branch of Spark. We strongly recommend all 2.4 users to upgrade to this stable release.

### Notable changes
[SPARK-28818] - FrequentItems applies an incorrect schema to the resulting dataframe when nulls are present

[SPARK-31511] - Make BytesToBytesMap iterator() thread-safe

[SPARK-31703] - Changes made by SPARK-26985 break reading parquet files correctly in BigEndian architectures (AIX + LinuxPPC64)

[SPARK-31854] - Different results of query execution with wholestage codegen on and off

[SPARK-31903] - toPandas with Arrow enabled doesn't show metrics in Query UI.

[SPARK-31923] - Event log cannot be generated when some internal accumulators use unexpected types

[SPARK-31935] - Hadoop file system config should be effective in data source options

[SPARK-31941] - Handling the exception in SparkUI for getSparkUser method

[SPARK-31967] - Loading jobs UI page takes 40 seconds

[SPARK-31968] - write.partitionBy() creates duplicate subdirectories when user provides duplicate columns

[SPARK-31980] - Spark sequence() fails if start and end of range are identical dates

[SPARK-31997] - Should drop test_udtf table when SingleSessionSuite completed

[SPARK-32000] - Fix the flaky testcase for partially launched task in barrier-mode.

[SPARK-32003] - Shuffle files for lost executor are not unregistered if fetch failure occurs after executor is lost

[SPARK-32024] - Disk usage tracker went negative in HistoryServerDiskManager

[SPARK-32028] - App id link in history summary page point to wrong application attempt

[SPARK-32034] - Port HIVE-14817: Shutdown the SessionManager timeoutChecker thread properly upon shutdown

[SPARK-32044] - [SS] 2.4 Kafka continuous processing print mislead initial offsets log

[SPARK-32098] - Use iloc for positional slicing instead of direct slicing in createDataFrame with Arrow

[SPARK-32115] - Incorrect results for SUBSTRING when overflow

[SPARK-32131] - Fix AnalysisException messages at UNION/INTERSECT/EXCEPT/MINUS operations

[SPARK-32167] - nullability of GetArrayStructFields is incorrect

[SPARK-32214] - The type conversion function generated in makeFromJava for "other" type uses a wrong variable.

[SPARK-32238] - Use Utils.getSimpleName to avoid hitting Malformed class name in ScalaUDF

[SPARK-32280] - AnalysisException thrown when query contains several JOINs

[SPARK-32300] - toPandas with no partitions should work

[SPARK-32344] - Unevaluable expr is set to FIRST/LAST ignoreNullsExpr in distinct aggregates

[SPARK-32364] - Use CaseInsensitiveMap for DataFrameReader/Writer options

[SPARK-32372] - "Resolved attribute(s) XXX missing" after dudup conflict references

[SPARK-32377] - CaseInsensitiveMap should be deterministic for addition

[SPARK-32609] - Incorrect exchange reuse with DataSourceV2

[SPARK-32672] - Data corruption in some cached compressed boolean columns

[SPARK-32693] - Compare two dataframes with same schema except nullable property

[SPARK-32771] - The example of expressions.Aggregator in Javadoc / Scaladoc is wrong

[SPARK-32810] - CSV/JSON data sources should avoid globbing paths when inferring schema

[SPARK-32812] - Run tests script for Python fails in certain environments


### Dependency Changes


### Known issues


You can consult JIRA for the [detailed changes](https://s.apache.org/v2.4.7-release-notes).

We would like to acknowledge all community members for contributing patches to this release.

