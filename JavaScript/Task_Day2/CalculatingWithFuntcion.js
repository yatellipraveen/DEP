//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

//Calculating with functinos
//seven(times(five()))

function zero(param) {
  return param ? param(0) : 0;
}
function one(param) {
  return param ? param(1) : 1;
}
function two(param) {
  return param ? param(2) : 2;
}
function three(param) {
  return param ? param(3) : 3;
}
function four(param) {
  return param ? param(4) : 4;
}
function five(param) {
  return param ? param(5) : 5;
}
function six(param) {
  return param ? param(6) : 6;
}
function seven(param) {
  return param ? param(7) : 7;
}
function eight(param) {
  return param ? param(8) : 8;
}
function nine(param) {
  return param ? param(9) : 9;
}

function plus(value1) {
  return function(value2) {
    return value1 + value2;
  };
}
function minus(value1) {
  return function(value2) {
    return value2 - value1;
  };
}
function times(value1) {
  return function(value2) {
    return value1 * value2;
  };
}
function dividedBy(value1) {
  return function(value2) {
    return Math.floor(value2 / value1);
  };
}
