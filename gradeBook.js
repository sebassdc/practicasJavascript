function getGrade(s1, s2, s3){
  score = (s1 + s2 + s3)/3
  if (score < 60) {
    return 'F'
  }else if (score < 70) {
    return 'D'
  }else if (score < 80) {
    return 'C'
  }else if (score < 90) {
    return 'B'
  }else{
    return 'A'
  }
}

console.log(getGrade(95,90,93));
