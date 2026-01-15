# cov

Compute the covariance between two expressions.

## Usage

``` r
cov(x, ...)

covar_samp(col1, col2)

covar_pop(col1, col2)

# S4 method for class 'characterOrColumn'
cov(x, col2)

# S4 method for class 'characterOrColumn,characterOrColumn'
covar_samp(col1, col2)

# S4 method for class 'characterOrColumn,characterOrColumn'
covar_pop(col1, col2)

# S4 method for class 'SparkDataFrame'
cov(x, colName1, colName2)
```

## Arguments

  - x:
    
    a Column or a SparkDataFrame.

  - ...:
    
    additional argument(s). If `x` is a Column, a Column should be
    provided. If `x` is a SparkDataFrame, two column names should be
    provided.

  - col1:
    
    the first Column.

  - col2:
    
    the second Column.

  - colName1:
    
    the name of the first column

  - colName2:
    
    the name of the second column

## Value

The covariance of the two columns.

## Details

`cov`: Compute the sample covariance between two expressions.

`covar_sample`: Alias for `cov`.

`covar_pop`: Computes the population covariance between two expressions.

`cov`: When applied to SparkDataFrame, this calculates the sample
covariance of two numerical columns of *one* SparkDataFrame.

## Note

cov since 1.6.0

covar\_samp since 2.0.0

covar\_pop since 2.0.0

cov since 1.6.0

## See also

Other aggregate functions: `avg()`, `column_aggregate_functions`,
`corr()`, `count()`, `first()`, `last()`

Other stat functions: `approxQuantile()`, `corr()`, `crosstab()`,
`freqItems()`, `sampleBy()`

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(cbind(model = rownames(mtcars), mtcars))
head(select(df, cov(df$mpg, df$hp), cov("mpg", "hp"),
                covar_samp(df$mpg, df$hp), covar_samp("mpg", "hp"),
                covar_pop(df$mpg, df$hp), covar_pop("mpg", "hp")))} # }

if (FALSE) { # \dontrun{
cov(df, "mpg", "hp")
cov(df, df$mpg, df$hp)} # }
```
