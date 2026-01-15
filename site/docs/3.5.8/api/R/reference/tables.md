# Tables

Returns a SparkDataFrame containing names of tables in the given
database.

## Usage

``` r
tables(databaseName = NULL)
```

## Arguments

  - databaseName:
    
    (optional) name of the database The database name can be qualified
    with catalog name since 3.4.0.

## Value

a SparkDataFrame

## Note

tables since 1.4.0

## See also

[listTables](https://spark.apache.org/docs/3.5.8/api/R/reference/listTables.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
tables("spark_catalog.hive")
} # }
```
