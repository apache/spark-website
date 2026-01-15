# Set the behavior of job cancellation from jobs started in this thread.

Set the behavior of job cancellation from jobs started in this thread.

## Usage

``` r
setInterruptOnCancel(interruptOnCancel)
```

## Arguments

  - interruptOnCancel:
    
    If true, then job cancellation will result in \`Thread.interrupt()\`
    being called on the job's executor threads. This is useful to help
    ensure that the tasks are actually stopped in a timely manner, but
    is off by default due to HDFS-1208, where HDFS may respond to
    Thread.interrupt() by marking nodes as dead.

## Note

cancelJobGroup since 3.5.0

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
setInterruptOnCancel(true)
} # }
```
