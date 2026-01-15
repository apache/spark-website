# String functions for Column operations

String functions defined for `Column`.

## Usage

``` r
ascii(x)

base64(x)

bit_length(x, ...)

concat_ws(sep, x, ...)

decode(x, charset)

encode(x, charset)

format_number(y, x)

format_string(format, x, ...)

initcap(x)

instr(y, x)

levenshtein(y, x)

locate(substr, str, ...)

lower(x)

lpad(x, len, pad)

ltrim(x, trimString)

octet_length(x, ...)

overlay(x, replace, pos, ...)

regexp_extract(x, pattern, idx)

regexp_replace(x, pattern, replacement)

repeat_string(x, n)

rpad(x, len, pad)

rtrim(x, trimString)

split_string(x, pattern, ...)

soundex(x)

substring_index(x, delim, count)

translate(x, matchingString, replaceString)

trim(x, trimString)

unbase64(x)

upper(x)

# S4 method for class 'Column'
ascii(x)

# S4 method for class 'Column'
base64(x)

# S4 method for class 'Column'
bit_length(x)

# S4 method for class 'Column,character'
decode(x, charset)

# S4 method for class 'Column,character'
encode(x, charset)

# S4 method for class 'Column'
initcap(x)

# S4 method for class 'Column'
length(x)

# S4 method for class 'Column'
lower(x)

# S4 method for class 'Column,missing'
ltrim(x, trimString)

# S4 method for class 'Column,character'
ltrim(x, trimString)

# S4 method for class 'Column'
octet_length(x)

# S4 method for class 'Column,Column,numericOrColumn'
overlay(x, replace, pos, len = -1)

# S4 method for class 'Column,missing'
rtrim(x, trimString)

# S4 method for class 'Column,character'
rtrim(x, trimString)

# S4 method for class 'Column'
soundex(x)

# S4 method for class 'Column,missing'
trim(x, trimString)

# S4 method for class 'Column,character'
trim(x, trimString)

# S4 method for class 'Column'
unbase64(x)

# S4 method for class 'Column'
upper(x)

# S4 method for class 'Column'
levenshtein(y, x)

# S4 method for class 'Column,character'
instr(y, x)

# S4 method for class 'Column,numeric'
format_number(y, x)

# S4 method for class 'character,Column'
concat_ws(sep, x, ...)

# S4 method for class 'character,Column'
format_string(format, x, ...)

# S4 method for class 'character,Column'
locate(substr, str, pos = 1)

# S4 method for class 'Column,numeric,character'
lpad(x, len, pad)

# S4 method for class 'Column,character,numeric'
regexp_extract(x, pattern, idx)

# S4 method for class 'Column,character,character'
regexp_replace(x, pattern, replacement)

# S4 method for class 'Column,numeric,character'
rpad(x, len, pad)

# S4 method for class 'Column,character,numeric'
substring_index(x, delim, count)

# S4 method for class 'Column,character,character'
translate(x, matchingString, replaceString)

# S4 method for class 'Column,character'
split_string(x, pattern, limit = -1)

# S4 method for class 'Column,numeric'
repeat_string(x, n)
```

## Arguments

  - x:
    
    Column to compute on except in the following methods:
    
      - `instr`: `character`, the substring to check. See 'Details'.
    
      - `format_number`: `numeric`, the number of decimal place to
        format to. See 'Details'.

  - ...:
    
    additional Columns.

  - sep:
    
    separator to use.

  - charset:
    
    character set to use (one of "US-ASCII", "ISO-8859-1", "UTF-8",
    "UTF-16BE", "UTF-16LE", "UTF-16").

  - y:
    
    Column to compute on.

  - format:
    
    a character object of format strings.

  - substr:
    
    a character string to be matched.

  - str:
    
    a Column where matches are sought for each entry.

  - len:
    
    In
    
      - `lpad` the maximum length of each output result.
    
      - `overlay` a number of bytes to replace.

  - pad:
    
    a character string to be padded with.

  - trimString:
    
    a character string to trim with

  - replace:
    
    a Column with replacement.

  - pos:
    
    In
    
      - `locate`: a start position of search.
    
      - `overlay`: a start position for replacement.

  - pattern:
    
    a regular expression.

  - idx:
    
    a group index.

  - replacement:
    
    a character string that a matched `pattern` is replaced with.

  - n:
    
    number of repetitions.

  - delim:
    
    a delimiter string.

  - count:
    
    number of occurrences of `delim` before the substring is returned. A
    positive number means counting from the left, while negative means
    counting from the right.

  - matchingString:
    
    a source string where each character will be translated.

  - replaceString:
    
    a target string where each `matchingString` character will be
    replaced by the character in `replaceString` at the same location,
    if any.

  - limit:
    
    determines the length of the returned array.
    
      - `limit > 0`: length of the array will be at most `limit`
    
      - `limit <= 0`: the returned array can have any length

