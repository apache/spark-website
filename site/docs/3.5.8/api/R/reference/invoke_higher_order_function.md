# Invokes higher order function expression identified by name, (relative to o.a.s.sql.catalyst.expressions)

Invokes higher order function expression identified by name, (relative
to o.a.s.sql.catalyst.expressions)

## Usage

``` r
invoke_higher_order_function(name, cols, funs)
```

## Arguments

  - name:
    
    character

  - cols:
    
    list of character or Column objects

  - funs:
    
    list of named list(fun = ..., expected\_narg = ...)

## Value

a `Column` representing name applied to cols with funs
