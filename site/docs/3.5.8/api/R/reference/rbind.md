# Union two or more SparkDataFrames

Union two or more SparkDataFrames by row. As in R's `rbind`, this method
requires that the input SparkDataFrames have the same column names.

## Usage

``` r
rbind(..., deparse.level = 1)

# S4 method for class 'SparkDataFrame'
rbind(x, ..., deparse.level = 1)
```

## Arguments

  - ...:
    
    additional SparkDataFrame(s).

  - deparse.level:
    
    currently not used (put here to match the signature of the base
    implementation).

  - x:
    
    a SparkDataFrame.

## Value

A SparkDataFrame containing the result of the union.

## Details

Note: This does not remove duplicate rows across the two
SparkDataFrames.

## Note

rbind since 1.5.0

## See also

[union](https://spark.apache.org/docs/3.5.8/api/R/reference/union.md)
[unionByName](https://spark.apache.org/docs/3.5.8/api/R/reference/unionByName.md)

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
`randomSplit()`, `rename()`, `repartition()`, `repartitionByRange()`,
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
unions <- rbind(df, df2, df3, df4)
} # }
```
