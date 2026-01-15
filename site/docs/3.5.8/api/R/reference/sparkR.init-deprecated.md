# (Deprecated) Initialize a new Spark Context

This function initializes a new SparkContext.

## Usage

``` r
sparkR.init(
  master = "",
  appName = "SparkR",
  sparkHome = Sys.getenv("SPARK_HOME"),
  sparkEnvir = list(),
  sparkExecutorEnv = list(),
  sparkJars = "",
  sparkPackages = ""
)
```

## Arguments

  - master:
    
    The Spark master URL

  - appName:
    
    Application name to register with cluster manager

  - sparkHome:
    
    Spark Home directory

  - sparkEnvir:
    
    Named list of environment variables to set on worker nodes

  - sparkExecutorEnv:
    
    Named list of environment variables to be used when launching
    executors

  - sparkJars:
    
    Character vector of jar files to pass to the worker nodes

  - sparkPackages:
    
    Character vector of package coordinates

## Note

sparkR.init since 1.4.0

## See also

[sparkR.session](https://spark.apache.org/docs/3.5.8/api/R/reference/sparkR.session.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sc <- sparkR.init("local[2]", "SparkR", "/home/spark")
sc <- sparkR.init("local[2]", "SparkR", "/home/spark",
                 list(spark.executor.memory="1g"))
sc <- sparkR.init("yarn-client", "SparkR", "/home/spark",
                 list(spark.executor.memory="4g"),
                 list(LD_LIBRARY_PATH="/directory of JVM libraries (libjvm.so) on workers/"),
                 c("one.jar", "two.jar", "three.jar"),
                 c("com.databricks:spark-avro_2.11:2.0.1"))
} # }
```
