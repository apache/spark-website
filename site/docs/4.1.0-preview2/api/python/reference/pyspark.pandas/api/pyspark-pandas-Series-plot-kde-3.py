s = ps.Series([1, 2, 2.5, 3, 3.5, 4, 5])
s.plot.kde(ind=[1, 2, 3, 4, 5], bw_method=0.3)  # doctest: +SKIP
