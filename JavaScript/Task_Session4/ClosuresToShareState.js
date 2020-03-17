//https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript

//Using closures to share class state

var Cat = (function() {
  let averageWeight = 0;
  let totalInstances = 0;
  function Cat(catName, catWeight) {
    if (!catName || !catWeight) throw new error();
    let _weight = catWeight;
    averageWeight = averageWeight + catWeight;
    totalInstances++;
    Object.defineProperty(this, "name", {
      value: catName
    });
    Object.defineProperty(this, "weight", {
      get: function() {
        return _weight;
      },
      set: function(value) {
        averageWeight = averageWeight + value - _weight;
        _weight = value;
      }
    });
  }

  Cat.averageWeight = function() {
    return averageWeight / totalInstances;
  };
  return Cat;
})();
