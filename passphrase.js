function rot (c, n) { // Rotate a character in a circular way (only uppercase acepted)
  var num = c.toUpperCase().charCodeAt(0) + n;
  if (num > 90) num -= 26;
  if (num < 65) num += 25;
  return String.fromCharCode(num);
}

function playPass(s, n) {
  var c_aux = '';
  var s_aux = '';
  var l = s.length;
  var num = 0;
  for (var i = 0; i < l; i += 1) {
    var char = s[i];

    // looking for alphabetic characters
    if (char.match(/[A-Za-z]/)) {
      c_aux = rot(char, n);

      // if is odd downcase the letter
      if (i % 2 != 0) c_aux = c_aux.toLowerCase();

    // Looking for digits
    } else if (char.match(/\d/)) {
      c_aux = Math.abs(eval(char) - 9);
    } else { // Default case
      c_aux = char;
    }

    // Concatenate the string
    s_aux += c_aux;
  }
  // Simply return the reversed string
  return s_aux.split('').reverse().join('');
}

console.log(playPass("Esto es una prueba", 1));
