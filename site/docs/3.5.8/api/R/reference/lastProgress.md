# lastProgress

Prints the most recent progress update of this streaming query in JSON
format.

## Usage

``` r
lastProgress(x)

# S4 method for class 'StreamingQuery'
lastProgress(x)
```

## Arguments

  - x:
    
    a StreamingQuery.

## Note

lastProgress(StreamingQuery) since 2.2.0

experimental

## See also

Other StreamingQuery methods: `awaitTermination()`, `explain()`,
`isActive()`, `queryName()`, `status()`, `stopQuery()`

## Examples

``` r
if (FALSE)  lastProgress(sq)  # \dontrun{}
```
