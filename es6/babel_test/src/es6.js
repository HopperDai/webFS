const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr = [...arr1, ...arr2];

const total = arr.reduce((tmp, item) => tmp + item);
console.log(total);