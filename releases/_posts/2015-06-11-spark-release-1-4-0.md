---
layout: post
title: Spark Release 1.4.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 1.4.0 is the fifth release on the 1.X line. This release brings an R API to Spark. It also brings usability improvements in Spark’s core engine and expansion of MLlib and Spark Streaming. Spark 1.4 represents the work of more than 210 contributors from more than 70 institutions in more than 1000 individual patches.

To download Spark 1.4 visit the <a href="{{site.baseurl}}/downloads.html">downloads</a> page.

### SparkR
Spark 1.4 is the first release to package SparkR, an R binding for Spark based
on Spark's new DataFrame API. SparkR gives R users access to Spark's scale-out
parallel runtime along with all of Spark's input and output formats. It also
supports calling directly into Spark SQL. 
The [R programming guide](/docs/1.4.0/sparkr.html) has more information on how to get up and running with
SparkR.

### Spark Core

Spark core adds a variety of improvements focused on operations, performance, and compatiblity:

 * [SPARK-6942](https://issues.apache.org/jira/browse/SPARK-6942): Visualization for Spark DAGs and operational monitoring
 * [SPARK-4897](https://issues.apache.org/jira/browse/SPARK-4897): Python 3 support
 * [SPARK-3644](https://issues.apache.org/jira/browse/SPARK-3644): A REST API for application information
 * [SPARK-4550](https://issues.apache.org/jira/browse/SPARK-4550): Serialized shuffle outputs for improved performance
 * [SPARK-7081](https://issues.apache.org/jira/browse/SPARK-7081): Initial performance improvements in project Tungsten
 * [SPARK-3074](https://issues.apache.org/jira/browse/SPARK-3074): External spilling for Python groupByKey operations
 * [SPARK-3674](https://issues.apache.org/jira/browse/SPARK-3674): YARN support for Spark EC2 and [SPARK-5342](https://issues.apache.org/jira/browse/SPARK-5342): Security for long running YARN applications
 * [SPARK-2691](https://issues.apache.org/jira/browse/SPARK-2691): Docker support in Mesos and [SPARK-6338](https://issues.apache.org/jira/browse/SPARK-6338): Cluster mode in Mesos

### DataFrame API and Spark SQL
The DataFrame API sees major extensions in Spark 1.4 (see [this link](https://issues.apache.org/jira/issues/?jql=parent%20%3D%20SPARK-6116%20and%20fixVersion%20%3D%201.4.0) for a full list) with
a focus on analytic and mathmatical functions. Spark SQL introduces new operational utilities along with support for ORCFile.

 * [SPARK-2883](https://issues.apache.org/jira/browse/SPARK-2883): Support for ORCFile format
 * [SPARK-2213](https://issues.apache.org/jira/browse/SPARK-2213): Sort-merge joins to optimize very large joins
 * [SPARK-5100](https://issues.apache.org/jira/browse/SPARK-5100): Dedicated UI for the SQL JDBC server
 * [SPARK-6829](https://issues.apache.org/jira/browse/SPARK-6829): Mathematical functions in DataFrames
 * [SPARK-8299](https://issues.apache.org/jira/browse/SPARK-8299): Improved error message reporting for DataFrame and SQL
 * [SPARK-1442](https://issues.apache.org/jira/browse/SPARK-1442): Window functions in Spark SQL and DataFrames
 * [SPARK-6231](https://issues.apache.org/jira/browse/SPARK-6231) / [SPARK-7059](https://issues.apache.org/jira/browse/SPARK-7059): Improved API support for self joins
 * [SPARK-5947](https://issues.apache.org/jira/browse/SPARK-5947): Partitioning support in Spark’s data source API
 * [SPARK-7320](https://issues.apache.org/jira/browse/SPARK-7320): Rollup and cube functions
 * [SPARK-6117](https://issues.apache.org/jira/browse/SPARK-6117): Summary and descriptive statistics

### Spark ML/MLlib
Spark's ML pipelines API graduates from alpha in this release, with new transformers and improved
Python coverage. MLlib also adds several new algorithms.

 * [SPARK-5884](https://issues.apache.org/jira/browse/SPARK-5884): A variety of feature transformers for ML pipelines
 * [SPARK-7381](https://issues.apache.org/jira/browse/SPARK-7381): Python API for ML pipelines
 * [SPARK-5854](https://issues.apache.org/jira/browse/SPARK-5854): Personalized PageRank for GraphX
 * [SPARK-6113](https://issues.apache.org/jira/browse/SPARK-6113): Stabilize DecisionTree and ensembles APIs
 * [SPARK-7262](https://issues.apache.org/jira/browse/SPARK-7262): Binary LogisticRegression with L1/L2 (elastic net)
 * [SPARK-7015](https://issues.apache.org/jira/browse/SPARK-7015): OneVsRest multiclass to binary reduction
 * [SPARK-4588](https://issues.apache.org/jira/browse/SPARK-4588): Add API for feature attributes
 * [SPARK-1406](https://issues.apache.org/jira/browse/SPARK-1406): PMML model evaluation support via MLib
 * [SPARK-5995](https://issues.apache.org/jira/browse/SPARK-5995): Make ML Prediction Developer APIs public
 * [SPARK-3066](https://issues.apache.org/jira/browse/SPARK-3066): Support recommendAll in matrix factorization model
 * [SPARK-4894](https://issues.apache.org/jira/browse/SPARK-4894): Bernoulli naive Bayes
 * [SPARK-5563](https://issues.apache.org/jira/browse/SPARK-5563): LDA with online variational inference to the release note

### Spark Streaming
Spark streaming adds visual instrumentation graphs and significantly improved debugging information in the UI. It also enhances support for both Kafka and Kinesis. 

 * [SPARK-7602](https://issues.apache.org/jira/browse/SPARK-7602): Visualization and monitoring in the streaming UI including batch drill down ([SPARK-6796](https://issues.apache.org/jira/browse/SPARK-6796), [SPARK-6862](https://issues.apache.org/jira/browse/SPARK-6862))
 * [SPARK-7621](https://issues.apache.org/jira/browse/SPARK-7621): Better error reporting for Kafka
 * [SPARK-2808](https://issues.apache.org/jira/browse/SPARK-2808): Support for Kafka 0.8.2.1 and Kafka with Scala 2.11
 * [SPARK-5946](https://issues.apache.org/jira/browse/SPARK-5946): Python API for Kafka direct mode
 * [SPARK-7111](https://issues.apache.org/jira/browse/SPARK-7111): Input rate tracking for Kafka
 * [SPARK-5960](https://issues.apache.org/jira/browse/SPARK-5960): Support for transferring AWS credentials to Kinesis
 * [SPARK-7056](https://issues.apache.org/jira/browse/SPARK-7056) A pluggable interface for write ahead logs

### Known Issues
This release has few known issues which will be addressed in Spark 1.4.1

 * Python sortBy()/sortByKey() can hang if a single partition is larger than worker memory [SPARK-8202](https://issues.apache.org/jira/browse/SPARK-8202)
 * Unintended behavior change of JSON schema inference [SPARK-8093](https://issues.apache.org/jira/browse/SPARK-8093)
 * Some ML pipleline components do not correctly implement copy [SPARK-8151](https://issues.apache.org/jira/browse/SPARK-8151)
 * Spark-ec2 branch pointer is wrong [SPARK-8310](https://issues.apache.org/jira/browse/SPARK-8310)

### Credits

#### Test Partners

Thanks to The following organizations, who helped benchmark or integration test release candidates: <br> Intel, Palantir, Cloudera, Mesosphere, Huawei, Shopify, Netflix, Yahoo, UC Berkeley and Databricks. 

#### Contributors
 * Aaron Davidson -- Bug fixes in Core, Shuffle, and YARN
 * Aaron Josephs -- New features in Core
 * Adam Budde -- Bug fixes in SQL
 * Ai He -- Improvements in MLlib
 * Andrew Or -- Bug fixes in Core
 * Andrew Or -- Improvements in Core and YARN; bug fixes in Core, Web UI, Streaming, tests, and SQL; improvement in Streaming, Web UI, Core, and SQL
 * Andrey Zagrebin -- Improvement in SQL
 * Antonio Piccolboni -- New features in SparkR
 * Arsenii Krasikov -- Bug fixes in Core
 * Ashutosh Raina -- New features in SparkR
 * Ashwin Shankar -- Bug fixes in YARN
 * Augustin Borsu -- New features in MLlib
 * Ben Fradet -- Documentation in Core and Streaming
 * Benedikt Linse -- Documentation in Core
 * Bill Chambers -- Documentation in Core
 * Brennon York -- Improvements in Project Infra, Core, GraphX, and tests; bug fixes in Core
 * Bryan Cutler -- Bug fixes in Core
 * Burak Yavuz -- Test in spark submit; improvements in Core and Streaming; new features in MLlib and PySpark; bug fixes in Core, tests, and spark submit; improvement in SQL, MLlib, and PySpark
 * Calvin Jia -- Improvements and documentation in Core
 * Chen Song -- Bug fixes and improvement in SQL
 * Cheng Chang -- New features in EC2
 * Cheng Hao -- Improvements, new features, bug fixes, and improvement in SQL
 * Cheng Lian -- Bug fixes in SQL
 * Cheng Lian -- Improvements in Core and SQL; documentation in Core and SQL; bug fixes in Core and SQL; improvement in SQL
 * Cheolsoo Park -- Wish in YARN; improvements in Core and spark submit; bug fixes in Core
 * Chris Freeman -- New features in SparkR
 * Chet Mancini -- Improvements in Core and SQL
 * Chris Heller -- New features in Mesos
 * Christophe Preaud -- Documentation in Core and YARN
 * Cody Koeninger -- Bug fixes in Streaming; improvement in Core
 * DB Tsai -- Improvements, new features, and bug fixes in MLlib
 * DEBORAH SIEGEL -- Documentation in Core
 * Dan McClary -- New features in GraphX
 * Dan Putler -- New features in SparkR
 * Daoyuan Wang -- Improvements in tests and SQL; new features in SQL; bug fixes in SQL; improvement in MLlib and SQL
 * David McGuire -- Bug fixes in Streaming
 * Davies Liu -- Improvements in SQL and PySpark; new features in Core and SparkR; bug fixes in Streaming, tests, PySpark, SparkR, and SQL; improvement in Core and SQL
 * Davies Liu -- New features in SparkR
 * Dean Chen -- Improvements in Core; new features in YARN; bug fixes in Core and YARN
 * Debasish Das -- New features in MLlib
 * Deborah Siegel -- Improvements in Core
 * Doing Done -- Improvements in SQL; bug fixes in Core and SQL
 * Dong Xu -- Bug fixes in SQL
 * Doug Balog -- Bug fixes in spark submit, YARN, and SQL
 * Edward T -- New features in SparkR
 * Elisey Zanko -- Bug fixes in MLlib and PySpark
 * Emre Sevinc -- Improvements in Streaming
 * Eric Chiang -- Documentation in Core
 * Erik Van Oosten -- Bug fixes in Core
 * Evan Jones -- Bug fixes in Core
 * Evan Yu -- Bug fixes in Core
 * Evert Lammerts -- New features in SparkR
 * Favio Vazquez -- Build fixes in Core; documentation in Core and MLlib
 * Felix Cheung -- SparkR Documentation
 * Florian Verhein -- Improvements and new features in EC2
 * Gaurav Nanda -- Documentation in Core
 * Glenn Weidner -- Documentation in MLlib and PySpark
 * Guancheng (G.C.) Chen -- Improvements in Core
 * Guancheng Chen -- Improvements in Core
 * Guo Wei -- Bug fixes and window function feature in SQL
 * GuoQiang Li -- New features in Core; bug fixes in Core and YARN
 * Haiyang Sea -- Improvements in SQL
 * Hangchen Yu -- Documentation in GraphX
 * Hao Lin -- Improvements and new features in SparkR
 * Hari Shreedharan -- Test in Streaming and tests; new features in YARN; bug fixes in Web UI
 * Harihar Nahak -- New features in SparkR
 * Holden Karau -- Improvements in Core, MLlib, and PySpark; bug fixes in PySpark
 * Hossein Falaki -- SparkR Documentation
 * Hong Shen -- Bug fixes in Core and YARN
 * Hrishikesh Subramonian -- Improvements in MLlib and PySpark
 * Hung Lin -- Bug fixes in scheduler
 * Ilya Ganelin -- Improvements in Core; new features in Core; bug fixes in Core and Shuffle; improvement in Core
 * Imran Rashid -- Improvements in Web UI; bug fixes in Core and Web UI
 * Isaias Barroso -- Bug fixes in Core
 * Iulian Dragos -- Bug fixes in Core and SQL; improvement in Core, Shuffle, and Mesos
 * Jacek Lewandowski -- Bug fixes in Core
 * Jacky Li -- Improvements in SQL
 * Jaonary Rabarisoa -- Improvements in MLlib
 * Jayson Sunshine -- Documentation in Core
 * Jean Lyn -- Bug fixes in SQL
 * Jeff Harrison -- Improvements in SparkR
 * Jeremy A. Lucas -- Improvements in Streaming
 * Jeremy Freeman -- Bug fixes in Streaming and MLlib
 * Jim Carroll -- Bug fixes in MLlib
 * Jin Adachi -- Bug fixes in SQL
 * Jongyoul Lee -- Improvements in Core and Mesos; bug fixes in Core
 * Joseph K. Bradley -- Improvements in MLlib; documentation in PySpark, Core, SQL, MLlib, and Streaming; new features in MLlib; bug fixes in Java API, Core, MLlib, and PySpark; improvement in MLlib and PySpark
 * Josh Rosen -- Improvements in Core and SQL; new features in Core, Shuffle, and SQL; bug fixes in Core, tests, Shuffle, Streaming, scheduler, SQL, and Java API; improvement in Core and Shuffle
 * Judy Nash -- Bug fixes in Windows and spark submit
 * Judy Nash -- Improvements in Core
 * Juliet Hougland -- Improvements in MLlib
 * June He -- Bug fixes in Core and tests
 * Kai Sasaki -- Documentation in Core and MLlib; improvements in MLlib and PySpark; bug fixes in MLlib and PySpark; improvement in MLlib and PySpark
 * Kalle Jepsen -- Improvements in PySpark and SQL; bug fixes in PySpark; improvement in PySpark
 * Kamil Smuga -- Bug fixes in Core and PySpark
 * Kay Ousterhout -- Improvements in Core, Web UI, and Shuffle; bug fixes in Project Infra, Core, Web UI, and tests
 * Kevin (Sangwoo) Kim -- Bug fixes in Core
 * Kirill A. Korinskiy -- New features in MLlib
 * Kousuke Saruta -- Improvements in Streaming, Web UI, and tests; bug fixes in Web UI, scheduler, tests, and YARN; improvement in Web UI
 * LCY Vincent -- Documentation in Core
 * Leah McGuire -- Improvements and new features in MLlib
 * Lev Khomich -- Improvements in Core
 * Liang-Chi Hsieh -- Improvements in MLlib and SQL; improvement in MLlib; new features in SQL; bug fixes in Core, Shuffle, PySpark, MLlib, SQL, and spark submit; documentation in Core and MLlib
 * Liangliang Gu -- Improvements in Core and Web UI; bug fixes in Web UI
 * Lianhui Wang -- Improvements in GraphX; bug fixes in PySpark
 * Liu Chang -- Improvements in EC2
 * Lomig Megard -- Documentation in Core
 * Madhukara Phatak -- Documentation in SQL
 * Manoj Kumar -- Improvements in MLlib; new features in SQL, MLlib, and PySpark; bug fixes in Streaming, MLlib, and SQL; improvement in MLlib and PySpark
 * Marcelo Vanzin -- Improvements in Core; bug fixes in Core, tests, Shuffle, YARN, Streaming, and spark submit; improvement in Core
 * Mark Bittmann -- Bug fixes in MLlib
 * Marko Bonaci -- Documentation in Core
 * Masaru Dobashi -- Documentation in Core
 * Masayoshi TSUZUKI -- Bug fixes in Windows and Core
 * Matei Zaharia -- Improvement in Web UI
 * Matt Aasted -- Bug fixes in EC2
 * Matt Massie -- New features in SparkR
 * Matt Wise -- Documentation in Core
 * Matthew Cheah -- Improvements and new features in Core
 * Matthew Goodman -- Bug fixes in EC2 and PySpark
 * Max Seiden -- Bug fixes in SQL
 * Meethu Mathew -- Bug fixes in MLlib and PySpark
 * Michael Armbrust -- Documentation in Core; new features in SQL; improvements in SQL; bug fixes in SQL; improvement in Core and SQL
 * Michael Griffiths -- Bug fixes in Windows and Core
 * Michael Malak -- Bug fixes in GraphX
 * Michael Nazario -- Bug fixes in tests and PySpark
 * Michelangelo D'Agostino -- Bug fixes in EC2
 * Michelle Casbon -- Improvements in Project Infra
 * Miguel Peralvo -- Improvements in EC2
 * Mike Dusenberry -- Improvements in Core and MLlib; documentation in Core; bug fixes in Core and MLlib
 * Milan Straka -- Bug fixes in Core and PySpark
 * Misha Chernetsov -- Improvements in Core and SQL
 * Mridul Muralidharan -- Improvements in Core and Shuffle
 * Nan Zhu -- Improvements in Core and tests; bug fixes in Core and SQL
 * Nathan Howell -- Improvements and new features in SQL
 * Nathan Kronenfeld -- Bug fixes in Core
 * Nathan McCarthy -- Bug fixes in Core
 * Nicholas Chammas -- Improvements in Core and EC2; bug fixes in EC2
 * Nishkam Ravi -- Improvements in Core; documentation in Core; bug fixes in Core and YARN
 * Nobuyuki Kuromatsu -- Bug fixes in MLlib
 * Octavian Geagla -- Improvements in MLlib; documentation in Java API, Core, and MLlib
 * Oleg Sidorkin -- Bug fixes in SQL
 * Oleksii Kostyliev -- Bug fixes in Core
 * Olivier Girardot -- Improvements in Java API and SQL; bug fixes in Core; improvement in PySpark and SQL
 * Omede Firouz -- Improvements in MLlib; new features in MLlib and PySpark
 * Oscar Olmedo -- New features in SparkR
 * Pankaj Arora -- Bug fixes in Core
 * Patrick Wendell -- Test in spark submit; improvements in Core and Shuffle; bug fixes in tests and SQL
 * Pei-Lun Lee -- Improvements and bug fixes in SQL
 * Peter Parente -- Improvements in Core
 * Peter Rudenko -- Documentation in Core
 * Pierre Borckmans -- Documentation in Core and EC2
 * Prabeesh K -- Improvements in Streaming
 * Pradeep Chanumolu -- Improvements in Core
 * Prashant Sharma -- Improvements and bug fixes in Core
 * Punya Biswal -- Improvements in SQL; bug fixes in Core
 * Punyashloka Biswal -- Build fixes in Core
 * Qian Huang -- New features and improvement in SparkR
 * Qiping Li -- Bug fixes in Core
 * Rajendra Gokhale (rvgcentos) -- Improvements in Core
 * Rakesh Chalasani -- Improvement in SQL
 * Ram Sriharsha -- Improvements in Core, MLlib, and PySpark; new features in MLlib; documentation in Core and MLlib
 * Rekha Joshi -- Improvements in SparkR
 * Rene Treffer -- Improvements in SQL
 * Rex Xiong -- Improvements in Core
 * Reynold Xin -- Improvements in Project Infra, Core, tests, PySpark, and SQL; documentation in Core; bug fixes in Core and MLlib; improvement in Project Infra, Core, GraphX, and SQL
 * Reza Zadeh -- Improvements in MLlib
 * Ryan Hafen -- New features in SparkR
 * Ryan Williams -- Improvements in Core
 * Saisai Shao -- Test in Streaming and tests; improvements in Core, PySpark, YARN, and Streaming; new features in Web UI; bug fixes in Web UI and YARN; improvement in Streaming
 * Saleem Ansari -- Documentation in Core and MLlib
 * Sandy Ryza -- Improvements in Core, Shuffle, and MLlib; documentation in Core and MLlib; bug fixes in Core and YARN; improvement in MLlib
 * Santiago M. Mola -- Improvements in SQL; bug fixes in SQL; documentation in Core
 * Sasaki Toru -- Improvements in Core and GraphX
 * Sean Owen -- Documentation in Core; improvements in Core, tests, MLlib, Streaming, SQL, and Web UI; bug fixes in Project Infra, Core, tests, Windows, SQL, GraphX, and Web UI; improvement in Core
 * Sephiroth Lin -- Improvements in SparkR, Core, scheduler, YARN, and PySpark; bug fixes in SQL
 * Shekhar Bansal -- Improvements in YARN; bug fixes in Web UI
 * Sheng Li -- Bug fixes in SQL
 * Shiti Saxena -- Improvement in SQL
 * Shivaram Venkataraman -- Improvements in SparkR and EC2; new features in Core and SparkR; bug fixes in SparkR; improvement in SparkR
 * Shixiong Zhu -- Test in Streaming, tests, and Core; improvement in Streaming, Web UI, and Core; improvements in Streaming, Web UI, and Core; bug fixes in Core, tests, MLlib, YARN, Streaming, scheduler, and Web UI; documentation in Core and Streaming
 * Shuai Zheng -- Bug fixes in SQL
 * Shuo Xiang -- New features in Core; bug fixes in MLlib
 * Stephen Boesch -- Bug fixes in MLlib
 * Stephen Haberman -- Bug fixes in Core
 * Steve Loughran -- Improvements in Core, Web UI, and SQL; bug fixes in Core and YARN
 * Steven She -- Bug fixes in Core
 * Su Yan -- Bug fixes in Core
 * Sun Rui -- Improvements in SparkR; new features in SparkR and SQL; bug fixes in SparkR; improvement in SparkR
 * Taka Shinagawa -- Documentation in Core
 * Takeshi YAMAMURO -- Improvements in GraphX and SQL
 * Tathagata Das -- Test in Streaming and tests; improvements in Streaming and Core; new features in Streaming and SQL; bug fixes in Project Infra, Streaming, and Core
 * Ted Yu -- Improvements in Core; bug fixes in Core and PySpark
 * Theodore Vasiloudis -- Improvements in Core; bug fixes in Core and EC2
 * Thomas Graves -- Bug fixes in Core
 * Tijo Thomas -- Improvements in Core; bug fixes in Core and SQL
 * Tim Ellison -- Bug fixes in Core
 * Timothy Chen -- Improvements in spark submit and Mesos; bug fixes in spark submit and Mesos
 * Tingjun Xu -- Improvements in Streaming
 * Todd Gao -- SparkR
 * Venkata Ramana Gollamudi -- Improvements and bug fixes in SQL
 * Vidmantas Zemleris -- Improvements in SQL
 * Vincenzo Selvaggio -- Documentation and new features in MLlib
 * Vinod K C -- Improvements in Shuffle and scheduler; bug fixes in Core and SQL
 * Vinod KC -- Bug fixes in Core and SQL
 * Volodymyr Lyubinets -- Improvements and bug fixes in SQL
 * Vyacheslav Baranov -- Bug fixes in SQL
 * Wang Fei -- Improvements, new features, and bug fixes in SQL
 * Wang Tao -- Improvements in Core, YARN, and SQL; new features in spark submit; bug fixes in Core, spark submit, and SQL
 * Wenchen Fan -- Improvements in Core; documentation in Core; bug fixes in SQL; improvement in SQL
 * Wesley Miao -- Bug fixes in Streaming
 * Xiangrui Meng -- New features in SQL, MLlib, and PySpark; umbrella in MLlib; documentation in PySpark, Core, SQL, MLlib, and Streaming; improvement in Core, SQL, MLlib, and PySpark; build fixes in GraphX and MLlib; improvements in Core, SQL, MLlib, and PySpark; bug fixes in Java API, Web UI, SQL, MLlib, and PySpark
 * Xu Kun -- New features in Core
 * Xusen Yin -- Documentation in Core and MLlib; improvement in MLlib
 * Yadong Qi -- Improvements and bug fixes in SQL
 * Yanbo Liang -- Improvements in Core, MLlib, and PySpark; new features in MLlib and PySpark; bug fixes in MLlib and SQL; improvement in MLlib and PySpark
 * Yash Datta -- Improvements and bug fixes in SQL
 * Ye Xianjin -- Bug fixes in Core
 * Yi Lu -- New features in SparkR
 * Yi Tian -- New features in Web UI and SQL; bug fixes in SQL
 * Yin Huai -- Improvements in tests and SQL; new features in SQL; bug fixes in Core and SQL; improvement in Core and SQL
 * Yong Tang -- Bug fixes in Core
 * Yu ISHIKAWA -- Improvements in MLlib
 * Yuhao Yang -- Improvements in Core and MLlib; new features in MLlib; documentation in Core and MLlib
 * Yuri Saito -- Bug fixes in SQL
 * Zhan Zhang -- Improvements in Core; new features in Core and SQL
 * Zhang, Liye -- Documentation in Core; bug fixes in Core and Web UI
 * Zhichao Li -- Bug fixes in Streaming, Web UI, and Core
 * Zhichao Zhang -- Improvements in SQL; bug fixes in Streaming; documentation in Core
 * Zhongshuai Pei -- Improvements and bug fixes in SQL
 * Zoltan Zvara -- Bug fixes in Core and YARN
 * Zongheng Yang -- New features in SparkR

_Thanks to everyone who contributed!_
