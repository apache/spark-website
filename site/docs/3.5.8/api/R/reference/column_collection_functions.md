# Collection functions for Column operations

Collection functions defined for `Column`.

## Usage

``` r
array_aggregate(x, initialValue, merge, ...)

array_contains(x, value)

array_distinct(x)

array_except(x, y)

array_exists(x, f)

array_forall(x, f)

array_filter(x, f)

array_intersect(x, y)

array_join(x, delimiter, ...)

array_max(x)

array_min(x)

array_position(x, value)

array_remove(x, value)

array_repeat(x, count)

array_sort(x, ...)

array_transform(x, f)

arrays_overlap(x, y)

array_union(x, y)

arrays_zip(x, ...)

arrays_zip_with(x, y, f)

concat(x, ...)

element_at(x, extraction)

explode(x)

explode_outer(x)

flatten(x)

from_json(x, schema, ...)

from_csv(x, schema, ...)

map_concat(x, ...)

map_entries(x)

map_filter(x, f)

map_from_arrays(x, y)

map_from_entries(x)

map_keys(x)

map_values(x)

map_zip_with(x, y, f)

posexplode(x)

posexplode_outer(x)

reverse(x)

schema_of_csv(x, ...)

schema_of_json(x, ...)

shuffle(x)

size(x)

slice(x, start, length)

sort_array(x, asc = TRUE)

transform_keys(x, f)

transform_values(x, f)

to_json(x, ...)

to_csv(x, ...)

# S4 method for class 'Column'
reverse(x)

# S4 method for class 'Column'
to_json(x, ...)

# S4 method for class 'Column'
to_csv(x, ...)

# S4 method for class 'Column'
concat(x, ...)

# S4 method for class 'Column,characterOrstructTypeOrColumn'
from_json(x, schema, as.json.array = FALSE, ...)

# S4 method for class 'characterOrColumn'
schema_of_json(x, ...)

# S4 method for class 'Column,characterOrstructTypeOrColumn'
from_csv(x, schema, ...)

# S4 method for class 'characterOrColumn'
schema_of_csv(x, ...)

# S4 method for class 'characterOrColumn,Column,function'
array_aggregate(x, initialValue, merge, finish = NULL)

# S4 method for class 'Column'
array_contains(x, value)

# S4 method for class 'Column'
array_distinct(x)

# S4 method for class 'Column,Column'
array_except(x, y)

# S4 method for class 'characterOrColumn,function'
array_exists(x, f)

# S4 method for class 'characterOrColumn,function'
array_filter(x, f)

# S4 method for class 'characterOrColumn,function'
array_forall(x, f)

# S4 method for class 'Column,Column'
array_intersect(x, y)

# S4 method for class 'Column,character'
array_join(x, delimiter, nullReplacement = NULL)

# S4 method for class 'Column'
array_max(x)

# S4 method for class 'Column'
array_min(x)

# S4 method for class 'Column'
array_position(x, value)

# S4 method for class 'Column'
array_remove(x, value)

# S4 method for class 'Column,numericOrColumn'
array_repeat(x, count)

# S4 method for class 'Column'
array_sort(x, comparator = NULL)

# S4 method for class 'characterOrColumn,function'
array_transform(x, f)

# S4 method for class 'Column,Column'
arrays_overlap(x, y)

# S4 method for class 'Column,Column'
array_union(x, y)

# S4 method for class 'Column'
arrays_zip(x, ...)

# S4 method for class 'characterOrColumn,characterOrColumn,function'
arrays_zip_with(x, y, f)

# S4 method for class 'Column'
shuffle(x)

# S4 method for class 'Column'
flatten(x)

# S4 method for class 'Column'
map_concat(x, ...)

# S4 method for class 'Column'
map_entries(x)

# S4 method for class 'characterOrColumn,function'
map_filter(x, f)

# S4 method for class 'Column,Column'
map_from_arrays(x, y)

# S4 method for class 'Column'
map_from_entries(x)

# S4 method for class 'Column'
map_keys(x)

# S4 method for class 'characterOrColumn,function'
transform_keys(x, f)

# S4 method for class 'characterOrColumn,function'
transform_values(x, f)

# S4 method for class 'Column'
map_values(x)

# S4 method for class 'characterOrColumn,characterOrColumn,function'
map_zip_with(x, y, f)

# S4 method for class 'Column'
element_at(x, extraction)

# S4 method for class 'Column'
explode(x)

# S4 method for class 'Column'
size(x)

# S4 method for class 'Column'
slice(x, start, length)

# S4 method for class 'Column'
sort_array(x, asc = TRUE)

# S4 method for class 'Column'
posexplode(x)

# S4 method for class 'Column'
explode_outer(x)

# S4 method for class 'Column'
posexplode_outer(x)
```

