# Create a SparkDataFrame from a JSON file.

Loads a JSON file, returning the result as a SparkDataFrame By default,
([JSON Lines text format or newline-delimited
JSON](https://jsonlines.org/) ) is supported. For JSON (one record per
file), set a named property `multiLine` to `TRUE`. It goes through the
entire dataset once to determine the schema.

## Usage

``` r
read.json(path, ...)
```

## Arguments

  - path:
    
    Path of file to read. A vector of multiple paths is allowed.

  - ...:
    
    additional external data source specific named properties. You can
    find the JSON-specific options for reading JSON files in
    <https://spark.apache.org/docs/latest/sql-data-sources-json.html#data-source-option>Data
    Source Option in the version you use.

## Value

SparkDataFrame

## Note

read.json since 1.6.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.json"
df <- read.json(path)
df <- read.json(path, multiLine = TRUE)
} # }
```
