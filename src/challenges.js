// Desafio 1

function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3

function splitSentence(phraseSplit) {
  let array = [];
  array = phraseSplit.split(' ');
  return array;
}

// Desafio 4

function concatName(concatPhrase) {
  let string = '';
  string += concatPhrase[concatPhrase.length - 1];
  string += ', ';
  string += concatPhrase[0];
  return string;
}

// Desafio 5

function footballPoints(wins, ties) {
  let soma = 0;

  soma += (wins * 3) + ties;

  return soma;
}

// Desafio 6 - COMPLEXIDADE

function highestCount(array) {
  let maiorNum = 0;
  let count = 0;
  for (let key in array) {
    let pivo = array[key];
    for (let num of array) {
      if (pivo < 0) { maiorNum = pivo; }
      if (pivo > num && pivo > maiorNum) {
        maiorNum = pivo;
      }
    }
  }
  for (let key of array) {
    if (maiorNum === key) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let countCat1 = Math.abs(cat1 - mouse);
  let countCat2 = Math.abs(cat2 - mouse);

  if (countCat1 !== countCat2) {
    if (countCat1 < countCat2) {
      return 'cat1';
    }
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - COMPLEXIDADE

function fizzBuzz(array) {
  let newArray = [];
  for (let key of array) {
    if ((key % 3 === 0) && (key % 5 === 0)) {
      newArray.push('fizzBuzz');
    } else
    if (key % 3 === 0) {
      newArray.push('fizz');
    } else
    if (key % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9 - O lint não reclama mas ainda acho que tem como refatorar...

function encode(frase) {
  return frase.replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
}

function decode(string) {
  return string.replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
}

// Desafio 10

function techList(tecno, pessoa) {
  // seu código aqui
  if (tecno.length !== 0) {
    let res = [];
    tecno.sort();

    for (let key of tecno) {
      let obj = {
        tech: key,
        name: pessoa,
      };
      res.push(obj);
    }

    return res;
  }

  return 'Vazio!';
}
