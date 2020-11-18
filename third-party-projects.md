---
layout: global
title: Third-Party Projects
type: "page singular"
navigation:
  weight: 5
  show: true
---

This page tracks external software projects that supplement Apache Spark and add to its ecosystem.

To add a project, open a pull request against the [spark-website](https://github.com/apache/spark-website) 
repository. Add an entry to 
[this markdown file](https://github.com/apache/spark-website/blob/asf-site/third-party-projects.md), 
then run `jekyll build` to generate the HTML too. Include
both in your pull request. See the README in this repo for more information.

Note that all project and product names should follow [trademark guidelines](/trademarks.html).

<h2>spark-packages.org</h2>

<a href="https://spark-packages.org/">spark-packages.org</a> is an external, 
community-managed list of third-party libraries, add-ons, and applications that work with 
Apache Spark. You can add a package as long as you have a GitHub repository.

<h2>Infrastructure Projects</h2>

- <a href="https://github.com/spark-jobserver/spark-jobserver">REST Job Server for Apache Spark</a> - 
REST interface for managing and submitting Spark jobs on the same cluster 
(see <a href="http://engineering.ooyala.com/blog/open-sourcing-our-spark-job-server">blog post</a> 
for details)
- <a href="http://mlbase.org/">MLbase</a> - Machine Learning research project on top of Spark
- <a href="https://mesos.apache.org/">Apache Mesos</a> - Cluster management system that supports 
running Spark
- <a href="https://www.alluxio.org/">Alluxio</a> (née Tachyon) - Memory speed virtual distributed 
storage system that supports running Spark    
- <a href="https://github.com/filodb/FiloDB">FiloDB</a> - a Spark integrated analytical/columnar 
database, with in-memory option capable of sub-second concurrent queries
- <a href="http://zeppelin-project.org/">Zeppelin</a> - Multi-purpose notebook which supports 20+ language backends,
including Apache Spark
- <a href="https://github.com/EclairJS/eclairjs-node">EclairJS</a> - enables Node.js developers to code
against Spark, and data scientists to use Javascript in Jupyter notebooks.
- <a href="https://github.com/Hydrospheredata/mist">Mist</a> - Serverless proxy for Spark cluster (spark middleware)
- <a href="https://github.com/GoogleCloudPlatform/spark-on-k8s-operator">K8S Operator for Apache Spark</a> - Kubernetes operator for specifying and managing the lifecycle of Apache Spark applications on Kubernetes.
- <a href="https://developer.ibm.com/storage/products/ibm-spectrum-conductor-spark/">IBM Spectrum Conductor</a> - Cluster management software that integrates with Spark and modern computing frameworks.
- <a href="https://delta.io">Delta Lake</a> - Storage layer that provides ACID transactions and scalable metadata handling for Apache Spark workloads.
- <a href="https://mlflow.org">MLflow</a> - Open source platform to manage the machine learning lifecycle, including deploying models from diverse machine learning libraries on Apache Spark.
- <a href="https://github.com/databricks/koalas">Koalas</a> - Data frame API on Apache Spark that more closely follows Python's pandas.
- <a href="https://datafu.apache.org/docs/spark/getting-started.html">Apache DataFu</a> - A collection of utils and user-defined-functions for working with large scale data in Apache Spark, as well as making Scala-Python interoperability easier.

<h2>Applications Using Spark</h2>

- <a href="https://mahout.apache.org/">Apache Mahout</a> - Previously on Hadoop MapReduce, 
Mahout has switched to using Spark as the backend
- <a href="https://wiki.apache.org/mrql/">Apache MRQL</a> - A query processing and optimization 
system for large-scale, distributed data analysis, built on top of Apache Hadoop, Hama, and Spark
- <a href="http://blinkdb.org/">BlinkDB</a> - a massively parallel, approximate query engine built 
on top of Shark and Spark
- <a href="https://github.com/adobe-research/spindle">Spindle</a> - Spark/Parquet-based web 
analytics query engine
- <a href="https://github.com/thunderain-project/thunderain">Thunderain</a> - a framework 
for combining stream processing with historical data, think Lambda architecture
- <a href="https://github.com/AyasdiOpenSource/df">DF</a> from Ayasdi - a Pandas-like data frame 
implementation for Spark
- <a href="https://github.com/OryxProject/oryx">Oryx</a> -  Lambda architecture on Apache Spark, 
Apache Kafka for real-time large scale machine learning
- <a href="https://github.com/bigdatagenomics/adam">ADAM</a> - A framework and CLI for loading, 
transforming, and analyzing genomic data using Apache Spark
- <a href="https://github.com/salesforce/TransmogrifAI">TransmogrifAI</a> - AutoML library for building modular, reusable, strongly typed machine learning workflows on Spark with minimal hand tuning
- <a href="https://github.com/JohnSnowLabs/spark-nlp">Natural Language Processing for Apache Spark</a> - A library to provide simple, performant, and accurate NLP annotations for machine learning pipelines
- <a href="http://rumbledb.org">Rumble for Apache Spark</a> - A JSONiq engine to query, with a functional language, large, nested, and heterogeneous JSON datasets that do not fit in dataframes.

<h2>Performance, Monitoring, and Debugging Tools for Spark</h2>

- <a href="https://github.com/g1thubhub/phil_stopwatch">Performance and debugging library</a> - A library to analyze Spark and PySpark applications for improving performance and finding the cause of failures
- <a href="https://www.datamechanics.co/delight">Data Mechanics Delight</a> - Delight is a free, hosted, cross-platform Spark UI alternative backed by an open-source Spark agent. It features new metrics and visualizations to simplify Spark monitoring and performance tuning.

<h2>Additional Language Bindings</h2>

<h3>C# / .NET</h3>

- <a href="https://github.com/Microsoft/Mobius">Mobius</a>: C# and F# language binding and extensions to Apache Spark

<h3>Clojure</h3>

- <a href="https://github.com/TheClimateCorporation/clj-spark">clj-spark</a>
- <a href="https://github.com/zero-one-group/geni">Geni</a> - A Clojure dataframe library that runs on Apache Spark with a focus on optimizing the REPL experience.

<h3>Groovy</h3>

- <a href="https://github.com/bunions1/groovy-spark-example">groovy-spark-example</a>

<h3>Julia</h3>

- <a href="https://github.com/dfdx/Spark.jl">Spark.jl</a>

<h3>Kotlin</h3>

- <a href="https://github.com/JetBrains/kotlin-spark-api">Kotlin for Apache Spark</a>
