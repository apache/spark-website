# Call Java Methods

Call a Java method in the JVM running the Spark driver. The return
values are automatically converted to R objects for simple objects.
Other values are returned as "jobj" which are references to objects on
JVM.

## Usage

``` r
sparkR.callJMethod(x, methodName, ...)
```

## Arguments

  - x:
    
    object to invoke the method on. Should be a "jobj" created by
    newJObject.

  - methodName:
    
    method name to call.

  - ...:
    
    parameters to pass to the Java method.

## Value

the return value of the Java method. Either returned as a R object if it
can be deserialized or returned as a "jobj". See details section for
more.

## Details

This is a low level function to access the JVM directly and should only
be used for advanced use cases. The arguments and return values that are
primitive R types (like integer, numeric, character, lists) are
automatically translated to/from Java types (like Integer, Double,
String, Array). A full list can be found in serialize.R and
deserialize.R in the Apache Spark code base.

## Note

sparkR.callJMethod since 2.0.1

## See also

[sparkR.callJStatic](https://spark.apache.org/docs/3.5.8/api/R/reference/sparkR.callJStatic.md),
[sparkR.newJObject](https://spark.apache.org/docs/3.5.8/api/R/reference/sparkR.newJObject.md)

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
