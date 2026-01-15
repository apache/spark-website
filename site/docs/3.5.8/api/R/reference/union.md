# Return a new SparkDataFrame containing the union of rows

Return a new SparkDataFrame containing the union of rows in this
SparkDataFrame and another SparkDataFrame. This is equivalent to `UNION
ALL` in SQL. Input SparkDataFrames can have different schemas (names and
data types).

## Usage

``` r
union(x, y)

# S4 method for class 'SparkDataFrame,SparkDataFrame'
union(x, y)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - y:
    
    A SparkDataFrame

## Value

A SparkDataFrame containing the result of the union.

## Details

Note: This does not remove duplicate rows across the two
SparkDataFrames. Also as standard in SQL, this function resolves columns
by position (not by name).

## Note

union since 2.0.0

## See also

[rbind](https://spark.apache.org/docs/3.5.8/api/R/reference/rbind.md)
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
`randomSplit()`, `rbind()`, `rename()`, `repartition()`,
`repartitionByRange()`, `rollup()`, `sample()`, `saveAsTable()`,
`schema()`, `select()`, `selectExpr()`, `show()`, `showDF()`,
`storageLevel()`, `str()`, `subset()`, `summary()`, `take()`,
`toJSON()`, `unionAll()`, `unionByName()`, `unpersist()`, `unpivot()`,
`with()`, `withColumn()`, `withWatermark()`, `write.df()`,
`write.jdbc()`, `write.json()`, `write.orc()`, `write.parquet()`,
`write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df1 <- read.json(path)
df2 <- read.json(path2)
unioned <- union(df, df2)
unions <- rbind(df, df2, df3, df4)
} # }
```
