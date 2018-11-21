const assert = require('assert');
const {map} = require('../src/collection_operations.js');

// Function to use in map as mapper
const square = function(number){
  return number * number;
}

describe("map", function(){
  it("Should return an empty array", function(){
    assert.deepEqual(map(square, []), []);
  });

  it("Should return array with one mapped element", function(){
    assert.deepEqual(map(square, [0]), [0]);
    assert.deepEqual(map(square, [1]), [1]);
  });

  it("Should return array with multiple mapped elements", function(){
    assert.deepEqual(map(square, [2,1]), [4,1]);
    assert.deepEqual(map(square, [2,3,4,5]), [4,9,16,25]);
  });
});
