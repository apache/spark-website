# Generalized Linear Models (R-compliant)

Fits a generalized linear model, similarly to R's glm().

## Usage

``` r
# S4 method for class 'formula,ANY,SparkDataFrame'
glm(
  formula,
  family = gaussian,
  data,
  epsilon = 1e-06,
  maxit = 25,
  weightCol = NULL,
  var.power = 0,
  link.power = 1 - var.power,
  stringIndexerOrderType = c("frequencyDesc", "frequencyAsc", "alphabetDesc",
    "alphabetAsc"),
  offsetCol = NULL
)
```

## Arguments

  - formula:
    
    a symbolic description of the model to be fitted. Currently only a
    few formula operators are supported, including '\~', '.', ':', '+',
    and '-'.

  - family:
    
    a description of the error distribution and link function to be used
    in the model. This can be a character string naming a family
    function, a family function or the result of a call to a family
    function. Refer R family at
    <https://stat.ethz.ch/R-manual/R-devel/library/stats/html/family.html>.
    Currently these families are supported: `binomial`, `gaussian`,
    `poisson`, `Gamma`, and `tweedie`.

  - data:
    
    a SparkDataFrame or R's glm data for training.

  - epsilon:
    
    positive convergence tolerance of iterations.

  - maxit:
    
    integer giving the maximal number of IRLS iterations.

  - weightCol:
    
    the weight column name. If this is not set or `NULL`, we treat all
    instance weights as 1.0.

  - var.power:
    
    the index of the power variance function in the Tweedie family.

  - link.power:
    
    the index of the power link function in the Tweedie family.

  - stringIndexerOrderType:
    
    how to order categories of a string feature column. This is used to
    decide the base level of a string feature as the last category after
    ordering is dropped when encoding strings. Supported options are
    "frequencyDesc", "frequencyAsc", "alphabetDesc", and "alphabetAsc".
    The default value is "frequencyDesc". When the ordering is set to
    "alphabetDesc", this drops the same category as R when encoding
    strings.

  - offsetCol:
    
    the offset column name. If this is not set or empty, we treat all
    instance offsets as 0.0. The feature specified as offset has a
    constant coefficient of 1.0.

## Value

`glm` returns a fitted generalized linear model.

## Note

glm since 1.5.0

## See also

[spark.glm](https://spark.apache.org/docs/3.5.8/api/R/reference/spark.glm.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
t <- as.data.frame(Titanic)
df <- createDataFrame(t)
model <- glm(Freq ~ Sex + Age, df, family = "gaussian")
summary(model)
} # }
```
