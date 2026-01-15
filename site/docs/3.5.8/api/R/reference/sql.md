# SQL Query

Executes a SQL query using Spark, returning the result as a
SparkDataFrame.

## Usage

``` r
sql(sqlQuery)
```

## Arguments

  - sqlQuery:
    
    A character vector containing the SQL query

## Value

SparkDataFrame

## Note

sql since 1.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
createOrReplaceTempView(df, "table")
new_df <- sql("SELECT * FROM table")
} # }
```
