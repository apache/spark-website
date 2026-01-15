# Cancel active jobs that have the specified tag.

Cancel active jobs that have the specified tag.

## Usage

``` r
cancelJobsWithTag(tag)
```

## Arguments

  - tag:
    
    The tag to be cancelled. Cannot contain ',' (comma) character.

## Note

cancelJobGroup since 3.5.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
cancelJobsWithTag("myTag")
} # }
```
