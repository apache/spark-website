# ML functions for Column operations

ML functions defined for `Column`.

## Usage

``` r
array_to_vector(x)

vector_to_array(x, ...)

# S4 method for class 'Column'
array_to_vector(x)

# S4 method for class 'Column'
vector_to_array(x, dtype = c("float64", "float32"))
```

## Arguments

  - x:
    
    Column to compute on.

  - ...:
    
    additional argument(s).

  - dtype:
    
    The data type of the output array. Valid values: "float64" or
    "float32".

## Details

`array_to_vector` Converts a column of array of numeric type into a
column of dense vectors in MLlib

`vector_to_array` Converts a column of MLlib sparse/dense vectors into a
column of dense arrays.

## Note

array\_to\_vector since 3.1.0

vector\_to\_array since 3.1.0

## Examples

``` r
if (FALSE) { # \dontrun{
df <- read.df("data/mllib/sample_libsvm_data.txt", source = "libsvm")
head(
  withColumn(
    withColumn(df, "array", vector_to_array(df$features)),
    "vector",
    array_to_vector(column("array"))
  )
)
} # }
```
