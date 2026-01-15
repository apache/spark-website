# Create a SparkDataFrame from a SparkSQL table or view

Returns the specified table or view as a SparkDataFrame. The table or
view must already exist or have already been registered in the
SparkSession.

## Usage

``` r
tableToDF(tableName)
```

## Arguments

  - tableName:
    
    the qualified or unqualified name that designates a table or view.
    If a database is specified, it identifies the table/view from the
    database. Otherwise, it first attempts to find a temporary view with
    the given name and then match the table/view from the current
    database.

## Value

SparkDataFrame

## Note

tableToDF since 2.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
createOrReplaceTempView(df, "table")
new_df <- tableToDF("table")
} # }
```
