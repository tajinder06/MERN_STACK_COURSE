let obj = {
  sport1: 'cricket',
  sport2: 'football',
  sport3: 'hockey',
};

let keys = Object.keys(obj);
console.log(keys);

let values = Object.values(obj);
console.log(values);

let keyValues = Object.entries(obj);
console.log(keyValues);

let hasOwn = Object.hasOwnProperty('cricket');
console.log(hasOwn);
