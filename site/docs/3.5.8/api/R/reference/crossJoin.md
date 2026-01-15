# CrossJoin

Returns Cartesian Product on two SparkDataFrames.

## Usage

``` r
# S4 method for class 'SparkDataFrame,SparkDataFrame'
crossJoin(x, y)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - y:
    
    A SparkDataFrame

## Value

A SparkDataFrame containing the result of the join operation.

## Note

crossJoin since 2.1.0

## See also

[merge](https://spark.apache.org/docs/3.5.8/api/R/reference/merge.md)
[join](https://spark.apache.org/docs/3.5.8/api/R/reference/join.md)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `cube()`, `dapply()`, `dapplyCollect()`,
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
sparkR.session()
df1 <- read.json(path)
df2 <- read.json(path2)
crossJoin(df1, df2) # Performs a Cartesian
} # }
```
