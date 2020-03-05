//https://www.codewars.com/kata/54129112fb7c188740000162/solutions/javascript

//Prefill array

function prefill(arrayLength, value) {
  isValidLength(arrayLength);
  if (arrayLength == 0) {
    return [];
  }

  var prefillArray = new Array(Math.floor(arrayLength));
  prefillArray.fill(value);
  console.log(prefillArray);
  return prefillArray;
}

function isValidLength(arrayLength) {
  if (
    isNaN(arrayLength) ||
    arrayLength < 0 ||
    Math.floor(arrayLength) != arrayLength ||
    typeof arrayLength === "boolean" ||
    arrayLength === Infinity
  ) {
    throw new TypeError(arrayLength + " is invalid");
  }
}
