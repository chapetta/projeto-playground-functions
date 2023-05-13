// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = array[0];
  let counter = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > higherNumber) {
      higherNumber = array[index];
      counter = 1;
    } else if (array[index] === higherNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  console.log(dist1, dist2);

  if (dist1 < dist2) {
    return 'cat1';
  } if (dist1 > dist2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  let result = [];
  for (let number of array) {
    switch (true) {
    case number % 5 === 0 && number % 3 === 0:
      result.push('fizzBuzz');
      break;
    case number % 3 === 0:
      result.push('fizz');
      break;
    case number % 5 === 0:
      result.push('buzz');
      break;
    default:
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
function encode(string) {
  let newString = '';
  for (let letter of string) {
    if (letter === 'a') {
      newString += '1';
    } else if (letter === 'e') {
      newString += '2';
    } else if (letter === 'i') {
      newString += '3';
    } else if (letter === 'o') {
      newString += '4';
    } else if (letter === 'u') {
      newString += '5';
    } else {
      newString += letter;
    }
  }
  return newString;
}
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
function decode(string) {
  let newString = '';
  for (let letter of string) {
    if (letter === '1') {
      newString += 'a';
    } else if (letter === '2') {
      newString += 'e';
    } else if (letter === '3') {
      newString += 'i';
    } else if (letter === '4') {
      newString += 'o';
    } else if (letter === '5') {
      newString += 'u';
    } else {
      newString += letter;
    }
  }
  return newString;
}

// Desafio 10
function techList(array, name) {
  array.sort();
  let arrayObj = [];
  for (let index = 0; index < array.length; index += 1) {
    arrayObj.push({ tech: array[index], name });
  }
  return arrayObj.length > 0 ? arrayObj : 'Vazio!';
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
