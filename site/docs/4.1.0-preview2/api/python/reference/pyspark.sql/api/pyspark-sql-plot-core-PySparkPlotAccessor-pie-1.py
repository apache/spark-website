from pyspark.sql import SparkSession
spark = SparkSession.builder.getOrCreate()
from datetime import datetime
data = [
    (3, 5, 20, datetime(2018, 1, 31)),
    (2, 5, 42, datetime(2018, 2, 28)),
    (3, 6, 28, datetime(2018, 3, 31)),
    (9, 12, 62, datetime(2018, 4, 30))
]
columns = ["sales", "signups", "visits", "date"]
df = spark.createDataFrame(data, columns)
df.plot.pie(x='date', y='sales')  # doctest: +SKIP
