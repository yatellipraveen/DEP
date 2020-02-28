//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

//Calculating with functinos
//seven(times(five()))

function zero(param) {
  if (param) {
    return param(0);
  } else return 0;
}
function one(param) {
  if (param) {
    return param(1);
  } else return 1;
}
function two(param) {
  if (param) {
    return param(2);
  } else return 2;
}
function three(param) {
  if (param) {
    return param(3);
  } else return 3;
}
function four(param) {
  if (param) {
    return param(4);
  } else return 4;
}
function five(param) {
  if (param) {
    return param(5);
  } else return 5;
}
function six(param) {
  if (param) {
    return param(6);
  } else return 6;
}
function seven(param) {
  if (param) {
    return param(7);
  } else return 7;
}
function eight(param) {
  if (param) {
    return param(8);
  } else return 8;
}
function nine(param) {
  if (param) {
    return param(9);
  } else return 9;
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
