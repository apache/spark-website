# Checks if the database with the specified name exists.

Checks if the database with the specified name exists.

## Usage

``` r
databaseExists(databaseName)
```

## Arguments

  - databaseName:
    
    name of the database, allowed to be qualified with catalog name

## Note

since 3.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
databaseExists("spark_catalog.default")
} # }
```
