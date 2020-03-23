// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
//Array Helpers

Array.prototype.square = function() {
  let squareArray = new Array();
  this.forEach(element => squareArray.push(element * element));
  return squareArray;
};

Array.prototype.cube = function() {
  let cubeArray = new Array();
  this.forEach(element => cubeArray.push(element * element * element));
  return cubeArray;
};

Array.prototype.average = function() {
  let average = 0;
  this.forEach(element => (average += element));
  return average / this.length;
};

Array.prototype.sum = function() {
  let sum = 0;
  this.forEach(element => (sum += element));
  return sum;
};

Array.prototype.even = function() {
  let evenArray = this.filter(element => element % 2 === 0);
  return evenArray;
};

Array.prototype.odd = function() {
  let oddArray = this.filter(element => element % 2 === 1);
  return oddArray;
};
