df = ps.DataFrame({
    'x': [1, 2, 2.5, 3, 3.5, 4, 5],
    'y': [4, 4, 4.5, 5, 5.5, 6, 6],
})
df.plot.kde(bw_method=0.3)  # doctest: +SKIP
