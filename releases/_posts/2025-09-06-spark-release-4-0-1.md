---
layout: post
title: Spark Release 4.0.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Apache Spark 4.0.1 is a maintenance release containing important correctness and stability fixes. This release is based on the branch-4.0 maintenance branch of Spark. We strongly recommend all 4.0 users to upgrade to this stable release.

### Notable changes

- [[SPARK-49872]](https://issues.apache.org/jira/browse/SPARK-49872) Allow unlimited json size again
- [[SPARK-50137]](https://issues.apache.org/jira/browse/SPARK-50137) Avoid fallback to Hive-incompatible ways when table creation fails by thrift exception
- [[SPARK-50748]](https://issues.apache.org/jira/browse/SPARK-50748) Fix a race condition issue which happens when operations are interrupted
- [[SPARK-50889]](https://issues.apache.org/jira/browse/SPARK-50889) Fix a race condition issue which happens when operations are interrupted
- [[SPARK-51430]](https://issues.apache.org/jira/browse/SPARK-51430) Stop PySpark context logger from propagating to stdout
- [[SPARK-51920]](https://issues.apache.org/jira/browse/SPARK-51920) Fix composite/nested structtype in value state for python
- [[SPARK-52023]](https://issues.apache.org/jira/browse/SPARK-52023) Fix data corruption/segfault returning Option[Product] from udaf
- [[SPARK-52146]](https://issues.apache.org/jira/browse/SPARK-52146) Detect cyclic function usage in SQL UDFs
- [[SPARK-52147]](https://issues.apache.org/jira/browse/SPARK-52147) Block temporary object references in persistent SQL UDFs
- [[SPARK-52148]](https://issues.apache.org/jira/browse/SPARK-52148) Fix CREATE OR REPLACE for SQL TVFs
- [[SPARK-52153]](https://issues.apache.org/jira/browse/SPARK-52153) Fix from_json and to_json with variant
- [[SPARK-52237]](https://issues.apache.org/jira/browse/SPARK-52237) Fix the documentation of hypot function
- [[SPARK-52240]](https://issues.apache.org/jira/browse/SPARK-52240) Corrected row index usage when exploding packed arrays in vectorized reader
- [[SPARK-52259]](https://issues.apache.org/jira/browse/SPARK-52259) Fix Param class binary compatibility
- [[SPARK-52265]](https://issues.apache.org/jira/browse/SPARK-52265) Fix regex leading to empty PROCESS_TABLES.testingVersions in HiveExternalCatalogVersionsSuite
- [[SPARK-52267]](https://issues.apache.org/jira/browse/SPARK-52267) Match field id in ParquetToSparkSchemaConverter
- [[SPARK-52287]](https://issues.apache.org/jira/browse/SPARK-52287) Improve `SparkContext` not to populate `o.a.s.internal.io.cloud.*`-related setting if not exist
- [[SPARK-52300]](https://issues.apache.org/jira/browse/SPARK-52300) Make SQL UDTVF resolution use consistent configurations with view resolution
- [[SPARK-52313]](https://issues.apache.org/jira/browse/SPARK-52313) Correctly resolve reference data type for Views with default collation
- [[SPARK-52316]](https://issues.apache.org/jira/browse/SPARK-52316) Upgrade Kafka to 3.9.1
- [[SPARK-52324]](https://issues.apache.org/jira/browse/SPARK-52324) Move Spark docs to the release directory
- [[SPARK-52329]](https://issues.apache.org/jira/browse/SPARK-52329) Remove private sql scoping tags for new transformWithState API 
- [[SPARK-52339]](https://issues.apache.org/jira/browse/SPARK-52339) Fix comparison of InMemoryFileIndex instances
- [[SPARK-52345]](https://issues.apache.org/jira/browse/SPARK-52345) Fix NULL behavior in scripting conditions
- [[SPARK-52350]](https://issues.apache.org/jira/browse/SPARK-52350) Fix link for SS programming guide page
- [[SPARK-52384]](https://issues.apache.org/jira/browse/SPARK-52384) Fix bug Connect should insensitive for JDBC options.
- [[SPARK-52386]](https://issues.apache.org/jira/browse/SPARK-52386) Refactor the `HistoryServerSuite` to support regenerating the `expectation.json` files using `SPARK_GENERATE_GOLDEN_FILES=1`
- [[SPARK-52396]](https://issues.apache.org/jira/browse/SPARK-52396) Artifact Root Directory should use tmpdir
- [[SPARK-52397]](https://issues.apache.org/jira/browse/SPARK-52397) Idempotent ExecutePlan: second ExecutePlan with same operationId and plan should reattach
- [[SPARK-52398]](https://issues.apache.org/jira/browse/SPARK-52398) Change ALTER TABLE ALTER COLUMN TYPE STRING not to apply default collation if original data type was instance of StringType
- [[SPARK-52413]](https://issues.apache.org/jira/browse/SPARK-52413) `test_install_spark` switch to Spark 3.5.6
- [[SPARK-52420]](https://issues.apache.org/jira/browse/SPARK-52420) Make test_udtf_with_invalid_return_type compatible with Python only client
- [[SPARK-52421]](https://issues.apache.org/jira/browse/SPARK-52421) Automatically send the RC vote email
- [[SPARK-52450]](https://issues.apache.org/jira/browse/SPARK-52450) Improve performance of schema deepcopy
- [[SPARK-52453]](https://issues.apache.org/jira/browse/SPARK-52453) Automatically release and drop artifacts in Apache Nexus repository
- [[SPARK-52454]](https://issues.apache.org/jira/browse/SPARK-52454) Automatically remove old releases from the mirror
- [[SPARK-52489]](https://issues.apache.org/jira/browse/SPARK-52489) Forbid duplicate SQLEXCEPTION and NOT FOUND handlers inside SQL Script
- [[SPARK-52497]](https://issues.apache.org/jira/browse/SPARK-52497) Add documentation for SQL UDFs
- [[SPARK-52499]](https://issues.apache.org/jira/browse/SPARK-52499) Add more SQL query tests for different data types
- [[SPARK-52516]](https://issues.apache.org/jira/browse/SPARK-52516) Don't hold previous iterator reference after advancing to next file in ParquetPartitionReaderFactory
- [[SPARK-52521]](https://issues.apache.org/jira/browse/SPARK-52521) Right#replacement should not access SQLConf dynamically
- [[SPARK-52529]](https://issues.apache.org/jira/browse/SPARK-52529) Fully upgrade jekyll from 4.3 to 4.4
- [[SPARK-52531]](https://issues.apache.org/jira/browse/SPARK-52531) `OuterReference` in subquery aggregate is incorrectly tied to outer query aggregate
- [[SPARK-52542]](https://issues.apache.org/jira/browse/SPARK-52542) Use `/nonexistent` instead of nonexistent `/opt/spark`
- [[SPARK-52553]](https://issues.apache.org/jira/browse/SPARK-52553) Fix NumberFormatException when reading v1 changelog
- [[SPARK-52562]](https://issues.apache.org/jira/browse/SPARK-52562) Automatically create the base of release notes and push
- [[SPARK-52568]](https://issues.apache.org/jira/browse/SPARK-52568) Fix `exec-maven-plugin` version used by `dev/test-dependencies.sh`
- [[SPARK-52584]](https://issues.apache.org/jira/browse/SPARK-52584) Make build script to support preview releases in finalize step
- [[SPARK-52590]](https://issues.apache.org/jira/browse/SPARK-52590) Add SQL query tests on optional return types
- [[SPARK-52611]](https://issues.apache.org/jira/browse/SPARK-52611) Fix SQLConf version for excludeSubqueryRefsFromRemoveRedundantAliases configuration
- [[SPARK-52612]](https://issues.apache.org/jira/browse/SPARK-52612) Add an env NO_PROVIDED_SPARK_JARS to control collection behavior of sbt/package for spark-avro.jar and spark-protobuf.jar
- [[SPARK-52613]](https://issues.apache.org/jira/browse/SPARK-52613) Restore printing full stacktrace when HBase/Hive DelegationTokenProvider hit exception
- [[SPARK-52684]](https://issues.apache.org/jira/browse/SPARK-52684) Make CACHE TABLE Commands atomic while encounting execution errors
- [[SPARK-52691]](https://issues.apache.org/jira/browse/SPARK-52691) Upgrade ORC to 2.1.3
- [[SPARK-52707]](https://issues.apache.org/jira/browse/SPARK-52707) Remove preview postfix when looking up the JIRA versions
- [[SPARK-52721]](https://issues.apache.org/jira/browse/SPARK-52721) Wrong message parameter for CANNOT_PARSE_DATATYPE
- [[SPARK-52735]](https://issues.apache.org/jira/browse/SPARK-52735) Fix missing error conditions for SQL UDFs
- [[SPARK-52737]](https://issues.apache.org/jira/browse/SPARK-52737) Pushdown predicate and number of apps to FsHistoryProvider when listing applications
- [[SPARK-52741]](https://issues.apache.org/jira/browse/SPARK-52741) RemoveFiles ShuffleCleanup mode doesnt work with non-adaptive execution
- [[SPARK-52749]](https://issues.apache.org/jira/browse/SPARK-52749) Replace preview1 to dev1 in its PyPI package name
- [[SPARK-52753]](https://issues.apache.org/jira/browse/SPARK-52753) Make parseDataType binary compatible with previous versions
- [[SPARK-52776]](https://issues.apache.org/jira/browse/SPARK-52776) Do not split the comm field in ProcfsMetricsGetter
- [[SPARK-52786]](https://issues.apache.org/jira/browse/SPARK-52786) Make pyspark-client package to upload with preview naming
- [[SPARK-52788]](https://issues.apache.org/jira/browse/SPARK-52788) Fix error of converting binary value in BinaryType to XML
- [[SPARK-52791]](https://issues.apache.org/jira/browse/SPARK-52791) Fix error when inferring a UDT with a null first element
- [[SPARK-52799]](https://issues.apache.org/jira/browse/SPARK-52799) Fix ThriftServerQueryTestSuite result comparison
- [[SPARK-52809]](https://issues.apache.org/jira/browse/SPARK-52809) Don't hold reader and iterator references for all partitions in task completion listeners for metric update
- [[SPARK-52828]](https://issues.apache.org/jira/browse/SPARK-52828) Make hashing for collated strings collation agnostic
- [[SPARK-52832]](https://issues.apache.org/jira/browse/SPARK-52832) Fix JDBC dialect identifier quoting
- [[SPARK-52833]](https://issues.apache.org/jira/browse/SPARK-52833) Fix VariantBuilder.appendFloat
- [[SPARK-52870]](https://issues.apache.org/jira/browse/SPARK-52870) Properly quote variable names in FOR statement
- [[SPARK-52873]](https://issues.apache.org/jira/browse/SPARK-52873) Further restrict when SHJ semi/anti join can ignore duplicate keys on the build side
- [[SPARK-52899]](https://issues.apache.org/jira/browse/SPARK-52899) Fix QueryExecutionErrorsSuite test to register H2Dialect back
- [[SPARK-52908]](https://issues.apache.org/jira/browse/SPARK-52908) Prevent for iterator variable name clashing with names of labels in the path to the root of AST
- [[SPARK-52942]](https://issues.apache.org/jira/browse/SPARK-52942) YARN External Shuffle Service jar should include scala-library
- [[SPARK-52976]](https://issues.apache.org/jira/browse/SPARK-52976) Fix Python UDF not accepting collated strings as input param
- [[SPARK-52989]](https://issues.apache.org/jira/browse/SPARK-52989) Add explicit close API to RocksDB State store iterator and fix current usage
- [[SPARK-53020]](https://issues.apache.org/jira/browse/SPARK-53020) JPMS args should also apply to non-SparkSubmit process
- [[SPARK-53054]](https://issues.apache.org/jira/browse/SPARK-53054) Fix the connect.DataFrameReader default format behavior
- [[SPARK-53074]](https://issues.apache.org/jira/browse/SPARK-53074) Avoid partial clustering in SPJ to meet a child's required distribution
- [[SPARK-53094]](https://issues.apache.org/jira/browse/SPARK-53094) Fix CUBE with aggregate containing HAVING clauses
- [[SPARK-53120]](https://issues.apache.org/jira/browse/SPARK-53120) Recover _source directory for PySpark documentation
- [[SPARK-53130]](https://issues.apache.org/jira/browse/SPARK-53130) Fix toJson behavior of collated string types
- [[SPARK-53155]](https://issues.apache.org/jira/browse/SPARK-53155) Global lower agggregation should not be replaced with a project
- [[SPARK-53167]](https://issues.apache.org/jira/browse/SPARK-53167) Spark launcher isRemote also respects properties files
- [[SPARK-53176]](https://issues.apache.org/jira/browse/SPARK-53176) Spark launcher should respect `--load-spark-defaults`
- [[SPARK-53275]](https://issues.apache.org/jira/browse/SPARK-53275) Handle stateful expressions when ordering in interpreted mode
- [[SPARK-53291]](https://issues.apache.org/jira/browse/SPARK-53291) Fix nullability for value column
- [[SPARK-53326]](https://issues.apache.org/jira/browse/SPARK-53326) Upgrade ORC Format to 1.1.1
- [[SPARK-53342]](https://issues.apache.org/jira/browse/SPARK-53342) Fix Arrow converter to handle multiple record batches in single IPC stream
- [[SPARK-53348]](https://issues.apache.org/jira/browse/SPARK-53348) Always persist ANSI value when creating a view or assume it when querying if not stored
- [[SPARK-53360]](https://issues.apache.org/jira/browse/SPARK-53360) Once strategy with ConstantFolding's idempotence should not be broken
- [[SPARK-53394]](https://issues.apache.org/jira/browse/SPARK-53394) UninterruptibleLock.isInterruptible should avoid duplicated interrupt
- [[SPARK-53435]](https://issues.apache.org/jira/browse/SPARK-53435) Fix race condition in CachedRDDBuilder

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-4.0.1).

We would like to acknowledge all community members for contributing patches to this release.
