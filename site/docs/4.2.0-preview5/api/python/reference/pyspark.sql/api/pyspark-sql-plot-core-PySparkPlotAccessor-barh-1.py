from pyspark.sql import SparkSession
spark = SparkSession.builder.getOrCreate()
data = [("A", 10, 1.5), ("B", 30, 2.5), ("C", 20, 3.5)]
columns = ["category", "int_val", "float_val"]
df = spark.createDataFrame(data, columns)
df.plot.barh(x="int_val", y="category")  # doctest: +SKIP
