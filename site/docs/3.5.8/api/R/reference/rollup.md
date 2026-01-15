# rollup

Create a multi-dimensional rollup for the SparkDataFrame using the
specified columns.

## Usage

``` r
rollup(x, ...)

# S4 method for class 'SparkDataFrame'
rollup(x, ...)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - ...:
    
    character name(s) or Column(s) to group on.

## Value

A GroupedData.

## Details

If grouping expression is missing `rollup` creates a single global
aggregate and is equivalent to direct application of
[agg](https://spark.apache.org/docs/3.5.8/api/R/reference/summarize.md).

## Note

rollup since 2.3.0

## See also

[agg](https://spark.apache.org/docs/3.5.8/api/R/reference/summarize.md),
[cube](https://spark.apache.org/docs/3.5.8/api/R/reference/cube.md),
[groupBy](https://spark.apache.org/docs/3.5.8/api/R/reference/groupBy.md)

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
`repartitionByRange()`, `sample()`, `saveAsTable()`, `schema()`,
`select()`, `selectExpr()`, `show()`, `showDF()`, `storageLevel()`,
`str()`, `subset()`, `summary()`, `take()`, `toJSON()`, `union()`,
`unionAll()`, `unionByName()`, `unpersist()`, `unpivot()`, `with()`,
`withColumn()`, `withWatermark()`, `write.df()`, `write.jdbc()`,
`write.json()`, `write.orc()`, `write.parquet()`, `write.stream()`,
`write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(mtcars)
mean(rollup(df, "cyl", "gear", "am"), "mpg")

# Following calls are equivalent
agg(rollup(df), mean(df$mpg))
agg(df, mean(df$mpg))
} # }
```