## Details

`ascii`: Computes the numeric value of the first character of the string
column, and returns the result as an int column.

`base64`: Computes the BASE64 encoding of a binary column and returns it
as a string column. This is the reverse of unbase64.

`bit_length`: Calculates the bit length for the specified string column.

`decode`: Computes the first argument into a string from a binary using
the provided character set.

`encode`: Computes the first argument into a binary from a string using
the provided character set.

`initcap`: Returns a new string column by converting the first letter of
each word to uppercase. Words are delimited by whitespace. For example,
"hello world" will become "Hello World".

`length`: Computes the character length of a string data or number of
bytes of a binary data. The length of string data includes the trailing
spaces. The length of binary data includes binary zeros.

`lower`: Converts a string column to lower case.

`ltrim`: Trims the spaces from left end for the specified string value.
Optionally a `trimString` can be specified.

`octet_length`: Calculates the byte length for the specified string
column.

`overlay`: Overlay the specified portion of `x` with `replace`, starting
from byte position `pos` of `src` and proceeding for `len` bytes.

`rtrim`: Trims the spaces from right end for the specified string value.
Optionally a `trimString` can be specified.

`soundex`: Returns the soundex code for the specified expression.

`trim`: Trims the spaces from both ends for the specified string column.
Optionally a `trimString` can be specified.

`unbase64`: Decodes a BASE64 encoded string column and returns it as a
binary column. This is the reverse of base64.

`upper`: Converts a string column to upper case.

`levenshtein`: Computes the Levenshtein distance of the two given string
columns.

`instr`: Locates the position of the first occurrence of a substring
(`x`) in the given string column (`y`). Returns null if either of the
arguments are null. Note: The position is not zero based, but 1 based
index. Returns 0 if the substring could not be found in the string
column.

`format_number`: Formats numeric column `y` to a format like
'\#,\#\#\#,\#\#\#.\#\#', rounded to `x` decimal places with HALF\_EVEN
round mode, and returns the result as a string column. If `x` is 0, the
result has no decimal point or fractional part. If `x` \< 0, the result
will be null.

`concat_ws`: Concatenates multiple input string columns together into a
single string column, using the given separator.

`format_string`: Formats the arguments in printf-style and returns the
result as a string column.

`locate`: Locates the position of the first occurrence of substr. Note:
The position is not zero based, but 1 based index. Returns 0 if substr
could not be found in str.

`lpad`: Left-padded with pad to a length of len.

`regexp_extract`: Extracts a specific `idx` group identified by a Java
regex, from the specified string column. If the regex did not match, or
the specified group did not match, an empty string is returned.

`regexp_replace`: Replaces all substrings of the specified string value
that match regexp with rep.

`rpad`: Right-padded with pad to a length of len.

`substring_index`: Returns the substring from string (`x`) before
`count` occurrences of the delimiter (`delim`). If `count` is positive,
everything the left of the final delimiter (counting from left) is
returned. If `count` is negative, every to the right of the final
delimiter (counting from the right) is returned. `substring_index`
performs a case-sensitive match when searching for the delimiter.

`translate`: Translates any character in the src by a character in
replaceString. The characters in replaceString is corresponding to the
characters in matchingString. The translate will happen when any
character in the string matching with the character in the
matchingString.

`split_string`: Splits string on regular expression. Equivalent to
`split` SQL function. Optionally a `limit` can be specified

`repeat_string`: Repeats string n times. Equivalent to `repeat` SQL
function.

## Note

ascii since 1.5.0

base64 since 1.5.0

length since 3.3.0

decode since 1.6.0

encode since 1.6.0

initcap since 1.5.0

length since 1.5.0

lower since 1.4.0

ltrim since 1.5.0

ltrim(Column, character) since 2.3.0

length since 3.3.0

overlay since 3.0.0

rtrim since 1.5.0

