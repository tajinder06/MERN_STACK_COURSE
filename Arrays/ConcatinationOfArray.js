let arr = [1, 2, 3, 4];
let brr = [5, 6, 7, 8];

let crr = [arr, brr];
console.log(crr);

let drr = [...arr, ...brr];
console.log(drr);

let concat = arr.concat(brr);
console.log(concat);
