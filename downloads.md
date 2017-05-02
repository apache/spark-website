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

3. Choose a download type:
  <select id="sparkDownloadSelect" onChange="javascript:onDownloadSelect()"></select><br>

4. Download Spark: <span id="spanDownloadLink"></span>

5. Verify this release using the <span id="sparkDownloadVerify"></span> and [project release KEYS](https://www.apache.org/dist/spark/KEYS).

_Note: Starting version 2.0, Spark is built with Scala 2.11 by default.
Scala 2.10 users should download the Spark source package and build
[with Scala 2.10 support](http://spark.apache.org/docs/latest/building-spark.html#building-for-scala-210)._

<!--
### Latest Preview Release

Preview releases, as the name suggests, are releases for previewing upcoming features.
Unlike nightly packages, preview releases have been audited by the project's management committee
to satisfy the legal requirements of Apache Software Foundation's release policy.
Preview releases are not meant to be functional, i.e. they can and highly likely will contain
critical bugs or documentation errors.

The latest preview release is Spark 2.0.0-preview, published on May 24, 2016.
You can select and download it above.
-->

### Link with Spark
Spark artifacts are [hosted in Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.apache.spark%22). You can add a Maven dependency with the following coordinates:

    groupId: org.apache.spark
    artifactId: spark-core_2.11
    version: 2.1.1

### Spark Source Code Management
If you are interested in working with the newest under-development code or contributing to Apache Spark development, you can also check out the master branch from Git:

    # Master development branch
    git clone git://github.com/apache/spark.git

    # 2.1 maintenance branch with stability fixes on top of Spark 2.1.0
    git clone git://github.com/apache/spark.git -b branch-2.1

Once you've downloaded Spark, you can find instructions for installing and building it on the <a href="{{site.baseurl}}/documentation.html">documentation page</a>.

### Release Notes for Stable Releases

<ul id="sparkReleaseNotes"></ul>

### Archived Releases

As new Spark releases come out for each development stream, previous ones will be archived, but they are still available at [Spark release archives](https://archive.apache.org/dist/spark/).

### Nightly Packages and Artifacts
For developers, Spark maintains nightly builds and SNAPSHOT artifacts. More information is available on the [the Developer Tools page](/developer-tools.html#nightly-builds).

