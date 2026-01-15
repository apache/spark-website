# Download data from a SparkDataFrame into a R data.frame

This function downloads the contents of a SparkDataFrame into an R's
data.frame. Since data.frames are held in memory, ensure that you have
enough memory in your system to accommodate the contents.

## Usage

``` r
as.data.frame(x, row.names = NULL, optional = FALSE, ...)

# S4 method for class 'SparkDataFrame'
as.data.frame(x, row.names = NULL, optional = FALSE, ...)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - row.names:
    
    `NULL` or a character vector giving the row names for the data
    frame.

  - optional:
    
    If `TRUE`, converting column names is optional.

  - ...:
    
    additional arguments to pass to base::as.data.frame.

## Value

A data.frame.

## Note

as.data.frame since 1.6.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `attach,SparkDataFrame-method`, `broadcast()`,
`cache()`, `checkpoint()`, `coalesce()`, `collect()`, `colnames()`,
`coltypes()`, `createOrReplaceTempView()`, `crossJoin()`, `cube()`,
`dapply()`, `dapplyCollect()`, `describe()`, `dim()`, `distinct()`,
`drop()`, `dropDuplicates()`, `dropna()`, `dtypes()`, `except()`,
`exceptAll()`, `explain()`, `filter()`, `first()`, `gapply()`,
`gapplyCollect()`, `getNumPartitions()`, `group_by()`, `head()`,
`hint()`, `histogram()`, `insertInto()`, `intersect()`,
`intersectAll()`, `isLocal()`, `isStreaming()`, `join()`, `limit()`,
`localCheckpoint()`, `merge()`, `mutate()`, `ncol()`, `nrow()`,
`persist()`, `printSchema()`, `randomSplit()`, `rbind()`, `rename()`,
`repartition()`, `repartitionByRange()`, `rollup()`, `sample()`,
`saveAsTable()`, `schema()`, `select()`, `selectExpr()`, `show()`,
`showDF()`, `storageLevel()`, `str()`, `subset()`, `summary()`,
`take()`, `toJSON()`, `union()`, `unionAll()`, `unionByName()`,
`unpersist()`, `unpivot()`, `with()`, `withColumn()`, `withWatermark()`,
`write.df()`, `write.jdbc()`, `write.json()`, `write.orc()`,
`write.parquet()`, `write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
irisDF <- createDataFrame(iris)
df <- as.data.frame(irisDF[irisDF$Species == "setosa", ])
} # }
```
