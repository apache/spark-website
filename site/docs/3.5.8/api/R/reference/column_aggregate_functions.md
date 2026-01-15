# Aggregate functions for Column operations

Aggregate functions defined for `Column`.

## Usage

``` r
approx_count_distinct(x, ...)

approxCountDistinct(x, ...)

collect_list(x)

collect_set(x)

count_distinct(x, ...)

countDistinct(x, ...)

grouping_bit(x)

grouping_id(x, ...)

kurtosis(x)

max_by(x, y)

min_by(x, y)

n_distinct(x, ...)

percentile_approx(x, percentage, ...)

product(x)

sd(x, na.rm = FALSE)

skewness(x)

stddev(x)

std(x)

stddev_pop(x)

stddev_samp(x)

sum_distinct(x)

sumDistinct(x)

var(x, y = NULL, na.rm = FALSE, use)

variance(x)

var_pop(x)

var_samp(x)

# S4 method for class 'Column'
approx_count_distinct(x, rsd = 0.05)

# S4 method for class 'Column'
approxCountDistinct(x, rsd = 0.05)

# S4 method for class 'Column'
kurtosis(x)

# S4 method for class 'Column'
max(x)

# S4 method for class 'Column,Column'
max_by(x, y)

# S4 method for class 'Column'
mean(x)

# S4 method for class 'Column'
min(x)

# S4 method for class 'Column,Column'
min_by(x, y)

# S4 method for class 'Column'
product(x)

# S4 method for class 'characterOrColumn,numericOrColumn'
percentile_approx(x, percentage, accuracy = 10000)

# S4 method for class 'Column'
sd(x)

# S4 method for class 'Column'
skewness(x)

# S4 method for class 'Column'
stddev(x)

# S4 method for class 'Column'
std(x)

# S4 method for class 'Column'
stddev_pop(x)

# S4 method for class 'Column'
stddev_samp(x)

# S4 method for class 'Column'
sum(x)

# S4 method for class 'Column'
sum_distinct(x)

# S4 method for class 'Column'
sumDistinct(x)

# S4 method for class 'Column'
var(x)

# S4 method for class 'Column'
variance(x)

# S4 method for class 'Column'
var_pop(x)

# S4 method for class 'Column'
var_samp(x)

# S4 method for class 'Column'
approx_count_distinct(x, rsd = 0.05)

# S4 method for class 'Column'
approxCountDistinct(x, rsd = 0.05)

# S4 method for class 'Column'
count_distinct(x, ...)

# S4 method for class 'Column'
countDistinct(x, ...)

# S4 method for class 'Column'
n_distinct(x, ...)

# S4 method for class 'Column'
collect_list(x)

# S4 method for class 'Column'
collect_set(x)

# S4 method for class 'Column'
grouping_bit(x)

# S4 method for class 'Column'
grouping_id(x, ...)
```

## Arguments

  - x:
    
    Column to compute on.

  - ...:
    
    additional argument(s). For example, it could be used to pass
    additional Columns.

  - y, na.rm, use:
    
    currently not used.

  - percentage:
    
    Numeric percentage at which percentile should be computed All values
    should be between 0 and 1. If length equals to 1 resulting column is
    of type double, otherwise, array type of double.

  - rsd:
    
    maximum relative standard deviation allowed (default = 0.05).

  - accuracy:
    
    A positive numeric literal (default: 10000) which controls
    approximation accuracy at the cost of memory. Higher value of
    accuracy yields better accuracy, 1.0/accuracy is the relative error
    of the approximation.

## Details

`approx_count_distinct`: Returns the approximate number of distinct
items in a group.

`approxCountDistinct`: Returns the approximate number of distinct items
in a group.

`kurtosis`: Returns the kurtosis of the values in a group.

`max`: Returns the maximum value of the expression in a group.

`max_by`: Returns the value associated with the maximum value of ord.

`mean`: Returns the average of the values in a group. Alias for `avg`.

`min`: Returns the minimum value of the expression in a group.

`min_by`: Returns the value associated with the minimum value of ord.

`product`: Returns the product of the values in a group.

`percentile_approx` Returns the approximate `percentile` of the numeric
column `col` which is the smallest value in the ordered `col` values
(sorted from least to greatest) such that no more than `percentage` of
`col` values is less than the value or equal to that value.

`sd`: Alias for `stddev_samp`.

`skewness`: Returns the skewness of the values in a group.

`stddev`: Alias for `std_dev`.

`std`: Alias for `stddev`.

`stddev_pop`: Returns the population standard deviation of the
expression in a group.

`stddev_samp`: Returns the unbiased sample standard deviation of the
expression in a group.

`sum`: Returns the sum of all values in the expression.

`sum_distinct`: Returns the sum of distinct values in the expression.

`sumDistinct`: Returns the sum of distinct values in the expression.

`var`: Alias for `var_samp`.

`var_pop`: Returns the population variance of the values in a group.

`var_samp`: Returns the unbiased variance of the values in a group.

`count_distinct`: Returns the number of distinct items in a group.

`countDistinct`: Returns the number of distinct items in a group.

An alias of `count_distinct`, and it is encouraged to use
`count_distinct` directly.

`n_distinct`: Returns the number of distinct items in a group.

`collect_list`: Creates a list of objects with duplicates. Note: the
function is non-deterministic because the order of collected results
depends on the order of the rows which may be non-deterministic after a
shuffle.

