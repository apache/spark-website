# Run a function over a list of elements, distributing the computations with Spark

Run a function over a list of elements, distributing the computations
with Spark. Applies a function in a manner that is similar to doParallel
or lapply to elements of a list. The computations are distributed using
Spark. It is conceptually the same as the following code: lapply(list,
func)

## Usage

``` r
spark.lapply(list, func)
```

## Arguments

  - list:
    
    the list of elements

  - func:
    
    a function that takes one argument.

## Value

a list of results (the exact type being determined by the function)

## Details

Known limitations:

  - variable scoping and capture: compared to R's rich support for
    variable resolutions, the distributed nature of SparkR limits how
    variables are resolved at runtime. All the variables that are
    available through lexical scoping are embedded in the closure of the
    function and available as read-only variables within the function.
    The environment variables should be stored into temporary variables
    outside the function, and not directly accessed within the function.

  - loading external packages: In order to use a package, you need to
    load it inside the closure. For example, if you rely on the MASS
    module, here is how you would use it:
    
    ``` 
        train <- function(hyperparam) {
          library(MASS)
          lm.ridge("y ~ x+z", data, lambda=hyperparam)
          model
        }
      
    ```

## Note

spark.lapply since 2.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
doubled <- spark.lapply(1:10, function(x) {2 * x})
} # }
```
