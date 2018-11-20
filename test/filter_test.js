const assert = require('assert');
const {filter} = require('../src/collection_operations.js');

//Filterer function
const isEven = function(number){
  return number % 2 == 0;
}

const testFilter = function(filterer, input, expectedOutput){
  assert.deepEqual(filter(filterer, input), expectedOutput);
}

testFilter(isEven, [], []);
testFilter(isEven, [1], []);
testFilter(isEven, [1,3], []);
testFilter(isEven, [1,2,3], [2]);
testFilter(isEven, [2,3,4,5,100,0], [2,4,100,0]);
