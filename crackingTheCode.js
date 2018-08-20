function crackingTheCode(code) {
  const words = code.split(' ');
  let decoded = '';
  words.forEach(function(word) {
    if (word[0] === 'a') {
      decoded += word[1];
    } else if (word[0] === 'b') {
      decoded += word[2];
    } else if (word[0] === 'c') {
      decoded += word[3];
    } else if (word[0] === 'd') {
      decoded += word[4];
    } else {
      decoded += ' ';
    }
  })

  return decoded;
}

console.log(crackingTheCode('craft block argon meter bells brown croon droop'));