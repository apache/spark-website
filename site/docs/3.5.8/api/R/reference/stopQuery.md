# stopQuery

Stops the execution of this query if it is running. This method blocks
until the execution is stopped.

## Usage

``` r
stopQuery(x)

# S4 method for class 'StreamingQuery'
stopQuery(x)
```

## Arguments

  - x:
    
    a StreamingQuery.

## Note

stopQuery(StreamingQuery) since 2.2.0

experimental

## See also

Other StreamingQuery methods: `awaitTermination()`, `explain()`,
`isActive()`, `lastProgress()`, `queryName()`, `status()`

## Examples

``` r
if (FALSE)  stopQuery(sq)  # \dontrun{}
```
