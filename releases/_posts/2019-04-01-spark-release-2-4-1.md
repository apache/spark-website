---
layout: post
title: Spark Release 2.4.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.4.1 is a maintenance release containing stability fixes. This release is based on the branch-2.4 maintenance branch of Spark. We strongly recommend all 2.4.0 users to upgrade to this stable release.

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.4.1).

### Known issue

  - **CORE**
    - SPARK-27198: if `spark.executor.heartbeatInterval` is less than one second, it will always be set to zero resulting timeout.

We would like to acknowledge all community members for contributing patches to this release.
