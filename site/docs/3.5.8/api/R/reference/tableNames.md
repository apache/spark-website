# Table Names

Returns the names of tables in the given database as an array.

## Usage

``` r
tableNames(databaseName = NULL)
```

## Arguments

  - databaseName:
    
    (optional) name of the database The database name can be qualified
    with catalog name since 3.4.0.

## Value

a list of table names

## Note

tableNames since 1.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
tableNames("spark_catalog.hive")
} # }
```
