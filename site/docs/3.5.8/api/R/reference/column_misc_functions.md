# Miscellaneous functions for Column operations

Miscellaneous functions defined for `Column`.

## Usage

``` r
assert_true(x, errMsg = NULL)

crc32(x)

hash(x, ...)

md5(x)

raise_error(x)

sha1(x)

sha2(y, x)

xxhash64(x, ...)

# S4 method for class 'Column'
crc32(x)

# S4 method for class 'Column'
hash(x, ...)

# S4 method for class 'Column'
xxhash64(x, ...)

# S4 method for class 'Column'
assert_true(x, errMsg = NULL)

# S4 method for class 'characterOrColumn'
raise_error(x)

# S4 method for class 'Column'
md5(x)

# S4 method for class 'Column'
sha1(x)

# S4 method for class 'Column,numeric'
sha2(y, x)
```

## Arguments

  - x:
    
    Column to compute on. In `sha2`, it is one of 224, 256, 384, or 512.

  - errMsg:
    
    (optional) The error message to be thrown.

  - ...:
    
    additional Columns.

  - y:
    
    Column to compute on.

## Details

`crc32`: Calculates the cyclic redundancy check value (CRC32) of a
binary column and returns the value as a bigint.

`hash`: Calculates the hash code of given columns, and returns the
result as an int column.

`xxhash64`: Calculates the hash code of given columns using the 64-bit
variant of the xxHash algorithm, and returns the result as a long
column. The hash computation uses an initial seed of 42.

`assert_true`: Returns null if the input column is true; throws an
exception with the provided error message otherwise.

`raise_error`: Throws an exception with the provided error message.

`md5`: Calculates the MD5 digest of a binary column and returns the
value as a 32 character hex string.

`sha1`: Calculates the SHA-1 digest of a binary column and returns the
value as a 40 character hex string.

`sha2`: Calculates the SHA-2 family of hash functions of a binary column
and returns the value as a hex string. The second argument `x` specifies
the number of bits, and is one of 224, 256, 384, or 512.

## Note

crc32 since 1.5.0

hash since 2.0.0

xxhash64 since 3.0.0

assert\_true since 3.1.0

raise\_error since 3.1.0

md5 since 1.5.0

sha1 since 1.5.0

sha2 since 1.5.0

## Examples

``` r
if (FALSE) { # \dontrun{
# Dataframe used throughout this doc
df <- createDataFrame(cbind(model = rownames(mtcars), mtcars)[, 1:2])
tmp <- mutate(df, v1 = crc32(df$model), v2 = hash(df$model),
                  v3 = hash(df$model, df$mpg), v4 = md5(df$model),
                  v5 = sha1(df$model), v6 = sha2(df$model, 256))
head(tmp)} # }
if (FALSE) { # \dontrun{
tmp <- mutate(df, v1 = assert_true(df$vs < 2),
                  v2 = assert_true(df$vs < 2, "custom error message"),
                  v3 = assert_true(df$vs < 2, df$vs))
head(tmp)} # }
if (FALSE) { # \dontrun{
tmp <- mutate(df, v1 = raise_error("error message"))
head(tmp)} # }
```
