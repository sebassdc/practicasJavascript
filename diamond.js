function strMultiplier(s, n){
  a = "";
  for(var i = 0; i < n; i++){
    a += s;
  }
  return a;
}
function asterisc(n){
  return strMultiplier("*", n);
}
function center(s, l){
  spaces = (l - s.length) / 2;
  cad = strMultiplier(" ", spaces) + s;
  return cad;
}
function diamond(n){
  diam = "";
  if(n % 2 == 0 || n <= 0){
    return null;
  }
  for (var i = 1; i <= n; i=i+2) {
    diam += center(asterisc(i), n) + "\n";
  }
  var j = n;
  while(j > 0){
    j -= 2;
    diam += center(asterisc(j), n) + "\n";
  }
  return diam;
}

console.log(diamond(1));
