# Decision Tree Model for Regression and Classification

`spark.decisionTree` fits a Decision Tree Regression model or
Classification model on a SparkDataFrame. Users can call `summary` to
get a summary of the fitted Decision Tree model, `predict` to make
predictions on new data, and `write.ml`/`read.ml` to save/load fitted
models. For more details, see [Decision Tree
Regression](https://spark.apache.org/docs/latest/ml-classification-regression.html#decision-tree-regression)
and [Decision Tree
Classification](https://spark.apache.org/docs/latest/ml-classification-regression.html#decision-tree-classifier)

## Usage

``` r
spark.decisionTree(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.decisionTree(
  data,
  formula,
  type = c("regression", "classification"),
  maxDepth = 5,
  maxBins = 32,
  impurity = NULL,
  seed = NULL,
  minInstancesPerNode = 1,
  minInfoGain = 0,
  checkpointInterval = 10,
  maxMemoryInMB = 256,
  cacheNodeIds = FALSE,
  handleInvalid = c("error", "keep", "skip")
)

# S4 method for class 'DecisionTreeRegressionModel'
summary(object)

# S3 method for class 'summary.DecisionTreeRegressionModel'
print(x, ...)

# S4 method for class 'DecisionTreeClassificationModel'
summary(object)

# S3 method for class 'summary.DecisionTreeClassificationModel'
print(x, ...)

# S4 method for class 'DecisionTreeRegressionModel'
predict(object, newData)

# S4 method for class 'DecisionTreeClassificationModel'
predict(object, newData)

# S4 method for class 'DecisionTreeRegressionModel,character'
write.ml(object, path, overwrite = FALSE)

# S4 method for class 'DecisionTreeClassificationModel,character'
write.ml(object, path, overwrite = FALSE)
```

## Arguments

  - data:
    
    a SparkDataFrame for training.

  - formula:
    
    a symbolic description of the model to be fitted. Currently only a
    few formula operators are supported, including '\~', ':', '+', and
    '-'.

  - ...:
    
    additional arguments passed to the method.

  - type:
    
    type of model, one of "regression" or "classification", to fit

  - maxDepth:
    
    Maximum depth of the tree (\>= 0).

  - maxBins:
    
    Maximum number of bins used for discretizing continuous features and
    for choosing how to split on features at each node. More bins give
    higher granularity. Must be \>= 2 and \>= number of categories in
    any categorical feature.

  - impurity:
    
    Criterion used for information gain calculation. For regression,
    must be "variance". For classification, must be one of "entropy" and
    "gini", default is "gini".

  - seed:
    
    integer seed for random number generation.

  - minInstancesPerNode:
    
    Minimum number of instances each child must have after split.

  - minInfoGain:
    
    Minimum information gain for a split to be considered at a tree
    node.

  - checkpointInterval:
    
    Param for set checkpoint interval (\>= 1) or disable checkpoint
    (-1). Note: this setting will be ignored if the checkpoint directory
    is not set.

  - maxMemoryInMB:
    
    Maximum memory in MiB allocated to histogram aggregation.

  - cacheNodeIds:
    
    If FALSE, the algorithm will pass trees to executors to match
    instances with nodes. If TRUE, the algorithm will cache node IDs for
    each instance. Caching can speed up training of deeper trees. Users
    can set how often should the cache be checkpointed or disable it by
    setting checkpointInterval.

  - handleInvalid:
    
    How to handle invalid data (unseen labels or NULL values) in
    features and label column of string type in classification model.
    Supported options: "skip" (filter out rows with invalid data),
    "error" (throw an error), "keep" (put invalid data in a special
    additional bucket, at index numLabels). Default is "error".

  - object:
    
    A fitted Decision Tree regression model or classification model.

  - x:
    
    summary object of Decision Tree regression model or classification
    model returned by `summary`.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    The directory where the model is saved.

  - overwrite:
    
    Overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.decisionTree` returns a fitted Decision Tree model.

`summary` returns summary information of the fitted model, which is a
list. The list of components includes `formula` (formula), `numFeatures`
(number of features), `features` (list of features),
`featureImportances` (feature importances), and `maxDepth` (max depth of
trees).

`predict` returns a SparkDataFrame containing predicted labeled in a
column named "prediction".

## Note

spark.decisionTree since 2.3.0

summary(DecisionTreeRegressionModel) since 2.3.0

print.summary.DecisionTreeRegressionModel since 2.3.0

summary(DecisionTreeClassificationModel) since 2.3.0

print.summary.DecisionTreeClassificationModel since 2.3.0

predict(DecisionTreeRegressionModel) since 2.3.0

predict(DecisionTreeClassificationModel) since 2.3.0

write.ml(DecisionTreeRegressionModel, character) since 2.3.0

write.ml(DecisionTreeClassificationModel, character) since 2.3.0

## Examples

``` r
if (FALSE) { # \dontrun{
# fit a Decision Tree Regression Model
df <- createDataFrame(longley)
model <- spark.decisionTree(df, Employed ~ ., type = "regression", maxDepth = 5, maxBins = 16)

# get the summary of the model
summary(model)

# make predictions
predictions <- predict(model, df)

# save and load the model
path <- "path/to/model"
write.ml(model, path)
savedModel <- read.ml(path)
summary(savedModel)

# fit a Decision Tree Classification Model
t <- as.data.frame(Titanic)
df <- createDataFrame(t)
model <- spark.decisionTree(df, Survived ~ Freq + Age, "classification")
} # }
```
