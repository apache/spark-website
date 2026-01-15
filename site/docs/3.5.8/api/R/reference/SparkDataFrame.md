# S4 class that represents a SparkDataFrame

SparkDataFrames can be created using functions like
[createDataFrame](https://spark.apache.org/docs/3.5.8/api/R/reference/createDataFrame.md),
[read.json](https://spark.apache.org/docs/3.5.8/api/R/reference/read.json.md),
[table](https://rdrr.io/r/base/table.html) etc.

## Slots

  - `env`:
    
    An R environment that stores bookkeeping states of the
    SparkDataFrame

  - `sdf`:
    
    A Java object reference to the backing Scala DataFrame

## Note

SparkDataFrame since 2.0.0

## See also

[createDataFrame](https://spark.apache.org/docs/3.5.8/api/R/reference/createDataFrame.md),
[read.json](https://spark.apache.org/docs/3.5.8/api/R/reference/read.json.md),
[table](https://rdrr.io/r/base/table.html)

<https://spark.apache.org/docs/latest/sparkr.html#sparkr-dataframes>

Other SparkDataFrame functions: `agg()`, `alias()`, `arrange()`,
`as.data.frame()`, `attach,SparkDataFrame-method`, `broadcast()`,
`cache()`, `checkpoint()`, `coalesce()`, `collect()`, `colnames()`,
`coltypes()`, `createOrReplaceTempView()`, `crossJoin()`, `cube()`,
`dapply()`, `dapplyCollect()`, `describe()`, `dim()`, `distinct()`,
`drop()`, `dropDuplicates()`, `dropna()`, `dtypes()`, `except()`,
`exceptAll()`, `explain()`, `filter()`, `first()`, `gapply()`,
`gapplyCollect()`, `getNumPartitions()`, `group_by()`, `head()`,
`hint()`, `histogram()`, `insertInto()`, `intersect()`,
`intersectAll()`, `isLocal()`, `isStreaming()`, `join()`, `limit()`,
`localCheckpoint()`, `merge()`, `mutate()`, `ncol()`, `nrow()`,
`persist()`, `printSchema()`, `randomSplit()`, `rbind()`, `rename()`,
`repartition()`, `repartitionByRange()`, `rollup()`, `sample()`,
`saveAsTable()`, `schema()`, `select()`, `selectExpr()`, `show()`,
`showDF()`, `storageLevel()`, `str()`, `subset()`, `summary()`,
`take()`, `toJSON()`, `union()`, `unionAll()`, `unionByName()`,
`unpersist()`, `unpivot()`, `with()`, `withColumn()`, `withWatermark()`,
`write.df()`, `write.jdbc()`, `write.json()`, `write.orc()`,
`write.parquet()`, `write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df <- createDataFrame(faithful)
} # }
```
