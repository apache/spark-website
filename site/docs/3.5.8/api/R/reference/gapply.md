# gapply

Groups the SparkDataFrame using the specified columns and applies the R
function to each group.

## Usage

``` r
gapply(x, ...)

# S4 method for class 'GroupedData'
gapply(x, func, schema)

# S4 method for class 'SparkDataFrame'
gapply(x, cols, func, schema)
```

## Arguments

  - x:
    
    a SparkDataFrame or GroupedData.

  - ...:
    
    additional argument(s) passed to the method.

  - func:
    
    a function to be applied to each group partition specified by
    grouping column of the SparkDataFrame. See Details.

  - schema:
    
    the schema of the resulting SparkDataFrame after the function is
    applied. The schema must match to output of `func`. It has to be
    defined for each output column with preferred output column name and
    corresponding data type. Since Spark 2.3, the DDL-formatted string
    is also supported for the schema.

  - cols:
    
    grouping columns.

## Value

A SparkDataFrame.

## Details

`func` is a function of two arguments. The first, usually named `key`
(though this is not enforced) corresponds to the grouping key, will be
an unnamed `list` of `length(cols)` length-one objects corresponding to
the grouping columns' values for the current group.

The second, herein `x`, will be a local `data.frame` with the columns of
the input not in `cols` for the rows corresponding to `key`.

The output of `func` must be a `data.frame` matching `schema` – in
particular this means the names of the output `data.frame` are
irrelevant

## Note

gapply(GroupedData) since 2.0.0

gapply(SparkDataFrame) since 2.0.0

## See also

[gapplyCollect](https://spark.apache.org/docs/3.5.8/api/R/reference/gapplyCollect.md)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
`explain()`, `filter()`, `first()`, `gapplyCollect()`,
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
# Computes the arithmetic mean of the second column by grouping
# on the first and third columns. Output the grouping values and the average.

df <- createDataFrame (
list(list(1L, 1, "1", 0.1), list(1L, 2, "1", 0.2), list(3L, 3, "3", 0.3)),
  c("a", "b", "c", "d"))

# Here our output contains three columns, the key which is a combination of two
# columns with data types integer and string and the mean which is a double.
schema <- structType(structField("a", "integer"), structField("c", "string"),
  structField("avg", "double"))
result <- gapply(
  df,
  c("a", "c"),
  function(key, x) {
    # key will either be list(1L, '1') (for the group where a=1L,c='1') or
    #   list(3L, '3') (for the group where a=3L,c='3')
    y <- data.frame(key, mean(x$b), stringsAsFactors = FALSE)
}, schema)

# The schema also can be specified in a DDL-formatted string.
schema <- "a INT, c STRING, avg DOUBLE"
result <- gapply(
  df,
  c("a", "c"),
  function(key, x) {
    y <- data.frame(key, mean(x$b), stringsAsFactors = FALSE)
}, schema)

# We can also group the data and afterwards call gapply on GroupedData.
# For example:
gdf <- group_by(df, "a", "c")
result <- gapply(
  gdf,
  function(key, x) {
    y <- data.frame(key, mean(x$b), stringsAsFactors = FALSE)
}, schema)
collect(result)

# Result
# ------
# a c avg
# 3 3 3.0
# 1 1 1.5

# Fits linear models on iris dataset by grouping on the 'Species' column and
# using 'Sepal_Length' as a target variable, 'Sepal_Width', 'Petal_Length'
# and 'Petal_Width' as training features.

df <- createDataFrame (iris)
schema <- structType(structField("(Intercept)", "double"),
  structField("Sepal_Width", "double"),structField("Petal_Length", "double"),
  structField("Petal_Width", "double"))
df1 <- gapply(
  df,
  df$"Species",
  function(key, x) {
    m <- suppressWarnings(lm(Sepal_Length ~
    Sepal_Width + Petal_Length + Petal_Width, x))
    data.frame(t(coef(m)))
  }, schema)
collect(df1)

# Result
# ---------
# Model  (Intercept)  Sepal_Width  Petal_Length  Petal_Width
# 1        0.699883    0.3303370    0.9455356    -0.1697527
# 2        1.895540    0.3868576    0.9083370    -0.6792238
# 3        2.351890    0.6548350    0.2375602     0.2521257

} # }
```
