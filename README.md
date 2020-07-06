# Icy-Js
#### It's a Cool waY of coding
Icy Js is a JavaScript framework which extends the JS arithmetic operations to perform some tasks in a clever way.

With Icy you can add, subtract, multiply or divide anything together.
For example, you can add a string to an array like:
```javascript
["a", "b", "c"] + "d"
```
or you can just as well delete a property from an object:
```javascript
{a:1, b:2, c:3, d:4} - "d"
```
> At present Icy does not yet support multiplication or division operations.
> These functionalities will be add to the framework very soon...

Icy Js exposes all its functionalities through a single function. Which is intuitively named ``` I() ```.
Eg:-
```javascript
I(`{a:1, b:2, c:3, d:4} + {e:5, f:6}`)
//result
{a:1, b:2, c:3, d:4, e:5, f:6}
```
## Multiple Expressions
You can write multiple expressions within the ```I()``` function.
Eg:-
```javascript
I(`1+1+(8+"a")`)
//result "28a"
or
I(`1+2+4+[]+8`)
//result [7, 8]
```
Try experimenting with Icy and find more fun stuff!

****
In a future version, I also wish to release a feature to this framework, which will allow Icy expressions to work like normal JavaScript expressions(i.e, without the I() function).

Icy is in its initial phases of development. Please stay tuned and provide your support and contributions to this growing framework.
