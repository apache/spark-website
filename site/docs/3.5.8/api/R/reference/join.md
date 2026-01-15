# Join

Joins two SparkDataFrames based on the given join expression.

## Usage

``` r
# S4 method for class 'SparkDataFrame,SparkDataFrame'
join(x, y, joinExpr = NULL, joinType = NULL)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - y:
    
    A SparkDataFrame

  - joinExpr:
    
    (Optional) The expression used to perform the join. joinExpr must be
    a Column expression. If joinExpr is omitted, the default, inner join
    is attempted and an error is thrown if it would be a Cartesian
    Product. For Cartesian join, use crossJoin instead.

  - joinType:
    
    The type of join to perform, default 'inner'. Must be one of:
    'inner', 'cross', 'outer', 'full', 'fullouter', 'full\_outer',
    'left', 'leftouter', 'left\_outer', 'right', 'rightouter',
    'right\_outer', 'semi', 'leftsemi', 'left\_semi', 'anti',
    'leftanti', 'left\_anti'.

## Value

A SparkDataFrame containing the result of the join operation.

## Note

join since 1.4.0

## See also

[merge](https://spark.apache.org/docs/3.5.8/api/R/reference/merge.md)
[crossJoin](https://spark.apache.org/docs/3.5.8/api/R/reference/crossJoin.md)

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
`isStreaming()`, `limit()`, `localCheckpoint()`, `merge()`, `mutate()`,
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
join(df1, df2, df1$col1 == df2$col2) # Performs an inner join based on expression
join(df1, df2, df1$col1 == df2$col2, "right_outer")
join(df1, df2) # Attempts an inner join
} # }
```
