# Intersect

Return a new SparkDataFrame containing rows only in both this
SparkDataFrame and another SparkDataFrame. This is equivalent to
`INTERSECT` in SQL.

## Usage

``` r
intersect(x, y)

# S4 method for class 'SparkDataFrame,SparkDataFrame'
intersect(x, y)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - y:
    
    A SparkDataFrame

## Value

A SparkDataFrame containing the result of the intersect.

## Note

intersect since 1.4.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
`explain()`, `filter()`, `first()`, `gapply()`, `gapplyCollect()`,
`getNumPartitions()`, `group_by()`, `head()`, `hint()`, `histogram()`,
`insertInto()`, `intersectAll()`, `isLocal()`, `isStreaming()`,
`join()`, `limit()`, `localCheckpoint()`, `merge()`, `mutate()`,
`ncol()`, `nrow()`, `persist()`, `printSchema()`, `randomSplit()`,
`rbind()`, `rename()`, `repartition()`, `repartitionByRange()`,
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
df1 <- read.json(path)
df2 <- read.json(path2)
intersectDF <- intersect(df, df2)
} # }
```
