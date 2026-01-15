# Date time arithmetic functions for Column operations

Date time arithmetic functions defined for `Column`.

## Usage

``` r
add_months(y, x)

datediff(y, x)

date_add(y, x)

date_format(y, x)

date_sub(y, x)

from_utc_timestamp(y, x)

months_between(y, x, ...)

next_day(y, x)

to_utc_timestamp(y, x)

# S4 method for class 'Column'
datediff(y, x)

# S4 method for class 'Column'
months_between(y, x, roundOff = NULL)

# S4 method for class 'Column,character'
date_format(y, x)

# S4 method for class 'Column,character'
from_utc_timestamp(y, x)

# S4 method for class 'Column,character'
next_day(y, x)

# S4 method for class 'Column,character'
to_utc_timestamp(y, x)

# S4 method for class 'Column,numeric'
add_months(y, x)

# S4 method for class 'Column,numeric'
date_add(y, x)

# S4 method for class 'Column,numeric'
date_sub(y, x)
```

## Arguments

  - y:
    
    Column to compute on.

  - x:
    
    For class `Column`, it is the column used to perform arithmetic
    operations with column `y`. For class `numeric`, it is the number of
    months or days to be added to or subtracted from `y`. For class
    `character`, it is
    
      - `date_format`: date format specification.
    
      - `from_utc_timestamp`, `to_utc_timestamp`: A string detailing the
        time zone ID that the input should be adjusted to. It should be
        in the format of either region-based zone IDs or zone offsets.
        Region IDs must have the form 'area/city', such as
        'America/Los\_Angeles'. Zone offsets must be in the format
        (+|-)HH:mm', for example '-08:00' or '+01:00'. Also 'UTC' and
        'Z' are supported as aliases of '+00:00'. Other short names are
        not recommended to use because they can be ambiguous.
    
      - `next_day`: day of the week string.

  - ...:
    
    additional argument(s).
    
      - `months_between`, this contains an optional parameter to specify
        the the result is rounded off to 8 digits.

  - roundOff:
    
    an optional parameter to specify if the result is rounded off to 8
    digits

## Details

`datediff`: Returns the number of days from `y` to `x`. If `y` is later
than `x` then the result is positive.

`months_between`: Returns number of months between dates `y` and `x`. If
`y` is later than `x`, then the result is positive. If `y` and `x` are
on the same day of month, or both are the last day of month, time of day
will be ignored. Otherwise, the difference is calculated based on 31
days per month, and rounded to 8 digits.

`date_format`: Converts a date/timestamp/string to a value of string in
the format specified by the date format given by the second argument. A
pattern could be for instance `dd.MM.yyyy` and could return a string
like '18.03.1993'. All pattern letters of
`java.time.format.DateTimeFormatter` can be used. Note: Use when ever
possible specialized functions like `year`. These benefit from a
specialized implementation.

`from_utc_timestamp`: This is a common function for databases supporting
TIMESTAMP WITHOUT TIMEZONE. This function takes a timestamp which is
timezone-agnostic, and interprets it as a timestamp in UTC, and renders
that timestamp as a timestamp in the given time zone. However, timestamp
in Spark represents number of microseconds from the Unix epoch, which is
not timezone-agnostic. So in Spark this function just shift the
timestamp value from UTC timezone to the given timezone. This function
may return confusing result if the input is a string with timezone, e.g.
(`2018-03-13T06:18:23+00:00`). The reason is that, Spark firstly cast
the string to timestamp according to the timezone in the string, and
finally display the result by converting the timestamp to string
according to the session local timezone.

`next_day`: Given a date column, returns the first date which is later
than the value of the date column that is on the specified day of the
week. For example, `next_day("2015-07-27", "Sunday")` returns 2015-08-02
because that is the first Sunday after 2015-07-27. Day of the week
parameter is case insensitive, and accepts first three or two
characters: "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun".

`to_utc_timestamp`: This is a common function for databases supporting
TIMESTAMP WITHOUT TIMEZONE. This function takes a timestamp which is
timezone-agnostic, and interprets it as a timestamp in the given
timezone, and renders that timestamp as a timestamp in UTC. However,
timestamp in Spark represents number of microseconds from the Unix
epoch, which is not timezone-agnostic. So in Spark this function just
shift the timestamp value from the given timezone to UTC timezone. This
function may return confusing result if the input is a string with
timezone, e.g. (`2018-03-13T06:18:23+00:00`). The reason is that, Spark
firstly cast the string to timestamp according to the timezone in the
string, and finally display the result by converting the timestamp to
string according to the session local timezone.

`add_months`: Returns the date that is numMonths (`x`) after startDate
(`y`).

`date_add`: Returns the date that is `x` days after.

`date_sub`: Returns the date that is `x` days before.

## Note

datediff since 1.5.0

months\_between since 1.5.0

date\_format since 1.5.0

from\_utc\_timestamp since 1.5.0

next\_day since 1.5.0

to\_utc\_timestamp since 1.5.0

add\_months since 1.5.0

date\_add since 1.5.0

date\_sub since 1.5.0

## See also

Other data time functions: `timestamp_seconds()`

## Examples

``` r
if (FALSE) { # \dontrun{
dts <- c("2005-01-02 18:47:22",
        "2005-12-24 16:30:58",
        "2005-10-28 07:30:05",
        "2005-12-28 07:01:05",
        "2006-01-24 00:01:10")
y <- c(2.0, 2.2, 3.4, 2.5, 1.8)
df <- createDataFrame(data.frame(time = as.POSIXct(dts), y = y))} # }

if (FALSE) { # \dontrun{
tmp <- createDataFrame(data.frame(time_string1 = as.POSIXct(dts),
             time_string2 = as.POSIXct(dts[order(runif(length(dts)))])))
tmp2 <- mutate(tmp, datediff = datediff(tmp$time_string1, tmp$time_string2),
               monthdiff = months_between(tmp$time_string1, tmp$time_string2))
head(tmp2)} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, from_utc = from_utc_timestamp(df$time, "PST"),
                 to_utc = to_utc_timestamp(df$time, "PST"))
head(tmp)} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, t1 = add_months(df$time, 1),
                  t2 = date_add(df$time, 2),
                  t3 = date_sub(df$time, 3),
                  t4 = next_day(df$time, "Sun"))
head(tmp)} # }
```
