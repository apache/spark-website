# Get a local property set in this thread, or `NULL` if it is missing. See `setLocalProperty`.

Get a local property set in this thread, or `NULL` if it is missing. See
`setLocalProperty`.

## Usage

``` r
getLocalProperty(key)
```

## Arguments

  - key:
    
    The key for a local property.

## Note

getLocalProperty since 2.3.0

## Examples

``` r
if (FALSE) { # \dontrun{
getLocalProperty("spark.scheduler.pool")
} # }
```
