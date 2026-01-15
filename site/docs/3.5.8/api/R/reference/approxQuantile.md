# Calculates the approximate quantiles of numerical columns of a SparkDataFrame

Calculates the approximate quantiles of numerical columns of a
SparkDataFrame. The result of this algorithm has the following
deterministic bound: If the SparkDataFrame has N elements and if we
request the quantile at probability p up to error err, then the
algorithm will return a sample x from the SparkDataFrame so that the
\*exact\* rank of x is close to (p \* N). More precisely, floor((p -
err) \* N) \<= rank(x) \<= ceil((p + err) \* N). This method implements
a variation of the Greenwald-Khanna algorithm (with some speed
optimizations). The algorithm was first present in
\[\[https://doi.org/10.1145/375663.375670 Space-efficient Online
Computation of Quantile Summaries\]\] by Greenwald and Khanna. Note that
NA values will be ignored in numerical columns before calculation. For
columns only containing NA values, an empty list is returned.

## Usage

``` r
# S4 method for class 'SparkDataFrame,character,numeric,numeric'
approxQuantile(x, cols, probabilities, relativeError)
```

## Arguments

  - x:
    
    A SparkDataFrame.

  - cols:
    
    A single column name, or a list of names for multiple columns.

  - probabilities:
    
    A list of quantile probabilities. Each number must belong to \[0,
    1\]. For example 0 is the minimum, 0.5 is the median, 1 is the
    maximum.

  - relativeError:
    
    The relative target precision to achieve (\>= 0). If set to zero,
    the exact quantiles are computed, which could be very expensive.
    Note that values greater than 1 are accepted but give the same
    result as 1.

## Value

The approximate quantiles at the given probabilities. If the input is a
single column name, the output is a list of approximate quantiles in
that column; If the input is multiple column names, the output should be
a list, and each element in it is a list of numeric values which
represents the approximate quantiles in corresponding column.

## Note

approxQuantile since 2.0.0

## See also

Other stat functions: `corr()`, `cov()`, `crosstab()`, `freqItems()`,
`sampleBy()`

## Examples

``` r
if (FALSE) { # \dontrun{
df <- read.json("/path/to/file.json")
quantiles <- approxQuantile(df, "key", c(0.5, 0.8), 0.0)
} # }
```
