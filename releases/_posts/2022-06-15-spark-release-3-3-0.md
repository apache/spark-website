---
layout: post
title: Spark Release 3.3.0
categories: []
tags: []
status: publish
type: post
published: true
meta:
_edit_last: '4'
_wpas_done_all: '1'
---

Apache Spark 3.3.0 is the fourth release of the 3.x line. With tremendous contribution from the open-source community, this release managed to resolve in excess of 1,600 Jira tickets.


To download Apache Spark 3.3.0, visit the [downloads](https://spark.apache.org/downloads.html) page. You can consult JIRA for the [detailed changes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315420&version=12350369). We have curated a list of high level changes here, grouped by major modules.

* This will become a table of contents (this text will be scraped).
{:toc}


### Highlight



* Row-level Runtime Filtering ([SPARK-32268](https://issues.apache.org/jira/browse/SPARK-32268))  
* ANSI enhancements ([SPARK-38860](https://issues.apache.org/jira/browse/SPARK-38860))  
* Error Message Improvements ([SPARK-38781](https://issues.apache.org/jira/browse/SPARK-38781))
* Support complex types for Parquet vectorized reader ([SPARK-34863](https://issues.apache.org/jira/browse/SPARK-34863))
* Hidden File Metadata Support for Spark SQL ([SPARK-37273](https://issues.apache.org/jira/browse/SPARK-37273))
* Provide a profiler for Python/Pandas UDFs ([SPARK-37443](https://issues.apache.org/jira/browse/SPARK-37443))
* Introduce Trigger.AvailableNow for running streaming queries like Trigger.Once in multiple batches ([SPARK-36533](https://issues.apache.org/jira/browse/SPARK-36533))
* More comprehensive DS V2 push down capabilities ([SPARK-38788](https://issues.apache.org/jira/browse/SPARK-38788))
* Executor Rolling in Kubernetes environment ([SPARK-37810](https://issues.apache.org/jira/browse/SPARK-37810))
* Support Customized Kubernetes Schedulers ( [SPARK-36057](https://issues.apache.org/jira/browse/SPARK-36057))
* Migrating from log4j 1 to log4j 2 ([SPARK-37814](https://issues.apache.org/jira/browse/SPARK-37814))


### Spark SQL and Core


#### ANSI mode



* New explicit cast syntax rules in ANSI mode ([SPARK-33354](https://issues.apache.org/jira/browse/SPARK-33354))
* Elt() should return null if index is null under ANSI mode ([SPARK-38304](https://issues.apache.org/jira/browse/SPARK-38304))
* Optionally return null result if element not exists in array/map ([SPARK-37750](https://issues.apache.org/jira/browse/SPARK-37750))
* Allow casting between numeric type and timestamp type ([SPARK-37714](https://issues.apache.org/jira/browse/SPARK-37714))
* Disable ANSI reserved keywords by default ([SPARK-37724](https://issues.apache.org/jira/browse/SPARK-37724))
* Use store assignment rules for resolving function invocation ([SPARK-37438](https://issues.apache.org/jira/browse/SPARK-37438))
* Add a config to allow casting between Datetime and Numeric ([SPARK-37179](https://issues.apache.org/jira/browse/SPARK-37179))
* Add a config to optionally enforce ANSI reserved keywords ([SPARK-37133](https://issues.apache.org/jira/browse/SPARK-37133))
* Disallow binary operations between Interval and String literal ([SPARK-36508](https://issues.apache.org/jira/browse/SPARK-36508))


#### Feature Enhancements



* Support ANSI SQL INTERVAL types ([SPARK-27790](https://issues.apache.org/jira/browse/SPARK-27790))
* Error Message Improvements ([SPARK-38781](https://issues.apache.org/jira/browse/SPARK-38781))
* Hidden File Metadata Support for Spark SQL ([SPARK-37273](https://issues.apache.org/jira/browse/SPARK-37273))
* Support raw string literal ([SPARK-36371](https://issues.apache.org/jira/browse/SPARK-36371))
* Helper class for batch Dataset.observe() ([SPARK-34806](https://issues.apache.org/jira/browse/SPARK-34806))
* Support specify initial partition number for rebalance ([SPARK-38410](https://issues.apache.org/jira/browse/SPARK-38410))
* Support cascade mode for `dropNamespace` API ([SPARK-37929](https://issues.apache.org/jira/browse/SPARK-37929))
* Allow store assignment and implicit cast among datetime types ([SPARK-37707](https://issues.apache.org/jira/browse/SPARK-37707))
* Collect, first and last should be deterministic aggregate functions ([SPARK-32940](https://issues.apache.org/jira/browse/SPARK-32940))
* Add ExpressionBuilder for functions with complex overloads ([SPARK-37164](https://issues.apache.org/jira/browse/SPARK-37164))
* Add array support to union by name ([SPARK-36546](https://issues.apache.org/jira/browse/SPARK-36546))
* Add df.withMetadata: a syntax sugar to update the metadata of a dataframe ([SPARK-36642](https://issues.apache.org/jira/browse/SPARK-36642))
* Support raw string literal ([SPARK-36371](https://issues.apache.org/jira/browse/SPARK-36371))
* Use CAST in parsing of dates/timestamps with default pattern ([SPARK-36418](https://issues.apache.org/jira/browse/SPARK-36418))
* Support value class in nested schema for Dataset ([SPARK-20384](https://issues.apache.org/jira/browse/SPARK-20384))
* Add AS OF syntax support ([SPARK-37219](https://issues.apache.org/jira/browse/SPARK-37219))
* Add REPEATABLE in TABLESAMPLE to specify seed ([SPARK-37165](https://issues.apache.org/jira/browse/SPARK-37165))
* Add ansi syntax `set catalog xxx` to change the current catalog ([SPARK-36841](https://issues.apache.org/jira/browse/SPARK-36841))
* Support ILIKE (ALL | ANY | SOME) - case insensitive LIKE ([SPARK-36674](https://issues.apache.org/jira/browse/SPARK-36674), [SPARK-36736](https://issues.apache.org/jira/browse/SPARK-36736), [SPARK-36778](https://issues.apache.org/jira/browse/SPARK-36778))
* Support query stage show runtime statistics in formatted explain mode ([SPARK-38322](https://issues.apache.org/jira/browse/SPARK-38322))
* Add spill size metrics for sort merge join ([SPARK-37726](https://issues.apache.org/jira/browse/SPARK-37726))
* Update the SQL syntax of SHOW FUNCTIONS ([SPARK-37777](https://issues.apache.org/jira/browse/SPARK-37777))
* Implement support for DEFAULT values for columns in tables ([SPARK-38334](https://issues.apache.org/jira/browse/SPARK-38334))
* Storage Partitioned Join ([SPARK-37375](https://issues.apache.org/jira/browse/SPARK-37375))
* Support DROP COLUMN [IF EXISTS] syntax ([SPARK-38939](https://issues.apache.org/jira/browse/SPARK-38939))
* New built-in functions and their extensions ([SPARK-38783](https://issues.apache.org/jira/browse/SPARK-38783))
    * Datetime
        * Add the <span style="text-decoration:underline;">TIMESTAMPADD</span>() function ([SPARK-38195](https://issues.apache.org/jira/browse/SPARK-38195))
        * Add the <span style="text-decoration:underline;">TIMESTAMPDIFF</span>() function ([SPARK-38284](https://issues.apache.org/jira/browse/SPARK-38284))
        * Add the `<span style="text-decoration:underline;">DATEDIFF</span>()` alias for `TIMESTAMPDIFF()` ([SPARK-38389](https://issues.apache.org/jira/browse/SPARK-38389))
        * Add the `<span style="text-decoration:underline;">DATEADD</span>()` alias for `TIMESTAMPADD()` ([SPARK-38332](https://issues.apache.org/jira/browse/SPARK-38332))
        * Add the `<span style="text-decoration:underline;">convert_timezone</span>()` function ([SPARK-37552](https://issues.apache.org/jira/browse/SPARK-37552), [SPARK-37568](https://issues.apache.org/jira/browse/SPARK-37568))
        * Expose <span style="text-decoration:underline;">make_date</span> expression in functions.scala ([SPARK-36554](https://issues.apache.org/jira/browse/SPARK-36554))
    * AES functions ([SPARK-12567](https://issues.apache.org/jira/browse/SPARK-12567))
        * Add <span style="text-decoration:underline;">aes_encrypt</span> and <span style="text-decoration:underline;">aes_decrypt</span> builtin functions ([SPARK-12567](https://issues.apache.org/jira/browse/SPARK-12567)) \
Support the GCM mode by `<span style="text-decoration:underline;">aes_encrypt</span>()`/`<span style="text-decoration:underline;">aes_decrypt</span>()` ([SPARK-37591](https://issues.apache.org/jira/browse/SPARK-37591))
        * Set `GCM` as the default mode in `<span style="text-decoration:underline;">aes_encrypt</span>()`/`<span style="text-decoration:underline;">aes_decrypt</span>()` ([SPARK-37666](https://issues.apache.org/jira/browse/SPARK-37666))
        * Add the `mode` and `padding` args to `<span style="text-decoration:underline;">aes_encrypt</span>()`/`<span style="text-decoration:underline;">aes_decrypt</span>()` ([SPARK-37586](https://issues.apache.org/jira/browse/SPARK-37586))
    * ANSI Aggregation Function ([SPARK-37671](https://issues.apache.org/jira/browse/SPARK-37671))
        * Support ANSI Aggregate Function: <span style="text-decoration:underline;">regr_count</span> ([SPARK-37613](https://issues.apache.org/jira/browse/SPARK-37613))
        * Support ANSI Aggregate Function: <span style="text-decoration:underline;">regr_avgx</span> & <span style="text-decoration:underline;">regr_avgy</span> ([SPARK-37614](https://issues.apache.org/jira/browse/SPARK-37614))
        * Support ANSI Aggregate Function: <span style="text-decoration:underline;">regr_count</span> ([SPARK-37613](https://issues.apache.org/jira/browse/SPARK-37613))
        * Support ANSI Aggregate Function: regr_r2 ([SPARK-37641](https://issues.apache.org/jira/browse/SPARK-37641))
        * Support ANSI Aggregate Function: <span style="text-decoration:underline;">array_agg</span> ([SPARK-27974](https://issues.apache.org/jira/browse/SPARK-27974))
        * Support ANSI Aggregation Function: <span style="text-decoration:underline;">percentile_cont</span> ([SPARK-37676](https://issues.apache.org/jira/browse/SPARK-37676), [SPARK-38219](https://issues.apache.org/jira/browse/SPARK-38219))
        * Support ANSI Aggregation Function: <span style="text-decoration:underline;">percentile_disc</span> ([SPARK-37691](https://issues.apache.org/jira/browse/SPARK-37691))
        * New SQL function: try_avg ([SPARK-38589](https://issues.apache.org/jira/browse/SPARK-38589))
    * Collections
        * Introduce SQL function <span style="text-decoration:underline;">ARRAY_SIZE</span> ([SPARK-38345](https://issues.apache.org/jira/browse/SPARK-38345))
        * New SQL function: <span style="text-decoration:underline;">map_contains_key</span> ([SPARK-37584](https://issues.apache.org/jira/browse/SPARK-37584))
        * New SQL function: <span style="text-decoration:underline;">try_element_at</span> ([SPARK-37533](https://issues.apache.org/jira/browse/SPARK-37533))
        * New SQL function: <span style="text-decoration:underline;">try_sum</span> ([SPARK-38548](https://issues.apache.org/jira/browse/SPARK-38548))
    * Format
        * Add a new SQL function <span style="text-decoration:underline;">to_binary</span> ([SPARK-37507](https://issues.apache.org/jira/browse/SPARK-37507), [SPARK-38796](https://issues.apache.org/jira/browse/SPARK-38796))
        * New SQL function: <span style="text-decoration:underline;">try_to_binary</span> ([SPARK-38590](https://issues.apache.org/jira/browse/SPARK-38590), [SPARK-38796](https://issues.apache.org/jira/browse/SPARK-38796))
        * Data Type Formatting Functions: `<span style="text-decoration:underline;">to_number</span>` ([SPARK-28137](https://issues.apache.org/jira/browse/SPARK-28137))
    * String/Binary
        * Add <span style="text-decoration:underline;">CONTAINS</span>() string function ([SPARK-37508](https://issues.apache.org/jira/browse/SPARK-37508))
        * Add the `<span style="text-decoration:underline;">startswith</span>()` and `<span style="text-decoration:underline;">endswith</span>()` string functions ([SPARK-37520](https://issues.apache.org/jira/browse/SPARK-37520))
        * Add lpad and rpad functions for binary strings ([SPARK-37047](https://issues.apache.org/jira/browse/SPARK-37047))
        * Support split_part Function ([SPARK-38063](https://issues.apache.org/jira/browse/SPARK-38063))
    * Add scale parameter to <span style="text-decoration:underline;">floor</span> and <span style="text-decoration:underline;">ceil</span> functions ([SPARK-37475](https://issues.apache.org/jira/browse/SPARK-37475))
    * New SQL functions: <span style="text-decoration:underline;">try_subtract</span> and <span style="text-decoration:underline;">try_multiply</span> ([SPARK-38164](https://issues.apache.org/jira/browse/SPARK-38164))
    * Implements <span style="text-decoration:underline;">histogram_numeric</span> aggregation function which supports partial aggregation ([SPARK-16280](https://issues.apache.org/jira/browse/SPARK-16280))
    * Add max_by/min_by to sql.functions ([SPARK-36963](https://issues.apache.org/jira/browse/SPARK-36963))
    * Add new built-in SQL functions: SEC and CSC ([SPARK-36683](https://issues.apache.org/jira/browse/SPARK-36683))
    * array_intersect handles duplicated Double.NaN and Float.NaN ([SPARK-36754](https://issues.apache.org/jira/browse/SPARK-36754))
    * Add cot as Scala and Python functions ([SPARK-36660](https://issues.apache.org/jira/browse/SPARK-36660))


#### Performance enhancements



* Whole-stage code generation
    * Add code-gen for sort aggregate without grouping keys ([SPARK-37564](https://issues.apache.org/jira/browse/SPARK-37564))
    * Add code-gen for full outer sort merge join ([SPARK-35352](https://issues.apache.org/jira/browse/SPARK-35352))
    * Add code-gen for full outer shuffled hash join ([SPARK-32567](https://issues.apache.org/jira/browse/SPARK-32567))
    * Add code-gen for existence sort merge join ([SPARK-37316](https://issues.apache.org/jira/browse/SPARK-37316))
* Push down (filters)
    * Push down filters through RebalancePartitions ([SPARK-37828](https://issues.apache.org/jira/browse/SPARK-37828))
    * Push down boolean column filter ([SPARK-36644](https://issues.apache.org/jira/browse/SPARK-36644))
    * Push down limit 1 for right side of left semi/anti join if join condition is empty ([SPARK-37917](https://issues.apache.org/jira/browse/SPARK-37917))
    * Translate more standard aggregate functions for pushdown ([SPARK-37527](https://issues.apache.org/jira/browse/SPARK-37527))
    * Support propagate empty relation through aggregate/union ([SPARK-35442](https://issues.apache.org/jira/browse/SPARK-35442))
    * Row-level Runtime Filtering ([SPARK-32268](https://issues.apache.org/jira/browse/SPARK-32268))
    * Support Left Semi join in row level runtime filters ([SPARK-38565](https://issues.apache.org/jira/browse/SPARK-38565))
    * Support predicate pushdown and column pruning for de-duped CTEs ([SPARK-37670](https://issues.apache.org/jira/browse/SPARK-37670))
* Vectorization
    * Implement a ConstantColumnVector and improve performance of the hidden file metadata ([SPARK-37896](https://issues.apache.org/jira/browse/SPARK-37896))
    * Enable vectorized read for VectorizedPlainValuesReader.readBooleans ([SPARK-35867](https://issues.apache.org/jira/browse/SPARK-35867))
* Combine/remove/replace nodes
    * Combine unions if there is a project between them ([SPARK-37915](https://issues.apache.org/jira/browse/SPARK-37915))
    * Combine to one cast if we can safely up-cast two casts ([SPARK-37922](https://issues.apache.org/jira/browse/SPARK-37922))
    * Remove the Sort if it is the child of RepartitionByExpression ([SPARK-36703](https://issues.apache.org/jira/browse/SPARK-36703))
    * Removes outer join if it only has DISTINCT on streamed side with alias ([SPARK-37292](https://issues.apache.org/jira/browse/SPARK-37292))
    * Replace hash with sort aggregate if child is already sorted ([SPARK-37455](https://issues.apache.org/jira/browse/SPARK-37455))
    * Replace object hash with sort aggregate if child is already sorted ([SPARK-37557](https://issues.apache.org/jira/browse/SPARK-37557))
    * Only collapse projects if we don't duplicate expensive expressions ([SPARK-36718](https://issues.apache.org/jira/browse/SPARK-36718))
    * Remove redundant aliases after RewritePredicateSubquery ([SPARK-36280](https://issues.apache.org/jira/browse/SPARK-36280))
    * Merge non-correlated scalar subqueries ([SPARK-34079](https://issues.apache.org/jira/browse/SPARK-34079))
* Partitioning
    * Do not add dynamic partition pruning if there exists static partition pruning ([SPARK-38148](https://issues.apache.org/jira/browse/SPARK-38148))
    * Improve RebalancePartitions in rules of Optimizer ([SPARK-37904](https://issues.apache.org/jira/browse/SPARK-37904))
    * Add small partition factor for rebalance partitions ([SPARK-37357](https://issues.apache.org/jira/browse/SPARK-37357))
* Join
    * Fine tune logic to demote Broadcast hash join in DynamicJoinSelection ([SPARK-37753](https://issues.apache.org/jira/browse/SPARK-37753))
    * Ignore duplicated join keys when building relation for SEMI/ANTI shuffled hash join ([SPARK-36794](https://issues.apache.org/jira/browse/SPARK-36794))
    * Support optimize skewed join even if introduce extra shuffle ([SPARK-33832](https://issues.apache.org/jira/browse/SPARK-33832))
* AQE
    * Support eliminate limits in AQE Optimizer ([SPARK-36424](https://issues.apache.org/jira/browse/SPARK-36424))
    * Optimize one row plan in normal and AQE Optimizer ([SPARK-38162](https://issues.apache.org/jira/browse/SPARK-38162))
* Aggregate.groupOnly support foldable expressions ([SPARK-38489](https://issues.apache.org/jira/browse/SPARK-38489))
* ByteArrayMethods arrayEquals should fast skip the check of aligning with unaligned platform ([SPARK-37796](https://issues.apache.org/jira/browse/SPARK-37796))
* Add tree pattern pruning to CTESubstitution rule ([SPARK-37379](https://issues.apache.org/jira/browse/SPARK-37379))
* Add more Not operator simplifications ([SPARK-36665](https://issues.apache.org/jira/browse/SPARK-36665))
* Support BooleanType in UnwrapCastInBinaryComparison ([SPARK-36607](https://issues.apache.org/jira/browse/SPARK-36607))
* Coalesce drop all expressions after the first non nullable expression ([SPARK-36359](https://issues.apache.org/jira/browse/SPARK-36359))
* Add a logical plan visitor to propagate the distinct attributes ([SPARK-36194](https://issues.apache.org/jira/browse/SPARK-36194))


#### Built-in Connector Enhancements



* General
    * Lenient serialization of datetime from datasource ([SPARK-38437](https://issues.apache.org/jira/browse/SPARK-38437))
    * Treat table location as absolute when the first letter of its path is slash in create/alter table ([SPARK-38236](https://issues.apache.org/jira/browse/SPARK-38236))
    * Remove leading zeros from empty static number type partition ([SPARK-35561](https://issues.apache.org/jira/browse/SPARK-35561))
    * Support `ignoreCorruptFiles` and `ignoreMissingFiles` in Data Source options ([SPARK-38767](https://issues.apache.org/jira/browse/SPARK-38767))
* Parquet
    * Enable matching schema column names by field ids ([SPARK-38094](https://issues.apache.org/jira/browse/SPARK-38094))
    * Remove check field name when reading/writing data in parquet ([SPARK-27442](https://issues.apache.org/jira/browse/SPARK-27442))
    * Support vectorized read boolean values use RLE encoding with Parquet DataPage V2 ([SPARK-37864](https://issues.apache.org/jira/browse/SPARK-37864))
    * Support Parquet V2 data page encoding (DELTA_BINARY_PACKED) for the vectorized path ([SPARK-36879](https://issues.apache.org/jira/browse/SPARK-36879))
    * Rebase timestamps in the session time zone saved in Parquet/Avro metadata ([SPARK-37705](https://issues.apache.org/jira/browse/SPARK-37705))
    * Push down group by partition column for aggregate ([SPARK-36646](https://issues.apache.org/jira/browse/SPARK-36646))
    * Aggregate (Min/Max/Count) push down for Parquet ([SPARK-36645](https://issues.apache.org/jira/browse/SPARK-36645))
    * Parquet: enable matching schema columns by field id ([SPARK-38094](https://issues.apache.org/jira/browse/SPARK-38094))
    * Reduce default page size by LONG_ARRAY_OFFSET if G1GC and ON_HEAP are used ([SPARK-37593](https://issues.apache.org/jira/browse/SPARK-37593))
    * Implement vectorized DELTA_BYTE_ARRAY and DELTA_LENGTH_BYTE_ARRAY encodings for Parquet V2 support ([SPARK-37974](https://issues.apache.org/jira/browse/SPARK-37974))
    * Support complex types for Parquet vectorized reader ([SPARK-34863](https://issues.apache.org/jira/browse/SPARK-34863))
* ORC
    * Remove check field name when reading/writing existing data in ORC ([SPARK-37965](https://issues.apache.org/jira/browse/SPARK-37965))
    * Aggregate push down for ORC ([SPARK-34960](https://issues.apache.org/jira/browse/SPARK-34960))
    * Support reading and writing ANSI intervals from/to ORC data sources ([SPARK-36931](https://issues.apache.org/jira/browse/SPARK-36931))
    * Support number-only column names in ORC data sources ([SPARK-36663](https://issues.apache.org/jira/browse/SPARK-36663))
* JSON
    * Respect allowNonNumericNumbers when parsing quoted NaN and Infinity values in JSON reader ([SPARK-38060](https://issues.apache.org/jira/browse/SPARK-38060))
    * Use CAST for datetime in CSV/JSON by default ([SPARK-36536](https://issues.apache.org/jira/browse/SPARK-36536))
    * Align error message for unsupported key types in MapType in Json reader ([SPARK-35320](https://issues.apache.org/jira/browse/SPARK-35320))
    * Add a legacy configuration for respecting nullability in DataFrame.schema.csv/json(ds) ([SPARK-35912](https://issues.apache.org/jira/browse/SPARK-35912))
* CSV
    * Fix referring to the corrupt record column from CSV ([SPARK-38534](https://issues.apache.org/jira/browse/SPARK-38523))
    * null values should be saved as nothing instead of quoted empty Strings "" by default ([SPARK-37575](https://issues.apache.org/jira/browse/SPARK-37575))
    * Fasten Timestamp type inference of default format in JSON/CSV data source ([SPARK-39193](https://issues.apache.org/jira/browse/SPARK-39193))
* JDBC
    * Support cascade mode for JDBC V2 ([SPARK-37929](https://issues.apache.org/jira/browse/SPARK-37929))
    * Add the IMMEDIATE statement to the DB2 dialect truncate implementation ([SPARK-30062](https://issues.apache.org/jira/browse/SPARK-30062))
    * Support aggregate functions of build-in JDBC dialect ([SPARK-37867](https://issues.apache.org/jira/browse/SPARK-37867))
    * Move compileAggregates from JDBCRDD to JdbcDialect ([SPARK-37286](https://issues.apache.org/jira/browse/SPARK-37286))
    * Implement dropIndex and listIndexes in JDBC (MySQL dialect) ([SPARK-36914](https://issues.apache.org/jira/browse/SPARK-36914))
    * Supports list namespaces in JDBC V2 MySQL dialect ([SPARK-38054](https://issues.apache.org/jira/browse/SPARK-38054))
    * Add factory method getConnection into JDBCDialect ([SPARK-38361](https://issues.apache.org/jira/browse/SPARK-38361))
    * Jdbc dialect should decide which function could be pushed down ([SPARK-39162](https://issues.apache.org/jira/browse/SPARK-39162))
    * Propagate correct JDBC properties in JDBC connector provider and add "connectionProvider" option ([SPARK-36163](https://issues.apache.org/jira/browse/SPARK-36163))
    * Refactor framework so as JDBC dialect could compile filter by self way ([SPARK-38432](https://issues.apache.org/jira/browse/SPARK-38432))
    * 
* Hive
    * Support writing Hive bucketed table (Parquet/ORC format with Hive hash) ([SPARK-32709](https://issues.apache.org/jira/browse/SPARK-32709))
    * Support writing Hive bucketed table (Hive file formats with Hive hash) ([SPARK-32712](https://issues.apache.org/jira/browse/SPARK-32712))
    * Use expressions to filter Hive partitions at client side ([SPARK-35437](https://issues.apache.org/jira/browse/SPARK-35437))
    * Support Dynamic Partition pruning for HiveTableScanExec ([SPARK-36876](https://issues.apache.org/jira/browse/SPARK-36876))
    * InsertIntoHiveDir should use data source if it's convertible ([SPARK-38215](https://issues.apache.org/jira/browse/SPARK-38215))


#### Data Source V2 API



* New interfaces
    * Introduce a new DataSource V2 interface HasPartitionKey ([SPARK-37376](https://issues.apache.org/jira/browse/SPARK-37376))
    * Add interface SupportsPushDownV2Filters ([SPARK-36760](https://issues.apache.org/jira/browse/SPARK-36760))
    * Support DataSource V2 CreateTempViewUsing ([SPARK-35803](https://issues.apache.org/jira/browse/SPARK-35803))
    * Add a class to represent general aggregate functions in DS V2 ([SPARK-37789](https://issues.apache.org/jira/browse/SPARK-37789))
    * A new framework to represent catalyst expressions in DS V2 APIs ([SPARK-37960](https://issues.apache.org/jira/browse/SPARK-37960))
    * Reactor framework so as JDBC dialect could compile expression by self way ([SPARK-38196](https://issues.apache.org/jira/browse/SPARK-38196))
    * Refactor framework so as JDBC dialect could compile filter by self way ([SPARK-38432](https://issues.apache.org/jira/browse/SPARK-38432))
    * DSV2 InputMetrics are not getting update in corner case ([SPARK-37585](https://issues.apache.org/jira/browse/SPARK-37585))
    * Add APIs for group-based row-level operations ([SPARK-38625](https://issues.apache.org/jira/browse/SPARK-38625))
* Migrate commands
    * Migrate SHOW CREATE TABLE to use V2 command by default ([SPARK-37878](https://issues.apache.org/jira/browse/SPARK-37878))
    * Migrate CREATE NAMESPACE to use V2 command by default ([SPARK-37636](https://issues.apache.org/jira/browse/SPARK-37636))
    * Migrate DESCRIBE NAMESPACE to use V2 command by default ([SPARK-37150](https://issues.apache.org/jira/browse/SPARK-37150))
* Indexing
    * Support drop index for Data Source V2 ([SPARK-37200](https://issues.apache.org/jira/browse/SPARK-37200))
    * Add Create Index syntax support ([SPARK-36895](https://issues.apache.org/jira/browse/SPARK-36895))
    * Implement createIndex and IndexExists in DS V2 JDBC (MySQL dialect) ([SPARK-36913](https://issues.apache.org/jira/browse/SPARK-36913))
    * DS V2 Index Support: Add supportsIndex interface ([SPARK-36526](https://issues.apache.org/jira/browse/SPARK-36526))
* Push down ([SPARK-38788](https://issues.apache.org/jira/browse/SPARK-38788))
    * Add DS V2 filters ([SPARK-36556](https://issues.apache.org/jira/browse/SPARK-36556))
    * Push down boolean column filter for Data Source V2 ([SPARK-36644](https://issues.apache.org/jira/browse/SPARK-36644))
    * Support push down top N to JDBC data source V2 ([SPARK-37483](https://issues.apache.org/jira/browse/SPARK-37483))
    * DS V2 Sample Push Down ([SPARK-37038](https://issues.apache.org/jira/browse/SPARK-37038))
    * DS V2 LIMIT push down ([SPARK-37020](https://issues.apache.org/jira/browse/SPARK-37020))
    * DS V2 supports partial aggregate push-down `AVG` ([SPARK-37839](https://issues.apache.org/jira/browse/SPARK-37839))
    * Support datasource V2 complete aggregate pushdown ([SPARK-37644](https://issues.apache.org/jira/browse/SPARK-37644))
    * DS V2 supports partial aggregate push-down `AVG` ([SPARK-37839](https://issues.apache.org/jira/browse/SPARK-37839))
    * If `Sum`, `Count`, `Any` accompany distinct, cannot do partial agg push down ([SPARK-38560](https://issues.apache.org/jira/browse/SPARK-38560))
    * Translate more standard aggregate functions for pushdown ([SPARK-37527](https://issues.apache.org/jira/browse/SPARK-37527))
    * DS V2 aggregate push-down supports project with alias ([SPARK-38533](https://issues.apache.org/jira/browse/SPARK-38533))
    * DS V2 topN push-down supports project with alias ([SPARK-38644](https://issues.apache.org/jira/browse/SPARK-38644))
    * DS V2 Top N push-down supports order by expressions ([SPARK-39037](https://issues.apache.org/jira/browse/SPARK-39037))
    * Datasource V2 supports partial topN push-down ([SPARK-38391](https://issues.apache.org/jira/browse/SPARK-38391))
    * Support push down Cast to JDBC data source V2 ([SPARK-38633](https://issues.apache.org/jira/browse/SPARK-38633))
    * If limit could pushed down and Data source only have one partition, DS V2 should not do limit again ([SPARK-38768](https://issues.apache.org/jira/browse/SPARK-38768))
    * Remove `Limit` from plan if complete push down limit to data source ([SPARK-38768](https://issues.apache.org/jira/browse/SPARK-38768))
    * DS V2 supports push down misc non-aggregate functions ([SPARK-38761](https://issues.apache.org/jira/browse/SPARK-38761))
    * DS V2 supports push down math functions ([SPARK-38855](https://issues.apache.org/jira/browse/SPARK-38855))
    * DS V2 aggregate push-down supports group by expressions ([SPARK-38997](https://issues.apache.org/jira/browse/SPARK-38997))
    * DS V2 aggregate partial push-down should supports group by without aggregate functions ([SPARK-39135](https://issues.apache.org/jira/browse/SPARK-39135))
* Support nested columns in ORC vectorized reader for data source V2 ([SPARK-36404](https://issues.apache.org/jira/browse/SPARK-36404))
* Update task metrics from ds V2 custom metrics ([SPARK-37578](https://issues.apache.org/jira/browse/SPARK-37578))
* Unify V1 and V2 options output of `SHOW CREATE TABLE` command ([SPARK-37494](https://issues.apache.org/jira/browse/SPARK-37494))
* Add command `SHOW CATALOGS` ([SPARK-35973](https://issues.apache.org/jira/browse/SPARK-35973))


#### Kubernetes Enhancements



* Executor Rolling in Kubernetes environment ([SPARK-37810](https://issues.apache.org/jira/browse/SPARK-37810))
* Support Customized Kubernetes Schedulers ( [SPARK-36057](https://issues.apache.org/jira/browse/SPARK-36057))
* executorIdleTimeout is not working for pending pods on K8s ([SPARK-37049](https://issues.apache.org/jira/browse/SPARK-37049))
* Upgrade kubernetes-client to 5.12.2 ([SPARK-38817](https://issues.apache.org/jira/browse/SPARK-38817))
* Make memory overhead factor configurable ([SPARK-38194](https://issues.apache.org/jira/browse/SPARK-38194))
* Add Volcano build-in integration and PodGroup template support for Spark on Kubernetes (experimental). ([SPARK-36061,](https://issues.apache.org/jira/browse/SPARK-36061) [SPARK-38455](https://issues.apache.org/jira/browse/SPARK-38455))
* Add KubernetesCustom[Driver/Executor]FeatureConfigStep developer API ([SPARK-37145](https://issues.apache.org/jira/browse/SPARK-37145))


#### Node Decommission



* FallbackStorage shouldn’t attempt to resolve arbitrary “remote” hostname ([SPARK-38062](https://issues.apache.org/jira/browse/SPARK-38062))
* ExecutorMonitor.onExecutorRemoved should handle ExecutorDecommission as finished ([SPARK-38023](https://issues.apache.org/jira/browse/SPARK-38023))


#### Push-based shuffle



* Adaptive shuffle merge finalization for push-based shuffle ([SPARK-33701](https://issues.apache.org/jira/browse/SPARK-33701))
* Adaptive fetch of shuffle mergers for Push based shuffle ([SPARK-34826](https://issues.apache.org/jira/browse/SPARK-34826))
* Skip diagnosis ob merged blocks from push-based shuffle ([SPARK-37695](https://issues.apache.org/jira/browse/SPARK-37695))
* PushBlockStreamCallback should check isTooLate first to avoid NPE ([SPARK-37847](https://issues.apache.org/jira/browse/SPARK-37847))
* Push-based merge finalization bugs in the RemoteBlockPushResolver ([SPARK-37675](https://issues.apache.org/jira/browse/SPARK-37675))
* Avoid fetching merge status when shuffleMergeEnabled is false for a shuffleDependency during retry ([SPARK-37023](https://issues.apache.org/jira/browse/SPARK-37023))


#### Other Notable Changes



* Add fine grained locking to BlockInfoManager ([SPARK-37356](https://issues.apache.org/jira/browse/SPARK-37356))
* Support mapping Spark gpu/fpga resource types to custom YARN resource type ([SPARK-37208](https://issues.apache.org/jira/browse/SPARK-37208))
* Report accurate shuffle block size if its skewed ([SPARK-36967](https://issues.apache.org/jira/browse/SPARK-36967))
* Supporting Netty Logging at the network layer ([SPARK-36719](https://issues.apache.org/jira/browse/SPARK-36719))


### Structured Streaming


#### Major feature



* Introduce Trigger.AvailableNow for running streaming queries like Trigger.Once in multiple batches ([SPARK-36533](https://issues.apache.org/jira/browse/SPARK-36533))


#### Other Notable Changes



* Use StatefulOpClusteredDistribution for stateful operators with respecting backward compatibility ([SPARK-38204](https://issues.apache.org/jira/browse/SPARK-38204))
* Fix flatMapGroupsWithState timeout in batch with data for key ([SPARK-38320](https://issues.apache.org/jira/browse/SPARK-38320))
* Fix correctness issue on stream-stream outer join with RocksDB state store provider ([SPARK-38684](https://issues.apache.org/jira/browse/SPARK-38684))
* Upgrade Kafka to 3.1.0 ([SPARK-36837](https://issues.apache.org/jira/browse/SPARK-36837))
* Support Trigger.AvailableNow on Kafka data source ([SPARK-36649](https://issues.apache.org/jira/browse/SPARK-36649))
* Optimize write path on RocksDB state store provider ([SPARK-37224](https://issues.apache.org/jira/browse/SPARK-37224))
* Introduce a new data source for providing consistent set of rows per microbatch ([SPARK-37062](https://issues.apache.org/jira/browse/SPARK-37062))
* Use HashClusteredDistribution for stateful operators with respecting backward compatibility ([SPARK-38204](https://issues.apache.org/jira/browse/SPARK-38204))
* Make foreachBatch streaming query stop gracefully ([SPARK-39218](https://issues.apache.org/jira/browse/SPARK-39218))


### PySpark 


#### Pandas API on Spark



* Major improvement
    * **'distributed-sequence' index **optimization with being **default** ([SPARK-37649](https://issues.apache.org/jira/browse/SPARK-37649), [SPARK-36559](https://issues.apache.org/jira/browse/SPARK-36559), [SPARK-36338](https://issues.apache.org/jira/browse/SPARK-36338))
    * Support to specify index type and name in pandas API on Spark ([SPARK-36709](https://issues.apache.org/jira/browse/SPARK-36709))
    * Show default index type in SQL plans for pandas API on Spark ([SPARK-38654](https://issues.apache.org/jira/browse/SPARK-38654))
* Major feature
    * Implement SparkSQL native ps.**merge_asof** ([SPARK-36813](https://issues.apache.org/jira/browse/SPARK-36813))
    * Support TimedeltaIndex in pandas API on Spark ([SPARK-37525](https://issues.apache.org/jira/browse/SPARK-37525))
    * Support Python’s **timedelta** ([SPARK-37275](https://issues.apache.org/jira/browse/SPARK-37275), [SPARK-37510](https://issues.apache.org/jira/browse/SPARK-37510))
    * Implement functions in CategoricalAccessor/CategoricalIndex ([SPARK-36185](https://issues.apache.org/jira/browse/SPARK-36185))
    * Uses Python's standard string formatter for SQL API in pandas API on Spark ([SPARK-37436](https://issues.apache.org/jira/browse/SPARK-37436))
    * Support basic operations of timedelta Series/Index ([SPARK-37510](https://issues.apache.org/jira/browse/SPARK-37510))
    * Support ps.MultiIndex.dtypes ([SPARK-36930](https://issues.apache.org/jira/browse/SPARK-36930))
    * Implement Index.map ([SPARK-36469](https://issues.apache.org/jira/browse/SPARK-36469))
    * Implement Series.__xor__ and Series.__rxor__ ([SPARK-36653](https://issues.apache.org/jira/browse/SPARK-36653))
    * Implement unary operator `invert` of integral ps.Series/Index ([SPARK-36003](https://issues.apache.org/jira/browse/SPARK-36003))
    * Implement DataFrame.cov ([SPARK-36396](https://issues.apache.org/jira/browse/SPARK-36396))
    * Support str and timestamp for (Series|DataFrame).describe() ([SPARK-37657](https://issues.apache.org/jira/browse/SPARK-37657))
    * Support lambda `column` parameter of `DataFrame.rename`([SPARK-38763](https://issues.apache.org/jira/browse/SPARK-38763))


#### Other Notable Changes



* Breaking changes
    * Drop references to Python 3.6 support in docs and python/docs ([SPARK-36977](https://issues.apache.org/jira/browse/SPARK-36977))
    * Remove namedtuple hack by replacing built-in pickle to cloudpickle ([SPARK-32079](https://issues.apache.org/jira/browse/SPARK-32079))
    * Bump minimum pandas version to 1.0.5 ([SPARK-37465](https://issues.apache.org/jira/browse/SPARK-37465))
* Major improvements
    * Provide a **profiler** for Python/Pandas UDFs ([SPARK-37443](https://issues.apache.org/jira/browse/SPARK-37443))
    * Uses Python's standard string formatter for SQL API in PySpark ([SPARK-37516](https://issues.apache.org/jira/browse/SPARK-37516))
    * Expose SQL state and error class in PySpark exceptions ([SPARK-36953](https://issues.apache.org/jira/browse/SPARK-36953))
    * Try to capture faulthanlder when a Python worker crashes ([SPARK-36062](https://issues.apache.org/jira/browse/SPARK-36062))
* Major feature
    * Implement DataFrame.**mapInArrow** in Python ([SPARK-37228](https://issues.apache.org/jira/browse/SPARK-37228))
    * Uses Python's standard string formatter for SQL API in PySpark ([SPARK-37516](https://issues.apache.org/jira/browse/SPARK-37516))
    * Add df.withMetadata pyspark API ([SPARK-36642](https://issues.apache.org/jira/browse/SPARK-36642))
    * Support Python’s timedelta ([SPARK-37275](https://issues.apache.org/jira/browse/SPARK-37275))
    * Expose tableExists in pyspark.sql.catalog ([SPARK-36176](https://issues.apache.org/jira/browse/SPARK-36176)) 
    * Expose databaseExists in pyspark.sql.catalog ([SPARK-36207](https://issues.apache.org/jira/browse/SPARK-36207))
    * Exposing functionExists in pyspark sql catalog ([SPARK-36258](https://issues.apache.org/jira/browse/SPARK-36258))
    * Add Dataframe.observation to PySpark ([SPARK-36263](https://issues.apache.org/jira/browse/SPARK-36263))
    * Add max_by/min_by API to PySpark ([SPARK-36972](https://issues.apache.org/jira/browse/SPARK-36972))
    * Support to infer nested dict as a struct when creating a DataFrame ([SPARK-35929](https://issues.apache.org/jira/browse/SPARK-35929))
    * Add bit/octet_length APIs to Scala, Python and R ([SPARK-36751](https://issues.apache.org/jira/browse/SPARK-36751))
    * Support ILIKE API on Python ([SPARK-36882](https://issues.apache.org/jira/browse/SPARK-36882))
    * Add isEmpty method for the Python DataFrame API ([SPARK-37207](https://issues.apache.org/jira/browse/SPARK-37207))
    * Add multiple columns adding support ([SPARK-35173](https://issues.apache.org/jira/browse/SPARK-35173))
    * Add SparkContext.addArchive in PySpark ([SPARK-38278](https://issues.apache.org/jira/browse/SPARK-38278))
    * Make sql type reprs eval-able ([SPARK-18621](https://issues.apache.org/jira/browse/SPARK-18621))
    * Inline type hints for fpm.py in python/pyspark/mllib ([SPARK-37396](https://issues.apache.org/jira/browse/SPARK-37396))
    * Implement `dropna` parameter of `SeriesGroupBy.value_counts` ([SPARK-38837](https://issues.apache.org/jira/browse/SPARK-38837))


### MLLIB



* Major feature
    * Add distanceMeasure param to trainKMeansModel ([SPARK-37118](https://issues.apache.org/jira/browse/SPARK-37118))
    * Expose LogisticRegression.setInitialModel, like KMeans et al do ([SPARK-36481](https://issues.apache.org/jira/browse/SPARK-36481))
    * Support CrossValidatorModel get standard deviation of metrics for each paramMap ([SPARK-36425](https://issues.apache.org/jira/browse/SPARK-36425))
* Major improvements
    * Optimize some treeAggregates in MLlib by delaying allocations ([SPARK-35848](https://issues.apache.org/jira/browse/SPARK-35848))
    * Rewrite _shared_params_code_gen.py to inline type hints for ml/param/shared.py ([SPARK-37419](https://issues.apache.org/jira/browse/SPARK-37419))
* Other Notable Changes
    * Update to breeze 1.2 ([SPARK-35310](https://issues.apache.org/jira/browse/SPARK-35310))


### SparkR



* Migrate SparkR docs to pkgdown ([SPARK-37474](https://issues.apache.org/jira/browse/SPARK-37474))
* Expose make_date expression in R ([SPARK-37108](https://issues.apache.org/jira/browse/SPARK-37108))
* Add max_by/min_by API to SparkR ([SPARK-36976](https://issues.apache.org/jira/browse/SPARK-36976))
* Support ILIKE API on R ([SPARK-36899](https://issues.apache.org/jira/browse/SPARK-36899))
* Add sec and csc as R functions ([SPARK-36824](https://issues.apache.org/jira/browse/SPARK-36824))
* Add bit/octet_length APIs to Scala, Python and R ([SPARK-36751](https://issues.apache.org/jira/browse/SPARK-36751))
* Add cot as an R function ([SPARK-36688](https://issues.apache.org/jira/browse/SPARK-36688))


### UI



* Speculation metrics summary at stage level ([SPARK-36038](https://issues.apache.org/jira/browse/SPARK-36038))
* Unified shuffle read block time to shuffle read fetch wait time in StagePage ([SPARK-37469](https://issues.apache.org/jira/browse/SPARK-37469))
* Add modified configs for SQL execution in UI ([SPARK-34735](https://issues.apache.org/jira/browse/SPARK-34735))
* Make ThriftServer recognize spark.sql.redaction.string.regex ([SPARK-36400](https://issues.apache.org/jira/browse/SPARK-36400))
* Attach and start handler after application started in UI ([SPARK-36237](https://issues.apache.org/jira/browse/SPARK-36237))
* Add commit duration to SQL tab's graph node ([SPARK-34399](https://issues.apache.org/jira/browse/SPARK-34399))
* Support RocksDB backend in Spark History Server ([SPARK-37680](https://issues.apache.org/jira/browse/SPARK-37680))
* Show options for Pandas API on Spark in UI ([SPARK-38656](https://issues.apache.org/jira/browse/SPARK-38656))
* Rename 'SQL' to 'SQL / DataFrame' in SQL UI page ([SPARK-38657](https://issues.apache.org/jira/browse/SPARK-38657))


### Build



* Build and Run Spark on Java 17 ([SPARK-33772](https://issues.apache.org/jira/browse/SPARK-33772))
* Migrating from log4j 1 to log4j 2 ([SPARK-37814](https://issues.apache.org/jira/browse/SPARK-37814))
* Upgrade log4j2 to 2.17.2 ([SPARK-38544](https://issues.apache.org/jira/browse/SPARK-38544))
* Spark on Apple Silicon ([SPARK-35781](https://issues.apache.org/jira/browse/SPARK-35781))
* Upgrade to Py4J 0.10.9.5 ([SPARK-38563](https://issues.apache.org/jira/browse/SPARK-38563))
* Upgrade jackson due to CVE-2020-36518 ([SPARK-38665](https://issues.apache.org/jira/browse/SPARK-38665))
* Upgrade Jackson to 2.13.3 ([SPARK-39250](https://issues.apache.org/jira/browse/SPARK-39250))
* Update ORC to 1.7.4 ([SPARK-38866](https://issues.apache.org/jira/browse/SPARK-38866))
* Update datatables to 1.10.25 ([SPARK-38924](https://issues.apache.org/jira/browse/SPARK-38924))
* Upgrade Jetty to 9.4.46 ([SPARK-38784](https://issues.apache.org/jira/browse/SPARK-38784))
* Upgrade h2 from 1.4.195 to 2.0.202 ([SPARK-37734](https://issues.apache.org/jira/browse/SPARK-37734))
* Upgrade Apache Xerces Java to 2.12.2 ([SPARK-39183](https://issues.apache.org/jira/browse/SPARK-39183))