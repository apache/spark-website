# Factorization Machines Regression Model

`spark.fmRegressor` fits a factorization regression model against a
SparkDataFrame. Users can call `summary` to print a summary of the
fitted model, `predict` to make predictions on new data, and
`write.ml`/`read.ml` to save/load fitted models.

## Usage

``` r
spark.fmRegressor(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.fmRegressor(
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
  seed = NULL,
  stringIndexerOrderType = c("frequencyDesc", "frequencyAsc", "alphabetDesc",
    "alphabetAsc")
)

# S4 method for class 'FMRegressionModel'
summary(object)

# S4 method for class 'FMRegressionModel'
predict(object, newData)

# S4 method for class 'FMRegressionModel,character'
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

  - seed:
    
    seed parameter for weights initialization.

  - stringIndexerOrderType:
    
    how to order categories of a string feature column. This is used to
    decide the base level of a string feature as the last category after
    ordering is dropped when encoding strings. Supported options are
    "frequencyDesc", "frequencyAsc", "alphabetDesc", and "alphabetAsc".
    The default value is "frequencyDesc". When the ordering is set to
    "alphabetDesc", this drops the same category as R when encoding
    strings.

  - object:
    
    a FM Regression Model model fitted by `spark.fmRegressor`.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    The directory where the model is saved.

  - overwrite:
    
    Overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.fmRegressor` returns a fitted Factorization Machines Regression
Model.

`summary` returns summary information of the fitted model, which is a
list.

`predict` returns the predicted values based on an FMRegressionModel.

## Note

spark.fmRegressor since 3.1.0

summary(FMRegressionModel) since 3.1.0

predict(FMRegressionModel) since 3.1.0

write.ml(FMRegressionModel, character) since 3.1.0

## See also

[read.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/read.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
df <- read.df("data/mllib/sample_linear_regression_data.txt", source = "libsvm")

# fit Factorization Machines Regression Model
model <- spark.fmRegressor(
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
