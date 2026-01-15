# substr

An expression that returns a substring.

## Usage

``` r
# S4 method for class 'Column'
substr(x, start, stop)
```

## Arguments

  - x:
    
    a Column.

  - start:
    
    starting position. It should be 1-base.

  - stop:
    
    ending position.

## Note

substr since 1.4.0

## See also

Other column\_func: `alias()`, `between()`, `cast()`, `endsWith()`,
`otherwise()`, `over()`, `startsWith()`

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(list(list(a="abcdef")))
collect(select(df, substr(df$a, 1, 4))) # the result is `abcd`.
collect(select(df, substr(df$a, 2, 4))) # the result is `bcd`.
} # }
```
