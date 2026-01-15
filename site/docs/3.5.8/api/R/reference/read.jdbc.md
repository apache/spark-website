# Create a SparkDataFrame representing the database table accessible via JDBC URL

Additional JDBC database connection properties can be set (...) You can
find the JDBC-specific option and parameter documentation for reading
tables via JDBC in
<https://spark.apache.org/docs/latest/sql-data-sources-jdbc.html#data-source-option>Data
Source Option in the version you use.

## Usage

``` r
read.jdbc(
  url,
  tableName,
  partitionColumn = NULL,
  lowerBound = NULL,
  upperBound = NULL,
  numPartitions = 0L,
  predicates = list(),
  ...
)
```

## Arguments

  - url:
    
    JDBC database url of the form `jdbc:subprotocol:subname`

  - tableName:
    
    the name of the table in the external database

  - partitionColumn:
    
    the name of a column of numeric, date, or timestamp type that will
    be used for partitioning.

  - lowerBound:
    
    the minimum value of `partitionColumn` used to decide partition
    stride

  - upperBound:
    
    the maximum value of `partitionColumn` used to decide partition
    stride

  - numPartitions:
    
    the number of partitions, This, along with `lowerBound` (inclusive),
    `upperBound` (exclusive), form partition strides for generated WHERE
    clause expressions used to split the column `partitionColumn`
    evenly. This defaults to SparkContext.defaultParallelism when unset.

  - predicates:
    
    a list of conditions in the where clause; each one defines one
    partition

  - ...:
    
    additional JDBC database connection named properties.

## Value

SparkDataFrame

## Details

Only one of partitionColumn or predicates should be set. Partitions of
the table will be retrieved in parallel based on the `numPartitions` or
by the predicates.

Don't create too many partitions in parallel on a large cluster;
otherwise Spark might crash your external database systems.

## Note

read.jdbc since 2.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
jdbcUrl <- "jdbc:mysql://localhost:3306/databasename"
df <- read.jdbc(jdbcUrl, "table", predicates = list("field<=123"), user = "username")
df2 <- read.jdbc(jdbcUrl, "table2", partitionColumn = "index", lowerBound = 0,
                 upperBound = 10000, user = "username", password = "password")
} # }
```
