# coltypes

Get column types of a SparkDataFrame

Set the column types of a SparkDataFrame.

## Usage

``` r
coltypes(x)

coltypes(x) <- value

# S4 method for class 'SparkDataFrame'
coltypes(x)

# S4 method for class 'SparkDataFrame,character'
coltypes(x) <- value
```

## Arguments

  - x:
    
    A SparkDataFrame

  - value:
    
    A character vector with the target column types for the given
    SparkDataFrame. Column types can be one of integer, numeric/double,
    character, logical, or NA to keep that column as-is.

## Value

value A character vector with the column types of the given
SparkDataFrame

## Note

coltypes since 1.6.0

coltypes\<- since 1.6.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`,
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
`toJSON()`, `union()`, `unionAll()`, `unionByName()`, `unpersist()`,
`unpivot()`, `with()`, `withColumn()`, `withWatermark()`, `write.df()`,
`write.jdbc()`, `write.json()`, `write.orc()`, `write.parquet()`,
`write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
irisDF <- createDataFrame(iris)
coltypes(irisDF) # get column types
} # }
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
coltypes(df) <- c("character", "integer") # set column types
coltypes(df) <- c(NA, "numeric") # set column types
} # }
```
