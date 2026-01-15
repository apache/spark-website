# Write the streaming SparkDataFrame to a data source.

The data source is specified by the `source` and a set of options (...).
If `source` is not specified, the default data source configured by
spark.sql.sources.default will be used.

## Usage

``` r
write.stream(df, source = NULL, outputMode = NULL, ...)

# S4 method for class 'SparkDataFrame'
write.stream(
  df,
  source = NULL,
  outputMode = NULL,
  partitionBy = NULL,
  trigger.processingTime = NULL,
  trigger.once = NULL,
  ...
)
```

## Arguments

  - df:
    
    a streaming SparkDataFrame.

  - source:
    
    a name for external data source.

  - outputMode:
    
    one of 'append', 'complete', 'update'.

  - ...:
    
    additional external data source specific named options.

  - partitionBy:
    
    a name or a list of names of columns to partition the output by on
    the file system. If specified, the output is laid out on the file
    system similar to Hive's partitioning scheme.

  - trigger.processingTime:
    
    a processing time interval as a string, e.g. '5 seconds', '1
    minute'. This is a trigger that runs a query periodically based on
    the processing time. If value is '0 seconds', the query will run as
    fast as possible, this is the default. Only one trigger can be set.

  - trigger.once:
    
    a logical, must be set to `TRUE`. This is a trigger that processes
    only one batch of data in a streaming query then terminates the
    query. Only one trigger can be set.

## Details

Additionally, `outputMode` specifies how data of a streaming
SparkDataFrame is written to a output data source. There are three
modes:

  - append: Only the new rows in the streaming SparkDataFrame will be
    written out. This output mode can be only be used in queries that do
    not contain any aggregation.

  - complete: All the rows in the streaming SparkDataFrame will be
    written out every time there are some updates. This output mode can
    only be used in queries that contain aggregations.

  - update: Only the rows that were updated in the streaming
    SparkDataFrame will be written out every time there are some
    updates. If the query doesn't contain aggregations, it will be
    equivalent to `append` mode.

## Note

write.stream since 2.2.0

experimental

## See also

[read.stream](https://spark.apache.org/docs/3.5.8/api/R/reference/read.stream.md)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
`explain()`, `filter()`, `first()`, `gapply()`, `gapplyCollect()`,
`getNumPartitions()`, `group_by()`, `head()`, `hint()`, `histogram()`,
`insertInto()`, `intersect()`, `intersectAll()`, `isLocal()`,
`isStreaming()`, `join()`, `limit()`, `localCheckpoint()`, `merge()`,
`mutate()`, `ncol()`, `nrow()`, `persist()`, `printSchema()`,
`randomSplit()`, `rbind()`, `rename()`, `repartition()`,
`repartitionByRange()`, `rollup()`, `sample()`, `saveAsTable()`,
`schema()`, `select()`, `selectExpr()`, `show()`, `showDF()`,
`storageLevel()`, `str()`, `subset()`, `summary()`, `take()`,
`toJSON()`, `union()`, `unionAll()`, `unionByName()`, `unpersist()`,
`unpivot()`, `with()`, `withColumn()`, `withWatermark()`, `write.df()`,
`write.jdbc()`, `write.json()`, `write.orc()`, `write.parquet()`,
`write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df <- read.stream("socket", host = "localhost", port = 9999)
isStreaming(df)
wordCounts <- count(group_by(df, "value"))

# console
q <- write.stream(wordCounts, "console", outputMode = "complete")
# text stream
q <- write.stream(df, "text", path = "/home/user/out", checkpointLocation = "/home/user/cp",
                  partitionBy = c("year", "month"), trigger.processingTime = "30 seconds")
# memory stream
q <- write.stream(wordCounts, "memory", queryName = "outs", outputMode = "complete")
head(sql("SELECT * from outs"))
queryName(q)

stopQuery(q)
} # }
```
