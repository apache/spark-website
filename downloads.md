---
layout: global
title: Downloads
type: singular
navigation:
  weight: 3
  show: true
---

<script type="text/javascript">
$(document).ready(function() {
  initDownloads();
  initReleaseNotes();
});
</script>

## Download Apache Spark&trade;

1. Choose a Spark release:
  <select id="sparkVersionSelect" onChange="javascript:onVersionSelect();"></select><br>

2. Choose a package type:
  <select id="sparkPackageSelect" onChange="javascript:onPackageSelect();"></select><br>

3. Download Spark: <span id="spanDownloadLink"></span>

4. Verify this release using the <span id="sparkDownloadVerify"></span> and [project release KEYS](https://www.apache.org/dist/spark/KEYS).

### Link with Spark
Spark artifacts are [hosted in Maven Central](https://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.apache.spark%22). You can add a Maven dependency with the following coordinates:

    groupId: org.apache.spark
    artifactId: spark-core_2.11
    version: 2.4.0

### Installing with PyPi
<a href="https://pypi.python.org/pypi/pyspark">PySpark</a> is now available in pypi. To install just run `pip install pyspark`.

### Release Notes for Stable Releases

<ul id="sparkReleaseNotes"></ul>

### Archived Releases

As new Spark releases come out for each development stream, previous ones will be archived, but they are still available at [Spark release archives](https://archive.apache.org/dist/spark/).


