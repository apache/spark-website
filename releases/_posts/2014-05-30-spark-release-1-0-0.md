---
layout: post
title: Spark Release 1.0.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.0.0 is a major release marking the start of the 1.X line. This release brings both a variety of new features and strong API compatibility guarantees throughout the 1.X line. Spark 1.0 adds a new major component, [Spark SQL]({{site.url}}docs/1.0.0/sql-programming-guide.html), for loading and manipulating structured data in Spark. It includes major extensions to all of Spark’s existing standard libraries ([ML]({{site.url}}docs/1.0.0/mllib-guide.html), [Streaming]({{site.url}}docs/1.0.0/streaming-programming-guide.html), and [GraphX]({{site.url}}docs/1.0.0/graphx-programming-guide.html)) while also enhancing language support in Java and Python. Finally, Spark 1.0 brings operational improvements including full support for the Hadoop/YARN security model and a unified submission process for all supported cluster managers.

You can download Spark 1.0.0 as either a 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.0.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.0.tgz'); return false;">source package</a>
(5 MB tgz) or a prebuilt package for 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.0-bin-hadoop1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.0-bin-hadoop1.tgz'); return false;">Hadoop 1 / CDH3</a>, 
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.0-bin-cdh4.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.0-bin-cdh4.tgz'); return false;">CDH4</a>, or
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.0-bin-hadoop2.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.0-bin-hadoop2.tgz'); return false;">Hadoop 2 / CDH5 / HDP2</a>
(160 MB tgz). Release signatures and checksums are available at the official [Apache download site](http://www.apache.org/dist/spark/spark-1.0.0/).

### API Stability
Spark 1.0.0 is the first release in the 1.X major line. Spark is guaranteeing stability of its core API for all 1.X releases. Historically Spark has already been very conservative with API changes, but this guarantee codifies our commitment to application writers. The project has also clearly annotated experimental, alpha, and developer API’s to provide guidance on future API changes of newer components.

### Integration with YARN Security
For users running in secured Hadoop environments, Spark now integrates with the Hadoop/YARN security model. Spark will authenticate job submission, securely transfer HDFS credentials, and authenticate communication between components.

### Operational and Packaging Improvements
This release significantly simplifies the process of bundling and submitting a Spark application. A new [spark-submit tool]({{site.url}}docs/1.0.0/submitting-applications.html) allows users to submit an application to any Spark cluster, including local clusters, Mesos, or YARN, through a common process. The documentation for bundling Spark applications has been substantially expanded. We’ve also added a history server for  Spark’s web UI, allowing users to view Spark application data after individual applications are finished.

### Spark SQL
This release introduces [Spark SQL]({{site.url}}docs/1.0.0/sql-programming-guide.html) as a new alpha component. Spark SQL provides support for loading and manipulating structured data in Spark, either from external structured data sources (currently Hive and Parquet) or by adding a schema to an existing RDD. Spark SQL’s API interoperates with the RDD data model, allowing users to interleave Spark code with SQL statements. Under the hood, Spark SQL uses the Catalyst optimizer to choose an efficient execution plan, and can automatically push predicates into storage formats like Parquet. In future releases, Spark SQL will also provide a common API to other storage systems.

### MLlib Improvements
In 1.0.0, Spark’s MLlib adds support for sparse feature vectors in Scala, Java, and Python. It takes advantage of sparsity in both storage and computation in linear methods, k-means, and naive Bayes. In addition, this release adds several new algorithms: scalable decision trees for both classification and regression, distributed matrix algorithms including SVD and PCA, model evaluation functions, and L-BFGS as an optimization primitive. The programming guide and code examples for MLlib have also been greatly expanded.

### GraphX and Streaming Improvements
In addition to usability and maintainability improvements, GraphX in Spark 1.0 brings substantial performance boosts in graph loading, edge reversal, and neighborhood computation. These operations now require less communication and produce simpler RDD graphs. Spark’s Streaming module has added performance optimizations for stateful stream transformations, along with improved Flume support, and automated state cleanup for long running jobs.

### Extended Java and Python Support
Spark 1.0 adds support for Java 8 [new lambda syntax](http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html#section2) in its Java bindings. Java 8 supports a concise syntax for writing anonymous functions, similar to the closure syntax in Scala and Python. This change requires small changes for users of the current Java API, which are noted in the documentation. Spark’s Python API has been extended to support several new functions. We’ve also included several stability improvements in the Python API, particularly for large datasets. PySpark now supports running on YARN as well.

### Documentation
Spark’s programming guide has been significantly expanded to centrally cover all supported languages and discuss more operators and aspects of the development life cycle. The MLlib guide has also been expanded with significantly more detail and examples for each algorithm, while documents on configuration, YARN and Mesos have also been revamped.

### Smaller Changes
- PySpark now works with more Python versions than before -- Python 2.6+ instead of 2.7+, and NumPy 1.4+ instead of 1.7+.
- Spark has upgraded to Avro 1.7.6, adding support for Avro specific types.
- Internal instrumentation has been added to allow applications to monitor and instrument Spark jobs.
- Support for off-heap storage in Tachyon has been added via a special build target.
- Datasets persisted with `DISK_ONLY` now write directly to disk, significantly improving memory usage for large datasets.
- Intermediate state created during a Spark job is now garbage collected when the corresponding RDDs become unreferenced, improving performance.
- Spark now includes a [Javadoc version]({{site.url}}docs/1.0.0/api/java/index.html) of all its API docs and a [unified Scaladoc]({{site.url}}docs/1.0.0/api/scala/index.html) for all modules.
- A new SparkContext.wholeTextFiles method lets you operate on small text files as individual records.


### Migrating to Spark 1.0
While most of the Spark API remains the same as in 0.x versions, a few changes have been made for long-term flexibility, especially in the Java API (to support Java 8 lambdas). The documentation includes [migration information]({{site.url}}docs/1.0.0/programming-guide.html#migrating-from-pre-10-versions-of-spark) to upgrade your applications.

### Contributors
The following developers contributed to this release:

 * Aaron Davidson -- packaging and deployment improvements, several bug fixes, local[*] mode
 * Aaron Kimball -- documentation improvements
 * Abhishek Kumar -- Python configuration fixes
 * Ahir Reddy -- PySpark build, fixes, and cancellation support
 * Allan Douglas R. de Oliveira -- Improvements to spark-ec2 scripts
 * Andre Schumacher -- Parquet support and optimizations
 * Andrew Ash -- Mesos documentation and other doc improvements, bug fixes
 * Andrew Or -- history server (lead), garbage collection (lead), spark-submit, PySpark and YARN improvements
 * Andrew Tulloch -- MLlib contributions and code clean-up
 * Andy Konwinski -- documentation fix
 * Anita Tailor -- Cassandra example
 * Ankur Dave -- GraphX (lead) optimizations, documentation, and usability
 * Archer Shao -- bug fixes
 * Arun Ramakrishnan -- improved random sampling
 * Baishuo -- test improvements
 * Bernardo Gomez Palacio -- spark-shell improvements and Mesos updates
 * Bharath Bhushan -- bug fix
 * Bijay Bisht -- bug fixes
 * Binh Nguyen -- dependency fix
 * Bouke van der Bijl -- fixes for PySpark on Mesos and other Mesos fixes
 * Bryn Keller -- improvement to HBase support and unit tests
 * Chen Chao -- documentation, bug fix, and code clean-up
 * Cheng Hao -- performance and feature improvements in Spark SQL
 * Cheng Lian -- column storage and other improvements in Spark SQL
 * Christian Lundgren -- improvement to spark-ec2 scripts
 * DB Tsai -- L-BGFS optimizer in MLlib, MLlib documentation and fixes
 * Dan McClary -- Improvement to stats counter
 * Daniel Darabos -- GraphX performance improvement
 * Davis Shepherd -- bug fix
 * Diana Carroll -- documentation and bug fix
 * Egor Pakhomov -- local iterator for RDD’s
 * Emtiaz Ahmed -- bug fix
 * Erik Selin -- bug fix
 * Ethan Jewett -- documentation improvement
 * Evan Chan -- automatic clean-up of application data
 * Evan Sparks -- MLlib optimizations and doc improvement
 * Frank Dai -- code clean-up in MLlib
 * Guoquiang Li -- build improvements and several bug fixes
 * Ghidireac -- bug fix
 * Haoyuan Li -- Tachyon storage level for RDD’s
 * Harvey Feng -- spark-ec2 update
 * Henry Saputra -- code clean-up
 * Henry Cook -- Spark SQL improvements
 * Holden Karau -- cross validation in MLlib, Python and core engine improvements
 * Ivan Wick -- Mesos bug fix
 * Jey Kottalam -- sbt build improvement
 * Jerry Shao -- Spark metrics and Spark SQL improvements
 * Jiacheng Guo -- bug fix
 * Jianghan -- bug fix
 * Jianping J Wang -- JBLAS support in MLlib
 * Joseph E. Gonzalez -- GraphX improvements, fixes, and documentation
 * Josh Rosen -- PySpark improvements and bug fixes
 * Jyotiska NK -- documentation, test improvements, and bug fix
 * Kan Zhang -- bug fixes in Spark core, SQL, and PySpark
 * Kay Ousterhout -- bug fixes and code refactoring in scheduler
 * Kelvin Chu -- automatic clean-up of application data
 * Kevin Mader -- example fix
 * Koert Kuipers -- code visibility fix
 * Kousuke Saruta -- documentation and build fixes
 * Kyle Ellrott -- improved memory usage for DISK_ONLY persistence
 * Larva Boy -- approximate counts in Spark SQL
 * Madhu Siddalingaiah -- ec2 fixes
 * Manish Amde -- decision trees in MLlib
 * Marcelo Vanzin -- improvements and fixes to YARN support, dependency clean-up
 * Mark Grover -- build fixes
 * Mark Hamstra -- build and dependency improvements, scheduler bug fixes
 * Margin Jaggi -- MLlib documentation improvements
 * Matei Zaharia -- Python versions of several MLlib algorithms, spark-submit improvements, bug fixes, and documentation improvements
 * Michael Armbrust -- Spark SQL (lead), including schema support for RDD’s, catalyst optimizer, and Hive support
 * Mridul Muralidharan -- code visibility changes and bug fixes
 * Nan Zhu -- bug and stability fixes, code clean-up, documentation, and new features
 * Neville Li -- bug fix
 * Nick Lanham -- Tachyon bundling in distribution script
 * Nirmal Reddy -- code clean-up
 * OuYang Jin -- local mode and json improvements
 * Patrick Wendell -- release manager, build improvements, bug fixes, and code clean-up
 * Petko Nikolov -- new utility functions
 * Prabeesh K -- typo fix
 * Prabin Banka -- new PySpark API’s
 * Prashant Sharma -- PySpark improvements, Java 8 lambda support, and build improvements
 * Punya Biswal -- Java API improvements
 * Qiuzhuang Lian -- bug fixes
 * Rahul Singhal -- build improvements, bug fixes
 * Raymond Liu -- YARN build fixes and UI improvements
 * Reynold Xin -- bug fixes, internal changes, Spark SQL improvements, build fixes, and style improvements
 * Reza Zadeh -- SVD implementation in MLlib and other MLlib contributions
 * Roman Pastukhov -- clean-up of broadcast files
 * Rong Gu -- Tachyon storage level for RDD’s
 * Sandeep Sing -- several bug fixes, MLLib improvements and fixes to Spark examples
 * Sandy Ryza -- spark-submit script and several YARN improvements
 * Saurabh Rawat  -- Java API improvements
 * Sean Owen -- several build improvements, code clean-up, and MLlib fixes
 * Semih Salihoglu -- GraphX improvements
 * Shaocun Tian -- bug fix in MLlib
 * Shivaram Venkataraman -- bug fixes
 * Shixiong Zhu -- code style and correctness fixes
 * Shiyun Wxm -- typo fix
 * Stevo Slavic -- bug fix
 * Sumedh Mungee -- documentation fix
 * Sundeep Narravula -- “cancel” button in Spark UI
 * Takayu Ueshin -- bug fixes and improvements to Spark SQL
 * Tathagata Das -- web UI and other improvements to Spark Streaming (lead), bug fixes, state clean-up, and release manager
 * Timothy Chen -- Spark SQL improvements
 * Ted Malaska -- improved Flume support
 * Tom Graves -- Hadoop security integration (lead) and YARN support
 * Tianshuo Deng -- Bug fix
 * Tor Myklebust -- improvements to ALS
 * Wangfei -- Spark SQL docs
 * Wang Tao -- code clean-up
 * William Bendon -- JSON support changes and bug fixes
 * Xiangrui Meng -- several improvements to MLlib (lead)
 * Xuan Nguyen -- build fix
 * Xusen Yin -- MLlib contributions and bug fix
 * Ye Xianjin -- test fixes
 * Yinan Li -- addFile improvement
 * Yin Hua -- Spark SQL improvements
 * Zheng Peng -- bug fixes

_Thanks to everyone who contributed!_
