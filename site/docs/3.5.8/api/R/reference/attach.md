# Attach SparkDataFrame to R search path

The specified SparkDataFrame is attached to the R search path. This
means that the SparkDataFrame is searched by R when evaluating a
variable, so columns in the SparkDataFrame can be accessed by simply
giving their names.

## Usage

``` r
# S4 method for class 'SparkDataFrame'
attach(
  what,
  pos = 2L,
  name = paste(deparse(substitute(what), backtick = FALSE), collapse = " "),
  warn.conflicts = TRUE
)
```

## Arguments

  - what:
    
    (SparkDataFrame) The SparkDataFrame to attach

  - pos:
    
    (integer) Specify position in search() where to attach.

  - name:
    
    (character) Name to use for the attached SparkDataFrame. Names
    starting with package: are reserved for library.

  - warn.conflicts:
    
    (logical) If TRUE, warnings are printed about conflicts from
    attaching the database, unless that SparkDataFrame contains an
    object

## Note

attach since 1.6.0

## See also

[detach](https://rdrr.io/r/base/detach.html)

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`, `broadcast()`, `cache()`,
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
`toJSON()`, `union()`, `unionAll()`, `unionByName()`, `unpersist()`,
`unpivot()`, `with()`, `withColumn()`, `withWatermark()`, `write.df()`,
`write.jdbc()`, `write.json()`, `write.orc()`, `write.parquet()`,
`write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
attach(irisDf)
summary(Sepal_Width)
} # }
```
