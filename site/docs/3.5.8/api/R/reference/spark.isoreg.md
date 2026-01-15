# Isotonic Regression Model

Fits an Isotonic Regression model against a SparkDataFrame, similarly to
R's isoreg(). Users can print, make predictions on the produced model
and save the model to the input path.

## Usage

``` r
spark.isoreg(data, formula, ...)

# S4 method for class 'SparkDataFrame,formula'
spark.isoreg(
  data,
  formula,
  isotonic = TRUE,
  featureIndex = 0,
  weightCol = NULL
)

# S4 method for class 'IsotonicRegressionModel'
summary(object)

# S4 method for class 'IsotonicRegressionModel'
predict(object, newData)

# S4 method for class 'IsotonicRegressionModel,character'
write.ml(object, path, overwrite = FALSE)
```

## Arguments

  - data:
    
    SparkDataFrame for training.

  - formula:
    
    A symbolic description of the model to be fitted. Currently only a
    few formula operators are supported, including '\~', '.', ':', '+',
    and '-'.

  - ...:
    
    additional arguments passed to the method.

  - isotonic:
    
    Whether the output sequence should be isotonic/increasing (TRUE) or
    antitonic/decreasing (FALSE).

  - featureIndex:
    
    The index of the feature if `featuresCol` is a vector column
    (default: 0), no effect otherwise.

  - weightCol:
    
    The weight column name.

  - object:
    
    a fitted IsotonicRegressionModel.

  - newData:
    
    SparkDataFrame for testing.

  - path:
    
    The directory where the model is saved.

  - overwrite:
    
    Overwrites or not if the output path already exists. Default is
    FALSE which means throw exception if the output path exists.

## Value

`spark.isoreg` returns a fitted Isotonic Regression model.

`summary` returns summary information of the fitted model, which is a
list. The list includes model's `boundaries` (boundaries in increasing
order) and `predictions` (predictions associated with the boundaries at
the same index).

`predict` returns a SparkDataFrame containing predicted values.

## Note

spark.isoreg since 2.1.0

summary(IsotonicRegressionModel) since 2.1.0

predict(IsotonicRegressionModel) since 2.1.0

write.ml(IsotonicRegression, character) since 2.1.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
data <- list(list(7.0, 0.0), list(5.0, 1.0), list(3.0, 2.0),
        list(5.0, 3.0), list(1.0, 4.0))
df <- createDataFrame(data, c("label", "feature"))
model <- spark.isoreg(df, label ~ feature, isotonic = FALSE)
# return model boundaries and prediction as lists
result <- summary(model, df)
# prediction based on fitted model
predict_data <- list(list(-2.0), list(-1.0), list(0.5),
                list(0.75), list(1.0), list(2.0), list(9.0))
predict_df <- createDataFrame(predict_data, c("feature"))
# get prediction column
predict_result <- collect(select(predict(model, predict_df), "prediction"))

# save fitted model to input path
path <- "path/to/model"
write.ml(model, path)

# can also read back the saved model and print
savedModel <- read.ml(path)
summary(savedModel)
} # }
```
