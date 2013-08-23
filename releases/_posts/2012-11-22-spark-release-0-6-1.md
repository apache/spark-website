---
layout: post
title: Spark Release 0.6.1
categories:
- Releases
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
---
Spark 0.6.1 is a maintenance release that contains several important bug fixes and performance improvements. You can download it as a <a href="https://github.com/downloads/mesos/spark/spark-0.6.1-sources.tgz">source package</a> (2.4 MB tar.gz) or <a href="https://github.com/downloads/mesos/spark/spark-0.6.1-prebuilt.tgz">prebuilt package</a> (48 MB tar.gz).

The fixes and improvements in this version include:
<ul>
  <li>Fixed overly aggressive message timeouts that could cause workers to disconnect from the cluster</li>
  <li>Fixed a bug in the standalone deploy mode that did not expose hostnames to scheduler, affecting HDFS locality</li>
  <li>Improved connection reuse in shuffle, which can greatly speed up small shuffles (contributed by Reynold Xin)</li>
  <li>Fixed some potential deadlocks in the block manager (contributed by Tathagata Das)</li>
  <li>Fixed a bug getting IDs of failed hosts from Mesos (contributed by Imran Rashid)</li>
  <li>Several EC2 script improvements, like better handling of spot instances (contributed by Josh Rosen)</li>
  <li>Made the local IP address that Spark binds to customizable (contributed by Mikhail Bautin)</li>
  <li>Support for Hadoop 2 distributions (contributed by Thomas Dudziak)</li>
  <li>Support for locating Scala on Debian distributions (contributed by Thomas Dudziak)</li>
  <li>Improved standalone cluster web UI to show more information about jobs</li>
  <li>Added an option to spread out jobs over the standalone cluster instead of concentrating them on a small number of nodes (<code>spark.deploy.spreadOut</code>)</li>
</ul>

We recommend that all Spark 0.6 users update to this maintenance release.
