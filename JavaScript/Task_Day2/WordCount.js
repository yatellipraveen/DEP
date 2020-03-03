//https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript

//WordCount

function countWords(givenString) {
  // ...
  givenString = givenString.trim();
  return givenString === "" ? 0 : givenString.split(/\s+/).length;
}
