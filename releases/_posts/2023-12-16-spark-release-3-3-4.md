---
layout: post
title: Spark Release 3.3.4
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.3.4 is the last maintenance release containing security and correctness fixes. This release is based on the branch-3.3 maintenance branch of Spark. We strongly recommend all 3.3 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-43327]](https://issues.apache.org/jira/browse/SPARK-43327): Trigger `committer.setupJob` before plan execute in `FileFormatWriter#write`
  - [[SPARK-43393]](https://issues.apache.org/jira/browse/SPARK-43393): Address sequence expression overflow bug
  - [[SPARK-44547]](https://issues.apache.org/jira/browse/SPARK-44547): Ignore fallback storage for cached RDD migration
  - [[SPARK-44581]](https://issues.apache.org/jira/browse/SPARK-44581): Fix the bug that ShutdownHookManager gets wrong UGI from SecurityManager of ApplicationMaster
  - [[SPARK-44725]](https://issues.apache.org/jira/browse/SPARK-44725): Document `spark.network.timeoutInterval`
  - [[SPARK-44805]](https://issues.apache.org/jira/browse/SPARK-44805): getBytes/getShorts/getInts/etc. should work in a column vector that has a dictionary
  - [[SPARK-44857]](https://issues.apache.org/jira/browse/SPARK-44857): Fix `getBaseURI` error in Spark Worker LogPage UI buttons
  - [[SPARK-44871]](https://issues.apache.org/jira/browse/SPARK-44871): Fix percentile_disc behaviour
  - [[SPARK-44920]](https://issues.apache.org/jira/browse/SPARK-44920): Use await() instead of awaitUninterruptibly() in TransportClientFactory.createClient()
  - [[SPARK-44925]](https://issues.apache.org/jira/browse/SPARK-44925): K8s default service token file should not be materialized into token
  - [[SPARK-44935]](https://issues.apache.org/jira/browse/SPARK-44935): Fix `RELEASE` file to have the correct information in Docker images if exists
  - [[SPARK-44937]](https://issues.apache.org/jira/browse/SPARK-44937): Mark connection as timedOut in TransportClient.close
  - [[SPARK-44973]](https://issues.apache.org/jira/browse/SPARK-44973): Fix `ArrayIndexOutOfBoundsException` in `conv()`
  - [[SPARK-44990]](https://issues.apache.org/jira/browse/SPARK-44990): Reduce the frequency of get `spark.sql.legacy.nullValueWrittenAsQuotedEmptyStringCsv`
  - [[SPARK-45057]](https://issues.apache.org/jira/browse/SPARK-45057): Avoid acquire read lock when keepReadLock is false
  - [[SPARK-45079]](https://issues.apache.org/jira/browse/SPARK-45079): Fix an internal error from `percentile_approx()` on `NULL` accuracy
  - [[SPARK-45100]](https://issues.apache.org/jira/browse/SPARK-45100): Fix an internal error from `reflect()`on `NULL` class and method
  - [[SPARK-45187]](https://issues.apache.org/jira/browse/SPARK-45187): Fix `WorkerPage` to use the same pattern for `logPage` urls
  - [[SPARK-45227]](https://issues.apache.org/jira/browse/SPARK-45227): Fix a subtle thread-safety issue with CoarseGrainedExecutorBackend
  - [[SPARK-45389]](https://issues.apache.org/jira/browse/SPARK-45389): Correct MetaException matching rule on getting partition metadata
  - [[SPARK-45430]](https://issues.apache.org/jira/browse/SPARK-45430): Fix for FramelessOffsetWindowFunction when IGNORE NULLS and offset > rowCount
  - [[SPARK-45508]](https://issues.apache.org/jira/browse/SPARK-45508): Add "--add-opens=java.base/jdk.internal.ref=ALL-UNNAMED" so Platform can access Cleaner on Java 9+
  - [[SPARK-45580]](https://issues.apache.org/jira/browse/SPARK-45580): Handle case where a nested subquery becomes an existence join
  - [[SPARK-45670]](https://issues.apache.org/jira/browse/SPARK-45670): SparkSubmit does not support `--total-executor-cores` when deploying on K8s
  - [[SPARK-45749]](https://issues.apache.org/jira/browse/SPARK-45749): Fix `Spark History Server` to sort `Duration` column properly
  - [[SPARK-45920]](https://issues.apache.org/jira/browse/SPARK-45920): group by ordinal should be idempotent
  - [[SPARK-46006]](https://issues.apache.org/jira/browse/SPARK-46006): YarnAllocator miss clean targetNumExecutorsPerResourceProfileId after YarnSchedulerBackend call stop
  - [[SPARK-46012]](https://issues.apache.org/jira/browse/SPARK-46012): EventLogFileReader should not read rolling logs if app status file is missing
  - [[SPARK-46029]](https://issues.apache.org/jira/browse/SPARK-46029): Escape the single quote, _ and % for DS V2 pushdown
  - [[SPARK-46092]](https://issues.apache.org/jira/browse/SPARK-46092): Don't push down Parquet row group filters that overflow
  - [[SPARK-46095]](https://issues.apache.org/jira/browse/SPARK-46095): Document `REST API` for Spark Standalone Cluster
  - [[SPARK-46239]](https://issues.apache.org/jira/browse/SPARK-46239): Hide `Jetty` info
  - [[SPARK-46286]](https://issues.apache.org/jira/browse/SPARK-46286): Document `spark.io.compression.zstd.bufferPool.enabled`

### Dependency Changes

While being a maintenance release we did still upgrade some dependencies in this release they are:

  - [[SPARK-45885]](https://issues.apache.org/jira/browse/SPARK-45885): Upgrade ORC to 1.7.10

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.3.4).

We would like to acknowledge all community members for contributing patches to this release.



