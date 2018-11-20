const map = function(mapper, collection){
  let result = new Array();
  for(let item of collection){
    let mappedItem = mapper(item);
    result.push(mappedItem);
  }
  return result;
}

const filter = function(filterer, collection){
  let result = new Array();
  for(let item of collection){
    if(filterer(item)){
      result.push(item);
    }
  }
  return result;
}

const reduce = function(reducer, collection, initializer){
  let result = collection[0];
  let currentIndex = 1;
  if(initializer != undefined){
    result = initializer;
    currentIndex = 0;
  }
  while(currentIndex < collection.length){
    result = reducer(result, collection[currentIndex]);
    currentIndex++;
  }
  return result;
}

exports.map = map;
exports.reduce = reduce;
exports.filter = filter;
