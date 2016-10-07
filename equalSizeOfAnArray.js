var sum = function (a, b) {
  return a + b
};
function findEvenIndex (arr) {
  for (var i = 1; i < arr.length; i += 1) {
    var a = arr.slice(0,i);
    var b = arr.slice(i+1, arr.length)
    if (a.reduce(sum, 0) == b.reduce(sum, 0)) {
      return i
    }
  }
  return - 1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
