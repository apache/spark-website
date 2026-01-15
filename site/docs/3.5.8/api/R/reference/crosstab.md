# Computes a pair-wise frequency table of the given columns

Computes a pair-wise frequency table of the given columns. Also known as
a contingency table. The number of distinct values for each column
should be less than 1e4. At most 1e6 non-zero pair frequencies will be
returned.

## Usage

``` r
# S4 method for class 'SparkDataFrame,character,character'
crosstab(x, col1, col2)
```

## Arguments

  - x:
    
    a SparkDataFrame

  - col1:
    
    name of the first column. Distinct items will make the first item of
    each row.

  - col2:
    
    name of the second column. Distinct items will make the column names
    of the output.

## Value

a local R data.frame representing the contingency table. The first
column of each row will be the distinct values of `col1` and the column
names will be the distinct values of `col2`. The name of the first
column will be "`col1`\_`col2`". Pairs that have no occurrences will
have zero as their counts.

## Note

crosstab since 1.5.0

## See also

Other stat functions: `approxQuantile()`, `corr()`, `cov()`,
`freqItems()`, `sampleBy()`

## Examples

``` r
if (FALSE) { # \dontrun{
df <- read.json("/path/to/file.json")
ct <- crosstab(df, "title", "gender")
} # }
```
