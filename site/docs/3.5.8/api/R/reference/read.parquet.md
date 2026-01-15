# Create a SparkDataFrame from a Parquet file.

Loads a Parquet file, returning the result as a SparkDataFrame.

## Usage

``` r
read.parquet(path, ...)
```

## Arguments

  - path:
    
    path of file to read. A vector of multiple paths is allowed.

  - ...:
    
    additional data source specific named properties. You can find the
    Parquet-specific options for reading Parquet files in
    <https://spark.apache.org/docs/latest/sql-data-sources-parquet.html#data-source-option>Data
    Source Option in the version you use.

## Value

SparkDataFrame

## Note

read.parquet since 1.6.0
