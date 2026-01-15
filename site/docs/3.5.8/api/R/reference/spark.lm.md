# Linear Regression Model

`spark.lm` fits a linear regression model against a SparkDataFrame.
Users can call `summary` to print a summary of the fitted model,
`predict` to make predictions on new data, and `write.ml`/`read.ml` to
save/load fitted models.

## Usage

``` r
spark.lm(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.lm(
  data,
  formula,
  maxIter = 100L,
  regParam = 0,
  elasticNetParam = 0,
  tol = 1e-06,
  standardization = TRUE,
  solver = c("auto", "l-bfgs", "normal"),
  weightCol = NULL,
  aggregationDepth = 2L,
  loss = c("squaredError", "huber"),
  epsilon = 1.35,
  stringIndexerOrderType = c("frequencyDesc", "frequencyAsc", "alphabetDesc",
    "alphabetAsc")
)

# S4 method for class 'LinearRegressionModel'
summary(object)

# S4 method for class 'LinearRegressionModel'
predict(object, newData)

# S4 method for class 'LinearRegressionModel,character'
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

  - maxIter:
    
    maximum iteration number.

  - regParam:
    
    the regularization parameter.

  - elasticNetParam:
    
    the ElasticNet mixing parameter, in range \[0, 1\]. For alpha = 0,
    the penalty is an L2 penalty. For alpha = 1, it is an L1 penalty.

  - tol:
    
    convergence tolerance of iterations.

  - standardization:
    
    whether to standardize the training features before fitting the
    model.

  - solver:
    
    The solver algorithm for optimization. Supported options: "l-bfgs",
    "normal" and "auto".

  - weightCol:
    
    weight column name.

  - aggregationDepth:
    
    suggested depth for treeAggregate (\>= 2).

  - loss:
    
    the loss function to be optimized. Supported options: "squaredError"
    and "huber".

  - epsilon:
    
    the shape parameter to control the amount of robustness.

  - stringIndexerOrderType:
    
    how to order categories of a string feature column. This is used to
    decide the base level of a string feature as the last category after
    ordering is dropped when encoding strings. Supported options are
    "frequencyDesc", "frequencyAsc", "alphabetDesc", and "alphabetAsc".
    The default value is "frequencyDesc". When the ordering is set to
    "alphabetDesc", this drops the same category as R when encoding
    strings.

  - object:
    
    a Linear Regression Model model fitted by `spark.lm`.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    The directory where the model is saved.

  - overwrite:
    
    Overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.lm` returns a fitted Linear Regression Model.

`summary` returns summary information of the fitted model, which is a
list.

`predict` returns the predicted values based on a LinearRegressionModel.

## Note

spark.lm since 3.1.0

summary(LinearRegressionModel) since 3.1.0

predict(LinearRegressionModel) since 3.1.0

write.ml(LinearRegressionModel, character) since 3.1.0

## See also

[read.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/read.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
df <- read.df("data/mllib/sample_linear_regression_data.txt", source = "libsvm")

# fit Linear Regression Model
model <- spark.lm(df, label ~ features, regParam = 0.01, maxIter = 1)

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
