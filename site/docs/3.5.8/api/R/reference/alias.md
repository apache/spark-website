# alias

Returns a new SparkDataFrame or a Column with an alias set. Equivalent
to SQL "AS" keyword.

## Usage

``` r
# S4 method for class 'Column'
alias(object, data)

# S4 method for class 'SparkDataFrame'
alias(object, data)
```

## Arguments

  - object:
    
    x a SparkDataFrame or a Column

  - data:
    
    new name to use

## Value

a SparkDataFrame or a Column

## Note

alias(Column) since 1.4.0

alias(SparkDataFrame) since 2.3.0

## See also

Other column\_func: `between()`, `cast()`, `endsWith()`, `otherwise()`,
`over()`, `startsWith()`, `substr()`

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`arrange()`, `as.data.frame()`, `attach,SparkDataFrame-method`,
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
df <- createDataFrame(iris)

head(select(
  df, alias(df$Sepal_Length, "slength"), alias(df$Petal_Length, "plength")
))
} # }
if (FALSE) { # \dontrun{
df <- alias(createDataFrame(mtcars), "mtcars")
avg_mpg <- alias(agg(groupBy(df, df$cyl), avg(df$mpg)), "avg_mpg")

head(select(df, column("mtcars.mpg")))
head(join(df, avg_mpg, column("mtcars.cyl") == column("avg_mpg.cyl")))
} # }
```
