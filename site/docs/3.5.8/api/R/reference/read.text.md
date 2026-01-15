# Create a SparkDataFrame from a text file.

Loads text files and returns a SparkDataFrame whose schema starts with a
string column named "value", and followed by partitioned columns if
there are any. The text files must be encoded as UTF-8.

## Usage

``` r
read.text(path, ...)
```

## Arguments

  - path:
    
    Path of file to read. A vector of multiple paths is allowed.

  - ...:
    
    additional external data source specific named properties. You can
    find the text-specific options for reading text files in
    <https://spark.apache.org/docs/latest/sql-data-sources-text.html#data-source-option>Data
    Source Option in the version you use.

## Value

SparkDataFrame

## Details

Each line in the text file is a new row in the resulting SparkDataFrame.

## Note

read.text since 1.6.1

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
path <- "path/to/file.txt"
df <- read.text(path)
} # }
```
