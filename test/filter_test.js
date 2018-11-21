const assert = require('assert');
const {filter} = require('../src/collection_operations.js');

//Filterer function
const isEven = function(number){
  return number % 2 == 0;
}

describe("filter", function(){
  it("Should return an empty array", function(){
    assert.deepEqual(filter(isEven, []), []);
    assert.deepEqual(filter(isEven, [1]), []);
    assert.deepEqual(filter(isEven, [1,3]), []);
  });

  it("Should return array of even numbers", function(){
    assert.deepEqual(filter(isEven, [1,2,3]), [2]);
    assert.deepEqual(filter(isEven, [2,3,4,5,100,0]), [2,4,100,0]);
  });
});
