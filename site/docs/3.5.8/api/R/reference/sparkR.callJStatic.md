# Call Static Java Methods

Call a static method in the JVM running the Spark driver. The return
value is automatically converted to R objects for simple objects. Other
values are returned as "jobj" which are references to objects on JVM.

## Usage

``` r
sparkR.callJStatic(x, methodName, ...)
```

## Arguments

  - x:
    
    fully qualified Java class name that contains the static method to
    invoke.

  - methodName:
    
    name of static method to invoke.

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

sparkR.callJStatic since 2.0.1

## See also

[sparkR.callJMethod](https://spark.apache.org/docs/3.5.8/api/R/reference/sparkR.callJMethod.md),
[sparkR.newJObject](https://spark.apache.org/docs/3.5.8/api/R/reference/sparkR.newJObject.md)

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session() # Need to have a Spark JVM running before calling callJStatic
sparkR.callJStatic("java.lang.System", "currentTimeMillis")
sparkR.callJStatic("java.lang.System", "getProperty", "java.home")
} # }
```
