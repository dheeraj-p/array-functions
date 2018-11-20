const assert = require('assert');
const {map} = require('../src/collection_operations.js');

// Function to use in map as mapper
const square = function(number){
  return number * number;
}

const testMap = function(input, mapper, expectedOutput){
  assert.deepEqual(map(input, mapper), expectedOutput);
}

testMap([], square, []);
testMap([0], square, [0]);
testMap([1], square, [1]);
testMap([2,1], square, [4,1]);
testMap([2,3,4,5], square, [4,9,16,25]);

