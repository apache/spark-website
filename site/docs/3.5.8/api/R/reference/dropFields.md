# dropFields

Drops fields in a struct `Column` by name.

## Usage

``` r
dropFields(x, ...)

# S4 method for class 'Column'
dropFields(x, ...)
```

## Arguments

  - x:
    
    a Column

  - ...:
    
    names of the fields to be dropped.

## Note

dropFields since 3.1.0

## Examples

``` r
if (FALSE) { # \dontrun{
df <- select(
  createDataFrame(iris),
  alias(
    struct(
      column("Sepal_Width"), column("Sepal_Length"),
      alias(
        struct(
          column("Petal_Width"), column("Petal_Length"),
          alias(
            column("Petal_Width") * column("Petal_Length"),
            "Petal_Product"
          )
        ),
        "Petal"
      )
    ),
    "dimensions"
  )
)
head(withColumn(df, "dimensions", dropFields(df$dimensions, "Petal")))

head(
  withColumn(
    df, "dimensions",
    dropFields(df$dimensions, "Sepal_Width", "Sepal_Length")
  )
)

# This method supports dropping multiple nested fields directly e.g.
head(
  withColumn(
    df, "dimensions",
    dropFields(df$dimensions, "Petal.Petal_Width", "Petal.Petal_Length")
  )
)

# However, if you are going to add/replace multiple nested fields,
# it is preferred to extract out the nested struct before
# adding/replacing multiple fields e.g.
head(
  withColumn(
    df, "dimensions",
    withField(
      column("dimensions"),
      "Petal",
      dropFields(column("dimensions.Petal"), "Petal_Width", "Petal_Length")
    )
  )
)
} # }
```
