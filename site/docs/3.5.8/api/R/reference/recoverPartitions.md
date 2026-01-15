# Recovers all the partitions in the directory of a table and update the catalog

Recovers all the partitions in the directory of a table and update the
catalog. The name should reference a partitioned table, and not a view.

## Usage

``` r
recoverPartitions(tableName)
```

## Arguments

  - tableName:
    
    the qualified or unqualified name that designates a table. If no
    database identifier is provided, it refers to a table in the current
    database. The table name can be fully qualified with catalog name
    since 3.4.0.

## Note

since 2.2.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
recoverPartitions("spark_catalog.default.myTable")
} # }
```
