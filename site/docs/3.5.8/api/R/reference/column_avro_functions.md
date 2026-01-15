# Avro processing functions for Column operations

Avro processing functions defined for `Column`.

## Usage

``` r
from_avro(x, ...)

to_avro(x, ...)

# S4 method for class 'characterOrColumn'
from_avro(x, jsonFormatSchema, ...)

# S4 method for class 'characterOrColumn'
to_avro(x, jsonFormatSchema = NULL)
```

## Arguments

  - x:
    
    Column to compute on.

  - ...:
    
    additional argument(s) passed as parser options.

  - jsonFormatSchema:
    
    character Avro schema in JSON string format

## Details

`from_avro` Converts a binary column of Avro format into its
corresponding catalyst value. The specified schema must match the read
data, otherwise the behavior is undefined: it may fail or return
arbitrary result. To deserialize the data with a compatible and evolved
schema, the expected Avro schema can be set via the option avroSchema.

`to_avro` Converts a column into binary of Avro format.

## Note

Avro is built-in but external data source module since Spark 2.4. Please
deploy the application as per [the deployment
section](https://spark.apache.org/docs/latest/sql-data-sources-avro.html#deploying)
of "Apache Avro Data Source Guide".

from\_avro since 3.1.0

to\_avro since 3.1.0

## Examples

``` r
if (FALSE) { # \dontrun{
df <- createDataFrame(iris)
schema <- paste(
  c(
    '{"type": "record", "namespace": "example.avro", "name": "Iris", "fields": [',
    '{"type": ["double", "null"], "name": "Sepal_Length"},',
    '{"type": ["double", "null"], "name": "Sepal_Width"},',
    '{"type": ["double", "null"], "name": "Petal_Length"},',
    '{"type": ["double", "null"], "name": "Petal_Width"},',
    '{"type": ["string", "null"], "name": "Species"}]}'
  ),
  collapse="\\n"
)

df_serialized <- select(
  df,
  alias(to_avro(alias(struct(column("*")), "fields")), "payload")
)

df_deserialized <- select(
  df_serialized,
  from_avro(df_serialized$payload, schema)
)

head(df_deserialized)
} # }
```
