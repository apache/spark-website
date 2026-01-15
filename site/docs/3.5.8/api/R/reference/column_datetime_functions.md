# Date time functions for Column operations

Date time functions defined for `Column`.

## Usage

``` r
current_date(x = "missing")

current_timestamp(x = "missing")

date_trunc(format, x)

dayofmonth(x)

dayofweek(x)

dayofyear(x)

from_unixtime(x, ...)

hour(x)

last_day(x)

make_date(x, y, z)

minute(x)

month(x)

quarter(x)

second(x)

timestamp_seconds(x)

to_date(x, format)

to_timestamp(x, format)

unix_timestamp(x, format)

weekofyear(x)

window(x, ...)

year(x)

# S4 method for class 'Column'
dayofmonth(x)

# S4 method for class 'Column'
dayofweek(x)

# S4 method for class 'Column'
dayofyear(x)

# S4 method for class 'Column'
hour(x)

# S4 method for class 'Column'
last_day(x)

# S4 method for class 'Column,Column,Column'
make_date(x, y, z)

# S4 method for class 'Column'
minute(x)

# S4 method for class 'Column'
month(x)

# S4 method for class 'Column'
quarter(x)

# S4 method for class 'Column'
second(x)

# S4 method for class 'Column,missing'
to_date(x, format)

# S4 method for class 'Column,character'
to_date(x, format)

# S4 method for class 'Column,missing'
to_timestamp(x, format)

# S4 method for class 'Column,character'
to_timestamp(x, format)

# S4 method for class 'Column'
weekofyear(x)

# S4 method for class 'Column'
year(x)

# S4 method for class 'Column'
from_unixtime(x, format = "yyyy-MM-dd HH:mm:ss")

# S4 method for class 'Column'
window(x, windowDuration, slideDuration = NULL, startTime = NULL)

# S4 method for class 'missing,missing'
unix_timestamp(x, format)

# S4 method for class 'Column,missing'
unix_timestamp(x, format)

# S4 method for class 'Column,character'
unix_timestamp(x, format = "yyyy-MM-dd HH:mm:ss")

# S4 method for class 'Column'
trunc(x, format)

# S4 method for class 'character,Column'
date_trunc(format, x)

# S4 method for class 'missing'
current_date()

# S4 method for class 'missing'
current_timestamp()

# S4 method for class 'Column'
timestamp_seconds(x)
```

## Arguments

  - x:
    
    Column to compute on. In `window`, it must be a time Column of
    `TimestampType`. This is not used with `current_date` and
    `current_timestamp`

  - format:
    
    The format for the given dates or timestamps in Column `x`. See the
    format used in the following methods:
    
      - `to_date` and `to_timestamp`: it is the string to use to parse
        Column `x` to DateType or TimestampType.
    
      - `trunc`: it is the string to use to specify the truncation
        method. 'year', 'yyyy', 'yy' to truncate by year, or 'month',
        'mon', 'mm' to truncate by month Other options are: 'week',
        'quarter'
    
      - `date_trunc`: it is similar with `trunc`'s but additionally
        supports 'day', 'dd' to truncate by day, 'microsecond',
        'millisecond', 'second', 'minute' and 'hour'

  - ...:
    
    additional argument(s).

  - y:
    
    Column to compute on.

  - z:
    
    Column to compute on.

  - windowDuration:
    
    a string specifying the width of the window, e.g. '1 second', '1 day
    12 hours', '2 minutes'. Valid interval strings are 'week', 'day',
    'hour', 'minute', 'second', 'millisecond', 'microsecond'. Note that
    the duration is a fixed length of time, and does not vary over time
    according to a calendar. For example, '1 day' always means
    86,400,000 milliseconds, not a calendar day.

  - slideDuration:
    
    a string specifying the sliding interval of the window. Same format
    as `windowDuration`. A new window will be generated every
    `slideDuration`. Must be less than or equal to the `windowDuration`.
    This duration is likewise absolute, and does not vary according to a
    calendar.

  - startTime:
    
    the offset with respect to 1970-01-01 00:00:00 UTC with which to
    start window intervals. For example, in order to have hourly
    tumbling windows that start 15 minutes past the hour, e.g.
    12:15-13:15, 13:15-14:15... provide `startTime` as `"15 minutes"`.

