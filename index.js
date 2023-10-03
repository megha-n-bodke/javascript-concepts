/* 
 map()

- map is es5 feature.
 array.map(function(currentValue, index(optional), arr(optional)), thisvalue)
 - return type is array.
 - USE: to transform array.

 */

const arr = [2, 4, 5, 7];

const output = arr.map((num) => num / 2);
console.log(output);
