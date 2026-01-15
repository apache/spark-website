# Get the function with the specified name

Get the function with the specified name

## Usage

``` r
getFunc(functionName)
```

## Arguments

  - functionName:
    
    name of the function, allowed to be qualified with catalog name

## Value

A named list.

## Note

since 3.4.0. Use different name with the scala/python side, to avoid the
signature conflict with built-in "getFunction".

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
func <- getFunc("spark_catalog.default.myFunc")
} # }
```
