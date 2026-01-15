# GroupBy

Groups the SparkDataFrame using the specified columns, so we can run
aggregation on them.

## Usage

``` r
group_by(x, ...)

groupBy(x, ...)

# S4 method for class 'SparkDataFrame'
groupBy(x, ...)

# S4 method for class 'SparkDataFrame'
group_by(x, ...)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - ...:
    
    character name(s) or Column(s) to group on.

## Value

A GroupedData.

## Note

groupBy since 1.4.0

group\_by since 1.4.0

## See also

[agg](https://spark.apache.org/docs/3.5.8/api/R/reference/summarize.md),
[cube](https://spark.apache.org/docs/3.5.8/api/R/reference/cube.md),
[rollup](https://spark.apache.org/docs/3.5.8/api/R/reference/rollup.md)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
`explain()`, `filter()`, `first()`, `gapply()`, `gapplyCollect()`,
`getNumPartitions()`, `head()`, `hint()`, `histogram()`, `insertInto()`,
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
  # Compute the average for all numeric columns grouped by department.
  avg(groupBy(df, "department"))

  # Compute the max age and average salary, grouped by department and gender.
  agg(groupBy(df, "department", "gender"), salary="avg", "age" -> "max")
} # }
```
