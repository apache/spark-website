---
layout: post
title: Spark Release 0.8.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---


Apache Spark 0.8.1 is a maintenance and performance release for the Scala 2.9 version of Spark. It also adds several new features, such as standalone mode high availability, that will appear in Spark 0.9 but developers wanted to have in Scala 2.9. Contributions to 0.8.1 came from 41 developers.

### YARN 2.2 Support
Support has been added for running Spark on YARN 2.2 and newer. Due to a change in the YARN API between previous versions and 2.2+, this was not supported in Spark 0.8.0. See the <a href="{{site.baseurl}}/docs/0.8.1/running-on-yarn.html">YARN documentation</a> for specific instructions on how to build Spark for YARN 2.2+. We've also included a pre-compiled binary for YARN 2.2.

### High Availability Mode for Standalone Cluster Manager
The standalone cluster manager now has a high availability (H/A) mode which can tolerate master failures. This is particularly useful for long-running applications such as streaming jobs and the shark server, where the scheduler master previously represented a single point of failure. Instructions for deploying H/A mode are included <a href="{{site.baseurl}}/docs/0.8.1/spark-standalone.html#high-availability">in the documentation</a>. The current implementation uses Zookeeper for coordination.

### Performance Optimizations
This release adds several performance optimizations:

* Optimized hashtables for shuffle data - reduces memory and CPU consumption
* Efficient encoding for JobConfs - improves latency for stages reading large numbers of blocks from HDFS, S3, and HBase
* Shuffle file consolidation (off by default) - reduces the number of files created in large shuffles for better filesystem performance. This change works best on filesystems newer than ext3 (we recommend ext4 or XFS), and it will be the default in Spark 0.9, but we’ve left it off by default for compatibility. We recommend users turn this on unless they are using ext3 by setting `spark.shuffle.consolidateFiles` to "true".
* Torrent broadcast (off by default) - a faster broadcast implementation for large objects.
* Support for fetching large result sets - allows tasks to return large results without tuning Akka buffer sizes.

### MLlib Improvements
* Added a new variant of Alternating Least Squares matrix factorization for implicit feedback.

### Python Improvements
* It is now possible to set Spark config properties directly from Python
* Python now supports sort operations
* Accumulators now have an explicitly named `add` method

### New Operators and Usability Improvements
* `local://` URI’s - allows users to specify files already present on slaves as dependencies
* A new “result fetching” state has been added to the UI
* New Spark Streaming operators: `transformWith`, `leftInnerJoin`, `rightOuterJoin`
* New Spark operators: `repartition`
* You can now run Spark applications as a different user in standalone and Mesos modes

### Notable Bug Fixes
* Fixed an edge case that could cause data loss for Kafka ingest to Spark Streaming
* Fix for scheduler hanging after certain task failures
* Fixed a packaging bug that prevented log output during streaming examples
* Sorting order has been fixed in certain UI fields

### Credits

* Michael Armbrust -- build fix
* Pierre Borckmans -- typo fix in documentation
* Evan Chan -- `local://` scheme for dependency jars
* Ewen Cheslack-Postava -- `add` method for python accumulators, support for setting config properties in python
* Mosharaf Chowdhury -- optimized broadcast implementation
* Frank Dai -- documentation fix
* Aaron Davidson -- shuffle file consolidation, H/A mode for standalone scheduler, cleaned up representation of block IDs, several improvements and bug fixes
* Tathagata Das -- new streaming operators, fix for kafka concurrency bug
* Ankur Dave -- support for pausing spot clusters on EC2
* Harvey Feng -- optimization to JobConf broadcasts, bug fixes, YARN 2.2 build
* Ali Ghodsi -- YARN 2.2 build
* Thomas Graves -- Spark YARN integration including secure HDFS access over YARN
* Li Guoqiang -- fix for Maven build
* Stephen Haberman -- bug fix
* Haidar Hadi -- documentation fix
* Nathan Howell -- bug fix relating to YARN
* Holden Karau -- Java version of `mapPartitionsWithIndex`
* Du Li -- bug fix in make-distribution.sh
* Raymond Liu -- work on YARN 2.2 build
* Xi Liu -- bug fix and code clean-up
* David McCauley -- bug fix in standalone mode JSON output
* Michael (wannabeast) -- bug fix in memory store
* Fabrizio Milo -- typos in documentation, clean-up in DAGScheduler, typo in scaladoc
* Mridul Muralidharan -- fixes to metadata cleaner and speculative execution
* Sundeep Narravula -- build fix, bug fixes in scheduler and tests, code clean-up
* Kay Ousterhout -- optimized result fetching, new information in UI, scheduler clean-up and bug fixes
* Nick Pentreath -- implicit feedback variant of ALS algorithm
* Imran Rashid -- improvement to executor launch
* Ahir Reddy -- spark support for SIMR
* Josh Rosen -- memory use optimization, clean up of BlockManager code, Java and Python clean-up/fixes
* Henry Saputra -- build fix
* Jerry Shao -- refactoring of fair scheduler, support for running Spark as a specific user, bug fix
* Mingfei Shi -- documentation for JobLogger
* Andre Schumacher -- sortByKey in PySpark and associated changes
* Karthik Tunga -- bug fix in launch script
* Patrick Wendell -- `repartition` operator, shuffle write metrics, various fixes and release management
* Neal Wiggins -- import clean-up, documentation fixes
* Andrew Xia -- bug fix in UI
* Reynold Xin -- task killing, support for setting job properties in Spark shell, logging improvements, Kryo improvements, several bug fixes
* Matei Zaharia -- optimized hashmap for shuffle data, PySpark documentation, optimizations to Kryo serializer
* Wu Zeming -- bug fix in executors UI

Thanks to everyone who contributed!
