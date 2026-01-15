# Creates a table based on the dataset in a data source

Creates a table based on the dataset in a data source. Returns a
SparkDataFrame associated with the table.

## Usage

``` r
createTable(tableName, path = NULL, source = NULL, schema = NULL, ...)
```

## Arguments

  - tableName:
    
    the qualified or unqualified name that designates a table. If no
    database identifier is provided, it refers to a table in the current
    database. The table name can be fully qualified with catalog name
    since 3.4.0.

  - path:
    
    (optional) the path of files to load.

  - source:
    
    (optional) the name of the data source.

  - schema:
    
    (optional) the schema of the data required for some data sources.

  - ...:
    
    additional named parameters as options for the data source.

## Value

A SparkDataFrame.

## Details

The data source is specified by the `source` and a set of options(...).
If `source` is not specified, the default data source configured by
"spark.sql.sources.default" will be used. When a `path` is specified, an
external table is created from the data at the given path. Otherwise a
managed table is created.

## Note

createTable since 2.2.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df <- createTable("myjson", path="path/to/json", source="json", schema)

createTable("spark_catalog.default.people", source = "json", schema = schema)
insertInto(df, "people")
} # }
```
