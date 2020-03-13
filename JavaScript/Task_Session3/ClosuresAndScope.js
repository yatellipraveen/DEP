//https://www.codewars.com/kata/closures-and-scopes/train/javascript

//Closures and Scopes

function createFunctions(size) {
  var callbacks = Array();
  for (let iterator = 0; iterator < size; iterator++) {
    callbacks.push(function() {
      return iterator;
    });
  }

  return callbacks;
}
