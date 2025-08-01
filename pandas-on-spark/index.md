---
layout: global
type: "page singular"
title: pandas API on Spark
description: The pandas API on Spark offers the familiarity of pandas with the power of Spark.
subproject: pandas API on Spark
---

# pandas API on Spark

This page describes the advantages of the pandas API on Spark (“pandas on Spark”) and when you should use it instead of pandas (or in conjunction with pandas).

pandas on Spark can be much faster than pandas and offers syntax that is familiar to pandas users.  It offers the power of Spark with the familiarity of pandas.

Here are the main advantages of pandas on Spark:

* Faster query execution on single-machine workloads (because pandas on Spark uses all available cores, processes queries in parallel, and optimizes queries)
* pandas on Spark is scalable to multiple machines in a cluster and can process big data
* pandas on Spark allows queries to be run on larger than memory datasets
* pandas on Spark provides familiar syntax for pandas users

pandas has many limitations:

* pandas must load all data into memory before running a query which can be slow
* pandas cannot process datasets that are larger than the available memory on a single machine (because all data must be loaded into memory)
* pandas computations are run on a single core and don't leverage all available cores of a single machine
* pandas computations cannot be scaled out to multiple machines
* pandas doesn't have a query optimizer, so users have to manually code optimizations or suffer from slow code

Let's look at some simple examples to get a better understanding of how pandas on Spark overcomes the limitations of pandas.  We’ll also investigate the limitations of pandas on Spark.

At the end of this page, you will see how you can use both pandas and pandas on Spark in conjunction.  It’s not an either/or decision - in many situations using both is a great option.

## pandas on Spark example

This section demonstrates how pandas on Spark can run a query on a single file on localhost faster than pandas.  pandas on Spark isn’t necessarily faster for all queries, but this example shows when it provides a nice speed-up.

Suppose you have a Parquet file with 9 columns and 1 billion rows of data.  Here are the first three rows of the file:

```
+-------+-------+--------------+-------+-------+--------+------+------+---------+
| id1   | id2   | id3          |   id4 |   id5 |    id6 |   v1 |   v2 |      v3 |
|-------+-------+--------------+-------+-------+--------+------+------+---------|
| id016 | id046 | id0000109363 |    88 |    13 | 146094 |    4 |    6 | 18.8377 |
| id039 | id087 | id0000466766 |    14 |    30 | 111330 |    4 |   14 | 46.7973 |
| id047 | id098 | id0000307804 |    85 |    23 | 187639 |    3 |    5 | 47.5773 |
+-------+-------+--------------+-------+-------+--------+------+------+---------+
```

Here is how you can use pandas on Spark to read the file and run a group by aggregation.

```python
import pyspark.pandas as ps

df = ps.read_parquet("G1_1e9_1e2_0_0.parquet")[
    ["id1", "id2", "v3"]
]
df.query("id1 > 'id098'").groupby("id2").sum().head(3)
```

This query runs in 62 seconds when executed on a 2020 M1 Macbook with 64 GB of RAM with Spark 3.5.0.

Let's compare this with unoptimized pandas code.

```python
import pandas as pd

df = pd.read_parquet("G1_1e9_1e2_0_0.parquet")[
    ["id1", "id2", "v3"]
]
df.query("id1 > 'id098'").groupby("id2").sum().head(3)
```

This query errors out because the machine with 64GB of RAM does not have enough space to store 1 billion rows of data in memory.

Let’s manually add some pandas optimizations to make the query run:

```python
df = pd.read_parquet(
    "G1_1e9_1e2_0_0.parquet",
    columns=["id1", "id2", "v3"],
    filters=[("id1", ">", "id098")],
    engine="pyarrow",
)
df.query("id1 > 'id098'").groupby("id2").sum().head(3)
```

This query runs in 275 seconds with pandas 2.2.0.

Coding these optimizations manually with pandas can potentially give the wrong results.  Here’s an example of a group by query that’s correct, but with a row-group filtering predicate that’s wrong:

```python
df = pd.read_parquet(
    "G1_1e9_1e2_0_0.parquet",
    columns=["id1", "id2", "v3"],
    filters=[("id1", "==", "id001")],
    engine="pyarrow",
)
df.query("id1 > 'id098'").groupby("id2").sum().head(3)
```

This returns the wrong result, even though the group by aggregation logic is right!

With pandas, you need to manually apply column pruning and row-group filtering when reading a Parquet file.  With pandas on Spark, the Spark optimizer automatically applies these query enhancements, so you do not need to type them manually.

