# isActive

Returns TRUE if this query is actively running.

## Usage

``` r
isActive(x)

# S4 method for class 'StreamingQuery'
isActive(x)
```

## Arguments

  - x:
    
    a StreamingQuery.

## Value

TRUE if query is actively running, FALSE if stopped.

## Note

isActive(StreamingQuery) since 2.2.0

experimental

## See also

Other StreamingQuery methods: `awaitTermination()`, `explain()`,
`lastProgress()`, `queryName()`, `status()`, `stopQuery()`

## Examples

``` r
if (FALSE)  isActive(sq)  # \dontrun{}
```
