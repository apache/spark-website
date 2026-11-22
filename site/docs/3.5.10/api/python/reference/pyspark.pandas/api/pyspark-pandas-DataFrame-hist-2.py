df = pd.DataFrame(
    np.random.randint(1, 7, 6000),
    columns=['one'])
df['two'] = df['one'] + np.random.randint(1, 7, 6000)
df = ps.from_pandas(df)
df.plot.hist(bins=12, alpha=0.5)  # doctest: +SKIP
