from pyspark.sql import SparkSession
spark = SparkSession.builder.getOrCreate()
data = [(5.1, 3.5, 0), (4.9, 3.0, 0), (7.0, 3.2, 1), (6.4, 3.2, 1), (5.9, 3.0, 2)]
columns = ["length", "width", "species"]
df = spark.createDataFrame(data, columns)
df.plot.hist(bins=4)  # doctest: +SKIP
