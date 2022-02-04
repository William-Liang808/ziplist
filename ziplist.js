const _ = require('underscore');

function zipList(arr1, arr2) {
  const finalArr = [];
  let biggestIndex = 0;
  if (arr1.length >= arr2.length) {
    biggestIndex = arr1.length;
  }
  biggestIndex = arr2.length;
  for (let i = 0; i < biggestIndex; i++) {
    finalArr.push(arr1.shift());
    finalArr.push(arr2.shift());
  }
  return finalArr;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
