# Count

Count the number of rows for each group when we have `GroupedData`
input. The resulting SparkDataFrame will also contain the grouping
columns.

This can be used as a column aggregate function with `Column` as input,
and returns the number of items in a group.

## Usage

``` r
count(x)

n(x)

# S4 method for class 'GroupedData'
count(x)

# S4 method for class 'Column'
count(x)

# S4 method for class 'Column'
n(x)
```

## Arguments

  - x:
    
    a GroupedData or Column.

## Value

A SparkDataFrame.

## Note

count since 1.4.0

count since 1.4.0

n since 1.4.0

## See also

Other aggregate functions: `avg()`, `column_aggregate_functions`,
`corr()`, `cov()`, `first()`, `last()`

## Examples

``` r
if (FALSE) { # \dontrun{
  count(groupBy(df, "name"))
} # }
if (FALSE) count(df$c) # \dontrun{}
if (FALSE) n(df$c) # \dontrun{}
```
