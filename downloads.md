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

## Download Apache Spark&trade;

1. Choose a Spark release:
  <select id="sparkVersionSelect" onChange="javascript:onVersionSelect();"></select><br>

2. Choose a package type:
  <select id="sparkPackageSelect" onChange="javascript:onPackageSelect();"></select><br>

3. Download Spark: <span id="spanDownloadLink"></span>

4. Verify this release using the <span id="sparkDownloadVerify"></span> and [project release KEYS](https://downloads.apache.org/spark/KEYS).

Note that Spark 3 is pre-built with Scala 2.12 in general and Spark 3.2+ provides additional pre-built distribution with Scala 2.13.

### Link with Spark
Spark artifacts are [hosted in Maven Central](https://search.maven.org/search?q=g:org.apache.spark). You can add a Maven dependency with the following coordinates:

    groupId: org.apache.spark
    artifactId: spark-core_2.12
    version: 3.2.1

### Installing with PyPi
<a href="https://pypi.org/project/pyspark/">PySpark</a> is now available in pypi. To install just run `pip install pyspark`.

### Release notes for stable releases

<ul id="sparkReleaseNotes"></ul>

### Archived releases

As new Spark releases come out for each development stream, previous ones will be archived,
but they are still available at [Spark release archives](https://archive.apache.org/dist/spark/).

**NOTE**: Previous releases of Spark may be affected by security issues. Please consult the
[Security](security.html) page for a list of known issues that may affect the version you download
before deciding to use it.
