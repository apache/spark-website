# showDF

Print the first numRows rows of a SparkDataFrame

## Usage

``` r
showDF(x, ...)

# S4 method for class 'SparkDataFrame'
showDF(x, numRows = 20, truncate = TRUE, vertical = FALSE)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - ...:
    
    further arguments to be passed to or from other methods.

  - numRows:
    
    the number of rows to print. Defaults to 20.

  - truncate:
    
    whether truncate long strings. If `TRUE`, strings more than 20
    characters will be truncated. However, if set greater than zero,
    truncates strings longer than `truncate` characters and all cells
    will be aligned right.

  - vertical:
    
    whether print output rows vertically (one line per column value).

## Note

showDF since 1.4.0

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
`schema()`, `select()`, `selectExpr()`, `show()`, `storageLevel()`,
`str()`, `subset()`, `summary()`, `take()`, `toJSON()`, `union()`,
`unionAll()`, `unionByName()`, `unpersist()`, `unpivot()`, `with()`,
`withColumn()`, `withWatermark()`, `write.df()`, `write.jdbc()`,
`write.json()`, `write.orc()`, `write.parquet()`, `write.stream()`,
`write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
showDF(df)
} # }
```
