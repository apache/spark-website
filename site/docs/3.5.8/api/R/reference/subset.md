# Subset

Return subsets of SparkDataFrame according to given conditions

## Usage

``` r
subset(x, ...)

# S4 method for class 'SparkDataFrame,numericOrcharacter'
x[[i]]

# S4 method for class 'SparkDataFrame,numericOrcharacter'
x[[i]] <- value

# S4 method for class 'SparkDataFrame'
x[i, j, ..., drop = F]

# S4 method for class 'SparkDataFrame'
subset(x, subset, select, drop = F, ...)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - ...:
    
    currently not used.

  - i, subset:
    
    (Optional) a logical expression to filter on rows. For extract
    operator \[\[ and replacement operator \[\[\<-, the indexing
    parameter for a single Column.

  - value:
    
    a Column or an atomic vector in the length of 1 as literal value, or
    `NULL`. If `NULL`, the specified Column is dropped.

  - j, select:
    
    expression for the single Column or a list of columns to select from
    the SparkDataFrame.

  - drop:
    
    if TRUE, a Column will be returned if the resulting dataset has only
    one column. Otherwise, a SparkDataFrame will always be returned.

## Value

A new SparkDataFrame containing only the rows that meet the condition
with selected columns.

## Note

\[\[ since 1.4.0

\[\[\<- since 2.1.1

\[ since 1.4.0

subset since 1.5.0

## See also

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
`mutate()`, `ncol()`, `nrow()`, `persist()`, `printSchema()`,
`randomSplit()`, `rbind()`, `rename()`, `repartition()`,
`repartitionByRange()`, `rollup()`, `sample()`, `saveAsTable()`,
`schema()`, `select()`, `selectExpr()`, `show()`, `showDF()`,
`storageLevel()`, `str()`, `summary()`, `take()`, `toJSON()`, `union()`,
`unionAll()`, `unionByName()`, `unpersist()`, `unpivot()`, `with()`,
`withColumn()`, `withWatermark()`, `write.df()`, `write.jdbc()`,
`write.json()`, `write.orc()`, `write.parquet()`, `write.stream()`,
`write.text()`

Other subsetting functions: `filter()`, `select()`

## Examples

``` r
if (FALSE) { # \dontrun{
  # Columns can be selected using [[ and [
  df[[2]] == df[["age"]]
  df[,2] == df[,"age"]
  df[,c("name", "age")]
  # Or to filter rows
  df[df$age > 20,]
  # SparkDataFrame can be subset on both rows and Columns
  df[df$name == "Smith", c(1,2)]
  df[df$age %in% c(19, 30), 1:2]
  subset(df, df$age %in% c(19, 30), 1:2)
  subset(df, df$age %in% c(19), select = c(1,2))
  subset(df, select = c(1,2))
  # Columns can be selected and set
  df[["age"]] <- 23
  df[[1]] <- df$age
  df[[2]] <- NULL # drop column
} # }
```
