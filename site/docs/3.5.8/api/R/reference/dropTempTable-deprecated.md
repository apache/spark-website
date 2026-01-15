# (Deprecated) Drop Temporary Table

Drops the temporary table with the given table name in the catalog. If
the table has been cached/persisted before, it's also unpersisted.

## Usage

``` r
dropTempTable(tableName)
```

## Arguments

  - tableName:
    
    The name of the SparkSQL table to be dropped.

## Note

dropTempTable since 1.4.0

## See also

[dropTempView](https://spark.apache.org/docs/3.5.8/api/R/reference/dropTempView.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df <- read.df(path, "parquet")
createOrReplaceTempView(df, "table")
dropTempTable("table")
} # }
```