rtrim(Column, character) since 2.3.0

soundex since 1.5.0

trim since 1.5.0

trim(Column, character) since 2.3.0

unbase64 since 1.5.0

upper since 1.4.0

levenshtein since 1.5.0

instr since 1.5.0

format\_number since 1.5.0

concat\_ws since 1.5.0

format\_string since 1.5.0

locate since 1.5.0

lpad since 1.5.0

regexp\_extract since 1.5.0

regexp\_replace since 1.5.0

rpad since 1.5.0

substring\_index since 1.5.0

translate since 1.5.0

split\_string 2.3.0

repeat\_string since 2.3.0

## Examples

``` r
if (FALSE) { # \dontrun{
# Dataframe used throughout this doc
df <- createDataFrame(as.data.frame(Titanic, stringsAsFactors = FALSE))} # }

if (FALSE) { # \dontrun{
head(select(df, ascii(df$Class), ascii(df$Sex)))} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, s1 = encode(df$Class, "UTF-8"))
str(tmp)
tmp2 <- mutate(tmp, s2 = base64(tmp$s1), s3 = decode(tmp$s1, "UTF-8"),
                    s4 = soundex(tmp$Sex))
head(tmp2)
head(select(tmp2, unbase64(tmp2$s2)))} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, sex_lower = lower(df$Sex), age_upper = upper(df$age),
                  sex_age = concat_ws(" ", lower(df$sex), lower(df$age)))
head(tmp)
tmp2 <- mutate(tmp, s1 = initcap(tmp$sex_lower), s2 = initcap(tmp$sex_age),
                    s3 = reverse(df$Sex))
head(tmp2)} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, SexLpad = lpad(df$Sex, 6, " "), SexRpad = rpad(df$Sex, 7, " "))
head(select(tmp, length(tmp$Sex), length(tmp$SexLpad), length(tmp$SexRpad)))
tmp2 <- mutate(tmp, SexLtrim = ltrim(tmp$SexLpad), SexRtrim = rtrim(tmp$SexRpad),
                    SexTrim = trim(tmp$SexLpad))
head(select(tmp2, length(tmp2$Sex), length(tmp2$SexLtrim),
                  length(tmp2$SexRtrim), length(tmp2$SexTrim)))

tmp <- mutate(df, SexLpad = lpad(df$Sex, 6, "xx"), SexRpad = rpad(df$Sex, 7, "xx"))
head(tmp)} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, d1 = levenshtein(df$Class, df$Sex),
                  d2 = levenshtein(df$Age, df$Sex),
                  d3 = levenshtein(df$Age, df$Age))
head(tmp)} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, s1 = instr(df$Sex, "m"), s2 = instr(df$Sex, "M"),
                  s3 = locate("m", df$Sex), s4 = locate("m", df$Sex, pos = 4))
head(tmp)} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, v1 = df$Freq/3)
head(select(tmp, format_number(tmp$v1, 0), format_number(tmp$v1, 2),
                 format_string("%4.2f %s", tmp$v1, tmp$Sex)), 10)} # }

if (FALSE) { # \dontrun{
# concatenate strings
tmp <- mutate(df, s1 = concat_ws("_", df$Class, df$Sex),
                  s2 = concat_ws("+", df$Class, df$Sex, df$Age, df$Survived))
head(tmp)} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, s1 = regexp_extract(df$Class, "(\\d+)\\w+", 1),
                  s2 = regexp_extract(df$Sex, "^(\\w)\\w+", 1),
                  s3 = regexp_replace(df$Class, "\\D+", ""),
                  s4 = substring_index(df$Sex, "a", 1),
                  s5 = substring_index(df$Sex, "a", -1),
                  s6 = translate(df$Sex, "ale", ""),
                  s7 = translate(df$Sex, "a", "-"))
head(tmp)} # }

if (FALSE) { # \dontrun{
head(select(df, split_string(df$Class, "\\d", 2)))
head(select(df, split_string(df$Sex, "a")))
head(select(df, split_string(df$Class, "\\d")))
# This is equivalent to the following SQL expression
head(selectExpr(df, "split(Class, '\\\\d')"))} # }

if (FALSE) { # \dontrun{
head(select(df, repeat_string(df$Class, 3)))
# This is equivalent to the following SQL expression
head(selectExpr(df, "repeat(Class, 3)"))} # }
```
