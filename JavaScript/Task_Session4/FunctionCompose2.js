//codewars.com/kata/5421c6a2dda52688f6000af8/train/javascript

//Function Compose

function compose(functionOne, functionTwo) {
  return function(...args) {
    return functionOne(functionTwo.apply(this, args));
  };
}
