# Return a new SparkDataFrame containing the union of rows, matched by column names

Return a new SparkDataFrame containing the union of rows in this
SparkDataFrame and another SparkDataFrame. This is different from
`union` function, and both `UNION ALL` and `UNION DISTINCT` in SQL as
column positions are not taken into account. Input SparkDataFrames can
have different data types in the schema.

## Usage

``` r
unionByName(x, y, ...)

# S4 method for class 'SparkDataFrame,SparkDataFrame'
unionByName(x, y, allowMissingColumns = FALSE)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - y:
    
    A SparkDataFrame

  - ...:
    
    further arguments to be passed to or from other methods.

  - allowMissingColumns:
    
    logical

## Value

A SparkDataFrame containing the result of the union.

## Details

When the parameter allowMissingColumns is \`TRUE\`, the set of column
names in x and y can differ; missing columns will be filled as null.
Further, the missing columns of x will be added at the end in the schema
of the union result.

Note: This does not remove duplicate rows across the two
SparkDataFrames. This function resolves columns by name (not by
position).

## Note

unionByName since 2.3.0

## See also

[rbind](https://spark.apache.org/docs/3.5.8/api/R/reference/rbind.md)
[union](https://spark.apache.org/docs/3.5.8/api/R/reference/union.md)

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
`toJSON()`, `union()`, `unionAll()`, `unpersist()`, `unpivot()`,
`with()`, `withColumn()`, `withWatermark()`, `write.df()`,
`write.jdbc()`, `write.json()`, `write.orc()`, `write.parquet()`,
`write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df1 <- select(createDataFrame(mtcars), "carb", "am", "gear")
df2 <- select(createDataFrame(mtcars), "am", "gear", "carb")
head(unionByName(df1, df2))

df3 <- select(createDataFrame(mtcars), "carb")
head(unionByName(df1, df3, allowMissingColumns = TRUE))
} # }
```
