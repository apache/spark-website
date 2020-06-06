---
layout: post
title: Spark Release 2.4.6
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.4.6 is a maintenance release containing stability, correctness, and security fixes. This release is based on the branch-2.4 maintenance branch of Spark. We strongly recommend all 2.4 users to upgrade to this stable release.

### Notable changes
  - [[SPARK-29419]](https://issues.apache.org/jira/browse/SPARK-29419): Seq.toDS / spark.createDataset(Seq) is not thread-safe
  - [[SPARK-31519]](https://issues.apache.org/jira/browse/SPARK-31519): Cast in having aggregate expressions returns the wrong result
  - [[SPARK-26293]](https://issues.apache.org/jira/browse/SPARK-26293): Cast exception when having python udf in subquery
  - [[SPARK-30826]](https://issues.apache.org/jira/browse/SPARK-30826): LIKE returns wrong result from external table using parquet
  - [[SPARK-30857]](https://issues.apache.org/jira/browse/SPARK-30857): Wrong truncations of timestamps before the epoch to hours and days
  - [[SPARK-31256]](https://issues.apache.org/jira/browse/SPARK-31256): Dropna doesn't work for struct columns
  - [[SPARK-31312]](https://issues.apache.org/jira/browse/SPARK-31312): Transforming Hive simple UDF (using JAR) expression may incur CNFE in later evaluation
  - [[SPARK-31420]](https://issues.apache.org/jira/browse/SPARK-31420): Infinite timeline redraw in job details page
  - [[SPARK-31485]](https://issues.apache.org/jira/browse/SPARK-31485): Barrier stage can hang if only partial tasks launched
  - [[SPARK-31500]](https://issues.apache.org/jira/browse/SPARK-31500): collect_set() of BinaryType returns duplicate elements
  - [[SPARK-31503]](https://issues.apache.org/jira/browse/SPARK-31503): fix the SQL string of the TRIM functions
  - [[SPARK-31663]](https://issues.apache.org/jira/browse/SPARK-31663): Grouping sets with having clause returns the wrong result
  - [[SPARK-26908]](https://issues.apache.org/jira/browse/SPARK-26908): Fix toMilis
  - [[SPARK-31563]](https://issues.apache.org/jira/browse/SPARK-31563): Failure of Inset.sql for UTF8String collection




### Dependency Changes

While being a maintence release we did still upgrade some dependencies in this release they are:
  - netty-all to 4.1.47.Final ([[CVE-2019-20445]](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20445))
  - Janino to 3.0.16 (SQL Generated code)
  - aws-java-sdk-sts to 1.11.655 (required for kinesis client upgrade)
  - snappy 1.1.7.5 (stability improvements & ppc64le performance)

### Known issues
  - [[SPARK-31170]](https://issues.apache.org/jira/browse/SPARK-31170): Spark Cli does not respect hive-site.xml and spark.sql.warehouse.dir
  - [[SPARK-26021]](https://issues.apache.org/jira/browse/SPARK-26021): -0.0 and 0.0 not treated consistently, doesn't match Hive
  - [[SPARK-26154]](https://issues.apache.org/jira/browse/SPARK-26154): Stream-stream joins - left outer join gives inconsistent outpu
  - [[SPARK-28344]](https://issues.apache.org/jira/browse/SPARK-28344): Fail the query if detect ambiguous self join


You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.4.6).

We would like to acknowledge all community members for contributing patches to this release.
