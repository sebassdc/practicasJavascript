function subpattern(n){
  if(n > 1) {
    a = "1";
  }else{
    a = "";
  }
  for (var i = 0; i < n-1; i++) {
    a += "*"
  }
  return a += n.toString();
}
function pattern(n){
 var output="";
  //being coder
  for(var i = 1; i <= n; i++){
    output += subpattern(i);
    if(i == n) break;
    output += "\n";
  }
 return output;
}
console.log(pattern(3));
