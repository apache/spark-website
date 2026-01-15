# Match a column with given values.

Match a column with given values.

## Usage

``` r
# S4 method for class 'Column'
x %in% table
```

## Arguments

  - x:
    
    a Column.

  - table:
    
    a collection of values (coercible to list) to compare with.

## Value

A matched values as a result of comparing with given values.

## Note

%in% since 1.5.0

## Examples

``` r
if (FALSE) { # \dontrun{
filter(df, "age in (10, 30)")
where(df, df$age %in% c(10, 30))
} # }
```
