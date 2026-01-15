# summarize

Aggregates on the entire SparkDataFrame without groups. The resulting
SparkDataFrame will also contain the grouping columns.

Compute aggregates by specifying a list of columns

## Usage

``` r
agg(x, ...)

summarize(x, ...)

# S4 method for class 'GroupedData'
agg(x, ...)

# S4 method for class 'GroupedData'
summarize(x, ...)

# S4 method for class 'SparkDataFrame'
agg(x, ...)

# S4 method for class 'SparkDataFrame'
summarize(x, ...)
```

## Arguments

  - x:
    
    a SparkDataFrame or GroupedData.

  - ...:
    
    further arguments to be passed to or from other methods.

## Value

A SparkDataFrame.

## Details

df2 \<- agg(df, \<column\> = \<aggFunction\>) df2 \<- agg(df, newColName
= aggFunction(column))

## Note

agg since 1.4.0

summarize since 1.4.0

agg since 1.4.0

summarize since 1.4.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `alias()`,
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
 df2 <- agg(df, age = "sum")  # new column name will be created as 'SUM(age#0)'
 df3 <- agg(df, ageSum = sum(df$age)) # Creates a new column named ageSum
 df4 <- summarize(df, ageSum = max(df$age))
} # }
```
