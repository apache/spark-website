# over

Define a windowing column.

## Usage

``` r
over(x, window)

# S4 method for class 'Column,WindowSpec'
over(x, window)
```

## Arguments

  - x:
    
    a Column, usually one returned by window function(s).

  - window:
    
    a WindowSpec object. Can be created by `windowPartitionBy` or
    `windowOrderBy` and configured by other WindowSpec methods.

## Note

over since 2.0.0

## See also

Other column\_func: `alias()`, `between()`, `cast()`, `endsWith()`,
`otherwise()`, `startsWith()`, `substr()`

## Examples

``` r
if (FALSE) { # \dontrun{
  df <- createDataFrame(mtcars)

  # Partition by am (transmission) and order by hp (horsepower)
  ws <- orderBy(windowPartitionBy("am"), "hp")

  # Rank on hp within each partition
  out <- select(df, over(rank(), ws), df$hp, df$am)

  # Lag mpg values by 1 row on the partition-and-ordered table
  out <- select(df, over(lead(df$mpg), ws), df$mpg, df$hp, df$am)
} # }
```
