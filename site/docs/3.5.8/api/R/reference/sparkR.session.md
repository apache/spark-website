# Get the existing SparkSession or initialize a new SparkSession.

SparkSession is the entry point into SparkR. `sparkR.session` gets the
existing SparkSession or initializes a new SparkSession. Additional
Spark properties can be set in `...`, and these named parameters take
priority over values in `master`, `appName`, named lists of
`sparkConfig`.

## Usage

``` r
sparkR.session(
  master = "",
  appName = "SparkR",
  sparkHome = Sys.getenv("SPARK_HOME"),
  sparkConfig = list(),
  sparkJars = "",
  sparkPackages = "",
  enableHiveSupport = TRUE,
  ...
)
```

## Arguments

  - master:
    
    the Spark master URL.

  - appName:
    
    application name to register with cluster manager.

  - sparkHome:
    
    Spark Home directory.

  - sparkConfig:
    
    named list of Spark configuration to set on worker nodes.

  - sparkJars:
    
    character vector of jar files to pass to the worker nodes.

  - sparkPackages:
    
    character vector of package coordinates

  - enableHiveSupport:
    
    enable support for Hive, fallback if not built with Hive support;
    once set, this cannot be turned off on an existing session

  - ...:
    
    named Spark properties passed to the method.

## Details

When called in an interactive session, this method checks for the Spark
installation, and, if not found, it will be downloaded and cached
automatically. Alternatively, `install.spark` can be called manually.

A default warehouse is created automatically in the current directory
when a managed table is created via `sql` statement `CREATE TABLE`, for
example. To change the location of the warehouse, set the named
parameter `spark.sql.warehouse.dir` to the SparkSession. Along with the
warehouse, an accompanied metastore may also be automatically created in
the current directory when a new SparkSession is initialized with
`enableHiveSupport` set to `TRUE`, which is the default. For more
details, refer to Hive configuration at
<https://spark.apache.org/docs/latest/sql-programming-guide.html#hive-tables>.

For details on how to initialize and use SparkR, refer to SparkR
programming guide at
<https://spark.apache.org/docs/latest/sparkr.html#starting-up-sparksession>.

## Note

sparkR.session since 2.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
df <- read.json(path)

sparkR.session("local[2]", "SparkR", "/home/spark")
sparkR.session("yarn", "SparkR", "/home/spark",
               list(spark.executor.memory="4g", spark.submit.deployMode="client"),
               c("one.jar", "two.jar", "three.jar"),
               c("com.databricks:spark-avro_2.12:2.0.1"))
sparkR.session(spark.master = "yarn", spark.submit.deployMode = "client",
               spark.executor.memory = "4g")
} # }
```
