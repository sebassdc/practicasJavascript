var sum_pairs=function(ints, s){
  var number = 0;
  var ocurrences = [];
  for(var i = 0; i < ints.length; i++){
    for(var j = 0; j < ints.length; j++){
      number = ints[i] + ints[j];
      if(number == s && i != j){
        var data = {
          index: [i, j],
          numbers: [ints[i], ints[j]]
        };
        ocurrences.push(data);
      }
    }
  }
  return ocurrences;
}



console.log(sum_pairs([10, 5, 2, 3, 7, 5],10));
