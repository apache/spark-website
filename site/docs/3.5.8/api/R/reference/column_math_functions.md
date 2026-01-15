# Math functions for Column operations

Math functions defined for `Column`.

## Usage

``` r
bin(x)

bround(x, ...)

cbrt(x)

ceil(x)

conv(x, fromBase, toBase)

cot(x)

csc(x)

hex(x)

hypot(y, x)

ln(x)

pmod(y, x)

rint(x)

sec(x)

shiftLeft(y, x)

shiftleft(y, x)

shiftRight(y, x)

shiftright(y, x)

shiftRightUnsigned(y, x)

shiftrightunsigned(y, x)

signum(x)

degrees(x)

toDegrees(x)

radians(x)

toRadians(x)

unhex(x)

width_bucket(v, min, max, numBucket)

# S4 method for class 'Column'
abs(x)

# S4 method for class 'Column'
acos(x)

# S4 method for class 'Column'
acosh(x)

# S4 method for class 'Column'
asin(x)

# S4 method for class 'Column'
asinh(x)

# S4 method for class 'Column'
atan(x)

# S4 method for class 'Column'
atanh(x)

# S4 method for class 'Column'
bin(x)

# S4 method for class 'Column'
cbrt(x)

# S4 method for class 'Column'
ceil(x)

# S4 method for class 'Column'
ceiling(x)

# S4 method for class 'Column'
cos(x)

# S4 method for class 'Column'
cosh(x)

# S4 method for class 'Column'
cot(x)

# S4 method for class 'Column'
csc(x)

# S4 method for class 'Column'
exp(x)

# S4 method for class 'Column'
expm1(x)

# S4 method for class 'Column'
factorial(x)

# S4 method for class 'Column'
floor(x)

# S4 method for class 'Column'
hex(x)

# S4 method for class 'Column'
log(x)

# S4 method for class 'Column'
ln(x)

# S4 method for class 'Column'
log10(x)

# S4 method for class 'Column'
log1p(x)

# S4 method for class 'Column'
log2(x)

# S4 method for class 'Column,Column,Column,Column'
width_bucket(v, min, max, numBucket)

# S4 method for class 'Column'
rint(x)

# S4 method for class 'Column'
round(x)

# S4 method for class 'Column'
bround(x, scale = 0)

# S4 method for class 'Column'
signum(x)

# S4 method for class 'Column'
sign(x)

# S4 method for class 'Column'
sin(x)

# S4 method for class 'Column'
sinh(x)

# S4 method for class 'Column'
sqrt(x)

# S4 method for class 'Column'
tan(x)

# S4 method for class 'Column'
tanh(x)

# S4 method for class 'Column'
toDegrees(x)

# S4 method for class 'Column'
degrees(x)

# S4 method for class 'Column'
toRadians(x)

# S4 method for class 'Column'
radians(x)

# S4 method for class 'Column'
unhex(x)

# S4 method for class 'Column'
atan2(y, x)

# S4 method for class 'Column'
hypot(y, x)

# S4 method for class 'Column'
pmod(y, x)

# S4 method for class 'Column,numeric'
shiftleft(y, x)

# S4 method for class 'Column,numeric'
shiftLeft(y, x)

# S4 method for class 'Column,numeric'
shiftright(y, x)

# S4 method for class 'Column,numeric'
shiftRight(y, x)

# S4 method for class 'Column,numeric'
shiftrightunsigned(y, x)

# S4 method for class 'Column,numeric'
shiftRightUnsigned(y, x)

# S4 method for class 'Column,numeric,numeric'
conv(x, fromBase, toBase)

# S4 method for class 'Column'
sec(x)
```

## Arguments

  - x:
    
    Column to compute on. In `shiftLeft`, `shiftRight` and
    `shiftRightUnsigned`, this is the number of bits to shift.

  - ...:
    
    additional argument(s).

  - fromBase:
    
    base to convert from.

  - toBase:
    
    base to convert to.

  - y:
    
    Column to compute on.

  - v:
    
    value to compute a bucket number in the histogram.

  - min:
    
    minimum value of the histogram

  - max:
    
    maximum value of the histogram

  - numBucket:
    
    the number of buckets

  - scale:
    
    round to `scale` digits to the right of the decimal point when
    `scale` \> 0, the nearest even number when `scale` = 0, and `scale`
    digits to the left of the decimal point when `scale` \< 0.

## Details

`abs`: Computes the absolute value.

`acos`: Returns the inverse cosine of the given value, as if computed by
`java.lang.Math.acos()`

`acosh`: Computes inverse hyperbolic cosine of the input column.

`asin`: Returns the inverse sine of the given value, as if computed by
`java.lang.Math.asin()`

`asinh`: Computes inverse hyperbolic sine of the input column.

`atan`: Returns the inverse tangent of the given value, as if computed
by `java.lang.Math.atan()`

`atanh`: Computes inverse hyperbolic tangent of the input column.

`bin`: Returns the string representation of the binary value of the
given long column. For example, bin("12") returns "1100".

`cbrt`: Computes the cube-root of the given value.

`ceil`: Computes the ceiling of the given value.

`ceiling`: Alias for `ceil`.

`cos`: Returns the cosine of the given value, as if computed by
`java.lang.Math.cos()`. Units in radians.

`cosh`: Returns the hyperbolic cosine of the given value, as if computed
by `java.lang.Math.cosh()`.

`cot`: Returns the cotangent of the given value.

`csc`: Returns the cosecant of the given value.

`exp`: Computes the exponential of the given value.

`expm1`: Computes the exponential of the given value minus one.

`factorial`: Computes the factorial of the given value.

`floor`: Computes the floor of the given value.

