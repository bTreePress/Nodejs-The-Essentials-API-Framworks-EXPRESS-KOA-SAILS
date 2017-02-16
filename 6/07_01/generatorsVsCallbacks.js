`An iterator is an object that is used to traverse a container object like a list. In JavaScript, an iterator object is not a distinct built-in object, but is an object that implements a next method to access the next item in the container object. ... Generators are a type of function that is a factory for iterators.`

var fs = require('co-fs');
var co = require('co');
console.log('before');
co(function*(){
    var data = yield fs.readFile('./data1.json','utf-8');
    console.log(data);
})
console.log('after');

