---
layout: post
title: "Next official release: Spark 3.1.1" 
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
The next official Spark release is Spark 3.1.1 instead of Spark 3.1.0.
There was a technical issue during Spark 3.1.0 RC1 preparation,
see [[VOTE] Release Spark 3.1.0 (RC1)](https://www.mail-archive.com/dev@spark.apache.org/msg27133.html) in the Spark dev mailing list.

In short, Spark 3.1.0 RC1 was [unexpectedly published into Maven as Spark 3.1.0](https://repo1.maven.org/maven2/org/apache/spark/spark-core_2.12/3.1.0/)
while it is not officially released to Apache mirrors. We plan to skip Spark 3.1.0 release
and choose Spark 3.1.1 as the next release to prevent the potential problems to the end
users.

Therefore, Spark 3.1.1 will supersede the unofficial Spark 3.1.0 unexpectedly
published to Maven. We discourage to use this Spark 3.1.0 for any purpose, and there
are no guarantees on using it such as binary compatibility.

