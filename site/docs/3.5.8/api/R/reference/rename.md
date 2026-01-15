# rename

Rename an existing column in a SparkDataFrame.

## Usage

``` r
rename(x, ...)

withColumnRenamed(x, existingCol, newCol)

# S4 method for class 'SparkDataFrame,character,character'
withColumnRenamed(x, existingCol, newCol)

# S4 method for class 'SparkDataFrame'
rename(x, ...)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - ...:
    
    A named pair of the form new\_column\_name = existing\_column

  - existingCol:
    
    The name of the column you want to change.

  - newCol:
    
    The new column name.

## Value

A SparkDataFrame with the column name changed.

## Note

withColumnRenamed since 1.4.0

rename since 1.4.0

## See also

[mutate](https://spark.apache.org/docs/3.5.8/api/R/reference/mutate.md)

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
`randomSplit()`, `rbind()`, `repartition()`, `repartitionByRange()`,
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
path <- "path/to/file.json"
df <- read.json(path)
newDF <- withColumnRenamed(df, "col1", "newCol1")
} # }
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
newDF <- rename(df, col1 = df$newCol1)
} # }
```
