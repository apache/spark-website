# describe

Computes statistics for numeric and string columns. If no columns are
given, this function computes statistics for all numerical or string
columns.

## Usage

``` r
describe(x, col, ...)

# S4 method for class 'SparkDataFrame,character'
describe(x, col, ...)

# S4 method for class 'SparkDataFrame,ANY'
describe(x)
```

## Arguments

  - x:
    
    a SparkDataFrame to be computed.

  - col:
    
    a string of name.

  - ...:
    
    additional expressions.

## Value

A SparkDataFrame.

## Note

describe(SparkDataFrame, character) since 1.4.0

describe(SparkDataFrame) since 1.4.0

## See also

See
[summary](https://spark.apache.org/docs/3.5.8/api/R/reference/summary.md)
for expanded statistics and control over which statistics to compute.

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `dim()`, `distinct()`, `drop()`, `dropDuplicates()`,
`dropna()`, `dtypes()`, `except()`, `exceptAll()`, `explain()`,
`filter()`, `first()`, `gapply()`, `gapplyCollect()`,
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
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
describe(df)
describe(df, "col1")
describe(df, "col1", "col2")
} # }
```
