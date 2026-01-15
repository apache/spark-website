# Invalidates and refreshes all the cached data and metadata for SparkDataFrame containing path

Invalidates and refreshes all the cached data (and the associated
metadata) for any SparkDataFrame that contains the given data source
path. Path matching is by prefix, i.e. "/" would invalidate everything
that is cached.

## Usage

``` r
refreshByPath(path)
```

## Arguments

  - path:
    
    the path of the data source.

## Note

since 2.2.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
refreshByPath("/path")
} # }
```
