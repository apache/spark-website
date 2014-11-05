---
layout: post
title: Spark wins Daytona Gray Sort 100TB Benchmark
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

We are proud to announce that Spark won the <a href="http://sortbenchmark.org/">2014 Gray Sort Benchmark</a> (Daytona 100TB category). A team from <a href="http://databricks.com/">Databricks</a> including Spark committers, Reynold Xin, Xiangrui Meng, and Matei Zaharia, <a href="http://databricks.com/blog/2014/11/05/spark-officially-sets-a-new-record-in-large-scale-sorting.html">entered the benchmark using Spark</a>. Spark won a tie with the Themis team from UCSD, and jointly set a new world record in sorting.

They used Spark and sorted 100TB of data using 206 EC2 i2.8xlarge machines in 23 minutes. The previous world record was 72 minutes, set by a Hadoop MapReduce cluster of 2100 nodes. This means that Spark sorted the same data 3X faster using 10X fewer machines. All the sorting took place on disk (HDFS), without using Spark’s in-memory cache.

Outperforming large Hadoop MapReduce clusters on sorting not only validates the vision and work done by the Spark community, but also demonstrates that Spark is fulfilling its promise to serve as a faster and more scalable engine for data processing of all sizes.

For more information, see the <a href="http://databricks.com/blog/2014/11/05/spark-officially-sets-a-new-record-in-large-scale-sorting.html">Databricks blog article</a> written by the Reynold Xin.
