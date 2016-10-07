function findMin(array) {
    var min = Infinity;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
function removeSmallest(numbers) {
  var min = findMin(numbers);
  var index = numbers.indexOf(min);
  numbers.splice(index, 1);
  return numbers;
}

console.log(removeSmallest([1,2,3,4,5])); // [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4])); // [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])); // [2,2,2,1]
