# PrefixSpan

A parallel PrefixSpan algorithm to mine frequent sequential patterns.
`spark.findFrequentSequentialPatterns` returns a complete set of
frequent sequential patterns. For more details, see
[PrefixSpan](https://spark.apache.org/docs/latest/mllib-frequent-pattern-mining.html#prefixspan).

## Usage

``` r
spark.findFrequentSequentialPatterns(data, ...)

# S4 method for class 'SparkDataFrame'
spark.findFrequentSequentialPatterns(
  data,
  minSupport = 0.1,
  maxPatternLength = 10L,
  maxLocalProjDBSize = 32000000L,
  sequenceCol = "sequence"
)
```

## Arguments

  - data:
    
    A SparkDataFrame.

  - ...:
    
    additional argument(s) passed to the method.

  - minSupport:
    
    Minimal support level.

  - maxPatternLength:
    
    Maximal pattern length.

  - maxLocalProjDBSize:
    
    Maximum number of items (including delimiters used in the internal
    storage format) allowed in a projected database before local
    processing.

  - sequenceCol:
    
    name of the sequence column in dataset.

## Value

A complete set of frequent sequential patterns in the input sequences of
itemsets. The returned `SparkDataFrame` contains columns of sequence and
corresponding frequency. The schema of it will be: `sequence:
ArrayType(ArrayType(T))`, `freq: integer` where T is the item type

## Note

spark.findFrequentSequentialPatterns(SparkDataFrame) since 3.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(list(list(list(list(1L, 2L), list(3L))),
                           list(list(list(1L), list(3L, 2L), list(1L, 2L))),
                           list(list(list(1L, 2L), list(5L))),
                           list(list(list(6L)))),
                      schema = c("sequence"))
frequency <- spark.findFrequentSequentialPatterns(df, minSupport = 0.5, maxPatternLength = 5L,
                                                  maxLocalProjDBSize = 32000000L)
showDF(frequency)
} # }
```
