const assert = require('assert');
const {reduce} = require('../src/collection_operations.js');

//Reducer function
const sum = function(a,b){
  return a+b;
}

describe("reduce",function(){
  it("Should return undefined without initializer", function(){
    assert.equal(reduce(sum, []), undefined);
  });

  it("Should return initializer for empty array", function(){
    assert.equal(reduce(sum, [], 0), 0);
  });

  it("Should return reduced value of single element array", function(){
    assert.equal(reduce(sum, [1]),1);
    assert.equal(reduce(sum, [0]),0);
  });

  it("Should return reduced value of multiple element array", function(){
    assert.equal(reduce(sum, [1,0]),1);
    assert.equal(reduce(sum, [1,1,4,5]),11);
  });
});
