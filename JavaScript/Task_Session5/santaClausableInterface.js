// /https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

//santa clausable interface

function isSantaClausable(object) {
  if (
    typeof object.sayHoHoHo === "function" &&
    typeof object.distributeGifts === "function" &&
    typeof object.goDownTheChimney === "function"
  ) {
    return true;
  } else {
    return false;
  }
}
