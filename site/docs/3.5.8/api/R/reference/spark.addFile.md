# Add a file or directory to be downloaded with this Spark job on every node.

The path passed can be either a local file, a file in HDFS (or other
Hadoop-supported filesystems), or an HTTP, HTTPS or FTP URI. To access
the file in Spark jobs, use spark.getSparkFiles(fileName) to find its
download location.

## Usage

``` r
spark.addFile(path, recursive = FALSE)
```

## Arguments

  - path:
    
    The path of the file to be added

  - recursive:
    
    Whether to add files recursively from the path. Default is FALSE.

## Details

A directory can be given if the recursive option is set to true.
Currently directories are only supported for Hadoop-supported
filesystems. Refer Hadoop-supported filesystems at
<https://cwiki.apache.org/confluence/display/HADOOP2/HCFS>.

Note: A path can be added only once. Subsequent additions of the same
path are ignored.

## Note

spark.addFile since 2.1.0

## Examples

``` r
if (FALSE) { # \dontrun{
spark.addFile("~/myfile")
} # }
```
