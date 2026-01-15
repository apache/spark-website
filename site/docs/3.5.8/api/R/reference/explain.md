# Explain

Print the logical and physical Catalyst plans to the console for
debugging.

## Usage

``` r
explain(x, ...)

# S4 method for class 'SparkDataFrame'
explain(x, extended = FALSE)

# S4 method for class 'StreamingQuery'
explain(x, extended = FALSE)
```

## Arguments

  - x:
    
    a SparkDataFrame or a StreamingQuery.

  - ...:
    
    further arguments to be passed to or from other methods.

  - extended:
    
    Logical. If extended is FALSE, prints only the physical plan.

## Note

explain since 1.4.0

explain(StreamingQuery) since 2.2.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
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

Other StreamingQuery methods: `awaitTermination()`, `isActive()`,
`lastProgress()`, `queryName()`, `status()`, `stopQuery()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
explain(df, TRUE)
} # }
if (FALSE)  explain(sq)  # \dontrun{}
```
