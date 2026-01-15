# partitionBy

Defines the partitioning columns in a WindowSpec.

## Usage

``` r
partitionBy(x, ...)

# S4 method for class 'WindowSpec'
partitionBy(x, col, ...)
```

## Arguments

  - x:
    
    a WindowSpec.

  - ...:
    
    additional column(s) to partition on.

  - col:
    
    a column to partition on (described by the name or Column).

## Value

A WindowSpec.

## Note

partitionBy(WindowSpec) since 2.0.0

## See also

Other windowspec\_method: `orderBy()`, `rangeBetween()`, `rowsBetween()`

## Examples

``` r
if (FALSE) { # \dontrun{
  partitionBy(ws, "col1", "col2")
  partitionBy(ws, df$col1, df$col2)
} # }
```
