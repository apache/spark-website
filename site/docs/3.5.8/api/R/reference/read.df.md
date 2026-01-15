# Load a SparkDataFrame

Returns the dataset in a data source as a SparkDataFrame

## Usage

``` r
read.df(path = NULL, source = NULL, schema = NULL, na.strings = "NA", ...)

loadDF(path = NULL, source = NULL, schema = NULL, ...)
```

## Arguments

  - path:
    
    The path of files to load

  - source:
    
    The name of external data source

  - schema:
    
    The data schema defined in structType or a DDL-formatted string.

  - na.strings:
    
    Default string value for NA when source is "csv"

  - ...:
    
    additional external data source specific named properties.

## Value

SparkDataFrame

## Details

The data source is specified by the `source` and a set of options(...).
If `source` is not specified, the default data source configured by
"spark.sql.sources.default" will be used.  
Similar to R read.csv, when `source` is "csv", by default, a value of
"NA" will be interpreted as NA.

## Note

read.df since 1.4.0

loadDF since 1.6.0

## See also

[read.json](https://spark.apache.org/docs/3.5.8/api/R/reference/read.json.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df1 <- read.df("path/to/file.json", source = "json")
schema <- structType(structField("name", "string"),
                     structField("info", "map<string,double>"))
df2 <- read.df(mapTypeJsonPath, "json", schema, multiLine = TRUE)
df3 <- loadDF("data/test_table", "parquet", mergeSchema = "true")
stringSchema <- "name STRING, info MAP<STRING, DOUBLE>"
df4 <- read.df(mapTypeJsonPath, "json", stringSchema, multiLine = TRUE)
} # }
```