## Details

`dayofmonth`: Extracts the day of the month as an integer from a given
date/timestamp/string.

`dayofweek`: Extracts the day of the week as an integer from a given
date/timestamp/string. Ranges from 1 for a Sunday through to 7 for a
Saturday

`dayofyear`: Extracts the day of the year as an integer from a given
date/timestamp/string.

`hour`: Extracts the hour as an integer from a given
date/timestamp/string.

`last_day`: Given a date column, returns the last day of the month which
the given date belongs to. For example, input "2015-07-27" returns
"2015-07-31" since July 31 is the last day of the month in July 2015.

`make_date`: Create date from year, month and day fields.

`minute`: Extracts the minute as an integer from a given
date/timestamp/string.

`month`: Extracts the month as an integer from a given
date/timestamp/string.

`quarter`: Extracts the quarter as an integer from a given
date/timestamp/string.

`second`: Extracts the second as an integer from a given
date/timestamp/string.

`to_date`: Converts the column into a DateType. You may optionally
specify a format according to the rules in: [Datetime
Pattern](https://spark.apache.org/docs/latest/sql-ref-datetime-pattern.html)
If the string cannot be parsed according to the specified format (or
default), the value of the column will be null. By default, it follows
casting rules to a DateType if the format is omitted (equivalent to
`cast(df$x, "date")`).

`to_timestamp`: Converts the column into a TimestampType. You may
optionally specify a format according to the rules in: [Datetime
Pattern](https://spark.apache.org/docs/latest/sql-ref-datetime-pattern.html)
If the string cannot be parsed according to the specified format (or
default), the value of the column will be null. By default, it follows
casting rules to a TimestampType if the format is omitted (equivalent to
`cast(df$x, "timestamp")`).

`weekofyear`: Extracts the week number as an integer from a given
date/timestamp/string. A week is considered to start on a Monday and
week 1 is the first week with more than 3 days, as defined by ISO 8601

`year`: Extracts the year as an integer from a given
date/timestamp/string.

`from_unixtime`: Converts the number of seconds from unix epoch
(1970-01-01 00:00:00 UTC) to a string representing the timestamp of that
moment in the current system time zone in the JVM in the given format.
See [Datetime
Pattern](https://spark.apache.org/docs/latest/sql-ref-datetime-pattern.html)
for available options.

`window`: Bucketizes rows into one or more time windows given a
timestamp specifying column. Window starts are inclusive but the window
ends are exclusive, e.g. 12:05 will be in the window \[12:05,12:10) but
not in \[12:00,12:05). Windows can support microsecond precision.
Windows in the order of months are not supported. It returns an output
column of struct called 'window' by default with the nested columns
'start' and 'end'

`unix_timestamp`: Gets current Unix timestamp in seconds.

`trunc`: Returns date truncated to the unit specified by the format.

`date_trunc`: Returns timestamp truncated to the unit specified by the
format.

`current_date`: Returns the current date at the start of query
evaluation as a date column. All calls of current\_date within the same
query return the same value.

`current_timestamp`: Returns the current timestamp at the start of query
evaluation as a timestamp column. All calls of current\_timestamp within
the same query return the same value.

`timestamp_seconds`: Converts the number of seconds from the Unix epoch
(1970-01-01T00:00:00Z) to a timestamp.

## Note

dayofmonth since 1.5.0

dayofweek since 2.3.0

dayofyear since 1.5.0

hour since 1.5.0

last\_day since 1.5.0

make\_date since 3.3.0

minute since 1.5.0

month since 1.5.0

quarter since 1.5.0

second since 1.5.0

to\_date(Column) since 1.5.0

to\_date(Column, character) since 2.2.0

to\_timestamp(Column) since 2.2.0

to\_timestamp(Column, character) since 2.2.0

weekofyear since 1.5.0

year since 1.5.0

from\_unixtime since 1.5.0

window since 2.0.0

unix\_timestamp since 1.5.0

unix\_timestamp(Column) since 1.5.0

unix\_timestamp(Column, character) since 1.5.0

trunc since 2.3.0

date\_trunc since 2.3.0

current\_date since 2.3.0

current\_timestamp since 2.3.0

timestamp\_seconds since 3.1.0

## See also

Other data time functions: `column_datetime_diff_functions`

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
head(select(df, df$time, year(df$time), quarter(df$time), month(df$time),
            dayofmonth(df$time), dayofweek(df$time), dayofyear(df$time), weekofyear(df$time)))
head(agg(groupBy(df, year(df$time)), count(df$y), avg(df$y)))
head(agg(groupBy(df, month(df$time)), avg(df$y)))} # }

if (FALSE) { # \dontrun{
head(select(df, hour(df$time), minute(df$time), second(df$time)))
head(agg(groupBy(df, dayofmonth(df$time)), avg(df$y)))
head(agg(groupBy(df, hour(df$time)), avg(df$y)))
head(agg(groupBy(df, minute(df$time)), avg(df$y)))} # }

if (FALSE) { # \dontrun{
head(select(df, df$time, last_day(df$time), month(df$time)))} # }

if (FALSE) { # \dontrun{
df <- createDataFrame(
  list(list(2021, 10, 22), list(2021, 13, 1),
       list(2021, 2, 29), list(2020, 2, 29)),
  list("year", "month", "day")
)
tmp <- head(select(df, make_date(df$year, df$month, df$day)))
head(tmp)} # }

if (FALSE) { # \dontrun{
tmp <- createDataFrame(data.frame(time_string = dts))
tmp2 <- mutate(tmp, date1 = to_date(tmp$time_string),
                   date2 = to_date(tmp$time_string, "yyyy-MM-dd"),
                   date3 = date_format(tmp$time_string, "MM/dd/yyy"),
                   time1 = to_timestamp(tmp$time_string),
                   time2 = to_timestamp(tmp$time_string, "yyyy-MM-dd"))
head(tmp2)} # }

if (FALSE) { # \dontrun{
tmp <- mutate(df, to_unix = unix_timestamp(df$time),
                  to_unix2 = unix_timestamp(df$time, 'yyyy-MM-dd HH'),
                  from_unix = from_unixtime(unix_timestamp(df$time)),
                  from_unix2 = from_unixtime(unix_timestamp(df$time), 'yyyy-MM-dd HH:mm'),
                  timestamp_from_unix = timestamp_seconds(unix_timestamp(df$time)))
head(tmp)} # }

if (FALSE) { # \dontrun{
# One minute windows every 15 seconds 10 seconds after the minute, e.g. 09:00:10-09:01:10,
# 09:00:25-09:01:25, 09:00:40-09:01:40, ...
window(df$time, "1 minute", "15 seconds", "10 seconds")

# One minute tumbling windows 15 seconds after the minute, e.g. 09:00:15-09:01:15,
# 09:01:15-09:02:15...
window(df$time, "1 minute", startTime = "15 seconds")

# Thirty-second windows every 10 seconds, e.g. 09:00:00-09:00:30, 09:00:10-09:00:40, ...
window(df$time, "30 seconds", "10 seconds")} # }

if (FALSE) { # \dontrun{
head(select(df, df$time, trunc(df$time, "year"), trunc(df$time, "yy"),
           trunc(df$time, "month"), trunc(df$time, "mon")))} # }

if (FALSE) { # \dontrun{
head(select(df, df$time, date_trunc("hour", df$time), date_trunc("minute", df$time),
            date_trunc("week", df$time), date_trunc("quarter", df$time)))} # }
if (FALSE) { # \dontrun{
head(select(df, current_date(), current_timestamp()))} # }
```
