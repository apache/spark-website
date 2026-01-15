# Create Java Objects

Create a new Java object in the JVM running the Spark driver. The return
value is automatically converted to an R object for simple objects.
Other values are returned as a "jobj" which is a reference to an object
on JVM.

## Usage

``` r
sparkR.newJObject(x, ...)
```

## Arguments

  - x:
    
    fully qualified Java class name.

  - ...:
    
    arguments to be passed to the constructor.

## Value

the object created. Either returned as a R object if it can be
deserialized or returned as a "jobj". See details section for more.

## Details

This is a low level function to access the JVM directly and should only
be used for advanced use cases. The arguments and return values that are
primitive R types (like integer, numeric, character, lists) are
automatically translated to/from Java types (like Integer, Double,
String, Array). A full list can be found in serialize.R and
deserialize.R in the Apache Spark code base.

## Note

sparkR.newJObject since 2.0.1

## See also

[sparkR.callJMethod](https://spark.apache.org/docs/3.5.8/api/R/reference/sparkR.callJMethod.md),
[sparkR.callJStatic](https://spark.apache.org/docs/3.5.8/api/R/reference/sparkR.callJStatic.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session() # Need to have a Spark JVM running before calling newJObject
# Create a Java ArrayList and populate it
jarray <- sparkR.newJObject("java.util.ArrayList")
sparkR.callJMethod(jarray, "add", 42L)
sparkR.callJMethod(jarray, "get", 0L) # Will print 42
} # }
```
