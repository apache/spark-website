# Accelerated Failure Time (AFT) Survival Regression Model

`spark.survreg` fits an accelerated failure time (AFT) survival
regression model on a SparkDataFrame. Users can call `summary` to get a
summary of the fitted AFT model, `predict` to make predictions on new
data, and `write.ml`/`read.ml` to save/load fitted models.

## Usage

``` r
spark.survreg(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.survreg(
  data,
  formula,
  aggregationDepth = 2,
  stringIndexerOrderType = c("frequencyDesc", "frequencyAsc", "alphabetDesc",
    "alphabetAsc")
)

# S4 method for class 'AFTSurvivalRegressionModel'
summary(object)

# S4 method for class 'AFTSurvivalRegressionModel'
predict(object, newData)

# S4 method for class 'AFTSurvivalRegressionModel,character'
write.ml(object, path, overwrite = FALSE)
```

## Arguments

  - data:
    
    a SparkDataFrame for training.

  - formula:
    
    a symbolic description of the model to be fitted. Currently only a
    few formula operators are supported, including '\~', ':', '+', and
    '-'. Note that operator '.' is not supported currently.

  - ...:
    
    additional arguments passed to the method.

  - aggregationDepth:
    
    The depth for treeAggregate (greater than or equal to 2). If the
    dimensions of features or the number of partitions are large, this
    param could be adjusted to a larger size. This is an expert
    parameter. Default value should be good for most cases.

  - stringIndexerOrderType:
    
    how to order categories of a string feature column. This is used to
    decide the base level of a string feature as the last category after
    ordering is dropped when encoding strings. Supported options are
    "frequencyDesc", "frequencyAsc", "alphabetDesc", and "alphabetAsc".
    The default value is "frequencyDesc". When the ordering is set to
    "alphabetDesc", this drops the same category as R when encoding
    strings.

  - object:
    
    a fitted AFT survival regression model.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    the directory where the model is saved.

  - overwrite:
    
    overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.survreg` returns a fitted AFT survival regression model.

`summary` returns summary information of the fitted model, which is a
list. The list includes the model's `coefficients` (features,
coefficients, intercept and log(scale)).

`predict` returns a SparkDataFrame containing predicted values on the
original scale of the data (mean predicted value at scale = 1.0).

## Note

spark.survreg since 2.0.0

summary(AFTSurvivalRegressionModel) since 2.0.0

predict(AFTSurvivalRegressionModel) since 2.0.0

write.ml(AFTSurvivalRegressionModel, character) since 2.0.0

## See also

survival: <https://cran.r-project.org/package=survival>

[write.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/write.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(ovarian)
model <- spark.survreg(df, Surv(futime, fustat) ~ ecog_ps + rx)

# get a summary of the model
summary(model)

# make predictions
predicted <- predict(model, df)
showDF(predicted)

# save and load the model
path <- "path/to/model"
write.ml(model, path)
savedModel <- read.ml(path)
summary(savedModel)
} # }
```
