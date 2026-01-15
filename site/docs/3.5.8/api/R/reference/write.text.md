# Save the content of SparkDataFrame in a text file at the specified path.

Save the content of the SparkDataFrame in a text file at the specified
path. The SparkDataFrame must have only one column of string type with
the name "value". Each row becomes a new line in the output file. The
text files will be encoded as UTF-8.

## Usage

``` r
write.text(x, path, ...)

# S4 method for class 'SparkDataFrame,character'
write.text(x, path, mode = "error", ...)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - path:
    
    The directory where the file is saved

  - ...:
    
    additional argument(s) passed to the method. You can find the
    text-specific options for writing text files in
    <https://spark.apache.org/docs/latest/sql-data-sources-text.html#data-source-option>Data
    Source Option in the version you use.

  - mode:
    
    one of 'append', 'overwrite', 'error', 'errorifexists', 'ignore'
    save mode (it is 'error' by default)

## Note

write.text since 2.0.0

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
`unpivot()`, `with()`, `withColumn()`, `withWatermark()`, `write.df()`,
`write.jdbc()`, `write.json()`, `write.orc()`, `write.parquet()`,
`write.stream()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.txt"
df <- read.text(path)
write.text(df, "/tmp/sparkr-tmp/")
} # }
```
