# Finding frequent items for columns, possibly with false positives

Finding frequent items for columns, possibly with false positives. Using
the frequent element count algorithm described in
<https://dl.acm.org/doi/10.1145/762471.762473>, proposed by Karp,
Schenker, and Papadimitriou.

## Usage

``` r
# S4 method for class 'SparkDataFrame,character'
freqItems(x, cols, support = 0.01)
```

## Arguments

  - x:
    
    A SparkDataFrame.

  - cols:
    
    A vector column names to search frequent items in.

  - support:
    
    (Optional) The minimum frequency for an item to be considered
    `frequent`. Should be greater than 1e-4. Default support = 0.01.

## Value

a local R data.frame with the frequent items in each column

## Note

freqItems since 1.6.0

## See also

Other stat functions: `approxQuantile()`, `corr()`, `cov()`,
`crosstab()`, `sampleBy()`

## Examples

``` r
if (FALSE) { # \dontrun{
df <- read.json("/path/to/file.json")
fi = freqItems(df, c("title", "gender"))
} # }
```
