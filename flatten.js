var flatten = function (array){
  l = array.length;
  for (var i = 0; i < array.length; i++) {
    console.log(typeof array[i])
  }
}


console.log(flatten([])); //[]
console.log(flatten([1, 2, 3]));// [1, 2, 3]
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])); //  [1, 2, 3, "a", "b", "c", 1, 2, 3]
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])); // [3, 4, 5, [9, 9, 9], "a,b,c"]
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])); // [[3], [4], [5], 9, 9, 8, [1, 2, 3]]
