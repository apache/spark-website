# show

If eager evaluation is enabled and the Spark object is a SparkDataFrame,
evaluate the SparkDataFrame and print top rows of the SparkDataFrame,
otherwise, print the class and type information of the Spark object.

## Usage

``` r
# S4 method for class 'Column'
show(object)

# S4 method for class 'GroupedData'
show(object)

# S4 method for class 'SparkDataFrame'
show(object)

# S4 method for class 'WindowSpec'
show(object)

# S4 method for class 'StreamingQuery'
show(object)
```

## Arguments

  - object:
    
    a Spark object. Can be a SparkDataFrame, Column, GroupedData,
    WindowSpec.

## Note

show(Column) since 1.4.0

show(GroupedData) since 1.4.0

show(SparkDataFrame) since 1.4.0

show(WindowSpec) since 2.0.0

show(StreamingQuery) since 2.2.0

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
`schema()`, `select()`, `selectExpr()`, `showDF()`, `storageLevel()`,
`str()`, `subset()`, `summary()`, `take()`, `toJSON()`, `union()`,
`unionAll()`, `unionByName()`, `unpersist()`, `unpivot()`, `with()`,
`withColumn()`, `withWatermark()`, `write.df()`, `write.jdbc()`,
`write.json()`, `write.orc()`, `write.parquet()`, `write.stream()`,
`write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
show(df)
} # }
```
