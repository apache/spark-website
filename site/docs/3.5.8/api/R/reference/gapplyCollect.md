# gapplyCollect

Groups the SparkDataFrame using the specified columns, applies the R
function to each group and collects the result back to R as data.frame.

## Usage

``` r
gapplyCollect(x, ...)

# S4 method for class 'GroupedData'
gapplyCollect(x, func)

# S4 method for class 'SparkDataFrame'
gapplyCollect(x, cols, func)
```

## Arguments

  - x:
    
    a SparkDataFrame or GroupedData.

  - ...:
    
    additional argument(s) passed to the method.

  - func:
    
    a function to be applied to each group partition specified by
    grouping column of the SparkDataFrame. See Details.

  - cols:
    
    grouping columns.

## Value

A data.frame.

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

gapplyCollect(GroupedData) since 2.0.0

gapplyCollect(SparkDataFrame) since 2.0.0

## See also

[gapply](https://spark.apache.org/docs/3.5.8/api/R/reference/gapply.md)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
`explain()`, `filter()`, `first()`, `gapply()`, `getNumPartitions()`,
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
# Computes the arithmetic mean of the second column by grouping
# on the first and third columns. Output the grouping values and the average.

df <- createDataFrame (
list(list(1L, 1, "1", 0.1), list(1L, 2, "1", 0.2), list(3L, 3, "3", 0.3)),
  c("a", "b", "c", "d"))

result <- gapplyCollect(
  df,
  c("a", "c"),
  function(key, x) {
    y <- data.frame(key, mean(x$b), stringsAsFactors = FALSE)
    colnames(y) <- c("key_a", "key_c", "mean_b")
    y
  })

# We can also group the data and afterwards call gapply on GroupedData.
# For example:
gdf <- group_by(df, "a", "c")
result <- gapplyCollect(
  gdf,
  function(key, x) {
    y <- data.frame(key, mean(x$b), stringsAsFactors = FALSE)
    colnames(y) <- c("key_a", "key_c", "mean_b")
    y
  })

# Result
# ------
# key_a key_c mean_b
# 3 3 3.0
# 1 1 1.5

# Fits linear models on iris dataset by grouping on the 'Species' column and
# using 'Sepal_Length' as a target variable, 'Sepal_Width', 'Petal_Length'
# and 'Petal_Width' as training features.

df <- createDataFrame (iris)
result <- gapplyCollect(
  df,
  df$"Species",
  function(key, x) {
    m <- suppressWarnings(lm(Sepal_Length ~
    Sepal_Width + Petal_Length + Petal_Width, x))
    data.frame(t(coef(m)))
  })

# Result
# ---------
# Model  X.Intercept.  Sepal_Width  Petal_Length  Petal_Width
# 1        0.699883    0.3303370    0.9455356    -0.1697527
# 2        1.895540    0.3868576    0.9083370    -0.6792238
# 3        2.351890    0.6548350    0.2375602     0.2521257

} # }
```
