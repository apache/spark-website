---
layout: global
title: Downloads
type: singular
navigation:
  weight: 3
  show: true
---

<script type="text/javascript">
window.onload = function () {
  $(document).ready(function() {
    initDownloads();
    initReleaseNotes();
  });
}
</script>

## Introduction

Unlike previous Apache Spark™ releases, Spark 4.0 has two distinct distributions: _classic_ and _connect_. As the names suggest, the _classic_ Spark version is the usual distribution you would expect for any new Spark release. The _connect_ distribution, in contrast, is the version with [Spark Connect](https://spark.apache.org/docs/4.0.0-preview2/spark-connect-overview.html) enabled by default. Which one should you download?

Select the _connect_ version if your workloads only use standard [DataFrame](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/dataframe.html) and [Spark SQL](https://spark.apache.org/docs/latest/api/sql/) APIs. Choose the _classic_ version for traditional workloads requiring access to [RDD APIs](https://spark.apache.org/docs/latest/api/python/reference/pyspark.html#rdd-apis), [SparkContext APIs](https://spark.apache.org/docs/latest/api/python/reference/pyspark.html#spark-context-apis), JVM properties, and custom catalyst rules/plans.

If you are not familiar with Spark Connect, the primary benefit is that it provides a stable client API, decoupling the client from the Spark Driver. This makes Spark projects much easier to maintain over time, allowing you to update the Spark Driver and server-side dependencies without having to update the client. To learn more about Spark Connect, and explore its architecture details and benefits, visit here: [Spark Connect architecture](https://spark.apache.org/spark-connect/).

## Selection Matrix for Spark Distributions

This table guides you to which of the two distributions to select based on the type of Spark workloads.

| Workloads Types                                                                                     | Spark Distribution and PySpark Package Mode| Spark Config Change                         |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------|---------------------------------------------|
| - Only use standard DataFrame and Spark SQL APIs                                                    | _connect_                                  | None                                        |
| - Ability to access and debug Spark from IDE or interact in notebooks                               |                                            |                                             |
| - Use of thin client to access Spark cluster from non-JVM languages                                 |                                            |                                             |
||||
| - Access to RDD APIs                                                                                | _classic_                                  | None                                        |
| - Access to SparkContext API and properties                                                         |                                            |                                             |
| - Access to standard DataFrame and Spark SQL APIs                                                   |                                            |                                             |
| - Ability to access and debug Spark from IDE or interact in notebooks                               |                                            |                                             |
| - Access to JVM properties                                                                          |                                            |                                             |
| - Access to private catalyst APIs: custom analyzer/optimizer rules, custom query plans              |                                            |                                             |
||||
| - Able to switch between classic and connect                                                        | _classic_                                  | `spark.api.mode = {classic or connect}`     |
||||

## Download Apache Spark&trade;

1. Choose a Spark release:
  <select id="sparkVersionSelect" onChange="javascript:onVersionSelect();"></select><br>

2. Choose a package type:
  <select id="sparkPackageSelect" onChange="javascript:onPackageSelect();"></select><br>

3. Download Spark: <span id="spanDownloadLink"></span>

4. Verify this release using the <span id="sparkDownloadVerify"></span> and [project release KEYS](https://downloads.apache.org/spark/KEYS) by following these [procedures](https://www.apache.org/info/verification.html).
classic

Note that Spark 4 is pre-built with Scala 2.13 in general, and Spark 3.5+ provides additional pre-built distribution with Scala 2.13.

### Link with Spark ###
Spark artifacts are [hosted in Maven Central](https://search.maven.org/search?q=g:org.apache.spark). You can add a Maven dependency with the following coordinates:

    groupId: org.apache.spark
    artifactId: spark-core_2.13
    version: 4.0.0

### Installing with PyPI ###
Like the two distributions mentioned above, PyPI will also have two PySpark package versions. The default is the _classic_ __pyspark__, while the _connect_ version is __pyspark-connect__ and is dependent on __pyspark__.

Use the decision matrix above to select which PyPI PySpark package to use for your Spark workloads. Both <a href="https://pypi.org/project/pyspark/">PySpark</a> package versions are available on PyPI.

### Installing PySpark Connect ###

Since __pyspark-connect__ package is dependent on __pyspark__, __pyspark-connect__ will automatically install __pyspark__ for you. The __pyspark-connect__ package is mostly empty and merely enables Spark config `spark.api.mode` to _connect_ mode in the underlying pyspark package.

`pip install pyspark-connect==4.0.0`

Thereafter, follow the Spark Connect [quickstart guide](https://spark.apache.org/docs/4.0.0-preview2/api/python/getting_started/quickstart_connect.html) on how to use SparkSession.

### Installing PySpark Classic ###

Simply use `pip install pyspark==4.0.0`

### Installing PySpark Client ###

Alternatively, if you only want a pure Python thin library with Spark Connect capabilities, install _pyspark-client_ package: `pip install pyspark-client`.

For more detailed examples of Apache Spark 4.0 features, check the [PySpark User Guide](https://turbo-adventure-1pg35k5.pages.github.io/01-preface.html) and [PySpark installation](https://spark.apache.org/docs/4.0.0-preview2/api/python/getting_started/install.html).

### Installing with Docker

Spark docker images are available from Dockerhub under the accounts of both [The Apache Software Foundation](https://hub.docker.com/r/apache/spark/) and [Official Images](https://hub.docker.com/_/spark).

Note that, these images contain non-ASF software and may be subject to different license terms. Please check their [Dockerfiles](https://github.com/apache/spark-docker) to verify whether they are compatible with your deployment.

### Release notes for stable releases

<ul id="sparkReleaseNotes"></ul>

### Archived releases

As new Spark releases come out for each development stream, previous ones will be archived,
but they are still available at [Spark release archives](https://archive.apache.org/dist/spark/).

**NOTE**: Previous releases of Spark may be affected by security issues. Please consult the
[Security](security.html) page for a list of known issues that may affect the version you download
before deciding to use it.