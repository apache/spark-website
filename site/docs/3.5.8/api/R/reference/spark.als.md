# Alternating Least Squares (ALS) for Collaborative Filtering

`spark.als` learns latent factors in collaborative filtering via
alternating least squares. Users can call `summary` to obtain fitted
latent factors, `predict` to make predictions on new data, and
`write.ml`/`read.ml` to save/load fitted models.

## Usage

``` r
spark.als(data, ...)

# S4 method for class 'SparkDataFrame'
spark.als(
  data,
  ratingCol = "rating",
  userCol = "user",
  itemCol = "item",
  rank = 10,
  regParam = 0.1,
  maxIter = 10,
  nonnegative = FALSE,
  implicitPrefs = FALSE,
  alpha = 1,
  numUserBlocks = 10,
  numItemBlocks = 10,
  checkpointInterval = 10,
  seed = 0
)

# S4 method for class 'ALSModel'
summary(object)

# S4 method for class 'ALSModel'
predict(object, newData)

# S4 method for class 'ALSModel,character'
write.ml(object, path, overwrite = FALSE)
```

## Arguments

  - data:
    
    a SparkDataFrame for training.

  - ...:
    
    additional argument(s) passed to the method.

  - ratingCol:
    
    column name for ratings.

  - userCol:
    
    column name for user ids. Ids must be (or can be coerced into)
    integers.

  - itemCol:
    
    column name for item ids. Ids must be (or can be coerced into)
    integers.

  - rank:
    
    rank of the matrix factorization (\> 0).

  - regParam:
    
    regularization parameter (\>= 0).

  - maxIter:
    
    maximum number of iterations (\>= 0).

  - nonnegative:
    
    logical value indicating whether to apply nonnegativity constraints.

  - implicitPrefs:
    
    logical value indicating whether to use implicit preference.

  - alpha:
    
    alpha parameter in the implicit preference formulation (\>= 0).

  - numUserBlocks:
    
    number of user blocks used to parallelize computation (\> 0).

  - numItemBlocks:
    
    number of item blocks used to parallelize computation (\> 0).

  - checkpointInterval:
    
    number of checkpoint intervals (\>= 1) or disable checkpoint (-1).
    Note: this setting will be ignored if the checkpoint directory is
    not set.

  - seed:
    
    integer seed for random number generation.

  - object:
    
    a fitted ALS model.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    the directory where the model is saved.

  - overwrite:
    
    logical value indicating whether to overwrite if the output path
    already exists. Default is FALSE which means throw exception if the
    output path exists.

## Value

`spark.als` returns a fitted ALS model.

`summary` returns summary information of the fitted model, which is a
list. The list includes `user` (the names of the user column), `item`
(the item column), `rating` (the rating column), `userFactors` (the
estimated user factors), `itemFactors` (the estimated item factors), and
`rank` (rank of the matrix factorization model).

`predict` returns a SparkDataFrame containing predicted values.

## Details

For more details, see [MLlib: Collaborative
Filtering](https://spark.apache.org/docs/latest/ml-collaborative-filtering.html).

## Note

spark.als since 2.1.0

the input rating dataframe to the ALS implementation should be
deterministic. Nondeterministic data can cause failure during fitting
ALS model. For example, an order-sensitive operation like sampling after
a repartition makes dataframe output nondeterministic, like
`sample(repartition(df, 2L), FALSE, 0.5, 1618L)`. Checkpointing sampled
dataframe or adding a sort before sampling can help make the dataframe
deterministic.

summary(ALSModel) since 2.1.0

predict(ALSModel) since 2.1.0

write.ml(ALSModel, character) since 2.1.0

## See also

[read.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/read.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
ratings <- list(list(0, 0, 4.0), list(0, 1, 2.0), list(1, 1, 3.0), list(1, 2, 4.0),
                list(2, 1, 1.0), list(2, 2, 5.0))
df <- createDataFrame(ratings, c("user", "item", "rating"))
model <- spark.als(df, "rating", "user", "item")

# extract latent factors
stats <- summary(model)
userFactors <- stats$userFactors
itemFactors <- stats$itemFactors

# make predictions
predicted <- predict(model, df)
showDF(predicted)

# save and load the model
path <- "path/to/model"
write.ml(model, path)
savedModel <- read.ml(path)
summary(savedModel)

# set other arguments
modelS <- spark.als(df, "rating", "user", "item", rank = 20,
                    regParam = 0.1, nonnegative = TRUE)
statsS <- summary(modelS)
} # }
```
