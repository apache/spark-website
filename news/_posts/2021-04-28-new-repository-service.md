---
layout: post
title: New repository service for spark-packages
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---
The <a href="https://spark-packages.org">spark-packages</a> team has spun up a new repository service at <a href="https://repos.spark-packages.org">https://repos.spark-packages.org</a> and it will be the new home for the artifacts on spark-packages.

<a href="https://bintray.com/">Bintray</a>, the original repository service used for <a href="https://spark-packages.org/">https://spark-packages.org/</a>, is in its <a href="https://jfrog.com/blog/into-the-sunset-bintray-jcenter-gocenter-and-chartcenter/">sunset process</a>, and will no longer be available from May 1st. To consume artifacts from the new repository service, please replace "dl.bintray.com/spark-packages/maven" with "repos.spark-packages.org" in the Maven pom files or sbt build files in your repositories.

If you are using `--packages` to specify artifacts on spark-packages, with spark-submit, spark-shell, etc., you will have to manually download and install the artifacts, before Spark 2.4.8, 3.0.3 and 3.1.2 are released.

If you have any questions for using the new repository service, or any general questions for spark-packages, please reach out to feedback@spark-packages.org.
