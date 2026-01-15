# Create a SparkDataFrame from an ORC file.

Loads an ORC file, returning the result as a SparkDataFrame.

## Usage

``` r
read.orc(path, ...)
```

## Arguments

  - path:
    
    Path of file to read.

  - ...:
    
    additional external data source specific named properties. You can
    find the ORC-specific options for reading ORC files in
    <https://spark.apache.org/docs/latest/sql-data-sources-orc.html#data-source-option>Data
    Source Option in the version you use.

## Value

SparkDataFrame

## Note

read.orc since 2.0.0
