# %\<=\>%

Equality test that is safe for null values.

## Usage

``` r
x %<=>% value

# S4 method for class 'Column'
x %<=>% value
```

## Arguments

  - x:
    
    a Column

  - value:
    
    a value to compare

## Details

Can be used, unlike standard equality operator, to perform null-safe
joins. Equivalent to Scala `Column.<=>` and `Column.eqNullSafe`.

## Note

%\<=\>% since 2.3.0

## Examples

``` r
if (FALSE) { # \dontrun{
df1 <- createDataFrame(data.frame(
  x = c(1, NA, 3, NA), y = c(2, 6, 3, NA)
))

head(select(df1, df1$x == df1$y, df1$x %<=>% df1$y))

df2 <- createDataFrame(data.frame(y = c(3, NA)))
count(join(df1, df2, df1$y == df2$y))

count(join(df1, df2, df1$y %<=>% df2$y))
} # }
```
