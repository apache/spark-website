# Repartition

The following options for repartition are possible:

  - 1\. Return a new SparkDataFrame that has exactly `numPartitions`.

  - 2\. Return a new SparkDataFrame hash partitioned by the given
    columns into `numPartitions`.

  - 3\. Return a new SparkDataFrame hash partitioned by the given
    column(s), using `spark.sql.shuffle.partitions` as number of
    partitions.

## Usage

``` r
repartition(x, ...)

# S4 method for class 'SparkDataFrame'
repartition(x, numPartitions = NULL, col = NULL, ...)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - ...:
    
    additional column(s) to be used in the partitioning.

  - numPartitions:
    
    the number of partitions to use.

  - col:
    
    the column by which the partitioning will be performed.

## Note

repartition since 1.4.0

## See also

[coalesce](https://spark.apache.org/docs/3.5.8/api/R/reference/coalesce.md),
[repartitionByRange](https://spark.apache.org/docs/3.5.8/api/R/reference/repartitionByRange.md)

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
`randomSplit()`, `rbind()`, `rename()`, `repartitionByRange()`,
`rollup()`, `sample()`, `saveAsTable()`, `schema()`, `select()`,
`selectExpr()`, `show()`, `showDF()`, `storageLevel()`, `str()`,
`subset()`, `summary()`, `take()`, `toJSON()`, `union()`, `unionAll()`,
`unionByName()`, `unpersist()`, `unpivot()`, `with()`, `withColumn()`,
`withWatermark()`, `write.df()`, `write.jdbc()`, `write.json()`,
`write.orc()`, `write.parquet()`, `write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
newDF <- repartition(df, 2L)
newDF <- repartition(df, numPartitions = 2L)
newDF <- repartition(df, col = df$"col1", df$"col2")
newDF <- repartition(df, 3L, col = df$"col1", df$"col2")
} # }
```
