---
layout: post
title: Spark Release 2.4.3
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.4.3 is a maintenance release containing stability fixes. This release is based on the branch-2.4 maintenance branch of Spark. We strongly recommend all 2.4 users to upgrade to this stable release.

Note that 2.4.3 switched the default Scala version from Scala 2.12 to Scala 2.11, which is the default for all the previous 2.x releases except 2.4.2. That means, the pre-built convenience binaries are compiled for Scala 2.11.
Spark is still cross-published for 2.11 and 2.12 in Maven Central, and can be built for 2.12 from source.

### Notable changes
  - [[SPARK-27494]](https://issues.apache.org/jira/browse/SPARK-27494): It fixes a correctness bug in Kafka source v2, when processing NULL is the key value.

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.4.3).

We would like to acknowledge all community members for contributing patches to this release.