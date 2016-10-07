function layers(n){
  return 1 +n*2;
}
function tower(n){
  if (n == 0) return 0;
  return tower(n-1) + layers(n)*layers(n);
}
console.log(tower(4));