## Arguments

  - x:
    
    Column to compute on. Note the difference in the following methods:
    
      - `to_json`: it is the column containing the struct, array of the
        structs, the map or array of maps.
    
      - `to_csv`: it is the column containing the struct.
    
      - `from_json`: it is the column containing the JSON string.
    
      - `from_csv`: it is the column containing the CSV string.

  - initialValue:
    
    a `Column` used as the initial value in `array_aggregate`

  - merge:
    
    a `function` a binary function `(Column, Column) -> Column` used in
    `array_aggregate`to merge values (the second argument) into
    accumulator (the first argument).

  - ...:
    
    additional argument(s).
    
      - `to_json`, `from_json` and `schema_of_json`: this contains
        additional named properties to control how it is converted and
        accepts the same options as the JSON data source. You can find
        the JSON-specific options for reading/writing JSON files in
        <https://spark.apache.org/docs/latest/sql-data-sources-json.html#data-source-option>Data
        Source Option in the version you use.
    
      - `to_json`: it supports the "pretty" option which enables pretty
        JSON generation.
    
      - `to_csv`, `from_csv` and `schema_of_csv`: this contains
        additional named properties to control how it is converted and
        accepts the same options as the CSV data source. You can find
        the CSV-specific options for reading/writing CSV files in
        <https://spark.apache.org/docs/latest/sql-data-sources-csv.html#data-source-option>Data
        Source Option in the version you use.
    
      - `arrays_zip`, this contains additional Columns of arrays to be
        merged.
    
      - `map_concat`, this contains additional Columns of maps to be
        unioned.

  - value:
    
    A value to compute on.
    
      - `array_contains`: a value to be checked if contained in the
        column.
    
      - `array_position`: a value to locate in the given array.
    
      - `array_remove`: a value to remove in the given array.

  - y:
    
    Column to compute on.

  - f:
    
    a `function` mapping from `Column(s)` to `Column`.
    
      - `array_exists`
    
      - `array_filter` the Boolean `function` used to filter the data.
        Either unary or binary. In the latter case the second argument
        is the index in the array (0-based).
    
      - `array_forall` the Boolean unary `function` used to filter the
        data.
    
      - `array_transform` a `function` used to transform the data.
        Either unary or binary. In the latter case the second argument
        is the index in the array (0-based).
    
      - `arrays_zip_with`
    
      - `map_zip_with`
    
      - `map_filter` the Boolean binary `function` used to filter the
        data. The first argument is the key, the second argument is the
        value.
    
      - `transform_keys` a binary `function` used to transform the data.
        The first argument is the key, the second argument is the value.
    
      - `transform_values` a binary `function` used to transform the
        data. The first argument is the key, the second argument is the
        value.

  - delimiter:
    
    a character string that is used to concatenate the elements of
    column.

  - count:
    
    a Column or constant determining the number of repetitions.

  - extraction:
    
    index to check for in array or key to check for in map

  - schema:
    
      - `from_json`: a structType object to use as the schema to use
        when parsing the JSON string. Since Spark 2.3, the DDL-formatted
        string is also supported for the schema. Since Spark 3.0,
        `schema_of_json` or the DDL-formatted string literal can also be
        accepted.
    
      - `from_csv`: a structType object, DDL-formatted string or
        `schema_of_csv`

  - start:
    
    the starting index

  - length:
    
    the length of the slice

  - asc:
    
    a logical flag indicating the sorting order. TRUE, sorting is in
    ascending order. FALSE, sorting is in descending order.

  - as.json.array:
    
    indicating if input string is JSON array of objects or a single
    object.

  - finish:
    
    an unary `function` `(Column) -> Column` used to apply final
    transformation on the accumulated data in `array_aggregate`.

  - nullReplacement:
    
    an optional character string that is used to replace the Null
    values.

  - comparator:
    
    an optional binary (`(Column, Column) -> Column`) `function` which
    is used to compare the elements of the array. The comparator will
    take two arguments representing two elements of the array. It
    returns a negative integer, 0, or a positive integer as the first
    element is less than, equal to, or greater than the second element.
    If the comparator function returns null, the function will fail and
    raise an error.

## Details

`reverse`: Returns a reversed string or an array with reverse order of
elements.

`to_json`: Converts a column containing a `structType`, a `mapType` or
an `arrayType` into a Column of JSON string. Resolving the Column can
fail if an unsupported type is encountered.

`to_csv`: Converts a column containing a `structType` into a Column of
CSV string. Resolving the Column can fail if an unsupported type is
encountered.

