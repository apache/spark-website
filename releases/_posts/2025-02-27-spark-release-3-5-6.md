---
layout: post
title: Spark Release 3.5.6
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.5.6 is the sixth maintenance release containing security and correctness fixes. This release is based on the branch-3.5 maintenance branch of Spark. We strongly recommend all 3.5 users to upgrade to this stable release.

### Notable changes

- [[SPARK-51272]](https://issues.apache.org/jira/browse/SPARK-51272): Race condition in DagScheduler can result in failure of retrying all partitions for non deterministic partitioning key
- [[SPARK-51821]](https://issues.apache.org/jira/browse/SPARK-51821): Possible deadlock in UninterruptibleThread
- [[SPARK-51936]](https://issues.apache.org/jira/browse/SPARK-51936): ReplaceTableAsSelect should overwrite the new table instead of append
- [[SPARK-51638]](https://issues.apache.org/jira/browse/SPARK-51638): Fetching the remote disk stored RDD blocks via the external shuffle service is not working
- [[SPARK-51537]](https://issues.apache.org/jira/browse/SPARK-51537): Failed to run third-party Spark ML library on Spark Connect
- [[SPARK-49507]](https://issues.apache.org/jira/browse/SPARK-49507): Fix Expected only partition pruning predicates exception
- [[SPARK-45994]](https://issues.apache.org/jira/browse/SPARK-45994): Change description-file to description_file
- [[SPARK-50416]](https://issues.apache.org/jira/browse/SPARK-50416): load-spark-env.sh test for terminal or pipe broken / non-portable
- [[SPARK-51281]](https://issues.apache.org/jira/browse/SPARK-51281): DataFrameWriterV2 should respect the path option
- [[SPARK-51450]](https://issues.apache.org/jira/browse/SPARK-51450): BarrierCoordinator thread not exiting in Spark standalone mode
- [[SPARK-43221]](https://issues.apache.org/jira/browse/SPARK-43221): Host local block fetching should use a block status of a block stored on disk
- [[SPARK-48922]](https://issues.apache.org/jira/browse/SPARK-48922): Optimize complex type insertion performance
- [[SPARK-51307]](https://issues.apache.org/jira/browse/SPARK-51307): locationUri in CatalogStorageFormat shall be decoded
- [[SPARK-51344]](https://issues.apache.org/jira/browse/SPARK-51344): Fix `ENV` key value format in `*.template`

### Dependency changes

While being a maintenance release we did still upgrade some dependencies in this release they are:
- [[SPARK-52025]](https://issues.apache.org/jira/browse/SPARK-52025): Upgrade ORC to 1.9.6

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.5.6).

We would like to acknowledge all community members for contributing patches to this release.

