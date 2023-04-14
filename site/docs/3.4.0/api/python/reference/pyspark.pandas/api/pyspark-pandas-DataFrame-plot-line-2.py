# The following example shows the populations for some animals
# over the years.

df = ps.DataFrame({'pig': [20, 18, 489, 675, 1776],
                   'horse': [4, 25, 281, 600, 1900]},
                  index=[1990, 1997, 2003, 2009, 2014])
df.plot.line()  # doctest: +SKIP
