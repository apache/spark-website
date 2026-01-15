# Get fitted result from a k-means model

Get fitted result from a k-means model, similarly to R's fitted(). Note:
A saved-loaded model does not support this method.

## Usage

``` r
fitted(object, ...)

# S4 method for class 'KMeansModel'
fitted(object, method = c("centers", "classes"))
```

## Arguments

  - object:
    
    a fitted k-means model.

  - ...:
    
    additional argument(s) passed to the method.

  - method:
    
    type of fitted results, `"centers"` for cluster centers or
    `"classes"` for assigned classes.

## Value

`fitted` returns a SparkDataFrame containing fitted values.

## Note

fitted since 2.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
model <- spark.kmeans(trainingData, ~ ., 2)
fitted.model <- fitted(model)
showDF(fitted.model)
} # }
```
