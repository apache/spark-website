# \!

Inversion of boolean expression.

Inversion of boolean expression.

## Usage

``` r
not(x)

# S4 method for class 'Column'
!x

# S4 method for class 'Column'
not(x)
```

## Arguments

  - x:
    
    Column to compute on

## Details

`not` and `!` cannot be applied directly to numerical column. To achieve
R-like truthiness column has to be casted to `BooleanType`.

## Note

\! since 2.3.0

not since 2.3.0

## See also

Other non-aggregate functions: `column()`,
`column_nonaggregate_functions`

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(data.frame(x = c(-1, 0, 1)))

head(select(df, !column("x") > 0))
} # }
if (FALSE) { # \dontrun{
df <- createDataFrame(data.frame(
  is_true = c(TRUE, FALSE, NA),
  flag = c(1, 0,  1)
))

head(select(df, not(df$is_true)))

# Explicit cast is required when working with numeric column
head(select(df, not(cast(df$flag, "boolean"))))
} # }
```
