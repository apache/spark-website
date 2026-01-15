# Returns a stratified sample without replacement

Returns a stratified sample without replacement based on the fraction
given on each stratum.

## Usage

``` r
sampleBy(x, col, fractions, seed)

# S4 method for class 'SparkDataFrame,character,list,numeric'
sampleBy(x, col, fractions, seed)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - col:
    
    column that defines strata

  - fractions:
    
    A named list giving sampling fraction for each stratum. If a stratum
    is not specified, we treat its fraction as zero.

  - seed:
    
    random seed

## Value

A new SparkDataFrame that represents the stratified sample

## Note

sampleBy since 1.6.0

## See also

Other stat functions: `approxQuantile()`, `corr()`, `cov()`,
`crosstab()`, `freqItems()`

## Examples

``` r
if (FALSE) { # \dontrun{
df <- read.json("/path/to/file.json")
sample <- sampleBy(df, "key", fractions, 36)
} # }
```
