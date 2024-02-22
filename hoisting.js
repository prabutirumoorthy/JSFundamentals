//Variable and function hoisting

console.log(x); // Output: undefined //it shoud be not define since JS internally move this variable declarartions at top


console.log(typeof m); // Output: "number"

var m;

example();
function example() {
    console.log('example function hoisted'); // Output: undefined
    console.log(x)  
    console.log(typeof x);
}

var examplefunctionHoisted = function () {
    console.log('examplefunctionHoisted function hoisted'); // Output: undefined
    console.log(x)  
    console.log(typeof x);
}

examplefunctionHoisted();
var x;


x=10;
  