# Non-aggregate functions for Column operations

Non-aggregate functions defined for `Column`.

## Usage

``` r
when(condition, value)

bitwise_not(x)

bitwiseNOT(x)

create_array(x, ...)

create_map(x, ...)

expr(x)

greatest(x, ...)

input_file_name(x = "missing")

isnan(x)

least(x, ...)

lit(x)

monotonically_increasing_id(x = "missing")

nanvl(y, x)

negate(x)

negative(x)

positive(x)

rand(seed)

randn(seed)

spark_partition_id(x = "missing")

struct(x, ...)

# S4 method for class 'ANY'
lit(x)

# S4 method for class 'Column'
bitwise_not(x)

# S4 method for class 'Column'
bitwiseNOT(x)

# S4 method for class 'Column'
coalesce(x, ...)

# S4 method for class 'Column'
isnan(x)

# S4 method for class 'Column'
is.nan(x)

# S4 method for class 'missing'
monotonically_increasing_id()

# S4 method for class 'Column'
negate(x)

# S4 method for class 'Column'
negative(x)

# S4 method for class 'Column'
positive(x)

# S4 method for class 'missing'
spark_partition_id()

# S4 method for class 'characterOrColumn'
struct(x, ...)

# S4 method for class 'Column'
nanvl(y, x)

# S4 method for class 'Column'
greatest(x, ...)

# S4 method for class 'Column'
least(x, ...)

# S4 method for class 'character'
expr(x)

# S4 method for class 'missing'
rand(seed)

# S4 method for class 'numeric'
rand(seed)

# S4 method for class 'missing'
randn(seed)

# S4 method for class 'numeric'
randn(seed)

# S4 method for class 'Column'
when(condition, value)

# S4 method for class 'Column'
ifelse(test, yes, no)

# S4 method for class 'Column'
create_array(x, ...)

# S4 method for class 'Column'
create_map(x, ...)

# S4 method for class 'missing'
input_file_name()
```

## Arguments

  - condition:
    
    the condition to test on. Must be a Column expression.

  - value:
    
    result expression.

  - x:
    
    Column to compute on. In `lit`, it is a literal value or a Column.
    In `expr`, it contains an expression character object to be parsed.

  - ...:
    
    additional Columns.

  - y:
    
    Column to compute on.

  - seed:
    
    a random seed. Can be missing.

  - test:
    
    a Column expression that describes the condition.

  - yes:
    
    return values for `TRUE` elements of test.

  - no:
    
    return values for `FALSE` elements of test.

## Details

`lit`: A new Column is created to represent the literal value. If the
parameter is a Column, it is returned unchanged.

`bitwise_not`: Computes bitwise NOT.

`bitwiseNOT`: Computes bitwise NOT.

`coalesce`: Returns the first column that is not NA, or NA if all inputs
are.

`isnan`: Returns true if the column is NaN.

`is.nan`: Alias for isnan.

`monotonically_increasing_id`: Returns a column that generates
monotonically increasing 64-bit integers. The generated ID is guaranteed
to be monotonically increasing and unique, but not consecutive. The
current implementation puts the partition ID in the upper 31 bits, and
the record number within each partition in the lower 33 bits. The
assumption is that the SparkDataFrame has less than 1 billion
partitions, and each partition has less than 8 billion records. As an
example, consider a SparkDataFrame with two partitions, each with 3
records. This expression would return the following IDs: 0, 1, 2,
8589934592 (1L \<\< 33), 8589934593, 8589934594. This is equivalent to
the MONOTONICALLY\_INCREASING\_ID function in SQL. The method should be
used with no argument. Note: the function is non-deterministic because
its result depends on partition IDs.

`negate`: Unary minus, i.e. negate the expression.

`negative`: Alias for `negate`.

`positive`: Unary plus, i.e. return the expression.

`spark_partition_id`: Returns the partition ID as a SparkDataFrame
column. Note that this is nondeterministic because it depends on data
partitioning and task scheduling. This is equivalent to the
`SPARK_PARTITION_ID` function in SQL.

`struct`: Creates a new struct column that composes multiple input
columns.

`nanvl`: Returns the first column (`y`) if it is not NaN, or the second
column (`x`) if the first column is NaN. Both inputs should be floating
point columns (DoubleType or FloatType).

