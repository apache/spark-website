# Factorization Machines Classification Model

`spark.fmClassifier` fits a factorization classification model against a
SparkDataFrame. Users can call `summary` to print a summary of the
fitted model, `predict` to make predictions on new data, and
`write.ml`/`read.ml` to save/load fitted models. Only categorical data
is supported.

## Usage

``` r
spark.fmClassifier(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.fmClassifier(
  data,
  formula,
  factorSize = 8,
  fitLinear = TRUE,
  regParam = 0,
  miniBatchFraction = 1,
  initStd = 0.01,
  maxIter = 100,
  stepSize = 1,
  tol = 1e-06,
  solver = c("adamW", "gd"),
  thresholds = NULL,
  seed = NULL,
  handleInvalid = c("error", "keep", "skip")
)

# S4 method for class 'FMClassificationModel'
summary(object)

# S4 method for class 'FMClassificationModel'
predict(object, newData)

# S4 method for class 'FMClassificationModel,character'
write.ml(object, path, overwrite = FALSE)
```

## Arguments

  - data:
    
    a `SparkDataFrame` of observations and labels for model fitting.

  - formula:
    
    a symbolic description of the model to be fitted. Currently only a
    few formula operators are supported, including '\~', '.', ':', '+',
    and '-'.

  - ...:
    
    additional arguments passed to the method.

  - factorSize:
    
    dimensionality of the factors.

  - fitLinear:
    
    whether to fit linear term. \# TODO Can we express this with
    formula?

  - regParam:
    
    the regularization parameter.

  - miniBatchFraction:
    
    the mini-batch fraction parameter.

  - initStd:
    
    the standard deviation of initial coefficients.

  - maxIter:
    
    maximum iteration number.

  - stepSize:
    
    stepSize parameter.

  - tol:
    
    convergence tolerance of iterations.

  - solver:
    
    solver parameter, supported options: "gd" (minibatch gradient
    descent) or "adamW".

  - thresholds:
    
    in binary classification, in range \[0, 1\]. If the estimated
    probability of class label 1 is \> threshold, then predict 1, else
    0. A high threshold encourages the model to predict 0 more often; a
    low threshold encourages the model to predict 1 more often. Note:
    Setting this with threshold p is equivalent to setting thresholds
    c(1-p, p).

  - seed:
    
    seed parameter for weights initialization.

  - handleInvalid:
    
    How to handle invalid data (unseen labels or NULL values) in
    features and label column of string type. Supported options: "skip"
    (filter out rows with invalid data), "error" (throw an error),
    "keep" (put invalid data in a special additional bucket, at index
    numLabels). Default is "error".

  - object:
    
    a FM Classification model fitted by `spark.fmClassifier`.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    The directory where the model is saved.

  - overwrite:
    
    Overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.fmClassifier` returns a fitted Factorization Machines
Classification Model.

`summary` returns summary information of the fitted model, which is a
list.

`predict` returns the predicted values based on a FM Classification
model.

## Note

spark.fmClassifier since 3.1.0

summary(FMClassificationModel) since 3.1.0

predict(FMClassificationModel) since 3.1.0

write.ml(FMClassificationModel, character) since 3.1.0

## See also

[read.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/read.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
df <- read.df("data/mllib/sample_binary_classification_data.txt", source = "libsvm")

# fit Factorization Machines Classification Model
model <- spark.fmClassifier(
           df, label ~ features,
           regParam = 0.01, maxIter = 10, fitLinear = TRUE
         )

# get the summary of the model
summary(model)

# make predictions
predictions <- predict(model, df)

# save and load the model
path <- "path/to/model"
write.ml(model, path)
savedModel <- read.ml(path)
summary(savedModel)
} # }
```
