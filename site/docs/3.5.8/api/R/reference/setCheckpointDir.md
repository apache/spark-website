# Set checkpoint directory

Set the directory under which SparkDataFrame are going to be
checkpointed. The directory must be an HDFS path if running on a
cluster.

## Usage

``` r
setCheckpointDir(directory)
```

## Arguments

  - directory:
    
    Directory path to checkpoint to

## Note

setCheckpointDir since 2.2.0

## See also

[checkpoint](https://spark.apache.org/docs/3.5.8/api/R/reference/checkpoint.md)

## Examples

``` r
if (FALSE) { # \dontrun{
setCheckpointDir("/checkpoint")
} # }
```
