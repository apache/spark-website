# awaitTermination

Waits for the termination of the query, either by `stopQuery` or by an
error.

## Usage

``` r
awaitTermination(x, timeout = NULL)

# S4 method for class 'StreamingQuery'
awaitTermination(x, timeout = NULL)
```

## Arguments

  - x:
    
    a StreamingQuery.

  - timeout:
    
    time to wait in milliseconds, if omitted, wait indefinitely until
    `stopQuery` is called or an error has occurred.

## Value

TRUE if query has terminated within the timeout period; nothing if
timeout is not specified.

## Details

If the query has terminated, then all subsequent calls to this method
will return TRUE immediately.

## Note

awaitTermination(StreamingQuery) since 2.2.0

experimental

## See also

Other StreamingQuery methods: `explain()`, `isActive()`,
`lastProgress()`, `queryName()`, `status()`, `stopQuery()`

## Examples

``` r
if (FALSE)  awaitTermination(sq, 10000)  # \dontrun{}
```
