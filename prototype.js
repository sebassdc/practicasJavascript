Array.prototype.all = function (p) {
  for(var i = 0; i < this.length; i++){
    if(!p(this[i])) return false;
  }
  return true;
};

Array.prototype.none = function (p) {
  for(var i = 0; i < this.length; i++){
    if(p(this[i])) return false;
  }
  return true;
};

Array.prototype.any = function (p) {
  for(var i = 0; i < this.length; i++){
    if(p(this[i])) return true;
  }
  return false;
};
function isGreaterThanZero (num) {
  return num > 0;
}

function isLessThanZero (num) {
  return num < 0;
}

console.log([-1, 2, 3].any(isGreaterThanZero)); // true
console.log([-1, -2, -3].any(isGreaterThanZero)); // false
