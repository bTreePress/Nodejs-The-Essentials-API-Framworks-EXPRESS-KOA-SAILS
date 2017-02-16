function* generator() {
	yield 'hello';
	yield 'world';
};

var iter = generator();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next());

