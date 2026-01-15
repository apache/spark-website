# Select

Selects a set of columns with names or Column expressions.

## Usage

``` r
select(x, col, ...)

# S4 method for class 'SparkDataFrame'
x$name

# S4 method for class 'SparkDataFrame'
x$name <- value

# S4 method for class 'SparkDataFrame,character'
select(x, col, ...)

# S4 method for class 'SparkDataFrame,Column'
select(x, col, ...)

# S4 method for class 'SparkDataFrame,list'
select(x, col)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - col:
    
    a list of columns or single Column or name.

  - ...:
    
    additional column(s) if only one column is specified in `col`. If
    more than one column is assigned in `col`, `...` should be left
    empty.

  - name:
    
    name of a Column (without being wrapped by `""`).

  - value:
    
    a Column or an atomic vector in the length of 1 as literal value, or
    `NULL`. If `NULL`, the specified Column is dropped.

## Value

A new SparkDataFrame with selected columns.

## Note

$ since 1.4.0

$\<- since 1.4.0

select(SparkDataFrame, character) since 1.4.0

select(SparkDataFrame, Column) since 1.4.0

select(SparkDataFrame, list) since 1.4.0

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
`schema()`, `selectExpr()`, `show()`, `showDF()`, `storageLevel()`,
`str()`, `subset()`, `summary()`, `take()`, `toJSON()`, `union()`,
`unionAll()`, `unionByName()`, `unpersist()`, `unpivot()`, `with()`,
`withColumn()`, `withWatermark()`, `write.df()`, `write.jdbc()`,
`write.json()`, `write.orc()`, `write.parquet()`, `write.stream()`,
`write.text()`

Other subsetting functions: `filter()`, `subset()`

## Examples

``` r
if (FALSE) { # \dontrun{
  select(df, "*")
  select(df, "col1", "col2")
  select(df, df$name, df$age + 1)
  select(df, c("col1", "col2"))
  select(df, list(df$name, df$age + 1))
  # Similar to R data frames columns can also be selected using $
  df[,df$age]
} # }
```
