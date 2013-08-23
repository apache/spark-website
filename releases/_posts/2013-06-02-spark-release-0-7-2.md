---
layout: post
title: Spark Release 0.7.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---
Spark 0.7.2 is a maintenance release that contains multiple bug fixes and improvements. You can download it as a <a href="http://spark-project.org/download-spark-0.7.2-sources">source package</a> (4 MB tar.gz) or get prebuilt packages for <a href="http://spark-project.org/download-spark-0.7.2-prebuilt-hadoop1">Hadoop 1 / CDH3</a> or <a href="http://spark-project.org/download-spark-0.7.2-prebuilt-cdh4">CDH 4</a> (61 MB tar.gz).


We recommend that all users update to this maintenance release.


The fixes and improvements in this version include:
<ul>
  <li>Scala version updated to 2.9.3.</li>
  <li>Several improvements to Bagel, including performance fixes and a configurable storage level.</li>
  <li>New API methods: subtractByKey, foldByKey, mapWith, filterWith, foreachPartition, and others.</li>
  <li>A new metrics reporting interface, SparkListener, to collect information about each computation stage: task lengths, bytes shuffled, etc.</li>
  <li>Several new examples using the Java API, including K-means and computing pi.</li>
  <li>Support for launching multiple worker instances per host in the standalone mode.</li>
  <li>Various bug fixes across the board.</li>
</ul>

The following people contributed to this release:
<ul>
  <li>Jey Kottalam (Maven build, bug fixes, EC2 scripts, packaging the release)</li>
  <li>Andrew Ash (bug fixes, docs)</li>
  <li>Andrey Kouznetsov (bug fixes)</li>
  <li>Andy Konwinski (docs)</li>
  <li>Charles Reiss (bug fixes)</li>
  <li>Christoph Grothaus (bug fixes)</li>
  <li>Erik van Oosten (bug fixes)</li>
  <li>Giovanni Delussu (bug fixes)</li>
  <li>Hiral Patel (bug fixes)</li>
  <li>Holden Karau (error reporting, EC2 scripts)</li>
  <li>Imran Rashid (metrics reporting system)</li>
  <li>Josh Rosen (EC2 scripts)</li>
  <li>Mark Hamstra (new API methods, tests)</li>
  <li>Mikhail Bautin (build)</li>
  <li>Mosharaf Chowdhury (bug fixes)</li>
  <li>Nick Pentreath (Bagel, examples)</li>
  <li>Patrick Wendell (bug fixes)</li>
  <li>Reynold Xin (bug fixes)</li>
  <li>Stephen Haberman (bug fixes, tests, subtractByKey)</li>
  <li>Kalpit Shah (build, multiple workers per host)</li>
  <li>Mike Potts (run scripts)</li>
  <li>Matei Zaharia (Bagel, bug fixes, build)</li>
</ul>

We thank everyone who helped with this release, and hope to see more contributions from you in the future!
