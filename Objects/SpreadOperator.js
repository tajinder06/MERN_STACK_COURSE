let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

let obj2 = {
  d: 4,
  e: 5,
  f: 6,
};

let obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj3);
