
//https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript

//WordCount

function countWords(str) {
    // ...
    str=str.trim();
    if(str=="")return 0;
    return str.split(/\s+/).length;
  }