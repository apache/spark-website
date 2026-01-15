# Assigns a group ID to all the jobs started by this thread until the group ID is set to a different value or cleared.

Assigns a group ID to all the jobs started by this thread until the
group ID is set to a different value or cleared.

## Usage

``` r
setJobGroup(groupId, description, interruptOnCancel)
```

## Arguments

  - groupId:
    
    the ID to be assigned to job groups.

  - description:
    
    description for the job group ID.

  - interruptOnCancel:
    
    flag to indicate if the job is interrupted on job cancellation.

## Note

setJobGroup since 1.5.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
setJobGroup("myJobGroup", "My job group description", TRUE)
} # }
```
