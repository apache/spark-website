# Return the first row of a SparkDataFrame

Aggregate function: returns the first value in a group.

## Usage

``` r
first(x, ...)

# S4 method for class 'SparkDataFrame'
first(x)

# S4 method for class 'characterOrColumn'
first(x, na.rm = FALSE)
```

## Arguments

  - x:
    
    a SparkDataFrame or a column used in aggregation function.

  - ...:
    
    further arguments to be passed to or from other methods.

  - na.rm:
    
    a logical value indicating whether NA values should be stripped
    before the computation proceeds.

## Details

The function by default returns the first values it sees. It will return
the first non-missing value it sees when na.rm is set to true. If all
values are missing, then NA is returned. Note: the function is
non-deterministic because its results depends on the order of the rows
which may be non-deterministic after a shuffle.

## Note

first(SparkDataFrame) since 1.4.0

first(characterOrColumn) since 1.4.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
`explain()`, `filter()`, `gapply()`, `gapplyCollect()`,
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

Other aggregate functions: `avg()`, `column_aggregate_functions`,
`corr()`, `count()`, `cov()`, `last()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
first(df)
} # }
if (FALSE) { # \dontrun{
first(df$c)
first(df$c, TRUE)
} # }
```
