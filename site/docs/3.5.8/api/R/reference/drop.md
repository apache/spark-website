# drop

Returns a new SparkDataFrame with columns dropped. This is a no-op if
schema doesn't contain column name(s).

## Usage

``` r
drop(x, col, ...)

# S4 method for class 'SparkDataFrame,characterOrColumn'
drop(x, col, ...)

# S4 method for class 'ANY,ANY'
drop(x)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - col:
    
    a list of columns or single Column or name.

  - ...:
    
    additional column(s) if only one column is specified in `col`. If
    more than one column is assigned in `col`, `...` should be left
    empty.

## Value

A new SparkDataFrame with selected columns.

## Note

drop(SparkDataFrame, characterOrColumn, ...) since 3.4.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`,
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
`unpivot()`, `with()`, `withColumn()`, `withWatermark()`, `write.df()`,
`write.jdbc()`, `write.json()`, `write.orc()`, `write.parquet()`,
`write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
drop(df, "col1")
drop(df, c("col1", "col2"))
drop(df, df$col1)
drop(df, "col1", "col2")
drop(df, df$name, df$age)
} # }
```
