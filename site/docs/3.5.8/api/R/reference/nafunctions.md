# A set of SparkDataFrame functions working with NA values

dropna, na.omit - Returns a new SparkDataFrame omitting rows with null
values.

## Usage

``` r
dropna(x, how = c("any", "all"), minNonNulls = NULL, cols = NULL)

na.omit(object, ...)

fillna(x, value, cols = NULL)

# S4 method for class 'SparkDataFrame'
dropna(x, how = c("any", "all"), minNonNulls = NULL, cols = NULL)

# S4 method for class 'SparkDataFrame'
na.omit(object, how = c("any", "all"), minNonNulls = NULL, cols = NULL)

# S4 method for class 'SparkDataFrame'
fillna(x, value, cols = NULL)
```

## Arguments

  - x:
    
    a SparkDataFrame.

  - how:
    
    "any" or "all". if "any", drop a row if it contains any nulls. if
    "all", drop a row only if all its values are null. if `minNonNulls`
    is specified, how is ignored.

  - minNonNulls:
    
    if specified, drop rows that have less than `minNonNulls` non-null
    values. This overwrites the how parameter.

  - cols:
    
    optional list of column names to consider. In `fillna`, columns
    specified in cols that do not have matching data type are ignored.
    For example, if value is a character, and subset contains a
    non-character column, then the non-character column is simply
    ignored.

  - object:
    
    a SparkDataFrame.

  - ...:
    
    further arguments to be passed to or from other methods.

  - value:
    
    value to replace null values with. Should be an integer, numeric,
    character or named list. If the value is a named list, then cols is
    ignored and value must be a mapping from column name (character) to
    replacement value. The replacement value must be an integer, numeric
    or character.

## Value

A SparkDataFrame.

## Note

dropna since 1.4.0

na.omit since 1.5.0

fillna since 1.4.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dtypes()`, `except()`, `exceptAll()`, `explain()`,
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
dropna(df)
} # }
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
fillna(df, 1)
fillna(df, list("age" = 20, "name" = "unknown"))
} # }
```
