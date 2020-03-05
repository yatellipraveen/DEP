function createFunctions(size) {
  var callbacks = Array();
  for (let iterator = 0; iterator < size; iterator++) {
    callbacks.push(function() {
      return iterator;
    });
  }

  return callbacks;
}
