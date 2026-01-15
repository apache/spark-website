# Compute histogram statistics for given column

This function computes a histogram for a given SparkR Column.

## Usage

``` r
# S4 method for class 'SparkDataFrame,characterOrColumn'
histogram(df, col, nbins = 10)
```

## Arguments

  - df:
    
    the SparkDataFrame containing the Column to build the histogram
    from.

  - col:
    
    the column as Character string or a Column to build the histogram
    from.

  - nbins:
    
    the number of bins (optional). Default value is 10.

## Value

a data.frame with the histogram statistics, i.e., counts and centroids.

## Note

histogram since 2.0.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
`explain()`, `filter()`, `first()`, `gapply()`, `gapplyCollect()`,
`getNumPartitions()`, `group_by()`, `head()`, `hint()`, `insertInto()`,
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

# Create a SparkDataFrame from the Iris dataset
irisDF <- createDataFrame(iris)

# Compute histogram statistics
histStats <- histogram(irisDF, irisDF$Sepal_Length, nbins = 12)

# Once SparkR has computed the histogram statistics, the histogram can be
# rendered using the ggplot2 library:

require(ggplot2)
plot <- ggplot(histStats, aes(x = centroids, y = counts)) +
        geom_bar(stat = "identity") +
        xlab("Sepal_Length") + ylab("Frequency")
} # }
```
