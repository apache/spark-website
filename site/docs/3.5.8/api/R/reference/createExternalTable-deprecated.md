# (Deprecated) Create an external table

Creates an external table based on the dataset in a data source, Returns
a SparkDataFrame associated with the external table.

## Usage

``` r
createExternalTable(tableName, path = NULL, source = NULL, schema = NULL, ...)
```

## Arguments

  - tableName:
    
    a name of the table.

  - path:
    
    the path of files to load.

  - source:
    
    the name of external data source.

  - schema:
    
    the schema of the data required for some data sources.

  - ...:
    
    additional argument(s) passed to the method.

## Value

A SparkDataFrame.

## Details

The data source is specified by the `source` and a set of options(...).
If `source` is not specified, the default data source configured by
"spark.sql.sources.default" will be used.

## Note

createExternalTable since 1.4.0

## See also

[createTable](https://spark.apache.org/docs/3.5.8/api/R/reference/createTable.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df <- createExternalTable("myjson", path="path/to/json", source="json", schema)
} # }
```
