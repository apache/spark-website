# Create o.a.s.sql.expressions.UnresolvedNamedLambdaVariable, convert it to o.s.sql.Column and wrap with R Column. Used by higher order functions.

Create o.a.s.sql.expressions.UnresolvedNamedLambdaVariable, convert it
to o.s.sql.Column and wrap with R Column. Used by higher order
functions.

## Usage

``` r
unresolved_named_lambda_var(...)
```

## Arguments

  - ...:
    
    character of length = 1 if length(...) \> 1 then argument is
    interpreted as a nested Column, for example
    `unresolved_named_lambda_var("a", "b", "c")` yields unresolved
    `a.b.c`

## Value

Column object wrapping JVM UnresolvedNamedLambdaVariable
