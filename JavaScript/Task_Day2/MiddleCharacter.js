//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

//Get the Middles Character

function getMiddle(str) {
  var stringLength = str.length;
  if (stringLength % 2 === 0) {
    return str.substring(stringLength / 2 - 1, stringLength / 2 + 1);
  } else {
    return str.substring(stringLength / 2, stringLength / 2 + 1);
  }
}
