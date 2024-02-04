let arr = [1, 2, 3, 4];
let brr = [5, 6, 7, 8];

let crr = [arr, brr];
console.log(crr);

let drr = [...arr, ...brr];
console.log(drr);

let concat = arr.concat(brr);
console.log(concat);

// some static methods of arrays

let array = [1, 2, 3, 4, 5, 6];

let isArray = Array.isArray(array);
console.log(isArray);

let a = 5;
let b = 6;
let c = 7;

let arrof = Array.of(a, b, c);
console.log(arrof);
