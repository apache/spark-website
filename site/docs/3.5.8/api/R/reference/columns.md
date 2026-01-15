# Column Names of SparkDataFrame

Return a vector of column names.

## Usage

``` r
colnames(x, do.NULL = TRUE, prefix = "col")

colnames(x) <- value

columns(x)

# S4 method for class 'SparkDataFrame'
columns(x)

# S4 method for class 'SparkDataFrame'
names(x)

# S4 method for class 'SparkDataFrame'
names(x) <- value

# S4 method for class 'SparkDataFrame'
colnames(x)

# S4 method for class 'SparkDataFrame'
colnames(x) <- value
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - do.NULL:
    
    currently not used.

  - prefix:
    
    currently not used.

  - value:
    
    a character vector. Must have the same length as the number of
    columns to be renamed.

## Note

columns since 1.4.0

names since 1.5.0

names\<- since 1.5.0

colnames since 1.6.0

colnames\<- since 1.6.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `coltypes()`,
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
`write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
columns(df)
colnames(df)
} # }
```
