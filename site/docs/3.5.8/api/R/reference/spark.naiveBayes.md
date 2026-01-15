# Naive Bayes Models

`spark.naiveBayes` fits a Bernoulli naive Bayes model against a
SparkDataFrame. Users can call `summary` to print a summary of the
fitted model, `predict` to make predictions on new data, and
`write.ml`/`read.ml` to save/load fitted models. Only categorical data
is supported.

## Usage

``` r
spark.naiveBayes(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.naiveBayes(
  data,
  formula,
  smoothing = 1,
  handleInvalid = c("error", "keep", "skip")
)

# S4 method for class 'NaiveBayesModel'
summary(object)

# S4 method for class 'NaiveBayesModel'
predict(object, newData)

# S4 method for class 'NaiveBayesModel,character'
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
    
    additional argument(s) passed to the method. Currently only
    `smoothing`.

  - smoothing:
    
    smoothing parameter.

  - handleInvalid:
    
    How to handle invalid data (unseen labels or NULL values) in
    features and label column of string type. Supported options: "skip"
    (filter out rows with invalid data), "error" (throw an error),
    "keep" (put invalid data in a special additional bucket, at index
    numLabels). Default is "error".

  - object:
    
    a naive Bayes model fitted by `spark.naiveBayes`.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    the directory where the model is saved.

  - overwrite:
    
    overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.naiveBayes` returns a fitted naive Bayes model.

`summary` returns summary information of the fitted model, which is a
list. The list includes `apriori` (the label distribution) and `tables`
(conditional probabilities given the target label).

`predict` returns a SparkDataFrame containing predicted labeled in a
column named "prediction".

## Note

spark.naiveBayes since 2.0.0

summary(NaiveBayesModel) since 2.0.0

predict(NaiveBayesModel) since 2.0.0

write.ml(NaiveBayesModel, character) since 2.0.0

## See also

e1071: <https://cran.r-project.org/package=e1071>

[write.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/write.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
data <- as.data.frame(UCBAdmissions)
df <- createDataFrame(data)

# fit a Bernoulli naive Bayes model
model <- spark.naiveBayes(df, Admit ~ Gender + Dept, smoothing = 0)

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
