---
layout: post
title: Spark Release 2.2.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 2.2.1 is a maintenance release containing stability fixes. This release is based on the branch-2.2 maintenance branch of Spark. We strongly recommend all 2.2.x users to upgrade to this stable release.

You can consult JIRA for the [detailed changes](http://s.apache.org/spark-2.2.1).

### Changes of behavior

 - **Core and SQL**
   - SPARK-22472: added null check for top-level primitive types. Before this release, for datasets having top-level primitive types, and it has null values, it might return some unexpected results. For example, let's say we have a parquet file with schema `<a: Int>`, and we read it into Scala Int. If column a has null values, when transformation is applied some unexpected value can be returned.

We would like to acknowledge all community members for contributing patches to this release.
