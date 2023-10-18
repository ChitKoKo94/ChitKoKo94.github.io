Array.prototype.even = function() { return this.filter(i => i % 2 === 0)};
console.log([1,2,3,4,5,6,7,8].even());

Array.prototype.odd = function() { return this.filter(i => i % 2 !== 0)};
console.log([1,2,3,4,5,6,7,8].odd());
