// Desafio 11
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    let counter = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[index] === array[i]) {
        counter += 1;
      }
    }
    if (array[index] > 9 || array[index] < 0 || counter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  const areaCode = array.splice(0, 2).join('');
  const prefix = array.splice(0, 5).join('');
  const sufix = array.splice(0, 4).join('');
  return `(${areaCode}) ${prefix}-${sufix}`;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
