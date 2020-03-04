//https://www.codewars.com/kata/525a037c82bf42b9f800029b/train/javascript

//Partition on

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value

function partitionOn(pred, givenItems) {
  var falseArray = givenItems.filter(value => {
    return pred(value) === false ? true : false;
  });
  var trueArray = givenItems.filter(pred);
  var falseArrayLength = falseArray.length;

  //deleting all items from the given list
  givenItems.splice(0);
  Array.prototype.push.apply(falseArray, trueArray);

  //falseArray here is the total result array obtained from the above operation.
  Array.prototype.push.apply(givenItems, falseArray);

  return falseArrayLength;
}
