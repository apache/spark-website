---
layout: post
title: Spark Release 2.4.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.4.1 is a maintenance release containing stability fixes. This release is based on the branch-2.4 maintenance branch of Spark. We strongly recommend all 2.4.0 users to upgrade to this stable release.

In Apache Spark 2.4.1, Scala 2.12 support is GA, and it's no longer experimental. We will drop Scala 2.11 support in Spark 3.0, so please provide us feedback.

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.4.1).

### Core and Spark SQL

  - **Performance and stability**
    - [[SPARK-26266]](https://issues.apache.org/jira/browse/SPARK-26266) Update to Scala 2.12.8 (requires recent Java 8 versions)
    - [[SPARK-26188]](https://issues.apache.org/jira/browse/SPARK-26188) Spark 2.4.0 Partitioning behavior breaks backwards compatibility
    
  - **Other notable changes**
    - [[SPARK-27198]](https://issues.apache.org/jira/browse/SPARK-27198) Heartbeat interval mismatch in driver and executor

### Windows

  - **Performance and stability**
    - [[SPARK-26080]](https://issues.apache.org/jira/browse/SPARK-26080) Unable to run worker.py on Windows

### Known issue

  - **CORE**
    - [[SPARK-27419]](https://issues.apache.org/jira/browse/SPARK-27419): if `spark.executor.heartbeatInterval` is less than one second, it will always be set to zero resulting timeout.

We would like to acknowledge all community members for contributing patches to this release.
