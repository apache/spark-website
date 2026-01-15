# Returns a list of columns for the given table/view in the specified database

Returns a list of columns for the given table/view in the specified
database.

## Usage

``` r
listColumns(tableName, databaseName = NULL)
```

## Arguments

  - tableName:
    
    the qualified or unqualified name that designates a table/view. If
    no database identifier is provided, it refers to a table/view in the
    current database. If `databaseName` parameter is specified, this
    must be an unqualified name. The table name can be qualified with
    catalog name since 3.4.0, when databaseName is NULL.

  - databaseName:
    
    (optional) name of the database

## Value

a SparkDataFrame of the list of column descriptions.

## Note

since 2.2.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
listColumns("spark_catalog.default.mytable")
} # }
```
