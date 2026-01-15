# withField

Adds/replaces field in a struct `Column` by name.

## Usage

``` r
withField(x, fieldName, col)

# S4 method for class 'Column,character,Column'
withField(x, fieldName, col)
```

## Arguments

  - x:
    
    a Column

  - fieldName:
    
    a character

  - col:
    
    a Column expression

## Note

withField since 3.1.0

## Examples

``` r
if (FALSE) { # \dontrun{
df <- withColumn(
  createDataFrame(iris),
  "sepal",
   struct(column("Sepal_Width"), column("Sepal_Length"))
)

head(select(
  df,
  withField(df$sepal, "product", df$Sepal_Length * df$Sepal_Width)
))
} # }
```