Let's investigate the advantages of pandas on Spark in more detail.

## Advantages of pandas on Spark

Let's recap the advantages of pandas on Spark:

**Faster query execution**

pandas on Spark can execute queries faster than pandas because it uses all the available cores to parallelize computations and optimizes queries before running them to allow for efficient execution.

pandas computations only run on a single core.

**Scalable to larger-than-memory datasets**

pandas loads data in memory before running queries, so it can only query datasets that fit into memory.

Spark can query datasets that are larger than memory by streaming the data and incrementally running computations.

pandas is notorious for erroring out when dataset sizes grow and Spark doesn't have this limitation.

**Runnable on a cluster of many machines**

Spark can be run on a single machine or distributed to many machines in a cluster.

When Spark is run on a single machine, the computations are run on all available cores.  This is often faster than pandas which only runs computations on a single core.

Scaling computations on multiple machines is great for when you want to run computations on larger data sets or simply access more RAM/cores so the queries run faster.

**Familiar syntax for pandas users**

pandas on Spark was designed to provide familiar syntax for pandas users.

The familiar syntax is the whole point - pandas on Spark provides the power of Spark with the same syntax that pandas users are accustomed to.

**Provides access to Spark's battle-tested query optimizer**

pandas on Spark computations are optimized by Spark’s Catalyst optimizer before they're executed.

These optimizations simplify queries and add optimizations.

Earlier in this post, we saw how Spark automatically adds the column pruning/row group filtering optimizations when reading Parquet files for example.  pandas doesn't have a query optimizer, so you need to add these optimizations yourself.  Manually adding optimizations is tedious and error-prone.  If you don't manually apply the right optimizations, your query will return the wrong result.

## Limitations of pandas on Spark

pandas on Spark doesn't support all the APIs that pandas supports for two reasons:

* some features haven't been added to pandas on Spark yet

* some pandas features don't make sense with Spark's distributed, parallel execution model

Spark breaks up DataFrames into multiple chunks so they can be processed in parallel, so certain pandas operations don't transition well to Spark's execution model.

## Using pandas on Spark in conjunction with regular pandas

It’s often useful to use pandas on Spark and pandas to get the best of both worlds.

Suppose you have a large dataset that you clean and aggregate into a smaller dataset that’s passed into a scikit-learn machine learning model.  

You can clean and aggregate the dataset with pandas on Spark to take advantage of fast query times and parallel execution.  Once the dataset is processed, you can convert it to a pandas DataFrame with `to_pandas()` and then run the machine learning model with scikit-learn.  This approach works well if the dataset can be reduced enough to fit in a pandas DataFrame.

## The pandas on Spark query execution model is different

pandas on Spark executes queries completely differently than pandas.

pandas on Spark uses lazy evaluation.  It converts the query to an unresolved logical plan, optimizes it with Spark, and only runs computations when results are requested.

pandas uses eager evaluation.  It loads all the data into memory and executes operations immediately when they are invoked.  pandas does not apply query optimization and all the data must be loaded into memory before the query is executed.

When comparing pandas on Spark and pandas, you must be careful to factor in how much time it takes to load the data into memory and how much time it takes to run the query.  A lot of datasets take a long time to load into pandas.

You can also load data into memory with pandas on Spark, but this is often considered an anti-pattern.  A dataset that’s loaded into memory won’t be updated if the data in storage changes (via an append, merge, or deletion).  Persisting a Spark DataFrame is wise in certain situations to speed up query times, but must be used carefully because it can cause incorrect query results.

## How pandas on Spark and PySpark differ

pandas on Spark and PySpark both take queries, convert them to unresolved logical plans, and then execute them with Spark.

PySpark and pandas on Spark both have similar query execution models.  Converting a query to an unresolved logical plan is relatively quick.  Optimizing the query and executing it takes much more time.  So PySpark and pandas on Spark should have similar performance.

The main difference between pandas on Spark and PySpark is just the syntax.  

## Conclusion

pandas on Spark is a great alternative for pandas users who would like to run their queries faster and want to leverage Spark’s optimizer rather than writing their own optimizations.

pandas on Spark uses syntax that’s familiar to pandas users, so it’s easy to learn.

pandas on Spark is also a great technology to be used in conjunction with pandas.  You can use the big-data and performant processing capabilities of pandas on Spark to process datasets before they’re converted into pandas DataFrames that are compatible with other technologies.

Check out [the docs](https://spark.apache.org/docs/latest/api/python/reference/pyspark.pandas/index.html) to learn more about how to use pandas on Spark.
