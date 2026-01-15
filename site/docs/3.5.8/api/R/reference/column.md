# S4 class that represents a SparkDataFrame column

The column class supports unary, binary operations on SparkDataFrame
columns

Returns a Column based on the given column name.

## Usage

``` r
column(x)

# S4 method for class 'jobj'
column(x)

# S4 method for class 'character'
column(x)
```

## Arguments

  - x:
    
    Character column name.

## Slots

  - `jc`:
    
    reference to JVM SparkDataFrame column

## Note

Column since 1.4.0

column since 1.6.0

## See also

Other non-aggregate functions: `column_nonaggregate_functions`, `not()`

## Examples

``` r
if (FALSE) column("name") # \dontrun{}
```
