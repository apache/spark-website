# queryName

Returns the user-specified name of the query. This is specified in
`write.stream(df, queryName = "query")`. This name, if set, must be
unique across all active queries.

## Usage

``` r
queryName(x)

# S4 method for class 'StreamingQuery'
queryName(x)
```

## Arguments

  - x:
    
    a StreamingQuery.

## Value

The name of the query, or NULL if not specified.

## Note

queryName(StreamingQuery) since 2.2.0

experimental

## See also

[write.stream](https://spark.apache.org/docs/3.5.8/api/R/reference/write.stream.md)

Other StreamingQuery methods: `awaitTermination()`, `explain()`,
`isActive()`, `lastProgress()`, `status()`, `stopQuery()`

## Examples

``` r
if (FALSE)  queryName(sq)  # \dontrun{}
```
