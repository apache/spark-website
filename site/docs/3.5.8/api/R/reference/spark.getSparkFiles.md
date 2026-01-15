# Get the absolute path of a file added through spark.addFile.

Get the absolute path of a file added through spark.addFile.

## Usage

``` r
spark.getSparkFiles(fileName)
```

## Arguments

  - fileName:
    
    The name of the file added through spark.addFile

## Value

the absolute path of a file added through spark.addFile.

## Note

spark.getSparkFiles since 2.1.0

## Examples

``` r
if (FALSE) { # \dontrun{
spark.getSparkFiles("myfile")
} # }
```
