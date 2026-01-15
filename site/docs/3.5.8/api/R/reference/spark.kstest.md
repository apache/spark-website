# (One-Sample) Kolmogorov-Smirnov Test

`spark.kstest` Conduct the two-sided Kolmogorov-Smirnov (KS) test for
data sampled from a continuous distribution.

By comparing the largest difference between the empirical cumulative
distribution of the sample data and the theoretical distribution we can
provide a test for the the null hypothesis that the sample data comes
from that theoretical distribution.

Users can call `summary` to obtain a summary of the test, and
`print.summary.KSTest` to print out a summary result.

## Usage

``` r
spark.kstest(data, ...)

# S4 method for class 'SparkDataFrame'
spark.kstest(
  data,
  testCol = "test",
  nullHypothesis = c("norm"),
  distParams = c(0, 1)
)

# S4 method for class 'KSTest'
summary(object)

# S3 method for class 'summary.KSTest'
print(x, ...)
```

## Arguments

  - data:
    
    a SparkDataFrame of user data.

  - ...:
    
    additional argument(s) passed to the method.

  - testCol:
    
    column name where the test data is from. It should be a column of
    double type.

  - nullHypothesis:
    
    name of the theoretical distribution tested against. Currently only
    `"norm"` for normal distribution is supported.

  - distParams:
    
    parameters(s) of the distribution. For `nullHypothesis = "norm"`, we
    can provide as a vector the mean and standard deviation of the
    distribution. If none is provided, then standard normal will be
    used. If only one is provided, then the standard deviation will be
    set to be one.

  - object:
    
    test result object of KSTest by `spark.kstest`.

  - x:
    
    summary object of KSTest returned by `summary`.

## Value

`spark.kstest` returns a test result object.

`summary` returns summary information of KSTest object, which is a list.
The list includes the `p.value` (p-value), `statistic` (test statistic
computed for the test), `nullHypothesis` (the null hypothesis with its
parameters tested against) and `degreesOfFreedom` (degrees of freedom of
the test).

## Note

spark.kstest since 2.1.0

summary(KSTest) since 2.1.0

print.summary.KSTest since 2.1.0

## See also

[MLlib: Hypothesis
Testing](https://spark.apache.org/docs/latest/mllib-statistics.html#hypothesis-testing)

## Examples

``` r
if (FALSE) { # \dontrun{
data <- data.frame(test = c(0.1, 0.15, 0.2, 0.3, 0.25))
df <- createDataFrame(data)
test <- spark.kstest(df, "test", "norm", c(0, 1))

# get a summary of the test result
testSummary <- summary(test)
testSummary

# print out the summary in an organized way
print.summary.KSTest(testSummary)
} # }
```
