# Sample

Return a sampled subset of this SparkDataFrame using a random seed.
Note: this is not guaranteed to provide exactly the fraction specified
of the total count of of the given SparkDataFrame.

## Usage

``` r
sample(x, withReplacement = FALSE, fraction, seed)

sample_frac(x, withReplacement = FALSE, fraction, seed)

# S4 method for class 'SparkDataFrame'
sample(x, withReplacement = FALSE, fraction, seed)

# S4 method for class 'SparkDataFrame'
sample_frac(x, withReplacement = FALSE, fraction, seed)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - withReplacement:
    
    Sampling with replacement or not

  - fraction:
    
    The (rough) sample target fraction

  - seed:
    
    Randomness seed value. Default is a random seed.

## Note

sample since 1.4.0

sample\_frac since 1.4.0

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
`repartitionByRange()`, `rollup()`, `saveAsTable()`, `schema()`,
`select()`, `selectExpr()`, `show()`, `showDF()`, `storageLevel()`,
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
collect(sample(df, fraction = 0.5))
collect(sample(df, FALSE, 0.5))
collect(sample(df, TRUE, 0.5, seed = 3))
} # }
```
