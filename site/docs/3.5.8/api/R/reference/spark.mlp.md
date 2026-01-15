# Multilayer Perceptron Classification Model

`spark.mlp` fits a multi-layer perceptron neural network model against a
SparkDataFrame. Users can call `summary` to print a summary of the
fitted model, `predict` to make predictions on new data, and
`write.ml`/`read.ml` to save/load fitted models. Only categorical data
is supported. For more details, see [Multilayer
Perceptron](https://spark.apache.org/docs/latest/ml-classification-regression.html)

## Usage

``` r
spark.mlp(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.mlp(
  data,
  formula,
  layers,
  blockSize = 128,
  solver = "l-bfgs",
  maxIter = 100,
  tol = 1e-06,
  stepSize = 0.03,
  seed = NULL,
  initialWeights = NULL,
  handleInvalid = c("error", "keep", "skip")
)

# S4 method for class 'MultilayerPerceptronClassificationModel'
summary(object)

# S4 method for class 'MultilayerPerceptronClassificationModel'
predict(object, newData)

# S4 method for class 'MultilayerPerceptronClassificationModel,character'
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

  - layers:
    
    integer vector containing the number of nodes for each layer.

  - blockSize:
    
    blockSize parameter.

  - solver:
    
    solver parameter, supported options: "gd" (minibatch gradient
    descent) or "l-bfgs".

  - maxIter:
    
    maximum iteration number.

  - tol:
    
    convergence tolerance of iterations.

  - stepSize:
    
    stepSize parameter.

  - seed:
    
    seed parameter for weights initialization.

  - initialWeights:
    
    initialWeights parameter for weights initialization, it should be a
    numeric vector.

  - handleInvalid:
    
    How to handle invalid data (unseen labels or NULL values) in
    features and label column of string type. Supported options: "skip"
    (filter out rows with invalid data), "error" (throw an error),
    "keep" (put invalid data in a special additional bucket, at index
    numLabels). Default is "error".

  - object:
    
    a Multilayer Perceptron Classification Model fitted by `spark.mlp`

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    the directory where the model is saved.

  - overwrite:
    
    overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.mlp` returns a fitted Multilayer Perceptron Classification Model.

`summary` returns summary information of the fitted model, which is a
list. The list includes `numOfInputs` (number of inputs), `numOfOutputs`
(number of outputs), `layers` (array of layer sizes including input and
output layers), and `weights` (the weights of layers). For `weights`, it
is a numeric vector with length equal to the expected given the
architecture (i.e., for 8-10-2 network, 112 connection weights).

`predict` returns a SparkDataFrame containing predicted labeled in a
column named "prediction".

## Note

spark.mlp since 2.1.0

summary(MultilayerPerceptronClassificationModel) since 2.1.0

predict(MultilayerPerceptronClassificationModel) since 2.1.0

write.ml(MultilayerPerceptronClassificationModel, character) since 2.1.0

## See also

[read.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/read.ml.md)

[write.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/write.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
df <- read.df("data/mllib/sample_multiclass_classification_data.txt", source = "libsvm")

# fit a Multilayer Perceptron Classification Model
model <- spark.mlp(df, label ~ features, blockSize = 128, layers = c(4, 3), solver = "l-bfgs",
                   maxIter = 100, tol = 0.5, stepSize = 1, seed = 1,
                   initialWeights = c(0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9))

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