`hex`: Computes hex value of the given column.

`log`: Computes the natural logarithm of the given value.

`ln`: Alias for `log`.

`log10`: Computes the logarithm of the given value in base 10.

`log1p`: Computes the natural logarithm of the given value plus one.

`log2`: Computes the logarithm of the given column in base 2.

`width_bucket` Returns the bucket number into which the value of this
expression would fall after being evaluated. Note that input arguments
must follow conditions listed below; otherwise, the method will return
null.

`rint`: Returns the double value that is closest in value to the
argument and is equal to a mathematical integer.

`round`: Returns the value of the column rounded to 0 decimal places
using HALF\_UP rounding mode.

`bround`: Returns the value of the column `e` rounded to `scale` decimal
places using HALF\_EVEN rounding mode if `scale` \>= 0 or at integer
part when `scale` \< 0. Also known as Gaussian rounding or bankers'
rounding that rounds to the nearest even number. bround(2.5, 0) = 2,
bround(3.5, 0) = 4.

`signum`: Computes the signum of the given value.

`sign`: Alias for `signum`.

`sin`: Returns the sine of the given value, as if computed by
`java.lang.Math.sin()`. Units in radians.

`sinh`: Returns the hyperbolic sine of the given value, as if computed
by `java.lang.Math.sinh()`.

`sqrt`: Computes the square root of the specified float value.

`tan`: Returns the tangent of the given value, as if computed by
`java.lang.Math.tan()`. Units in radians.

`tanh`: Returns the hyperbolic tangent of the given value, as if
computed by `java.lang.Math.tanh()`.

`toDegrees`: Converts an angle measured in radians to an approximately
equivalent angle measured in degrees.

`degrees`: Converts an angle measured in radians to an approximately
equivalent angle measured in degrees.

`toRadians`: Converts an angle measured in degrees to an approximately
equivalent angle measured in radians.

`radians`: Converts an angle measured in degrees to an approximately
equivalent angle measured in radians.

`unhex`: Inverse of hex. Interprets each pair of characters as a
hexadecimal number and converts to the byte representation of number.

`atan2`: Returns the angle theta from the conversion of rectangular
coordinates (x, y) to polar coordinates (r, theta), as if computed by
`java.lang.Math.atan2()`. Units in radians.

`hypot`: Computes "sqrt(a^2 + b^2)" without intermediate overflow or
underflow.

`pmod`: Returns the positive value of dividend mod divisor. Column `x`
is divisor column, and column `y` is the dividend column.

`shiftleft`: Shifts the given value numBits left. If the given value is
a long value, this function will return a long value else it will return
an integer value.

`shiftLeft`: Shifts the given value numBits left. If the given value is
a long value, this function will return a long value else it will return
an integer value.

`shiftright`: (Signed) shifts the given value numBits right. If the
given value is a long value, it will return a long value else it will
return an integer value.

`shiftRight`: (Signed) shifts the given value numBits right. If the
given value is a long value, it will return a long value else it will
return an integer value.

`shiftrightunsigned`: (Unsigned) shifts the given value numBits right.
If the given value is a long value, it will return a long value else it
will return an integer value.

`shiftRightUnsigned`: (Unsigned) shifts the given value numBits right.
If the given value is a long value, it will return a long value else it
will return an integer value.

`conv`: Converts a number in a string column from one base to another.

`sec`: Returns the secant of the given value.

## Note

abs since 1.5.0

acos since 1.5.0

acosh since 3.1.0

asin since 1.5.0

asinh since 3.1.0

atan since 1.5.0

atanh since 3.1.0

bin since 1.5.0

cbrt since 1.4.0

ceil since 1.5.0

ceiling since 1.5.0

cos since 1.5.0

cosh since 1.5.0

cot since 3.3.0

csc since 3.3.0

exp since 1.5.0

expm1 since 1.5.0

factorial since 1.5.0

floor since 1.5.0

hex since 1.5.0

log since 1.5.0

ln since 3.5.0

log10 since 1.5.0

log1p since 1.5.0

log2 since 1.5.0

width\_bucket since 3.5.0

rint since 1.5.0

round since 1.5.0

bround since 2.0.0

signum since 1.5.0

sign since 1.5.0

sin since 1.5.0

sinh since 1.5.0

sqrt since 1.5.0

tan since 1.5.0

tanh since 1.5.0

toDegrees since 1.4.0

degrees since 3.0.0

toRadians since 1.4.0

radians since 3.0.0

unhex since 1.5.0

atan2 since 1.5.0

hypot since 1.4.0

pmod since 1.5.0

shiftleft since 3.2.0

shiftLeft since 1.5.0

shiftright since 3.2.0

shiftRight since 1.5.0

shiftrightunsigned since 3.2.0

shiftRightUnsigned since 1.5.0

conv since 1.5.0

sec since 3.3.0

## Examples

``` r
if (FALSE) { # \dontrun{
# Dataframe used throughout this doc
df <- createDataFrame(cbind(model = rownames(mtcars), mtcars))
tmp <- mutate(df, v1 = log(df$mpg), v2 = cbrt(df$disp),
                  v3 = bround(df$wt, 1), v4 = bin(df$cyl),
                  v5 = hex(df$wt), v6 = degrees(df$gear),
                  v7 = atan2(df$cyl, df$am), v8 = hypot(df$cyl, df$am),
                  v9 = pmod(df$hp, df$cyl), v10 = shiftLeft(df$disp, 1),
                  v11 = conv(df$hp, 10, 16), v12 = sign(df$vs - 0.5),
                  v13 = sqrt(df$disp), v14 = ceil(df$wt))
head(tmp)} # }
```
