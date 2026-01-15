# Get the database with the specified name

Get the database with the specified name

## Usage

``` r
getDatabase(databaseName)
```

## Arguments

  - databaseName:
    
    name of the database, allowed to be qualified with catalog name

## Value

A named list.

## Note

since 3.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
db <- getDatabase("default")
} # }
```
