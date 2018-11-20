const assert = require('assert');
const {reduce} = require('../src/collection_operations.js');

//Reducer function
const sum = function(a,b){
  return a+b;
}

const testReduce = function(reducer, input, expectedOutput, initializer){
  assert.deepEqual(reduce(reducer, input, initializer), expectedOutput);
}

testReduce(sum, [], 0, 0);
testReduce(sum, [1], 1);
testReduce(sum, [1,0], 1);
testReduce(sum, [1,1,4,5], 11);
testReduce(sum, [0], 0);
