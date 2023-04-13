---
layout: post
title: Spark Release 3.2.4
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.2.4 is a maintenance release containing stability fixes. This release is based on the branch-3.2 maintenance branch of Spark. We strongly recommend all 3.2 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-38173]](https://issues.apache.org/jira/browse/SPARK-38173): Quoted column cannot be recognized correctly when quotedRegexColumnNames is true
  - [[SPARK-39399]](https://issues.apache.org/jira/browse/SPARK-39399): proxy-user not working for Spark on k8s in cluster deploy mode
  - [[SPARK-40817]](https://issues.apache.org/jira/browse/SPARK-40817): Remote spark.jars URIs ignored for Spark on Kubernetes in cluster mode
  - [[SPARK-40819]](https://issues.apache.org/jira/browse/SPARK-40819): Parquet INT64 (TIMESTAMP(NANOS,true)) now throwing Illegal Parquet type instead of automatically converting to LongType
  - [[SPARK-41162]](https://issues.apache.org/jira/browse/SPARK-41162): Anti-join must not be pushed below aggregation with ambiguous predicates
  - [[SPARK-41254]](https://issues.apache.org/jira/browse/SPARK-41254): YarnAllocator.rpIdToYarnResource map is not properly updated
  - [[SPARK-41360]](https://issues.apache.org/jira/browse/SPARK-41360): Avoid BlockManager re-registration if the executor has been lost
  - [[SPARK-41376]](https://issues.apache.org/jira/browse/SPARK-41376): Executor netty direct memory check should respect spark.shuffle.io.preferDirectBufs
  - [[SPARK-41388]](https://issues.apache.org/jira/browse/SPARK-41388): getReusablePVCs should ignore recently created PVCs in the previous batch
  - [[SPARK-41415]](https://issues.apache.org/jira/browse/SPARK-41415): SASL Request Retries
  - [[SPARK-41554]](https://issues.apache.org/jira/browse/SPARK-41554): Decimal.changePrecision produces ArrayIndexOutOfBoundsException
  - [[SPARK-41732]](https://issues.apache.org/jira/browse/SPARK-41732): Session window: analysis rule "SessionWindowing" does not apply tree-pattern based pruning
  - [[SPARK-41952]](https://issues.apache.org/jira/browse/SPARK-41952): Upgrade Parquet to fix off-heap memory leaks in Zstd codec
  - [[SPARK-41989]](https://issues.apache.org/jira/browse/SPARK-41989): PYARROW_IGNORE_TIMEZONE warning can break application logging setup
  - [[SPARK-42071]](https://issues.apache.org/jira/browse/SPARK-42071): Register scala.math.Ordering$Reverse to KyroSerializer
  - [[SPARK-42090]](https://issues.apache.org/jira/browse/SPARK-42090): Introduce sasl retry count in RetryingBlockTransferor
  - [[SPARK-42157]](https://issues.apache.org/jira/browse/SPARK-42157): `spark.scheduler.mode=FAIR` should provide FAIR scheduler
  - [[SPARK-42168]](https://issues.apache.org/jira/browse/SPARK-42168): CoGroup with window function returns incorrect result when partition keys differ in order
  - [[SPARK-42259]](https://issues.apache.org/jira/browse/SPARK-42259): ResolveGroupingAnalytics should take care of Python UDAF
  - [[SPARK-42462]](https://issues.apache.org/jira/browse/SPARK-42462): Prevent `docker-image-tool.sh` from publishing OCI manifests
  - [[SPARK-42478]](https://issues.apache.org/jira/browse/SPARK-42478): Make a serializable jobTrackerId instead of a non-serializable JobID in FileWriterFactory
  - [[SPARK-42596]](https://issues.apache.org/jira/browse/SPARK-42596): OMP_NUM_THREADS not set to number of executor cores by default
  - [[SPARK-42697]](https://issues.apache.org/jira/browse/SPARK-42697): /api/v1/applications return 0 for duration
  - [[SPARK-42747]](https://issues.apache.org/jira/browse/SPARK-42747): Fix incorrect internal status of LoR and AFT
  - [[SPARK-42785]](https://issues.apache.org/jira/browse/SPARK-42785): When spark submit without --deploy-mode, will face NPE in Kubernetes Case
  - [[SPARK-42906]](https://issues.apache.org/jira/browse/SPARK-42906): Replace a starting digit with `x` in resource name prefix
  - [[SPARK-42967]](https://issues.apache.org/jira/browse/SPARK-42967): Fix SparkListenerTaskStart.stageAttemptId when a task is started after the stage is cancelled
  - [[SPARK-43004]](https://issues.apache.org/jira/browse/SPARK-43004): vendor==vendor typo in ResourceRequest.equals()

### Dependency Changes

While being a maintence release we did still upgrade some dependencies in this release they are:

  - [[SPARK-41030]](https://issues.apache.org/jira/browse/SPARK-41030): Upgrade Apache Ivy to 2.5.1

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.2.4).

We would like to acknowledge all community members for contributing patches to this release.
