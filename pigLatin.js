function pigIt(str){
  return str.split(" ").map(function(o){
    return o.substring(1,o.length) + o.substring(0,1) +"ay";
  }).join(" ");
}

//console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Pig latin is cool")); // ttesay
