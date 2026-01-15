# isStreaming

Returns TRUE if this SparkDataFrame contains one or more sources that
continuously return data as it arrives. A dataset that reads data from a
streaming source must be executed as a `StreamingQuery` using
`write.stream`.

## Usage

``` r
isStreaming(x)

# S4 method for class 'SparkDataFrame'
isStreaming(x)
```

## Arguments

  - x:
    
    A SparkDataFrame

## Value

TRUE if this SparkDataFrame is from a streaming source

## Note

isStreaming since 2.2.0

experimental

## See also

[read.stream](https://spark.apache.org/docs/3.5.8/api/R/reference/read.stream.md)
[write.stream](https://spark.apache.org/docs/3.5.8/api/R/reference/write.stream.md)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
`explain()`, `filter()`, `first()`, `gapply()`, `gapplyCollect()`,
`getNumPartitions()`, `group_by()`, `head()`, `hint()`, `histogram()`,
`insertInto()`, `intersect()`, `intersectAll()`, `isLocal()`, `join()`,
`limit()`, `localCheckpoint()`, `merge()`, `mutate()`, `ncol()`,
`nrow()`, `persist()`, `printSchema()`, `randomSplit()`, `rbind()`,
`rename()`, `repartition()`, `repartitionByRange()`, `rollup()`,
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
df <- read.stream("socket", host = "localhost", port = 9999)
isStreaming(df)
} # }
```
