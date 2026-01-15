# Repartition by range

The following options for repartition by range are possible:

  - 1\. Return a new SparkDataFrame range partitioned by the given
    columns into `numPartitions`.

  - 2\. Return a new SparkDataFrame range partitioned by the given
    column(s), using `spark.sql.shuffle.partitions` as number of
    partitions.

At least one partition-by expression must be specified. When no explicit
sort order is specified, "ascending nulls first" is assumed.

## Usage

``` r
repartitionByRange(x, ...)

# S4 method for class 'SparkDataFrame'
repartitionByRange(x, numPartitions = NULL, col = NULL, ...)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - ...:
    
    additional column(s) to be used in the range partitioning.

  - numPartitions:
    
    the number of partitions to use.

  - col:
    
    the column by which the range partitioning will be performed.

## Details

Note that due to performance reasons this method uses sampling to
estimate the ranges. Hence, the output may not be consistent, since
sampling can return different values. The sample size can be controlled
by the config
`spark.sql.execution.rangeExchange.sampleSizePerPartition`.

## Note

repartitionByRange since 2.4.0

## See also

[repartition](https://spark.apache.org/docs/3.5.8/api/R/reference/repartition.md),
[coalesce](https://spark.apache.org/docs/3.5.8/api/R/reference/coalesce.md)

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
`randomSplit()`, `rbind()`, `rename()`, `repartition()`, `rollup()`,
`sample()`, `saveAsTable()`, `schema()`, `select()`, `selectExpr()`,
`show()`, `showDF()`, `storageLevel()`, `str()`, `subset()`,
`summary()`, `take()`, `toJSON()`, `union()`, `unionAll()`,
`unionByName()`, `unpersist()`, `unpivot()`, `with()`, `withColumn()`,
`withWatermark()`, `write.df()`, `write.jdbc()`, `write.json()`,
`write.orc()`, `write.parquet()`, `write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
newDF <- repartitionByRange(df, col = df$col1, df$col2)
newDF <- repartitionByRange(df, 3L, col = df$col1, df$col2)
} # }
```
