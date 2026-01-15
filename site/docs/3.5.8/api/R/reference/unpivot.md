# Unpivot a DataFrame from wide format to long format.

This is the reverse to `groupBy(...).pivot(...).agg(...)`, except for
the aggregation, which cannot be reversed.

## Usage

``` r
unpivot(x, ids, values, variableColumnName, valueColumnName)

# S4 method for class 'SparkDataFrame,ANY,ANY,character,character'
unpivot(x, ids, values, variableColumnName, valueColumnName)

# S4 method for class 'SparkDataFrame,ANY,ANY,character,character'
melt(x, ids, values, variableColumnName, valueColumnName)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - ids:
    
    a character vector or a list of columns

  - values:
    
    a character vector, a list of columns or `NULL`. If not NULL must
    not be empty. If `NULL`, uses all columns that are not set as `ids`.

  - variableColumnName:
    
    character Name of the variable column.

  - valueColumnName:
    
    character Name of the value column.

## Value

a SparkDataFrame.

## Note

unpivot since 3.4.0

melt since 3.4.0

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
`insertInto()`, `intersect()`, `intersectAll()`, `isLocal()`,
`isStreaming()`, `join()`, `limit()`, `localCheckpoint()`, `merge()`,
`mutate()`, `ncol()`, `nrow()`, `persist()`, `printSchema()`,
`randomSplit()`, `rbind()`, `rename()`, `repartition()`,
`repartitionByRange()`, `rollup()`, `sample()`, `saveAsTable()`,
`schema()`, `select()`, `selectExpr()`, `show()`, `showDF()`,
`storageLevel()`, `str()`, `subset()`, `summary()`, `take()`,
`toJSON()`, `union()`, `unionAll()`, `unionByName()`, `unpersist()`,
`with()`, `withColumn()`, `withWatermark()`, `write.df()`,
`write.jdbc()`, `write.json()`, `write.orc()`, `write.parquet()`,
`write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(data.frame(
  id = 1:3, x = c(1, 3, 5), y = c(2, 4, 6), z = c(-1, 0, 1)
))

head(unpivot(df, "id", c("x", "y"), "var", "val"))

head(unpivot(df, "id", NULL, "var", "val"))
} # }
```
