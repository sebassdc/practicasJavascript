Plugboard=function(wires){
  //your code here
  this.con = wires.length/2;
  this.conections = {};
  for(var i = 0; i < this.con; i++){
    this.conections[wires[0]] = wires[1];
    this.conections[wires[1]] = wires[0];
    wires = wires.slice(2, wires.lentgh);
  }
  self = this

  this.process = function(wire){
    if(self.conections[wire]){
      return self.conections[wire];
    }else{
      return wire;
    }
  }
}

maincra = new Plugboard("ABCDEFGHIJKLMN");

console.log(maincra)
console.log(maincra.process('B'));
console.log(maincra.process('C'));
console.log(maincra.process('X'));
