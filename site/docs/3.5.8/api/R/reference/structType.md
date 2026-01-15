# structType

Create a structType object that contains the metadata for a
SparkDataFrame. Intended for use with createDataFrame and toDF.

## Usage

``` r
structType(x, ...)

# S3 method for class 'jobj'
structType(x, ...)

# S3 method for class 'structField'
structType(x, ...)

# S3 method for class 'character'
structType(x, ...)
```

## Arguments

  - x:
    
    a structField object (created with the `structField` method). Since
    Spark 2.3, this can be a DDL-formatted string, which is a comma
    separated list of field definitions, e.g., "a INT, b STRING".

  - ...:
    
    additional structField objects

## Value

a structType object

## Note

structType since 1.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
schema <- structType(structField("a", "integer"), structField("c", "string"),
                      structField("avg", "double"))
df1 <- gapply(df, list("a", "c"),
              function(key, x) { y <- data.frame(key, mean(x$b), stringsAsFactors = FALSE) },
              schema)
schema <- structType("a INT, c STRING, avg DOUBLE")
df1 <- gapply(df, list("a", "c"),
              function(key, x) { y <- data.frame(key, mean(x$b), stringsAsFactors = FALSE) },
              schema)
} # }
```
