# Load a fitted MLlib model from the input path.

Load a fitted MLlib model from the input path.

## Usage

``` r
read.ml(path)
```

## Arguments

  - path:
    
    path of the model to read.

## Value

A fitted MLlib model.

## Note

read.ml since 2.0.0

## See also

[write.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/write.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
path <- "path/to/model"
model <- read.ml(path)
} # }
```
