const assert = require('assert');
const {map} = require('../src/collection_operations.js');

// Function to use in map as mapper
const square = function(number){
  return number * number;
}

describe("map", function(){
  it("Should return an empty array when empty array mapped", function(){
    assert.deepEqual(map(square, []), []);
  });

  it("Should return array of length one when a single element array mapped", function(){
    assert.deepEqual(map(square, [0]), [0]);
  });

  it("Should preserve the length with multiple element input array", function(){
    assert.deepEqual(map(square, [2,3,4,5]), [4,9,16,25]);
  });
});
