# summary

Computes specified statistics for numeric and string columns. Available
statistics are:

  - count

  - mean

  - stddev

  - min

  - max

  - arbitrary approximate percentiles specified as a percentage (e.g.,
    "75%")

If no statistics are given, this function computes count, mean, stddev,
min, approximate quartiles (percentiles at 25%, 50%, and 75%), and max.
This function is meant for exploratory data analysis, as we make no
guarantee about the backward compatibility of the schema of the
resulting Dataset. If you want to programmatically compute summary
statistics, use the `agg` function instead.

## Usage

``` r
summary(object, ...)

# S4 method for class 'SparkDataFrame'
summary(object, ...)
```

## Arguments

  - object:
    
    a SparkDataFrame to be summarized.

  - ...:
    
    (optional) statistics to be computed for all columns.

## Value

A SparkDataFrame.

## Note

summary(SparkDataFrame) since 1.5.0

The statistics provided by `summary` were change in 2.3.0 use
[describe](https://spark.apache.org/docs/3.5.8/api/R/reference/describe.md)
for previous defaults.

## See also

[describe](https://spark.apache.org/docs/3.5.8/api/R/reference/describe.md)

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
`storageLevel()`, `str()`, `subset()`, `take()`, `toJSON()`, `union()`,
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
summary(df)
summary(df, "min", "25%", "75%", "max")
summary(select(df, "age", "height"))
} # }
```
