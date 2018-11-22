const assert = require('assert');
const {filter} = require('../src/collection_operations.js');

//Filterer function
const isEven = function(number){
  return number % 2 == 0;
}

describe("filter", function(){
  it("Should return an empty array for empty input array", function(){
    assert.deepEqual(filter(isEven, []), []);
  });

  it("Should return an array of elements for which the predicate is returning false", function(){
    assert.deepEqual(filter(isEven, [1,3]), []);
  });

  it("Should return an array of elements for which the predicate is returning true", function(){
    assert.deepEqual(filter(isEven, [2,3,4,5,100,0]), [2,4,100,0]);
  });

  it("Should return same array as input when predicate is returning true for all elements", function(){
    assert.deepEqual(filter(isEven, [2,3,4,5,100,0]), [2,4,100,0]);
  });
});
