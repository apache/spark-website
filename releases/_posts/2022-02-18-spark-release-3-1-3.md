---
layout: post
title: Spark Release 3.1.3
categories: []
tags: []
status: publish
type: post
published: true
meta:
_edit_last: '4'
_wpas_done_all: '1'
---

Spark 3.1.3 is a maintenance release containing stability fixes. This release is based on the branch-3.1 maintenance branch of Spark. We strongly recommend all 3.1.3 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-38075]](https://issues.apache.org/jira/browse/SPARK-38075): Hive script transform with order by and limit will return fake rows
  - [[SPARK-37784]](https://issues.apache.org/jira/browse/SPARK-37784): CodeGenerator.addBufferedState() does not properly handle UDTs
  - [[SPARK-37079]](https://issues.apache.org/jira/browse/SPARK-37079): Fix DataFrameWriterV2.partitionedBy to send the arguments to JVM properly
  - [[SPARK-37049]](https://issues.apache.org/jira/browse/SPARK-37049): executorIdleTimeout is not working for pending pods on K8s
  - [[SPARK-36783]](https://issues.apache.org/jira/browse/SPARK-36783): ScanOperation should not push Filter through nondeterministic Project
  - [[SPARK-36782]](https://issues.apache.org/jira/browse/SPARK-36782): Deadlock between map-output-dispatcher and dispatcher-BlockManagerMaster upon migrating shuffle blocks
  - [[SPARK-36704]](https://issues.apache.org/jira/browse/SPARK-36704): InaccessibleObjectException in Java 9+ on startup
  - [[SPARK-36740]](https://issues.apache.org/jira/browse/SPARK-36740): Various NaN issues with array operations.
  - [[SPARK-36532]](https://issues.apache.org/jira/browse/SPARK-36532): Deadlock in CoarseGrainedExecutorBackend.onDisconnected
  - [[SPARK-36489]](https://issues.apache.org/jira/browse/SPARK-36489): Aggregate functions over no grouping keys, on tables with a single bucket, return multiple rows
  - [[SPARK-36339]](https://issues.apache.org/jira/browse/SPARK-36339): aggsBuffer should collect AggregateExpression in the map range
  - [[SPARK-35391]](https://issues.apache.org/jira/browse/SPARK-35391): Memory leak in ExecutorAllocationListener breaks dynamic allocation under high load

### Dependency Changes

While being a maintence release we did still upgrade some dependencies in this release they are:

  - [[SPARK-36734]](https://issues.apache.org/jira/browse/SPARK-36734): Upgrade ORC to 1.5.13
  - [[SPARK-36129]](https://issues.apache.org/jira/browse/SPARK-36129): Upgrade commons-compress to 1.21


You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.1.3).

We would like to acknowledge all community members for contributing patches to this release.
