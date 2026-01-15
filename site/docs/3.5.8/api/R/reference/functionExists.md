# Checks if the function with the specified name exists.

Checks if the function with the specified name exists.

## Usage

``` r
functionExists(functionName)
```

## Arguments

  - functionName:
    
    name of the function, allowed to be qualified with catalog name

## Note

since 3.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
functionExists("spark_catalog.default.myFunc")
} # }
```
