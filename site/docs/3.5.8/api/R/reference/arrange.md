# Arrange Rows by Variables

Sort a SparkDataFrame by the specified column(s).

## Usage

``` r
arrange(x, col, ...)

# S4 method for class 'SparkDataFrame,Column'
arrange(x, col, ..., withinPartitions = FALSE)

# S4 method for class 'SparkDataFrame,character'
arrange(x, col, ..., decreasing = FALSE, withinPartitions = FALSE)

# S4 method for class 'SparkDataFrame,characterOrColumn'
orderBy(x, col, ...)
```

## Arguments

  - x:
    
    a SparkDataFrame to be sorted.

  - col:
    
    a character or Column object indicating the fields to sort on

  - ...:
    
    additional sorting fields

  - withinPartitions:
    
    a logical argument indicating whether to sort only within each
    partition

  - decreasing:
    
    a logical argument indicating sorting order for columns when a
    character vector is specified for col

## Value

A SparkDataFrame where all elements are sorted.

## Note

arrange(SparkDataFrame, Column) since 1.4.0

arrange(SparkDataFrame, character) since 1.4.0

orderBy(SparkDataFrame, characterOrColumn) since 1.4.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `as.data.frame()`, `attach,SparkDataFrame-method`,
`broadcast()`, `cache()`, `checkpoint()`, `coalesce()`, `collect()`,
`colnames()`, `coltypes()`, `createOrReplaceTempView()`, `crossJoin()`,
`cube()`, `dapply()`, `dapplyCollect()`, `describe()`, `dim()`,
`distinct()`, `drop()`, `dropDuplicates()`, `dropna()`, `dtypes()`,
`except()`, `exceptAll()`, `explain()`, `filter()`, `first()`,
`gapply()`, `gapplyCollect()`, `getNumPartitions()`, `group_by()`,
`head()`, `hint()`, `histogram()`, `insertInto()`, `intersect()`,
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
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
arrange(df, df$col1)
arrange(df, asc(df$col1), desc(abs(df$col2)))
arrange(df, "col1", decreasing = TRUE)
arrange(df, "col1", "col2", decreasing = c(TRUE, FALSE))
arrange(df, "col1", "col2", withinPartitions = TRUE)
} # }
```
