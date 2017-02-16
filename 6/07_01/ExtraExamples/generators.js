`While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generators provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function which can maintain its own state.

A generator is a special type of function that works as a factory for iterators. A function becomes a generator if it contains one or more yield expressions and if it uses the function* syntax.

Why is this cool? well now as long as your current program is running like below yor gaurenteed to never get the same id twice because the idMaker is maintaining its own state. 
`

function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...