function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  var a = new Date(currentDate);
  var b = new Date(expirationDate);
  return (enteredCode == correctCode && a <= b)
}
