const _ = require('underscore');

let result = _.contains([1,2,3], 3);
console.log(result);

let people = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
let getAge = _.pluck(people, 'age');
let minAge = _.min(getAge);

console.log(derive);
console.log(`Minimum age is: ${minAge}`);


