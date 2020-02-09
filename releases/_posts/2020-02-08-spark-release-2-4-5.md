---
layout: post
title: Spark Release 2.4.5
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.4.5 is a maintenance release containing stability fixes. This release is based on the branch-2.4 maintenance branch of Spark. We strongly recommend all 2.4 users to upgrade to this stable release.

### Notable changes
  - [[SPARK-21492]](https://issues.apache.org/jira/browse/SPARK-21492): Fix memory leak in SortMergeJoin
  - [[SPARK-26985]](https://issues.apache.org/jira/browse/SPARK-26985): Fix "access only some column of the all of columns " for big endian architecture
  - [[SPARK-27812]](https://issues.apache.org/jira/browse/SPARK-27812): Bump K8S client version to 4.6.1
  - [[SPARK-28152]](https://issues.apache.org/jira/browse/SPARK-28152): Add a legacy conf for old MsSqlServerDialect numeric mapping
  - [[SPARK-28939]](https://issues.apache.org/jira/browse/SPARK-28939): Propagate SQLConf for plans executed by toRdd 
  - [[SPARK-29042]](https://issues.apache.org/jira/browse/SPARK-29042): Sampling-based RDD with unordered input should be INDETERMINATE
  - [[SPARK-29101]](https://issues.apache.org/jira/browse/SPARK-29101): Fix count API for csv file when DROPMALFORMED mode is selected
  - [[SPARK-29651]](https://issues.apache.org/jira/browse/SPARK-29651): Fix parsing of interval seconds fraction
  - [[SPARK-29708]](https://issues.apache.org/jira/browse/SPARK-29708): Correct aggregated values when grouping sets are duplicated
  - [[SPARK-29743]](https://issues.apache.org/jira/browse/SPARK-29743): Fix sample to set needCopyResult to true if its child is
  - [[SPARK-29890]](https://issues.apache.org/jira/browse/SPARK-29890): Fix DataFrameNaFunctions.fill to handle duplicate columns
  - [[SPARK-29918]](https://issues.apache.org/jira/browse/SPARK-29918): RecordBinaryComparator should check endianness when compared by long
  - [[SPARK-30065]](https://issues.apache.org/jira/browse/SPARK-30065): Fix DataFrameNaFunctions.drop to handle duplicate columns
  - [[SPARK-30082]](https://issues.apache.org/jira/browse/SPARK-30082): Do not replace Zeros when replacing NaNs
  - [[SPARK-30312]](https://issues.apache.org/jira/browse/SPARK-30312): Preserve path permission and acl when truncate table
  - [[SPARK-30447]](https://issues.apache.org/jira/browse/SPARK-30447): Fix constant propagation nullability issue
  - [[SPARK-30274]](https://issues.apache.org/jira/browse/SPARK-30274): Avoid BytesToBytesMap lookup hang forever when holding keys reaching max capacity

### Known issues
  - [[SPARK-26021]](https://issues.apache.org/jira/browse/SPARK-26021): -0.0 and 0.0 not treated consistently, doesn't match Hive
  - [[SPARK-26154]](https://issues.apache.org/jira/browse/SPARK-26154): Stream-stream joins - left outer join gives inconsistent output
  - [[SPARK-28344]](https://issues.apache.org/jira/browse/SPARK-28344): Fail the query if detect ambiguous self join

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.4.5).

We would like to acknowledge all community members for contributing patches to this release.
