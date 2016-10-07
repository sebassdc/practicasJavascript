function lowercaseCount(str){
  lowercase = "abcdefghijklmnñopqrstuvwxyz"
  l = str.length
  c = 0;
  for(var i = 0; i < l; i++){
    a = lowercase.search(str.charAt(i));
    if(a >= 0){
      c++;
    }
  }
  return c;
}

console.log(lowercaseCount("abc"));
console.log(lowercaseCount("abcABC123"));
