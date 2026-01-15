# Download and Install Apache Spark to a Local Directory

`install.spark` downloads and installs Spark to a local directory if it
is not found. If SPARK\_HOME is set in the environment, and that
directory is found, that is returned. The Spark version we use is the
same as the SparkR version. Users can specify a desired Hadoop version,
the remote mirror site, and the directory where the package is installed
locally.

## Usage

``` r
install.spark(
  hadoopVersion = "3",
  mirrorUrl = NULL,
  localDir = NULL,
  overwrite = FALSE
)
```

## Arguments

  - hadoopVersion:
    
    Version of Hadoop to install. Default is `"3"`. If `hadoopVersion =
    "without"`, "Hadoop free" build is installed. See ["Hadoop Free"
    Build](https://spark.apache.org/docs/latest/hadoop-provided.html)
    for more information. Other patched version names can also be used.

  - mirrorUrl:
    
    base URL of the repositories to use. The directory layout should
    follow [Apache
    mirrors](https://www.apache.org/dyn/closer.lua/spark/).

  - localDir:
    
    a local directory where Spark is installed. The directory contains
    version-specific folders of Spark packages. Default is path to the
    cache directory:
    
      - Mac OS X: `~/Library/Caches/spark`
    
      - Unix: `$XDG_CACHE_HOME` if defined, otherwise `~/.cache/spark`
    
      - Windows: `%LOCALAPPDATA%\Apache\Spark\Cache`.

  - overwrite:
    
    If `TRUE`, download and overwrite the existing tar file in localDir
    and force re-install Spark (in case the local directory or file is
    corrupted)

## Value

the (invisible) local directory where Spark is found or installed

## Details

The full url of remote file is inferred from `mirrorUrl` and
`hadoopVersion`. `mirrorUrl` specifies the remote path to a Spark
folder. It is followed by a subfolder named after the Spark version
(that corresponds to SparkR), and then the tar filename. The filename is
composed of four parts, i.e. \[Spark version\]-bin-\[Hadoop
version\].tgz. For example, the full path for a Spark 3.3.1 package from
`https://archive.apache.org` has path:
`http://archive.apache.org/dist/spark/spark-3.3.1/spark-3.3.1-bin-hadoop3.tgz`.
For `hadoopVersion = "without"`, \[Hadoop version\] in the filename is
then `without-hadoop`.

## Note

install.spark since 2.1.0

## See also

See available Hadoop versions: [Apache
Spark](https://spark.apache.org/downloads.html)

## Examples

``` r
if (FALSE) { # \dontrun{
install.spark()
} # }
```
