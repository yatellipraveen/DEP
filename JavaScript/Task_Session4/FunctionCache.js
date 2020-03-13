//https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript

//Function Cache

function cache(func) {
  let cacheObject = {};
  let cacheArray = new Array();

  return function test(value1, value2) {
    let argumentArray = new Array();
    argumentArray.push(value1);
    argumentArray.push(value2);
    let argsKey = JSON.stringify(argumentArray);
    if (cacheArray.includes(argsKey)) {
      return cacheObject[argsKey];
    } else {
      cacheArray.push(argsKey);
      cacheObject[argsKey] = func(value1, value2);
      return cacheObject[argsKey];
    }
  };
}
