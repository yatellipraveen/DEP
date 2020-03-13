//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

// Chain Adding Function

function add(sum) {
  let addFunction = function(value) {
    return add(sum + value);
  };
  addFunction.valueOf = function() {
    return sum;
  };
  return addFunction;
}
