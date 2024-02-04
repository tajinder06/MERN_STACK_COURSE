let num = 123.02343;

let str = num.toString();
console.log(str);

let fixed = num.toFixed();
console.log(fixed);

let precision = num.toPrecision(2);
console.log(precision);

let exponential = num.toExponential();
console.log(exponential);

let locale = num.toLocaleString();
console.log(locale);

let value = num.valueOf();
console.log('Value is : ', value);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
