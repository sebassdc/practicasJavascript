// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// I found an humiliant solution
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
var findOdd = function (xs) {
  return xs.reduce(function (a, b) {
    var lol = a ^ b;
    console.log(lol);
    return lol;
  });
}

// My solution
// function findOdd (arr) {
//   // declaring variables
//   var len = arr.length;
//   var ocurr = {};
//   var s_aux = '';
//   // lets loop through the array
//   for (i in arr) {
//     s_aux = arr[i].toString(); // make the common index for ocurr
//
//     // if exist increase the ocurrence number
//     // else create the new field
//     if (ocurr[s_aux]) {
//       ocurr[s_aux] += 1;
//     } else {
//       ocurr[s_aux] = 1;
//     }
//   }
//   // loop through ocurr
//   for (j in ocurr) {
//     if(ocurr[j] % 2 != 0) return eval(j); // if find an even ocurrence returns the number
//   }
// }


console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
// console.log(findOdd([10])); // 10;
// console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])); // 1
