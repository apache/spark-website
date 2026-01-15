# Coalesce

Returns a new SparkDataFrame that has exactly `numPartitions`
partitions. This operation results in a narrow dependency, e.g. if you
go from 1000 partitions to 100 partitions, there will not be a shuffle,
instead each of the 100 new partitions will claim 10 of the current
partitions. If a larger number of partitions is requested, it will stay
at the current number of partitions.

## Usage

``` r
coalesce(x, ...)

# S4 method for class 'SparkDataFrame'
coalesce(x, numPartitions)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - ...:
    
    additional argument(s).

  - numPartitions:
    
    the number of partitions to use.

## Details

However, if you're doing a drastic coalesce on a SparkDataFrame, e.g. to
numPartitions = 1, this may result in your computation taking place on
fewer nodes than you like (e.g. one node in the case of numPartitions =
1). To avoid this, call `repartition`. This will add a shuffle step, but
means the current upstream partitions will be executed in parallel (per
whatever the current partitioning is).

## Note

coalesce(SparkDataFrame) since 2.1.1

## See also

[repartition](https://spark.apache.org/docs/3.5.8/api/R/reference/repartition.md),
[repartitionByRange](https://spark.apache.org/docs/3.5.8/api/R/reference/repartitionByRange.md)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `collect()`, `colnames()`, `coltypes()`,
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
`write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
newDF <- coalesce(df, 1L)
} # }
```
