from pyspark.sql import SparkSession
spark = SparkSession.builder.getOrCreate()
data = [
    ("A", 50, 55),
    ("B", 55, 60),
    ("C", 60, 65),
    ("D", 65, 70),
    ("E", 70, 75),
    ("F", 10, 15),
    ("G", 85, 90),
    ("H", 5, 150),
]
columns = ["student", "math_score", "english_score"]
df = spark.createDataFrame(data, columns)
df.plot.box()  # doctest: +SKIP
