# Set a local property that affects jobs submitted from this thread, such as the Spark fair scheduler pool.

Set a local property that affects jobs submitted from this thread, such
as the Spark fair scheduler pool.

## Usage

``` r
setLocalProperty(key, value)
```

## Arguments

  - key:
    
    The key for a local property.

  - value:
    
    The value for a local property.

## Note

setLocalProperty since 2.3.0

## Examples

``` r
if (FALSE) { # \dontrun{
setLocalProperty("spark.scheduler.pool", "poolA")
} # }
```
