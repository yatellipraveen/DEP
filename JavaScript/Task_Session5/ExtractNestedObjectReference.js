// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript

//Extract Nested Object Refernce

Object.prototype.hash = function(string) {
  let tokenList = string.split(".");
  let innerObject = this;
  for (let index = 0; index < tokenList.length; index++) {
    if (innerObject[tokenList[index]] === undefined) {
      return undefined;
    }
    innerObject = innerObject[tokenList[index]];
  }
  return innerObject;
};
