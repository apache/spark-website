# (Deprecated) Register Temporary Table

Registers a SparkDataFrame as a Temporary Table in the SparkSession

## Usage

``` r
registerTempTable(x, tableName)

# S4 method for class 'SparkDataFrame,character'
registerTempTable(x, tableName)
```

## Arguments

  - x:
    
    A SparkDataFrame

  - tableName:
    
    A character vector containing the name of the table

## Note

registerTempTable since 1.4.0

## See also

[createOrReplaceTempView](https://spark.apache.org/docs/3.5.8/api/R/reference/createOrReplaceTempView.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
registerTempTable(df, "json_df")
new_df <- sql("SELECT * FROM json_df")
} # }
```