`concat`: Concatenates multiple input columns together into a single
column. The function works with strings, binary and compatible array
columns.

`from_json`: Parses a column containing a JSON string into a Column of
`structType` with the specified `schema` or array of `structType` if
`as.json.array` is set to `TRUE`. If the string is unparseable, the
Column will contain the value NA.

`schema_of_json`: Parses a JSON string and infers its schema in DDL
format.

`from_csv`: Parses a column containing a CSV string into a Column of
`structType` with the specified `schema`. If the string is unparseable,
the Column will contain the value NA.

`schema_of_csv`: Parses a CSV string and infers its schema in DDL
format.

`array_aggregate` Applies a binary operator to an initial state and all
elements in the array, and reduces this to a single state. The final
state is converted into the final result by applying a finish function.

`array_contains`: Returns null if the array is null, true if the array
contains the value, and false otherwise.

`array_distinct`: Removes duplicate values from the array.

`array_except`: Returns an array of the elements in the first array but
not in the second array, without duplicates. The order of elements in
the result is not determined.

`array_exists` Returns whether a predicate holds for one or more
elements in the array.

`array_filter` Returns an array of elements for which a predicate holds
in a given array.

`array_forall` Returns whether a predicate holds for every element in
the array.

`array_intersect`: Returns an array of the elements in the intersection
of the given two arrays, without duplicates.

`array_join`: Concatenates the elements of column using the delimiter.
Null values are replaced with nullReplacement if set, otherwise they are
ignored.

`array_max`: Returns the maximum value of the array.

`array_min`: Returns the minimum value of the array.

`array_position`: Locates the position of the first occurrence of the
given value in the given array. Returns NA if either of the arguments
are NA. Note: The position is not zero based, but 1 based index. Returns
0 if the given value could not be found in the array.

`array_remove`: Removes all elements that equal to element from the
given array.

`array_repeat`: Creates an array containing `x` repeated the number of
times given by `count`.

`array_sort`: Sorts the input array in ascending order. The elements of
the input array must be orderable. NA elements will be placed at the end
of the returned array.

`array_transform` Returns an array of elements after applying a
transformation to each element in the input array.

`arrays_overlap`: Returns true if the input arrays have at least one
non-null element in common. If not and both arrays are non-empty and any
of them contains a null, it returns null. It returns false otherwise.

`array_union`: Returns an array of the elements in the union of the
given two arrays, without duplicates.

`arrays_zip`: Returns a merged array of structs in which the N-th struct
contains all N-th values of input arrays.

`arrays_zip_with` Merge two given arrays, element-wise, into a single
array using a function. If one array is shorter, nulls are appended at
the end to match the length of the longer array, before applying the
function.

`shuffle`: Returns a random permutation of the given array.

`flatten`: Creates a single array from an array of arrays. If a
structure of nested arrays is deeper than two levels, only one level of
nesting is removed.

`map_concat`: Returns the union of all the given maps.

`map_entries`: Returns an unordered array of all entries in the given
map.

`map_filter` Returns a map whose key-value pairs satisfy a predicate.

`map_from_arrays`: Creates a new map column. The array in the first
column is used for keys. The array in the second column is used for
values. All elements in the array for key should not be null.

`map_from_entries`: Returns a map created from the given array of
entries.

`map_keys`: Returns an unordered array containing the keys of the map.

`transform_keys` Applies a function to every key-value pair in a map and
returns a map with the results of those applications as the new keys for
the pairs.

`transform_values` Applies a function to every key-value pair in a map
and returns a map with the results of those applications as the new
values for the pairs.

`map_values`: Returns an unordered array containing the values of the
map.

`map_zip` Merge two given maps, key-wise into a single map using a
function.

`element_at`: Returns element of array at given index in `extraction` if
`x` is array. Returns value for the given key in `extraction` if `x` is
map. Note: The position is not zero based, but 1 based index.

`explode`: Creates a new row for each element in the given array or map
column. Uses the default column name `col` for elements in the array and
`key` and `value` for elements in the map unless specified otherwise.

`size`: Returns length of array or map.

`slice`: Returns an array containing all the elements in x from the
index start (array indices start at 1, or from the end if start is
negative) with the specified length.

`sort_array`: Sorts the input array in ascending or descending order
according to the natural ordering of the array elements. NA elements
will be placed at the beginning of the returned array in ascending order
or at the end of the returned array in descending order.

`posexplode`: Creates a new row for each element with position in the
given array or map column. Uses the default column name `pos` for
position, and `col` for elements in the array and `key` and `value` for
elements in the map unless specified otherwise.

