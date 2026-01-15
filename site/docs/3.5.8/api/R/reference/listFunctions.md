# Returns a list of functions registered in the specified database

Returns a list of functions registered in the specified database. This
includes all temporary functions.

## Usage

``` r
listFunctions(databaseName = NULL)
```

## Arguments

  - databaseName:
    
    (optional) name of the database The database name can be qualified
    with catalog name since 3.4.0.

## Value

a SparkDataFrame of the list of function descriptions.

## Note

since 2.2.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
listFunctions(spark_catalog.default)
} # }
```
