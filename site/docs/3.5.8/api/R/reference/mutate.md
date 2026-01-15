# Mutate

Return a new SparkDataFrame with the specified columns added or
replaced.

## Usage

``` r
mutate(.data, ...)

transform(`_data`, ...)

# S4 method for class 'SparkDataFrame'
mutate(.data, ...)

# S4 method for class 'SparkDataFrame'
transform(`_data`, ...)
```

## Arguments

  - .data:
    
    a SparkDataFrame.

  - ...:
    
    additional column argument(s) each in the form name = col.

  - \_data:
    
    a SparkDataFrame.

## Value

A new SparkDataFrame with the new columns added or replaced.

## Note

mutate since 1.4.0

transform since 1.5.0

## See also

[rename](https://spark.apache.org/docs/3.5.8/api/R/reference/rename.md)
[withColumn](https://spark.apache.org/docs/3.5.8/api/R/reference/withColumn.md)

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
`ncol()`, `nrow()`, `persist()`, `printSchema()`, `randomSplit()`,
`rbind()`, `rename()`, `repartition()`, `repartitionByRange()`,
`rollup()`, `sample()`, `saveAsTable()`, `schema()`, `select()`,
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
newDF <- mutate(df, newCol = df$col1 * 5, newCol2 = df$col1 * 2)
names(newDF) # Will contain newCol, newCol2
newDF2 <- transform(df, newCol = df$col1 / 5, newCol2 = df$col1 * 2)

df <- createDataFrame(list(list("Andy", 30L), list("Justin", 19L)), c("name", "age"))
# Replace the "age" column
df1 <- mutate(df, age = df$age + 1L)
} # }
```
