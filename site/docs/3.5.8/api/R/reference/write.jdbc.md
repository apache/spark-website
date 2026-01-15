# Save the content of SparkDataFrame to an external database table via JDBC.

Save the content of the SparkDataFrame to an external database table via
JDBC. Additional JDBC database connection properties can be set (...)
You can find the JDBC-specific option and parameter documentation for
writing tables via JDBC in
<https://spark.apache.org/docs/latest/sql-data-sources-jdbc.html#data-source-option>
Data Source Option in the version you use.

## Usage

``` r
write.jdbc(x, url, tableName, mode = "error", ...)

# S4 method for class 'SparkDataFrame,character,character'
write.jdbc(x, url, tableName, mode = "error", ...)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - url:
    
    JDBC database url of the form `jdbc:subprotocol:subname`.

  - tableName:
    
    the name of the table in the external database.

  - mode:
    
    one of 'append', 'overwrite', 'error', 'errorifexists', 'ignore'
    save mode (it is 'error' by default)

  - ...:
    
    additional JDBC database connection properties.

## Details

Also, mode is used to specify the behavior of the save operation when
data already exists in the data source. There are four modes:

  - 'append': Contents of this SparkDataFrame are expected to be
    appended to existing data.

  - 'overwrite': Existing data is expected to be overwritten by the
    contents of this SparkDataFrame.

  - 'error' or 'errorifexists': An exception is expected to be thrown.

  - 'ignore': The save operation is expected to not save the contents of
    the SparkDataFrame and to not change the existing data.

## Note

write.jdbc since 2.0.0

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
`write.json()`, `write.orc()`, `write.parquet()`, `write.stream()`,
`write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
jdbcUrl <- "jdbc:mysql://localhost:3306/databasename"
write.jdbc(df, jdbcUrl, "table", user = "username", password = "password")
} # }
```
