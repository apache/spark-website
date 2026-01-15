# WithColumn

Return a new SparkDataFrame by adding a column or replacing the existing
column that has the same name.

## Usage

``` r
withColumn(x, colName, col)

# S4 method for class 'SparkDataFrame,character'
withColumn(x, colName, col)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - colName:
    
    a column name.

  - col:
    
    a Column expression (which must refer only to this SparkDataFrame),
    or an atomic vector in the length of 1 as literal value.

## Value

A SparkDataFrame with the new column added or the existing column
replaced.

## Details

Note: This method introduces a projection internally. Therefore, calling
it multiple times, for instance, via loops in order to add multiple
columns can generate big plans which can cause performance issues and
even `StackOverflowException`. To avoid this, use `select` with the
multiple columns at once.

## Note

withColumn since 1.4.0

## See also

[rename](https://spark.apache.org/docs/3.5.8/api/R/reference/rename.md)
[mutate](https://spark.apache.org/docs/3.5.8/api/R/reference/mutate.md)
[subset](https://spark.apache.org/docs/3.5.8/api/R/reference/subset.md)

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
`unpivot()`, `with()`, `withWatermark()`, `write.df()`, `write.jdbc()`,
`write.json()`, `write.orc()`, `write.parquet()`, `write.stream()`,
`write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
newDF <- withColumn(df, "newCol", df$col1 * 5)
# Replace an existing column
newDF2 <- withColumn(newDF, "newCol", newDF$col1)
newDF3 <- withColumn(newDF, "newCol", 42)
# Use extract operator to set an existing or new column
df[["age"]] <- 23
df[[2]] <- df$col1
df[[2]] <- NULL # drop column
} # }
```
