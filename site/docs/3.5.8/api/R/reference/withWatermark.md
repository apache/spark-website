# withWatermark

Defines an event time watermark for this streaming SparkDataFrame. A
watermark tracks a point in time before which we assume no more late
data is going to arrive.

## Usage

``` r
withWatermark(x, eventTime, delayThreshold)

# S4 method for class 'SparkDataFrame,character,character'
withWatermark(x, eventTime, delayThreshold)
```

## Arguments

  - x:
    
    a streaming SparkDataFrame

  - eventTime:
    
    a string specifying the name of the Column that contains the event
    time of the row.

  - delayThreshold:
    
    a string specifying the minimum delay to wait to data to arrive
    late, relative to the latest record that has been processed in the
    form of an interval (e.g. "1 minute" or "5 hours"). NOTE: This
    should not be negative.

## Value

a SparkDataFrame.

## Details

Spark will use this watermark for several purposes:

  - To know when a given time window aggregation can be finalized and
    thus can be emitted when using output modes that do not allow
    updates.

  - To minimize the amount of state that we need to keep for on-going
    aggregations.

The current watermark is computed by looking at the `MAX(eventTime)`
seen across all of the partitions in the query minus a user specified
`delayThreshold`. Due to the cost of coordinating this value across
partitions, the actual watermark used is only guaranteed to be at least
`delayThreshold` behind the actual event time. In some cases we may
still process records that arrive more than `delayThreshold` late.

## Note

withWatermark since 2.3.0

## See also

Other SparkDataFrame functions: `SparkDataFrame-class`, `agg()`,
`alias()`, `arrange()`, `as.data.frame()`,
`attach,SparkDataFrame-method`, `broadcast()`, `cache()`,
`checkpoint()`, `coalesce()`, `collect()`, `colnames()`, `coltypes()`,
`createOrReplaceTempView()`, `crossJoin()`, `cube()`, `dapply()`,
`dapplyCollect()`, `describe()`, `dim()`, `distinct()`, `drop()`,
`dropDuplicates()`, `dropna()`, `dtypes()`, `except()`, `exceptAll()`,
`explain()`, `filter()`, `first()`, `gapply()`, `gapplyCollect()`,
`getNumPartitions()`, `group_by()`, `head()`, `hint()`, `histogram()`,
`insertInto()`, `intersect()`, `intersectAll()`, `isLocal()`,
`isStreaming()`, `join()`, `limit()`, `localCheckpoint()`, `merge()`,
`mutate()`, `ncol()`, `nrow()`, `persist()`, `printSchema()`,
`randomSplit()`, `rbind()`, `rename()`, `repartition()`,
`repartitionByRange()`, `rollup()`, `sample()`, `saveAsTable()`,
`schema()`, `select()`, `selectExpr()`, `show()`, `showDF()`,
`storageLevel()`, `str()`, `subset()`, `summary()`, `take()`,
`toJSON()`, `union()`, `unionAll()`, `unionByName()`, `unpersist()`,
`unpivot()`, `with()`, `withColumn()`, `write.df()`, `write.jdbc()`,
`write.json()`, `write.orc()`, `write.parquet()`, `write.stream()`,
`write.text()`

## Examples

``` r
if (FALSE) { # \dontrun{
sparkR.session()
schema <- structType(structField("time", "timestamp"), structField("value", "double"))
df <- read.stream("json", path = jsonDir, schema = schema, maxFilesPerTrigger = 1)
df <- withWatermark(df, "time", "10 minutes")
} # }
```
