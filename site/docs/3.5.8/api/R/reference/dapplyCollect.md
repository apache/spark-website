# dapplyCollect

Apply a function to each partition of a SparkDataFrame and collect the
result back to R as a data.frame.

## Usage

``` r
dapplyCollect(x, func)

# S4 method for class 'SparkDataFrame,function'
dapplyCollect(x, func)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - func:
    
    A function to be applied to each partition of the SparkDataFrame.
    func should have only one parameter, to which a R data.frame
    corresponds to each partition will be passed. The output of func
    should be a R data.frame.

## Note

dapplyCollect since 2.0.0

## See also

[dapply](https://spark.apache.org/docs/3.5.8/api/R/reference/dapply.md)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`describe()`, `dim()`, `distinct()`, `drop()`, `dropDuplicates()`,
`dropna()`, `dtypes()`, `except()`, `exceptAll()`, `explain()`,
`filter()`, `first()`, `gapply()`, `gapplyCollect()`,
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
  df <- createDataFrame(iris)
  ldf <- dapplyCollect(df, function(x) { x })

  # filter and add a column
  df <- createDataFrame(
          list(list(1L, 1, "1"), list(2L, 2, "2"), list(3L, 3, "3")),
          c("a", "b", "c"))
  ldf <- dapplyCollect(
           df,
           function(x) {
             y <- x[x[1] > 1, ]
             y <- cbind(y, y[1] + 1L)
           })
  # the result
  #       a b c d
  #       2 2 2 3
  #       3 3 3 4
} # }
```
