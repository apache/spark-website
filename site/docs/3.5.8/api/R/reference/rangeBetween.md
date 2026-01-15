# rangeBetween

Defines the frame boundaries, from `start` (inclusive) to `end`
(inclusive).

## Usage

``` r
rangeBetween(x, start, end)

# S4 method for class 'WindowSpec,numeric,numeric'
rangeBetween(x, start, end)
```

## Arguments

  - x:
    
    a WindowSpec

  - start:
    
    boundary start, inclusive. The frame is unbounded if this is the
    minimum long value.

  - end:
    
    boundary end, inclusive. The frame is unbounded if this is the
    maximum long value.

## Value

a WindowSpec

## Details

Both `start` and `end` are relative from the current row. For example,
"0" means "current row", while "-1" means one off before the current
row, and "5" means the five off after the current row.

We recommend users use `Window.unboundedPreceding`,
`Window.unboundedFollowing`, and `Window.currentRow` to specify special
boundary values, rather than using long values directly.

A range-based boundary is based on the actual value of the ORDER BY
expression(s). An offset is used to alter the value of the ORDER BY
expression, for instance if the current ORDER BY expression has a value
of 10 and the lower bound offset is -3, the resulting lower bound for
the current row will be 10 - 3 = 7. This however puts a number of
constraints on the ORDER BY expressions: there can be only one
expression and this expression must have a numerical data type. An
exception can be made when the offset is unbounded, because no value
modification is needed, in this case multiple and non-numeric ORDER BY
expression are allowed.

## Note

rangeBetween since 2.0.0

## See also

Other windowspec\_method: `orderBy()`, `partitionBy()`, `rowsBetween()`

## Examples

``` r
if (FALSE) { # \dontrun{
  id <- c(rep(1, 3), rep(2, 3), 3)
  desc <- c('New', 'New', 'Good', 'New', 'Good', 'Good', 'New')
  df <- data.frame(id, desc)
  df <- createDataFrame(df)
  w1 <- orderBy(windowPartitionBy('desc'), df$id)
  w2 <- rangeBetween(w1, 0, 3)
  df1 <- withColumn(df, "sum", over(sum(df$id), w2))
  head(df1)
} # }
```
