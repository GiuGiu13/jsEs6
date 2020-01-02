/* CHALLENGE 12 - Copy Array

Create copy of the a array.
*/

"use strict";

// var a = [1, 2, 3, [4, 5]];
var a = [1, 2, 3];

var b;

// b = a.slice();
b = [...a];

b.push("newElement");
// b[3].push(6);

//Copy array here

console.log(a);

// [1, 2, 3]


console.log(b);
// [1, 2, 3, "newElement"]
