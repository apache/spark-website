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

## Download Spark

The latest release of Spark is Spark 1.2.0, released on December 18, 2014
<a href="{{site.url}}releases/spark-release-1-2-0.html">(release notes)</a>
<a href="https://git-wip-us.apache.org/repos/asf?p=spark.git;a=commit;h=2b72c569a674cccf79ebbe8d067b8dbaaf78007f">(git tag)</a><br/>

1. Chose a Spark release:
  <select id="sparkVersionSelect" onChange="javascript:onVersionSelect();"></select><br>

2. Chose a package type:
  <select id="sparkPackageSelect" onChange="javascript:onPackageSelect();"></select><br>

3. Chose a download type:
  <select id="sparkDownloadSelect" onChange="javascript:onDownloadSelect()"></select><br>

4. Download Spark: <span id="spanDownloadLink"></span>

5. Verify this release using the <span id="sparkDownloadVerify"></span>.

### Link with Spark
Spark artifacts are [hosted in Maven Central](http://search.maven.org/#browse%7C1686516968). You can add a Maven dependency with the following coordinates:

    groupId: org.apache.spark
    artifactId: spark-core_2.10
    version: 1.2.0

### Development and Maintenance Branches
If you are interested in working with the newest under-development code or contributing to Spark development, you can also check out the master branch from Git:

    # Master development branch
    git clone git://github.com/apache/spark.git

    # 1.1 maintenance branch with stability fixes on top of Spark 1.2.0
    git clone git://github.com/apache/spark.git -b branch-1.2

Once you've downloaded Spark, you can find instructions for installing and building it on the <a href="{{site.url}}documentation.html">documentation page</a>.

<h3 id="all-releases">All Releases</h3>
<ul id="sparkReleaseNotes">
