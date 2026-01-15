# Uncache Table

Removes the specified table from the in-memory cache.

## Usage

``` r
uncacheTable(tableName)
```

## Arguments

  - tableName:
    
    the qualified or unqualified name that designates a table. If no
    database identifier is provided, it refers to a table in the current
    database. The table name can be fully qualified with catalog name
    since 3.4.0.

## Value

SparkDataFrame

## Note

uncacheTable since 1.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
createOrReplaceTempView(df, "table")
uncacheTable("table")
} # }
```
