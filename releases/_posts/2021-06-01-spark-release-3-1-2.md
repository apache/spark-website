---
layout: post
title: Spark Release 3.1.2
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.1.2 is a maintenance release containing stability fixes. This release is based on the branch-3.1 maintenance branch of Spark. We strongly recommend all 3.1 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-32924]](https://issues.apache.org/jira/browse/SPARK-32924): Web UI sort on duration is wrong
  - [[SPARK-33482]](https://issues.apache.org/jira/browse/SPARK-33482): V2 Datasources that extend FileScan preclude exchange reuse
  - [[SPARK-34361]](https://issues.apache.org/jira/browse/SPARK-34361): Dynamic allocation on K8s kills executors with running tasks
  - [[SPARK-34392]](https://issues.apache.org/jira/browse/SPARK-34392): Invalid ID for offset-based ZoneId since Spark 3.0
  - [[SPARK-34417]](https://issues.apache.org/jira/browse/SPARK-34417): DataFrameNaFunctions.fillMap(values: Seq[(String, Any)]) fails for column name having a dot
  - [[SPARK-34436]](https://issues.apache.org/jira/browse/SPARK-34436): DPP support LIKE ANY/ALL
  - [[SPARK-34473]](https://issues.apache.org/jira/browse/SPARK-34473): Avoid NPE in DataFrameReader.schema(StructType)
  - [[SPARK-34482]](https://issues.apache.org/jira/browse/SPARK-34482): Correct the active SparkSession for streaming query
  - [[SPARK-34490]](https://issues.apache.org/jira/browse/SPARK-34490): Table maybe resolved as a view if the table is dropped
  - [[SPARK-34497]](https://issues.apache.org/jira/browse/SPARK-34497): JDBC connection provider is not removing kerberos credentials from JVM security context
  - [[SPARK-34504]](https://issues.apache.org/jira/browse/SPARK-34504): Avoid unnecessary view resolving and remove the `performCheck` flag
  - [[SPARK-34515]](https://issues.apache.org/jira/browse/SPARK-34515): Fix NPE if InSet contains null value during getPartitionsByFilter
  - [[SPARK-34534]](https://issues.apache.org/jira/browse/SPARK-34534): New protocol FetchShuffleBlocks in OneForOneBlockFetcher lead to data loss or correctness
  - [[SPARK-34543]](https://issues.apache.org/jira/browse/SPARK-34543): Respect case sensitivity in V1 ALTER TABLE .. SET LOCATION
  - [[SPARK-34545]](https://issues.apache.org/jira/browse/SPARK-34545): Fix inconsistent results when applying 2 Python UDFs with different return type to 2 columns together
  - [[SPARK-34547]](https://issues.apache.org/jira/browse/SPARK-34547): Resolve using child metadata attributes as fallback
  - [[SPARK-34550]](https://issues.apache.org/jira/browse/SPARK-34550): Skip InSet null value during push filter to Hive metastore
  - [[SPARK-34555]](https://issues.apache.org/jira/browse/SPARK-34555): Resolve metadata output from DataFrame
  - [[SPARK-34556]](https://issues.apache.org/jira/browse/SPARK-34556): Checking duplicate static partition columns doesn't respect case sensitive conf
  - [[SPARK-34561]](https://issues.apache.org/jira/browse/SPARK-34561): Cannot drop/add columns from/to a dataset of v2 `DESCRIBE TABLE`
  - [[SPARK-34567]](https://issues.apache.org/jira/browse/SPARK-34567): CreateTableAsSelect should have metrics update too
  - [[SPARK-34577]](https://issues.apache.org/jira/browse/SPARK-34577): Cannot drop/add columns from/to a dataset of v2 `DESCRIBE NAMESPACE`
  - [[SPARK-34584]](https://issues.apache.org/jira/browse/SPARK-34584): When insert into a partition table with a illegal partition value, DSV2 behavior different as others
  - [[SPARK-34596]](https://issues.apache.org/jira/browse/SPARK-34596): NewInstance.doGenCode should not throw malformed class name error
  - [[SPARK-34599]](https://issues.apache.org/jira/browse/SPARK-34599): INSERT INTO OVERWRITE doesn't support partition columns containing dot for DSv2
  - [[SPARK-34607]](https://issues.apache.org/jira/browse/SPARK-34607): NewInstance.resolved should not throw malformed class name error
  - [[SPARK-34610]](https://issues.apache.org/jira/browse/SPARK-34610): Fix Python UDF used in GroupedAggPandasUDFTests
  - [[SPARK-34613]](https://issues.apache.org/jira/browse/SPARK-34613): Fix view does not capture disable hint config
  - [[SPARK-34630]](https://issues.apache.org/jira/browse/SPARK-34630): Add type hints of pyspark.__version__ and pyspark.sql.Column.contains
  - [[SPARK-34639]](https://issues.apache.org/jira/browse/SPARK-34639): Always remove unnecessary Alias in Analyzer.resolveExpression
  - [[SPARK-34674]](https://issues.apache.org/jira/browse/SPARK-34674): Spark app on k8s doesn't terminate without call to sparkContext.stop() method
  - [[SPARK-34681]](https://issues.apache.org/jira/browse/SPARK-34681): Full outer shuffled hash join when building left side produces wrong result
  - [[SPARK-34682]](https://issues.apache.org/jira/browse/SPARK-34682): Regression in "operating on canonicalized plan" check in CustomShuffleReaderExec
  - [[SPARK-34697]](https://issues.apache.org/jira/browse/SPARK-34697): Allow DESCRIBE FUNCTION and SHOW FUNCTIONS explain about string concatenation operator
  - [[SPARK-34713]](https://issues.apache.org/jira/browse/SPARK-34713): Group by CreateStruct with ExtractValue fails analysis
  - [[SPARK-34714]](https://issues.apache.org/jira/browse/SPARK-34714): collect_list(struct()) fails when used with GROUP BY
  - [[SPARK-34719]](https://issues.apache.org/jira/browse/SPARK-34719): Fail if the view query has duplicated column names
  - [[SPARK-34723]](https://issues.apache.org/jira/browse/SPARK-34723): Correct parameter type for subexpression elimination under whole-stage
  - [[SPARK-34724]](https://issues.apache.org/jira/browse/SPARK-34724): Fix Interpreted evaluation by using getClass.getMethod instead of getDeclaredMethod
  - [[SPARK-34727]](https://issues.apache.org/jira/browse/SPARK-34727): Difference in results of casting float to timestamp
  - [[SPARK-34731]](https://issues.apache.org/jira/browse/SPARK-34731): ConcurrentModificationException in EventLoggingListener when redacting properties
  - [[SPARK-34737]](https://issues.apache.org/jira/browse/SPARK-34737): Discrepancy between TIMESTAMP_SECONDS and cast from float
  - [[SPARK-34756]](https://issues.apache.org/jira/browse/SPARK-34756): Fix FileScan equality check
  - [[SPARK-34763]](https://issues.apache.org/jira/browse/SPARK-34763): col(), $"<name>" and df("name") should handle quoted column names properly
  - [[SPARK-34766]](https://issues.apache.org/jira/browse/SPARK-34766): Do not capture maven config for views
  - [[SPARK-34768]](https://issues.apache.org/jira/browse/SPARK-34768): Respect the default input buffer size in Univocity
  - [[SPARK-34770]](https://issues.apache.org/jira/browse/SPARK-34770): InMemoryCatalog.tableExists should not fail if database doesn't exist
  - [[SPARK-34772]](https://issues.apache.org/jira/browse/SPARK-34772): RebaseDateTime loadRebaseRecords should use Spark classloader instead of context
  - [[SPARK-34776]](https://issues.apache.org/jira/browse/SPARK-34776): Catalyst error on on certain struct operation (Couldn't find _gen_alias_)
  - [[SPARK-34790]](https://issues.apache.org/jira/browse/SPARK-34790): Fail in fetch shuffle blocks in batch when i/o encryption is enabled
  - [[SPARK-34794]](https://issues.apache.org/jira/browse/SPARK-34794): Nested higher-order functions broken in DSL
  - [[SPARK-34796]](https://issues.apache.org/jira/browse/SPARK-34796): Codegen compilation error for query with LIMIT operator and without AQE
  - [[SPARK-34803]](https://issues.apache.org/jira/browse/SPARK-34803): Pass the raised ImportError if pandas or pyarrow fail to import
  - [[SPARK-34811]](https://issues.apache.org/jira/browse/SPARK-34811): Redact fs.s3a.access.key like secret and token
  - [[SPARK-34814]](https://issues.apache.org/jira/browse/SPARK-34814): LikeSimplification should handle NULL
  - [[SPARK-34829]](https://issues.apache.org/jira/browse/SPARK-34829): Fix higher order function results
  - [[SPARK-34833]](https://issues.apache.org/jira/browse/SPARK-34833): Apply right-padding correctly for correlated subqueries
  - [[SPARK-34834]](https://issues.apache.org/jira/browse/SPARK-34834): There is a potential Netty memory leak in TransportResponseHandler
  - [[SPARK-34840]](https://issues.apache.org/jira/browse/SPARK-34840): Fix cases of corruption in merged shuffle blocks that are pushed
  - [[SPARK-34845]](https://issues.apache.org/jira/browse/SPARK-34845): computeAllMetrics may return partial metrics when some child metrics are missing
  - [[SPARK-34876]](https://issues.apache.org/jira/browse/SPARK-34876): Non-nullable aggregates can return NULL in a correlated subquery
  - [[SPARK-34897]](https://issues.apache.org/jira/browse/SPARK-34897): Support reconcile schemas based on index after nested column pruning
  - [[SPARK-34909]](https://issues.apache.org/jira/browse/SPARK-34909): conv() does not convert negative inputs to unsigned correctly
  - [[SPARK-34922]](https://issues.apache.org/jira/browse/SPARK-34922): Use better CBO cost function
  - [[SPARK-34923]](https://issues.apache.org/jira/browse/SPARK-34923): Metadata output should not always be propagated
  - [[SPARK-34926]](https://issues.apache.org/jira/browse/SPARK-34926): PartitionUtils.getPathFragment should handle null value
  - [[SPARK-34939]](https://issues.apache.org/jira/browse/SPARK-34939): Throw fetch failure exception when unable to deserialize broadcasted map statuses
  - [[SPARK-34948]](https://issues.apache.org/jira/browse/SPARK-34948): Add ownerReference to executor configmap to fix leakages
  - [[SPARK-34949]](https://issues.apache.org/jira/browse/SPARK-34949): Executor.reportHeartBeat reregisters blockManager even when Executor is shutting down
  - [[SPARK-34963]](https://issues.apache.org/jira/browse/SPARK-34963): Nested column pruning fails to extract case-insensitive struct field from array
  - [[SPARK-34970]](https://issues.apache.org/jira/browse/SPARK-34970): Redact map-type options in the output of explain()
  - [[SPARK-35014]](https://issues.apache.org/jira/browse/SPARK-35014): A foldable expression could not be replaced by an AttributeReference
  - [[SPARK-35019]](https://issues.apache.org/jira/browse/SPARK-35019): Improve type hints on pyspark.sql.*
  - [[SPARK-35045]](https://issues.apache.org/jira/browse/SPARK-35045): Add an internal option to control input buffer in univocity
  - [[SPARK-35079]](https://issues.apache.org/jira/browse/SPARK-35079): Transform with udf gives incorrect result
  - [[SPARK-35080]](https://issues.apache.org/jira/browse/SPARK-35080): Correlated subqueries with equality predicates can return wrong results
  - [[SPARK-35087]](https://issues.apache.org/jira/browse/SPARK-35087): Fix some columns in table `Aggregated Metrics by Executor` of stage-detail page
  - [[SPARK-35093]](https://issues.apache.org/jira/browse/SPARK-35093): AQE columnar mismatch on exchange reuse
  - [[SPARK-35096]](https://issues.apache.org/jira/browse/SPARK-35096): foreachBatch throws ArrayIndexOutOfBoundsException if schema is case Insensitive
  - [[SPARK-35106]](https://issues.apache.org/jira/browse/SPARK-35106): HadoopMapReduceCommitProtocol performs bad rename when dynamic partition overwrite is used
  - [[SPARK-35117]](https://issues.apache.org/jira/browse/SPARK-35117): UI progress bar no longer highlights in progress tasks
  - [[SPARK-35127]](https://issues.apache.org/jira/browse/SPARK-35127): When switching between different stage-detail pages, the entry in newly-opened page may be blank
  - [[SPARK-35136]](https://issues.apache.org/jira/browse/SPARK-35136): Initial null value of LiveStage.info can lead to NPE
  - [[SPARK-35142]](https://issues.apache.org/jira/browse/SPARK-35142): `OneVsRest` classifier uses incorrect data type for `rawPrediction` column
  - [[SPARK-35168]](https://issues.apache.org/jira/browse/SPARK-35168): mapred.reduce.tasks should be shuffle.partitions not adaptive.coalescePartitions.initialPartitionNum
  - [[SPARK-35213]](https://issues.apache.org/jira/browse/SPARK-35213): Corrupt DataFrame for certain withField patterns
  - [[SPARK-35226]](https://issues.apache.org/jira/browse/SPARK-35226): JDBC datasources should accept refreshKrb5Config parameter
  - [[SPARK-35227]](https://issues.apache.org/jira/browse/SPARK-35227): Replace Bintray with the new repository service for the spark-packages resolver in SparkSubmit
  - [[SPARK-35244]](https://issues.apache.org/jira/browse/SPARK-35244): invoke should throw the original exception
  - [[SPARK-35278]](https://issues.apache.org/jira/browse/SPARK-35278): Invoke should find the method with correct number of parameters
  - [[SPARK-35288]](https://issues.apache.org/jira/browse/SPARK-35288): StaticInvoke should find the method without exact argument classes match
  - [[SPARK-35359]](https://issues.apache.org/jira/browse/SPARK-35359): Insert data with char/varchar datatype will fail when data length exceed length limitation
  - [[SPARK-35381]](https://issues.apache.org/jira/browse/SPARK-35381): Fix lambda variable name issues in nested DataFrame functions in R APIs
  - [[SPARK-35382]](https://issues.apache.org/jira/browse/SPARK-35382): Fix lambda variable name issues in nested DataFrame functions in Python APIs
  - [[SPARK-35411]](https://issues.apache.org/jira/browse/SPARK-35411): Essential information missing in TreeNode json string
  - [[SPARK-35482]](https://issues.apache.org/jira/browse/SPARK-35482): case sensitive block manager port key should be used in BasicExecutorFeatureStep
  - [[SPARK-35493]](https://issues.apache.org/jira/browse/SPARK-35493): spark.blockManager.port does not work for driver pod

### Dependency Changes

While being a maintence release we did still upgrade some dependencies in this release they are:

  - [[SPARK-34752]](https://issues.apache.org/jira/browse/SPARK-34752): Upgrade Jetty to 9.4.37 to fix CVE-2020-27223
  - [[SPARK-34988]](https://issues.apache.org/jira/browse/SPARK-34988): Upgrade Jetty to 9.4.39 to fix CVE-2021-28165
  - [[SPARK-35210]](https://issues.apache.org/jira/browse/SPARK-35210): Upgrade Jetty to 9.4.40 to fix ERR_CONNECTION_RESET issue

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.1.2).

We would like to acknowledge all community members for contributing patches to this release.
