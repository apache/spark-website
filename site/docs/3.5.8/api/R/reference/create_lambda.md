# Create o.a.s.sql.expressions.LambdaFunction corresponding to transformation described by func. Used by higher order functions.

Create o.a.s.sql.expressions.LambdaFunction corresponding to
transformation described by func. Used by higher order functions.

## Usage

``` r
create_lambda(fun)
```

## Arguments

  - fun:
    
    R `function` (unary, binary or ternary) that transforms `Columns`
    into a `Column`

## Value

JVM `LambdaFunction` object
