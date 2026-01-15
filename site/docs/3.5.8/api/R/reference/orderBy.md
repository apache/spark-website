# Ordering Columns in a WindowSpec

Defines the ordering columns in a WindowSpec.

## Usage

``` r
orderBy(x, col, ...)

# S4 method for class 'WindowSpec,character'
orderBy(x, col, ...)

# S4 method for class 'WindowSpec,Column'
orderBy(x, col, ...)
```

## Arguments

  - x:
    
    a WindowSpec

  - col:
    
    a character or Column indicating an ordering column

  - ...:
    
    additional sorting fields

## Value

A WindowSpec.

## Note

orderBy(WindowSpec, character) since 2.0.0

orderBy(WindowSpec, Column) since 2.0.0

## See also

See
[arrange](https://spark.apache.org/docs/3.5.8/api/R/reference/arrange.md)
for use in sorting a SparkDataFrame

Other windowspec\_method: `partitionBy()`, `rangeBetween()`,
`rowsBetween()`

## Examples

``` r
if (FALSE) { # \dontrun{
  orderBy(ws, "col1", "col2")
  orderBy(ws, df$col1, df$col2)
} # }
```
