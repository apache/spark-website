---
layout: post
title: Spark Release 2.4.4
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.4.4 is a maintenance release containing stability fixes. This release is based on the branch-2.4 maintenance branch of Spark. We strongly recommend all 2.4 users to upgrade to this stable release.

### Notable changes
  - [[SPARK-26038]](https://issues.apache.org/jira/browse/SPARK-26038): Fix Decimal toScalaBigInt/toJavaBigInteger for decimals not fitting in long
  - [[SPARK-26812]](https://issues.apache.org/jira/browse/SPARK-26812): Fix PushProjectionThroughUnion nullability issue
  - [[SPARK-27798]](https://issues.apache.org/jira/browse/SPARK-27798): Fix from_avro not to modify variables in other rows in local mode
  - [[SPARK-27907]](https://issues.apache.org/jira/browse/SPARK-27992): Spark 2.4.3 accidentally throws NPE when HiveUDAF meets 0 rows. Fixed to return NULL like all the other releases.
  - [[SPARK-27992]](https://issues.apache.org/jira/browse/SPARK-27992): Fix PySpark socket server to sync with JVM connection thread future
  - [[SPARK-28015]](https://issues.apache.org/jira/browse/SPARK-28015): Check stringToDate() consumes entire input for the yyyy and yyyy-[m]m formats
  - [[SPARK-28308]](https://issues.apache.org/jira/browse/SPARK-28308): CalendarInterval sub-second part should be padded before parsing
  - [[SPARK-28489]](https://issues.apache.org/jira/browse/SPARK-28489): KafkaOffsetRangeCalculator.getRanges may drop offsets
  - [[SPARK-28699]](https://issues.apache.org/jira/browse/SPARK-28699): Cache an indeterminate RDD could lead to incorrect result while stage rerun
  - [[SPARK-28780]](https://issues.apache.org/jira/browse/SPARK-28780): Spark 2.2 accidentally introduced the method LinearSVCModel.setWeightCol. This method works incorrectly, too. It is deprecated in 2.4.4 and will be removed in 3.0.0.

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.4.4).

We would like to acknowledge all community members for contributing patches to this release.
