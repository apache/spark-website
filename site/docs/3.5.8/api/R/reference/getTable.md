# Get the table with the specified name

Get the table with the specified name

## Usage

``` r
getTable(tableName)
```

## Arguments

  - tableName:
    
    the qualified or unqualified name that designates a table, allowed
    to be qualified with catalog name

## Value

A named list.

## Note

since 3.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
tbl <- getTable("spark_catalog.default.myTable")
} # }
```
