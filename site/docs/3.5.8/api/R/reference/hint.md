# hint

Specifies execution plan hint and return a new SparkDataFrame.

## Usage

``` r
hint(x, name, ...)

# S4 method for class 'SparkDataFrame,character'
hint(x, name, ...)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - name:
    
    a name of the hint.

  - ...:
    
    optional parameters for the hint.

## Value

A SparkDataFrame.

## Note

hint since 2.2.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
`explain()`, `filter()`, `first()`, `gapply()`, `gapplyCollect()`,
`getNumPartitions()`, `group_by()`, `head()`, `histogram()`,
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
df <- createDataFrame(mtcars)
avg_mpg <- mean(groupBy(createDataFrame(mtcars), "cyl"), "mpg")

head(join(df, hint(avg_mpg, "broadcast"), df$cyl == avg_mpg$cyl))
} # }
```
