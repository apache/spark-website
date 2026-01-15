# Save the contents of the SparkDataFrame to a data source as a table

The data source is specified by the `source` and a set of options (...).
If `source` is not specified, the default data source configured by
spark.sql.sources.default will be used.

## Usage

``` r
saveAsTable(df, tableName, source = NULL, mode = "error", ...)

# S4 method for class 'SparkDataFrame,character'
saveAsTable(df, tableName, source = NULL, mode = "error", ...)
```

## Arguments

  - df:
    
    a SparkDataFrame.

  - tableName:
    
    a name for the table.

  - source:
    
    a name for external data source.

  - mode:
    
    one of 'append', 'overwrite', 'error', 'errorifexists', 'ignore'
    save mode (it is 'error' by default)

  - ...:
    
    additional option(s) passed to the method.

## Details

Additionally, mode is used to specify the behavior of the save operation
when data already exists in the data source. There are four modes:  
'append': Contents of this SparkDataFrame are expected to be appended to
existing data.  
'overwrite': Existing data is expected to be overwritten by the contents
of this SparkDataFrame.  
'error' or 'errorifexists': An exception is expected to be thrown.  
'ignore': The save operation is expected to not save the contents of the
SparkDataFrame and to not change the existing data.  

## Note

saveAsTable since 1.4.0

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
`repartitionByRange()`, `rollup()`, `sample()`, `schema()`, `select()`,
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
saveAsTable(df, "myfile")
} # }
```
