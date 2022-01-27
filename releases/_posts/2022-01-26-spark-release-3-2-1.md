---
layout: post
title: Spark Release 3.2.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
_edit_last: '4'
_wpas_done_all: '1'
---

Spark 3.2.1 is a maintenance release containing stability fixes. This release is based on the branch-3.2 maintenance branch of Spark. We strongly recommend all 3.2 users to upgrade to this stable release.

### Notable changes

- [[SPARK-30789]](https://issues.apache.org/jira/browse/SPARK-30789): Support (IGNORE | RESPECT) NULLS for LEAD/LAG/NTH_VALUE/FIRST_VALUE/LAST_VALUE
- [[SPARK-33277]](https://issues.apache.org/jira/browse/SPARK-33277): Python/Pandas UDF right after off-heap vectorized reader could cause executor crash.
- [[SPARK-34399]](https://issues.apache.org/jira/browse/SPARK-34399): Add file commit time to metrics and shown in SQL Tab UI
- [[SPARK-35714]](https://issues.apache.org/jira/browse/SPARK-35714): Bug fix for deadlock during the executor shutdown
- [[SPARK-36754]](https://issues.apache.org/jira/browse/SPARK-36754): array_intersect should handle Double.NaN and Float.NaN
- [[SPARK-37001]](https://issues.apache.org/jira/browse/SPARK-37001): Disable two level of map for final hash aggregation by default
- [[SPARK-37023]](https://issues.apache.org/jira/browse/SPARK-37023): Avoid fetching merge status when shuffleMergeEnabled is false for a shuffleDependency during retry
- [[SPARK-37088]](https://issues.apache.org/jira/browse/SPARK-37088): Python UDF after off-heap vectorized reader can cause crash due to use-after-free in writer thread
- [[SPARK-37202]](https://issues.apache.org/jira/browse/SPARK-37202): Temp view didn't collect temp function that registered with catalog API
- [[SPARK-37208]](https://issues.apache.org/jira/browse/SPARK-37208): Support mapping Spark gpu/fpga resource types to custom YARN resource type
- [[SPARK-37214]](https://issues.apache.org/jira/browse/SPARK-37214): Fail query analysis earlier with invalid identifiers
- [[SPARK-37392]](https://issues.apache.org/jira/browse/SPARK-37392): Fix the performance bug when inferring constraints for Generate
- [[SPARK-37695]](https://issues.apache.org/jira/browse/SPARK-37695): Skip diagnosis ob merged blocks from push-based shuffle
- [[SPARK-37705]](https://issues.apache.org/jira/browse/SPARK-37705): Write session time zone in the Parquet file metadata so that rebase can use it instead of JVM timezone
- [[SPARK-37957]](https://issues.apache.org/jira/browse/SPARK-37957): Deterministic flag is not handled for V2 functions

### Dependency Changes

While being a maintence release we did still upgrade some dependencies in this release they are:

- [[SPARK-37113]](https://issues.apache.org/jira/browse/SPARK-37113): Upgrade Parquet to 1.12.2
- [[SPARK-37238]](https://issues.apache.org/jira/browse/SPARK-37238): Upgrade ORC to 1.6.12
- [[SPARK-37534]](https://issues.apache.org/jira/browse/SPARK-37534): Bump dev.ludovic.netlib to 2.2.1
- [[SPARK-37656]](https://issues.apache.org/jira/browse/SPARK-37656): Upgrade SBT to 1.5.7

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.2.1).

We would like to acknowledge all community members for contributing patches to this release.
