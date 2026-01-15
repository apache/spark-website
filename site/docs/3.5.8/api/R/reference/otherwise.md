# otherwise

If values in the specified column are null, returns the value. Can be
used in conjunction with `when` to specify a default value for
expressions.

## Usage

``` r
otherwise(x, value)

# S4 method for class 'Column'
otherwise(x, value)
```

## Arguments

  - x:
    
    a Column.

  - value:
    
    value to replace when the corresponding entry in `x` is NA. Can be a
    single value or a Column.

## Note

otherwise since 1.5.0

## See also

Other column\_func: `alias()`, `between()`, `cast()`, `endsWith()`,
`over()`, `startsWith()`, `substr()`
