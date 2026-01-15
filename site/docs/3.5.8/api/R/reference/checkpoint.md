# checkpoint

Returns a checkpointed version of this SparkDataFrame. Checkpointing can
be used to truncate the logical plan, which is especially useful in
iterative algorithms where the plan may grow exponentially. It will be
saved to files inside the checkpoint directory set with
`setCheckpointDir`

## Usage

``` r
checkpoint(x, eager = TRUE)

# S4 method for class 'SparkDataFrame'
checkpoint(x, eager = TRUE)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - eager:
    
    whether to checkpoint this SparkDataFrame immediately

## Value

a new checkpointed SparkDataFrame

## Note

checkpoint since 2.2.0

## See also

[setCheckpointDir](https://spark.apache.org/docs/3.5.8/api/R/reference/setCheckpointDir.md)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`, `coalesce()`,
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
setCheckpointDir("/checkpoint")
df <- checkpoint(df)
} # }
```
