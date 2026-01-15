# corr

Computes the Pearson Correlation Coefficient for two Columns.

## Usage

``` r
corr(x, ...)

# S4 method for class 'Column'
corr(x, col2)

# S4 method for class 'SparkDataFrame'
corr(x, colName1, colName2, method = "pearson")
```

## Arguments

  - x:
    
    a Column or a SparkDataFrame.

  - ...:
    
    additional argument(s). If `x` is a Column, a Column should be
    provided. If `x` is a SparkDataFrame, two column names should be
    provided.

  - col2:
    
    a (second) Column.

  - colName1:
    
    the name of the first column

  - colName2:
    
    the name of the second column

  - method:
    
    Optional. A character specifying the method for calculating the
    correlation. only "pearson" is allowed now.

## Value

The Pearson Correlation Coefficient as a Double.

## Note

corr since 1.6.0

corr since 1.6.0

## See also

Other aggregate functions: `avg()`, `column_aggregate_functions`,
`count()`, `cov()`, `first()`, `last()`

Other stat functions: `approxQuantile()`, `cov()`, `crosstab()`,
`freqItems()`, `sampleBy()`

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(cbind(model = rownames(mtcars), mtcars))
head(select(df, corr(df$mpg, df$hp)))} # }

if (FALSE) { # \dontrun{
corr(df, "mpg", "hp")
corr(df, "mpg", "hp", method = "pearson")} # }
```
