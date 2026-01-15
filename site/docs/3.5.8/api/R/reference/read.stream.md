# Load a streaming SparkDataFrame

Returns the dataset in a data source as a SparkDataFrame

## Usage

``` r
read.stream(source = NULL, schema = NULL, ...)
```

## Arguments

  - source:
    
    The name of external data source

  - schema:
    
    The data schema defined in structType or a DDL-formatted string,
    this is required for file-based streaming data source

  - ...:
    
    additional external data source specific named options, for instance
    `path` for file-based streaming data source. `timeZone` to indicate
    a timezone to be used to parse timestamps in the JSON/CSV data
    sources or partition values; If it isn't set, it uses the default
    value, session local timezone.

## Value

SparkDataFrame

## Details

The data source is specified by the `source` and a set of options(...).
If `source` is not specified, the default data source configured by
"spark.sql.sources.default" will be used.

## Note

read.stream since 2.2.0

experimental

## See also

[write.stream](https://spark.apache.org/docs/3.5.8/api/R/reference/write.stream.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df <- read.stream("socket", host = "localhost", port = 9999)
q <- write.stream(df, "text", path = "/home/user/out", checkpointLocation = "/home/user/cp")

df <- read.stream("json", path = jsonDir, schema = schema, maxFilesPerTrigger = 1)
stringSchema <- "name STRING, info MAP<STRING, DOUBLE>"
df1 <- read.stream("json", path = jsonDir, schema = stringSchema, maxFilesPerTrigger = 1)
} # }
```
