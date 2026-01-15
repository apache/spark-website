# Compute the hashCode of an object

Java-style function to compute the hashCode for the given object.
Returns an integer value.

## Usage

``` r
hashCode(key)
```

## Arguments

  - key:
    
    the object to be hashed

## Value

the hash code as an integer

## Details

This only works for integer, numeric and character types right now.

## Note

hashCode since 1.4.0

## Examples

``` r
if (FALSE) { # \dontrun{
hashCode(1L) # 1
hashCode(1.0) # 1072693248
hashCode("1") # 49
} # }
```
