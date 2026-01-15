# K-Means Clustering Model

Fits a k-means clustering model against a SparkDataFrame, similarly to
R's kmeans(). Users can call `summary` to print a summary of the fitted
model, `predict` to make predictions on new data, and
`write.ml`/`read.ml` to save/load fitted models.

## Usage

``` r
spark.kmeans(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.kmeans(
  data,
  formula,
  k = 2,
  maxIter = 20,
  initMode = c("k-means||", "random"),
  seed = NULL,
  initSteps = 2,
  tol = 1e-04
)

# S4 method for class 'KMeansModel'
summary(object)

# S4 method for class 'KMeansModel'
predict(object, newData)

# S4 method for class 'KMeansModel,character'
write.ml(object, path, overwrite = FALSE)
```

## Arguments

  - data:
    
    a SparkDataFrame for training.

  - formula:
    
    a symbolic description of the model to be fitted. Currently only a
    few formula operators are supported, including '\~', '.', ':', '+',
    and '-'. Note that the response variable of formula is empty in
    spark.kmeans.

  - ...:
    
    additional argument(s) passed to the method.

  - k:
    
    number of centers.

  - maxIter:
    
    maximum iteration number.

  - initMode:
    
    the initialization algorithm chosen to fit the model.

  - seed:
    
    the random seed for cluster initialization.

  - initSteps:
    
    the number of steps for the k-means|| initialization mode. This is
    an advanced setting, the default of 2 is almost always enough. Must
    be \> 0.

  - tol:
    
    convergence tolerance of iterations.

  - object:
    
    a fitted k-means model.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    the directory where the model is saved.

  - overwrite:
    
    overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.kmeans` returns a fitted k-means model.

`summary` returns summary information of the fitted model, which is a
list. The list includes the model's `k` (the configured number of
cluster centers), `coefficients` (model cluster centers), `size` (number
of data points in each cluster), `cluster` (cluster centers of the
transformed data), is.loaded (whether the model is loaded from a saved
file), and `clusterSize` (the actual number of cluster centers. When
using initMode = "random", `clusterSize` may not equal to `k`).

`predict` returns the predicted values based on a k-means model.

## Note

spark.kmeans since 2.0.0

summary(KMeansModel) since 2.0.0

predict(KMeansModel) since 2.0.0

write.ml(KMeansModel, character) since 2.0.0

## See also

[predict](https://spark.apache.org/docs/3.5.8/api/R/reference/predict.md),
[read.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/read.ml.md),
[write.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/write.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
t <- as.data.frame(Titanic)
df <- createDataFrame(t)
model <- spark.kmeans(df, Class ~ Survived, k = 4, initMode = "random")
summary(model)

# fitted values on training data
fitted <- predict(model, df)
head(select(fitted, "Class", "prediction"))

# save fitted model to input path
path <- "path/to/model"
write.ml(model, path)

# can also read back the saved model and print
savedModel <- read.ml(path)
summary(savedModel)
} # }
```
