# Invalidates and refreshes all the cached data and metadata of the given table

Invalidates and refreshes all the cached data and metadata of the given
table. For performance reasons, Spark SQL or the external data source
library it uses might cache certain metadata about a table, such as the
location of blocks. When those change outside of Spark SQL, users should
call this function to invalidate the cache.

## Usage

``` r
refreshTable(tableName)
```

## Arguments

  - tableName:
    
    the qualified or unqualified name that designates a table. If no
    database identifier is provided, it refers to a table in the current
    database. The table name can be fully qualified with catalog name
    since 3.4.0.

## Details

If this table is cached as an InMemoryRelation, drop the original cached
version and make the new version cached lazily.

## Note

since 2.2.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
refreshTable("spark_catalog.default.myTable")
} # }
```