`explode`: Creates a new row for each element in the given array or map
column. Unlike `explode`, if the array/map is `null` or empty then
`null` is produced. Uses the default column name `col` for elements in
the array and `key` and `value` for elements in the map unless specified
otherwise.

`posexplode_outer`: Creates a new row for each element with position in
the given array or map column. Unlike `posexplode`, if the array/map is
`null` or empty then the row (`null`, `null`) is produced. Uses the
default column name `pos` for position, and `col` for elements in the
array and `key` and `value` for elements in the map unless specified
otherwise.

## Note

reverse since 1.5.0

to\_json since 2.2.0

to\_csv since 3.0.0

concat since 1.5.0

from\_json since 2.2.0

schema\_of\_json since 3.0.0

from\_csv since 3.0.0

schema\_of\_csv since 3.0.0

array\_aggregate since 3.1.0

array\_contains since 1.6.0

array\_distinct since 2.4.0

array\_except since 2.4.0

array\_exists since 3.1.0

array\_filter since 3.1.0

array\_forall since 3.1.0

array\_intersect since 2.4.0

array\_join since 2.4.0

array\_max since 2.4.0

array\_min since 2.4.0

array\_position since 2.4.0

array\_remove since 2.4.0

array\_repeat since 2.4.0

array\_sort since 2.4.0

array\_transform since 3.1.0

arrays\_overlap since 2.4.0

array\_union since 2.4.0

arrays\_zip since 2.4.0

zip\_with since 3.1.0

shuffle since 2.4.0

flatten since 2.4.0

map\_concat since 3.0.0

map\_entries since 3.0.0

map\_filter since 3.1.0

map\_from\_arrays since 2.4.0

map\_from\_entries since 3.0.0

map\_keys since 2.3.0

transform\_keys since 3.1.0

transform\_values since 3.1.0

map\_values since 2.3.0

map\_zip\_with since 3.1.0

element\_at since 2.4.0

explode since 1.5.0

size since 1.5.0

slice since 2.4.0

sort\_array since 1.6.0

posexplode since 2.1.0

explode\_outer since 2.3.0

posexplode\_outer since 2.3.0

## Examples

