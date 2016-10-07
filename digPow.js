function digPow(n, p){
  digits = n.toString().split('');
  super_number = powArray(digits, p);
  var criter = 500;
  for(var i = 1; i < criter; i++){
    tested = n * i;
    if(tested == super_number) return i;
  }
  return -1;
}

function powArray(arra, p){
  var len = arra.length
  var acum = 0;
  for(var i = 0; i < len; i++){
    acum += Math.pow(arra[i], p);
    p++;
  }
  return acum;
}
console.log(digPow(46288, 3));
