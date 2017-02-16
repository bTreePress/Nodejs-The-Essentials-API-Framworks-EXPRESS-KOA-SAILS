`Generators compute their yielded values on demand, which allows them to efficiently represent sequences that are expensive to compute, or even infinite sequences as demonstrated above.

The next()method also accepts a value which can be used to modify the internal state of the generator. A value passed to next()will be treated as the result of the last yield expression that paused the generator.

Here is the fibonacci generator using next(x)to restart the sequence`
function * fibonacci() {
  var fn1 = 0; 
  var fn2 = 1; 
  while (true) {
    var current = fn1; 
    fn1 = fn2; 
    fn2 = current + fn1; 
    var reset = yield current; 
    if (reset) {
        fn1 = 0; 
        fn2 = 1; 
    }
  }
}

var sequence = fibonacci(); 
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2