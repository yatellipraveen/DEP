//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

//Get the Middles Character

function getMiddle(str) {
  var len = str.length;
  if (len % 2 == 0) return str.substring(len / 2 - 1, len / 2 + 1);
  else return str.substring(len / 2, len / 2 + 1);
}
