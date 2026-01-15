# last

Aggregate function: returns the last value in a group.

## Usage

``` r
last(x, ...)

# S4 method for class 'characterOrColumn'
last(x, na.rm = FALSE)
```

## Arguments

  - x:
    
    column to compute on.

  - ...:
    
    further arguments to be passed to or from other methods.

  - na.rm:
    
    a logical value indicating whether NA values should be stripped
    before the computation proceeds.

## Details

The function by default returns the last values it sees. It will return
the last non-missing value it sees when na.rm is set to true. If all
values are missing, then NA is returned. Note: the function is
non-deterministic because its results depends on the order of the rows
which may be non-deterministic after a shuffle.

## Note

last since 1.4.0

## See also

Other aggregate functions: `avg()`, `column_aggregate_functions`,
`corr()`, `count()`, `cov()`, `first()`

## Examples

``` r
if (FALSE) { # \dontrun{
last(df$c)
last(df$c, TRUE)
} # }
```
