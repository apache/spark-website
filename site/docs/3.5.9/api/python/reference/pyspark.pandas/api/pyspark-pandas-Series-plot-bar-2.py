df = ps.DataFrame({'lab': ['A', 'B', 'C'], 'val': [10, 30, 20]})
df.plot.bar(x='lab', y='val')  # doctest: +SKIP