`collect_set`: Creates a list of objects with duplicate elements
eliminated. Note: the function is non-deterministic because the order of
collected results depends on the order of the rows which may be
non-deterministic after a shuffle.

`grouping_bit`: Indicates whether a specified column in a GROUP BY list
is aggregated or not, returns 1 for aggregated or 0 for not aggregated
in the result set. Same as `GROUPING` in SQL and `grouping` function in
Scala.

`grouping_id`: Returns the level of grouping. Equals to ` 
grouping_bit(c1) * 2^(n - 1) + grouping_bit(c2) * 2^(n - 2) + ... +
grouping_bit(cn) `.

## Note

approx\_count\_distinct(Column) since 3.0.0

approxCountDistinct(Column) since 1.4.0

kurtosis since 1.6.0

max since 1.5.0

max\_by since 3.3.0

mean since 1.5.0

min since 1.5.0

min\_by since 3.3.0

product since 3.2.0

percentile\_approx since 3.1.0

sd since 1.6.0

skewness since 1.6.0

stddev since 1.6.0

std since 3.5.0

stddev\_pop since 1.6.0

stddev\_samp since 1.6.0

sum since 1.5.0

sum\_distinct since 3.2.0

sumDistinct since 1.4.0

var since 1.6.0

variance since 1.6.0

var\_pop since 1.5.0

var\_samp since 1.6.0

approx\_count\_distinct(Column, numeric) since 3.0.0

approxCountDistinct(Column, numeric) since 1.4.0

count\_distinct since 3.2.0

countDistinct since 1.4.0

n\_distinct since 1.4.0

collect\_list since 2.3.0

collect\_set since 2.3.0

grouping\_bit since 2.3.0

grouping\_id since 2.3.0

## See also

Other aggregate functions: `avg()`, `corr()`, `count()`, `cov()`,
`first()`, `last()`

## Examples

``` r
if (FALSE) { # \dontrun{
# Dataframe used throughout this doc
df <- createDataFrame(cbind(model = rownames(mtcars), mtcars))} # }

if (FALSE) { # \dontrun{
head(select(df, approx_count_distinct(df$gear)))
head(select(df, approx_count_distinct(df$gear, 0.02)))
head(select(df, count_distinct(df$gear, df$cyl)))
head(select(df, n_distinct(df$gear)))
head(distinct(select(df, "gear")))} # }

if (FALSE) { # \dontrun{
head(select(df, mean(df$mpg), sd(df$mpg), skewness(df$mpg), kurtosis(df$mpg)))} # }

if (FALSE) { # \dontrun{
df <- createDataFrame(
  list(list("Java", 2012, 20000), list("dotNET", 2012, 5000),
       list("dotNET", 2013, 48000), list("Java", 2013, 30000)),
  list("course", "year", "earnings")
)
tmp <- agg(groupBy(df, df$"course"), "max_by" = max_by(df$"year", df$"earnings"))
head(tmp)} # }

if (FALSE) { # \dontrun{
head(select(df, avg(df$mpg), mean(df$mpg), sum(df$mpg), min(df$wt), max(df$qsec)))

# metrics by num of cylinders
tmp <- agg(groupBy(df, "cyl"), avg(df$mpg), avg(df$hp), avg(df$wt), avg(df$qsec))
head(orderBy(tmp, "cyl"))

# car with the max mpg
mpg_max <- as.numeric(collect(agg(df, max(df$mpg))))
head(where(df, df$mpg == mpg_max))} # }

if (FALSE) { # \dontrun{
df <- createDataFrame(
  list(list("Java", 2012, 20000), list("dotNET", 2012, 5000),
       list("dotNET", 2013, 48000), list("Java", 2013, 30000)),
  list("course", "year", "earnings")
)
tmp <- agg(groupBy(df, df$"course"), "min_by" = min_by(df$"year", df$"earnings"))
head(tmp)} # }

if (FALSE) { # \dontrun{
head(select(df, sd(df$mpg), stddev(df$mpg), stddev_pop(df$wt), stddev_samp(df$qsec)))} # }

if (FALSE) { # \dontrun{
head(select(df, sum_distinct(df$gear)))
head(distinct(select(df, "gear")))} # }

if (FALSE) { # \dontrun{
head(agg(df, var(df$mpg), variance(df$mpg), var_pop(df$mpg), var_samp(df$mpg)))} # }

if (FALSE) { # \dontrun{
df2 = df[df$mpg > 20, ]
collect(select(df2, collect_list(df2$gear)))
collect(select(df2, collect_set(df2$gear)))} # }

if (FALSE) { # \dontrun{
# With cube
agg(
  cube(df, "cyl", "gear", "am"),
  mean(df$mpg),
  grouping_bit(df$cyl), grouping_bit(df$gear), grouping_bit(df$am)
)

# With rollup
agg(
  rollup(df, "cyl", "gear", "am"),
  mean(df$mpg),
  grouping_bit(df$cyl), grouping_bit(df$gear), grouping_bit(df$am)
)} # }

if (FALSE) { # \dontrun{
# With cube
agg(
  cube(df, "cyl", "gear", "am"),
  mean(df$mpg),
  grouping_id(df$cyl, df$gear, df$am)
)

# With rollup
agg(
  rollup(df, "cyl", "gear", "am"),
  mean(df$mpg),
  grouping_id(df$cyl, df$gear, df$am)
)} # }
```
