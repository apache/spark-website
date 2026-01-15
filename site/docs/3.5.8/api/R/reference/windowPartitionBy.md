# windowPartitionBy

Creates a WindowSpec with the partitioning defined.

## Usage

``` r
windowPartitionBy(col, ...)

# S4 method for class 'character'
windowPartitionBy(col, ...)

# S4 method for class 'Column'
windowPartitionBy(col, ...)
```

## Arguments

  - col:
    
    A column name or Column by which rows are partitioned to windows.

  - ...:
    
    Optional column names or Columns in addition to col, by which rows
    are partitioned to windows.

## Note

windowPartitionBy(character) since 2.0.0

windowPartitionBy(Column) since 2.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
  ws <- orderBy(windowPartitionBy("key1", "key2"), "key3")
  df1 <- select(df, over(lead("value", 1), ws))

  ws <- orderBy(windowPartitionBy(df$key1, df$key2), df$key3)
  df1 <- select(df, over(lead("value", 1), ws))
} # }
```
