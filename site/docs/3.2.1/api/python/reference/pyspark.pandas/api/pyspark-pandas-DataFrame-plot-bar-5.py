speed = [0.1, 17.5, 40, 48, 52, 69, 88]
lifespan = [2, 8, 70, 1.5, 25, 12, 28]
index = ['snail', 'pig', 'elephant',
         'rabbit', 'giraffe', 'coyote', 'horse']
df = ps.DataFrame({'speed': speed,
                   'lifespan': lifespan}, index=index)
df.plot.bar(y='speed')  # doctest: +SKIP
