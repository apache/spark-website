# Creates a temporary view using the given name.

Creates a new temporary view using a SparkDataFrame in the Spark
Session. If a temporary view with the same name already exists, replaces
it.

## Usage

``` r
createOrReplaceTempView(x, viewName)

# S4 method for class 'SparkDataFrame,character'
createOrReplaceTempView(x, viewName)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - viewName:
    
    A character vector containing the name of the table

## Note

createOrReplaceTempView since 2.0.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`crossJoin()`, `cube()`, `dapply()`, `dapplyCollect()`, `describe()`,
`dim()`, `distinct()`, `drop()`, `dropDuplicates()`, `dropna()`,
`dtypes()`, `except()`, `exceptAll()`, `explain()`, `filter()`,
`first()`, `gapply()`, `gapplyCollect()`, `getNumPartitions()`,
`group_by()`, `head()`, `hint()`, `histogram()`, `insertInto()`,
`intersect()`, `intersectAll()`, `isLocal()`, `isStreaming()`, `join()`,
`limit()`, `localCheckpoint()`, `merge()`, `mutate()`, `ncol()`,
`nrow()`, `persist()`, `printSchema()`, `randomSplit()`, `rbind()`,
`rename()`, `repartition()`, `repartitionByRange()`, `rollup()`,
`sample()`, `saveAsTable()`, `schema()`, `select()`, `selectExpr()`,
`show()`, `showDF()`, `storageLevel()`, `str()`, `subset()`,
`summary()`, `take()`, `toJSON()`, `union()`, `unionAll()`,
`unionByName()`, `unpersist()`, `unpivot()`, `with()`, `withColumn()`,
`withWatermark()`, `write.df()`, `write.jdbc()`, `write.json()`,
`write.orc()`, `write.parquet()`, `write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
createOrReplaceTempView(df, "json_df")
new_df <- sql("SELECT * FROM json_df")
} # }
```
