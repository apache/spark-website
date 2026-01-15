# PowerIterationClustering

A scalable graph clustering algorithm. Users can call
`spark.assignClusters` to return a cluster assignment for each input
vertex. Run the PIC algorithm and returns a cluster assignment for each
input vertex.

## Usage

``` r
spark.assignClusters(data, ...)

# S4 method for class 'SparkDataFrame'
spark.assignClusters(
  data,
  k = 2L,
  initMode = c("random", "degree"),
  maxIter = 20L,
  sourceCol = "src",
  destinationCol = "dst",
  weightCol = NULL
)
```

## Arguments

  - data:
    
    a SparkDataFrame.

  - ...:
    
    additional argument(s) passed to the method.

  - k:
    
    the number of clusters to create.

  - initMode:
    
    the initialization algorithm; "random" or "degree"

  - maxIter:
    
    the maximum number of iterations.

  - sourceCol:
    
    the name of the input column for source vertex IDs.

  - destinationCol:
    
    the name of the input column for destination vertex IDs

  - weightCol:
    
    weight column name. If this is not set or `NULL`, we treat all
    instance weights as 1.0.

## Value

A dataset that contains columns of vertex id and the corresponding
cluster for the id. The schema of it will be: `id: integer`, `cluster:
integer`

## Note

spark.assignClusters(SparkDataFrame) since 3.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(list(list(0L, 1L, 1.0), list(0L, 2L, 1.0),
                           list(1L, 2L, 1.0), list(3L, 4L, 1.0),
                           list(4L, 0L, 0.1)),
                      schema = c("src", "dst", "weight"))
clusters <- spark.assignClusters(df, initMode = "degree", weightCol = "weight")
showDF(clusters)
} # }
```
