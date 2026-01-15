# avg

Aggregate function: returns the average of the values in a group.

## Usage

``` r
avg(x, ...)

# S4 method for class 'Column'
avg(x)
```

## Arguments

  - x:
    
    Column to compute on or a GroupedData object.

  - ...:
    
    additional argument(s) when `x` is a GroupedData object.

## Note

avg since 1.4.0

## See also

Other aggregate functions: `column_aggregate_functions`, `corr()`,
`count()`, `cov()`, `first()`, `last()`

## Examples

``` r
if (FALSE) avg(df$c) # \dontrun{}
```
