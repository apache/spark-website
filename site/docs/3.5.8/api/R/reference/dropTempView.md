# Drops the temporary view with the given view name in the catalog.

Drops the temporary view with the given view name in the catalog. If the
view has been cached before, then it will also be uncached.

## Usage

``` r
dropTempView(viewName)
```

## Arguments

  - viewName:
    
    the name of the temporary view to be dropped.

## Value

TRUE if the view is dropped successfully, FALSE otherwise.

## Note

since 2.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df <- read.df(path, "parquet")
createOrReplaceTempView(df, "table")
dropTempView("table")
} # }
```
