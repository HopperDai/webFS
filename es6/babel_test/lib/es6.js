"use strict";

var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];
var arr = [].concat(arr1, arr2);

var total = arr.reduce(function (tmp, item) {
  return tmp + item;
});
console.log(total);