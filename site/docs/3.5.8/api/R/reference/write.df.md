# Save the contents of SparkDataFrame to a data source.

The data source is specified by the `source` and a set of options (...).
If `source` is not specified, the default data source configured by
spark.sql.sources.default will be used.

## Usage

``` r
write.df(df, path = NULL, ...)

saveDF(df, path, source = NULL, mode = "error", ...)

write.df(df, path = NULL, ...)

# S4 method for class 'SparkDataFrame'
write.df(
  df,
  path = NULL,
  source = NULL,
  mode = "error",
  partitionBy = NULL,
  ...
)

# S4 method for class 'SparkDataFrame,character'
saveDF(df, path, source = NULL, mode = "error", ...)
```

## Arguments

  - df:
    
    a SparkDataFrame.

  - path:
    
    a name for the table.

  - ...:
    
    additional argument(s) passed to the method.

  - source:
    
    a name for external data source.

  - mode:
    
    one of 'append', 'overwrite', 'error', 'errorifexists', 'ignore'
    save mode (it is 'error' by default)

  - partitionBy:
    
    a name or a list of names of columns to partition the output by on
    the file system. If specified, the output is laid out on the file
    system similar to Hive's partitioning scheme.

## Details

Additionally, mode is used to specify the behavior of the save operation
when data already exists in the data source. There are four modes:

  - 'append': Contents of this SparkDataFrame are expected to be
    appended to existing data.

  - 'overwrite': Existing data is expected to be overwritten by the
    contents of this SparkDataFrame.

  - 'error' or 'errorifexists': An exception is expected to be thrown.

  - 'ignore': The save operation is expected to not save the contents of
    the SparkDataFrame and to not change the existing data.

## Note

write.df since 1.4.0

saveDF since 1.4.0

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
`unpivot()`, `with()`, `withColumn()`, `withWatermark()`,
`write.jdbc()`, `write.json()`, `write.orc()`, `write.parquet()`,
`write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
write.df(df, "myfile", "parquet", "overwrite", partitionBy = c("col1", "col2"))
saveDF(df, parquetPath2, "parquet", mode = "append", mergeSchema = TRUE)
} # }
```
