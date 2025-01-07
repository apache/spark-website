---
layout: global
title: Third-Party Projects
type: "page singular"
navigation:
  weight: 5
  show: true
---

This page tracks external software projects that supplement Apache Spark and add to its ecosystem.

## Popular libraries with PySpark integrations

- [great-expectations](https://github.com/great-expectations/great_expectations) - Always know what to expect from your data
- [Apache Airflow](https://github.com/apache/airflow) - A platform to programmatically author, schedule, and monitor workflows
- [xgboost](https://github.com/dmlc/xgboost) - Scalable, portable and distributed gradient boosting
- [shap](https://github.com/shap/shap) - A game theoretic approach to explain the output of any machine learning model
- [python-deequ](https://github.com/awslabs/python-deequ) - Measures data quality in large datasets
- [datahub](https://github.com/datahub-project/datahub) - Metadata platform for the modern data stack
- [dbt-spark](https://github.com/dbt-labs/dbt-spark) - Enables dbt to work with Apache Spark
- [Hamilton](https://github.com/DAGWorks-Inc/hamilton) - Enables one to declaratively describe PySpark transformations that helps keep code testable, modular, and logically visualizable. 

## Connectors

- [spark-redshift](https://github.com/spark-redshift-community/spark-redshift) - Performant Redshift data source for Apache Spark
- [spark-sql-connector](https://github.com/microsoft/sql-spark-connector) - Apache Spark Connector for SQL Server and Azure SQL
- [azure-cosmos-spark](https://github.com/Azure/azure-cosmosdb-spark) - Apache Spark Connector for Azure Cosmos DB
- [azure-event-hubs-spark](https://github.com/Azure/azure-event-hubs-spark) - Enables continuous data processing with Apache Spark and Azure Event Hubs
- [azure-kusto-spark](https://github.com/Azure/azure-kusto-spark) - Apache Spark connector for Azure Kusto 
- [mongo-spark](https://github.com/mongodb/mongo-spark) - The MongoDB Spark connector
- [couchbase-spark-connector](https://github.com/couchbase/couchbase-spark-connector) - The Official Couchbase Spark connector
- [spark-cassandra-connector](https://github.com/datastax/spark-cassandra-connector) - DataStax connector for Apache Spark to Apache Cassandra
- [elasticsearch-hadoop](https://github.com/elastic/elasticsearch-hadoop) - Elasticsearch real-time search and analytics natively integrated with Spark
- [neo4j-spark-connector](https://github.com/neo4j-contrib/neo4j-spark-connector) - Neo4j Connector for Apache Spark
- [starrocks-connector-for-apache-spark](https://github.com/StarRocks/starrocks-connector-for-apache-spark) - StarRocks Apache Spark connector
- [tispark](https://github.com/pingcap/tispark) - TiSpark is built for running Apache Spark on top of TiDB/TiKV
- [spark-pdf](https://stabrise.com/spark-pdf/) - PDF Datasource for Apache Spark


## Open table formats

- <a href="https://delta.io">Delta Lake</a> - Storage layer that provides ACID transactions and scalable metadata handling for Apache Spark workloads
- [Hudi](https://github.com/apache/hudi): Upserts, Deletes And Incremental Processing on Big Data
- [Iceberg](https://github.com/apache/iceberg) - Open table format for analytic datasets

<h2>Infrastructure projects</h2>

- [Kyuubi](https://github.com/apache/kyuubi) - Apache Kyuubi is a distributed and multi-tenant gateway to provide serverless SQL on data warehouses and lakehouses
- <a href="https://github.com/spark-jobserver/spark-jobserver">REST Job Server for Apache Spark</a> - REST interface for managing and submitting Spark jobs on the same cluster.
- <a href="https://mesos.apache.org/">Apache Mesos</a> - Cluster management system that supports 
running Spark
- <a href="https://www.alluxio.org/">Alluxio</a> (née Tachyon) - Memory speed virtual distributed 
storage system that supports running Spark    
- <a href="https://github.com/filodb/FiloDB">FiloDB</a> - a Spark integrated analytical/columnar 
database, with in-memory option capable of sub-second concurrent queries
- <a href="http://zeppelin-project.org/">Zeppelin</a> - Multi-purpose notebook which supports 20+ language backends, including Apache Spark
- <a href="https://github.com/kubeflow/spark-operator">Kubeflow Spark Operator</a> - Kubernetes operator for managing the lifecycle of Apache Spark applications on Kubernetes.
- <a href="https://developer.ibm.com/storage/products/ibm-spectrum-conductor-spark/">IBM Spectrum Conductor</a> - Cluster management software that integrates with Spark and modern computing frameworks.
- <a href="https://mlflow.org">MLflow</a> - Open source platform to manage the machine learning lifecycle, including deploying models from diverse machine learning libraries on Apache Spark.
- <a href="https://datafu.apache.org/docs/spark/getting-started.html">Apache DataFu</a> - A collection of utils and user-defined-functions for working with large scale data in Apache Spark, as well as making Scala-Python interoperability easier.

<h2>Applications using Spark</h2>

- <a href="https://mahout.apache.org/">Apache Mahout</a> - Previously on Hadoop MapReduce, 
Mahout has switched to using Spark as the backend
- <a href="https://github.com/bigdatagenomics/adam">ADAM</a> - A framework and CLI for loading, 
transforming, and analyzing genomic data using Apache Spark
- <a href="https://github.com/salesforce/TransmogrifAI">TransmogrifAI</a> - AutoML library for building modular, reusable, strongly typed machine learning workflows on Spark with minimal hand tuning
- <a href="https://github.com/JohnSnowLabs/spark-nlp">Natural Language Processing for Apache Spark</a> - A library to provide simple, performant, and accurate NLP annotations for machine learning pipelines
- <a href="http://rumbledb.org">Rumble for Apache Spark</a> - A JSONiq engine to query, with a functional language, large, nested, and heterogeneous JSON datasets that do not fit in dataframes.

<h2>Performance, monitoring, and debugging tools for Spark</h2>

- <a href="https://www.datamechanics.co/delight">Data Mechanics Delight</a> - Delight is a free, hosted, cross-platform Spark UI alternative backed by an open-source Spark agent. It features new metrics and visualizations to simplify Spark monitoring and performance tuning.
- <a href="https://github.com/dataflint/spark">DataFlint</a> - DataFlint is A Spark UI replacement installed via an open-source library, which updates in real-time and alerts on performance issues

<h2>Additional language bindings</h2>

<h3>C# / .NET</h3>

- <a href="https://github.com/Microsoft/Mobius">Mobius</a>: C# and F# language binding and extensions to Apache Spark

<h3>Clojure</h3>

- <a href="https://github.com/zero-one-group/geni">Geni</a> - A Clojure dataframe library that runs on Apache Spark with a focus on optimizing the REPL experience.

<h3>Julia</h3>

- <a href="https://github.com/dfdx/Spark.jl">Spark.jl</a>

<h3>Kotlin</h3>

- <a href="https://github.com/JetBrains/kotlin-spark-api">Kotlin for Apache Spark</a>

## Adding new projects

To add a project, open a pull request against the [spark-website](https://github.com/apache/spark-website)  repository. Add an entry to  [this markdown file](https://github.com/apache/spark-website/blob/asf-site/third-party-projects.md),  then run `jekyll build` to generate the HTML too. Include both in your pull request. See the README in this repo for more information.

Note that all project and product names should follow [trademark guidelines](/trademarks.html).
