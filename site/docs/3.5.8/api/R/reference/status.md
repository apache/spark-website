# status

Prints the current status of the query in JSON format.

## Usage

``` r
status(x)

# S4 method for class 'StreamingQuery'
status(x)
```

## Arguments

  - x:
    
    a StreamingQuery.

## Note

status(StreamingQuery) since 2.2.0

experimental

## See also

Other StreamingQuery methods: `awaitTermination()`, `explain()`,
`isActive()`, `lastProgress()`, `queryName()`, `stopQuery()`

## Examples

``` r
if (FALSE)  status(sq)  # \dontrun{}
```
