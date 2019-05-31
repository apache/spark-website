---
layout: post
title: Plan for dropping Python 2 support
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
As many of you already knew, Python core development team and many utilized Python packages like
Pandas and NumPy will drop Python 2 support in or before 2020/01/01.
Apache Spark has supported both Python 2 and 3 since Spark 1.4 release in 2015.
However, maintaining Python 2/3 compatibility is an increasing burden and it essentially limits
the use of Python 3 features in Spark.
Given the end of life (EOL) of Python 2 is coming, we plan to eventually drop Python 2 support as
well. The current plan is as follows:

* In the next major release in 2019, we will deprecate Python 2 support.
  PySpark users will see a deprecation warning if Python 2 is used.
  We will publish a migration guide for PySpark users to migrate to Python 3.
* We will drop Python 2 support in a future release in 2020, after Python 2 EOL on 2020/01/01.
  PySpark users will see an error if Python 2 is used.
* For releases that support Python 2, e.g., Spark 2.4, their patch releases will continue supporting
  Python 2. However, after Python 2 EOL, we might not take patches that are specific to Python 2.
