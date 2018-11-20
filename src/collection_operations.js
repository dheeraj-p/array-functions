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

exports.map = map;
exports.filter = filter;
