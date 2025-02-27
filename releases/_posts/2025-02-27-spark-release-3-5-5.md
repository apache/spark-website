---
layout: post
title: Spark Release 3.5.5
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.5.5 is the fourth maintenance release containing security and correctness fixes. This release is based on the branch-3.5 maintenance branch of Spark. We strongly recommend all 3.5 users to upgrade to this stable release.

### Notable changes

- [[SPARK-45013]](https://issues.apache.org/jira/browse/SPARK-45013): Flaky Test with NPE: track allocated resources by taskId
- [[SPARK-48899]](https://issues.apache.org/jira/browse/SPARK-48899): Fix `ENV` key value format in K8s Dockerfiles
- [[SPARK-50091]](https://issues.apache.org/jira/browse/SPARK-50091): Query fails when aggregate expression is in left-hand operand of IN-subquery
- [[SPARK-50624]](https://issues.apache.org/jira/browse/SPARK-50624): Add TimestampNTZType to ColumnarRow/MutableColumnarRow
- [[SPARK-50769]](https://issues.apache.org/jira/browse/SPARK-50769): ClassCastException in HistogramNumeric
- [[SPARK-50784]](https://issues.apache.org/jira/browse/SPARK-50784): Fix `lint-scala` not to ignore `scalastyle` errors
- [[SPARK-50797]](https://issues.apache.org/jira/browse/SPARK-50797): Move `HiveCharVarcharTestSuite` from `o/a/s/sql` to `o/a/s/sql/hive`
- [[SPARK-50853]](https://issues.apache.org/jira/browse/SPARK-50853): Close temp shuffle file writable channel
- [[SPARK-50870]](https://issues.apache.org/jira/browse/SPARK-50870): DataSourceV2 relations may contain unresolved cast expressions after materializing current_timestamp()
- [[SPARK-50890]](https://issues.apache.org/jira/browse/SPARK-50890): Skip test_take in Spark Connect only build
- [[SPARK-50946]](https://issues.apache.org/jira/browse/SPARK-50946): When using Java version 17.0.14, the `SPARK-35907: createDirectory` test in UtilsSuite will fail.
- [[SPARK-50984]](https://issues.apache.org/jira/browse/SPARK-50984): Make `ExpressionImplUtilsSuite` robust by matching JDK msgs via regex
- [[SPARK-50987]](https://issues.apache.org/jira/browse/SPARK-50987): Make `spark-connect-overview.md`'s version strings up-to-date
- [[SPARK-50998]](https://issues.apache.org/jira/browse/SPARK-50998): Fix `spark.kubernetes.configMap.maxSize` default value in docs
- [[SPARK-51027]](https://issues.apache.org/jira/browse/SPARK-51027): Prevent `HiveClient.runSqlHive` invocation in non-testing environment
- [[SPARK-51033]](https://issues.apache.org/jira/browse/SPARK-51033): Fix `CryptoStreamUtilsSuite` to use `sameElements` for array comparision
- [[SPARK-51039]](https://issues.apache.org/jira/browse/SPARK-51039): Fix `hive-llap-common` dependency to use `hive.llap.scope` in root `pom.xml`
- [[SPARK-51042]](https://issues.apache.org/jira/browse/SPARK-51042): Read and write CalendarIntervals using one call to get/putLong consistently
- [[SPARK-51061]](https://issues.apache.org/jira/browse/SPARK-51061): Hide `Jetty` info in REST Submission API
- [[SPARK-51071]](https://issues.apache.org/jira/browse/SPARK-51071): Upgrade `upload-artifact` to v4 to recover branch-3.5 CI
- [[SPARK-51093]](https://issues.apache.org/jira/browse/SPARK-51093): Fix minor endianness issues in tests
- [[SPARK-51104]](https://issues.apache.org/jira/browse/SPARK-51104): Use self-host javascript and CSS in Spark website
- [[SPARK-51128]](https://issues.apache.org/jira/browse/SPARK-51128): Self host docsearch.min.css.map
- [[SPARK-51129]](https://issues.apache.org/jira/browse/SPARK-51129): Fix code tab switching in Spark Website
- [[SPARK-51157]](https://issues.apache.org/jira/browse/SPARK-51157): Add missing @varargs Scala annotation for scala functon APIs
- [[SPARK-51164]](https://issues.apache.org/jira/browse/SPARK-51164): Fix `CallerContext` test by enabling `hadoop.caller.context.enabled`
- [[SPARK-51173]](https://issues.apache.org/jira/browse/SPARK-51173): Add `configName` Scalastyle rule
- [[SPARK-51185]](https://issues.apache.org/jira/browse/SPARK-51185): Revert simplifications to PartitionedFileUtil API due to increased risk of OOM
- [[SPARK-51187]](https://issues.apache.org/jira/browse/SPARK-51187): Implement the graceful deprecation of incorrect config introduced in SPARK-49699
- [[SPARK-51219]](https://issues.apache.org/jira/browse/SPARK-51219): Catalog.listTables fails on temp table when non-V2SessionCatalog is in use
- [[SPARK-51244]](https://issues.apache.org/jira/browse/SPARK-51244): Upgrade left Github Action image from `ubuntu-20.04` to `ubuntu-22.04` and solved the `TPCDSQueryBenchmark` compatibility issue

### Dependency changes

While being a maintenance release we did still upgrade some dependencies in this release they are:
- [[SPARK-50886]](https://issues.apache.org/jira/browse/SPARK-50886): Upgrade Avro to 1.11.4

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.5.5).

We would like to acknowledge all community members for contributing patches to this release.