`greatest`: Returns the greatest value of the list of column names,
skipping null values. This function takes at least 2 parameters. It will
return null if all parameters are null.

`least`: Returns the least value of the list of column names, skipping
null values. This function takes at least 2 parameters. It will return
null if all parameters are null.

`expr`: Parses the expression string into the column that it represents,
similar to `SparkDataFrame.selectExpr`

`rand`: Generates a random column with independent and identically
distributed (i.i.d.) samples uniformly distributed in \[0.0, 1.0). Note:
the function is non-deterministic in general case.

`randn`: Generates a column with independent and identically distributed
(i.i.d.) samples from the standard normal distribution. Note: the
function is non-deterministic in general case.

`when`: Evaluates a list of conditions and returns one of multiple
possible result expressions. For unmatched expressions null is returned.

`ifelse`: Evaluates a list of conditions and returns `yes` if the
conditions are satisfied. Otherwise `no` is returned for unmatched
conditions.

`create_array`: Creates a new array column. The input columns must all
have the same data type.

`create_map`: Creates a new map column. The input columns must be
grouped as key-value pairs, e.g. (key1, value1, key2, value2, ...). The
key columns must all have the same data type, and can't be null. The
value columns must all have the same data type.

`input_file_name`: Creates a string column with the input file name for
a given row. The method should be used with no argument.

## Note

lit since 1.5.0

bitwise\_not since 3.2.0

bitwiseNOT since 1.5.0

coalesce(Column) since 2.1.1

isnan since 2.0.0

is.nan since 2.0.0

negate since 1.5.0

negative since 3.5.0

positive since 3.5.0

spark\_partition\_id since 2.0.0

struct since 1.6.0

nanvl since 1.5.0

greatest since 1.5.0

least since 1.5.0

expr since 1.5.0

rand since 1.5.0

rand(numeric) since 1.5.0

randn since 1.5.0

randn(numeric) since 1.5.0

when since 1.5.0

ifelse since 1.5.0

create\_array since 2.3.0

create\_map since 2.3.0

input\_file\_name since 2.3.0

## See also

coalesce,SparkDataFrame-method

Other non-aggregate functions: `column()`, `not()`

## Examples

``` r
if (FALSE) { # \dontrun{
# Dataframe used throughout this doc
df <- createDataFrame(cbind(model = rownames(mtcars), mtcars))} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, v1 = lit(df$mpg), v2 = lit("x"), v3 = lit("2015-01-01"),
                  v4 = negate(df$mpg), v5 = expr('length(model)'),
                  v6 = greatest(df$vs, df$am), v7 = least(df$vs, df$am),
                  v8 = column("mpg"))
head(tmp)} # }

if (FALSE) { # \dontrun{
head(select(df, bitwise_not(cast(df$vs, "int"))))} # }

if (FALSE) head(select(df, monotonically_increasing_id())) # \dontrun{}

if (FALSE) head(select(df, spark_partition_id())) # \dontrun{}

if (FALSE) { # \dontrun{
tmp <- mutate(df, v1 = struct(df$mpg, df$cyl), v2 = struct("hp", "wt", "vs"),
                  v3 = create_array(df$mpg, df$cyl, df$hp),
                  v4 = create_map(lit("x"), lit(1.0), lit("y"), lit(-1.0)))
head(tmp)} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, r1 = rand(), r2 = rand(10), r3 = randn(), r4 = randn(10))
head(tmp)} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, mpg_na = otherwise(when(df$mpg > 20, df$mpg), lit(NaN)),
                  mpg2 = ifelse(df$mpg > 20 & df$am > 0, 0, 1),
                  mpg3 = ifelse(df$mpg > 20, df$mpg, 20.0))
head(tmp)
tmp <- mutate(tmp, ind_na1 = is.nan(tmp$mpg_na), ind_na2 = isnan(tmp$mpg_na))
head(select(tmp, coalesce(tmp$mpg_na, tmp$mpg)))
head(select(tmp, nanvl(tmp$mpg_na, tmp$hp)))} # }

if (FALSE) { # \dontrun{
tmp <- read.text("README.md")
head(select(tmp, input_file_name()))} # }
```
