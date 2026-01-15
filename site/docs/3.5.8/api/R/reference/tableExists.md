# Checks if the table with the specified name exists.

Checks if the table with the specified name exists.

## Usage

``` r
tableExists(tableName)
```

## Arguments

  - tableName:
    
    name of the table, allowed to be qualified with catalog name

## Note

since 3.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
databaseExists("spark_catalog.default.myTable")
} # }
```
