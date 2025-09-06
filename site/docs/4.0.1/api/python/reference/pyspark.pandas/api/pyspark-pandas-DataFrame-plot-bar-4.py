from plotly.subplots import make_subplots
speed = [0.1, 17.5, 40, 48, 52, 69, 88]
lifespan = [2, 8, 70, 1.5, 25, 12, 28]
index = ['snail', 'pig', 'elephant',
         'rabbit', 'giraffe', 'coyote', 'horse']
df = ps.DataFrame({'speed': speed,
                   'lifespan': lifespan}, index=index)
fig = (make_subplots(rows=2, cols=1)
       .add_trace(df.plot.bar(y='speed').data[0], row=1, col=1)
       .add_trace(df.plot.bar(y='speed').data[0], row=1, col=1)
       .add_trace(df.plot.bar(y='lifespan').data[0], row=2, col=1))
fig  # doctest: +SKIP
