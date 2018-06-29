---
layout: post
title: Spark Release 2.3.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.3.1 is a maintenance release containing stability fixes. This release is based on the branch-2.3 maintenance branch of Spark. We strongly recommend all 2.3.x users to upgrade to this stable release.

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-2.3.1).

### Changes of behavior

 - **SQL**
   - SPARK-23173: all fields from schemas provided to the `from_json()` are now forced to be nullable. The original behavior can be restored by setting `spark.sql.fromJsonForceNullableSchema=false`.

We would like to acknowledge all community members for contributing patches to this release.
