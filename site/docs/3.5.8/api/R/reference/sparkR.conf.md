# Get Runtime Config from the current active SparkSession

Get Runtime Config from the current active SparkSession. To change
SparkSession Runtime Config, please see `sparkR.session()`.

## Usage

``` r
sparkR.conf(key, defaultValue)
```

## Arguments

  - key:
    
    (optional) The key of the config to get, if omitted, all config is
    returned

  - defaultValue:
    
    (optional) The default value of the config to return if they config
    is not set, if omitted, the call fails if the config key is not set

## Value

a list of config values with keys as their names

## Note

sparkR.conf since 2.0.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
allConfigs <- sparkR.conf()
masterValue <- unlist(sparkR.conf("spark.master"))
namedConfig <- sparkR.conf("spark.executor.memory", "0g")
} # }
```
