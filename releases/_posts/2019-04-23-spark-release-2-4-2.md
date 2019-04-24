---
layout: post
title: Spark Release 2.4.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.4.2 is a maintenance release containing stability fixes. This release is based on the branch-2.4 maintenance branch of Spark. We strongly recommend all 2.4 users to upgrade to this stable release.

### Notable changes
  - SPARK-27419: When setting spark.executor.heartbeatInterval to a value less than 1 seconds in branch-2.4, it will always fail because the value will be converted to 0 and the heartbeat will always timeout and finally kill the executor.
  - Revert SPARK-25250: It may cause the job to hang forever, and is reverted in 2.4.2.

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.4.2).

We would like to acknowledge all community members for contributing patches to this release.