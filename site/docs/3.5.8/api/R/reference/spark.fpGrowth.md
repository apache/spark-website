# FP-growth

A parallel FP-growth algorithm to mine frequent itemsets.
`spark.fpGrowth` fits a FP-growth model on a SparkDataFrame. Users can
`spark.freqItemsets` to get frequent itemsets, `spark.associationRules`
to get association rules, `predict` to make predictions on new data
based on generated association rules, and `write.ml`/`read.ml` to
save/load fitted models. For more details, see
[FP-growth](https://spark.apache.org/docs/latest/mllib-frequent-pattern-mining.html#fp-growth).

## Usage

``` r
spark.fpGrowth(data, ...)

spark.freqItemsets(object)

spark.associationRules(object)

# S4 method for class 'SparkDataFrame'
spark.fpGrowth(
  data,
  minSupport = 0.3,
  minConfidence = 0.8,
  itemsCol = "items",
  numPartitions = NULL
)

# S4 method for class 'FPGrowthModel'
spark.freqItemsets(object)

# S4 method for class 'FPGrowthModel'
spark.associationRules(object)

# S4 method for class 'FPGrowthModel'
predict(object, newData)

# S4 method for class 'FPGrowthModel,character'
write.ml(object, path, overwrite = FALSE)
```

## Arguments

  - data:
    
    A SparkDataFrame for training.

  - ...:
    
    additional argument(s) passed to the method.

  - object:
    
    a fitted FPGrowth model.

  - minSupport:
    
    Minimal support level.

  - minConfidence:
    
    Minimal confidence level.

  - itemsCol:
    
    Features column name.

  - numPartitions:
    
    Number of partitions used for fitting.

  - newData:
    
    a SparkDataFrame for testing.

  - path:
    
    the directory where the model is saved.

  - overwrite:
    
    logical value indicating whether to overwrite if the output path
    already exists. Default is FALSE which means throw exception if the
    output path exists.

## Value

`spark.fpGrowth` returns a fitted FPGrowth model.

A `SparkDataFrame` with frequent itemsets. The `SparkDataFrame` contains
two columns: `items` (an array of the same type as the input column) and
`freq` (frequency of the itemset).

A `SparkDataFrame` with association rules. The `SparkDataFrame` contains
five columns: `antecedent` (an array of the same type as the input
column), `consequent` (an array of the same type as the input column),
`confidence` (confidence for the rule) `lift` (lift for the rule) and
`support` (support for the rule)

`predict` returns a SparkDataFrame containing predicted values.

## Note

spark.fpGrowth since 2.2.0

spark.freqItemsets(FPGrowthModel) since 2.2.0

spark.associationRules(FPGrowthModel) since 2.2.0

predict(FPGrowthModel) since 2.2.0

write.ml(FPGrowthModel, character) since 2.2.0

## See also

[read.ml](https://spark.apache.org/docs/3.5.8/api/R/reference/read.ml.md)

## Examples

``` r
if (FALSE) { # \dontrun{
raw_data <- read.df(
  "data/mllib/sample_fpgrowth.txt",
  source = "csv",
  schema = structType(structField("raw_items", "string")))

data <- selectExpr(raw_data, "split(raw_items, ' ') as items")
model <- spark.fpGrowth(data)

# Show frequent itemsets
frequent_itemsets <- spark.freqItemsets(model)
showDF(frequent_itemsets)

# Show association rules
association_rules <- spark.associationRules(model)
showDF(association_rules)

# Predict on new data
new_itemsets <- data.frame(items = c("t", "t,s"))
new_data <- selectExpr(createDataFrame(new_itemsets), "split(items, ',') as items")
predict(model, new_data)

# Save and load model
path <- "/path/to/model"
write.ml(model, path)
read.ml(path)

# Optional arguments
baskets_data <- selectExpr(createDataFrame(itemsets), "split(items, ',') as baskets")
another_model <- spark.fpGrowth(data, minSupport = 0.1, minConfidence = 0.5,
                                itemsCol = "baskets", numPartitions = 10)
} # }
```
