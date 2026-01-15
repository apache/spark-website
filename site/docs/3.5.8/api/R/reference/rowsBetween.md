# rowsBetween

Defines the frame boundaries, from `start` (inclusive) to `end`
(inclusive).

## Usage

``` r
rowsBetween(x, start, end)

# S4 method for class 'WindowSpec,numeric,numeric'
rowsBetween(x, start, end)
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

Both `start` and `end` are relative positions from the current row. For
example, "0" means "current row", while "-1" means the row before the
current row, and "5" means the fifth row after the current row.

We recommend users use `Window.unboundedPreceding`,
`Window.unboundedFollowing`, and `Window.currentRow` to specify special
boundary values, rather than using long values directly.

A row based boundary is based on the position of the row within the
partition. An offset indicates the number of rows above or below the
current row, the frame for the current row starts or ends. For instance,
given a row based sliding frame with a lower bound offset of -1 and a
upper bound offset of +2. The frame for row with index 5 would range
from index 4 to index 7.

## Note

rowsBetween since 2.0.0

## See also

Other windowspec\_method: `orderBy()`, `partitionBy()`, `rangeBetween()`

## Examples

``` r
if (FALSE) { # \dontrun{
  id <- c(rep(1, 3), rep(2, 3), 3)
  desc <- c('New', 'New', 'Good', 'New', 'Good', 'Good', 'New')
  df <- data.frame(id, desc)
  df <- createDataFrame(df)
  w1 <- orderBy(windowPartitionBy('desc'), df$id)
  w2 <- rowsBetween(w1, 0, 3)
  df1 <- withColumn(df, "sum", over(sum(df$id), w2))
  head(df1)
} # }
```
