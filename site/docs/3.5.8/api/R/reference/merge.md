# Merges two data frames

Merges two data frames

## Usage

``` r
merge(x, y, ...)

# S4 method for class 'SparkDataFrame,SparkDataFrame'
merge(
  x,
  y,
  by = intersect(names(x), names(y)),
  by.x = by,
  by.y = by,
  all = FALSE,
  all.x = all,
  all.y = all,
  sort = TRUE,
  suffixes = c("_x", "_y"),
  ...
)
```

## Arguments

  - x:
    
    the first data frame to be joined.

  - y:
    
    the second data frame to be joined.

  - ...:
    
    additional argument(s) passed to the method.

  - by:
    
    a character vector specifying the join columns. If by is not
    specified, the common column names in `x` and `y` will be used. If
    by or both by.x and by.y are explicitly set to NULL or of length 0,
    the Cartesian Product of x and y will be returned.

  - by.x:
    
    a character vector specifying the joining columns for x.

  - by.y:
    
    a character vector specifying the joining columns for y.

  - all:
    
    a boolean value setting `all.x` and `all.y` if any of them are
    unset.

  - all.x:
    
    a boolean value indicating whether all the rows in x should be
    including in the join.

  - all.y:
    
    a boolean value indicating whether all the rows in y should be
    including in the join.

  - sort:
    
    a logical argument indicating whether the resulting columns should
    be sorted.

  - suffixes:
    
    a string vector of length 2 used to make colnames of `x` and `y`
    unique. The first element is appended to each colname of `x`. The
    second element is appended to each colname of `y`.

## Details

If all.x and all.y are set to FALSE, a natural join will be returned. If
all.x is set to TRUE and all.y is set to FALSE, a left outer join will
be returned. If all.x is set to FALSE and all.y is set to TRUE, a right
outer join will be returned. If all.x and all.y are set to TRUE, a full
outer join will be returned.

## Note

merge since 1.5.0

## See also

[join](https://spark.apache.org/docs/3.5.8/api/R/reference/join.md)
[crossJoin](https://spark.apache.org/docs/3.5.8/api/R/reference/crossJoin.md)

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
`isStreaming()`, `join()`, `limit()`, `localCheckpoint()`, `mutate()`,
`ncol()`, `nrow()`, `persist()`, `printSchema()`, `randomSplit()`,
`rbind()`, `rename()`, `repartition()`, `repartitionByRange()`,
`rollup()`, `sample()`, `saveAsTable()`, `schema()`, `select()`,
`selectExpr()`, `show()`, `showDF()`, `storageLevel()`, `str()`,
`subset()`, `summary()`, `take()`, `toJSON()`, `union()`, `unionAll()`,
`unionByName()`, `unpersist()`, `unpivot()`, `with()`, `withColumn()`,
`withWatermark()`, `write.df()`, `write.jdbc()`, `write.json()`,
`write.orc()`, `write.parquet()`, `write.stream()`, `write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df1 <- read.json(path)
df2 <- read.json(path2)
merge(df1, df2) # Performs an inner join by common columns
merge(df1, df2, by = "col1") # Performs an inner join based on expression
merge(df1, df2, by.x = "col1", by.y = "col2", all.y = TRUE)
merge(df1, df2, by.x = "col1", by.y = "col2", all.x = TRUE)
merge(df1, df2, by.x = "col1", by.y = "col2", all.x = TRUE, all.y = TRUE)
merge(df1, df2, by.x = "col1", by.y = "col2", all = TRUE, sort = FALSE)
merge(df1, df2, by = "col1", all = TRUE, suffixes = c("-X", "-Y"))
merge(df1, df2, by = NULL) # Performs a Cartesian join
} # }
```
