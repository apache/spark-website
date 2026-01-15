# Remove a tag previously added to be assigned to all the jobs started by this thread. Noop if such a tag was not added earlier.

Remove a tag previously added to be assigned to all the jobs started by
this thread. Noop if such a tag was not added earlier.

## Usage

``` r
removeJobTag(tag)
```

## Arguments

  - tag:
    
    The tag to be removed. Cannot contain ',' (comma) character.

## Note

cancelJobGroup since 3.5.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
removeJobTag("myJobTag")
} # }
```
