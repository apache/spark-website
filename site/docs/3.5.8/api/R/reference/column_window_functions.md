# Window functions for Column operations

Window functions defined for `Column`.

## Usage

``` r
cume_dist(x = "missing")

dense_rank(x = "missing")

lag(x, ...)

lead(x, offset, defaultValue = NULL)

nth_value(x, offset, ...)

ntile(x)

percent_rank(x = "missing")

rank(x, ...)

row_number(x = "missing")

# S4 method for class 'missing'
cume_dist()

# S4 method for class 'missing'
dense_rank()

# S4 method for class 'characterOrColumn'
lag(x, offset = 1, defaultValue = NULL)

# S4 method for class 'characterOrColumn,numeric'
lead(x, offset = 1, defaultValue = NULL)

# S4 method for class 'characterOrColumn,numeric'
nth_value(x, offset, na.rm = FALSE)

# S4 method for class 'numeric'
ntile(x)

# S4 method for class 'missing'
percent_rank()

# S4 method for class 'missing'
rank()

# S4 method for class 'ANY'
rank(x, ...)

# S4 method for class 'missing'
row_number()
```

## Arguments

  - x:
    
    In `lag` and `lead`, it is the column as a character string or a
    Column to compute on. In `ntile`, it is the number of ntile groups.

  - ...:
    
    additional argument(s).

  - offset:
    
    a numeric indicating number of row to use as the value

  - defaultValue:
    
    (optional) default to use when the offset row does not exist.

  - na.rm:
    
    a logical which indicates that the Nth value should skip null in the
    determination of which row to use

## Details

`cume_dist`: Returns the cumulative distribution of values within a
window partition, i.e. the fraction of rows that are below the current
row: (number of values before and including x) / (total number of rows
in the partition). This is equivalent to the `CUME_DIST` function in
SQL. The method should be used with no argument.

`dense_rank`: Returns the rank of rows within a window partition,
without any gaps. The difference between rank and dense\_rank is that
dense\_rank leaves no gaps in ranking sequence when there are ties. That
is, if you were ranking a competition using dense\_rank and had three
people tie for second place, you would say that all three were in second
place and that the next person came in third. Rank would give me
sequential numbers, making the person that came in third place (after
the ties) would register as coming in fifth. This is equivalent to the
`DENSE_RANK` function in SQL. The method should be used with no
argument.

`lag`: Returns the value that is `offset` rows before the current row,
and `defaultValue` if there is less than `offset` rows before the
current row. For example, an `offset` of one will return the previous
row at any given point in the window partition. This is equivalent to
the `LAG` function in SQL.

`lead`: Returns the value that is `offset` rows after the current row,
and `defaultValue` if there is less than `offset` rows after the current
row. For example, an `offset` of one will return the next row at any
given point in the window partition. This is equivalent to the `LEAD`
function in SQL.

`nth_value`: Window function: returns the value that is the `offset`th
row of the window frame\# (counting from 1), and `null` if the size of
window frame is less than `offset` rows.

`ntile`: Returns the ntile group id (from 1 to n inclusive) in an
ordered window partition. For example, if n is 4, the first quarter of
the rows will get value 1, the second quarter will get 2, the third
quarter will get 3, and the last quarter will get 4. This is equivalent
to the `NTILE` function in SQL.

`percent_rank`: Returns the relative rank (i.e. percentile) of rows
within a window partition. This is computed by: (rank of row in its
partition - 1) / (number of rows in the partition - 1). This is
equivalent to the `PERCENT_RANK` function in SQL. The method should be
used with no argument.

`rank`: Returns the rank of rows within a window partition. The
difference between rank and dense\_rank is that dense\_rank leaves no
gaps in ranking sequence when there are ties. That is, if you were
ranking a competition using dense\_rank and had three people tie for
second place, you would say that all three were in second place and that
the next person came in third. Rank would give me sequential numbers,
making the person that came in third place (after the ties) would
register as coming in fifth. This is equivalent to the `RANK` function
in SQL. The method should be used with no argument.

`row_number`: Returns a sequential number starting at 1 within a window
partition. This is equivalent to the `ROW_NUMBER` function in SQL. The
method should be used with no argument.

## Note

cume\_dist since 1.6.0

dense\_rank since 1.6.0

lag since 1.6.0

lead since 1.6.0

nth\_value since 3.1.0

ntile since 1.6.0

percent\_rank since 1.6.0

rank since 1.6.0

row\_number since 1.6.0

## Examples

``` r
if (FALSE) { # \dontrun{
# Dataframe used throughout this doc
df <- createDataFrame(cbind(model = rownames(mtcars), mtcars))
ws <- orderBy(windowPartitionBy("am"), "hp")
tmp <- mutate(df, dist = over(cume_dist(), ws), dense_rank = over(dense_rank(), ws),
              lag = over(lag(df$mpg), ws), lead = over(lead(df$mpg, 1), ws),
              percent_rank = over(percent_rank(), ws),
              rank = over(rank(), ws), row_number = over(row_number(), ws),
              nth_value = over(nth_value(df$mpg, 3), ws))
# Get ntile group id (1-4) for hp
tmp <- mutate(tmp, ntile = over(ntile(4), ws))
head(tmp)} # }
```