``` r
if (FALSE) { # \dontrun{
# Dataframe used throughout this doc
df <- createDataFrame(cbind(model = rownames(mtcars), mtcars))
tmp <- mutate(df, v1 = create_array(df$mpg, df$cyl, df$hp))
head(select(tmp, array_contains(tmp$v1, 21), size(tmp$v1), shuffle(tmp$v1)))
head(select(tmp, array_max(tmp$v1), array_min(tmp$v1), array_distinct(tmp$v1)))
head(select(tmp, array_position(tmp$v1, 21), array_repeat(df$mpg, 3), array_sort(tmp$v1)))
head(select(tmp, array_sort(tmp$v1, function(x, y) coalesce(cast(y - x, "integer"), lit(0L)))))
head(select(tmp, reverse(tmp$v1), array_remove(tmp$v1, 21)))
head(select(tmp, array_transform("v1", function(x) x * 10)))
head(select(tmp, array_exists("v1", function(x) x > 120)))
head(select(tmp, array_forall("v1", function(x) x >= 8.0)))
head(select(tmp, array_filter("v1", function(x) x < 10)))
head(select(tmp, array_aggregate("v1", lit(0), function(acc, y) acc + y)))
head(select(
  tmp,
  array_aggregate("v1", lit(0), function(acc, y) acc + y, function(acc) acc / 10)))
tmp2 <- mutate(tmp, v2 = explode(tmp$v1))
head(tmp2)
head(select(tmp, posexplode(tmp$v1)))
head(select(tmp, slice(tmp$v1, 2L, 2L)))
head(select(tmp, sort_array(tmp$v1)))
head(select(tmp, sort_array(tmp$v1, asc = FALSE)))
tmp3 <- mutate(df, v3 = create_map(df$model, df$cyl))
head(select(tmp3, map_entries(tmp3$v3), map_keys(tmp3$v3), map_values(tmp3$v3)))
head(select(tmp3, element_at(tmp3$v3, "Valiant"), map_concat(tmp3$v3, tmp3$v3)))
head(select(tmp3, transform_keys("v3", function(k, v) upper(k))))
head(select(tmp3, transform_values("v3", function(k, v) v * 10)))
head(select(tmp3, map_filter("v3", function(k, v) v < 42)))
tmp4 <- mutate(df, v4 = create_array(df$mpg, df$cyl), v5 = create_array(df$cyl, df$hp))
head(select(tmp4, concat(tmp4$v4, tmp4$v5), arrays_overlap(tmp4$v4, tmp4$v5)))
head(select(tmp4, array_except(tmp4$v4, tmp4$v5), array_intersect(tmp4$v4, tmp4$v5)))
head(select(tmp4, array_union(tmp4$v4, tmp4$v5)))
head(select(tmp4, arrays_zip(tmp4$v4, tmp4$v5)))
head(select(tmp, concat(df$mpg, df$cyl, df$hp)))
head(select(tmp4, arrays_zip_with(tmp4$v4, tmp4$v5, function(x, y) x * y)))
tmp5 <- mutate(df, v6 = create_array(df$model, df$model))
head(select(tmp5, array_join(tmp5$v6, "#"), array_join(tmp5$v6, "#", "NULL")))
tmp6 <- mutate(df, v7 = create_array(create_array(df$model, df$model)))
head(select(tmp6, flatten(tmp6$v7)))
tmp7 <- mutate(df, v8 = create_array(df$model, df$cyl), v9 = create_array(df$model, df$hp))
head(select(tmp7, arrays_zip_with("v8", "v9", function(x, y) (x * y) %% 3)))
head(select(tmp7, map_from_arrays(tmp7$v8, tmp7$v9)))
tmp8 <- mutate(df, v10 = create_array(struct(df$model, df$cyl)))
head(select(tmp8, map_from_entries(tmp8$v10)))} # }

if (FALSE) { # \dontrun{
# Converts a struct into a JSON object
df2 <- sql("SELECT named_struct('date', cast('2000-01-01' as date)) as d")
select(df2, to_json(df2$d, dateFormat = 'dd/MM/yyyy'))

# Converts an array of structs into a JSON array
df2 <- sql("SELECT array(named_struct('name', 'Bob'), named_struct('name', 'Alice')) as people")
df2 <- mutate(df2, people_json = to_json(df2$people))

# Converts a map into a JSON object
df2 <- sql("SELECT map('name', 'Bob') as people")
df2 <- mutate(df2, people_json = to_json(df2$people))

# Converts an array of maps into a JSON array
df2 <- sql("SELECT array(map('name', 'Bob'), map('name', 'Alice')) as people")
df2 <- mutate(df2, people_json = to_json(df2$people))

# Converts a map into a pretty JSON object
df2 <- sql("SELECT map('name', 'Bob') as people")
df2 <- mutate(df2, people_json = to_json(df2$people, pretty = TRUE))} # }

if (FALSE) { # \dontrun{
# Converts a struct into a CSV string
df2 <- sql("SELECT named_struct('date', cast('2000-01-01' as date)) as d")
select(df2, to_csv(df2$d, dateFormat = 'dd/MM/yyyy'))} # }

if (FALSE) { # \dontrun{
df2 <- sql("SELECT named_struct('date', cast('2000-01-01' as date)) as d")
df2 <- mutate(df2, d2 = to_json(df2$d, dateFormat = 'dd/MM/yyyy'))
schema <- structType(structField("date", "string"))
head(select(df2, from_json(df2$d2, schema, dateFormat = 'dd/MM/yyyy')))
df2 <- sql("SELECT named_struct('name', 'Bob') as people")
df2 <- mutate(df2, people_json = to_json(df2$people))
schema <- structType(structField("name", "string"))
head(select(df2, from_json(df2$people_json, schema)))
head(select(df2, from_json(df2$people_json, "name STRING")))
head(select(df2, from_json(df2$people_json, schema_of_json(head(df2)$people_json))))} # }

if (FALSE) { # \dontrun{
json <- "{\"name\":\"Bob\"}"
df <- sql("SELECT * FROM range(1)")
head(select(df, schema_of_json(json)))} # }

if (FALSE) { # \dontrun{
csv <- "Amsterdam,2018"
df <- sql(paste0("SELECT '", csv, "' as csv"))
schema <- "city STRING, year INT"
head(select(df, from_csv(df$csv, schema)))
head(select(df, from_csv(df$csv, structType(schema))))
head(select(df, from_csv(df$csv, schema_of_csv(csv))))} # }

if (FALSE) { # \dontrun{
csv <- "Amsterdam,2018"
df <- sql("SELECT * FROM range(1)")
head(select(df, schema_of_csv(csv)))} # }

if (FALSE) { # \dontrun{
df2 <- createDataFrame(data.frame(
  id = c(1, 2, 3), text = c("a,b,c", NA, "d,e")
))

head(select(df2, df2$id, explode_outer(split_string(df2$text, ","))))
head(select(df2, df2$id, posexplode_outer(split_string(df2$text, ","))))} # }
```
