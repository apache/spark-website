# Get the URL of the SparkUI instance for the current active SparkSession

Get the URL of the SparkUI instance for the current active SparkSession.

## Usage

``` r
sparkR.uiWebUrl()
```

## Value

the SparkUI URL, or NA if it is disabled, or not started.

## Note

sparkR.uiWebUrl since 2.1.1

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
url <- sparkR.uiWebUrl()
} # }
```
