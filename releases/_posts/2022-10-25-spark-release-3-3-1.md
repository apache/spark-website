---
layout: post
title: Spark Release 3.3.1
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '4'
  _wpas_done_all: '1'
---

Spark 3.3.1 is a maintenance release containing stability fixes. This release is based on the branch-3.3 maintenance branch of Spark. We strongly recommend all 3.3 users to upgrade to this stable release.

### Notable changes

  - [[SPARK-35542]](https://issues.apache.org/jira/browse/SPARK-35542): Fix: Bucketizer created for multiple columns with parameters splitsArray, inputCols and outputCols can not be loaded after saving it
  - [[SPARK-36057]](https://issues.apache.org/jira/browse/SPARK-36057): SPIP: Support Customized Kubernetes Schedulers
  - [[SPARK-38034]](https://issues.apache.org/jira/browse/SPARK-38034): Optimize TransposeWindow rule
  - [[SPARK-38404]](https://issues.apache.org/jira/browse/SPARK-38404): Improve CTE resolution when a nested CTE references an outer CTE
  - [[SPARK-38614]](https://issues.apache.org/jira/browse/SPARK-38614): Don't push down limit through window that's using percent_rank
  - [[SPARK-38717]](https://issues.apache.org/jira/browse/SPARK-38717): Handle Hive's bucket spec case preserving behaviour
  - [[SPARK-38796]](https://issues.apache.org/jira/browse/SPARK-38796): Update to_number and try_to_number functions to allow PR with positive numbers
  - [[SPARK-39184]](https://issues.apache.org/jira/browse/SPARK-39184): Handle undersized result array in date and timestamp sequences
  - [[SPARK-39200]](https://issues.apache.org/jira/browse/SPARK-39200): Make Fallback Storage readFully on content
  - [[SPARK-39340]](https://issues.apache.org/jira/browse/SPARK-39340): DS v2 agg pushdown should allow dots in the name of top-level columns
  - [[SPARK-39355]](https://issues.apache.org/jira/browse/SPARK-39355): Single column uses quoted to construct UnresolvedAttribute
  - [[SPARK-39419]](https://issues.apache.org/jira/browse/SPARK-39419): Fix ArraySort to throw an exception when the comparator returns null
  - [[SPARK-39447]](https://issues.apache.org/jira/browse/SPARK-39447): Avoid AssertionError in AdaptiveSparkPlanExec.doExecuteBroadcast
  - [[SPARK-39476]](https://issues.apache.org/jira/browse/SPARK-39476): Disable Unwrap cast optimize when casting from Long to Float/ Double or from Integer to Float
  - [[SPARK-39548]](https://issues.apache.org/jira/browse/SPARK-39548): CreateView Command with a window clause query hit a wrong window definition not found issue
  - [[SPARK-39570]](https://issues.apache.org/jira/browse/SPARK-39570): Inline table should allow expressions with alias
  - [[SPARK-39614]](https://issues.apache.org/jira/browse/SPARK-39614): K8s pod name follows DNS Subdomain Names rule
  - [[SPARK-39633]](https://issues.apache.org/jira/browse/SPARK-39633): Support timestamp in seconds for TimeTravel using Dataframe options
  - [[SPARK-39647]](https://issues.apache.org/jira/browse/SPARK-39647): Register the executor with ESS before registering the BlockManager
  - [[SPARK-39650]](https://issues.apache.org/jira/browse/SPARK-39650): Fix incorrect value schema in streaming deduplication with backward compatibility
  - [[SPARK-39656]](https://issues.apache.org/jira/browse/SPARK-39656): Fix wrong namespace in DescribeNamespaceExec
  - [[SPARK-39657]](https://issues.apache.org/jira/browse/SPARK-39657): YARN AM client should call the non-static setTokensConf method
  - [[SPARK-39672]](https://issues.apache.org/jira/browse/SPARK-39672): Fix removing project before filter with correlated subquery
  - [[SPARK-39758]](https://issues.apache.org/jira/browse/SPARK-39758): Fix NPE from the regexp functions on invalid patterns
  - [[SPARK-39775]](https://issues.apache.org/jira/browse/SPARK-39775): Disable validate default values when parsing Avro schemas
  - [[SPARK-39806]](https://issues.apache.org/jira/browse/SPARK-39806): Accessing _metadata on partitioned table can crash a query
  - [[SPARK-39833]](https://issues.apache.org/jira/browse/SPARK-39833): Disable Parquet column index in DSv1 to fix a correctness issue in the case of overlapping partition and data columns
  - [[SPARK-39835]](https://issues.apache.org/jira/browse/SPARK-39835): Fix EliminateSorts remove global sort below the local sort
  - [[SPARK-39839]](https://issues.apache.org/jira/browse/SPARK-39839): Handle special case of null variable-length Decimal with non-zero offsetAndSize in UnsafeRow structural integrity check
  - [[SPARK-39847]](https://issues.apache.org/jira/browse/SPARK-39847): Fix race condition in RocksDBLoader.loadLibrary() if caller thread is interrupted
  - [[SPARK-39857]](https://issues.apache.org/jira/browse/SPARK-39857): V2ExpressionBuilder uses the wrong LiteralValue data type for In predicate
  - [[SPARK-39867]](https://issues.apache.org/jira/browse/SPARK-39867): Global limit should not inherit OrderPreservingUnaryNode
  - [[SPARK-39887]](https://issues.apache.org/jira/browse/SPARK-39887): RemoveRedundantAliases should keep aliases that make the output of projection nodes unique
  - [[SPARK-39896]](https://issues.apache.org/jira/browse/SPARK-39896): UnwrapCastInBinaryComparison should work when the literal of In/InSet downcast failed
  - [[SPARK-39900]](https://issues.apache.org/jira/browse/SPARK-39900): Address partial or negated condition in binary format's predicate pushdown
  - [[SPARK-39911]](https://issues.apache.org/jira/browse/SPARK-39911): Optimize global Sort to RepartitionByExpression
  - [[SPARK-39915]](https://issues.apache.org/jira/browse/SPARK-39915): Dataset.repartition(N) may not create N partitions Non-AQE part
  - [[SPARK-39915]](https://issues.apache.org/jira/browse/SPARK-39915): Ensure the output partitioning is user-specified in AQE
  - [[SPARK-39932]](https://issues.apache.org/jira/browse/SPARK-39932): WindowExec should clear the final partition buffer
  - [[SPARK-39951]](https://issues.apache.org/jira/browse/SPARK-39951): Update Parquet V2 columnar check for nested fields
  - [[SPARK-39952]](https://issues.apache.org/jira/browse/SPARK-39952): SaveIntoDataSourceCommand should recache result relation
  - [[SPARK-39962]](https://issues.apache.org/jira/browse/SPARK-39962): Apply projection when group attributes are empty
  - [[SPARK-39976]](https://issues.apache.org/jira/browse/SPARK-39976): ArrayIntersect should handle null in left expression correctly
  - [[SPARK-40002]](https://issues.apache.org/jira/browse/SPARK-40002): Don't push down limit through window using ntile
  - [[SPARK-40065]](https://issues.apache.org/jira/browse/SPARK-40065): Mount ConfigMap on executors with non-default profile as well
  - [[SPARK-40079]](https://issues.apache.org/jira/browse/SPARK-40079): Add Imputer inputCols validation for empty input case
  - [[SPARK-40089]](https://issues.apache.org/jira/browse/SPARK-40089): Fix sorting for some Decimal types
  - [[SPARK-40117]](https://issues.apache.org/jira/browse/SPARK-40117): Convert condition to java in DataFrameWriterV2.overwrite
  - [[SPARK-40121]](https://issues.apache.org/jira/browse/SPARK-40121): Initialize projection used for Python UDF
  - [[SPARK-40132]](https://issues.apache.org/jira/browse/SPARK-40132): Restore rawPredictionCol to MultilayerPerceptronClassifier.setParams
  - [[SPARK-40149]](https://issues.apache.org/jira/browse/SPARK-40149): Propagate metadata columns through Project
  - [[SPARK-40152]](https://issues.apache.org/jira/browse/SPARK-40152): Fix split_part codegen compilation issue
  - [[SPARK-40169]](https://issues.apache.org/jira/browse/SPARK-40169): Don't pushdown Parquet filters with no reference to data schema
  - [[SPARK-40212]](https://issues.apache.org/jira/browse/SPARK-40212): SparkSQL castPartValue does not properly handle byte, short, or float
  - [[SPARK-40213]](https://issues.apache.org/jira/browse/SPARK-40213): Support ASCII value conversion for Latin-1 characters
  - [[SPARK-40218]](https://issues.apache.org/jira/browse/SPARK-40218): GROUPING SETS should preserve the grouping columns
  - [[SPARK-40228]](https://issues.apache.org/jira/browse/SPARK-40228): Do not simplify multiLike if child is not a cheap expression
  - [[SPARK-40247]](https://issues.apache.org/jira/browse/SPARK-40247): Fix BitSet equality check
  - [[SPARK-40280]](https://issues.apache.org/jira/browse/SPARK-40280): Add support for parquet push down for annotated int and long
  - [[SPARK-40297]](https://issues.apache.org/jira/browse/SPARK-40297): CTE outer reference nested in CTE main body cannot be resolved
  - [[SPARK-40362]](https://issues.apache.org/jira/browse/SPARK-40362): Fix BinaryComparison canonicalization
  - [[SPARK-40380]](https://issues.apache.org/jira/browse/SPARK-40380): Fix constant-folding of InvokeLike to avoid non-serializable literal embedded in the plan
  - [[SPARK-40385]](https://issues.apache.org/jira/browse/SPARK-40385): Fix interpreted path for companion object constructor
  - [[SPARK-40389]](https://issues.apache.org/jira/browse/SPARK-40389): Decimals can't upcast as integral types if the cast can overflow
  - [[SPARK-40468]](https://issues.apache.org/jira/browse/SPARK-40468): Fix column pruning in CSV when _corrupt_record is selected
  - [[SPARK-40508]](https://issues.apache.org/jira/browse/SPARK-40508): Treat unknown partitioning as UnknownPartitioning
  - [[SPARK-40535]](https://issues.apache.org/jira/browse/SPARK-40535): Fix bug the buffer of AggregatingAccumulator will not be created if the input rows is empty
  - [[SPARK-40562]](https://issues.apache.org/jira/browse/SPARK-40562): Add `spark.sql.legacy.groupingIdWithAppendedUserGroupBy`
  - [[SPARK-40612]](https://issues.apache.org/jira/browse/SPARK-40612): Fixing the principal used for delegation token renewal on non-YARN resource managers
  - [[SPARK-40660]](https://issues.apache.org/jira/browse/SPARK-40660): Switch to XORShiftRandom to distribute elements
  - [[SPARK-40703]](https://issues.apache.org/jira/browse/SPARK-40703): Introduce shuffle on SinglePartition to improve parallelism

### Dependency Changes

While being a maintence release we did still upgrade some dependencies in this release they are:

  - [[SPARK-39947]](https://issues.apache.org/jira/browse/SPARK-39947): Upgrade Jersey to 2.36
  - [[SPARK-40134]](https://issues.apache.org/jira/browse/SPARK-40134): Update ORC to 1.7.6
  - [[SPARK-40326]](https://issues.apache.org/jira/browse/SPARK-40326): Upgrade fasterxml.jackson.version to 2.13.4
  - [[SPARK-39725]](https://issues.apache.org/jira/browse/SPARK-39725): Upgrade jetty to 9.4.48.v20220622
  - [[SPARK-40782]](https://issues.apache.org/jira/browse/SPARK-40782): Upgrade jackson-databind to 2.13.4.1

You can consult JIRA for the [detailed changes](https://s.apache.org/spark-3.3.1).

We would like to acknowledge all community members for contributing patches to this release.
