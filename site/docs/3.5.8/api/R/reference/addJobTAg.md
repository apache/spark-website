# Add a tag to be assigned to all the jobs started by this thread.

Add a tag to be assigned to all the jobs started by this thread.

## Usage

``` r
addJobTag(tag)
```

## Arguments

  - tag:
    
    The tag to be added. Cannot contain ',' (comma) character.

## Note

addJobTag since 3.5.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
addJobTag("myJobTag")
} # }
```
