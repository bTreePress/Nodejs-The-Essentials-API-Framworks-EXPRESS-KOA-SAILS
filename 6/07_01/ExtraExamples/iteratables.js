`An object is iterable if it defines its iteration behavior, such as what values are looped over in a for..of construct. Some built-in types, such as Array or Map, have a default iteration behavior, while other types (such as Object) do not.

In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its prototype chain) must have a property with a Symbol.iterator key:
--------------------------
User-defined iterables
--------------------------
We can make our own iterables like this:`
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

for(let value of myIterable){ 
    console.log(value); 
}
// 1
// 2
// 3

//or

[...myIterable] // [1, 2, 3]
console.log([...myIterable] )