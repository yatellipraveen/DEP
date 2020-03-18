// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript

//Extract Nested Object Refernce

Object.prototype.hash = function(string) {
  let tokenList = string.split(".");
  let innerObject = this;
  for (let i = 0; i < tokenList.length; i++) {
    if (innerObject[tokenList[i]] === undefined) {
      return undefined;
    }
    innerObject = innerObject[tokenList[i]];
  }
  return innerObject;
};
