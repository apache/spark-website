# Returns a list of tables or views in the specified database

Returns a list of tables or views in the specified database. This
includes all temporary views.

## Usage

``` r
listTables(databaseName = NULL)
```

## Arguments

  - databaseName:
    
    (optional) name of the database The database name can be qualified
    with catalog name since 3.4.0.

## Value

a SparkDataFrame of the list of tables.

## Note

since 2.2.0

## See also

[tables](https://spark.apache.org/docs/3.5.8/api/R/reference/tables.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
listTables()
listTables("spark_catalog.default")
} # }
```
