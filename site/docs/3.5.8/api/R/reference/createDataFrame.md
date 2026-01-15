# Create a SparkDataFrame

Converts R data.frame or list into SparkDataFrame.

## Usage

``` r
createDataFrame(data, schema = NULL, samplingRatio = 1, numPartitions = NULL)

as.DataFrame(data, schema = NULL, samplingRatio = 1, numPartitions = NULL)
```

## Arguments

  - data:
    
    a list or data.frame.

  - schema:
    
    a list of column names or named list (StructType), optional.

  - samplingRatio:
    
    Currently not used.

  - numPartitions:
    
    the number of partitions of the SparkDataFrame. Defaults to 1, this
    is limited by length of the list or number of rows of the data.frame

## Value

A SparkDataFrame.

## Note

createDataFrame since 1.4.0

as.DataFrame since 1.6.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df1 <- as.DataFrame(iris)
df2 <- as.DataFrame(list(3,4,5,6))
df3 <- createDataFrame(iris)
df4 <- createDataFrame(cars, numPartitions = 2)
} # }
```
