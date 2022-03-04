df = ps.DataFrame({'lab': ['A', 'B', 'C'], 'val': [10, 30, 20]})
df.plot.barh(x='lab', y='val')  # doctest: +SKIP
