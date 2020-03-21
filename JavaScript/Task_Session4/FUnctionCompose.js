//https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript

//Function Compose

function compose() {
  let functionArgs = arguments;
  return function(param) {
    let result = param;
    for (let iterator = functionArgs.length - 1; iterator >= 0; iterator--) {
      result = functionArgs[iterator](result);
    }
    return result;
  };
}
