function GetSum(a, b){
  if (a > b) {
    a=a+b;
    b=a-b;
    a=a-b;
  }
  c = 0;
  for (var i = a; i <= b; i++){
    c += i;
  }
  return c
}

console.log(GetSum(3, 1));
