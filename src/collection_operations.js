const map = function(collection, mapper){
  let result = new Array();
  for(let item of collection){
    let mappedItem = mapper(item);
    result.push(mappedItem);
  }
  return result;
}

exports.map = map;
