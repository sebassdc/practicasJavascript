// dada una palabra str la primera letra debe ir al final + ay
function factorial(n){
  if(n == 0) return 1;
  return factorial(n - 1) * n;
}

function main(){
  console.log(factorial(1000)); // 5
}


main();
