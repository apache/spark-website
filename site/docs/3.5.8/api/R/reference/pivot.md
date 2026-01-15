# Pivot a column of the GroupedData and perform the specified aggregation.

Pivot a column of the GroupedData and perform the specified aggregation.
There are two versions of pivot function: one that requires the caller
to specify the list of distinct values to pivot on, and one that does
not. The latter is more concise but less efficient, because Spark needs
to first compute the list of distinct values internally.

## Usage

``` r
# S4 method for class 'GroupedData,character'
pivot(x, colname, values = list())
```

## Arguments

  - x:
    
    a GroupedData object

  - colname:
    
    A column name

  - values:
    
    A value or a list/vector of distinct values for the output columns.

## Value

GroupedData object

## Note

pivot since 2.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(data.frame(
    earnings = c(10000, 10000, 11000, 15000, 12000, 20000, 21000, 22000),
    course = c("R", "Python", "R", "Python", "R", "Python", "R", "Python"),
    period = c("1H", "1H", "2H", "2H", "1H", "1H", "2H", "2H"),
    year = c(2015, 2015, 2015, 2015, 2016, 2016, 2016, 2016)
))
group_sum <- sum(pivot(groupBy(df, "year"), "course"), "earnings")
group_min <- min(pivot(groupBy(df, "year"), "course", "R"), "earnings")
group_max <- max(pivot(groupBy(df, "year"), "course", c("Python", "R")), "earnings")
group_mean <- mean(pivot(groupBy(df, "year"), "course", list("Python", "R")), "earnings")
} # }
```
