function baseChange(number, base){
  var Numero = new Number(number);
  var Base = new Number(base);
  return(Numero.toString(Base))
}
function addBinary(a,b){
  c = a+b
  return baseChange(c, 2);
}

console.log(addBinary(1,2));
