# (Deprecated) Initialize a new SQLContext

This function creates a SparkContext from an existing JavaSparkContext
and then uses it to initialize a new SQLContext

## Usage

``` r
sparkRSQL.init(jsc = NULL)
```

## Arguments

  - jsc:
    
    The existing JavaSparkContext created with SparkR.init()

## Details

Starting SparkR 2.0, a SparkSession is initialized and returned instead.
This API is deprecated and kept for backward compatibility only.

## Note

sparkRSQL.init since 1.4.0

## See also

[sparkR.session](https://spark.apache.org/docs/3.5.8/api/R/reference/sparkR.session.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sc <- sparkR.init()
sqlContext <- sparkRSQL.init(sc)
} # }
```
