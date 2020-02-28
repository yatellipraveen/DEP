//https://www.codewars.com/kata/525a037c82bf42b9f800029b/train/javascript

//Partition on

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value

function partitionOn(pred, items) {
  var temp_arr_1 = items.filter((val, index, items) => {
    if (pred(val) == false) return true;
    else return false;
  });
  var temp_arr_2 = items.filter(pred);
  var len = temp_arr_1.length;
  items.splice(0);
  Array.prototype.push.apply(temp_arr_1, temp_arr_2);
  Array.prototype.push.apply(items, temp_arr_1);

  return len;
}
