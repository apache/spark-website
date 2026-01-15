# Save the contents of SparkDataFrame as a JSON file

Save the contents of a SparkDataFrame as a JSON file ( [JSON Lines text
format or newline-delimited JSON](https://jsonlines.org/)). Files
written out with this method can be read back in as a SparkDataFrame
using read.json().

## Usage

``` r
write.json(x, path, ...)

# S4 method for class 'SparkDataFrame,character'
write.json(x, path, mode = "error", ...)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - path:
    
    The directory where the file is saved

  - ...:
    
    additional argument(s) passed to the method. You can find the
    JSON-specific options for writing JSON files in
    <https://spark.apache.org/docs/latest/sql-data-sources-json.html#data-source-option>Data
    Source Option in the version you use.

  - mode:
    
    one of 'append', 'overwrite', 'error', 'errorifexists', 'ignore'
    save mode (it is 'error' by default)

## Note

write.json since 1.6.0

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
`write.jdbc()`, `write.orc()`, `write.parquet()`, `write.stream()`,
`write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
write.json(df, "/tmp/sparkr-tmp/")
} # }
```
