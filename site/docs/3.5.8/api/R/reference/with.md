# Evaluate a R expression in an environment constructed from a SparkDataFrame

Evaluate a R expression in an environment constructed from a
SparkDataFrame with() allows access to columns of a SparkDataFrame by
simply referring to their name. It appends every column of a
SparkDataFrame into a new environment. Then, the given expression is
evaluated in this new environment.

## Usage

``` r
with(data, expr, ...)

# S4 method for class 'SparkDataFrame'
with(data, expr, ...)
```

## Arguments

  - data:
    
    (SparkDataFrame) SparkDataFrame to use for constructing an
    environment.

  - expr:
    
    (expression) Expression to evaluate.

  - ...:
    
    arguments to be passed to future methods.

## Note

with since 1.6.0

## See also

[attach](https://spark.apache.org/docs/3.5.8/api/R/reference/attach.md)

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
`unpivot()`, `withColumn()`, `withWatermark()`, `write.df()`,
`write.jdbc()`, `write.json()`, `write.orc()`, `write.parquet()`,
`write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
with(irisDf, nrow(Sepal_Width))
} # }
```
