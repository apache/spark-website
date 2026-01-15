# dapply

Apply a function to each partition of a SparkDataFrame.

## Usage

``` r
dapply(x, func, schema)

# S4 method for class 'SparkDataFrame,function,characterOrstructType'
dapply(x, func, schema)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - func:
    
    A function to be applied to each partition of the SparkDataFrame.
    func should have only one parameter, to which a R data.frame
    corresponds to each partition will be passed. The output of func
    should be a R data.frame.

  - schema:
    
    The schema of the resulting SparkDataFrame after the function is
    applied. It must match the output of func. Since Spark 2.3, the
    DDL-formatted string is also supported for the schema.

## Note

dapply since 2.0.0

## See also

[dapplyCollect](https://spark.apache.org/docs/3.5.8/api/R/reference/dapplyCollect.md)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapplyCollect()`,
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
  df1 <- dapply(df, function(x) { x }, schema(df))
  collect(df1)

  # filter and add a column
  df <- createDataFrame(
          list(list(1L, 1, "1"), list(2L, 2, "2"), list(3L, 3, "3")),
          c("a", "b", "c"))
  schema <- structType(structField("a", "integer"), structField("b", "double"),
                     structField("c", "string"), structField("d", "integer"))
  df1 <- dapply(
           df,
           function(x) {
             y <- x[x[1] > 1, ]
             y <- cbind(y, y[1] + 1L)
           },
           schema)

  # The schema also can be specified in a DDL-formatted string.
  schema <- "a INT, d DOUBLE, c STRING, d INT"
  df1 <- dapply(
           df,
           function(x) {
             y <- x[x[1] > 1, ]
             y <- cbind(y, y[1] + 1L)
           },
           schema)

  collect(df1)
  # the result
  #       a b c d
  #     1 2 2 2 3
  #     2 3 3 3 4
} # }
```
