function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  square = Math.sqrt(sq);
  if(Number.isInteger(square)){
    return Math.pow(square+1, 2);
  }
  return -1;
}

console.log(findNextSquare(121));
