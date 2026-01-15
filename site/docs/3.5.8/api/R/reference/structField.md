# structField

Create a structField object that contains the metadata for a single
field in a schema.

## Usage

``` r
structField(x, ...)

# S3 method for class 'jobj'
structField(x, ...)

# S3 method for class 'character'
structField(x, type, nullable = TRUE, ...)
```

## Arguments

  - x:
    
    the name of the field.

  - ...:
    
    additional argument(s) passed to the method.

  - type:
    
    The data type of the field

  - nullable:
    
    A logical vector indicating whether or not the field is nullable

## Value

A structField object.

## Note

structField since 1.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
field1 <- structField("a", "integer")
field2 <- structField("c", "string")
field3 <- structField("avg", "double")
schema <- structType(field1, field2, field3)
df1 <- gapply(df, list("a", "c"),
              function(key, x) { y <- data.frame(key, mean(x$b), stringsAsFactors = FALSE) },
              schema)
} # }
```
