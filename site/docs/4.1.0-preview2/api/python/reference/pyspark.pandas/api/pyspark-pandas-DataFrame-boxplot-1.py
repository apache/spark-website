data = np.random.randn(25, 4)
df = ps.DataFrame(data, columns=list('ABCD'))
df['A'].plot.box()  # doctest: +SKIP
