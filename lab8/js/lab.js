// index.js - purpose and description here
// Author: JC Toringan
// Date: 31 October 2024

//

function isCrazy(x){
    return (x % 2 == 0);
}

// test function
console.log("Is 1 Crazy?", isCrazy(1) );
console.log("Is 40000?", isCrazy(40000) );

array = [100, 81, 4, 16, 42, 144, 100000]
console.log("My array", array);
var result = array.map(isCrazy)
// should return [true, false, true, true, true, ture, ture]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})
// should return [10, 9, 2, 4, 6.48074069840786, 12, 316.22776601683796]
console.log("Squareroot of array:", result);