# broadcast

Return a new SparkDataFrame marked as small enough for use in broadcast
joins.

## Usage

``` r
broadcast(x)

# S4 method for class 'SparkDataFrame'
broadcast(x)
```

## Arguments

  - x:
    
    a SparkDataFrame.

## Value

a SparkDataFrame.

## Details

Equivalent to `hint(x, "broadcast")`.

## Note

broadcast since 2.3.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `cache()`, `checkpoint()`, `coalesce()`,
`collect()`, `colnames()`, `coltypes()`, `createOrReplaceTempView()`,
`crossJoin()`, `cube()`, `dapply()`, `dapplyCollect()`, `describe()`,
`dim()`, `distinct()`, `drop()`, `dropDuplicates()`, `dropna()`,
`dtypes()`, `except()`, `exceptAll()`, `explain()`, `filter()`,
`first()`, `gapply()`, `gapplyCollect()`, `getNumPartitions()`,
`group_by()`, `head()`, `hint()`, `histogram()`, `insertInto()`,
`intersect()`, `intersectAll()`, `isLocal()`, `isStreaming()`, `join()`,
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
df <- createDataFrame(mtcars)
avg_mpg <- mean(groupBy(createDataFrame(mtcars), "cyl"), "mpg")

head(join(df, broadcast(avg_mpg), df$cyl == avg_mpg$cyl))
} # }
```
