# Random Forest Model for Regression and Classification

`spark.randomForest` fits a Random Forest Regression model or
Classification model on a SparkDataFrame. Users can call `summary` to
get a summary of the fitted Random Forest model, `predict` to make
predictions on new data, and `write.ml`/`read.ml` to save/load fitted
models. For more details, see [Random Forest
Regression](https://spark.apache.org/docs/latest/ml-classification-regression.html#random-forest-regression)
and [Random Forest
Classification](https://spark.apache.org/docs/latest/ml-classification-regression.html#random-forest-classifier)

## Usage

``` r
spark.randomForest(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.randomForest(
  data,
  formula,
  type = c("regression", "classification"),
  maxDepth = 5,
  maxBins = 32,
  numTrees = 20,
  impurity = NULL,
  featureSubsetStrategy = "auto",
  seed = NULL,
  subsamplingRate = 1,
  minInstancesPerNode = 1,
  minInfoGain = 0,
  checkpointInterval = 10,
  maxMemoryInMB = 256,
  cacheNodeIds = FALSE,
  handleInvalid = c("error", "keep", "skip"),
  bootstrap = TRUE
)

# S4 method for class 'RandomForestRegressionModel'
summary(object)

# S3 method for class 'summary.RandomForestRegressionModel'
print(x, ...)

# S4 method for class 'RandomForestClassificationModel'
summary(object)

# S3 method for class 'summary.RandomForestClassificationModel'
print(x, ...)

# S4 method for class 'RandomForestRegressionModel'
predict(object, newData)

# S4 method for class 'RandomForestClassificationModel'
predict(object, newData)

# S4 method for class 'RandomForestRegressionModel,character'
write.ml(object, path, overwrite = FALSE)

# S4 method for class 'RandomForestClassificationModel,character'
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

  - numTrees:
    
    Number of trees to train (\>= 1).

  - impurity:
    
    Criterion used for information gain calculation. For regression,
    must be "variance". For classification, must be one of "entropy" and
    "gini", default is "gini".

  - featureSubsetStrategy:
    
    The number of features to consider for splits at each tree node.
    Supported options: "auto" (choose automatically for task: If
    numTrees == 1, set to "all." If numTrees \> 1 (forest), set to
    "sqrt" for classification and to "onethird" for regression), "all"
    (use all features), "onethird" (use 1/3 of the features), "sqrt"
    (use sqrt(number of features)), "log2" (use log2(number of
    features)), "n": (when n is in the range (0, 1.0\], use n \* number
    of features. When n is in the range (1, number of features), use n
    features). Default is "auto".

  - seed:
    
    integer seed for random number generation.

  - subsamplingRate:
    
    Fraction of the training data used for learning each decision tree,
    in range (0, 1\].

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

  - bootstrap:
    
    Whether bootstrap samples are used when building trees.

  - object:
    
    A fitted Random Forest regression model or classification model.

  - x:
    
    summary object of Random Forest regression model or classification
    model returned by `summary`.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    The directory where the model is saved.

  - overwrite:
    
    Overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.randomForest` returns a fitted Random Forest model.

`summary` returns summary information of the fitted model, which is a
list. The list of components includes `formula` (formula), `numFeatures`
(number of features), `features` (list of features),
`featureImportances` (feature importances), `maxDepth` (max depth of
trees), `numTrees` (number of trees), and `treeWeights` (tree weights).

`predict` returns a SparkDataFrame containing predicted labeled in a
column named "prediction".

## Note

spark.randomForest since 2.1.0

summary(RandomForestRegressionModel) since 2.1.0

print.summary.RandomForestRegressionModel since 2.1.0

summary(RandomForestClassificationModel) since 2.1.0

print.summary.RandomForestClassificationModel since 2.1.0

predict(RandomForestRegressionModel) since 2.1.0

predict(RandomForestClassificationModel) since 2.1.0

write.ml(RandomForestRegressionModel, character) since 2.1.0

write.ml(RandomForestClassificationModel, character) since 2.1.0

## Examples

``` r
if (FALSE) { # \dontrun{
# fit a Random Forest Regression Model
df <- createDataFrame(longley)
model <- spark.randomForest(df, Employed ~ ., type = "regression", maxDepth = 5, maxBins = 16)

# get the summary of the model
summary(model)

# make predictions
predictions <- predict(model, df)

# save and load the model
path <- "path/to/model"
write.ml(model, path)
savedModel <- read.ml(path)
summary(savedModel)

# fit a Random Forest Classification Model
t <- as.data.frame(Titanic)
df <- createDataFrame(t)
model <- spark.randomForest(df, Survived ~ Freq + Age, "classification")
} # }
```
