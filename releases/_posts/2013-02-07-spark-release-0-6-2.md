---
layout: post
title: Spark Release 0.6.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---
Spark 0.6.2 is a maintenance release that contains several bug fixes and usability improvements. You can download it as a <a href="http://spark-project.org/download/spark-0.6.2-sources.tgz">source package</a> (2.5 MB tar.gz) or <a href="http://spark-project.org/download/spark-0.6.2-prebuilt.tgz">prebuilt package</a> (48 MB tar.gz).

We recommend that all Spark 0.6 users update to this maintenance release.

The fixes and improvements in this version include:
<ul>
  <li>A number of fault tolerance fixes regarding detecting dead nodes, handling missing map output fetches, and allowing failed nodes to rejoin the cluster</li>
  <li>Documentation fixes that clarify the configuration for the standalone mode and improve the quick start instructions</li>
  <li>A connection reuse bug fix that improves shuffle performance</li>
  <li>Support for launching a cluster across multiple availability zones in the EC2 scripts</li>
  <li>Support for deleting security groups when an EC2 cluster is terminated</li>
  <li>Improved memory configuration for the standalone deploy cluster daemons: instead of using <code>SPARK_MEM</code> for their memory, which often led people to give them much more memory than they intended, they now use a separate variable, <code>SPARK_DAEMON_MEMORY</code>, with a reasonable default of 512 MB
  <li>Fixes to the Windows run scripts for Spark</li>
  <li>Better detection of a machine's external IP address</li>
  <li>Several small optimizations and bug fixes</li>
</ul>

In total, eleven people contributed to this release:
<ul>
  <li>Stephen Haberman (bug fix)</li>
  <li>Shane Huang (shuffle fix)</li>
  <li>Fernand Pajot (bug fix)</li>
  <li>Andrew Psaltis (bug fix)</li>
  <li>Imran Rashid (standalone cluster, bug fix)</li>
  <li>Charles Reiss (fault recovery fixes, node re-registration, tests)</li>
  <li>Josh Rosen (fault recovery, Java API fixes, deploy scripts)</li>
  <li>Peter Sankauskas (EC2 scripts)</li>
  <li>Lee Moon Soo (bug fix)</li>
  <li>Patrick Wendell (bugs, docs)</li>
  <li>Matei Zaharia (fault recovery, UI, docs, bug fixes)</li>
</ul>
