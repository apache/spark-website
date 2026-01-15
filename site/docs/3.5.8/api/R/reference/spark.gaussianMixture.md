# Multivariate Gaussian Mixture Model (GMM)

Fits multivariate gaussian mixture model against a SparkDataFrame,
similarly to R's mvnormalmixEM(). Users can call `summary` to print a
summary of the fitted model, `predict` to make predictions on new data,
and `write.ml`/`read.ml` to save/load fitted models.

## Usage

``` r
spark.gaussianMixture(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.gaussianMixture(data, formula, k = 2, maxIter = 100, tol = 0.01)

# S4 method for class 'GaussianMixtureModel'
summary(object)

# S4 method for class 'GaussianMixtureModel'
predict(object, newData)

# S4 method for class 'GaussianMixtureModel,character'
write.ml(object, path, overwrite = FALSE)
```

## Arguments

  - data:
    
    a SparkDataFrame for training.

  - formula:
    
    a symbolic description of the model to be fitted. Currently only a
    few formula operators are supported, including '\~', '.', ':', '+',
    and '-'. Note that the response variable of formula is empty in
    spark.gaussianMixture.

  - ...:
    
    additional arguments passed to the method.

  - k:
    
    number of independent Gaussians in the mixture model.

  - maxIter:
    
    maximum iteration number.

  - tol:
    
    the convergence tolerance.

  - object:
    
    a fitted gaussian mixture model.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    the directory where the model is saved.

  - overwrite:
    
    overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.gaussianMixture` returns a fitted multivariate gaussian mixture
model.

`summary` returns summary of the fitted model, which is a list. The list
includes the model's `lambda` (lambda), `mu` (mu), `sigma` (sigma),
`loglik` (loglik), and `posterior` (posterior).

`predict` returns a SparkDataFrame containing predicted labels in a
column named "prediction".

## Note

spark.gaussianMixture since 2.1.0

summary(GaussianMixtureModel) since 2.1.0

predict(GaussianMixtureModel) since 2.1.0

write.ml(GaussianMixtureModel, character) since 2.1.0

## See also

mixtools: <https://cran.r-project.org/package=mixtools>

[predict](https://spark.apache.org/docs/3.5.8/api/R/reference/predict.md),
[read.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/read.ml.md),
[write.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/write.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
library(mvtnorm)
set.seed(100)
a <- rmvnorm(4, c(0, 0))
b <- rmvnorm(6, c(3, 4))
data <- rbind(a, b)
df <- createDataFrame(as.data.frame(data))
model <- spark.gaussianMixture(df, ~ V1 + V2, k = 2)
summary(model)

# fitted values on training data
fitted <- predict(model, df)
head(select(fitted, "V1", "prediction"))

# save fitted model to input path
path <- "path/to/model"
write.ml(model, path)

# can also read back the saved model and print
savedModel <- read.ml(path)
summary(savedModel)
} # }
```
