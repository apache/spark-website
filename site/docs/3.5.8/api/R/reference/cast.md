# Casts the column to a different data type.

Casts the column to a different data type.

## Usage

``` r
cast(x, dataType)

# S4 method for class 'Column'
cast(x, dataType)
```

## Arguments

  - x:
    
    a Column.

  - dataType:
    
    a character object describing the target data type. See [Spark Data
    Types](https://spark.apache.org/docs/latest/sparkr.html#data-type-mapping-between-r-and-spark)
    for available data types.

## Note

cast since 1.4.0

## See also

Other column\_func: `alias()`, `between()`, `endsWith()`, `otherwise()`,
`over()`, `startsWith()`, `substr()`

## Examples

``` r
if (FALSE) { # \dontrun{
  cast(df$age, "string")
} # }
```
