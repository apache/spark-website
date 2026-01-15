# windowOrderBy

Creates a WindowSpec with the ordering defined.

## Usage

``` r
windowOrderBy(col, ...)

# S4 method for class 'character'
windowOrderBy(col, ...)

# S4 method for class 'Column'
windowOrderBy(col, ...)
```

## Arguments

  - col:
    
    A column name or Column by which rows are ordered within windows.

  - ...:
    
    Optional column names or Columns in addition to col, by which rows
    are ordered within windows.

## Note

windowOrderBy(character) since 2.0.0

windowOrderBy(Column) since 2.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
  ws <- windowOrderBy("key1", "key2")
  df1 <- select(df, over(lead("value", 1), ws))

  ws <- windowOrderBy(df$key1, df$key2)
  df1 <- select(df, over(lead("value", 1), ws))
} # }
```
