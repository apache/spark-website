# Linear SVM Model

Fits a linear SVM model against a SparkDataFrame, similar to svm in
e1071 package. Currently only supports binary classification model with
linear kernel. Users can print, make predictions on the produced model
and save the model to the input path.

## Usage

``` r
spark.svmLinear(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.svmLinear(
  data,
  formula,
  regParam = 0,
  maxIter = 100,
  tol = 1e-06,
  standardization = TRUE,
  threshold = 0,
  weightCol = NULL,
  aggregationDepth = 2,
  handleInvalid = c("error", "keep", "skip")
)

# S4 method for class 'LinearSVCModel'
predict(object, newData)

# S4 method for class 'LinearSVCModel'
summary(object)

# S4 method for class 'LinearSVCModel,character'
write.ml(object, path, overwrite = FALSE)
```

## Arguments

  - data:
    
    SparkDataFrame for training.

  - formula:
    
    A symbolic description of the model to be fitted. Currently only a
    few formula operators are supported, including '\~', '.', ':', '+',
    '-', '\*', and '^'.

  - ...:
    
    additional arguments passed to the method.

  - regParam:
    
    The regularization parameter. Only supports L2 regularization
    currently.

  - maxIter:
    
    Maximum iteration number.

  - tol:
    
    Convergence tolerance of iterations.

  - standardization:
    
    Whether to standardize the training features before fitting the
    model. The coefficients of models will be always returned on the
    original scale, so it will be transparent for users. Note that
    with/without standardization, the models should be always converged
    to the same solution when no regularization is applied.

  - threshold:
    
    The threshold in binary classification applied to the linear model
    prediction. This threshold can be any real number, where Inf will
    make all predictions 0.0 and -Inf will make all predictions 1.0.

  - weightCol:
    
    The weight column name.

  - aggregationDepth:
    
    The depth for treeAggregate (greater than or equal to 2). If the
    dimensions of features or the number of partitions are large, this
    param could be adjusted to a larger size. This is an expert
    parameter. Default value should be good for most cases.

  - handleInvalid:
    
    How to handle invalid data (unseen labels or NULL values) in
    features and label column of string type. Supported options: "skip"
    (filter out rows with invalid data), "error" (throw an error),
    "keep" (put invalid data in a special additional bucket, at index
    numLabels). Default is "error".

  - object:
    
    a LinearSVCModel fitted by `spark.svmLinear`.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    The directory where the model is saved.

  - overwrite:
    
    Overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.svmLinear` returns a fitted linear SVM model.

`predict` returns the predicted values based on a LinearSVCModel.

`summary` returns summary information of the fitted model, which is a
list. The list includes `coefficients` (coefficients of the fitted
model), `numClasses` (number of classes), `numFeatures` (number of
features).

## Note

spark.svmLinear since 2.2.0

predict(LinearSVCModel) since 2.2.0

summary(LinearSVCModel) since 2.2.0

write.ml(LogisticRegression, character) since 2.2.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
t <- as.data.frame(Titanic)
training <- createDataFrame(t)
model <- spark.svmLinear(training, Survived ~ ., regParam = 0.5)
summary <- summary(model)

# fitted values on training data
fitted <- predict(model, training)

# save fitted model to input path
path <- "path/to/model"
write.ml(model, path)

# can also read back the saved model and predict
# Note that summary deos not work on loaded model
savedModel <- read.ml(path)
summary(savedModel)
} # }
```
