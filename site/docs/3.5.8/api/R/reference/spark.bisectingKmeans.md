# Bisecting K-Means Clustering Model

Fits a bisecting k-means clustering model against a SparkDataFrame.
Users can call `summary` to print a summary of the fitted model,
`predict` to make predictions on new data, and `write.ml`/`read.ml` to
save/load fitted models.

Get fitted result from a bisecting k-means model. Note: A saved-loaded
model does not support this method.

## Usage

``` r
spark.bisectingKmeans(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.bisectingKmeans(
  data,
  formula,
  k = 4,
  maxIter = 20,
  seed = NULL,
  minDivisibleClusterSize = 1
)

# S4 method for class 'BisectingKMeansModel'
summary(object)

# S4 method for class 'BisectingKMeansModel'
predict(object, newData)

# S4 method for class 'BisectingKMeansModel'
fitted(object, method = c("centers", "classes"))

# S4 method for class 'BisectingKMeansModel,character'
write.ml(object, path, overwrite = FALSE)
```

## Arguments

  - data:
    
    a SparkDataFrame for training.

  - formula:
    
    a symbolic description of the model to be fitted. Currently only a
    few formula operators are supported, including '\~', '.', ':', '+',
    '-', '\*', and '^'. Note that the response variable of formula is
    empty in spark.bisectingKmeans.

  - ...:
    
    additional argument(s) passed to the method.

  - k:
    
    the desired number of leaf clusters. Must be \> 1. The actual number
    could be smaller if there are no divisible leaf clusters.

  - maxIter:
    
    maximum iteration number.

  - seed:
    
    the random seed.

  - minDivisibleClusterSize:
    
    The minimum number of points (if greater than or equal to 1.0) or
    the minimum proportion of points (if less than 1.0) of a divisible
    cluster. Note that it is an expert parameter. The default value
    should be good enough for most cases.

  - object:
    
    a fitted bisecting k-means model.

  - newData:
    
    a SparkDataFrame for testing.

  - method:
    
    type of fitted results, `"centers"` for cluster centers or
    `"classes"` for assigned classes.

  - path:
    
    the directory where the model is saved.

  - overwrite:
    
    overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.bisectingKmeans` returns a fitted bisecting k-means model.

`summary` returns summary information of the fitted model, which is a
list. The list includes the model's `k` (number of cluster centers),
`coefficients` (model cluster centers), `size` (number of data points in
each cluster), `cluster` (cluster centers of the transformed data;
cluster is NULL if is.loaded is TRUE), and `is.loaded` (whether the
model is loaded from a saved file).

`predict` returns the predicted values based on a bisecting k-means
model.

`fitted` returns a SparkDataFrame containing fitted values.

## Note

spark.bisectingKmeans since 2.2.0

summary(BisectingKMeansModel) since 2.2.0

predict(BisectingKMeansModel) since 2.2.0

fitted since 2.2.0

write.ml(BisectingKMeansModel, character) since 2.2.0

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
model <- spark.bisectingKmeans(df, Class ~ Survived, k = 4)
summary(model)

# get fitted result from a bisecting k-means model
fitted.model <- fitted(model, "centers")
showDF(fitted.model)

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
