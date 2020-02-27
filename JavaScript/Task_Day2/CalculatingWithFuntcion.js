//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

//Calculating with functinos
//seven(times(five()))

var arr=Array(3);
var index=2;
function zero() { arr[index--]=0; return util() }
function one() { arr[index--]=1; return util()}
function two() { arr[index--]=2; return util()}
function three() { arr[index--]=3; return util()}
function four() { arr[index--]=4; return util()}
function five() { arr[index--]=5; return util()}
function six() { arr[index--]=6; return util()}
function seven() { arr[index--]=7; return util()}
function eight() { arr[index--]=8; return util()}
function nine() { arr[index--]=9; return util()}

function plus() { arr[index--]="+" }
function minus() { arr[index--]="-" }
function times() { arr[index--]="*" }
function dividedBy() { arr[index--]="/" }

function util(){
    if(index==-1){
      index=2;
      return Math.floor(eval(arr.join('')))
    }
}